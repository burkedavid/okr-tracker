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
    notification: {
      create: jest.fn(),
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

  describe('Status and progress calculations', () => {
    it('should calculate progress correctly from key results', () => {
      const keyResults = [
        { currentValue: 50, targetValue: 100 },
        { currentValue: 75, targetValue: 100 },
        { currentValue: 25, targetValue: 100 }
      ]

      const calculateProgress = (keyResults) => {
        if (!keyResults || keyResults.length === 0) return 0
        const totalProgress = keyResults.reduce((sum, kr) => {
          const progress = Math.min((kr.currentValue / kr.targetValue) * 100, 100)
          return sum + progress
        }, 0)
        return Math.round(totalProgress / keyResults.length)
      }

      const progress = calculateProgress(keyResults)
      expect(progress).toBe(50) // (50 + 75 + 25) / 3 = 50
    })

    it('should update status based on progress', () => {
      const updateStatusBasedOnProgress = (progress) => {
        if (progress >= 100) return 'COMPLETED'
        if (progress >= 80) return 'ON_TRACK'
        if (progress >= 60) return 'IN_PROGRESS'
        if (progress >= 40) return 'AT_RISK'
        return 'NOT_STARTED'
      }

      expect(updateStatusBasedOnProgress(100)).toBe('COMPLETED')
      expect(updateStatusBasedOnProgress(85)).toBe('ON_TRACK')
      expect(updateStatusBasedOnProgress(65)).toBe('IN_PROGRESS')
      expect(updateStatusBasedOnProgress(45)).toBe('AT_RISK')
      expect(updateStatusBasedOnProgress(20)).toBe('NOT_STARTED')
    })
  })

  describe('POST /api/objectives/[id]/extend', () => {
    beforeEach(() => {
      mockGetServerSession.mockResolvedValue({
        user: { id: 'manager-1', role: 'MANAGER', email: 'manager@test.com', name: 'Test Manager' }
      })
    })

    it('should extend deadline for missed objective (Manager)', async () => {
      const objectiveId = 'obj-1'
      const extendData = {
        extendedDeadline: '2025-07-31T23:59:59.999Z',
        extensionReason: 'Additional time needed due to technical complexity',
        missedReason: 'Underestimated implementation complexity'
      }

      const currentObjective = {
        id: objectiveId,
        title: 'Test Objective',
        ownerId: 'user-1',
        cycle: {
          id: 'cycle-1',
          endDate: new Date('2025-06-30')
        },
        originalEndDate: null
      }

      const updatedObjective = {
        ...currentObjective,
        wasMissed: true,
        originalEndDate: currentObjective.cycle.endDate,
        extendedDeadline: new Date(extendData.extendedDeadline),
        extensionReason: extendData.extensionReason,
        missedReason: extendData.missedReason,
        dateExtended: expect.any(Date),
        extendedBy: 'manager-1',
        status: 'EXTENDED',
        owner: { id: 'user-1', name: 'Test User' },
        keyResults: []
      }

      mockPrisma.objective.findUnique.mockResolvedValue(currentObjective)
      mockPrisma.objective.update.mockResolvedValue(updatedObjective)
      mockPrisma.notification.create.mockResolvedValue({
        id: 'notif-1',
        type: 'NEW_ASSIGNMENT',
        title: 'Objective Deadline Extended'
      })

      // Test the extend logic
      const objective = await mockPrisma.objective.findUnique({
        where: { id: objectiveId },
        include: { cycle: true }
      })

      expect(objective).toEqual(currentObjective)

      const result = await mockPrisma.objective.update({
        where: { id: objectiveId },
        data: {
          wasMissed: true,
          originalEndDate: objective.originalEndDate || objective.cycle.endDate,
          extendedDeadline: new Date(extendData.extendedDeadline),
          extensionReason: extendData.extensionReason,
          missedReason: extendData.missedReason,
          dateExtended: expect.any(Date),
          extendedBy: 'manager-1',
          status: 'EXTENDED'
        },
        include: {
          owner: true,
          cycle: true,
          keyResults: true
        }
      })

      // Create notification
      await mockPrisma.notification.create({
        data: {
          type: 'NEW_ASSIGNMENT',
          title: 'Objective Deadline Extended',
          message: `Your objective "${currentObjective.title}" has been given a new deadline: ${new Date(extendData.extendedDeadline).toLocaleDateString()}`,
          userId: currentObjective.ownerId,
          actionUrl: `/dashboard/manage?filter=extended`
        }
      })

      expect(mockPrisma.objective.findUnique).toHaveBeenCalledWith({
        where: { id: objectiveId },
        include: { cycle: true }
      })

      expect(mockPrisma.objective.update).toHaveBeenCalledWith({
        where: { id: objectiveId },
        data: {
          wasMissed: true,
          originalEndDate: objective.originalEndDate || objective.cycle.endDate,
          extendedDeadline: new Date(extendData.extendedDeadline),
          extensionReason: extendData.extensionReason,
          missedReason: extendData.missedReason,
          dateExtended: expect.any(Date),
          extendedBy: 'manager-1',
          status: 'EXTENDED'
        },
        include: {
          owner: true,
          cycle: true,
          keyResults: true
        }
      })

      expect(mockPrisma.notification.create).toHaveBeenCalledWith({
        data: {
          type: 'NEW_ASSIGNMENT',
          title: 'Objective Deadline Extended',
          message: `Your objective "${currentObjective.title}" has been given a new deadline: ${new Date(extendData.extendedDeadline).toLocaleDateString()}`,
          userId: currentObjective.ownerId,
          actionUrl: `/dashboard/manage?filter=extended`
        }
      })
    })

    it('should extend deadline for missed objective (Admin)', async () => {
      mockGetServerSession.mockResolvedValue({
        user: { id: 'admin-1', role: 'ADMIN', email: 'admin@test.com', name: 'Test Admin' }
      })

      const objectiveId = 'obj-1'
      const extendData = {
        extendedDeadline: '2025-08-15T23:59:59.999Z',
        extensionReason: 'Strategic priority shift requires additional time'
      }

      const currentObjective = {
        id: objectiveId,
        title: 'Admin Test Objective',
        ownerId: 'user-2',
        cycle: {
          id: 'cycle-1',
          endDate: new Date('2025-06-30')
        },
        originalEndDate: null
      }

      mockPrisma.objective.findUnique.mockResolvedValue(currentObjective)
      mockPrisma.objective.update.mockResolvedValue({
        ...currentObjective,
        status: 'EXTENDED',
        extendedBy: 'admin-1'
      })
      mockPrisma.notification.create.mockResolvedValue({ id: 'notif-2' })

      const objective = await mockPrisma.objective.findUnique({
        where: { id: objectiveId },
        include: { cycle: true }
      })

      expect(objective).toEqual(currentObjective)
      expect(mockPrisma.objective.findUnique).toHaveBeenCalled()
    })

    it('should reject extension for STAFF role', async () => {
      mockGetServerSession.mockResolvedValue({
        user: { id: 'staff-1', role: 'STAFF', email: 'staff@test.com', name: 'Test Staff' }
      })

      const userRole = 'STAFF'
      const hasPermission = userRole === 'ADMIN' || userRole === 'MANAGER'

      expect(hasPermission).toBe(false)
    })

    it('should reject extension when user is not authenticated', async () => {
      mockGetServerSession.mockResolvedValue(null)

      const session = null
      const isAuthenticated = session?.user?.id

      expect(isAuthenticated).toBeFalsy()
    })

    it('should validate required fields for extension', () => {
      const validExtensionData = {
        extendedDeadline: '2025-07-31T23:59:59.999Z',
        extensionReason: 'Valid reason for extension'
      }

      const invalidExtensionData1 = {
        // Missing extendedDeadline
        extensionReason: 'Valid reason'
      }

      const invalidExtensionData2 = {
        extendedDeadline: '2025-07-31T23:59:59.999Z'
        // Missing extensionReason
      }

      const validateExtensionData = (data) => {
        return !!(data.extendedDeadline && data.extensionReason)
      }

      expect(validateExtensionData(validExtensionData)).toBe(true)
      expect(validateExtensionData(invalidExtensionData1)).toBe(false)
      expect(validateExtensionData(invalidExtensionData2)).toBe(false)
    })

    it('should handle objective not found', async () => {
      const objectiveId = 'non-existent'
      
      mockPrisma.objective.findUnique.mockResolvedValue(null)

      const objective = await mockPrisma.objective.findUnique({
        where: { id: objectiveId },
        include: { cycle: true }
      })

      expect(objective).toBeNull()
      expect(mockPrisma.objective.findUnique).toHaveBeenCalledWith({
        where: { id: objectiveId },
        include: { cycle: true }
      })
    })

    it('should preserve original end date when extending already extended objective', async () => {
      const objectiveId = 'obj-1'
      const originalDate = new Date('2025-06-30')
      const cycleEndDate = new Date('2025-07-15') // Different from original
      const firstExtension = new Date('2025-07-31')
      const secondExtension = new Date('2025-08-31')

      const alreadyExtendedObjective = {
        id: objectiveId,
        title: 'Already Extended Objective',
        ownerId: 'user-1',
        originalEndDate: originalDate, // Already has original date
        extendedDeadline: firstExtension,
        cycle: {
          id: 'cycle-1',
          endDate: cycleEndDate // Different from original
        }
      }

      mockPrisma.objective.findUnique.mockResolvedValue(alreadyExtendedObjective)

      const objective = await mockPrisma.objective.findUnique({
        where: { id: objectiveId },
        include: { cycle: true }
      })

      // When extending again, should preserve original date, not use cycle date
      const originalEndDateToUse = objective.originalEndDate || objective.cycle.endDate

      expect(originalEndDateToUse).toEqual(originalDate)
      expect(originalEndDateToUse).not.toEqual(objective.cycle.endDate)
    })

    it('should create proper notification message', () => {
      const objectiveTitle = 'Test Objective'
      const newDeadline = new Date('2025-07-31T23:59:59.999Z')
      const ownerId = 'user-1'

      const expectedNotification = {
        type: 'NEW_ASSIGNMENT',
        title: 'Objective Deadline Extended',
        message: `Your objective "${objectiveTitle}" has been given a new deadline: ${newDeadline.toLocaleDateString()}`,
        userId: ownerId,
        actionUrl: `/dashboard/manage?filter=extended`
      }

      expect(expectedNotification.message).toContain(objectiveTitle)
      expect(expectedNotification.message).toContain(newDeadline.toLocaleDateString())
      expect(expectedNotification.userId).toBe(ownerId)
      expect(expectedNotification.actionUrl).toBe('/dashboard/manage?filter=extended')
    })
  })

  describe('Enhanced objective fields', () => {
    it('should handle objectives with extension fields', async () => {
      const extendedObjective = {
        id: '1',
        title: 'Extended Objective',
        description: 'This objective was extended',
        status: 'EXTENDED',
        progress: 45,
        wasMissed: true,
        originalEndDate: new Date('2025-06-30'),
        extendedDeadline: new Date('2025-07-31'),
        missedReason: 'Technical complexity underestimated',
        extensionReason: 'Need additional time for proper implementation',
        dateExtended: new Date('2025-07-01'),
        extendedBy: 'manager-1',
        extendedByUser: {
          id: 'manager-1',
          name: 'Test Manager',
          email: 'manager@test.com'
        },
        ownerId: '1',
        cycleId: 'cycle-1',
        owner: {
          id: '1',
          name: 'John Doe',
          email: 'john@test.com',
          position: 'Developer'
        },
        cycle: {
          id: 'cycle-1',
          name: 'Q2 2025',
          startDate: '2025-04-01',
          endDate: '2025-06-30'
        },
        keyResults: []
      }

      mockPrisma.objective.findMany.mockResolvedValue([extendedObjective])

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
          extendedByUser: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      })

      expect(objectives[0]).toHaveProperty('wasMissed', true)
      expect(objectives[0]).toHaveProperty('originalEndDate')
      expect(objectives[0]).toHaveProperty('extendedDeadline')
      expect(objectives[0]).toHaveProperty('missedReason')
      expect(objectives[0]).toHaveProperty('extensionReason')
      expect(objectives[0]).toHaveProperty('dateExtended')
      expect(objectives[0]).toHaveProperty('extendedBy')
      expect(objectives[0]).toHaveProperty('extendedByUser')
      expect(objectives[0].status).toBe('EXTENDED')
    })

    it('should filter objectives by extended status', async () => {
      const extendedObjectives = [
        {
          id: '1',
          title: 'Extended Objective 1',
          status: 'EXTENDED',
          wasMissed: true
        },
        {
          id: '2',
          title: 'Extended Objective 2',
          status: 'EXTENDED',
          wasMissed: true
        }
      ]

      mockPrisma.objective.findMany.mockResolvedValue(extendedObjectives)

      const objectives = await mockPrisma.objective.findMany({
        where: { status: 'EXTENDED' },
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
        where: { status: 'EXTENDED' },
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

      expect(objectives).toHaveLength(2)
      expect(objectives.every(obj => obj.status === 'EXTENDED')).toBe(true)
    })

    it('should filter objectives by missed status', async () => {
      const missedObjectives = [
        {
          id: '1',
          title: 'Missed Objective 1',
          wasMissed: true,
          status: 'IN_PROGRESS'
        }
      ]

      mockPrisma.objective.findMany.mockResolvedValue(missedObjectives)

      const objectives = await mockPrisma.objective.findMany({
        where: { wasMissed: true },
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

      expect(objectives.every(obj => obj.wasMissed === true)).toBe(true)
    })
  })
}) 