import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const departments = await prisma.department.findMany({
      include: {
        parent: {
          select: {
            id: true,
            name: true
          }
        },
        children: {
          select: {
            id: true,
            name: true
          }
        },
        users: {
          select: {
            id: true,
            name: true,
            position: true,
            role: true
          }
        },
        _count: {
          select: {
            users: true,
            children: true
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    })

    return NextResponse.json(departments)
  } catch (error) {
    console.error('Error fetching departments:', error)
    return NextResponse.json(
      { error: 'Failed to fetch departments' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, parentId, headId } = body

    // Validate required fields
    if (!name) {
      return NextResponse.json(
        { error: 'Department name is required' },
        { status: 400 }
      )
    }

    const department = await prisma.department.create({
      data: {
        name,
        parentId: parentId || null,
        headId: headId || null
      },
      include: {
        parent: {
          select: {
            id: true,
            name: true
          }
        },
        users: {
          select: {
            id: true,
            name: true,
            position: true,
            role: true
          }
        }
      }
    })

    return NextResponse.json(department, { status: 201 })
  } catch (error) {
    console.error('Error creating department:', error)
    return NextResponse.json(
      { error: 'Failed to create department' },
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
        { error: 'Department ID is required' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const { name, parentId, headId } = body

    const department = await prisma.department.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(parentId !== undefined && { parentId }),
        ...(headId !== undefined && { headId })
      },
      include: {
        parent: {
          select: {
            id: true,
            name: true
          }
        },
        users: {
          select: {
            id: true,
            name: true,
            position: true,
            role: true
          }
        }
      }
    })

    return NextResponse.json(department)
  } catch (error) {
    console.error('Error updating department:', error)
    return NextResponse.json(
      { error: 'Failed to update department' },
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
        { error: 'Department ID is required' },
        { status: 400 }
      )
    }

    // Check if department has users or child departments
    const departmentWithData = await prisma.department.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            users: true,
            children: true
          }
        }
      }
    })

    if (!departmentWithData) {
      return NextResponse.json(
        { error: 'Department not found' },
        { status: 404 }
      )
    }

    if (departmentWithData._count.users > 0 || departmentWithData._count.children > 0) {
      return NextResponse.json(
        { error: 'Cannot delete department with users or child departments' },
        { status: 400 }
      )
    }

    await prisma.department.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Department deleted successfully' })
  } catch (error) {
    console.error('Error deleting department:', error)
    return NextResponse.json(
      { error: 'Failed to delete department' },
      { status: 500 }
    )
  }
} 