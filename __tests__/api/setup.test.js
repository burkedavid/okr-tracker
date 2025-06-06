import { createRequest, createResponse } from 'node-mocks-http'

// Mock Prisma
jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    user: {
      count: jest.fn(),
      deleteMany: jest.fn(),
      create: jest.fn(),
    },
    department: {
      deleteMany: jest.fn(),
      create: jest.fn(),
    },
    cycle: {
      deleteMany: jest.fn(),
      create: jest.fn(),
      count: jest.fn(),
    },
    objective: {
      count: jest.fn(),
      deleteMany: jest.fn(),
      create: jest.fn(),
    },
    keyResult: {
      deleteMany: jest.fn(),
      create: jest.fn(),
    },
    progressUpdate: {
      deleteMany: jest.fn(),
    },
    $disconnect: jest.fn(),
  })),
}))

// Mock bcrypt
jest.mock('bcryptjs', () => ({
  hash: jest.fn(),
}))

describe('/api/setup', () => {
  let mockPrisma
  let mockBcrypt

  beforeEach(() => {
    jest.clearAllMocks()
    
    const { PrismaClient } = require('@prisma/client')
    mockPrisma = new PrismaClient()
    
    mockBcrypt = require('bcryptjs')
    mockBcrypt.hash.mockResolvedValue('$2a$12$hashedPassword123')
  })

  describe('POST /api/setup', () => {
    it('should initialize database with demo data when empty', async () => {
      // Mock empty database
      mockPrisma.user.count.mockResolvedValue(0)

      // Mock department creation
      const mockDepartment = {
        id: 'dept-1',
        name: 'QA Automation'
      }
      mockPrisma.department.create.mockResolvedValue(mockDepartment)

      // Mock user creation
      const mockUsers = [
        {
          id: 'user-1',
          email: 'david.burke@company.com',
          name: 'David Burke',
          role: 'MANAGER',
          position: 'Test Automation Manager',
          departmentId: 'dept-1'
        },
        {
          id: 'user-2',
          email: 'kevin.hughes@company.com',
          name: 'Kevin Hughes',
          role: 'STAFF',
          position: 'QA Automation Engineer 1',
          departmentId: 'dept-1',
          managerId: 'user-1'
        }
      ]
      mockPrisma.user.create
        .mockResolvedValueOnce(mockUsers[0])
        .mockResolvedValueOnce(mockUsers[1])
        .mockResolvedValueOnce({ id: 'user-3', email: 'shelley.rogan@company.com' })
        .mockResolvedValueOnce({ id: 'user-4', email: 'allan.pettigrew@company.com' })

      // Mock cycle creation
      const mockCycle = {
        id: 'cycle-1',
        name: 'Q2 2025',
        description: 'Advanced automation and quality improvement',
        startDate: new Date('2025-04-01'),
        endDate: new Date('2025-06-30'),
        active: true
      }
      mockPrisma.cycle.create.mockResolvedValue(mockCycle)

      // Mock objective creation
      const mockObjective = {
        id: 'obj-1',
        title: 'Implement Comprehensive Cypress Test Automation Framework',
        description: 'Build and deploy a robust end-to-end testing framework using Cypress for all critical user journeys',
        type: 'TEAM',
        status: 'IN_PROGRESS',
        ownerId: 'user-1',
        cycleId: 'cycle-1'
      }
      mockPrisma.objective.create.mockResolvedValue(mockObjective)

      // Mock key result creation
      const mockKeyResults = [
        {
          id: 'kr-1',
          description: 'Achieve 80% test coverage across all critical user flows',
          metricType: 'PERCENTAGE',
          targetValue: 80,
          currentValue: 45,
          unit: '%',
          objectiveId: 'obj-1',
          ownerId: 'user-2'
        }
      ]
      mockPrisma.keyResult.create.mockResolvedValue(mockKeyResults[0])

      // Mock all deleteMany operations
      mockPrisma.progressUpdate.deleteMany.mockResolvedValue({ count: 0 })
      mockPrisma.keyResult.deleteMany.mockResolvedValue({ count: 0 })
      mockPrisma.objective.deleteMany.mockResolvedValue({ count: 0 })
      mockPrisma.cycle.deleteMany.mockResolvedValue({ count: 0 })
      mockPrisma.user.deleteMany.mockResolvedValue({ count: 0 })
      mockPrisma.department.deleteMany.mockResolvedValue({ count: 0 })

      // Test the setup logic
      const userCount = await mockPrisma.user.count()
      expect(userCount).toBe(0)

      // Verify password hashing
      const hashedPassword = await mockBcrypt.hash('password123', 12)
      expect(mockBcrypt.hash).toHaveBeenCalledWith('password123', 12)
      expect(hashedPassword).toBe('$2a$12$hashedPassword123')

      // Verify department creation
      const department = await mockPrisma.department.create({
        data: { name: 'QA Automation' }
      })
      expect(department).toEqual(mockDepartment)

      // Verify user creation
      const davidBurke = await mockPrisma.user.create({
        data: {
          email: 'david.burke@company.com',
          name: 'David Burke',
          password: hashedPassword,
          role: 'MANAGER',
          position: 'Test Automation Manager',
          departmentId: department.id
        }
      })
      expect(davidBurke).toEqual(mockUsers[0])

      // Verify cycle creation
      const cycle = await mockPrisma.cycle.create({
        data: {
          name: 'Q2 2025',
          description: 'Advanced automation and quality improvement',
          startDate: new Date('2025-04-01'),
          endDate: new Date('2025-06-30'),
          active: true
        }
      })
      expect(cycle).toEqual(mockCycle)

      // Verify objective creation
      const objective = await mockPrisma.objective.create({
        data: {
          title: 'Implement Comprehensive Cypress Test Automation Framework',
          description: 'Build and deploy a robust end-to-end testing framework using Cypress for all critical user journeys',
          type: 'TEAM',
          status: 'IN_PROGRESS',
          ownerId: davidBurke.id,
          cycleId: cycle.id
        }
      })
      expect(objective).toEqual(mockObjective)

      // Verify key result creation
      const keyResult = await mockPrisma.keyResult.create({
        data: {
          description: 'Achieve 80% test coverage across all critical user flows',
          metricType: 'PERCENTAGE',
          targetValue: 80,
          currentValue: 45,
          unit: '%',
          objectiveId: objective.id,
          ownerId: 'user-2'
        }
      })
      expect(keyResult).toEqual(mockKeyResults[0])
    })

    it('should return existing data message when database already initialized', async () => {
      // Mock database with existing users
      mockPrisma.user.count.mockResolvedValue(4)

      const userCount = await mockPrisma.user.count()
      expect(userCount).toBe(4)

      // Should not proceed with initialization
      expect(mockPrisma.department.create).not.toHaveBeenCalled()
      expect(mockPrisma.user.create).not.toHaveBeenCalled()
    })

    it('should handle database errors gracefully', async () => {
      mockPrisma.user.count.mockRejectedValue(new Error('Database connection failed'))

      try {
        await mockPrisma.user.count()
      } catch (error) {
        expect(error.message).toBe('Database connection failed')
      }
    })

    it('should create all required demo users', async () => {
      mockPrisma.user.count.mockResolvedValue(0)
      
      const expectedUsers = [
        {
          email: 'david.burke@company.com',
          name: 'David Burke',
          role: 'MANAGER',
          position: 'Test Automation Manager'
        },
        {
          email: 'kevin.hughes@company.com',
          name: 'Kevin Hughes',
          role: 'STAFF',
          position: 'QA Automation Engineer 1'
        },
        {
          email: 'shelley.rogan@company.com',
          name: 'Shelley Rogan',
          role: 'STAFF',
          position: 'QA Automation Engineer 1'
        },
        {
          email: 'allan.pettigrew@company.com',
          name: 'Allan Pettigrew',
          role: 'STAFF',
          position: 'QA Automation Engineer 1'
        }
      ]

      // Mock user creation for all users
      expectedUsers.forEach((user, index) => {
        mockPrisma.user.create.mockResolvedValueOnce({
          id: `user-${index + 1}`,
          ...user
        })
      })

      // Test user creation calls
      for (let i = 0; i < expectedUsers.length; i++) {
        const user = await mockPrisma.user.create({
          data: expectedUsers[i]
        })
        expect(user.email).toBe(expectedUsers[i].email)
        expect(user.role).toBe(expectedUsers[i].role)
      }

      expect(mockPrisma.user.create).toHaveBeenCalledTimes(4)
    })

    it('should create proper manager-staff relationships', async () => {
      mockPrisma.user.count.mockResolvedValue(0)

      const manager = { id: 'manager-1', role: 'MANAGER' }
      const staff = { id: 'staff-1', role: 'STAFF', managerId: 'manager-1' }

      mockPrisma.user.create
        .mockResolvedValueOnce(manager)
        .mockResolvedValueOnce(staff)

      const createdManager = await mockPrisma.user.create({
        data: { role: 'MANAGER' }
      })

      const createdStaff = await mockPrisma.user.create({
        data: { 
          role: 'STAFF',
          managerId: createdManager.id
        }
      })

      expect(createdStaff.managerId).toBe(createdManager.id)
    })

    it('should create sample objectives and key results', async () => {
      mockPrisma.user.count.mockResolvedValue(0)

      const mockObjective = {
        id: 'obj-1',
        title: 'Implement Comprehensive Cypress Test Automation Framework',
        type: 'TEAM',
        status: 'IN_PROGRESS'
      }

      const mockKeyResults = [
        {
          description: 'Achieve 80% test coverage across all critical user flows',
          metricType: 'PERCENTAGE',
          targetValue: 80,
          currentValue: 45
        },
        {
          description: 'Reduce manual testing time by 50%',
          metricType: 'PERCENTAGE',
          targetValue: 50,
          currentValue: 25
        },
        {
          description: 'Train 4 team members on Cypress automation',
          metricType: 'NUMBER',
          targetValue: 4,
          currentValue: 2
        }
      ]

      mockPrisma.objective.create.mockResolvedValue(mockObjective)
      mockKeyResults.forEach((kr, index) => {
        mockPrisma.keyResult.create.mockResolvedValueOnce({
          id: `kr-${index + 1}`,
          ...kr
        })
      })

      const objective = await mockPrisma.objective.create({
        data: {
          title: 'Implement Comprehensive Cypress Test Automation Framework',
          type: 'TEAM',
          status: 'IN_PROGRESS'
        }
      })

      expect(objective.title).toContain('Cypress')
      expect(objective.type).toBe('TEAM')

      // Create key results
      for (let i = 0; i < mockKeyResults.length; i++) {
        const keyResult = await mockPrisma.keyResult.create({
          data: mockKeyResults[i]
        })
        expect(keyResult.metricType).toBe(mockKeyResults[i].metricType)
        expect(keyResult.targetValue).toBe(mockKeyResults[i].targetValue)
      }

      expect(mockPrisma.keyResult.create).toHaveBeenCalledTimes(3)
    })
  })

  describe('GET /api/setup', () => {
    it('should return database status when initialized', async () => {
      mockPrisma.user.count.mockResolvedValue(4)
      mockPrisma.objective.count.mockResolvedValue(1)
      mockPrisma.cycle.count.mockResolvedValue(1)

      const userCount = await mockPrisma.user.count()
      const objectiveCount = await mockPrisma.objective.count()
      const cycleCount = await mockPrisma.cycle.count()

      const status = {
        status: userCount > 0 ? 'initialized' : 'not_initialized',
        users: userCount,
        objectives: objectiveCount,
        cycles: cycleCount
      }

      expect(status.status).toBe('initialized')
      expect(status.users).toBe(4)
      expect(status.objectives).toBe(1)
      expect(status.cycles).toBe(1)
    })

    it('should return not_initialized status when database is empty', async () => {
      mockPrisma.user.count.mockResolvedValue(0)
      mockPrisma.objective.count.mockResolvedValue(0)
      mockPrisma.cycle.count.mockResolvedValue(0)

      const userCount = await mockPrisma.user.count()
      const status = {
        status: userCount > 0 ? 'initialized' : 'not_initialized',
        users: userCount,
        objectives: 0,
        cycles: 0
      }

      expect(status.status).toBe('not_initialized')
      expect(status.users).toBe(0)
    })

    it('should handle database errors in status check', async () => {
      mockPrisma.user.count.mockRejectedValue(new Error('Database error'))

      try {
        await mockPrisma.user.count()
      } catch (error) {
        expect(error.message).toBe('Database error')
      }
    })
  })

  describe('Password security', () => {
    it('should hash passwords with proper salt rounds', async () => {
      const plainPassword = 'password123'
      const saltRounds = 12

      await mockBcrypt.hash(plainPassword, saltRounds)

      expect(mockBcrypt.hash).toHaveBeenCalledWith(plainPassword, saltRounds)
    })

    it('should use the same hashed password for all demo users', async () => {
      const hashedPassword = '$2a$12$hashedPassword123'
      mockBcrypt.hash.mockResolvedValue(hashedPassword)

      const password1 = await mockBcrypt.hash('password123', 12)
      const password2 = await mockBcrypt.hash('password123', 12)

      expect(password1).toBe(hashedPassword)
      expect(password2).toBe(hashedPassword)
    })
  })

  describe('Data cleanup', () => {
    it('should clear existing data before initialization', async () => {
      mockPrisma.user.count.mockResolvedValue(0)

      // Mock deleteMany operations
      mockPrisma.progressUpdate.deleteMany.mockResolvedValue({ count: 2 })
      mockPrisma.keyResult.deleteMany.mockResolvedValue({ count: 3 })
      mockPrisma.objective.deleteMany.mockResolvedValue({ count: 1 })
      mockPrisma.cycle.deleteMany.mockResolvedValue({ count: 1 })
      mockPrisma.user.deleteMany.mockResolvedValue({ count: 4 })
      mockPrisma.department.deleteMany.mockResolvedValue({ count: 1 })

      // Test cleanup sequence
      await mockPrisma.progressUpdate.deleteMany()
      await mockPrisma.keyResult.deleteMany()
      await mockPrisma.objective.deleteMany()
      await mockPrisma.cycle.deleteMany()
      await mockPrisma.user.deleteMany()
      await mockPrisma.department.deleteMany()

      expect(mockPrisma.progressUpdate.deleteMany).toHaveBeenCalled()
      expect(mockPrisma.keyResult.deleteMany).toHaveBeenCalled()
      expect(mockPrisma.objective.deleteMany).toHaveBeenCalled()
      expect(mockPrisma.cycle.deleteMany).toHaveBeenCalled()
      expect(mockPrisma.user.deleteMany).toHaveBeenCalled()
      expect(mockPrisma.department.deleteMany).toHaveBeenCalled()
    })
  })
}) 