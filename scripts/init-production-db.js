const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function initializeDatabase() {
  try {
    console.log('🚀 Starting database initialization...')

    // Check if users already exist
    const existingUsers = await prisma.user.count()
    if (existingUsers > 0) {
      console.log('✅ Database already has users. Skipping initialization.')
      return
    }

    console.log('📝 Creating demo users...')

    // Hash passwords
    const hashedPassword = await bcrypt.hash('password123', 12)

    // Create users
    const manager = await prisma.user.create({
      data: {
        email: 'david.burke@company.com',
        name: 'David Burke',
        password: hashedPassword,
        role: 'MANAGER',
        position: 'QA Manager',
        active: true
      }
    })

    const staff1 = await prisma.user.create({
      data: {
        email: 'kevin.hughes@company.com',
        name: 'Kevin Hughes',
        password: hashedPassword,
        role: 'STAFF',
        position: 'Senior QA Engineer',
        active: true,
        managerId: manager.id
      }
    })

    const staff2 = await prisma.user.create({
      data: {
        email: 'shelley.rogan@company.com',
        name: 'Shelley Rogan',
        password: hashedPassword,
        role: 'STAFF',
        position: 'QA Engineer',
        active: true,
        managerId: manager.id
      }
    })

    const staff3 = await prisma.user.create({
      data: {
        email: 'allan.pettigrew@company.com',
        name: 'Allan Pettigrew',
        password: hashedPassword,
        role: 'STAFF',
        position: 'Junior QA Engineer',
        active: true,
        managerId: manager.id
      }
    })

    console.log('🏢 Creating department...')

    // Create department
    const department = await prisma.department.create({
      data: {
        name: 'Quality Assurance'
      }
    })

    // Update users with department
    await prisma.user.updateMany({
      where: {
        id: { in: [manager.id, staff1.id, staff2.id, staff3.id] }
      },
      data: {
        departmentId: department.id
      }
    })

    console.log('📅 Creating cycle...')

    // Create cycle
    const cycle = await prisma.cycle.create({
      data: {
        name: 'Q1 2025',
        description: 'First quarter 2025 - Focus on automation and skill development',
        startDate: new Date('2025-01-01'),
        endDate: new Date('2025-03-31'),
        active: true
      }
    })

    console.log('🎯 Creating objectives...')

    // Create objectives
    const objective1 = await prisma.objective.create({
      data: {
        title: 'Implement Cypress Test Automation Framework',
        description: 'Build a comprehensive automated testing framework using Cypress to improve testing efficiency and coverage.',
        type: 'TEAM',
        status: 'IN_PROGRESS',
        ownerId: manager.id,
        cycleId: cycle.id
      }
    })

    const objective2 = await prisma.objective.create({
      data: {
        title: 'Develop JavaScript Skills',
        description: 'Enhance JavaScript programming skills to better support automation initiatives.',
        type: 'PERSONAL',
        status: 'IN_PROGRESS',
        ownerId: staff1.id,
        cycleId: cycle.id
      }
    })

    console.log('📊 Creating key results...')

    // Create key results
    await prisma.keyResult.createMany({
      data: [
        {
          description: 'Achieve 80% test coverage across all critical user journeys',
          metricType: 'PERCENTAGE',
          targetValue: 80,
          currentValue: 65,
          unit: '%',
          objectiveId: objective1.id,
          ownerId: staff1.id
        },
        {
          description: 'Reduce manual testing time by 50%',
          metricType: 'PERCENTAGE',
          targetValue: 50,
          currentValue: 30,
          unit: '%',
          objectiveId: objective1.id,
          ownerId: staff2.id
        },
        {
          description: 'Complete 3 advanced JavaScript courses',
          metricType: 'NUMBER',
          targetValue: 3,
          currentValue: 2,
          objectiveId: objective2.id,
          ownerId: staff1.id
        },
        {
          description: 'Build 2 automation tools using JavaScript',
          metricType: 'NUMBER',
          targetValue: 2,
          currentValue: 1,
          objectiveId: objective2.id,
          ownerId: staff1.id
        }
      ]
    })

    console.log('✅ Database initialization completed successfully!')
    console.log('')
    console.log('🔑 Demo Login Credentials:')
    console.log('Manager: david.burke@company.com / password123')
    console.log('Staff: kevin.hughes@company.com / password123')
    console.log('Staff: shelley.rogan@company.com / password123')
    console.log('Staff: allan.pettigrew@company.com / password123')

  } catch (error) {
    console.error('❌ Error initializing database:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

// Run the initialization
initializeDatabase()
  .then(() => {
    console.log('🎉 Initialization complete!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('💥 Initialization failed:', error)
    process.exit(1)
  }) 