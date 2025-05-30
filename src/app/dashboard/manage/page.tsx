'use client'

import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import DashboardHeader from '@/components/layout/DashboardHeader'
import { 
  Plus, 
  Target, 
  BarChart3, 
  TrendingUp, 
  Calendar,
  Save,
  X,
  CheckCircle,
  Clock,
  AlertCircle,
  Home,
  User,
  Building,
  Search,
  Filter
} from 'lucide-react'

interface Objective {
  id: string
  title: string
  description: string
  status: string
  progress: number
  ownerId: string
  owner: {
    name: string
    position: string
  }
  keyResults: Array<{
    id: string
    description: string
    currentValue: number
    targetValue: number
    metricType: string
    unit?: string
    owner: {
      id: string
      name: string
      email: string
      position: string
    }
  }>
  cycle: {
    name: string
  }
}

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
  active: boolean
}

export default function ManagePage() {
  const [objectives, setObjectives] = useState<Objective[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [loading, setLoading] = useState(true)
  const [showObjectiveForm, setShowObjectiveForm] = useState(false)
  const [showKeyResultForm, setShowKeyResultForm] = useState(false)
  const [showProgressForm, setShowProgressForm] = useState(false)
  const [filterStatus, setFilterStatus] = useState('')
  const [filterUser, setFilterUser] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const { data: session } = useSession()

  // Form states
  const [objectiveForm, setObjectiveForm] = useState({
    title: '',
    description: '',
    type: 'PERSONAL',
    ownerId: '',
    cycleId: ''
  })

  const [keyResultForm, setKeyResultForm] = useState({
    description: '',
    metricType: 'NUMBER',
    targetValue: '',
    unit: '',
    objectiveId: '',
    ownerId: ''
  })

  const [progressForm, setProgressForm] = useState({
    value: '',
    notes: '',
    keyResultId: '',
    createdById: '',
    keyResultFilterUserId: ''
  })

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    // Auto-filter for non-manager users to show only their objectives
    if (session?.user?.role === 'STAFF' && session?.user?.id) {
      setFilterUser(session.user.id)
    }
  }, [session])

  const fetchData = async () => {
    try {
      const [objectivesRes, usersRes, cyclesRes] = await Promise.all([
        fetch('/api/objectives'),
        fetch('/api/users'),
        fetch('/api/cycles')
      ])

      const [objectivesData, usersData, cyclesData] = await Promise.all([
        objectivesRes.json(),
        usersRes.json(),
        cyclesRes.json()
      ])

      setObjectives(objectivesData)
      setUsers(usersData)
      setCycles(cyclesData)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setLoading(false)
    }
  }

  const handleCreateObjective = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/objectives', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(objectiveForm),
      })

      if (response.ok) {
        setShowObjectiveForm(false)
        setObjectiveForm({
          title: '',
          description: '',
          type: 'PERSONAL',
          ownerId: '',
          cycleId: ''
        })
        fetchData()
      } else {
        console.error('Failed to create objective')
      }
    } catch (error) {
      console.error('Error creating objective:', error)
    }
  }

  const handleCreateKeyResult = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/key-results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(keyResultForm),
      })

      if (response.ok) {
        setShowKeyResultForm(false)
        setKeyResultForm({
          description: '',
          metricType: 'NUMBER',
          targetValue: '',
          unit: '',
          objectiveId: '',
          ownerId: ''
        })
        fetchData()
      } else {
        console.error('Failed to create key result')
      }
    } catch (error) {
      console.error('Error creating key result:', error)
    }
  }

  const handleUpdateProgress = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/progress-updates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(progressForm),
      })

      if (response.ok) {
        setShowProgressForm(false)
        setProgressForm({
          value: '',
          notes: '',
          keyResultId: '',
          createdById: '',
          keyResultFilterUserId: ''
        })
        fetchData()
      } else {
        console.error('Failed to update progress')
      }
    } catch (error) {
      console.error('Error updating progress:', error)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return <CheckCircle className="w-5 h-5 text-emerald-600" />
      case 'IN_PROGRESS':
        return <Clock className="w-5 h-5 text-blue-600" />
      case 'AT_RISK':
        return <AlertCircle className="w-5 h-5 text-amber-600" />
      default:
        return <Target className="w-5 h-5 text-slate-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'NOT_STARTED': 'bg-slate-100 text-slate-700 border-slate-200',
      'IN_PROGRESS': 'bg-blue-100 text-blue-700 border-blue-200',
      'COMPLETED': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'AT_RISK': 'bg-amber-100 text-amber-700 border-amber-200'
    }
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.NOT_STARTED
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'text-emerald-600'
    if (progress >= 60) return 'text-amber-600'
    return 'text-red-500'
  }

  const getProgressBg = (progress: number) => {
    if (progress >= 80) return 'bg-emerald-50 border-emerald-200'
    if (progress >= 60) return 'bg-amber-50 border-amber-200'
    return 'bg-red-50 border-red-200'
  }

  const filteredObjectives = objectives.filter(objective => {
    const matchesSearch = objective.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         objective.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         objective.owner.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = !filterStatus || objective.status === filterStatus
    const matchesUser = !filterUser || objective.ownerId === filterUser
    return matchesSearch && matchesStatus && matchesUser
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
            <div className="text-lg font-medium text-slate-600">Loading OKRs...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <DashboardHeader
        title="Manage OKRs"
        description="Create and manage your objectives and key results"
        currentPage="Manage OKRs"
        icon={<Target className="w-6 h-6 text-blue-600" />}
        actions={[
          {
            label: 'Add Objective',
            onClick: () => setShowObjectiveForm(true),
            variant: 'default',
            icon: <Plus className="w-4 h-4" />
          },
          {
            label: 'Add Key Result',
            onClick: () => setShowKeyResultForm(true),
            variant: 'secondary',
            icon: <BarChart3 className="w-4 h-4" />
          },
          {
            label: 'Update Progress',
            onClick: () => {
              setShowProgressForm(true)
              // Set default user to current logged-in user
              if (session?.user?.id) {
                setProgressForm(prev => ({
                  ...prev,
                  createdById: session.user.id,
                  keyResultFilterUserId: session.user.id // Also filter key results by current user by default
                }))
              }
            },
            variant: 'ghost',
            icon: <TrendingUp className="w-4 h-4" />
          }
        ]}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Filters */}
        <Card className="bg-white shadow-sm border-slate-200">
          <CardHeader className="border-b border-slate-100 pb-4">
            <CardTitle className="flex items-center text-lg font-semibold text-slate-900">
              <Filter className="w-5 h-5 mr-2 text-blue-600" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Only show user filter for managers and admins */}
              {session?.user?.role !== 'STAFF' && (
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Team Member</label>
                  <select
                    value={filterUser}
                    onChange={(e) => setFilterUser(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">All Team Members</option>
                    {users.map(user => (
                      <option key={user.id} value={user.id}>
                        {user.name} ({user.position})
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {/* Show info message for staff users */}
              {session?.user?.role === 'STAFF' && (
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Viewing</label>
                  <div className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 text-sm">
                    Your personal objectives
                  </div>
                </div>
              )}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Search Objectives</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by title, description, or owner..."
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Filter by Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">All Statuses</option>
                  <option value="NOT_STARTED">Not Started</option>
                  <option value="IN_PROGRESS">In Progress</option>
                  <option value="COMPLETED">Completed</option>
                  <option value="AT_RISK">At Risk</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Filters */}
        <Card className="bg-white shadow-sm border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 text-sm">
              <span className="font-medium text-slate-700">Quick filters:</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  if (session?.user?.role !== 'STAFF') {
                    setFilterUser('')
                  }
                  setFilterStatus('')
                  setSearchTerm('')
                }}
                className="text-slate-600 hover:bg-slate-50 hover:text-slate-700"
              >
                All Objectives
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  if (session?.user?.role !== 'STAFF') {
                    setFilterUser('')
                  }
                  setFilterStatus('IN_PROGRESS')
                  setSearchTerm('')
                }}
                className="text-blue-600 hover:bg-blue-50 hover:text-blue-700"
              >
                In Progress
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  if (session?.user?.role !== 'STAFF') {
                    setFilterUser('')
                  }
                  setFilterStatus('AT_RISK')
                  setSearchTerm('')
                }}
                className="text-amber-600 hover:bg-amber-50 hover:text-amber-700"
              >
                At Risk
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  if (session?.user?.role !== 'STAFF') {
                    setFilterUser('')
                  }
                  setFilterStatus('COMPLETED')
                  setSearchTerm('')
                }}
                className="text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
              >
                Completed
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Objective Form */}
        {showObjectiveForm && (
          <Card className="bg-white shadow-xl border-0 ring-1 ring-gray-200">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  <CardTitle className="text-xl text-gray-900">Create New Objective</CardTitle>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowObjectiveForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <CardDescription className="text-gray-600">
                Fill in the details to create a new objective for your team or organisation.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleCreateObjective} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title *</label>
                  <input
                    type="text"
                    value={objectiveForm.title}
                    onChange={(e) => setObjectiveForm({...objectiveForm, title: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter a clear, inspiring objective title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea
                    value={objectiveForm.description}
                    onChange={(e) => setObjectiveForm({...objectiveForm, description: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Describe what you want to achieve and why it matters"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Type *</label>
                    <select
                      value={objectiveForm.type}
                      onChange={(e) => setObjectiveForm({...objectiveForm, type: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="PERSONAL">Personal</option>
                      <option value="TEAM">Team</option>
                      <option value="COMPANY">Company</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Owner *</label>
                    <select
                      value={objectiveForm.ownerId}
                      onChange={(e) => setObjectiveForm({...objectiveForm, ownerId: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Cycle *</label>
                    <select
                      value={objectiveForm.cycleId}
                      onChange={(e) => setObjectiveForm({...objectiveForm, cycleId: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowObjectiveForm(false)}
                    className="px-6"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Create Objective
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Key Result Form */}
        {showKeyResultForm && (
          <Card className="bg-white shadow-xl border-0 ring-1 ring-gray-200">
            <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                  <CardTitle className="text-xl text-gray-900">Add Key Result</CardTitle>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowKeyResultForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <CardDescription className="text-gray-600">
                Add a measurable key result to track progress on an objective.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleCreateKeyResult} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Objective *</label>
                  <select
                    value={keyResultForm.objectiveId}
                    onChange={(e) => setKeyResultForm({...keyResultForm, objectiveId: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select objective</option>
                    {objectives.map(objective => (
                      <option key={objective.id} value={objective.id}>
                        {objective.title} ({objective.owner.name})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
                  <input
                    type="text"
                    value={keyResultForm.description}
                    onChange={(e) => setKeyResultForm({...keyResultForm, description: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter a specific, measurable key result"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Metric Type *</label>
                    <select
                      value={keyResultForm.metricType}
                      onChange={(e) => setKeyResultForm({...keyResultForm, metricType: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="NUMBER">Number</option>
                      <option value="PERCENTAGE">Percentage</option>
                      <option value="CURRENCY">Currency</option>
                      <option value="BOOLEAN">Yes/No</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Target Value *</label>
                    <input
                      type="number"
                      value={keyResultForm.targetValue}
                      onChange={(e) => setKeyResultForm({...keyResultForm, targetValue: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Unit</label>
                    <input
                      type="text"
                      value={keyResultForm.unit}
                      onChange={(e) => setKeyResultForm({...keyResultForm, unit: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="%, $, users, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Owner *</label>
                    <select
                      value={keyResultForm.ownerId}
                      onChange={(e) => setKeyResultForm({...keyResultForm, ownerId: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select owner</option>
                      {users.map(user => (
                        <option key={user.id} value={user.id}>
                          {user.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowKeyResultForm(false)}
                    className="px-6"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Add Key Result
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Progress Update Form */}
        {showProgressForm && (
          <Card className="bg-white shadow-xl border-0 ring-1 ring-gray-200">
            <CardHeader className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-yellow-600" />
                  <CardTitle className="text-xl text-gray-900">Update Progress</CardTitle>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {
                    setShowProgressForm(false)
                    setProgressForm({
                      value: '',
                      notes: '',
                      keyResultId: '',
                      createdById: '',
                      keyResultFilterUserId: ''
                    })
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <CardDescription className="text-gray-600">
                Update the progress of a key result with current metrics.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleUpdateProgress} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Filter Key Results by User</label>
                  <select
                    value={progressForm.keyResultFilterUserId}
                    onChange={(e) => setProgressForm({...progressForm, keyResultFilterUserId: e.target.value, keyResultId: ''})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">All Users</option>
                    {users.map(user => (
                      <option key={user.id} value={user.id}>
                        {user.name} ({user.position})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Key Result *</label>
                  <select
                    value={progressForm.keyResultId}
                    onChange={(e) => setProgressForm({...progressForm, keyResultId: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select key result</option>
                    {objectives.flatMap(obj => 
                      obj.keyResults
                        .filter(kr => !progressForm.keyResultFilterUserId || kr.owner.id === progressForm.keyResultFilterUserId)
                        .map(kr => (
                          <option key={kr.id} value={kr.id}>
                            {kr.description} (Target: {kr.targetValue}{kr.unit}) - {kr.owner.name}
                          </option>
                        ))
                    )}
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Current Value *</label>
                    <input
                      type="number"
                      value={progressForm.value}
                      onChange={(e) => setProgressForm({...progressForm, value: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter current value"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Updated By *</label>
                    <select
                      value={progressForm.createdById}
                      onChange={(e) => setProgressForm({...progressForm, createdById: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select user</option>
                      {users.map(user => (
                        <option key={user.id} value={user.id}>
                          {user.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Notes</label>
                  <textarea
                    value={progressForm.notes}
                    onChange={(e) => setProgressForm({...progressForm, notes: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Add notes about this progress update, challenges, or achievements..."
                  />
                </div>
                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => {
                      setShowProgressForm(false)
                      setProgressForm({
                        value: '',
                        notes: '',
                        keyResultId: '',
                        createdById: '',
                        keyResultFilterUserId: ''
                      })
                    }}
                    className="px-6"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-yellow-600 to-green-600 hover:from-yellow-700 hover:to-green-700 text-white px-6"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Update Progress
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Current Objectives List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {session?.user?.role === 'STAFF' 
                  ? 'My Objectives'
                  : filterUser 
                    ? `${users.find(u => u.id === filterUser)?.name}'s Objectives`
                    : 'Team Objectives'
                }
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                {session?.user?.role === 'STAFF' || filterUser 
                  ? `${filteredObjectives.length} objective${filteredObjectives.length !== 1 ? 's' : ''}`
                  : `${filteredObjectives.length} of ${objectives.length} objective${objectives.length !== 1 ? 's' : ''}`
                }
              </p>
            </div>
          </div>
          
          <div className="grid gap-6">
            {filteredObjectives.map((objective) => (
              <Card key={objective.id} className={`bg-white shadow-sm hover:shadow-md transition-all duration-200 border-2 ${getProgressBg(objective.progress)}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(objective.status)}
                        <CardTitle className="text-xl font-semibold text-slate-900">{objective.title}</CardTitle>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(objective.status)}`}>
                          {objective.status.replace('_', ' ')}
                        </span>
                      </div>
                      <CardDescription className="text-slate-600 leading-relaxed">
                        {objective.description}
                      </CardDescription>
                      <div className="flex items-center space-x-6 text-sm text-slate-500">
                        <span className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{objective.owner.name}</span>
                        </span>
                        <span className="flex items-center space-x-2">
                          <Building className="w-4 h-4" />
                          <span>{objective.owner.position}</span>
                        </span>
                        <span className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{objective.cycle.name}</span>
                        </span>
                        <span className="flex items-center space-x-2">
                          <BarChart3 className="w-4 h-4" />
                          <span>{objective.keyResults.length} key results</span>
                        </span>
                      </div>
                    </div>
                    <div className="text-right ml-6">
                      <div className={`text-4xl font-bold ${getProgressColor(objective.progress)} mb-1`}>
                        {objective.progress}%
                      </div>
                      <div className="text-sm text-slate-500">progress</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <Progress value={objective.progress} className="h-3 bg-white/50" />
                    
                    {objective.keyResults.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-900 flex items-center text-lg">
                          <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                          Key Results ({objective.keyResults.length})
                        </h4>
                        <div className="space-y-3">
                          {objective.keyResults.map((kr) => {
                            const progress = kr.targetValue > 0 ? Math.min((kr.currentValue / kr.targetValue) * 100, 100) : 0
                            return (
                              <div key={kr.id} className="p-4 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-200 shadow-sm">
                                <div className="space-y-3">
                                  <div className="flex items-start justify-between">
                                    <p className="font-medium text-slate-900 leading-relaxed flex-1 pr-4">{kr.description}</p>
                                    <div className="text-right">
                                      <div className={`text-2xl font-bold ${getProgressColor(progress)}`}>
                                        {Math.round(progress)}%
                                      </div>
                                      <div className="text-sm text-slate-500">
                                        {kr.currentValue} / {kr.targetValue}{kr.unit}
                                      </div>
                                    </div>
                                  </div>
                                  <Progress value={Math.min(progress, 100)} className="h-2 bg-slate-100" />
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {objective.keyResults.length === 0 && (
                      <div className="text-center py-8 bg-slate-50 rounded-lg border border-slate-200">
                        <BarChart3 className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                        <p className="text-sm text-slate-500">No key results defined yet</p>
                        <Button 
                          onClick={() => setShowKeyResultForm(true)}
                          variant="ghost"
                          size="sm"
                          className="mt-2 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Add Key Result
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {filteredObjectives.length === 0 && (
              <Card className="bg-white shadow-sm border-slate-200">
                <CardContent className="text-center py-16">
                  <div className="p-4 bg-slate-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Target className="h-8 w-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {searchTerm || filterStatus ? 'No objectives match your filters' : 'No objectives yet'}
                  </h3>
                  <p className="text-slate-500 mb-6">
                    {searchTerm || filterStatus 
                      ? 'Try adjusting your search or filter criteria.'
                      : 'Get started by creating your first objective to track progress and achieve your goals.'
                    }
                  </p>
                  {!searchTerm && !filterStatus && (
                    <Button 
                      onClick={() => setShowObjectiveForm(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Create First Objective
                    </Button>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 