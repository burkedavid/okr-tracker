import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const cycles = await prisma.cycle.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        startDate: true,
        endDate: true,
        active: true
      },
      orderBy: {
        startDate: 'desc'
      }
    })

    return NextResponse.json(cycles)
  } catch (error) {
    console.error('Error fetching cycles:', error)
    return NextResponse.json(
      { error: 'Failed to fetch cycles' },
      { status: 500 }
    )
  }
} 