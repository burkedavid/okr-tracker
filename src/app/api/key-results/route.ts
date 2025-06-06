import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const keyResults = await prisma.keyResult.findMany({
      include: {
        owner: {
          select: {
            name: true,
            email: true,
            position: true
          }
        },
        objective: {
          select: {
            title: true,
            id: true
          }
        },
        progressUpdates: {
          orderBy: {
            createdAt: 'desc'
          },
          take: 5,
          include: {
            createdBy: {
              select: {
                name: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Calculate progress for each key result
    const keyResultsWithProgress = keyResults.map(kr => {
      const progress = kr.targetValue > 0 ? (kr.currentValue / kr.targetValue) * 100 : 0
      return {
        ...kr,
        progress: Math.min(Math.round(progress), 100)
      }
    })

    return NextResponse.json(keyResultsWithProgress)
  } catch (error) {
    console.error('Error fetching key results:', error)
    return NextResponse.json(
      { error: 'Failed to fetch key results' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { description, metricType, targetValue, unit, objectiveId, ownerId } = body

    // Validate required fields
    if (!description || !metricType || !targetValue || !objectiveId || !ownerId) {
      return NextResponse.json(
        { error: 'Missing required fields: description, metricType, targetValue, objectiveId, ownerId' },
        { status: 400 }
      )
    }

    const keyResult = await prisma.keyResult.create({
      data: {
        description,
        metricType,
        targetValue: parseFloat(targetValue),
        currentValue: 0,
        unit: unit || null,
        objectiveId,
        ownerId,
      },
      include: {
        owner: {
          select: {
            name: true,
            email: true,
            position: true
          }
        },
        objective: {
          select: {
            title: true,
            id: true
          }
        }
      }
    })

    return NextResponse.json(keyResult, { status: 201 })
  } catch (error) {
    console.error('Error creating key result:', error)
    return NextResponse.json(
      { error: 'Failed to create key result' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const { id, description, targetValue, currentValue, unit } = body

    if (!id) {
      return NextResponse.json(
        { error: 'Missing key result ID' },
        { status: 400 }
      )
    }

    const keyResult = await prisma.keyResult.update({
      where: { id },
      data: {
        ...(description && { description }),
        ...(targetValue !== undefined && { targetValue: parseFloat(targetValue) }),
        ...(currentValue !== undefined && { currentValue: parseFloat(currentValue) }),
        ...(unit !== undefined && { unit }),
        updatedAt: new Date()
      },
      include: {
        owner: {
          select: {
            name: true,
            email: true,
            position: true
          }
        },
        objective: {
          select: {
            title: true,
            id: true
          }
        }
      }
    })

    return NextResponse.json(keyResult)
  } catch (error) {
    console.error('Error updating key result:', error)
    return NextResponse.json(
      { error: 'Failed to update key result' },
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
        { error: 'Missing key result ID' },
        { status: 400 }
      )
    }

    await prisma.keyResult.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Key result deleted successfully' })
  } catch (error) {
    console.error('Error deleting key result:', error)
    return NextResponse.json(
      { error: 'Failed to delete key result' },
      { status: 500 }
    )
  }
} 