import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const progressUpdates = await prisma.progressUpdate.findMany({
      include: {
        keyResult: {
          select: {
            description: true,
            id: true,
            objective: {
              select: {
                title: true,
                id: true
              }
            }
          }
        },
        createdBy: {
          select: {
            name: true,
            email: true,
            position: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(progressUpdates)
  } catch (error) {
    console.error('Error fetching progress updates:', error)
    return NextResponse.json(
      { error: 'Failed to fetch progress updates' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { value, notes, keyResultId, createdById } = body

    // Validate required fields and value type
    const numericValue = typeof value === 'string' ? parseFloat(value) : value
    if (
      numericValue === undefined || Number.isNaN(numericValue) ||
      !keyResultId || !createdById
    ) {
      return NextResponse.json(
        { error: 'Invalid or missing fields: value (number), keyResultId, createdById' },
        { status: 400 }
      )
    }

    // Create progress update
    const progressUpdate = await prisma.progressUpdate.create({
      data: {
        value: numericValue,
        notes: notes || null,
        keyResultId,
        createdById,
      },
      include: {
        keyResult: {
          select: {
            description: true,
            id: true,
            objective: {
              select: {
                title: true,
                id: true
              }
            }
          }
        },
        createdBy: {
          select: {
            name: true,
            email: true,
            position: true
          }
        }
      }
    })

    // Update the key result's current value
    await prisma.keyResult.update({
      where: { id: keyResultId },
      data: {
        currentValue: parseFloat(value),
        updatedAt: new Date()
      }
    })

    return NextResponse.json(progressUpdate, { status: 201 })
  } catch (error) {
    console.error('Error creating progress update:', error)
    return NextResponse.json(
      { error: 'Failed to create progress update' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const { id, value, notes } = body

    const numericValue = typeof value === 'string' ? parseFloat(value) : value

    if (!id) {
      return NextResponse.json(
        { error: 'Missing progress update ID' },
        { status: 400 }
      )
    }

    const progressUpdate = await prisma.progressUpdate.update({
      where: { id },
      data: {
        ...(value !== undefined && { value: numericValue }),
        ...(notes !== undefined && { notes }),
      },
      include: {
        keyResult: {
          select: {
            description: true,
            id: true,
            objective: {
              select: {
                title: true,
                id: true
              }
            }
          }
        },
        createdBy: {
          select: {
            name: true,
            email: true,
            position: true
          }
        }
      }
    })

    // If value was updated, also update the key result's current value
    if (value !== undefined) {
      await prisma.keyResult.update({
        where: { id: progressUpdate.keyResultId },
        data: {
          currentValue: numericValue,
          updatedAt: new Date()
        }
      })
    }

    return NextResponse.json(progressUpdate)
  } catch (error) {
    console.error('Error updating progress update:', error)
    return NextResponse.json(
      { error: 'Failed to update progress update' },
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
        { error: 'Missing progress update ID' },
        { status: 400 }
      )
    }

    await prisma.progressUpdate.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Progress update deleted successfully' })
  } catch (error) {
    console.error('Error deleting progress update:', error)
    return NextResponse.json(
      { error: 'Failed to delete progress update' },
      { status: 500 }
    )
  }
} 