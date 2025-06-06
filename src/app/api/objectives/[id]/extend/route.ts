import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { Session } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions) as Session | null
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Type assertion for session user with our custom properties
    const user = session.user as { id: string; role: string; email: string; name: string }

    // Only admins and managers can extend deadlines
    if (user.role !== 'ADMIN' && user.role !== 'MANAGER') {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 })
    }

    const { extendedDeadline, extensionReason, missedReason } = await request.json()

    if (!extendedDeadline || !extensionReason) {
      return NextResponse.json({ 
        error: 'Extended deadline and extension reason are required' 
      }, { status: 400 })
    }

    const objectiveId = context.params.id

    // Get the current objective with its cycle
    const currentObjective = await prisma.objective.findUnique({
      where: { id: objectiveId },
      include: { cycle: true }
    })

    if (!currentObjective) {
      return NextResponse.json({ error: 'Objective not found' }, { status: 404 })
    }

    // Update the objective with extension details
    const updatedObjective = await prisma.objective.update({
      where: { id: objectiveId },
      data: {
        wasMissed: true,
        originalEndDate: currentObjective.originalEndDate || currentObjective.cycle.endDate,
        extendedDeadline: new Date(extendedDeadline),
        extensionReason,
        missedReason: missedReason || null,
        dateExtended: new Date(),
        extendedBy: user.id,
        status: 'EXTENDED' as const
      },
      include: {
        owner: true,
        cycle: true,
        keyResults: true
      }
    })

    // Create notification for the objective owner
    await prisma.notification.create({
      data: {
        type: 'NEW_ASSIGNMENT',
        title: 'Objective Deadline Extended',
        message: `Your objective "${currentObjective.title}" has been given a new deadline: ${new Date(extendedDeadline).toLocaleDateString()}`,
        userId: currentObjective.ownerId,
        actionUrl: `/dashboard/manage?filter=extended`
      }
    })

    return NextResponse.json(updatedObjective)

  } catch (error) {
    console.error('Error extending deadline:', error)
    return NextResponse.json({ 
      error: 'Failed to extend deadline' 
    }, { status: 500 })
  }
} 