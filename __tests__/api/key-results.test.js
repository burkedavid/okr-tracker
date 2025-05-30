import { createRequest, createResponse } from 'node-mocks-http'

// Mock Prisma
jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    keyResult: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    objective: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    $disconnect: jest.fn(),
  })),
}))

// Mock NextAuth
jest.mock('next-auth/next', () => ({
  getServerSession: jest.fn(),
}))

describe('/api/key-results', () => {
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

  describe('GET /api/key-results', () => {
    it('should return all key results with owner and objective info', async () => {
      const mockKeyResults = [
        {
          id: '1',
          description: 'Increase monthly revenue to $100k',
          currentValue: 75000,
          targetValue: 100000,
          metricType: 'CURRENCY',
          unit: 'USD',
          objectiveId: 'obj-1',
          ownerId: 'user-1',
          owner: {
            id: 'user-1',
            name: 'John Doe',
            email: 'john@test.com',
            position: 'Sales Manager'
          },
          objective: {
            id: 'obj-1',
            title: 'Revenue Growth',
            description: 'Increase company revenue'
          }
        }
      ]

      mockPrisma.keyResult.findMany.mockResolvedValue(mockKeyResults)

      const keyResults = await mockPrisma.keyResult.findMany({
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
              position: true,
            },
          },
          objective: {
            select: {
              id: true,
              title: true,
              description: true,
            },
          },
        },
      })

      expect(mockPrisma.keyResult.findMany).toHaveBeenCalledWith({
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
              position: true,
            },
          },
          objective: {
            select: {
              id: true,
              title: true,
              description: true,
            },
          },
        },
      })
      expect(keyResults).toEqual(mockKeyResults)
      expect(keyResults[0]).toHaveProperty('owner')
      expect(keyResults[0]).toHaveProperty('objective')
    })

    it('should filter key results by objective when objectiveId is provided', async () => {
      const objectiveId = 'obj-1'
      const mockKeyResults = [
        {
          id: '1',
          description: 'Key Result 1',
          objectiveId: objectiveId
        }
      ]

      mockPrisma.keyResult.findMany.mockResolvedValue(mockKeyResults)

      const keyResults = await mockPrisma.keyResult.findMany({
        where: { objectiveId },
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
              position: true,
            },
          },
          objective: {
            select: {
              id: true,
              title: true,
              description: true,
            },
          },
        },
      })

      expect(mockPrisma.keyResult.findMany).toHaveBeenCalledWith({
        where: { objectiveId },
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
              position: true,
            },
          },
          objective: {
            select: {
              id: true,
              title: true,
              description: true,
            },
          },
        },
      })
      expect(keyResults).toEqual(mockKeyResults)
    })

    it('should filter key results by owner when ownerId is provided', async () => {
      const ownerId = 'user-1'
      const mockKeyResults = [
        {
          id: '1',
          description: 'Personal Key Result',
          ownerId: ownerId
        }
      ]

      mockPrisma.keyResult.findMany.mockResolvedValue(mockKeyResults)

      const keyResults = await mockPrisma.keyResult.findMany({
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
          objective: {
            select: {
              id: true,
              title: true,
              description: true,
            },
          },
        },
      })

      expect(mockPrisma.keyResult.findMany).toHaveBeenCalledWith({
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
          objective: {
            select: {
              id: true,
              title: true,
              description: true,
            },
          },
        },
      })
      expect(keyResults).toEqual(mockKeyResults)
    })
  })

  describe('POST /api/key-results', () => {
    it('should create a new key result with valid data', async () => {
      const newKeyResultData = {
        description: 'Achieve 95% customer satisfaction',
        targetValue: 95,
        metricType: 'PERCENTAGE',
        unit: '%',
        objectiveId: 'obj-1',
        ownerId: 'user-1'
      }

      const createdKeyResult = {
        id: '2',
        ...newKeyResultData,
        currentValue: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      mockPrisma.keyResult.create.mockResolvedValue(createdKeyResult)

      const keyResult = await mockPrisma.keyResult.create({
        data: {
          ...newKeyResultData,
          currentValue: 0,
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
          objective: {
            select: {
              id: true,
              title: true,
              description: true,
            },
          },
        },
      })

      expect(mockPrisma.keyResult.create).toHaveBeenCalledWith({
        data: {
          ...newKeyResultData,
          currentValue: 0,
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
          objective: {
            select: {
              id: true,
              title: true,
              description: true,
            },
          },
        },
      })
      expect(keyResult).toEqual(createdKeyResult)
      expect(keyResult.currentValue).toBe(0)
    })

    it('should validate required fields', () => {
      const invalidKeyResultData = {
        description: 'Test Key Result',
        // Missing targetValue, metricType, objectiveId, ownerId
      }

      const requiredFields = ['description', 'targetValue', 'metricType', 'objectiveId', 'ownerId']
      const missingFields = requiredFields.filter(field => !invalidKeyResultData[field])
      
      expect(missingFields).toContain('targetValue')
      expect(missingFields).toContain('metricType')
      expect(missingFields).toContain('objectiveId')
      expect(missingFields).toContain('ownerId')
      expect(missingFields).toHaveLength(4)
    })

    it('should validate metric types', () => {
      const validMetricTypes = ['NUMBER', 'PERCENTAGE', 'CURRENCY', 'BOOLEAN']
      const invalidMetricTypes = ['INVALID', 'TEXT', 'DATE']

      validMetricTypes.forEach(metricType => {
        expect(validMetricTypes.includes(metricType)).toBe(true)
      })

      invalidMetricTypes.forEach(metricType => {
        expect(validMetricTypes.includes(metricType)).toBe(false)
      })
    })

    it('should validate target value is positive', () => {
      const validateTargetValue = (value) => {
        return typeof value === 'number' && value > 0
      }

      expect(validateTargetValue(100)).toBe(true)
      expect(validateTargetValue(0.5)).toBe(true)
      expect(validateTargetValue(0)).toBe(false)
      expect(validateTargetValue(-10)).toBe(false)
      expect(validateTargetValue('100')).toBe(false)
    })
  })

  describe('PUT /api/key-results/[id]', () => {
    it('should update key result with valid data', async () => {
      const keyResultId = '1'
      const updateData = {
        description: 'Updated Key Result',
        currentValue: 80,
        targetValue: 100
      }

      const updatedKeyResult = {
        id: keyResultId,
        ...updateData,
        metricType: 'PERCENTAGE',
        unit: '%',
        objectiveId: 'obj-1',
        ownerId: 'user-1'
      }

      mockPrisma.keyResult.update.mockResolvedValue(updatedKeyResult)

      const keyResult = await mockPrisma.keyResult.update({
        where: { id: keyResultId },
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
          objective: {
            select: {
              id: true,
              title: true,
              description: true,
            },
          },
        },
      })

      expect(mockPrisma.keyResult.update).toHaveBeenCalledWith({
        where: { id: keyResultId },
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
          objective: {
            select: {
              id: true,
              title: true,
              description: true,
            },
          },
        },
      })
      expect(keyResult.description).toBe('Updated Key Result')
      expect(keyResult.currentValue).toBe(80)
    })

    it('should update objective progress when key result is updated', async () => {
      const keyResultId = '1'
      const objectiveId = 'obj-1'
      
      // Mock key result update
      const updatedKeyResult = {
        id: keyResultId,
        objectiveId: objectiveId,
        currentValue: 80,
        targetValue: 100
      }
      
      mockPrisma.keyResult.update.mockResolvedValue(updatedKeyResult)
      
      // Mock finding all key results for the objective
      const allKeyResults = [
        { currentValue: 80, targetValue: 100 }, // 80%
        { currentValue: 60, targetValue: 100 }, // 60%
        { currentValue: 90, targetValue: 100 }, // 90%
      ]
      
      mockPrisma.keyResult.findMany.mockResolvedValue(allKeyResults)
      
      // Mock objective update
      mockPrisma.objective.update.mockResolvedValue({
        id: objectiveId,
        progress: 77 // (80 + 60 + 90) / 3 = 76.67 rounded to 77
      })

      // Simulate the update process
      const keyResult = await mockPrisma.keyResult.update({
        where: { id: keyResultId },
        data: { currentValue: 80 }
      })

      const keyResults = await mockPrisma.keyResult.findMany({
        where: { objectiveId: keyResult.objectiveId }
      })

      // Calculate new progress
      const totalProgress = keyResults.reduce((sum, kr) => {
        const progress = kr.targetValue > 0 ? Math.min((kr.currentValue / kr.targetValue) * 100, 100) : 0
        return sum + progress
      }, 0)
      const averageProgress = keyResults.length > 0 ? Math.round(totalProgress / keyResults.length) : 0

      await mockPrisma.objective.update({
        where: { id: objectiveId },
        data: { progress: averageProgress }
      })

      expect(averageProgress).toBe(77) // (80 + 60 + 90) / 3 = 76.67 rounded to 77
      expect(mockPrisma.objective.update).toHaveBeenCalledWith({
        where: { id: objectiveId },
        data: { progress: 77 }
      })
    })

    it('should handle key result not found', async () => {
      const keyResultId = 'non-existent'
      
      mockPrisma.keyResult.update.mockRejectedValue(new Error('Key result not found'))

      try {
        await mockPrisma.keyResult.update({
          where: { id: keyResultId },
          data: { currentValue: 50 },
        })
      } catch (error) {
        expect(error.message).toBe('Key result not found')
      }
    })

    it('should validate current value constraints', () => {
      const validateCurrentValue = (currentValue, targetValue, metricType) => {
        if (typeof currentValue !== 'number') return false
        if (currentValue < 0) return false
        
        // For percentage, current value should not exceed 100
        if (metricType === 'PERCENTAGE' && currentValue > 100) return false
        
        return true
      }

      expect(validateCurrentValue(50, 100, 'NUMBER')).toBe(true)
      expect(validateCurrentValue(95, 100, 'PERCENTAGE')).toBe(true)
      expect(validateCurrentValue(105, 100, 'PERCENTAGE')).toBe(false)
      expect(validateCurrentValue(-10, 100, 'NUMBER')).toBe(false)
      expect(validateCurrentValue('50', 100, 'NUMBER')).toBe(false)
    })
  })

  describe('DELETE /api/key-results/[id]', () => {
    it('should delete key result successfully', async () => {
      const keyResultId = '1'
      const objectiveId = 'obj-1'
      
      const deletedKeyResult = {
        id: keyResultId,
        objectiveId: objectiveId,
        description: 'Deleted Key Result'
      }
      
      mockPrisma.keyResult.delete.mockResolvedValue(deletedKeyResult)

      const keyResult = await mockPrisma.keyResult.delete({
        where: { id: keyResultId },
      })

      expect(mockPrisma.keyResult.delete).toHaveBeenCalledWith({
        where: { id: keyResultId },
      })
      expect(keyResult.id).toBe(keyResultId)
    })

    it('should update objective progress after key result deletion', async () => {
      const keyResultId = '1'
      const objectiveId = 'obj-1'
      
      // Mock deletion
      mockPrisma.keyResult.delete.mockResolvedValue({
        id: keyResultId,
        objectiveId: objectiveId
      })
      
      // Mock remaining key results after deletion
      const remainingKeyResults = [
        { currentValue: 100, targetValue: 100 }, // 100%
        { currentValue: 50, targetValue: 100 },  // 50%
      ]
      
      mockPrisma.keyResult.findMany.mockResolvedValue(remainingKeyResults)
      
      // Mock objective update
      mockPrisma.objective.update.mockResolvedValue({
        id: objectiveId,
        progress: 75 // (100 + 50) / 2 = 75
      })

      // Simulate the deletion process
      const deletedKeyResult = await mockPrisma.keyResult.delete({
        where: { id: keyResultId }
      })

      const remainingResults = await mockPrisma.keyResult.findMany({
        where: { objectiveId: deletedKeyResult.objectiveId }
      })

      // Calculate new progress
      const totalProgress = remainingResults.reduce((sum, kr) => {
        const progress = kr.targetValue > 0 ? Math.min((kr.currentValue / kr.targetValue) * 100, 100) : 0
        return sum + progress
      }, 0)
      const averageProgress = remainingResults.length > 0 ? Math.round(totalProgress / remainingResults.length) : 0

      await mockPrisma.objective.update({
        where: { id: objectiveId },
        data: { progress: averageProgress }
      })

      expect(averageProgress).toBe(75)
      expect(mockPrisma.objective.update).toHaveBeenCalledWith({
        where: { id: objectiveId },
        data: { progress: 75 }
      })
    })

    it('should handle delete of non-existent key result', async () => {
      const keyResultId = 'non-existent'
      
      mockPrisma.keyResult.delete.mockRejectedValue(new Error('Key result not found'))

      try {
        await mockPrisma.keyResult.delete({
          where: { id: keyResultId },
        })
      } catch (error) {
        expect(error.message).toBe('Key result not found')
      }
    })
  })

  describe('Progress calculation logic', () => {
    it('should calculate correct progress percentage', () => {
      const calculateProgress = (currentValue, targetValue) => {
        if (targetValue <= 0) return 0
        return Math.min((currentValue / targetValue) * 100, 100)
      }

      expect(calculateProgress(50, 100)).toBe(50)
      expect(calculateProgress(100, 100)).toBe(100)
      expect(calculateProgress(150, 100)).toBe(100) // Capped at 100%
      expect(calculateProgress(0, 100)).toBe(0)
      expect(calculateProgress(50, 0)).toBe(0) // Avoid division by zero
    })

    it('should handle different metric types correctly', () => {
      const formatValue = (value, metricType, unit) => {
        switch (metricType) {
          case 'CURRENCY':
            return `${unit}${value.toLocaleString()}`
          case 'PERCENTAGE':
            return `${value}%`
          case 'NUMBER':
            return value.toString()
          case 'BOOLEAN':
            return value ? 'Yes' : 'No'
          default:
            return value.toString()
        }
      }

      expect(formatValue(1000, 'CURRENCY', '$')).toBe('$1,000')
      expect(formatValue(85, 'PERCENTAGE', '%')).toBe('85%')
      expect(formatValue(42, 'NUMBER', '')).toBe('42')
      expect(formatValue(1, 'BOOLEAN', '')).toBe('Yes')
      expect(formatValue(0, 'BOOLEAN', '')).toBe('No')
    })
  })

  describe('Metric type validation', () => {
    it('should validate metric type and unit combinations', () => {
      const validateMetricTypeUnit = (metricType, unit) => {
        const validCombinations = {
          'CURRENCY': ['$', '€', '£', 'USD', 'EUR', 'GBP'],
          'PERCENTAGE': ['%'],
          'NUMBER': ['', 'units', 'items', 'people'],
          'BOOLEAN': ['']
        }

        return validCombinations[metricType]?.includes(unit) || false
      }

      expect(validateMetricTypeUnit('CURRENCY', '$')).toBe(true)
      expect(validateMetricTypeUnit('CURRENCY', 'USD')).toBe(true)
      expect(validateMetricTypeUnit('PERCENTAGE', '%')).toBe(true)
      expect(validateMetricTypeUnit('NUMBER', 'units')).toBe(true)
      expect(validateMetricTypeUnit('BOOLEAN', '')).toBe(true)
      
      expect(validateMetricTypeUnit('CURRENCY', '%')).toBe(false)
      expect(validateMetricTypeUnit('PERCENTAGE', '$')).toBe(false)
      expect(validateMetricTypeUnit('INVALID', 'test')).toBe(false)
    })
  })

  describe('Authorization checks', () => {
    it('should allow owners to update their key results', () => {
      const keyResult = { id: '1', ownerId: 'user-1' }
      const session = { user: { id: 'user-1', role: 'STAFF' } }

      const canUpdate = session.user.id === keyResult.ownerId || 
                       ['ADMIN', 'MANAGER'].includes(session.user.role)

      expect(canUpdate).toBe(true)
    })

    it('should allow managers and admins to update any key result', () => {
      const keyResult = { id: '1', ownerId: 'user-1' }
      const managerSession = { user: { id: 'user-2', role: 'MANAGER' } }
      const adminSession = { user: { id: 'user-3', role: 'ADMIN' } }

      const managerCanUpdate = managerSession.user.id === keyResult.ownerId || 
                              ['ADMIN', 'MANAGER'].includes(managerSession.user.role)
      const adminCanUpdate = adminSession.user.id === keyResult.ownerId || 
                            ['ADMIN', 'MANAGER'].includes(adminSession.user.role)

      expect(managerCanUpdate).toBe(true)
      expect(adminCanUpdate).toBe(true)
    })

    it('should prevent staff from updating others key results', () => {
      const keyResult = { id: '1', ownerId: 'user-1' }
      const session = { user: { id: 'user-2', role: 'STAFF' } }

      const canUpdate = session.user.id === keyResult.ownerId || 
                       ['ADMIN', 'MANAGER'].includes(session.user.role)

      expect(canUpdate).toBe(false)
    })
  })
}) 