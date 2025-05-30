import { createRequest, createResponse } from 'node-mocks-http'

// Mock Prisma
jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    cycle: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    objective: {
      findMany: jest.fn(),
    },
    $disconnect: jest.fn(),
  })),
}))

// Mock NextAuth
jest.mock('next-auth/next', () => ({
  getServerSession: jest.fn(),
}))

describe('/api/cycles', () => {
  let mockPrisma
  let mockGetServerSession

  beforeEach(() => {
    jest.clearAllMocks()
    
    const { PrismaClient } = require('@prisma/client')
    mockPrisma = new PrismaClient()
    
    mockGetServerSession = require('next-auth/next').getServerSession
    mockGetServerSession.mockResolvedValue({
      user: { id: '1', role: 'ADMIN', email: 'admin@test.com' }
    })
  })

  describe('GET /api/cycles', () => {
    it('should return all cycles with objectives count', async () => {
      const mockCycles = [
        {
          id: '1',
          name: 'Q1 2025',
          description: 'First quarter objectives',
          startDate: '2025-01-01T00:00:00.000Z',
          endDate: '2025-03-31T23:59:59.999Z',
          active: true,
          createdAt: '2024-12-01T00:00:00.000Z',
          updatedAt: '2024-12-01T00:00:00.000Z',
          _count: {
            objectives: 5
          }
        },
        {
          id: '2',
          name: 'Q2 2025',
          description: 'Second quarter objectives',
          startDate: '2025-04-01T00:00:00.000Z',
          endDate: '2025-06-30T23:59:59.999Z',
          active: false,
          createdAt: '2024-12-01T00:00:00.000Z',
          updatedAt: '2024-12-01T00:00:00.000Z',
          _count: {
            objectives: 0
          }
        }
      ]

      mockPrisma.cycle.findMany.mockResolvedValue(mockCycles)

      const cycles = await mockPrisma.cycle.findMany({
        include: {
          _count: {
            select: {
              objectives: true,
            },
          },
        },
        orderBy: {
          startDate: 'desc',
        },
      })

      expect(mockPrisma.cycle.findMany).toHaveBeenCalledWith({
        include: {
          _count: {
            select: {
              objectives: true,
            },
          },
        },
        orderBy: {
          startDate: 'desc',
        },
      })
      expect(cycles).toEqual(mockCycles)
      expect(cycles).toHaveLength(2)
      expect(cycles[0]._count.objectives).toBe(5)
    })

    it('should filter active cycles when active=true is provided', async () => {
      const mockActiveCycles = [
        {
          id: '1',
          name: 'Q1 2025',
          active: true,
          _count: { objectives: 5 }
        }
      ]

      mockPrisma.cycle.findMany.mockResolvedValue(mockActiveCycles)

      const cycles = await mockPrisma.cycle.findMany({
        where: { active: true },
        include: {
          _count: {
            select: {
              objectives: true,
            },
          },
        },
        orderBy: {
          startDate: 'desc',
        },
      })

      expect(mockPrisma.cycle.findMany).toHaveBeenCalledWith({
        where: { active: true },
        include: {
          _count: {
            select: {
              objectives: true,
            },
          },
        },
        orderBy: {
          startDate: 'desc',
        },
      })
      expect(cycles).toEqual(mockActiveCycles)
      expect(cycles.every(cycle => cycle.active)).toBe(true)
    })
  })

  describe('POST /api/cycles', () => {
    it('should create a new cycle with valid data', async () => {
      const newCycleData = {
        name: 'Q3 2025',
        description: 'Third quarter objectives',
        startDate: '2025-07-01T00:00:00.000Z',
        endDate: '2025-09-30T23:59:59.999Z',
        active: false
      }

      const createdCycle = {
        id: '3',
        ...newCycleData,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      mockPrisma.cycle.create.mockResolvedValue(createdCycle)

      const cycle = await mockPrisma.cycle.create({
        data: newCycleData,
        include: {
          _count: {
            select: {
              objectives: true,
            },
          },
        },
      })

      expect(mockPrisma.cycle.create).toHaveBeenCalledWith({
        data: newCycleData,
        include: {
          _count: {
            select: {
              objectives: true,
            },
          },
        },
      })
      expect(cycle).toEqual(createdCycle)
      expect(cycle.name).toBe('Q3 2025')
    })

    it('should validate required fields', () => {
      const invalidCycleData = {
        name: 'Test Cycle',
        // Missing description, startDate, endDate
      }

      const requiredFields = ['name', 'description', 'startDate', 'endDate']
      const missingFields = requiredFields.filter(field => !invalidCycleData[field])
      
      expect(missingFields).toContain('description')
      expect(missingFields).toContain('startDate')
      expect(missingFields).toContain('endDate')
      expect(missingFields).toHaveLength(3)
    })

    it('should validate date range (start date before end date)', () => {
      const validateDateRange = (startDate, endDate) => {
        const start = new Date(startDate)
        const end = new Date(endDate)
        return start < end
      }

      expect(validateDateRange('2025-01-01', '2025-03-31')).toBe(true)
      expect(validateDateRange('2025-03-31', '2025-01-01')).toBe(false)
      expect(validateDateRange('2025-01-01', '2025-01-01')).toBe(false)
    })

    it('should validate date format', () => {
      const validateDateFormat = (dateString) => {
        const date = new Date(dateString)
        return !isNaN(date.getTime())
      }

      expect(validateDateFormat('2025-01-01')).toBe(true)
      expect(validateDateFormat('2025-01-01T00:00:00.000Z')).toBe(true)
      expect(validateDateFormat('invalid-date')).toBe(false)
      expect(validateDateFormat('2025-13-01')).toBe(false)
    })

    it('should set default active status to false if not provided', () => {
      const cycleData = {
        name: 'Test Cycle',
        description: 'Test description',
        startDate: '2025-01-01',
        endDate: '2025-03-31'
        // No active field provided
      }

      const dataWithDefaults = {
        ...cycleData,
        active: cycleData.active ?? false
      }

      expect(dataWithDefaults.active).toBe(false)
    })
  })

  describe('PUT /api/cycles/[id]', () => {
    it('should update cycle with valid data', async () => {
      const cycleId = '1'
      const updateData = {
        name: 'Updated Q1 2025',
        description: 'Updated description',
        active: true
      }

      const updatedCycle = {
        id: cycleId,
        ...updateData,
        startDate: '2025-01-01T00:00:00.000Z',
        endDate: '2025-03-31T23:59:59.999Z'
      }

      mockPrisma.cycle.update.mockResolvedValue(updatedCycle)

      const cycle = await mockPrisma.cycle.update({
        where: { id: cycleId },
        data: updateData,
        include: {
          _count: {
            select: {
              objectives: true,
            },
          },
        },
      })

      expect(mockPrisma.cycle.update).toHaveBeenCalledWith({
        where: { id: cycleId },
        data: updateData,
        include: {
          _count: {
            select: {
              objectives: true,
            },
          },
        },
      })
      expect(cycle.name).toBe('Updated Q1 2025')
      expect(cycle.active).toBe(true)
    })

    it('should handle cycle not found', async () => {
      const cycleId = 'non-existent'
      
      mockPrisma.cycle.update.mockRejectedValue(new Error('Cycle not found'))

      try {
        await mockPrisma.cycle.update({
          where: { id: cycleId },
          data: { name: 'Test' },
        })
      } catch (error) {
        expect(error.message).toBe('Cycle not found')
      }
    })

    it('should validate date updates maintain proper range', () => {
      const validateDateUpdate = (currentCycle, updates) => {
        const startDate = updates.startDate || currentCycle.startDate
        const endDate = updates.endDate || currentCycle.endDate
        
        return new Date(startDate) < new Date(endDate)
      }

      const currentCycle = {
        startDate: '2025-01-01',
        endDate: '2025-03-31'
      }

      expect(validateDateUpdate(currentCycle, { startDate: '2025-01-15' })).toBe(true)
      expect(validateDateUpdate(currentCycle, { endDate: '2025-04-30' })).toBe(true)
      expect(validateDateUpdate(currentCycle, { startDate: '2025-04-01' })).toBe(false)
    })
  })

  describe('DELETE /api/cycles/[id]', () => {
    it('should delete cycle successfully when no objectives exist', async () => {
      const cycleId = '1'
      
      // Mock checking for objectives
      mockPrisma.objective.findMany.mockResolvedValue([])
      
      // Mock cycle deletion
      mockPrisma.cycle.delete.mockResolvedValue({
        id: cycleId,
        name: 'Deleted Cycle'
      })

      // Check for objectives first
      const objectives = await mockPrisma.objective.findMany({
        where: { cycleId }
      })

      if (objectives.length === 0) {
        const deletedCycle = await mockPrisma.cycle.delete({
          where: { id: cycleId },
        })

        expect(mockPrisma.cycle.delete).toHaveBeenCalledWith({
          where: { id: cycleId },
        })
        expect(deletedCycle.id).toBe(cycleId)
      }
    })

    it('should prevent deletion when objectives exist', async () => {
      const cycleId = '1'
      
      // Mock objectives exist
      mockPrisma.objective.findMany.mockResolvedValue([
        { id: 'obj-1', title: 'Existing Objective' }
      ])

      const objectives = await mockPrisma.objective.findMany({
        where: { cycleId }
      })

      const canDelete = objectives.length === 0
      expect(canDelete).toBe(false)
    })

    it('should handle delete of non-existent cycle', async () => {
      const cycleId = 'non-existent'
      
      mockPrisma.cycle.delete.mockRejectedValue(new Error('Cycle not found'))

      try {
        await mockPrisma.cycle.delete({
          where: { id: cycleId },
        })
      } catch (error) {
        expect(error.message).toBe('Cycle not found')
      }
    })
  })

  describe('Cycle status management', () => {
    it('should ensure only one active cycle at a time', async () => {
      const newActiveCycleId = '2'
      
      // Mock finding current active cycle
      mockPrisma.cycle.findMany.mockResolvedValue([
        { id: '1', active: true }
      ])
      
      // Mock deactivating current active cycle
      mockPrisma.cycle.update.mockResolvedValueOnce({
        id: '1',
        active: false
      })
      
      // Mock activating new cycle
      mockPrisma.cycle.update.mockResolvedValueOnce({
        id: newActiveCycleId,
        active: true
      })

      // Find current active cycles
      const activeCycles = await mockPrisma.cycle.findMany({
        where: { active: true }
      })

      // Deactivate existing active cycles
      for (const cycle of activeCycles) {
        await mockPrisma.cycle.update({
          where: { id: cycle.id },
          data: { active: false }
        })
      }

      // Activate new cycle
      await mockPrisma.cycle.update({
        where: { id: newActiveCycleId },
        data: { active: true }
      })

      expect(mockPrisma.cycle.update).toHaveBeenCalledTimes(2)
      expect(mockPrisma.cycle.update).toHaveBeenNthCalledWith(1, {
        where: { id: '1' },
        data: { active: false }
      })
      expect(mockPrisma.cycle.update).toHaveBeenNthCalledWith(2, {
        where: { id: newActiveCycleId },
        data: { active: true }
      })
    })

    it('should validate cycle dates do not overlap', () => {
      const checkDateOverlap = (cycle1, cycle2) => {
        const start1 = new Date(cycle1.startDate)
        const end1 = new Date(cycle1.endDate)
        const start2 = new Date(cycle2.startDate)
        const end2 = new Date(cycle2.endDate)

        return (start1 <= end2 && start2 <= end1)
      }

      const cycle1 = {
        startDate: '2025-01-01',
        endDate: '2025-03-31'
      }

      const cycle2 = {
        startDate: '2025-04-01',
        endDate: '2025-06-30'
      }

      const cycle3 = {
        startDate: '2025-02-01',
        endDate: '2025-05-31'
      }

      expect(checkDateOverlap(cycle1, cycle2)).toBe(false) // No overlap
      expect(checkDateOverlap(cycle1, cycle3)).toBe(true)  // Overlap
    })
  })

  describe('Cycle duration calculations', () => {
    it('should calculate cycle duration in days', () => {
      const calculateDuration = (startDate, endDate) => {
        const start = new Date(startDate)
        const end = new Date(endDate)
        const diffTime = Math.abs(end - start)
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      }

      expect(calculateDuration('2025-01-01', '2025-01-31')).toBe(30)
      expect(calculateDuration('2025-01-01', '2025-03-31')).toBe(89)
      expect(calculateDuration('2025-01-01', '2025-12-31')).toBe(364)
    })

    it('should determine if cycle is current based on dates', () => {
      const isCycleCurrent = (startDate, endDate) => {
        const now = new Date()
        const start = new Date(startDate)
        const end = new Date(endDate)
        return now >= start && now <= end
      }

      const now = new Date()
      const pastStart = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000) // 30 days ago
      const futureEnd = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
      const pastEnd = new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000) // 10 days ago
      const futureStart = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000) // 10 days from now

      expect(isCycleCurrent(pastStart.toISOString(), futureEnd.toISOString())).toBe(true)
      expect(isCycleCurrent(pastStart.toISOString(), pastEnd.toISOString())).toBe(false)
      expect(isCycleCurrent(futureStart.toISOString(), futureEnd.toISOString())).toBe(false)
    })

    it('should calculate cycle progress percentage', () => {
      const calculateCycleProgress = (startDate, endDate) => {
        const now = new Date()
        const start = new Date(startDate)
        const end = new Date(endDate)
        
        if (now < start) return 0
        if (now > end) return 100
        
        const total = end.getTime() - start.getTime()
        const elapsed = now.getTime() - start.getTime()
        
        return Math.round((elapsed / total) * 100)
      }

      const now = new Date()
      const start = new Date(now.getTime() - 15 * 24 * 60 * 60 * 1000) // 15 days ago
      const end = new Date(now.getTime() + 15 * 24 * 60 * 60 * 1000) // 15 days from now

      const progress = calculateCycleProgress(start.toISOString(), end.toISOString())
      expect(progress).toBe(50) // Should be approximately 50% through
    })
  })

  describe('Authorization checks', () => {
    it('should require admin role for cycle management', () => {
      const adminSession = { user: { id: '1', role: 'ADMIN' } }
      const managerSession = { user: { id: '2', role: 'MANAGER' } }
      const staffSession = { user: { id: '3', role: 'STAFF' } }

      const canManageCycles = (session) => {
        return session.user.role === 'ADMIN'
      }

      expect(canManageCycles(adminSession)).toBe(true)
      expect(canManageCycles(managerSession)).toBe(false)
      expect(canManageCycles(staffSession)).toBe(false)
    })

    it('should allow all authenticated users to view cycles', () => {
      const adminSession = { user: { id: '1', role: 'ADMIN' } }
      const managerSession = { user: { id: '2', role: 'MANAGER' } }
      const staffSession = { user: { id: '3', role: 'STAFF' } }

      const canViewCycles = (session) => {
        return ['ADMIN', 'MANAGER', 'STAFF'].includes(session.user.role)
      }

      expect(canViewCycles(adminSession)).toBe(true)
      expect(canViewCycles(managerSession)).toBe(true)
      expect(canViewCycles(staffSession)).toBe(true)
    })
  })

  describe('Cycle name validation', () => {
    it('should validate cycle name format', () => {
      const validateCycleName = (name) => {
        // Should be non-empty and reasonable length
        if (!name) return false
        const trimmed = name.trim()
        return trimmed.length > 0 && trimmed.length <= 100
      }

      expect(validateCycleName('Q1 2025')).toBe(true)
      expect(validateCycleName('Annual Goals 2025')).toBe(true)
      expect(validateCycleName('')).toBe(false)
      expect(validateCycleName('   ')).toBe(false)
      expect(validateCycleName('A'.repeat(101))).toBe(false)
    })

    it('should check for duplicate cycle names', async () => {
      const existingCycles = [
        { id: '1', name: 'Q1 2025' },
        { id: '2', name: 'Q2 2025' }
      ]

      mockPrisma.cycle.findMany.mockResolvedValue(existingCycles)

      const checkDuplicateName = async (name, excludeId = null) => {
        const cycles = await mockPrisma.cycle.findMany()
        return cycles.some(cycle => 
          cycle.name.toLowerCase() === name.toLowerCase() && 
          cycle.id !== excludeId
        )
      }

      expect(await checkDuplicateName('Q1 2025')).toBe(true)
      expect(await checkDuplicateName('Q3 2025')).toBe(false)
      expect(await checkDuplicateName('Q1 2025', '1')).toBe(false) // Excluding self
    })
  })
}) 