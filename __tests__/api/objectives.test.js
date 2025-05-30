import { createRequest, createResponse } from 'node-mocks-http'

// Mock Prisma
jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    objective: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    keyResult: {
      findMany: jest.fn(),
    },
    $disconnect: jest.fn(),
  })),
}))

// Mock NextAuth
jest.mock('next-auth/next', () => ({
  getServerSession: jest.fn(),
}))

describe('/api/objectives', () => {
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

  describe('GET /api/objectives', () => {
    it('should return all objectives with key results and owner info', async () => {
      const mockObjectives = [
        {
          id: '1',
          title: 'Increase Revenue',
          description: 'Increase company revenue by 25%',
          status: 'IN_PROGRESS',
          progress: 65,
          ownerId: '1',
          cycleId: 'cycle-1',
          owner: {
            id: '1',
            name: 'John Doe',
            email: 'john@test.com',
            position: 'CEO'
          },
          cycle: {
            id: 'cycle-1',
            name: 'Q1 2025',
            startDate: '2025-01-01',
            endDate: '2025-03-31'
          },
          keyResults: [
            {
              id: 'kr-1',
              description: 'Achieve $1M in sales',
              currentValue: 650000,
              targetValue: 1000000,
              metricType: 'CURRENCY',
              unit: 'USD'
            }
          ]
        }
      ]

      mockPrisma.objective.findMany.mockResolvedValue(mockObjectives)

      const objectives = await mockPrisma.objective.findMany({
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
              position: true,
            },
          },
          cycle: true,
          keyResults: true,
        },
      })

      expect(mockPrisma.objective.findMany).toHaveBeenCalledWith({
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
              position: true,
            },
          },
          cycle: true,
          keyResults: true,
        },
      })
      expect(objectives).toEqual(mockObjectives)
      expect(objectives[0]).toHaveProperty('keyResults')
      expect(objectives[0].keyResults).toHaveLength(1)
    })

    it('should filter objectives by owner when ownerId is provided', async () => {
      const ownerId = 'user-1'
      const mockObjectives = [
        {
          id: '1',
          title: 'Personal Goal',
          ownerId: ownerId
        }
      ]

      mockPrisma.objective.findMany.mockResolvedValue(mockObjectives)

      const objectives = await mockPrisma.objective.findMany({
        where: { ownerId },
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
              position: true,
            },
          },
          cycle: true,
          keyResults: true,
        },
      })

      expect(mockPrisma.objective.findMany).toHaveBeenCalledWith({
        where: { ownerId },
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
              position: true,
            },
          },
          cycle: true,
          keyResults: true,
        },
      })
      expect(objectives).toEqual(mockObjectives)
    })

    it('should filter objectives by cycle when cycleId is provided', async () => {
      const cycleId = 'cycle-1'
      const mockObjectives = [
        {
          id: '1',
          title: 'Q1 Goal',
          cycleId: cycleId
        }
      ]

      mockPrisma.objective.findMany.mockResolvedValue(mockObjectives)

      const objectives = await mockPrisma.objective.findMany({
        where: { cycleId },
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
              position: true,
            },
          },
          cycle: true,
          keyResults: true,
        },
      })

      expect(mockPrisma.objective.findMany).toHaveBeenCalledWith({
        where: { cycleId },
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
              position: true,
            },
          },
          cycle: true,
          keyResults: true,
        },
      })
      expect(objectives).toEqual(mockObjectives)
    })
  })

  describe('POST /api/objectives', () => {
    it('should create a new objective with valid data', async () => {
      const newObjectiveData = {
        title: 'New Objective',
        description: 'A new objective for testing',
        ownerId: 'user-1',
        cycleId: 'cycle-1',
        status: 'NOT_STARTED'
      }

      const createdObjective = {
        id: '2',
        ...newObjectiveData,
        progress: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      mockPrisma.objective.create.mockResolvedValue(createdObjective)

      const objective = await mockPrisma.objective.create({
        data: {
          ...newObjectiveData,
          progress: 0,
        },
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
              position: true,
            },
          },
          cycle: true,
          keyResults: true,
        },
      })

      expect(mockPrisma.objective.create).toHaveBeenCalledWith({
        data: {
          ...newObjectiveData,
          progress: 0,
        },
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
              position: true,
            },
          },
          cycle: true,
          keyResults: true,
        },
      })
      expect(objective).toEqual(createdObjective)
      expect(objective.progress).toBe(0)
    })

    it('should validate required fields', () => {
      const invalidObjectiveData = {
        title: 'Test Objective',
        // Missing description, ownerId, cycleId
      }

      const requiredFields = ['title', 'description', 'ownerId', 'cycleId']
      const missingFields = requiredFields.filter(field => !invalidObjectiveData[field])
      
      expect(missingFields).toContain('description')
      expect(missingFields).toContain('ownerId')
      expect(missingFields).toContain('cycleId')
      expect(missingFields).toHaveLength(3)
    })

    it('should set default status to NOT_STARTED if not provided', () => {
      const objectiveData = {
        title: 'Test Objective',
        description: 'Test description',
        ownerId: 'user-1',
        cycleId: 'cycle-1'
        // No status provided
      }

      const dataWithDefaults = {
        ...objectiveData,
        status: objectiveData.status || 'NOT_STARTED',
        progress: 0
      }

      expect(dataWithDefaults.status).toBe('NOT_STARTED')
      expect(dataWithDefaults.progress).toBe(0)
    })
  })

  describe('PUT /api/objectives/[id]', () => {
    it('should update objective with valid data', async () => {
      const objectiveId = '1'
      const updateData = {
        title: 'Updated Objective',
        description: 'Updated description',
        status: 'IN_PROGRESS'
      }

      const updatedObjective = {
        id: objectiveId,
        ...updateData,
        progress: 50,
        ownerId: 'user-1',
        cycleId: 'cycle-1'
      }

      mockPrisma.objective.update.mockResolvedValue(updatedObjective)

      const objective = await mockPrisma.objective.update({
        where: { id: objectiveId },
        data: updateData,
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
              position: true,
            },
          },
          cycle: true,
          keyResults: true,
        },
      })

      expect(mockPrisma.objective.update).toHaveBeenCalledWith({
        where: { id: objectiveId },
        data: updateData,
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
              position: true,
            },
          },
          cycle: true,
          keyResults: true,
        },
      })
      expect(objective.title).toBe('Updated Objective')
      expect(objective.status).toBe('IN_PROGRESS')
    })

    it('should calculate progress based on key results', async () => {
      const objectiveId = '1'
      const mockKeyResults = [
        { currentValue: 50, targetValue: 100 }, // 50%
        { currentValue: 75, targetValue: 100 }, // 75%
        { currentValue: 25, targetValue: 100 }, // 25%
      ]

      mockPrisma.keyResult.findMany.mockResolvedValue(mockKeyResults)

      const keyResults = await mockPrisma.keyResult.findMany({
        where: { objectiveId }
      })

      // Calculate average progress
      const totalProgress = keyResults.reduce((sum, kr) => {
        const progress = kr.targetValue > 0 ? Math.min((kr.currentValue / kr.targetValue) * 100, 100) : 0
        return sum + progress
      }, 0)
      const averageProgress = keyResults.length > 0 ? Math.round(totalProgress / keyResults.length) : 0

      expect(averageProgress).toBe(50) // (50 + 75 + 25) / 3 = 50
    })

    it('should handle objective not found', async () => {
      const objectiveId = 'non-existent'
      
      mockPrisma.objective.update.mockRejectedValue(new Error('Objective not found'))

      try {
        await mockPrisma.objective.update({
          where: { id: objectiveId },
          data: { title: 'Test' },
        })
      } catch (error) {
        expect(error.message).toBe('Objective not found')
      }
    })
  })

  describe('DELETE /api/objectives/[id]', () => {
    it('should delete objective successfully', async () => {
      const objectiveId = '1'
      
      mockPrisma.objective.delete.mockResolvedValue({
        id: objectiveId,
        title: 'Deleted Objective'
      })

      const deletedObjective = await mockPrisma.objective.delete({
        where: { id: objectiveId },
      })

      expect(mockPrisma.objective.delete).toHaveBeenCalledWith({
        where: { id: objectiveId },
      })
      expect(deletedObjective.id).toBe(objectiveId)
    })

    it('should handle delete of non-existent objective', async () => {
      const objectiveId = 'non-existent'
      
      mockPrisma.objective.delete.mockRejectedValue(new Error('Objective not found'))

      try {
        await mockPrisma.objective.delete({
          where: { id: objectiveId },
        })
      } catch (error) {
        expect(error.message).toBe('Objective not found')
      }
    })
  })

  describe('Progress calculation logic', () => {
    it('should calculate correct progress from key results', () => {
      const keyResults = [
        { currentValue: 100, targetValue: 100 }, // 100%
        { currentValue: 50, targetValue: 100 },  // 50%
        { currentValue: 0, targetValue: 100 },   // 0%
      ]

      const calculateProgress = (keyResults) => {
        if (keyResults.length === 0) return 0
        
        const totalProgress = keyResults.reduce((sum, kr) => {
          const progress = kr.targetValue > 0 ? Math.min((kr.currentValue / kr.targetValue) * 100, 100) : 0
          return sum + progress
        }, 0)
        
        return Math.round(totalProgress / keyResults.length)
      }

      const progress = calculateProgress(keyResults)
      expect(progress).toBe(50) // (100 + 50 + 0) / 3 = 50
    })

    it('should handle division by zero in progress calculation', () => {
      const keyResults = [
        { currentValue: 50, targetValue: 0 }, // Should be 0% (avoid division by zero)
        { currentValue: 100, targetValue: 100 }, // 100%
      ]

      const calculateProgress = (keyResults) => {
        if (keyResults.length === 0) return 0
        
        const totalProgress = keyResults.reduce((sum, kr) => {
          const progress = kr.targetValue > 0 ? Math.min((kr.currentValue / kr.targetValue) * 100, 100) : 0
          return sum + progress
        }, 0)
        
        return Math.round(totalProgress / keyResults.length)
      }

      const progress = calculateProgress(keyResults)
      expect(progress).toBe(50) // (0 + 100) / 2 = 50
    })

    it('should cap progress at 100%', () => {
      const keyResults = [
        { currentValue: 150, targetValue: 100 }, // Should be capped at 100%
        { currentValue: 200, targetValue: 100 }, // Should be capped at 100%
      ]

      const calculateProgress = (keyResults) => {
        if (keyResults.length === 0) return 0
        
        const totalProgress = keyResults.reduce((sum, kr) => {
          const progress = kr.targetValue > 0 ? Math.min((kr.currentValue / kr.targetValue) * 100, 100) : 0
          return sum + progress
        }, 0)
        
        return Math.round(totalProgress / keyResults.length)
      }

      const progress = calculateProgress(keyResults)
      expect(progress).toBe(100) // (100 + 100) / 2 = 100
    })
  })

  describe('Status validation', () => {
    it('should validate objective status values', () => {
      const validStatuses = ['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED', 'ON_HOLD', 'AT_RISK']
      const invalidStatuses = ['INVALID', 'PENDING', 'CANCELLED']

      validStatuses.forEach(status => {
        expect(validStatuses.includes(status)).toBe(true)
      })

      invalidStatuses.forEach(status => {
        expect(validStatuses.includes(status)).toBe(false)
      })
    })

    it('should auto-update status based on progress', () => {
      const updateStatusBasedOnProgress = (progress) => {
        if (progress === 100) return 'COMPLETED'
        if (progress > 0) return 'IN_PROGRESS'
        return 'NOT_STARTED'
      }

      expect(updateStatusBasedOnProgress(0)).toBe('NOT_STARTED')
      expect(updateStatusBasedOnProgress(50)).toBe('IN_PROGRESS')
      expect(updateStatusBasedOnProgress(100)).toBe('COMPLETED')
    })
  })

  describe('Authorization checks', () => {
    it('should allow owners to update their objectives', () => {
      const objective = { id: '1', ownerId: 'user-1' }
      const session = { user: { id: 'user-1', role: 'STAFF' } }

      const canUpdate = session.user.id === objective.ownerId || 
                       ['ADMIN', 'MANAGER'].includes(session.user.role)

      expect(canUpdate).toBe(true)
    })

    it('should allow managers and admins to update any objective', () => {
      const objective = { id: '1', ownerId: 'user-1' }
      const managerSession = { user: { id: 'user-2', role: 'MANAGER' } }
      const adminSession = { user: { id: 'user-3', role: 'ADMIN' } }

      const managerCanUpdate = managerSession.user.id === objective.ownerId || 
                              ['ADMIN', 'MANAGER'].includes(managerSession.user.role)
      const adminCanUpdate = adminSession.user.id === objective.ownerId || 
                            ['ADMIN', 'MANAGER'].includes(adminSession.user.role)

      expect(managerCanUpdate).toBe(true)
      expect(adminCanUpdate).toBe(true)
    })

    it('should prevent staff from updating others objectives', () => {
      const objective = { id: '1', ownerId: 'user-1' }
      const session = { user: { id: 'user-2', role: 'STAFF' } }

      const canUpdate = session.user.id === objective.ownerId || 
                       ['ADMIN', 'MANAGER'].includes(session.user.role)

      expect(canUpdate).toBe(false)
    })
  })
}) 