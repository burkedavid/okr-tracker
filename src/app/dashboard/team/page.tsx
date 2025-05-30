'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import DashboardHeader from '@/components/layout/DashboardHeader'
import { 
  Users, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Building,
  Mail,
  User,
  Shield,
  Home,
  Search,
  Filter,
  BarChart3,
  Calendar,
  Eye,
  X
} from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  email: string
  position: string
  role: string
  department?: {
    id: string
    name: string
  }
  objectives: Array<{
    id: string
    title: string
    description: string
    progress: number
    status: string
    cycle: {
      name: string
    }
    keyResults: Array<{
      id: string
      description: string
      currentValue: number
      targetValue: number
    }>
  }>
}

interface Department {
  id: string
  name: string
}

interface Manager {
  id: string
  name: string
  position: string
  role: string
}

export default function TeamManagementPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [departments, setDepartments] = useState<Department[]>([])
  const [managers, setManagers] = useState<Manager[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedManager, setSelectedManager] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data: session } = useSession()

  useEffect(() => {
    fetchData()
  }, [selectedManager, selectedDepartment])

  const fetchData = async () => {
    try {
      let teamData = []
      
      // If no specific manager or department is selected, fetch all users
      if (!selectedManager && !selectedDepartment) {
        const usersRes = await fetch('/api/users')
        const usersData = await usersRes.json()
        
        // Transform users data to match team structure
        teamData = Array.isArray(usersData) ? usersData.map(user => ({
          ...user,
          objectives: user.ownedObjectives || []
        })) : []
      } else {
        // Use team API with filters
        let url = '/api/team'
        const params = new URLSearchParams()
        
        if (selectedManager) params.append('managerId', selectedManager)
        if (selectedDepartment) params.append('departmentId', selectedDepartment)
        
        if (params.toString()) {
          url += `?${params.toString()}`
        }

        const teamRes = await fetch(url)
        const teamResData = await teamRes.json()
        
        teamData = Array.isArray(teamResData) ? teamResData.map(user => ({
          ...user,
          objectives: user.ownedObjectives || []
        })) : []
      }

      // Fetch departments and all users to get managers
      const [departmentsRes, allUsersRes] = await Promise.all([
        fetch('/api/departments'),
        fetch('/api/users')
      ])
      
      const [departmentsData, allUsersData] = await Promise.all([
        departmentsRes.json(),
        allUsersRes.json()
      ])

      // Extract managers from all users
      const managersData = Array.isArray(allUsersData) 
        ? allUsersData.filter(user => user.role === 'MANAGER' || user.role === 'ADMIN')
        : []

      // Ensure teamData is always an array
      setTeamMembers(teamData)
      setDepartments(Array.isArray(departmentsData) ? departmentsData : [])
      setManagers(managersData)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching team data:', error)
      // Set empty arrays on error to prevent filter errors
      setTeamMembers([])
      setDepartments([])
      setManagers([])
      setLoading(false)
    }
  }

  const filteredMembers = Array.isArray(teamMembers) ? teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (member.position && member.position.toLowerCase().includes(searchTerm.toLowerCase()))
  ) : []

  const teamStats = {
    totalMembers: filteredMembers.length,
    totalObjectives: filteredMembers.reduce((sum, member) => sum + member.objectives.length, 0),
    averageProgress: filteredMembers.length > 0 
      ? Math.round(
          filteredMembers.reduce((sum, member) => {
            const memberProgress = member.objectives.length > 0
              ? member.objectives.reduce((objSum, obj) => objSum + obj.progress, 0) / member.objectives.length
              : 0
            return sum + memberProgress
          }, 0) / filteredMembers.length
        )
      : 0,
    completedObjectives: filteredMembers.reduce((sum, member) => 
      sum + member.objectives.filter(obj => obj.progress >= 100).length, 0
    )
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'ADMIN':
        return <Shield className="w-4 h-4 text-amber-600" />
      case 'MANAGER':
        return <Shield className="w-4 h-4 text-blue-600" />
      default:
        return <User className="w-4 h-4 text-slate-600" />
    }
  }

  const getRoleBadge = (role: string) => {
    const colors = {
      ADMIN: 'bg-amber-100 text-amber-800 border-amber-200',
      MANAGER: 'bg-blue-100 text-blue-800 border-blue-200',
      STAFF: 'bg-slate-100 text-slate-800 border-slate-200'
    }
    return colors[role as keyof typeof colors] || colors.STAFF
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'text-emerald-600'
    if (progress >= 60) return 'text-amber-600'
    return 'text-red-500'
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'NOT_STARTED': 'bg-slate-100 text-slate-700 border-slate-200',
      'IN_PROGRESS': 'bg-blue-100 text-blue-700 border-blue-200',
      'COMPLETED': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'ON_HOLD': 'bg-amber-100 text-amber-700 border-amber-200'
    }
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.NOT_STARTED
  }

  const openMemberOKRs = (member: TeamMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const closeMemberOKRs = () => {
    setSelectedMember(null)
    setIsModalOpen(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
            <div className="text-lg font-medium text-slate-600">Loading team data...</div>
          </div>
        </div>
      </div>
    )
  }

  // Redirect Staff users - they shouldn't access team OKRs
  if (session?.user?.role === 'STAFF') {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="p-4 bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center">
              <Shield className="h-8 w-8 text-amber-600" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900">Access Restricted</h2>
            <p className="text-slate-600 max-w-md">
              Team OKRs is only available to Managers and Administrators. 
              Please contact your manager if you need access to team information.
            </p>
            <Link href="/dashboard">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Home className="w-4 h-4 mr-2" />
                Return to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <DashboardHeader
        title="Team OKRs"
        description="View and manage your team's OKRs and progress"
        currentPage="Team OKRs"
        icon={<Users className="w-6 h-6 text-blue-600" />}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Filters */}
        <Card className="bg-white shadow-sm border-slate-200">
          <CardHeader className="border-b border-slate-100 pb-4">
            <CardTitle className="flex items-center text-lg font-semibold text-slate-900">
              <Filter className="w-5 h-5 mr-2 text-blue-600" />
              Team Filters
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Manager</label>
                <select
                  value={selectedManager}
                  onChange={(e) => setSelectedManager(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                >
                  <option value="">All Managers</option>
                  {managers.map(manager => (
                    <option key={manager.id} value={manager.id}>
                      {manager.name} ({manager.position || manager.role})
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Department</label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                >
                  <option value="">Select Department</option>
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search team members..."
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Analytics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-white shadow-sm border-slate-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                Team Members
              </CardTitle>
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-3xl font-bold text-slate-900 mb-1">{teamStats.totalMembers}</div>
              <p className="text-sm text-slate-500">Active team members</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm border-slate-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                Total Objectives
              </CardTitle>
              <div className="p-2 bg-purple-100 rounded-lg">
                <Target className="h-5 w-5 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-3xl font-bold text-slate-900 mb-1">{teamStats.totalObjectives}</div>
              <p className="text-sm text-slate-500">Across all team members</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm border-slate-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                Team Progress
              </CardTitle>
              <div className="p-2 bg-emerald-100 rounded-lg">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-3xl font-bold text-slate-900 mb-1">{teamStats.averageProgress}%</div>
              <p className="text-sm text-slate-500">Average team progress</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm border-slate-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                Completed
              </CardTitle>
              <div className="p-2 bg-amber-100 rounded-lg">
                <CheckCircle className="h-5 w-5 text-amber-600" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-3xl font-bold text-slate-900 mb-1">{teamStats.completedObjectives}</div>
              <p className="text-sm text-slate-500">Objectives completed</p>
            </CardContent>
          </Card>
        </div>

        {/* Team Member Buttons */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Team Members ({filteredMembers.length})</h2>
              <p className="text-slate-600 mt-1">Click on a team member's name to view their OKRs and progress</p>
            </div>
          </div>

          {filteredMembers.length > 0 ? (
            <Card className="bg-white shadow-sm border-slate-200">
              <CardContent className="p-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredMembers.map((member) => {
                    const memberProgress = member.objectives.length > 0
                      ? Math.round(member.objectives.reduce((sum, obj) => sum + obj.progress, 0) / member.objectives.length)
                      : 0
                    
                    return (
                      <Button
                        key={member.id}
                        onClick={() => openMemberOKRs(member)}
                        variant="outline"
                        className="h-auto p-4 flex flex-col items-start space-y-3 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 text-left"
                      >
                        <div className="flex items-center space-x-3 w-full">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                            {member.name.charAt(0).toUpperCase()}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold text-slate-900 truncate">{member.name}</h3>
                              {getRoleIcon(member.role)}
                            </div>
                            <p className="text-xs text-slate-500 truncate">{member.position || member.role}</p>
                          </div>
                        </div>
                        
                        <div className="w-full space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-600">{member.objectives.length} objectives</span>
                            <span className={`font-semibold ${getProgressColor(memberProgress)}`}>
                              {memberProgress}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${Math.min(memberProgress, 100)}%` }}
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center text-xs text-blue-600 font-medium">
                          <Eye className="w-3 h-3 mr-1" />
                          View OKRs
                        </div>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white shadow-sm border-slate-200">
              <CardContent className="text-center py-16">
                <div className="p-4 bg-slate-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">No team members found</h3>
                <p className="text-slate-500 mb-6">
                  {searchTerm || selectedManager || selectedDepartment
                    ? "No team members match your current filters."
                    : "No team members available to display."
                  }
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Member OKRs Modal */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {selectedMember.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-xl font-bold text-slate-900">{selectedMember.name}</h2>
                    {getRoleIcon(selectedMember.role)}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getRoleBadge(selectedMember.role)}`}>
                      {selectedMember.role}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">
                    {selectedMember.position} • {selectedMember.email}
                  </p>
                </div>
              </div>
              <Button
                onClick={closeMemberOKRs}
                variant="outline"
                size="sm"
                className="p-2"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {selectedMember.objectives.length > 0 ? (
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-blue-600" />
                    Objectives ({selectedMember.objectives.length})
                  </h4>
                  <div className="space-y-4">
                    {selectedMember.objectives.map((objective) => (
                      <div key={objective.id} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center space-x-3">
                              <h5 className="font-medium text-slate-900">{objective.title}</h5>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadge(objective.status)}`}>
                                {objective.status.replace('_', ' ')}
                              </span>
                            </div>
                            <p className="text-sm text-slate-600">{objective.description}</p>
                            <div className="flex items-center space-x-4 text-xs text-slate-500">
                              <span className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{objective.cycle.name}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <BarChart3 className="w-3 h-3" />
                                <span>{objective.keyResults.length} key results</span>
                              </span>
                            </div>
                          </div>
                          <div className="text-right ml-4">
                            <div className={`text-2xl font-bold ${getProgressColor(objective.progress)}`}>
                              {objective.progress}%
                            </div>
                          </div>
                        </div>
                        
                        {/* Key Results */}
                        {objective.keyResults.length > 0 && (
                          <div className="space-y-2">
                            <div className="flex items-center text-xs font-medium text-slate-600 mb-2">
                              <BarChart3 className="w-3 h-3 mr-1" />
                              Key Results ({objective.keyResults.length})
                            </div>
                            {objective.keyResults.map((kr) => {
                              const progress = kr.targetValue > 0 ? Math.min((kr.currentValue / kr.targetValue) * 100, 100) : 0
                              return (
                                <div key={kr.id} className="flex items-center justify-between text-sm bg-white p-3 rounded border border-slate-200">
                                  <span className="text-slate-700 flex-1">{kr.description}</span>
                                  <div className="flex items-center space-x-3 ml-4">
                                    <span className="text-slate-500 text-xs">
                                      {kr.currentValue} / {kr.targetValue}
                                    </span>
                                    <span className={`font-semibold ${getProgressColor(progress)}`}>
                                      {Math.round(progress)}%
                                    </span>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 bg-slate-50 rounded-lg border border-slate-200">
                  <Target className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm text-slate-500">No objectives assigned</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 