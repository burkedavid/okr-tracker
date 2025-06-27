'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { Session } from 'next-auth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import DashboardHeader from '@/components/layout/DashboardHeader'
import { 
  Calendar,
  Target,
  User,
  CheckCircle,
  AlertCircle,
  Filter,
  ChevronRight,
  XCircle,
  TrendingDown,
  AlertTriangle,
  ChevronLeft,
  SkipBack,
  SkipForward,
  Home,
  ZoomIn,
  ZoomOut
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
  const [timelineZoom, setTimelineZoom] = useState(1) // 1 = normal, 2 = zoomed in, 0.5 = zoomed out
  const timelineRef = useRef<HTMLDivElement>(null)
  const dateLabelsRef = useRef<HTMLDivElement>(null)
  const { data: session } = useSession()

  // Type assertion for our custom session with extended user properties
  const typedSession = session as Session | null

  useEffect(() => {
    fetchData()
  }, [])

  // Function to get current time position on the timeline
  const getCurrentTimePosition = (allCycles: Cycle[]) => {
    if (allCycles.length === 0) return 50
    
    const earliestStart = Math.min(...allCycles.map(c => new Date(c.startDate).getTime()))
    const latestEnd = Math.max(...allCycles.map(c => new Date(c.endDate).getTime()))
    const totalTimespan = latestEnd - earliestStart
    const now = new Date().getTime()
    
    const basePosition = Math.max(0, Math.min(100, ((now - earliestStart) / totalTimespan) * 100))
    return basePosition * timelineZoom
  }
  
  // Timeline navigation function
  const scrollToToday = React.useCallback(() => {
    if (timelineRef.current) {
      const currentPosition = getCurrentTimePosition(cycles)
      const containerWidth = timelineRef.current.clientWidth
      const timelineWidth = timelineRef.current.scrollWidth
      
      // Only scroll if there's actually scrollable content
      if (timelineWidth > containerWidth) {
        const scrollPosition = (currentPosition / 100) * timelineWidth - containerWidth / 2
        
        timelineRef.current.scrollTo({
          left: Math.max(0, Math.min(scrollPosition, timelineWidth - containerWidth)),
          behavior: 'smooth'
        })
      }
    }
  }, [cycles, getCurrentTimePosition])
  
  // Auto-scroll to today's date when the page loads and data is ready
  useEffect(() => {
    if (!loading && cycles.length > 0) {
      // Small delay to ensure the timeline is fully rendered
      const timer = setTimeout(() => {
        scrollToToday()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [loading, cycles.length, scrollToToday])

  useEffect(() => {
    // Auto-select current user for staff
    if (typedSession?.user?.role === 'STAFF' && typedSession?.user?.id) {
      setSelectedUserId(typedSession.user.id)
    }
  }, [typedSession])

  // Synchronize scroll between timeline and date labels
  useEffect(() => {
    const handleTimelineScroll = () => {
      if (timelineRef.current && dateLabelsRef.current) {
        dateLabelsRef.current.scrollLeft = timelineRef.current.scrollLeft
      }
    }

    const timelineElement = timelineRef.current
    if (timelineElement) {
      timelineElement.addEventListener('scroll', handleTimelineScroll)
      return () => {
        timelineElement.removeEventListener('scroll', handleTimelineScroll)
      }
    }
  }, [])

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
    
    // For completed cycles (past cycles), use 100% time progress
    const isCompletedCycle = now > cycleEnd
    const effectiveTimeProgress = isCompletedCycle ? 100 : timeProgress
    
    // Expected progress should match time progress for linear progression
    const expectedProgress = effectiveTimeProgress
    const progressGap = expectedProgress - objective.progress
    
    // Calculate days remaining
    const daysRemaining = Math.max(0, Math.ceil((cycleEnd.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)))
    
    // For completed cycles, determine missed targets based on final achievement
    if (isCompletedCycle) {
      // Calculate overall achievement rate
      const totalAchievementRate = objective.keyResults.length > 0 
        ? objective.keyResults.reduce((sum, kr) => {
            const rate = kr.targetValue > 0 ? (kr.currentValue / kr.targetValue) * 100 : 100
            return sum + Math.min(rate, 100) // Cap at 100% per key result
          }, 0) / objective.keyResults.length
        : objective.progress
      
      const isMissed = totalAchievementRate < 80 // Less than 80% achievement is considered missed
      const isAtRisk = totalAchievementRate < 90 && !isMissed // 80-90% is at risk
      
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
    const isMissed = progressGap > 20 && effectiveTimeProgress > 50 // Significantly behind halfway through
    const isAtRisk = progressGap > 10 && effectiveTimeProgress > 25 // Behind by 10% after 25% of time
    
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

  // Enhanced timeline positioning with zoom support
  const calculateTimelinePosition = (cycle: Cycle, allCycles: Cycle[]) => {
    if (allCycles.length === 0) return { left: 0, width: 100 }
    
    const earliestStart = Math.min(...allCycles.map(c => new Date(c.startDate).getTime()))
    const latestEnd = Math.max(...allCycles.map(c => new Date(c.endDate).getTime()))
    const totalTimespan = latestEnd - earliestStart
    
    const cycleStart = new Date(cycle.startDate).getTime()
    const cycleEnd = new Date(cycle.endDate).getTime()
    const cycleDuration = cycleEnd - cycleStart
    
    // Apply zoom factor to width calculations
    const baseLeft = ((cycleStart - earliestStart) / totalTimespan) * 100
    const baseWidth = (cycleDuration / totalTimespan) * 100
    
    return { 
      left: baseLeft * timelineZoom, 
      width: baseWidth * timelineZoom 
    }
  }

  const scrollToStart = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  const scrollToEnd = () => {
    if (timelineRef.current) {
      const maxScroll = timelineRef.current.scrollWidth - timelineRef.current.clientWidth
      timelineRef.current.scrollTo({
        left: Math.max(0, maxScroll),
        behavior: 'smooth'
      })
    }
  }

  const scrollLeft = () => {
    if (timelineRef.current) {
      const scrollAmount = timelineRef.current.clientWidth * 0.5
      const currentScroll = timelineRef.current.scrollLeft
      console.log('Scrolling left - Current:', currentScroll, 'Amount:', scrollAmount)
      timelineRef.current.scrollTo({
        left: Math.max(0, currentScroll - scrollAmount),
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (timelineRef.current) {
      const scrollAmount = timelineRef.current.clientWidth * 0.5
      const currentScroll = timelineRef.current.scrollLeft
      const maxScroll = timelineRef.current.scrollWidth - timelineRef.current.clientWidth
      console.log('Scrolling right - Current:', currentScroll, 'Amount:', scrollAmount, 'Max:', maxScroll)
      timelineRef.current.scrollTo({
        left: Math.min(maxScroll, currentScroll + scrollAmount),
        behavior: 'smooth'
      })
    }
  }

  const zoomIn = () => {
    setTimelineZoom(prev => Math.min(prev * 1.5, 4))
  }

  const zoomOut = () => {
    setTimelineZoom(prev => Math.max(prev / 1.5, 0.25))
  }

  const resetZoom = () => {
    setTimelineZoom(1)
  }

  const scrollToActiveCycle = () => {
    const activeCycle = cycles.find(cycle => cycle.active)
    if (activeCycle && timelineRef.current) {
      const activeCyclePosition = calculateTimelinePosition(activeCycle, cycles)
      const containerWidth = timelineRef.current.clientWidth
      const timelineWidth = timelineRef.current.scrollWidth
      
      if (timelineWidth > containerWidth) {
        const scrollPosition = (activeCyclePosition.left / 100) * timelineWidth - containerWidth / 3
        
        timelineRef.current.scrollTo({
          left: Math.max(0, Math.min(scrollPosition, timelineWidth - containerWidth)),
          behavior: 'smooth'
        })
      }
    }
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

  // Find active cycle for better context
  const activeCycle = cycles.find(cycle => cycle.active)

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

  // Calculate total timeline width based on zoom
  const totalTimelineWidth = Math.max(100 * timelineZoom, 150) // Ensure minimum scrollable width

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
                  disabled={typedSession?.user?.role === 'STAFF'}
                  title="Select a specific team member to view their individual OKR timeline and performance metrics, or choose 'All Team Members' to see the complete team overview."
                >
                  <option value="">All Team Members</option>
                  {users.map(user => (
                    <option key={user.id} value={user.id}>
                      {user.name} ({user.position})
                    </option>
                  ))}
                </select>
                {typedSession?.user?.role === 'STAFF' && (
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
                    title="Filter to show only objectives that have missed their targets. Useful for identifying areas that need immediate attention and corrective action."
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
                    title="Filter to show only objectives that are at risk of missing their targets. Useful for proactive intervention and resource reallocation."
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
                  <div 
                    className="flex items-center space-x-2 cursor-help"
                    title="Missed Target: Objectives that failed to achieve their goals (< 80% achievement for completed cycles, > 20% behind for active cycles)"
                  >
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <span>Missed Target</span>
                  </div>
                  <div 
                    className="flex items-center space-x-2 cursor-help"
                    title="At Risk: Objectives that may miss targets without intervention (80-90% achievement for completed cycles, 10-20% behind for active cycles)"
                  >
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span>At Risk</span>
                  </div>
                  <div 
                    className="flex items-center space-x-2 cursor-help"
                    title="Completed: Objectives that have been finished and achieved their targets (≥ 90% achievement rate)"
                  >
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span>Completed</span>
                  </div>
                  <div 
                    className="flex items-center space-x-2 cursor-help"
                    title="On Track: Active objectives that are progressing well and likely to meet their targets (within 10% of expected progress)"
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>On Track</span>
                  </div>
                  <div 
                    className="flex items-center space-x-2 cursor-help"
                    title="Today: Current date marker showing where we are in the timeline"
                  >
                    <div className="w-0.5 h-4 bg-red-500"></div>
                    <span>Today</span>
                  </div>
                  <div 
                    className="flex items-center space-x-2 cursor-help"
                    title="Not Started: Objectives that haven't begun yet (future cycles or pending objectives)"
                  >
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
                  <div 
                    className="bg-red-50 p-4 rounded-lg border border-red-200 cursor-help"
                    title="Missed Targets: Objectives that failed to achieve their goals. For completed cycles: < 80% average achievement rate. For active cycles: > 20% behind expected progress after 50% of time elapsed."
                  >
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
                  
                  <div 
                    className="bg-orange-50 p-4 rounded-lg border border-orange-200 cursor-help"
                    title="At Risk: Objectives that may miss their targets without intervention. For completed cycles: 80-90% average achievement rate. For active cycles: 10-20% behind expected progress after 25% of time elapsed."
                  >
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
                  
                  <div 
                    className="bg-green-50 p-4 rounded-lg border border-green-200 cursor-help"
                    title="On Track: Objectives that are meeting or exceeding expectations. For completed cycles: ≥ 90% average achievement rate. For active cycles: within 10% of expected progress based on time elapsed."
                  >
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
                  
                  <div 
                    className="bg-slate-50 p-4 rounded-lg border border-slate-200 cursor-help"
                    title="Total OKRs: All objectives across all cycles for the selected team member(s). Each objective contains multiple key results that measure specific outcomes and targets."
                  >
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

        {/* Enhanced Scrollable Timeline */}
        <Card className="bg-white shadow-sm border-slate-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
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
                  {activeCycle && (
                    <span className="block mt-1 text-blue-600">
                      Currently active: {activeCycle.name} ({formatDate(activeCycle.startDate)} - {formatDate(activeCycle.endDate)})
                    </span>
                  )}
                </CardDescription>
              </div>
              
              {/* Timeline Navigation Controls */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 bg-slate-100 rounded-lg p-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={zoomOut}
                    className="h-8 w-8 p-0"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetZoom}
                    className="h-8 px-2 text-xs"
                    title="Reset Zoom"
                  >
                    {Math.round(timelineZoom * 100)}%
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={zoomIn}
                    className="h-8 w-8 p-0"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="flex items-center space-x-1 bg-slate-100 rounded-lg p-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={scrollToStart}
                    className="h-8 w-8 p-0"
                    title="Go to Start"
                  >
                    <SkipBack className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={scrollLeft}
                    className="h-8 w-8 p-0"
                    title="Scroll Left"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={scrollToToday}
                    className="h-8 px-2 text-xs"
                    title="Go to Today"
                  >
                    <Home className="w-4 h-4 mr-1" />
                    Today
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={scrollToActiveCycle}
                    className="h-8 px-2 text-xs bg-blue-50 hover:bg-blue-100"
                    title="Go to Active Cycle"
                  >
                    <Target className="w-4 h-4 mr-1" />
                    Active
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={scrollRight}
                    className="h-8 w-8 p-0"
                    title="Scroll Right"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={scrollToEnd}
                    className="h-8 w-8 p-0"
                    title="Go to End"
                  >
                    <SkipForward className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            {cycles.length > 0 ? (
              <div className="space-y-8">
                {/* Scrollable Timeline Container */}
                <div className="relative">
                  {/* Timeline Background with Horizontal Scroll */}
                  <div 
                    ref={timelineRef}
                    className="relative h-40 bg-white rounded-lg border border-slate-200 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100"
                    style={{ scrollbarWidth: 'thin' }}
                  >
                    {/* Timeline Content */}
                    <div 
                      className="relative h-full"
                      style={{ width: `${totalTimelineWidth}%`, minWidth: `${Math.max(totalTimelineWidth, 200)}%` }}
                    >
                      {/* Cycle Bars */}
                      {objectivesByCycle.map(({ cycle, objectives: _objectives, position }) => {
                        void _objectives // Intentionally unused in cycle bars
                        return (
                          <div
                            key={cycle.id}
                            className={`absolute top-6 h-8 rounded transition-all duration-300 ${
                              cycle.active 
                                ? 'bg-blue-500 ring-2 ring-blue-300 ring-offset-1' 
                                : 'bg-slate-300 hover:bg-slate-400'
                            }`}
                            style={{
                              left: `${position.left}%`,
                              width: `${position.width}%`
                            }}
                          >
                            <div className="p-1.5 text-xs font-medium text-white truncate flex items-center justify-between">
                              <span>{cycle.name}</span>
                              {cycle.active && (
                                <span className="text-xs bg-white bg-opacity-20 px-1 rounded">
                                  ACTIVE
                                </span>
                              )}
                            </div>
                          </div>
                        )
                      })}

                      {/* Current Time Indicator */}
                      <div
                        className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10 transition-all duration-300"
                        style={{ left: `${currentTimePosition}%` }}
                      >
                        <div className="absolute -top-1 -left-6 bg-red-500 text-white text-xs px-2 py-1 rounded shadow">
                          Today
                        </div>
                      </div>

                      {/* Objectives as dots */}
                      {objectivesByCycle.map(({ cycle: _cycle, objectives: _objectives, position }) => {
                        void _cycle // Intentionally unused in objectives dots
                        return _objectives.map((objective, index) => {
                          const missedInfo = calculateMissedTargetInfo(objective)
                          const objectivePosition = position.left + (position.width * 0.1) + (index * (15 / timelineZoom))
                          const verticalPosition = 60 + (index % 3) * 18
                          return (
                            <div
                              key={objective.id}
                              className={`absolute w-4 h-4 rounded-full cursor-pointer hover:scale-125 transition-all duration-200 ${getStatusColor(objective.status, missedInfo)} border-2 border-white shadow`}
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
                      })}
                    </div>
                  </div>

                  {/* Timeline Labels */}
                  <div className="relative mt-4 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
                    <div 
                      ref={dateLabelsRef}
                      className="relative"
                      style={{ width: `${totalTimelineWidth}%`, minWidth: `${Math.max(totalTimelineWidth, 200)}%` }}
                    >
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

                  {/* Scroll Hint */}
                  <div className="text-center mt-2">
                    <p className="text-xs text-slate-500">
                      💡 Use the navigation controls above or scroll horizontally to explore past and future cycles
                    </p>
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
                  {objectivesByCycle.map(({ cycle, objectives: _objectives }) => {
                    const cycleMissed = _objectives.filter(obj => calculateMissedTargetInfo(obj).isMissed)
                    const cycleAtRisk = _objectives.filter(obj => calculateMissedTargetInfo(obj).isAtRisk)
                    const cycleCompleted = _objectives.filter(obj => obj.status === 'COMPLETED')
                    const now = new Date()
                    const cycleEnd = new Date(cycle.endDate)
                    void now // Intentionally unused
                    void cycleEnd // Intentionally unused
                    
                    return (
                      <Card key={cycle.id} className={`${cycle.active ? 'ring-2 ring-blue-400 bg-blue-50' : 'bg-white'} shadow-sm border-slate-200`}>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center justify-between">
                            <span>{cycle.name}</span>
                            <div className="flex items-center space-x-1">
                              {cycle.active && (
                                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">Active</span>
                              )}
                              {cycleCompleted.length > 0 && (
                                <span className="text-xs bg-emerald-600 text-white px-2 py-1 rounded-full">{cycleCompleted.length} Completed</span>
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
                              <span className="font-medium">{_objectives.length}</span>
                            </div>
                            {_objectives.length > 0 && (
                              <>
                                <div className="flex justify-between text-sm">
                                  <span className="text-slate-600">Avg Progress:</span>
                                  <span className={`font-medium ${getProgressColor(Math.round(_objectives.reduce((sum, obj) => sum + obj.progress, 0) / _objectives.length))}`}>
                                    {Math.round(_objectives.reduce((sum, obj) => sum + obj.progress, 0) / _objectives.length)}%
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
                                  {_objectives.slice(0, 3).map(objective => {
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
                                  {_objectives.length > 3 && (
                                    <div className="text-xs text-slate-500 pl-4">
                                      +{_objectives.length - 3} more objectives
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