import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        department: {
          select: {
            id: true,
            name: true
          }
        },
        manager: {
          select: {
            id: true,
            name: true,
            position: true
          }
        },
        employees: {
          select: {
            id: true,
            name: true,
            position: true
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
        },
        _count: {
          select: {
            ownedObjectives: true,
            keyResults: true,
            employees: true
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    })

    // Calculate progress for each objective
    const usersWithProgress = users.map(user => ({
      ...user,
      ownedObjectives: user.ownedObjectives.map(objective => {
        const totalKeyResults = objective.keyResults.length
        if (totalKeyResults === 0) {
          return { ...objective, progress: 0, status: 'NOT_STARTED' }
        }

        const totalProgress = objective.keyResults.reduce((sum, kr) => {
          const progress = kr.targetValue > 0 ? (kr.currentValue / kr.targetValue) * 100 : 0
          return sum + Math.min(progress, 100)
        }, 0)

        const averageProgress = Math.round(totalProgress / totalKeyResults)
        
        // Determine status based on progress
        let status = 'NOT_STARTED'
        if (averageProgress >= 100) {
          status = 'COMPLETED'
        } else if (averageProgress > 0) {
          status = 'IN_PROGRESS'
        }

        return { ...objective, progress: averageProgress, status }
      })
    }))

    return NextResponse.json(usersWithProgress)
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, password, role, position, departmentId, managerId } = body

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      )
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password, // In production, this should be hashed
        role: role || 'STAFF',
        position: position || null,
        departmentId: departmentId || null,
        managerId: managerId || null,
        active: true
      },
      include: {
        department: {
          select: {
            id: true,
            name: true
          }
        },
        manager: {
          select: {
            id: true,
            name: true,
            position: true
          }
        }
      }
    })

    // Remove password from response
    const { password: _password, ...userResponse } = user
    return NextResponse.json(userResponse, { status: 201 })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json(
      { error: 'Failed to create user' },
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
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const { name, email, role, position, departmentId, managerId, active } = body

    const user = await prisma.user.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        ...(role && { role }),
        ...(position !== undefined && { position }),
        ...(departmentId !== undefined && { departmentId }),
        ...(managerId !== undefined && { managerId }),
        ...(active !== undefined && { active })
      },
      include: {
        department: {
          select: {
            id: true,
            name: true
          }
        },
        manager: {
          select: {
            id: true,
            name: true,
            position: true
          }
        }
      }
    })

    // Remove password from response
    const { password: _password2, ...userResponse } = user
    return NextResponse.json(userResponse)
  } catch (error) {
    console.error('Error updating user:', error)
    return NextResponse.json(
      { error: 'Failed to update user' },
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
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    // Check if user has objectives or key results
    const userWithData = await prisma.user.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            ownedObjectives: true,
            keyResults: true,
            employees: true
          }
        }
      }
    })

    if (!userWithData) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // If user has data, deactivate instead of delete
    if (userWithData._count.ownedObjectives > 0 || 
        userWithData._count.keyResults > 0 || 
        userWithData._count.employees > 0) {
      await prisma.user.update({
        where: { id },
        data: { active: false }
      })
      return NextResponse.json({ message: 'User deactivated (has associated data)' })
    } else {
      await prisma.user.delete({
        where: { id }
      })
      return NextResponse.json({ message: 'User deleted successfully' })
    }
  } catch (error) {
    console.error('Error deleting user:', error)
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    )
  }
} 