'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { Session } from 'next-auth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import DashboardHeader from '@/components/layout/DashboardHeader'
import { 
  Target, 
  TrendingUp, 
  BarChart3, 
  Trophy, 
  Users, 
  Calendar,
  Activity,
  Plus,
  ArrowRight,
  Zap,
  User,
  Home,
  Clock,
  AlertTriangle
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
    name: string
    startDate: string
    endDate: string
  }
  // Extended deadline fields
  extendedDeadline?: string
  wasMissed?: boolean
}

export default function DashboardPage() {
  const [objectives, setObjectives] = useState<Objective[]>([])
  const [allObjectives, setAllObjectives] = useState<Objective[]>([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<'team' | 'personal'>('team')
  const { data: session } = useSession()

  // Type assertion for our custom session with extended user properties
  const typedSession = session as Session | null

  useEffect(() => {
    fetch('/api/objectives')
      .then(res => res.json())
      .then(data => {
        setAllObjectives(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching objectives:', error)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (!typedSession?.user?.id || allObjectives.length === 0) return

    let filteredObjectives = allObjectives

    if (typedSession.user.role === 'STAFF') {
      // Staff users only see their own objectives
      filteredObjectives = allObjectives.filter(obj => obj.ownerId === typedSession.user.id)
    } else if (typedSession.user.role === 'MANAGER') {
      if (viewMode === 'personal') {
        // Manager viewing their personal objectives
        filteredObjectives = allObjectives.filter(obj => obj.ownerId === typedSession.user.id)
      } else {
        // Manager viewing team objectives (default)
        // For now, show all objectives - this could be enhanced to filter by team/department
        filteredObjectives = allObjectives
      }
    }
    // ADMIN users see all objectives by default

    // Sort objectives by deadline (most urgent first)
    const sortedObjectives = filteredObjectives.sort((a, b) => {
      const getEffectiveDeadline = (obj: Objective) => {
        return obj.extendedDeadline ? new Date(obj.extendedDeadline) : new Date(obj.cycle.endDate)
      }
      
      const deadlineA = getEffectiveDeadline(a)
      const deadlineB = getEffectiveDeadline(b)
      
      return deadlineA.getTime() - deadlineB.getTime()
    })

    setObjectives(sortedObjectives)
  }, [allObjectives, typedSession, viewMode])

  const stats = {
    activeObjectives: objectives.length,
    averageProgress: objectives.length > 0 
      ? Math.round(objectives.reduce((sum, obj) => sum + obj.progress, 0) / objectives.length)
      : 0,
    totalKeyResults: objectives.reduce((sum, obj) => sum + obj.keyResults.length, 0),
    completedObjectives: objectives.filter(obj => obj.progress >= 100).length
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'text-emerald-600'
    if (progress >= 60) return 'text-amber-600'
    return 'text-red-500'
  }

  const getProgressBg = (progress: number) => {
    if (progress >= 80) return 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100'
    if (progress >= 60) return 'bg-amber-50 border-amber-200 hover:bg-amber-100'
    return 'bg-red-50 border-red-200 hover:bg-red-100'
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'NOT_STARTED': 'bg-slate-100 text-slate-700 border-slate-200',
      'IN_PROGRESS': 'bg-blue-100 text-blue-700 border-blue-200',
      'COMPLETED': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'AT_RISK': 'bg-amber-100 text-amber-700 border-amber-200',
      'EXTENDED': 'bg-orange-100 text-orange-700 border-orange-200'
    }
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.NOT_STARTED
  }

  // Helper function to get effective deadline
  const getEffectiveDeadline = (objective: Objective) => {
    return objective.extendedDeadline ? new Date(objective.extendedDeadline) : new Date(objective.cycle.endDate)
  }

  // Helper function to calculate days until deadline
  const getDaysUntilDeadline = (objective: Objective) => {
    const deadline = getEffectiveDeadline(objective)
    const now = new Date()
    const diffTime = deadline.getTime() - now.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  // Helper function to format deadline display
  const formatDeadline = (objective: Objective) => {
    const deadline = getEffectiveDeadline(objective)
    void deadline // Used in getDaysUntilDeadline
    const daysUntil = getDaysUntilDeadline(objective)
    
    if (daysUntil < 0) {
      return {
        text: `${Math.abs(daysUntil)} days overdue`,
        color: 'text-red-600',
        icon: AlertTriangle
      }
    } else if (daysUntil === 0) {
      return {
        text: 'Due today',
        color: 'text-red-600',
        icon: AlertTriangle
      }
    } else if (daysUntil <= 7) {
      return {
        text: `${daysUntil} days left`,
        color: 'text-amber-600',
        icon: Clock
      }
    } else {
      return {
        text: `${daysUntil} days left`,
        color: 'text-slate-600',
        icon: Clock
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
            <div className="text-lg font-medium text-slate-600">Loading dashboard...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <DashboardHeader
        title={typedSession?.user?.role === 'STAFF' 
          ? 'My OKR Dashboard'
          : typedSession?.user?.role === 'MANAGER' && viewMode === 'personal'
            ? 'My OKR Dashboard'
            : 'OKR Dashboard'
        }
        description={typedSession?.user?.role === 'STAFF' 
          ? 'Track your personal objectives and key results'
          : typedSession?.user?.role === 'MANAGER' && viewMode === 'personal'
            ? 'Track your personal objectives and key results'
            : 'Track objectives and key results across the organisation'
        }
        currentPage="Dashboard"
        icon={<Home className="w-6 h-6 text-blue-600" />}
        showViewToggle={true}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* View Mode Indicator for Staff and Manager Personal View */}
          {(typedSession?.user?.role === 'STAFF' || (typedSession?.user?.role === 'MANAGER' && viewMode === 'personal')) && (
            <div className="lg:col-span-4 mb-2">
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                  <User className="w-4 h-4" />
                  <span>Viewing Personal OKRs</span>
                </div>
              </div>
            </div>
          )}
          
          <Card className="bg-white shadow-sm border-slate-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                Active Objectives
              </CardTitle>
              <div className="p-2 bg-blue-100 rounded-lg">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-3xl font-bold text-slate-900 mb-1">{stats.activeObjectives}</div>
              <p className="text-sm text-slate-500">
                Current cycle objectives
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm border-slate-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                Average Progress
              </CardTitle>
              <div className="p-2 bg-emerald-100 rounded-lg">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-3xl font-bold text-slate-900 mb-3">{stats.averageProgress}%</div>
              <Progress value={stats.averageProgress} className="h-2 bg-slate-100" />
              <p className="text-sm text-slate-500 mt-2">
                {typedSession?.user?.role === 'STAFF' 
                  ? 'Your personal progress'
                  : typedSession?.user?.role === 'MANAGER' && viewMode === 'personal'
                    ? 'Your personal progress'
                    : 'Overall team progress'
                }
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm border-slate-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                Key Results
              </CardTitle>
              <div className="p-2 bg-purple-100 rounded-lg">
                <BarChart3 className="h-5 w-5 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-3xl font-bold text-slate-900 mb-1">{stats.totalKeyResults}</div>
              <p className="text-sm text-slate-500">
                Total measurable outcomes
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm border-slate-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                Completion Rate
              </CardTitle>
              <div className="p-2 bg-amber-100 rounded-lg">
                <Trophy className="h-5 w-5 text-amber-600" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-3xl font-bold text-slate-900 mb-1">
                {stats.activeObjectives > 0 
                  ? Math.round((stats.completedObjectives / stats.activeObjectives) * 100)
                  : 0}%
              </div>
              <p className="text-sm text-slate-500">
                {stats.completedObjectives} of {stats.activeObjectives} completed
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* All Objectives - Scrollable */}
          <Card className="lg:col-span-2 bg-white shadow-sm border-slate-200 flex flex-col h-full">
            <CardHeader className="border-b border-slate-100 pb-4 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-semibold text-slate-900">
                    {typedSession?.user?.role === 'STAFF' 
                      ? 'My Objectives'
                      : typedSession?.user?.role === 'MANAGER' && viewMode === 'personal'
                        ? 'My Objectives'
                        : 'Upcoming Deadlines'
                    }
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {typedSession?.user?.role === 'STAFF' 
                      ? 'Your personal OKR updates and progress'
                      : typedSession?.user?.role === 'MANAGER' && viewMode === 'personal'
                        ? 'Your personal OKR updates and progress'
                        : `All ${objectives.length} objectives ordered by deadline urgency`
                    }
                  </CardDescription>
                </div>
                <div className="p-2 bg-slate-100 rounded-lg">
                  <Activity className="h-5 w-5 text-slate-600" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 flex flex-col h-full">
              {objectives.length > 0 ? (
                <div className="flex-1 overflow-y-auto">
                  <div className="p-4 space-y-3">
                    {objectives.map((objective, index) => {
                      const deadlineInfo = formatDeadline(objective)
                      const DeadlineIcon = deadlineInfo.icon
                      
                      return (
                        <div key={objective.id} className={`p-3 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${getProgressBg(objective.progress)}`}>
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-2">
                                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                    #{index + 1}
                                  </span>
                                  <h3 className="font-semibold text-slate-900 text-base">
                                    {objective.title}
                                  </h3>
                                </div>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium border inline-block whitespace-nowrap ${getStatusBadge(objective.status)}`}>
                                  {objective.status.replace('_', ' ')}
                                </span>
                                {objective.extendedDeadline && (
                                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700 border border-orange-200">
                                    Extended
                                  </span>
                                )}
                              </div>
                              <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                                {objective.description}
                              </p>
                              <div className="flex items-center space-x-4 text-xs text-slate-500">
                                <span className="flex items-center space-x-1">
                                  <Users className="w-3 h-3" />
                                  <span>{objective.owner.name}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{objective.cycle.name}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <BarChart3 className="w-3 h-3" />
                                  <span>{objective.keyResults.length} KRs</span>
                                </span>
                                <span className={`flex items-center space-x-1 font-medium ${deadlineInfo.color}`}>
                                  <DeadlineIcon className="w-3 h-3" />
                                  <span>{deadlineInfo.text}</span>
                                </span>
                              </div>
                            </div>
                            <div className="text-right ml-4">
                              <div className={`text-2xl font-bold ${getProgressColor(objective.progress)} mb-1`}>
                                {objective.progress}%
                              </div>
                              <div className="text-xs text-slate-500">progress</div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <Progress value={objective.progress} className="h-2 bg-white/50" />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  {objectives.length > 5 && (
                    <div className="border-t border-slate-100 p-3 bg-slate-50 mt-auto">
                      <Link href="/dashboard/manage">
                        <Button variant="ghost" className="w-full text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-medium">
                          View detailed management page
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="p-4 bg-slate-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Target className="h-8 w-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">No objectives found</h3>
                  <p className="text-slate-500 mb-6">Get started by creating your first OKR</p>
                  <Link href="/dashboard/manage">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Plus className="w-4 h-4 mr-2" />
                      Create your first OKR
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Key Results Status */}
          <Card className="bg-white shadow-sm border-slate-200">
            <CardHeader className="border-b border-slate-100 pb-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-semibold text-slate-900">Key Results</CardTitle>
                  <CardDescription className="text-slate-600">
                    Progress on individual metrics
                  </CardDescription>
                </div>
                <div className="p-2 bg-slate-100 rounded-lg">
                  <Zap className="h-5 w-5 text-slate-600" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {objectives.slice(0, 6).map((objective) => 
                  objective.keyResults.slice(0, 1).map((kr) => {
                    const progress = (kr.currentValue / kr.targetValue) * 100
                    const deadlineInfo = formatDeadline(objective)
                    const DeadlineIcon = deadlineInfo.icon
                    
                    return (
                      <div key={kr.id} className="p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-200 border border-slate-200">
                        <div className="flex items-start space-x-3">
                          <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-2 ${
                            progress >= 80 ? 'bg-emerald-500' :
                            progress >= 60 ? 'bg-amber-500' :
                            'bg-red-500'
                          }`}></div>
                          <div className="flex-1 min-w-0 space-y-2">
                            <p className="text-sm font-medium text-slate-900 leading-relaxed">
                              {kr.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <p className="text-xs text-slate-500 font-medium">
                                {kr.currentValue}{kr.unit || ''} / {kr.targetValue}{kr.unit || ''}
                              </p>
                              <span className={`text-sm font-semibold ${getProgressColor(progress)}`}>
                                {Math.round(progress)}%
                              </span>
                            </div>
                            <div className={`flex items-center space-x-1 text-xs ${deadlineInfo.color}`}>
                              <DeadlineIcon className="w-3 h-3" />
                              <span>{deadlineInfo.text}</span>
                            </div>
                            <Progress value={progress} className="h-2 bg-white" />
                          </div>
                        </div>
                      </div>
                    )
                  })
                )}
                {objectives.length === 0 && (
                  <div className="text-center py-12">
                    <div className="p-3 bg-slate-100 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-slate-400" />
                    </div>
                    <p className="text-sm text-slate-500">No key results to display</p>
                  </div>
                )}
                {objectives.length > 6 && (
                  <Link href="/dashboard/manage">
                    <Button variant="ghost" className="w-full mt-6 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-medium">
                      View all key results
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 