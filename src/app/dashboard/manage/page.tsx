'use client'

import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Session } from 'next-auth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import DashboardHeader from '@/components/layout/DashboardHeader'
import ExtendDeadlineModal from '@/components/ui/ExtendDeadlineModal'
import Modal from '@/components/ui/Modal'
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
  User,
  Building,
  Search,
  Filter,
  Edit,
  Trash2,
  XCircle,
  AlertTriangle,
  RefreshCw,
  Eye
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
    id: string
    name: string
    startDate: string
    endDate: string
    active: boolean
  }
  // New fields for deadline extensions
  wasMissed?: boolean
  originalEndDate?: string
  extendedDeadline?: string
  extensionReason?: string
  missedReason?: string
  dateExtended?: string
  extendedBy?: string
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

interface MissedTargetInfo {
  isMissed: boolean
  isAtRisk: boolean
  expectedProgress: number
  progressGap: number
  daysRemaining: number
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
}

export default function ManagePage() {
  const [objectives, setObjectives] = useState<Objective[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [loading, setLoading] = useState(true)
  const [showObjectiveForm, setShowObjectiveForm] = useState(false)
  const [showKeyResultForm, setShowKeyResultForm] = useState(false)
  const [showProgressForm, setShowProgressForm] = useState(false)
  const [editingObjective, setEditingObjective] = useState<Objective | null>(null)
  const [editingKeyResultInline, setEditingKeyResultInline] = useState<string | null>(null)
  const [filterStatus, setFilterStatus] = useState('')
  const [filterUser, setFilterUser] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  
  // New states for deadline extension functionality
  const [showExtendModal, setShowExtendModal] = useState(false)
  const [objectiveToExtend, setObjectiveToExtend] = useState<Objective | null>(null)
  const [isExtending, setIsExtending] = useState(false)
  const [showMissedOnly, setShowMissedOnly] = useState(false)
  const [showAtRiskOnly, setShowAtRiskOnly] = useState(false)
  const [showExtendedOnly, setShowExtendedOnly] = useState(false)
  const [showRecentlyCreated, setShowRecentlyCreated] = useState(false)
  
  const { data: session } = useSession()

  // Type assertion for our custom session with extended user properties
  const typedSession = session as Session | null

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

  // Search and filter states for key result form
  const [keyResultObjectiveSearch, setKeyResultObjectiveSearch] = useState('')
  const [keyResultOwnerFilter, setKeyResultOwnerFilter] = useState('')
  const [keyResultCycleFilter, setKeyResultCycleFilter] = useState('')

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
    if (typedSession?.user?.role === 'STAFF' && typedSession?.user?.id) {
      setFilterUser(typedSession.user.id)
    }
  }, [typedSession])

  // Calculate missed target information for an objective
  const calculateMissedTargetInfo = (objective: Objective): MissedTargetInfo => {
    const now = new Date()
    const cycleStart = new Date(objective.cycle.startDate)
    const cycleEnd = new Date(objective.cycle.endDate)
    
    // Use extended deadline if available
    const effectiveEndDate = objective.extendedDeadline ? new Date(objective.extendedDeadline) : cycleEnd
    
    // Calculate time progress through the cycle
    const totalCycleDuration = effectiveEndDate.getTime() - cycleStart.getTime()
    const elapsedTime = now.getTime() - cycleStart.getTime()
    const timeProgress = Math.max(0, Math.min(100, (elapsedTime / totalCycleDuration) * 100))
    
    // For completed cycles (past cycles), use 100% time progress
    const isCompletedCycle = now > effectiveEndDate
    const effectiveTimeProgress = isCompletedCycle ? 100 : timeProgress
    
    // Expected progress should match time progress for linear progression
    const expectedProgress = effectiveTimeProgress
    const progressGap = expectedProgress - objective.progress
    
    // Calculate days remaining
    const daysRemaining = Math.max(0, Math.ceil((effectiveEndDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)))
    
    // For completed cycles, determine missed targets based on final achievement
    if (isCompletedCycle) {
      const totalAchievementRate = objective.keyResults.length > 0 
        ? objective.keyResults.reduce((sum, kr) => {
            const rate = kr.targetValue > 0 ? (kr.currentValue / kr.targetValue) * 100 : 100
            return sum + Math.min(rate, 100)
          }, 0) / objective.keyResults.length
        : objective.progress
      
      const isMissed = totalAchievementRate < 80
      const isAtRisk = totalAchievementRate < 90 && !isMissed
      
      let riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' = 'LOW'
      if (totalAchievementRate < 60) riskLevel = 'CRITICAL'
      else if (totalAchievementRate < 70) riskLevel = 'HIGH'
      else if (totalAchievementRate < 80) riskLevel = 'MEDIUM'
      
      return {
        isMissed,
        isAtRisk,
        expectedProgress: 100,
        progressGap: 100 - totalAchievementRate,
        daysRemaining: 0,
        riskLevel
      }
    }
    
    // For active/future cycles, use the original logic
    const isMissed = progressGap > 20 && effectiveTimeProgress > 50
    const isAtRisk = progressGap > 10 && effectiveTimeProgress > 25
    
    // Calculate risk level
    let riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' = 'LOW'
    if (progressGap > 30) riskLevel = 'CRITICAL'
    else if (progressGap > 20) riskLevel = 'HIGH'
    else if (progressGap > 10) riskLevel = 'MEDIUM'
    
    return {
      isMissed,
      isAtRisk,
      expectedProgress,
      progressGap,
      daysRemaining,
      riskLevel
    }
  }

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
    
    if (editingObjective) {
      return handleUpdateObjective(e)
    }
    
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
        // Clear search and filter states
        setKeyResultObjectiveSearch('')
        setKeyResultOwnerFilter('')
        setKeyResultCycleFilter('')
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

  const handleEditObjective = (objective: Objective) => {
    setEditingObjective(objective)
    const cycleId = objective.cycle ? cycles.find(c => c.name === objective.cycle.name)?.id || '' : ''
    setObjectiveForm({
      title: objective.title,
      description: objective.description,
      type: 'PERSONAL', // You might want to add type to the Objective interface
      ownerId: objective.ownerId,
      cycleId: cycleId
    })
    setShowObjectiveForm(true)
    // Scroll to top so user can see the edit form
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleEditKeyResult = (keyResult: Objective['keyResults'][0], objectiveId: string) => {
    setEditingKeyResultInline(keyResult.id)
    setKeyResultForm({
      description: keyResult.description,
      metricType: keyResult.metricType,
      targetValue: keyResult.targetValue.toString(),
      unit: keyResult.unit || '',
      objectiveId: objectiveId,
      ownerId: keyResult.owner.id
    })
  }

  const handleUpdateObjective = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(`/api/objectives?id=${editingObjective?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(objectiveForm),
      })

      if (response.ok) {
        setShowObjectiveForm(false)
        setEditingObjective(null)
        setObjectiveForm({
          title: '',
          description: '',
          type: 'PERSONAL',
          ownerId: '',
          cycleId: ''
        })
        fetchData()
      } else {
        console.error('Failed to update objective')
      }
    } catch (error) {
      console.error('Error updating objective:', error)
    }
  }

  const handleUpdateKeyResult = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/key-results', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: editingKeyResultInline,
          ...keyResultForm
        }),
      })

      if (response.ok) {
        setEditingKeyResultInline(null)
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
        console.error('Failed to update key result')
      }
    } catch (error) {
      console.error('Error updating key result:', error)
    }
  }

  const handleCancelKeyResultEdit = () => {
    setEditingKeyResultInline(null)
    setKeyResultForm({
      description: '',
      metricType: 'NUMBER',
      targetValue: '',
      unit: '',
      objectiveId: '',
      ownerId: ''
    })
  }

  const handleDeleteObjective = async (objectiveId: string) => {
    if (!window.confirm('Are you sure you want to delete this objective? This action cannot be undone.')) {
      return
    }

    try {
      const response = await fetch(`/api/objectives?id=${objectiveId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        fetchData()
      } else {
        console.error('Failed to delete objective')
        alert('Failed to delete objective. Please try again.')
      }
    } catch (error) {
      console.error('Error deleting objective:', error)
      alert('Error deleting objective. Please try again.')
    }
  }

  const handleDeleteKeyResult = async (keyResultId: string) => {
    if (!window.confirm('Are you sure you want to delete this key result? This action cannot be undone.')) {
      return
    }

    try {
      const response = await fetch(`/api/key-results?id=${keyResultId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        fetchData()
      } else {
        console.error('Failed to delete key result')
        alert('Failed to delete key result. Please try again.')
      }
    } catch (error) {
      console.error('Error deleting key result:', error)
      alert('Error deleting key result. Please try again.')
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

  // Filter objectives for key result form
  const getFilteredObjectivesForKeyResult = () => {
    return objectives.filter(objective => {
      const matchesSearch = !keyResultObjectiveSearch || 
        objective.title.toLowerCase().includes(keyResultObjectiveSearch.toLowerCase()) ||
        objective.description.toLowerCase().includes(keyResultObjectiveSearch.toLowerCase())
      
      const matchesOwner = !keyResultOwnerFilter || objective.ownerId === keyResultOwnerFilter
      
      const matchesCycle = !keyResultCycleFilter || objective.cycle.id === keyResultCycleFilter
      
      return matchesSearch && matchesOwner && matchesCycle
    })
  }

  const filteredObjectives = objectives.filter(objective => {
    const matchesSearch = objective.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         objective.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         objective.owner.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = !filterStatus || objective.status === filterStatus
    const matchesUser = !filterUser || objective.ownerId === filterUser
    
    // New missed target filters
    if (showMissedOnly) {
      const missedInfo = calculateMissedTargetInfo(objective)
      if (!missedInfo.isMissed) return false
    }
    
    if (showAtRiskOnly) {
      const missedInfo = calculateMissedTargetInfo(objective)
      if (!missedInfo.isAtRisk) return false
    }
    
    if (showExtendedOnly) {
      if (!objective.wasMissed || !objective.extendedDeadline) return false
    }
    
    // Recently created filter (objectives created in the last 7 days)
    if (showRecentlyCreated) {
      const oneWeekAgo = new Date()
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
      const objectiveCreatedDate = new Date(objective.cycle.startDate) // Using cycle start as proxy for creation date
      if (objectiveCreatedDate < oneWeekAgo) return false
    }
    
    return matchesSearch && matchesStatus && matchesUser
  })

  // Calculate statistics for the current filtered objectives
  const objectiveStats = {
    total: filteredObjectives.length,
    missed: filteredObjectives.filter(obj => calculateMissedTargetInfo(obj).isMissed).length,
    atRisk: filteredObjectives.filter(obj => calculateMissedTargetInfo(obj).isAtRisk).length,
    extended: filteredObjectives.filter(obj => obj.wasMissed && obj.extendedDeadline).length,
    onTrack: filteredObjectives.filter(obj => {
      const info = calculateMissedTargetInfo(obj)
      return !info.isMissed && !info.isAtRisk
    }).length
  }

  // Handle extending deadline
  const handleExtendDeadline = async (data: {
    objectiveId: string
    extendedDeadline: string
    extensionReason: string
    missedReason?: string
  }) => {
    setIsExtending(true)
    try {
      const response = await fetch(`/api/objectives/${data.objectiveId}/extend`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          extendedDeadline: data.extendedDeadline,
          extensionReason: data.extensionReason,
          missedReason: data.missedReason
        }),
      })

      if (response.ok) {
        setShowExtendModal(false)
        setObjectiveToExtend(null)
        await fetchData() // Refresh data
        // Show success message (you could add a toast notification here)
      } else {
        const error = await response.json()
        console.error('Failed to extend deadline:', error)
        // Show error message
      }
    } catch (error) {
      console.error('Error extending deadline:', error)
      // Show error message
    } finally {
      setIsExtending(false)
    }
  }

  // Open extend deadline modal
  const openExtendModal = (objective: Objective) => {
    setObjectiveToExtend(objective)
    setShowExtendModal(true)
  }

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
            onClick: () => {
              setShowObjectiveForm(true)
            },
            variant: 'default',
            icon: <Plus className="w-4 h-4" />
          },
          {
            label: 'Add Key Result',
            onClick: () => {
              // Clear any pre-selected objective when opening from main menu
              setKeyResultForm({
                description: '',
                metricType: 'NUMBER',
                targetValue: '',
                unit: '',
                objectiveId: '', // Clear pre-selection
                ownerId: ''
              })
              // Clear search and filter states
              setKeyResultObjectiveSearch('')
              setKeyResultOwnerFilter('')
              setKeyResultCycleFilter('')
              setShowKeyResultForm(true)
            },
            variant: 'secondary',
            icon: <BarChart3 className="w-4 h-4" />
          },
          {
            label: 'Update Progress',
            onClick: () => {
              setShowProgressForm(true)
              // Set default user to current logged-in user
              if (typedSession?.user?.id) {
                setProgressForm(prev => ({
                  ...prev,
                  createdById: typedSession.user.id,
                  keyResultFilterUserId: typedSession.user.id // Also filter key results by current user by default
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
              {typedSession?.user?.role !== 'STAFF' && (
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
              {typedSession?.user?.role === 'STAFF' && (
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

        {/* Quick Filters - REMOVED */}

        {/* Missed Target Filters & Statistics */}
        <Card className="bg-white shadow-sm border-slate-200">
          <CardHeader className="border-b border-slate-100 pb-4">
            <CardTitle className="flex items-center text-lg font-semibold text-slate-900">
              <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
              Target Tracking & Risk Management
            </CardTitle>
            <CardDescription>
              Monitor missed targets and manage deadline extensions
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            {/* Statistics Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              <div className="bg-slate-50 p-4 rounded-lg border">
                <div className="text-2xl font-bold text-slate-900">{objectiveStats.total}</div>
                <div className="text-sm text-slate-600">Total</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-700">{objectiveStats.onTrack}</div>
                <div className="text-sm text-green-600">On Track</div>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <div className="text-2xl font-bold text-amber-700">{objectiveStats.atRisk}</div>
                <div className="text-sm text-amber-600">At Risk</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <div className="text-2xl font-bold text-red-700">{objectiveStats.missed}</div>
                <div className="text-sm text-red-600">Missed</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <div className="text-2xl font-bold text-orange-700">{objectiveStats.extended}</div>
                <div className="text-sm text-orange-600">Extended</div>
              </div>
            </div>

            {/* Target Filters */}
            <div className="space-y-4">
              {/* Status Filters */}
              <div className="flex items-center space-x-2 text-sm">
                <span className="font-medium text-slate-700">Status filters:</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    if (typedSession?.user?.role !== 'STAFF') {
                      setFilterUser('')
                    }
                    setFilterStatus('')
                    setSearchTerm('')
                    setShowMissedOnly(false)
                    setShowAtRiskOnly(false)
                    setShowExtendedOnly(false)
                    setShowRecentlyCreated(false)
                  }}
                  className="text-slate-600 hover:bg-slate-50 hover:text-slate-700"
                >
                  All Objectives
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    if (typedSession?.user?.role !== 'STAFF') {
                      setFilterUser('')
                    }
                    setFilterStatus('IN_PROGRESS')
                    setSearchTerm('')
                    setShowMissedOnly(false)
                    setShowAtRiskOnly(false)
                    setShowExtendedOnly(false)
                    setShowRecentlyCreated(false)
                  }}
                  className="text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                >
                  In Progress
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    if (typedSession?.user?.role !== 'STAFF') {
                      setFilterUser('')
                    }
                    setFilterStatus('COMPLETED')
                    setSearchTerm('')
                    setShowMissedOnly(false)
                    setShowAtRiskOnly(false)
                    setShowExtendedOnly(false)
                    setShowRecentlyCreated(false)
                  }}
                  className="text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  Completed
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    if (typedSession?.user?.role !== 'STAFF') {
                      setFilterUser('')
                    }
                    setFilterStatus('')
                    setSearchTerm('')
                    setShowMissedOnly(false)
                    setShowAtRiskOnly(false)
                    setShowExtendedOnly(false)
                    setShowRecentlyCreated(!showRecentlyCreated)
                  }}
                  className="text-purple-600 hover:bg-purple-50 hover:text-purple-700"
                >
                  Recently Created
                </Button>
              </div>
              
              {/* Target Filters */}
              <div className="flex items-center space-x-2 text-sm">
                <span className="font-medium text-slate-700">Target filters:</span>
                <Button
                  variant={showMissedOnly ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setShowMissedOnly(!showMissedOnly)
                    setShowAtRiskOnly(false)
                    setShowExtendedOnly(false)
                    setFilterStatus('')
                  }}
                  className={showMissedOnly 
                    ? "bg-red-600 hover:bg-red-700 text-white" 
                    : "text-red-600 hover:bg-red-50 hover:text-red-700"
                  }
                >
                  <XCircle className="w-4 h-4 mr-1" />
                  Show Missed Targets Only
                </Button>
                <Button
                  variant={showAtRiskOnly ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setShowAtRiskOnly(!showAtRiskOnly)
                    setShowMissedOnly(false)
                    setShowExtendedOnly(false)
                    setFilterStatus('')
                  }}
                  className={showAtRiskOnly 
                    ? "bg-amber-600 hover:bg-amber-700 text-white" 
                    : "text-amber-600 hover:bg-amber-50 hover:text-amber-700"
                  }
                >
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  Show At Risk Only
                </Button>
                <Button
                  variant={showExtendedOnly ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setShowExtendedOnly(!showExtendedOnly)
                    setShowMissedOnly(false)
                    setShowAtRiskOnly(false)
                    setFilterStatus('')
                  }}
                  className={showExtendedOnly 
                    ? "bg-orange-600 hover:bg-orange-700 text-white" 
                    : "text-orange-600 hover:bg-orange-50 hover:text-orange-700"
                  }
                >
                  <Clock className="w-4 h-4 mr-1" />
                  Show Extended Only
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => fetchData()}
                  className="text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                >
                  <RefreshCw className="w-4 h-4 mr-1" />
                  Refresh
                </Button>
              </div>
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
                  <CardTitle className="text-xl text-gray-900">
                    {editingObjective ? 'Edit Objective' : 'Create New Objective'}
                  </CardTitle>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {
                    setShowObjectiveForm(false)
                    setEditingObjective(null)
                    setObjectiveForm({
                      title: '',
                      description: '',
                      type: 'PERSONAL',
                      ownerId: '',
                      cycleId: ''
                    })
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <CardDescription className="text-gray-600">
                {editingObjective 
                  ? 'Update the details of this objective.'
                  : 'Fill in the details to create a new objective for your team or organisation.'
                }
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
                    rows={5}
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
                    {editingObjective ? 'Update Objective' : 'Create Objective'}
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
                  <CardTitle className="text-xl text-gray-900">
                    Add Key Result
                  </CardTitle>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {
                    setShowKeyResultForm(false)
                    setKeyResultForm({
                      description: '',
                      metricType: 'NUMBER',
                      targetValue: '',
                      unit: '',
                      objectiveId: '',
                      ownerId: ''
                    })
                    // Clear search and filter states
                    setKeyResultObjectiveSearch('')
                    setKeyResultOwnerFilter('')
                    setKeyResultCycleFilter('')
                  }}
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
                {/* Search and Filter Controls */}
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h6 className="text-sm font-medium text-slate-700 mb-3">Find Objective</h6>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Search Objectives</label>
                      <div className="relative">
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-slate-400 w-3 h-3" />
                        <input
                          type="text"
                          value={keyResultObjectiveSearch}
                          onChange={(e) => setKeyResultObjectiveSearch(e.target.value)}
                          placeholder="Search by title or description..."
                          className="w-full pl-7 pr-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Filter by Owner</label>
                      <select
                        value={keyResultOwnerFilter}
                        onChange={(e) => setKeyResultOwnerFilter(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      >
                        <option value="">All Owners</option>
                        {users.map(user => (
                          <option key={user.id} value={user.id}>
                            {user.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Filter by Cycle</label>
                      <select
                        value={keyResultCycleFilter}
                        onChange={(e) => setKeyResultCycleFilter(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      >
                        <option value="">All Cycles</option>
                        {cycles.map(cycle => (
                          <option key={cycle.id} value={cycle.id}>
                            {cycle.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {(keyResultObjectiveSearch || keyResultOwnerFilter || keyResultCycleFilter) && (
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-slate-500">
                        Showing {getFilteredObjectivesForKeyResult().length} of {objectives.length} objectives
                      </span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setKeyResultObjectiveSearch('')
                          setKeyResultOwnerFilter('')
                          setKeyResultCycleFilter('')
                        }}
                        className="text-xs text-slate-500 hover:text-slate-700"
                      >
                        Clear filters
                      </Button>
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Objective * 
                    <span className="text-xs font-normal text-slate-500 ml-1">
                      ({getFilteredObjectivesForKeyResult().length} available)
                    </span>
                  </label>
                  {keyResultForm.objectiveId && (
                    <div className="mb-2 p-2 bg-green-50 border border-green-200 rounded-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-800 font-medium">
                            Pre-selected: {objectives.find(obj => obj.id === keyResultForm.objectiveId)?.title}
                          </span>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => setKeyResultForm({...keyResultForm, objectiveId: ''})}
                          className="text-green-600 hover:text-green-700 text-xs"
                        >
                          Change
                        </Button>
                      </div>
                    </div>
                  )}
                  <select
                    value={keyResultForm.objectiveId}
                    onChange={(e) => setKeyResultForm({...keyResultForm, objectiveId: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select objective</option>
                    {getFilteredObjectivesForKeyResult().map(objective => (
                      <option key={objective.id} value={objective.id}>
                        {objective.title} ({objective.owner.name})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
                  <textarea
                    value={keyResultForm.description}
                    onChange={(e) => setKeyResultForm({...keyResultForm, description: e.target.value})}
                    required
                    rows={3}
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
                      placeholder="%, $, etc."
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
                        {user.name}
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
                    rows={4}
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
                {typedSession?.user?.role === 'STAFF' 
                  ? 'My Objectives'
                  : filterUser 
                    ? `${users.find(u => u.id === filterUser)?.name}'s Objectives`
                    : 'Team Objectives'
                }
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                {typedSession?.user?.role === 'STAFF' || filterUser 
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
                        <CardTitle 
                          className="text-xl font-semibold text-slate-900 cursor-pointer hover:text-blue-600 transition-colors"
                          onClick={() => handleEditObjective(objective)}
                        >
                          {objective.title}
                        </CardTitle>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(objective.status)}`}>
                          {objective.status.replace('_', ' ')}
                        </span>
                        
                        {/* Missed Target Indicators */}
                        {(() => {
                          const missedInfo = calculateMissedTargetInfo(objective)
                          if (missedInfo.isMissed) {
                            return (
                              <div className="flex items-center space-x-2">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 border border-red-200 flex items-center">
                                  <XCircle className="w-3 h-3 mr-1" />
                                  Missed Target
                                </span>
                                {(typedSession?.user?.role === 'MANAGER' || typedSession?.user?.role === 'ADMIN') && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      openExtendModal(objective)
                                    }}
                                    className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 border-orange-200 text-xs px-2 py-1 h-auto"
                                    title="Extend deadline"
                                  >
                                    <Clock className="w-3 h-3 mr-1" />
                                    Extend Deadline
                                  </Button>
                                )}
                              </div>
                            )
                          } else if (missedInfo.isAtRisk) {
                            return (
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 border border-amber-200 flex items-center">
                                <AlertTriangle className="w-3 h-3 mr-1" />
                                At Risk ({Math.round(missedInfo.progressGap)}% behind)
                              </span>
                            )
                          } else if (objective.wasMissed && objective.extendedDeadline) {
                            return (
                              <div className="flex items-center space-x-2">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700 border border-orange-200 flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  Extended to {new Date(objective.extendedDeadline).toLocaleDateString()}
                                </span>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    // Show extension details
                                    alert(`Extension Reason: ${objective.extensionReason}\n${objective.missedReason ? `Missed Reason: ${objective.missedReason}` : ''}`)
                                  }}
                                  className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 p-1 h-auto"
                                  title="View extension details"
                                >
                                  <Eye className="w-3 h-3" />
                                </Button>
                              </div>
                            )
                          }
                          return null
                        })()}
                        
                        {/* Edit and Delete buttons for managers */}
                        {(typedSession?.user?.role === 'MANAGER' || typedSession?.user?.role === 'ADMIN') && (
                          <div className="flex items-center space-x-2 ml-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                // Pre-populate the objective and open the form
                                setKeyResultForm(prev => ({
                                  ...prev,
                                  objectiveId: objective.id,
                                  ownerId: typedSession?.user?.id || ''
                                }))
                                setShowKeyResultForm(true)
                              }}
                              className="text-green-600 hover:text-green-700 hover:bg-green-50 px-2 py-1 text-xs font-medium"
                              title="Add key result to this objective"
                            >
                              <Plus className="w-3 h-3 mr-1" />
                              Add KR
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleEditObjective(objective)
                              }}
                              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-1"
                              title="Edit objective"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleDeleteObjective(objective.id)
                              }}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50 p-1"
                              title="Delete objective"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        )}
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
                            
                            // Show inline edit form if this key result is being edited
                            if (editingKeyResultInline === kr.id) {
                              return (
                                <div key={kr.id} className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200 shadow-sm">
                                  <form onSubmit={handleUpdateKeyResult} className="space-y-4">
                                    <div className="flex items-center justify-between mb-3">
                                      <h5 className="font-medium text-blue-900 flex items-center">
                                        <Edit className="w-4 h-4 mr-2" />
                                        Editing Key Result
                                      </h5>
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={handleCancelKeyResultEdit}
                                        className="text-slate-500 hover:text-slate-700"
                                      >
                                        <X className="w-4 h-4" />
                                      </Button>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                                        <input
                                          type="text"
                                          value={keyResultForm.description}
                                          onChange={(e) => setKeyResultForm({...keyResultForm, description: e.target.value})}
                                          required
                                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                          placeholder="Enter key result description"
                                        />
                                      </div>
                                      
                                      <div className="grid grid-cols-4 gap-3">
                                        <div>
                                          <label className="block text-sm font-medium text-slate-700 mb-1">Type</label>
                                          <select
                                            value={keyResultForm.metricType}
                                            onChange={(e) => setKeyResultForm({...keyResultForm, metricType: e.target.value})}
                                            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                          >
                                            <option value="NUMBER">Number</option>
                                            <option value="PERCENTAGE">Percentage</option>
                                            <option value="CURRENCY">Currency</option>
                                            <option value="BOOLEAN">Yes/No</option>
                                          </select>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-slate-700 mb-1">Target</label>
                                          <input
                                            type="number"
                                            value={keyResultForm.targetValue}
                                            onChange={(e) => setKeyResultForm({...keyResultForm, targetValue: e.target.value})}
                                            required
                                            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                            placeholder="100"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-slate-700 mb-1">Unit</label>
                                          <input
                                            type="text"
                                            value={keyResultForm.unit}
                                            onChange={(e) => setKeyResultForm({...keyResultForm, unit: e.target.value})}
                                            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                            placeholder="%, $, etc."
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-slate-700 mb-1">Owner</label>
                                          <select
                                            value={keyResultForm.ownerId}
                                            onChange={(e) => setKeyResultForm({...keyResultForm, ownerId: e.target.value})}
                                            required
                                            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
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
                                    </div>
                                    
                                    <div className="flex justify-end space-x-2 pt-3 border-t border-slate-200">
                                      <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={handleCancelKeyResultEdit}
                                        className="px-4"
                                      >
                                        Cancel
                                      </Button>
                                      <Button
                                        type="submit"
                                        size="sm"
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4"
                                      >
                                        <Save className="w-3 h-3 mr-1" />
                                        Save Changes
                                      </Button>
                                    </div>
                                  </form>
                                </div>
                              )
                            }
                            
                            // Show normal key result display
                            return (
                              <div key={kr.id} className="p-4 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-200 shadow-sm">
                                <div className="space-y-3">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1 pr-4">
                                      <p 
                                        className="font-medium text-slate-900 leading-relaxed cursor-pointer hover:text-blue-600 transition-colors"
                                        onClick={() => handleEditKeyResult(kr, objective.id)}
                                      >
                                        {kr.description}
                                      </p>
                                      <div className="flex items-center space-x-2 mt-1 text-sm text-slate-500">
                                        <User className="w-3 h-3" />
                                        <span>{kr.owner.name}</span>
                                      </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                      <div className="text-right">
                                        <div className={`text-2xl font-bold ${getProgressColor(progress)}`}>
                                          {Math.round(progress)}%
                                        </div>
                                        <div className="text-sm text-slate-500">
                                          {kr.currentValue} / {kr.targetValue}{kr.unit}
                                        </div>
                                      </div>
                                      {/* Edit and Delete buttons for managers */}
                                      {(typedSession?.user?.role === 'MANAGER' || typedSession?.user?.role === 'ADMIN') && (
                                        <div className="flex flex-col space-y-1">
                                          <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={(e) => {
                                              e.stopPropagation()
                                              handleEditKeyResult(kr, objective.id)
                                            }}
                                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-1 h-8 w-8"
                                            title="Edit key result"
                                          >
                                            <Edit className="w-3 h-3" />
                                          </Button>
                                          <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={(e) => {
                                              e.stopPropagation()
                                              handleDeleteKeyResult(kr.id)
                                            }}
                                            className="text-red-600 hover:text-red-700 hover:bg-red-50 p-1 h-8 w-8"
                                            title="Delete key result"
                                          >
                                            <Trash2 className="w-3 h-3" />
                                          </Button>
                                        </div>
                                      )}
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
                          onClick={() => {
                            setShowKeyResultForm(true)
                          }}
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
                      onClick={() => {
                        setShowObjectiveForm(true)
                      }}
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

      {/* Extend Deadline Modal */}
      <ExtendDeadlineModal
        objective={objectiveToExtend}
        isOpen={showExtendModal}
        onClose={() => {
          setShowExtendModal(false)
          setObjectiveToExtend(null)
        }}
        onExtend={handleExtendDeadline}
        isLoading={isExtending}
      />

      {/* Objective Modal */}
      <Modal
        isOpen={showObjectiveForm}
        onClose={() => {
          setShowObjectiveForm(false)
          setEditingObjective(null)
          setObjectiveForm({
            title: '',
            description: '',
            type: 'PERSONAL',
            ownerId: '',
            cycleId: ''
          })
        }}
        title={editingObjective ? 'Edit Objective' : 'Create New Objective'}
        description={editingObjective 
          ? 'Update the details of this objective.'
          : 'Fill in the details to create a new objective for your team or organisation.'
        }
        size="lg"
        icon={<Target className="w-5 h-5 text-blue-600" />}
      >
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
              rows={5}
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
              {editingObjective ? 'Update Objective' : 'Create Objective'}
            </Button>
          </div>
        </form>
      </Modal>

      {/* Key Result Modal */}
      <Modal
        isOpen={showKeyResultForm}
        onClose={() => {
          setShowKeyResultForm(false)
          setKeyResultForm({
            description: '',
            metricType: 'NUMBER',
            targetValue: '',
            unit: '',
            objectiveId: '',
            ownerId: ''
          })
          // Clear search and filter states
          setKeyResultObjectiveSearch('')
          setKeyResultOwnerFilter('')
          setKeyResultCycleFilter('')
        }}
        title="Add Key Result"
        description="Add a measurable key result to track progress on an objective."
        size="xl"
        icon={<BarChart3 className="w-5 h-5 text-green-600" />}
      >
        <form onSubmit={handleCreateKeyResult} className="space-y-6">
          {/* Search and Filter Controls */}
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h6 className="text-sm font-medium text-slate-700 mb-3">Find Objective</h6>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Search Objectives</label>
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-slate-400 w-3 h-3" />
                  <input
                    type="text"
                    value={keyResultObjectiveSearch}
                    onChange={(e) => setKeyResultObjectiveSearch(e.target.value)}
                    placeholder="Search by title or description..."
                    className="w-full pl-7 pr-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Filter by Owner</label>
                <select
                  value={keyResultOwnerFilter}
                  onChange={(e) => setKeyResultOwnerFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="">All Owners</option>
                  {users.map(user => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Filter by Cycle</label>
                <select
                  value={keyResultCycleFilter}
                  onChange={(e) => setKeyResultCycleFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="">All Cycles</option>
                  {cycles.map(cycle => (
                    <option key={cycle.id} value={cycle.id}>
                      {cycle.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {(keyResultObjectiveSearch || keyResultOwnerFilter || keyResultCycleFilter) && (
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Showing {getFilteredObjectivesForKeyResult().length} of {objectives.length} objectives
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setKeyResultObjectiveSearch('')
                    setKeyResultOwnerFilter('')
                    setKeyResultCycleFilter('')
                  }}
                  className="text-xs text-slate-500 hover:text-slate-700"
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Objective * 
              <span className="text-xs font-normal text-slate-500 ml-1">
                ({getFilteredObjectivesForKeyResult().length} available)
              </span>
            </label>
            {keyResultForm.objectiveId && (
              <div className="mb-2 p-2 bg-green-50 border border-green-200 rounded-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-800 font-medium">
                      Pre-selected: {objectives.find(obj => obj.id === keyResultForm.objectiveId)?.title}
                    </span>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setKeyResultForm({...keyResultForm, objectiveId: ''})}
                    className="text-green-600 hover:text-green-700 text-xs"
                  >
                    Change
                  </Button>
                </div>
              </div>
            )}
            <select
              value={keyResultForm.objectiveId}
              onChange={(e) => setKeyResultForm({...keyResultForm, objectiveId: e.target.value})}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select objective</option>
              {getFilteredObjectivesForKeyResult().map(objective => (
                <option key={objective.id} value={objective.id}>
                  {objective.title} ({objective.owner.name})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
            <textarea
              value={keyResultForm.description}
              onChange={(e) => setKeyResultForm({...keyResultForm, description: e.target.value})}
              required
              rows={3}
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
                placeholder="%, $, etc."
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
      </Modal>

      {/* Progress Update Modal */}
      <Modal
        isOpen={showProgressForm}
        onClose={() => {
          setShowProgressForm(false)
          setProgressForm({
            value: '',
            notes: '',
            keyResultId: '',
            createdById: '',
            keyResultFilterUserId: ''
          })
        }}
        title="Update Progress"
        description="Update the progress of a key result with current metrics."
        size="xl"
        icon={<TrendingUp className="w-5 h-5 text-yellow-600" />}
      >
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
                  {user.name}
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
              rows={4}
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
      </Modal>
    </div>
  )
} 



