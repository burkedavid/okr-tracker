import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ keyResultId: string }> }
) {
  try {
    const { keyResultId } = await params

    if (!keyResultId) {
      return NextResponse.json(
        { error: 'Key result ID is required' },
        { status: 400 }
      )
    }

    // Fetch all progress updates for this key result
    const progressUpdates = await prisma.progressUpdate.findMany({
      where: {
        keyResultId: keyResultId,
      },
      include: {
        createdBy: {
          select: {
            name: true,
            email: true,
            position: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc' // Most recent first
      }
    })

    return NextResponse.json(progressUpdates)
  } catch (error) {
    console.error('Error fetching progress history:', error)
    return NextResponse.json(
      { error: 'Failed to fetch progress history' },
      { status: 500 }
    )
  }
}
