'use client'

import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import DashboardHeader from '@/components/layout/DashboardHeader'
import { 
  Calendar,
  Clock,
  Target,
  TrendingUp,
  User,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Filter,
  ChevronRight,
  Circle,
  Square,
  XCircle,
  TrendingDown,
  AlertTriangle,
  Eye,
  EyeOff
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
  }>
  cycle: {
    id: string
    name: string
    startDate: string
    endDate: string
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
  startDate: string
  endDate: string
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

export default function TimelinePage() {
  const [objectives, setObjectives] = useState<Objective[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [selectedUserId, setSelectedUserId] = useState('')
  const [showMissedOnly, setShowMissedOnly] = useState(false)
  const [showAtRiskOnly, setShowAtRiskOnly] = useState(false)
  const [loading, setLoading] = useState(true)
  const [hoveredObjective, setHoveredObjective] = useState<string | null>(null)
  const { data: session } = useSession()

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    // Auto-select current user for staff
    if (session?.user?.role === 'STAFF' && session?.user?.id) {
      setSelectedUserId(session.user.id)
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
      setCycles(cyclesData.sort((a: Cycle, b: Cycle) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()))
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setLoading(false)
    }
  }

  // Calculate missed target information
  const calculateMissedTargetInfo = (objective: Objective): MissedTargetInfo => {
    const now = new Date()
    const cycleStart = new Date(objective.cycle.startDate)
    const cycleEnd = new Date(objective.cycle.endDate)
    
    // Calculate time progress through the cycle
    const totalCycleDuration = cycleEnd.getTime() - cycleStart.getTime()
    const elapsedTime = now.getTime() - cycleStart.getTime()
    const timeProgress = Math.max(0, Math.min(100, (elapsedTime / totalCycleDuration) * 100))
    
    // Expected progress should match time progress for linear progression
    const expectedProgress = timeProgress
    const progressGap = expectedProgress - objective.progress
    
    // Calculate days remaining
    const daysRemaining = Math.max(0, Math.ceil((cycleEnd.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)))
    
    // Determine if missed or at risk
    const isMissed = progressGap > 20 && timeProgress > 50 // Significantly behind halfway through
    const isAtRisk = progressGap > 10 && timeProgress > 25 // Behind by 10% after 25% of time
    
    // Calculate risk level
    let riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' = 'LOW'
    if (progressGap > 30) riskLevel = 'CRITICAL'
    else if (progressGap > 20) riskLevel = 'HIGH'
    else if (progressGap > 10) riskLevel = 'MEDIUM'
    
    // Override for completed objectives
    if (objective.status === 'COMPLETED' || objective.progress >= 100) {
      return {
        isMissed: false,
        isAtRisk: false,
        expectedProgress,
        progressGap: 0,
        daysRemaining,
        riskLevel: 'LOW'
      }
    }
    
    return {
      isMissed,
      isAtRisk,
      expectedProgress,
      progressGap,
      daysRemaining,
      riskLevel
    }
  }

  const getFilteredObjectives = () => {
    let filtered = objectives.filter(obj => {
      const matchesUser = !selectedUserId || obj.ownerId === selectedUserId
      return matchesUser
    })

    if (showMissedOnly) {
      filtered = filtered.filter(obj => calculateMissedTargetInfo(obj).isMissed)
    }

    if (showAtRiskOnly) {
      filtered = filtered.filter(obj => calculateMissedTargetInfo(obj).isAtRisk)
    }

    return filtered
  }

  const calculateTimelinePosition = (cycle: Cycle, allCycles: Cycle[]) => {
    if (allCycles.length === 0) return { left: 0, width: 100 }
    
    const earliestStart = Math.min(...allCycles.map(c => new Date(c.startDate).getTime()))
    const latestEnd = Math.max(...allCycles.map(c => new Date(c.endDate).getTime()))
    const totalTimespan = latestEnd - earliestStart
    
    const cycleStart = new Date(cycle.startDate).getTime()
    const cycleEnd = new Date(cycle.endDate).getTime()
    const cycleDuration = cycleEnd - cycleStart
    
    const left = ((cycleStart - earliestStart) / totalTimespan) * 100
    const width = (cycleDuration / totalTimespan) * 100
    
    return { left, width }
  }

  const getCurrentTimePosition = (allCycles: Cycle[]) => {
    if (allCycles.length === 0) return 50
    
    const earliestStart = Math.min(...allCycles.map(c => new Date(c.startDate).getTime()))
    const latestEnd = Math.max(...allCycles.map(c => new Date(c.endDate).getTime()))
    const totalTimespan = latestEnd - earliestStart
    const now = new Date().getTime()
    
    return Math.max(0, Math.min(100, ((now - earliestStart) / totalTimespan) * 100))
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getStatusColor = (status: string, missedInfo?: MissedTargetInfo) => {
    // Override colors for missed targets
    if (missedInfo?.isMissed) return 'bg-red-600'
    if (missedInfo?.isAtRisk) return 'bg-orange-500'
    
    switch (status) {
      case 'COMPLETED':
        return 'bg-emerald-500'
      case 'IN_PROGRESS':
        return 'bg-blue-500'
      case 'AT_RISK':
        return 'bg-amber-500'
      default:
        return 'bg-slate-400'
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'text-emerald-600'
    if (progress >= 60) return 'text-amber-600'
    return 'text-red-500'
  }

  const getRiskLevelColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'CRITICAL': return 'text-red-600 bg-red-50 border-red-200'
      case 'HIGH': return 'text-orange-600 bg-orange-50 border-orange-200'
      case 'MEDIUM': return 'text-amber-600 bg-amber-50 border-amber-200'
      default: return 'text-green-600 bg-green-50 border-green-200'
    }
  }

  const selectedUser = users.find(u => u.id === selectedUserId)
  const filteredObjectives = getFilteredObjectives()
  const currentTimePosition = getCurrentTimePosition(cycles)

  // Calculate missed target statistics
  const allFilteredObjectives = objectives.filter(obj => !selectedUserId || obj.ownerId === selectedUserId)
  const missedTargets = allFilteredObjectives.filter(obj => calculateMissedTargetInfo(obj).isMissed)
  const atRiskTargets = allFilteredObjectives.filter(obj => calculateMissedTargetInfo(obj).isAtRisk)
  const onTrackTargets = allFilteredObjectives.filter(obj => {
    const info = calculateMissedTargetInfo(obj)
    return !info.isMissed && !info.isAtRisk
  })

  // Group objectives by cycle
  const objectivesByCycle = cycles.map(cycle => ({
    cycle,
    objectives: filteredObjectives.filter(obj => obj.cycle.id === cycle.id),
    position: calculateTimelinePosition(cycle, cycles)
  }))

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
            <div className="text-lg font-medium text-slate-600">Loading timeline...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <DashboardHeader
        title="OKR Timeline"
        description="Visual timeline showing OKR progress and missed targets across all cycles"
        currentPage="OKR Timeline"
        icon={<Calendar className="w-6 h-6 text-blue-600" />}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Filters and Controls */}
        <Card className="bg-white shadow-sm border-slate-200">
          <CardHeader className="border-b border-slate-100 pb-4">
            <CardTitle className="flex items-center text-lg font-semibold text-slate-900">
              <Filter className="w-5 h-5 mr-2 text-blue-600" />
              Timeline Filters & Controls
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* User Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Team Member</label>
                <select
                  value={selectedUserId}
                  onChange={(e) => setSelectedUserId(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  disabled={session?.user?.role === 'STAFF'}
                >
                  <option value="">All Team Members</option>
                  {users.map(user => (
                    <option key={user.id} value={user.id}>
                      {user.name} ({user.position})
                    </option>
                  ))}
                </select>
                {session?.user?.role === 'STAFF' && (
                  <p className="text-sm text-blue-600">Showing your personal timeline</p>
                )}
              </div>

              {/* Target Status Filters */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Target Status Filter</label>
                <div className="space-y-2">
                  <Button
                    variant={showMissedOnly ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setShowMissedOnly(!showMissedOnly)
                      if (!showMissedOnly) setShowAtRiskOnly(false)
                    }}
                    className="w-full justify-start"
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    {showMissedOnly ? 'Hide' : 'Show'} Missed Targets Only
                  </Button>
                  <Button
                    variant={showAtRiskOnly ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setShowAtRiskOnly(!showAtRiskOnly)
                      if (!showAtRiskOnly) setShowMissedOnly(false)
                    }}
                    className="w-full justify-start"
                  >
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    {showAtRiskOnly ? 'Hide' : 'Show'} At Risk Only
                  </Button>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Status Legend</label>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <span>Missed Target</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span>At Risk</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span>Completed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>On Track</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-0.5 h-4 bg-red-500"></div>
                    <span>Today</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                    <span>Not Started</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Missed Targets Summary */}
        {selectedUser && (
          <Card className="bg-white shadow-sm border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-slate-900">
                <TrendingDown className="w-6 h-6 mr-3 text-red-600" />
                Target Tracking Summary - {selectedUser.name}
              </CardTitle>
              <CardDescription>
                Overview of target performance and risk assessment
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Summary Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <div className="flex items-center space-x-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      <span className="text-sm font-medium text-red-900">Missed Targets</span>
                    </div>
                    <div className="text-2xl font-bold text-red-600 mt-1">
                      {missedTargets.length}
                    </div>
                    <div className="text-xs text-red-700 mt-1">
                      {allFilteredObjectives.length > 0 ? Math.round((missedTargets.length / allFilteredObjectives.length) * 100) : 0}% of total
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                      <span className="text-sm font-medium text-orange-900">At Risk</span>
                    </div>
                    <div className="text-2xl font-bold text-orange-600 mt-1">
                      {atRiskTargets.length}
                    </div>
                    <div className="text-xs text-orange-700 mt-1">
                      {allFilteredObjectives.length > 0 ? Math.round((atRiskTargets.length / allFilteredObjectives.length) * 100) : 0}% of total
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-green-900">On Track</span>
                    </div>
                    <div className="text-2xl font-bold text-green-600 mt-1">
                      {onTrackTargets.length}
                    </div>
                    <div className="text-xs text-green-700 mt-1">
                      {allFilteredObjectives.length > 0 ? Math.round((onTrackTargets.length / allFilteredObjectives.length) * 100) : 0}% of total
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex items-center space-x-2">
                      <Target className="w-5 h-5 text-slate-600" />
                      <span className="text-sm font-medium text-slate-900">Total OKRs</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-600 mt-1">
                      {allFilteredObjectives.length}
                    </div>
                    <div className="text-xs text-slate-700 mt-1">
                      Across {cycles.length} cycles
                    </div>
                  </div>
                </div>

                {/* Risk Assessment */}
                {(missedTargets.length > 0 || atRiskTargets.length > 0) && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-900 mb-2 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Risk Assessment
                    </h4>
                    <div className="text-sm text-amber-800 space-y-1">
                      {missedTargets.length > 0 && (
                        <p>• {missedTargets.length} objectives are significantly behind schedule and require immediate attention</p>
                      )}
                      {atRiskTargets.length > 0 && (
                        <p>• {atRiskTargets.length} objectives are at risk of missing their targets without intervention</p>
                      )}
                      <p>• Consider reviewing resource allocation and removing blockers for at-risk objectives</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Timeline */}
        <Card className="bg-white shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center text-xl font-semibold text-slate-900">
              <Calendar className="w-6 h-6 mr-3 text-blue-600" />
              OKR Timeline
              {selectedUser && <span className="text-base font-normal text-slate-600 ml-2">- {selectedUser.name}</span>}
              {(showMissedOnly || showAtRiskOnly) && (
                <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded-full ml-2">
                  Filtered View
                </span>
              )}
            </CardTitle>
            <CardDescription>
              {selectedUser ? 'Individual timeline view' : 'Team overview across all cycles'}
              {showMissedOnly && ' - Showing missed targets only'}
              {showAtRiskOnly && ' - Showing at-risk targets only'}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            {cycles.length > 0 ? (
              <div className="space-y-8">
                {/* Timeline Container */}
                <div className="relative">
                  {/* Timeline Background */}
                  <div className="relative h-40 bg-white rounded-lg border border-slate-200 overflow-hidden">
                    {/* Cycle Bars */}
                    {objectivesByCycle.map(({ cycle, objectives, position }) => (
                      <div
                        key={cycle.id}
                        className={`absolute top-6 h-8 rounded ${cycle.active ? 'bg-blue-500' : 'bg-slate-300'}`}
                        style={{
                          left: `${position.left}%`,
                          width: `${position.width}%`
                        }}
                      >
                        <div className="p-1.5 text-xs font-medium text-white truncate">
                          {cycle.name}
                        </div>
                      </div>
                    ))}

                    {/* Current Time Indicator */}
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10"
                      style={{ left: `${currentTimePosition}%` }}
                    >
                      <div className="absolute -top-1 -left-6 bg-red-500 text-white text-xs px-2 py-1 rounded shadow">
                        Today
                      </div>
                    </div>

                    {/* Objectives as dots */}
                    {objectivesByCycle.map(({ cycle, objectives, position }) =>
                      objectives.map((objective, index) => {
                        const missedInfo = calculateMissedTargetInfo(objective)
                        const objectivePosition = position.left + (position.width * 0.1) + (index * 15)
                        const verticalPosition = 60 + (index % 3) * 18
                        return (
                          <div
                            key={objective.id}
                            className={`absolute w-4 h-4 rounded-full cursor-pointer hover:scale-125 transition-transform ${getStatusColor(objective.status, missedInfo)} border-2 border-white shadow`}
                            style={{
                              left: `${Math.min(objectivePosition, position.left + position.width - 2)}%`,
                              top: `${verticalPosition}px`
                            }}
                            onMouseEnter={() => setHoveredObjective(objective.id)}
                            onMouseLeave={() => setHoveredObjective(null)}
                            title={`${objective.title} - ${objective.progress}% ${missedInfo.isMissed ? '(MISSED)' : missedInfo.isAtRisk ? '(AT RISK)' : ''}`}
                          >
                            {/* Risk indicator overlay */}
                            {missedInfo.isMissed && (
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full border border-white"></div>
                            )}
                            {missedInfo.isAtRisk && !missedInfo.isMissed && (
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full border border-white"></div>
                            )}
                          </div>
                        )
                      })
                    )}
                  </div>

                  {/* Timeline Labels */}
                  <div className="relative mt-4">
                    {objectivesByCycle.map(({ cycle, position }) => (
                      <div
                        key={cycle.id}
                        className="absolute text-xs text-slate-600"
                        style={{
                          left: `${position.left}%`,
                          width: `${position.width}%`
                        }}
                      >
                        <div className="flex justify-between px-1">
                          <span>{formatDate(cycle.startDate)}</span>
                          <span>{formatDate(cycle.endDate)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Objective Details */}
                {hoveredObjective && (
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4">
                      {(() => {
                        const objective = filteredObjectives.find(obj => obj.id === hoveredObjective)
                        if (!objective) return null
                        const missedInfo = calculateMissedTargetInfo(objective)
                        return (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-slate-900">{objective.title}</h4>
                              <div className="flex items-center space-x-2">
                                <span className={`text-lg font-bold ${getProgressColor(objective.progress)}`}>
                                  {objective.progress}%
                                </span>
                                {missedInfo.isMissed && (
                                  <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">MISSED</span>
                                )}
                                {missedInfo.isAtRisk && !missedInfo.isMissed && (
                                  <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">AT RISK</span>
                                )}
                              </div>
                            </div>
                            <p className="text-sm text-slate-600">{objective.description}</p>
                            
                            {/* Risk Assessment Details */}
                            {(missedInfo.isMissed || missedInfo.isAtRisk) && (
                              <div className={`p-3 rounded-lg border ${getRiskLevelColor(missedInfo.riskLevel)}`}>
                                <div className="grid grid-cols-2 gap-4 text-xs">
                                  <div>
                                    <span className="font-medium">Expected Progress:</span>
                                    <span className="ml-1">{Math.round(missedInfo.expectedProgress)}%</span>
                                  </div>
                                  <div>
                                    <span className="font-medium">Progress Gap:</span>
                                    <span className="ml-1">{Math.round(missedInfo.progressGap)}%</span>
                                  </div>
                                  <div>
                                    <span className="font-medium">Days Remaining:</span>
                                    <span className="ml-1">{missedInfo.daysRemaining}</span>
                                  </div>
                                  <div>
                                    <span className="font-medium">Risk Level:</span>
                                    <span className="ml-1 font-semibold">{missedInfo.riskLevel}</span>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            <div className="flex items-center space-x-4 text-xs text-slate-500">
                              <span>{objective.cycle.name}</span>
                              <span>{objective.keyResults.length} key results</span>
                              <span className="capitalize">{objective.status.replace('_', ' ')}</span>
                            </div>
                          </div>
                        )
                      })()}
                    </CardContent>
                  </Card>
                )}

                {/* Enhanced Cycle Details */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {objectivesByCycle.map(({ cycle, objectives }) => {
                    const cycleMissed = objectives.filter(obj => calculateMissedTargetInfo(obj).isMissed)
                    const cycleAtRisk = objectives.filter(obj => calculateMissedTargetInfo(obj).isAtRisk)
                    
                    return (
                      <Card key={cycle.id} className={`${cycle.active ? 'ring-2 ring-blue-400 bg-blue-50' : 'bg-white'} shadow-sm border-slate-200`}>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center justify-between">
                            <span>{cycle.name}</span>
                            <div className="flex items-center space-x-1">
                              {cycle.active && (
                                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">Active</span>
                              )}
                              {cycleMissed.length > 0 && (
                                <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">{cycleMissed.length} Missed</span>
                              )}
                              {cycleAtRisk.length > 0 && (
                                <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">{cycleAtRisk.length} At Risk</span>
                              )}
                            </div>
                          </CardTitle>
                          <CardDescription>
                            {formatDate(cycle.startDate)} - {formatDate(cycle.endDate)}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-600">Objectives:</span>
                              <span className="font-medium">{objectives.length}</span>
                            </div>
                            {objectives.length > 0 && (
                              <>
                                <div className="flex justify-between text-sm">
                                  <span className="text-slate-600">Avg Progress:</span>
                                  <span className={`font-medium ${getProgressColor(Math.round(objectives.reduce((sum, obj) => sum + obj.progress, 0) / objectives.length))}`}>
                                    {Math.round(objectives.reduce((sum, obj) => sum + obj.progress, 0) / objectives.length)}%
                                  </span>
                                </div>
                                
                                {/* Risk Summary */}
                                {(cycleMissed.length > 0 || cycleAtRisk.length > 0) && (
                                  <div className="bg-red-50 border border-red-200 rounded p-2 text-xs">
                                    <div className="font-medium text-red-800 mb-1">Risk Summary:</div>
                                    {cycleMissed.length > 0 && (
                                      <div className="text-red-700">• {cycleMissed.length} missed targets</div>
                                    )}
                                    {cycleAtRisk.length > 0 && (
                                      <div className="text-orange-700">• {cycleAtRisk.length} at-risk targets</div>
                                    )}
                                  </div>
                                )}
                                
                                <div className="space-y-1">
                                  {objectives.slice(0, 3).map(objective => {
                                    const missedInfo = calculateMissedTargetInfo(objective)
                                    return (
                                      <div key={objective.id} className="flex items-center space-x-2 text-xs">
                                        <div className={`w-2 h-2 rounded-full ${getStatusColor(objective.status, missedInfo)}`}></div>
                                        <span className="truncate flex-1">{objective.title}</span>
                                        <div className="flex items-center space-x-1">
                                          <span className={`font-medium ${getProgressColor(objective.progress)}`}>
                                            {objective.progress}%
                                          </span>
                                          {missedInfo.isMissed && <XCircle className="w-3 h-3 text-red-600" />}
                                          {missedInfo.isAtRisk && !missedInfo.isMissed && <AlertTriangle className="w-3 h-3 text-orange-500" />}
                                        </div>
                                      </div>
                                    )
                                  })}
                                  {objectives.length > 3 && (
                                    <div className="text-xs text-slate-500 pl-4">
                                      +{objectives.length - 3} more objectives
                                    </div>
                                  )}
                                </div>
                              </>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <Calendar className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">No cycles found</h3>
                <p className="text-slate-500">No OKR cycles have been created yet.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* No Selection State */}
        {!selectedUser && (
          <Card className="bg-white shadow-sm border-slate-200">
            <CardContent className="text-center py-16">
              <User className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Select a Team Member</h3>
              <p className="text-slate-500 mb-6">
                Choose a team member to view their personal OKR timeline and missed target analysis, or view the overall team timeline above.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
} 