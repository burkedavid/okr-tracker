import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(_request: NextRequest) {
  try {
    // Check if database is already set up
    const existingUsers = await prisma.user.count()
    if (existingUsers > 0) {
      return NextResponse.json({ 
        message: 'Database already initialized',
        users: existingUsers 
      })
    }

    // Clear existing data (just in case)
    await prisma.progressUpdate.deleteMany()
    await prisma.keyResult.deleteMany()
    await prisma.objective.deleteMany()
    await prisma.cycle.deleteMany()
    await prisma.user.deleteMany()
    await prisma.department.deleteMany()

    // Create departments
    const qaAutomation = await prisma.department.create({
      data: {
        name: 'QA Automation',
      },
    })

    // Create users with fresh password hashes
    const hashedPassword = await bcrypt.hash('password123', 12)

    const davidBurke = await prisma.user.create({
      data: {
        email: 'david.burke@company.com',
        name: 'David Burke',
        password: hashedPassword,
        role: 'MANAGER',
        position: 'Test Automation Manager',
        departmentId: qaAutomation.id,
      },
    })

    const kevinHughes = await prisma.user.create({
      data: {
        email: 'kevin.hughes@company.com',
        name: 'Kevin Hughes',
        password: hashedPassword,
        role: 'STAFF',
        position: 'QA Automation Engineer 1',
        departmentId: qaAutomation.id,
        managerId: davidBurke.id,
      },
    })

    const shelleyRogan = await prisma.user.create({
      data: {
        email: 'shelley.rogan@company.com',
        name: 'Shelley Rogan',
        password: hashedPassword,
        role: 'STAFF',
        position: 'QA Automation Engineer 1',
        departmentId: qaAutomation.id,
        managerId: davidBurke.id,
      },
    })

    const allanPettigrew = await prisma.user.create({
      data: {
        email: 'allan.pettigrew@company.com',
        name: 'Allan Pettigrew',
        password: hashedPassword,
        role: 'STAFF',
        position: 'QA Automation Engineer 1',
        departmentId: qaAutomation.id,
        managerId: davidBurke.id,
      },
    })

    // Create active cycle
    const q2_2025 = await prisma.cycle.create({
      data: {
        name: 'Q2 2025',
        description: 'Advanced automation and quality improvement',
        startDate: new Date('2025-04-01'),
        endDate: new Date('2025-06-30'),
        active: true,
      },
    })

    // Create sample objectives
    const cypressObjective = await prisma.objective.create({
      data: {
        title: 'Implement Comprehensive Cypress Test Automation Framework',
        description: 'Build and deploy a robust end-to-end testing framework using Cypress for all critical user journeys',
        type: 'TEAM',
        status: 'IN_PROGRESS',
        ownerId: davidBurke.id,
        cycleId: q2_2025.id,
      },
    })

    // Create key results
    await prisma.keyResult.create({
      data: {
        description: 'Achieve 80% test coverage across all critical user flows',
        metricType: 'PERCENTAGE',
        targetValue: 80,
        currentValue: 45,
        unit: '%',
        objectiveId: cypressObjective.id,
        ownerId: kevinHughes.id,
      },
    })

    await prisma.keyResult.create({
      data: {
        description: 'Reduce manual testing time by 50%',
        metricType: 'PERCENTAGE',
        targetValue: 50,
        currentValue: 25,
        unit: '%',
        objectiveId: cypressObjective.id,
        ownerId: shelleyRogan.id,
      },
    })

    await prisma.keyResult.create({
      data: {
        description: 'Train 4 team members on Cypress automation',
        metricType: 'NUMBER',
        targetValue: 4,
        currentValue: 2,
        unit: 'people',
        objectiveId: cypressObjective.id,
        ownerId: allanPettigrew.id,
      },
    })

    return NextResponse.json({ 
      message: 'Database initialized successfully!',
      users: [
        { email: 'david.burke@company.com', role: 'MANAGER' },
        { email: 'kevin.hughes@company.com', role: 'STAFF' },
        { email: 'shelley.rogan@company.com', role: 'STAFF' },
        { email: 'allan.pettigrew@company.com', role: 'STAFF' }
      ],
      password: 'password123'
    })

  } catch (error) {
    console.error('Database setup error:', error)
    return NextResponse.json(
      { error: 'Failed to initialize database', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const userCount = await prisma.user.count()
    const objectiveCount = await prisma.objective.count()
    const cycleCount = await prisma.cycle.count()
    
    return NextResponse.json({
      status: userCount > 0 ? 'initialized' : 'not_initialized',
      users: userCount,
      objectives: objectiveCount,
      cycles: cycleCount
    })
  } catch {
    return NextResponse.json(
      { error: 'Failed to check database status' },
      { status: 500 }
    )
  }
}
