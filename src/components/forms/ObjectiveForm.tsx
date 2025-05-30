'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface User {
  id: string
  name: string
  email: string
  position: string
  role: string
}

interface Cycle {
  id: string
  name: string
  status: string
}

interface Objective {
  id: string
  title: string
  description?: string
  type: string
  status: string
}

interface ObjectiveFormProps {
  objective?: Objective
  onSubmit: (data: any) => void
  onCancel: () => void
  isLoading?: boolean
}

export default function ObjectiveForm({ objective, onSubmit, onCancel, isLoading }: ObjectiveFormProps) {
  const [formData, setFormData] = useState({
    title: objective?.title || '',
    description: objective?.description || '',
    type: objective?.type || 'PERSONAL',
    status: objective?.status || 'NOT_STARTED',
    ownerId: '',
    cycleId: '',
    parentId: ''
  })

  const [users, setUsers] = useState<User[]>([])
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [objectives, setObjectives] = useState<Objective[]>([])

  useEffect(() => {
    // Fetch users
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers)
      .catch(console.error)

    // Fetch cycles
    fetch('/api/cycles')
      .then(res => res.json())
      .then(setCycles)
      .catch(console.error)

    // Fetch objectives for parent selection
    fetch('/api/objectives')
      .then(res => res.json())
      .then(setObjectives)
      .catch(console.error)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{objective ? 'Edit Objective' : 'Create New Objective'}</CardTitle>
        <CardDescription>
          {objective ? 'Update the objective details below.' : 'Fill in the details to create a new objective.'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter objective title"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter objective description"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                Type *
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="PERSONAL">Personal</option>
                <option value="TEAM">Team</option>
                <option value="COMPANY">Company</option>
              </select>
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="NOT_STARTED">Not Started</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
                <option value="ON_HOLD">On Hold</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="ownerId" className="block text-sm font-medium text-gray-700 mb-1">
                Owner *
              </label>
              <select
                id="ownerId"
                name="ownerId"
                value={formData.ownerId}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select owner</option>
                {users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name} ({user.position})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="cycleId" className="block text-sm font-medium text-gray-700 mb-1">
                Cycle *
              </label>
              <select
                id="cycleId"
                name="cycleId"
                value={formData.cycleId}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select cycle</option>
                {cycles.map(cycle => (
                  <option key={cycle.id} value={cycle.id}>
                    {cycle.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="parentId" className="block text-sm font-medium text-gray-700 mb-1">
              Parent Objective (Optional)
            </label>
            <select
              id="parentId"
              name="parentId"
              value={formData.parentId}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">No parent objective</option>
              {objectives
                .filter(obj => obj.id !== objective?.id) // Don't show current objective as parent option
                .map(obj => (
                  <option key={obj.id} value={obj.id}>
                    {obj.title}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : (objective ? 'Update Objective' : 'Create Objective')}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
} 