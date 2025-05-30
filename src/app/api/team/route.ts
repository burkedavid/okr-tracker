import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const managerId = searchParams.get('managerId')
    const departmentId = searchParams.get('departmentId')

    if (!managerId && !departmentId) {
      return NextResponse.json(
        { error: 'Manager ID or Department ID is required' },
        { status: 400 }
      )
    }

    let whereClause: any = {}

    if (managerId) {
      // Get team members who report to this manager
      whereClause = {
        managerId: managerId
      }
    } else if (departmentId) {
      // Get all users in the department
      whereClause = {
        departmentId: departmentId
      }
    }

    const teamMembers = await prisma.user.findMany({
      where: whereClause,
      select: {
        id: true,
        name: true,
        email: true,
        position: true,
        role: true,
        department: {
          select: {
            id: true,
            name: true
          }
        },
        ownedObjectives: {
          include: {
            cycle: {
              select: {
                id: true,
                name: true,
                active: true
              }
            },
            keyResults: {
              select: {
                id: true,
                description: true,
                currentValue: true,
                targetValue: true,
                unit: true,
                metricType: true
              }
            },
            owner: {
              select: {
                id: true,
                name: true,
                position: true
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    })

    // Calculate progress for each objective
    const teamMembersWithProgress = teamMembers.map(member => ({
      ...member,
      ownedObjectives: member.ownedObjectives.map(objective => {
        const totalKeyResults = objective.keyResults.length
        if (totalKeyResults === 0) {
          return { ...objective, progress: 0 }
        }

        const totalProgress = objective.keyResults.reduce((sum, kr) => {
          const progress = kr.targetValue > 0 ? (kr.currentValue / kr.targetValue) * 100 : 0
          return sum + Math.min(progress, 100)
        }, 0)

        const averageProgress = Math.round(totalProgress / totalKeyResults)
        return { ...objective, progress: averageProgress }
      })
    }))

    return NextResponse.json(teamMembersWithProgress)
  } catch (error) {
    console.error('Error fetching team data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch team data' },
      { status: 500 }
    )
  }
} 