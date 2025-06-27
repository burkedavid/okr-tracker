import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const objectives = await prisma.objective.findMany({
      include: {
        owner: {
          select: {
            name: true,
            email: true,
            position: true
          }
        },
        keyResults: {
          include: {
            owner: {
              select: {
                id: true,
                name: true,
                email: true,
                position: true
              }
            },
            progressUpdates: {
              orderBy: {
                createdAt: 'desc'
              },
              take: 1
            }
          }
        },
        cycle: true,
        _count: {
          select: {
            keyResults: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Define key result type for better type safety
    interface KeyResult {
      id: string;
      targetValue: number;
      currentValue: number;
    }

    // Define objective type with key results


    // Calculate progress for each objective
    const objectivesWithProgress = objectives.map((objective) => {
      const totalKeyResults = objective.keyResults.length
      const completedKeyResults = objective.keyResults.filter((kr: KeyResult) => {
        const progress = kr.targetValue > 0 ? (kr.currentValue / kr.targetValue) * 100 : 0
        return progress >= 100
      }).length

      const averageProgress = totalKeyResults > 0 
        ? objective.keyResults.reduce((sum: number, kr: KeyResult) => {
            const progress = kr.targetValue > 0 ? (kr.currentValue / kr.targetValue) * 100 : 0
            return sum + Math.min(progress, 100)
          }, 0) / totalKeyResults
        : 0

      // Determine status based on progress
      let status = objective.status
      if (totalKeyResults > 0) {
        if (averageProgress >= 100) {
          status = 'COMPLETED'
        } else if (averageProgress > 0) {
          status = 'IN_PROGRESS'
        } else if (status === 'NOT_STARTED' && averageProgress > 0) {
          status = 'IN_PROGRESS'
        }
      }

      return {
        ...objective,
        progress: Math.round(averageProgress),
        completedKeyResults,
        totalKeyResults,
        status: status // Update the status based on progress
      }
    })

    return NextResponse.json(objectivesWithProgress)
  } catch (error) {
    console.error('Error fetching objectives:', error)
    return NextResponse.json(
      { error: 'Failed to fetch objectives' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, description, type, ownerId, cycleId, parentId } = body

    // Validate required fields
    if (!title || !ownerId || !cycleId) {
      return NextResponse.json(
        { error: 'Title, owner, and cycle are required' },
        { status: 400 }
      )
    }

    const objective = await prisma.objective.create({
      data: {
        title,
        description,
        type: type || 'PERSONAL',
        ownerId,
        cycleId,
        parentId: parentId || null,
        status: 'NOT_STARTED'
      },
      include: {
        owner: {
          select: {
            name: true,
            email: true,
            position: true
          }
        },
        cycle: true,
        keyResults: true
      }
    })

    return NextResponse.json(objective, { status: 201 })
  } catch (error) {
    console.error('Error creating objective:', error)
    return NextResponse.json(
      { error: 'Failed to create objective' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json(
        { error: 'Objective ID is required' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const { title, description, type, status, ownerId, cycleId, parentId } = body

    const objective = await prisma.objective.update({
      where: { id },
      data: {
        ...(title !== undefined && title !== null && { title }),
        ...(description !== undefined && description !== null && { description }),
        ...(type !== undefined && type !== null && { type }),
        ...(status !== undefined && status !== null && { status }),
        ...(ownerId !== undefined && ownerId !== null && { ownerId }),
        ...(cycleId !== undefined && cycleId !== null && { cycleId }),
        ...(parentId !== undefined && parentId !== null && { parentId }),
      },
      include: {
        owner: {
          select: {
            name: true,
            email: true,
            position: true
          }
        },
        cycle: true,
        keyResults: true
      }
    })

    return NextResponse.json(objective)
  } catch (error) {
    console.error('Error updating objective:', error)
    return NextResponse.json(
      { error: 'Failed to update objective' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json(
        { error: 'Objective ID is required' },
        { status: 400 }
      )
    }

    await prisma.objective.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Objective deleted successfully' })
  } catch (error) {
    console.error('Error deleting objective:', error)
    return NextResponse.json(
      { error: 'Failed to delete objective' },
      { status: 500 }
    )
  }
} 