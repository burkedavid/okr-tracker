import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Status } from '@prisma/client'

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
    const { id, description, targetValue, currentValue, unit, ownerId } = body

    if (!id) {
      return NextResponse.json(
        { error: 'Missing key result ID' },
        { status: 400 }
      )
    }

    // Prepare update data, ensuring we don't set null values
    const updateData = {
      updatedAt: new Date(),
      ...(description != null ? { description } : {}),
      ...(targetValue != null ? { targetValue: parseFloat(targetValue) } : {}),
      ...(currentValue != null ? { currentValue: parseFloat(currentValue) } : {}),
      ...(unit != null ? { unit } : {}),
      ...(ownerId != null ? { ownerId } : {}),
    };

    const keyResult = await prisma.keyResult.update({
      where: { id },
      data: updateData,
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
            id: true,
            title: true
          }
        }
      }
    })

    // Recalculate and persist parent objective status
    if (keyResult.objective?.id) {
      const allKeyResults = await prisma.keyResult.findMany({
        where: { objectiveId: keyResult.objective.id },
      });
      const totalKeyResults = allKeyResults.length;
      let averageProgress = 0;
      if (totalKeyResults > 0) {
        averageProgress =
          allKeyResults.reduce((sum, kr) => {
            const progress = kr.targetValue > 0 ? (kr.currentValue / kr.targetValue) * 100 : 0;
            return sum + Math.min(progress, 100);
          }, 0) / totalKeyResults;
      }
      // Use Prisma Status enum for type safety
      let newStatus: Status = Status.NOT_STARTED;
      if (totalKeyResults > 0) {
        if (averageProgress >= 100) {
          newStatus = Status.COMPLETED;
        } else if (averageProgress > 0) {
          newStatus = Status.IN_PROGRESS;
        }
      }
      await prisma.objective.update({
        where: { id: keyResult.objective.id },
        data: { status: newStatus },
      });
    }

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