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
  Square
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

export default function TimelinePage() {
  const [objectives, setObjectives] = useState<Objective[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [selectedUserId, setSelectedUserId] = useState('')
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

  const getFilteredObjectives = () => {
    return objectives.filter(obj => {
      const matchesUser = !selectedUserId || obj.ownerId === selectedUserId
      return matchesUser
    })
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

  const getStatusColor = (status: string) => {
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

  const selectedUser = users.find(u => u.id === selectedUserId)
  const filteredObjectives = getFilteredObjectives()
  const currentTimePosition = getCurrentTimePosition(cycles)

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
        description="Visual timeline showing OKR progress across all cycles"
        currentPage="OKR Timeline"
        icon={<Calendar className="w-6 h-6 text-blue-600" />}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* User Filter */}
        <Card className="bg-white shadow-sm border-slate-200">
          <CardHeader className="border-b border-slate-100 pb-4">
            <CardTitle className="flex items-center text-lg font-semibold text-slate-900">
              <Filter className="w-5 h-5 mr-2 text-blue-600" />
              Timeline Filter
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              {/* Legend */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Legend</label>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span>Completed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>In Progress</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span>At Risk</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                    <span>Not Started</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-0.5 h-4 bg-red-500"></div>
                    <span>Today</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline Overview */}
        {selectedUser && (
          <Card className="bg-white shadow-sm border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-slate-900">
                <Clock className="w-6 h-6 mr-3 text-blue-600" />
                Timeline Overview - {selectedUser.name}
              </CardTitle>
              <CardDescription>
                {filteredObjectives.length} objectives across {cycles.length} cycles
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Summary Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center space-x-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-blue-900">Total Objectives</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mt-1">
                      {filteredObjectives.length}
                    </div>
                  </div>
                  
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-medium text-emerald-900">Completed</span>
                    </div>
                    <div className="text-2xl font-bold text-emerald-600 mt-1">
                      {filteredObjectives.filter(obj => obj.status === 'COMPLETED').length}
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 text-amber-600" />
                      <span className="text-sm font-medium text-amber-900">At Risk</span>
                    </div>
                    <div className="text-2xl font-bold text-amber-600 mt-1">
                      {filteredObjectives.filter(obj => obj.status === 'AT_RISK').length}
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="w-5 h-5 text-slate-600" />
                      <span className="text-sm font-medium text-slate-900">Avg Progress</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-600 mt-1">
                      {filteredObjectives.length > 0 
                        ? Math.round(filteredObjectives.reduce((sum, obj) => sum + obj.progress, 0) / filteredObjectives.length)
                        : 0}%
                    </div>
                  </div>
                </div>
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
            </CardTitle>
            <CardDescription>
              {selectedUser ? 'Individual timeline view' : 'Team overview across all cycles'}
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
                        const objectivePosition = position.left + (position.width * 0.1) + (index * 15)
                        const verticalPosition = 60 + (index % 3) * 18
                        return (
                          <div
                            key={objective.id}
                            className={`absolute w-4 h-4 rounded-full cursor-pointer hover:scale-125 transition-transform ${getStatusColor(objective.status)} border-2 border-white shadow`}
                            style={{
                              left: `${Math.min(objectivePosition, position.left + position.width - 2)}%`,
                              top: `${verticalPosition}px`
                            }}
                            onMouseEnter={() => setHoveredObjective(objective.id)}
                            onMouseLeave={() => setHoveredObjective(null)}
                            title={`${objective.title} - ${objective.progress}%`}
                          />
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

                {/* Objective Details */}
                {hoveredObjective && (
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4">
                      {(() => {
                        const objective = filteredObjectives.find(obj => obj.id === hoveredObjective)
                        if (!objective) return null
                        return (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-slate-900">{objective.title}</h4>
                              <span className={`text-lg font-bold ${getProgressColor(objective.progress)}`}>
                                {objective.progress}%
                              </span>
                            </div>
                            <p className="text-sm text-slate-600">{objective.description}</p>
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

                {/* Cycle Details */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {objectivesByCycle.map(({ cycle, objectives }) => (
                    <Card key={cycle.id} className={`${cycle.active ? 'ring-2 ring-blue-400 bg-blue-50' : 'bg-white'} shadow-sm border-slate-200`}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center justify-between">
                          <span>{cycle.name}</span>
                          {cycle.active && (
                            <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">Active</span>
                          )}
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
                              <div className="space-y-1">
                                {objectives.slice(0, 3).map(objective => (
                                  <div key={objective.id} className="flex items-center space-x-2 text-xs">
                                    <div className={`w-2 h-2 rounded-full ${getStatusColor(objective.status)}`}></div>
                                    <span className="truncate flex-1">{objective.title}</span>
                                    <span className={`font-medium ${getProgressColor(objective.progress)}`}>
                                      {objective.progress}%
                                    </span>
                                  </div>
                                ))}
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
                  ))}
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
                Choose a team member to view their personal OKR timeline, or view the overall team timeline above.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
} 