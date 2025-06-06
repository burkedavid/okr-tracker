'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { Session } from 'next-auth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import DashboardHeader from '@/components/layout/DashboardHeader'
import { 
  Users, 
  UserPlus, 
  Building,
  Edit,
  Trash2,
  Save,
  X,
  Crown,
  Shield,
  User,
  Mail,
  Home,
  Settings,
  Search,
  Filter
} from 'lucide-react'

interface User {
  id: string
  name: string
  email: string
  position: string
  role: string
  active: boolean
  department?: {
    id: string
    name: string
  }
  manager?: {
    id: string
    name: string
    position: string
  }
  employees: Array<{
    id: string
    name: string
    position: string
  }>
  _count: {
    ownedObjectives: number
    keyResults: number
    employees: number
  }
}

interface Department {
  id: string
  name: string
  parent?: {
    id: string
    name: string
  }
  children: Array<{
    id: string
    name: string
  }>
  users: Array<{
    id: string
    name: string
    position: string
    role: string
  }>
  _count: {
    users: number
    children: number
  }
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [departments, setDepartments] = useState<Department[]>([])
  const [loading, setLoading] = useState(true)
  const [showUserForm, setShowUserForm] = useState(false)
  const [showDepartmentForm, setShowDepartmentForm] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('')
  const { data: session } = useSession()

  // Type assertion for our custom session with extended user properties
  const typedSession = session as Session | null

  // Form states
  const [userForm, setUserForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'STAFF',
    position: '',
    departmentId: '',
    managerId: ''
  })

  const [departmentForm, setDepartmentForm] = useState({
    name: '',
    parentId: '',
    headId: ''
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [usersRes, departmentsRes] = await Promise.all([
        fetch('/api/users'),
        fetch('/api/departments')
      ])

      const [usersData, departmentsData] = await Promise.all([
        usersRes.json(),
        departmentsRes.json()
      ])

      // Ensure data is always an array, even if API fails
      setUsers(Array.isArray(usersData) ? usersData : [])
      setDepartments(Array.isArray(departmentsData) ? departmentsData : [])
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      // Set empty arrays on error to prevent runtime errors
      setUsers([])
      setDepartments([])
      setLoading(false)
    }
  }

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userForm),
      })

      if (response.ok) {
        setShowUserForm(false)
        setUserForm({
          name: '',
          email: '',
          password: '',
          role: 'STAFF',
          position: '',
          departmentId: '',
          managerId: ''
        })
        fetchData()
      } else {
        const error = await response.json()
        alert(error.error || 'Failed to create user')
      }
    } catch (error) {
      console.error('Error creating user:', error)
      alert('Failed to create user')
    }
  }

  const handleUpdateUser = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingUser) return

    try {
      const response = await fetch(`/api/users?id=${editingUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userForm),
      })

      if (response.ok) {
        setEditingUser(null)
        setUserForm({
          name: '',
          email: '',
          password: '',
          role: 'STAFF',
          position: '',
          departmentId: '',
          managerId: ''
        })
        fetchData()
      } else {
        const error = await response.json()
        alert(error.error || 'Failed to update user')
      }
    } catch (error) {
      console.error('Error updating user:', error)
      alert('Failed to update user')
    }
  }

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return

    try {
      const response = await fetch(`/api/users?id=${userId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        fetchData()
      } else {
        const error = await response.json()
        alert(error.error || 'Failed to delete user')
      }
    } catch (error) {
      console.error('Error deleting user:', error)
      alert('Failed to delete user')
    }
  }

  const handleCreateDepartment = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/departments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(departmentForm),
      })

      if (response.ok) {
        setShowDepartmentForm(false)
        setDepartmentForm({
          name: '',
          parentId: '',
          headId: ''
        })
        fetchData()
      } else {
        const error = await response.json()
        alert(error.error || 'Failed to create department')
      }
    } catch (error) {
      console.error('Error creating department:', error)
      alert('Failed to create department')
    }
  }

  const startEditUser = (user: User) => {
    setEditingUser(user)
    setUserForm({
      name: user.name,
      email: user.email,
      password: '',
      role: user.role,
      position: user.position || '',
      departmentId: user.department?.id || '',
      managerId: user.manager?.id || ''
    })
    setShowUserForm(true)
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'ADMIN':
        return <Crown className="w-4 h-4 text-yellow-600" />
      case 'MANAGER':
        return <Shield className="w-4 h-4 text-blue-600" />
      default:
        return <User className="w-4 h-4 text-gray-600" />
    }
  }

  const getRoleBadge = (role: string) => {
    const colors = {
      ADMIN: 'bg-yellow-100 text-yellow-800',
      MANAGER: 'bg-blue-100 text-blue-800',
      STAFF: 'bg-gray-100 text-gray-800'
    }
    return colors[role as keyof typeof colors] || colors.STAFF
  }

  const filteredUsers = (users || []).filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (user.position && user.position.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesRole = !roleFilter || user.role === roleFilter
    return matchesSearch && matchesRole
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
            <div className="text-lg font-medium text-slate-600">Loading users...</div>
          </div>
        </div>
      </div>
    )
  }

  // Redirect Staff users - they shouldn't access user management
  if (typedSession?.user?.role === 'STAFF') {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="p-4 bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center">
              <Shield className="h-8 w-8 text-amber-600" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900">Access Restricted</h2>
            <p className="text-slate-600 max-w-md">
              User Management is only available to Managers and Administrators. 
              Please contact your administrator if you need user-related assistance.
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
        title="User Management"
        description="Manage users, roles, and organisational structure"
        currentPage="User Management"
        icon={<Settings className="w-6 h-6 text-blue-600" />}
        actions={[
          {
            label: 'Add Department',
            onClick: () => setShowDepartmentForm(true),
            variant: 'secondary',
            icon: <Building className="w-4 h-4" />
          },
          {
            label: 'Add User',
            onClick: () => setShowUserForm(true),
            variant: 'default',
            icon: <UserPlus className="w-4 h-4" />
          }
        ]}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Filters */}
        <Card className="bg-white shadow-lg border-0 ring-1 ring-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Filter className="w-5 h-5 mr-2 text-blue-600" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search users..."
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Roles</option>
                  <option value="ADMIN">Admin</option>
                  <option value="MANAGER">Manager</option>
                  <option value="STAFF">Staff</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Form */}
        {showUserForm && (
          <Card className="bg-white shadow-xl border-0 ring-1 ring-gray-200">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <UserPlus className="w-5 h-5 text-blue-600" />
                  <CardTitle className="text-xl text-gray-900">
                    {editingUser ? 'Edit User' : 'Create New User'}
                  </CardTitle>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {
                    setShowUserForm(false)
                    setEditingUser(null)
                    setUserForm({
                      name: '',
                      email: '',
                      password: '',
                      role: 'STAFF',
                      position: '',
                      departmentId: '',
                      managerId: ''
                    })
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={editingUser ? handleUpdateUser : handleCreateUser} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      value={userForm.name}
                      onChange={(e) => setUserForm({...userForm, name: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      value={userForm.email}
                      onChange={(e) => setUserForm({...userForm, email: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
                
                {!editingUser && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Password *</label>
                    <input
                      type="password"
                      value={userForm.password}
                      onChange={(e) => setUserForm({...userForm, password: e.target.value})}
                      required={!editingUser}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter password"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Role *</label>
                    <select
                      value={userForm.role}
                      onChange={(e) => setUserForm({...userForm, role: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="STAFF">Staff</option>
                      <option value="MANAGER">Manager</option>
                      <option value="ADMIN">Admin</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Position</label>
                    <input
                      type="text"
                      value={userForm.position}
                      onChange={(e) => setUserForm({...userForm, position: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Job title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
                    <select
                      value={userForm.departmentId}
                      onChange={(e) => setUserForm({...userForm, departmentId: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select department</option>
                      {(departments || []).map(dept => (
                        <option key={dept.id} value={dept.id}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Manager</label>
                  <select
                    value={userForm.managerId}
                    onChange={(e) => setUserForm({...userForm, managerId: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select manager</option>
                    {(users || []).filter(user => user.role === 'MANAGER' || user.role === 'ADMIN').map(manager => (
                      <option key={manager.id} value={manager.id}>
                        {manager.name} ({manager.position})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => {
                      setShowUserForm(false)
                      setEditingUser(null)
                    }}
                    className="px-6"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {editingUser ? 'Update User' : 'Create User'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Department Form */}
        {showDepartmentForm && (
          <Card className="bg-white shadow-xl border-0 ring-1 ring-gray-200">
            <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Building className="w-5 h-5 text-green-600" />
                  <CardTitle className="text-xl text-gray-900">Create New Department</CardTitle>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowDepartmentForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleCreateDepartment} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Department Name *</label>
                  <input
                    type="text"
                    value={departmentForm.name}
                    onChange={(e) => setDepartmentForm({...departmentForm, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter department name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Parent Department</label>
                    <select
                      value={departmentForm.parentId}
                      onChange={(e) => setDepartmentForm({...departmentForm, parentId: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">No parent (top level)</option>
                      {(departments || []).map(dept => (
                        <option key={dept.id} value={dept.id}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Department Head</label>
                    <select
                      value={departmentForm.headId}
                      onChange={(e) => setDepartmentForm({...departmentForm, headId: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select department head</option>
                      {(users || []).filter(user => user.role === 'MANAGER' || user.role === 'ADMIN').map(user => (
                        <option key={user.id} value={user.id}>
                          {user.name} ({user.position})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowDepartmentForm(false)}
                    className="px-6"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Create Department
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Users List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Users ({filteredUsers.length})</h2>
          </div>
          
          <div className="grid gap-6">
            {/* Show managers first (only if not filtering for staff only) */}
            {(!roleFilter || roleFilter !== 'STAFF') && filteredUsers
              .filter(user => user.role === 'MANAGER' || user.role === 'ADMIN')
              .map((user) => (
                <div key={user.id} className="space-y-4">
                  {/* Manager Card */}
                  <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-200 border-0 ring-2 ring-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                            {user.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
                              {getRoleIcon(user.role)}
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleBadge(user.role)}`}>
                                {user.role}
                              </span>
                              {!user.active && (
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                  Inactive
                                </span>
                              )}
                            </div>
                            <div className="space-y-1 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Mail className="w-4 h-4 mr-2" />
                                {user.email}
                              </div>
                              {user.position && (
                                <div className="flex items-center">
                                  <User className="w-4 h-4 mr-2" />
                                  {user.position}
                                </div>
                              )}
                              {user.department && (
                                <div className="flex items-center">
                                  <Building className="w-4 h-4 mr-2" />
                                  {user.department.name}
                                </div>
                              )}
                              {user._count.employees > 0 && (
                                <div className="flex items-center">
                                  <Users className="w-4 h-4 mr-2 text-emerald-600" />
                                  <span className="text-emerald-600 font-medium">Manages {user._count.employees} direct report{user._count.employees !== 1 ? 's' : ''}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-right text-sm text-gray-500 mr-4">
                            <div>{user._count.ownedObjectives} objectives</div>
                            <div>{user._count.keyResults} key results</div>
                            <div>{user._count.employees} direct reports</div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => startEditUser(user)}
                            className="text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteUser(user.id)}
                            className="text-red-600 hover:bg-red-50 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Direct Reports */}
                  {user.employees.length > 0 && (
                    <div className="ml-8 space-y-3">
                      <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                        <div className="w-4 h-0.5 bg-gray-300"></div>
                        <Users className="w-4 h-4 text-emerald-600" />
                        <span>Direct Reports ({user.employees.length})</span>
                      </div>
                      {filteredUsers
                        .filter(staff => staff.manager?.id === user.id)
                        .map((staff) => (
                          <Card key={staff.id} className="bg-gray-50 shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-emerald-400">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-semibold">
                                    {staff.name.charAt(0).toUpperCase()}
                                  </div>
                                  <div>
                                    <div className="flex items-center space-x-2 mb-1">
                                      <h4 className="font-semibold text-gray-900">{staff.name}</h4>
                                      {getRoleIcon(staff.role)}
                                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleBadge(staff.role)}`}>
                                        {staff.role}
                                      </span>
                                      {!staff.active && (
                                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                          Inactive
                                        </span>
                                      )}
                                    </div>
                                    <div className="space-y-1 text-sm text-gray-600">
                                      <div className="flex items-center">
                                        <Mail className="w-3 h-3 mr-2" />
                                        {staff.email}
                                      </div>
                                      {staff.position && (
                                        <div className="flex items-center">
                                          <User className="w-3 h-3 mr-2" />
                                          {staff.position}
                                        </div>
                                      )}
                                      {staff.department && (
                                        <div className="flex items-center">
                                          <Building className="w-3 h-3 mr-2" />
                                          {staff.department.name}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="text-right text-xs text-gray-500 mr-2">
                                    <div>{staff._count.ownedObjectives} objectives</div>
                                    <div>{staff._count.keyResults} key results</div>
                                  </div>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => startEditUser(staff)}
                                    className="text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                                  >
                                    <Edit className="w-3 h-3" />
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleDeleteUser(staff.id)}
                                    className="text-red-600 hover:bg-red-50 hover:text-red-700"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  )}
                </div>
              ))}

            {/* Show staff members directly when filtering for staff only */}
            {roleFilter === 'STAFF' && filteredUsers
              .filter(user => user.role === 'STAFF')
              .map((user) => (
                <Card key={user.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-200 border-0 ring-1 ring-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
                            {getRoleIcon(user.role)}
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleBadge(user.role)}`}>
                              {user.role}
                            </span>
                            {!user.active && (
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                Inactive
                              </span>
                            )}
                          </div>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Mail className="w-4 h-4 mr-2" />
                              {user.email}
                            </div>
                            {user.position && (
                              <div className="flex items-center">
                                <User className="w-4 h-4 mr-2" />
                                {user.position}
                              </div>
                            )}
                            {user.department && (
                              <div className="flex items-center">
                                <Building className="w-4 h-4 mr-2" />
                                {user.department.name}
                              </div>
                            )}
                            {user.manager && (
                              <div className="flex items-center">
                                <Shield className="w-4 h-4 mr-2 text-blue-600" />
                                <span className="text-blue-600 font-medium">Reports to: {user.manager.name}</span>
                                <span className="text-gray-500 ml-1">({user.manager.position})</span>
                              </div>
                            )}
                            {!user.manager && (
                              <div className="flex items-center">
                                <Shield className="w-4 h-4 mr-2 text-amber-600" />
                                <span className="text-amber-600 font-medium">No manager assigned</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-right text-sm text-gray-500 mr-4">
                          <div>{user._count.ownedObjectives} objectives</div>
                          <div>{user._count.keyResults} key results</div>
                          <div>{user._count.employees} direct reports</div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => startEditUser(user)}
                          className="text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-600 hover:bg-red-50 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

            {/* Show unassigned staff (only when not filtering for specific roles or when filtering for staff) */}
            {(!roleFilter || roleFilter === 'STAFF') && filteredUsers.filter(user => user.role === 'STAFF' && !user.manager).length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-lg font-semibold text-amber-700">
                  <div className="w-4 h-0.5 bg-amber-400"></div>
                  <User className="w-5 h-5" />
                  <span>Unassigned Staff</span>
                </div>
                {filteredUsers
                  .filter(user => user.role === 'STAFF' && !user.manager)
                  .map((user) => (
                    <Card key={user.id} className="bg-amber-50 shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-amber-400">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-white font-semibold">
                              {user.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <div className="flex items-center space-x-2 mb-1">
                                <h4 className="font-semibold text-gray-900">{user.name}</h4>
                                {getRoleIcon(user.role)}
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleBadge(user.role)}`}>
                                  {user.role}
                                </span>
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-200 text-amber-800">
                                  No Manager
                                </span>
                              </div>
                              <div className="space-y-1 text-sm text-gray-600">
                                <div className="flex items-center">
                                  <Mail className="w-3 h-3 mr-2" />
                                  {user.email}
                                </div>
                                {user.position && (
                                  <div className="flex items-center">
                                    <User className="w-3 h-3 mr-2" />
                                    {user.position}
                                  </div>
                                )}
                                {user.department && (
                                  <div className="flex items-center">
                                    <Building className="w-3 h-3 mr-2" />
                                    {user.department.name}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="text-right text-xs text-gray-500 mr-2">
                              <div>{user._count.ownedObjectives} objectives</div>
                              <div>{user._count.keyResults} key results</div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => startEditUser(user)}
                              className="text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                            >
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDeleteUser(user.id)}
                              className="text-red-600 hover:bg-red-50 hover:text-red-700"
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            )}
            
            {filteredUsers.length === 0 && (
              <Card className="bg-white shadow-lg border-0 ring-1 ring-gray-200">
                <CardContent className="text-center py-12">
                  <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No users found</h3>
                  <p className="text-gray-500 mb-6">
                    {searchTerm || roleFilter 
                      ? "No users match your current filters."
                      : "Get started by creating your first user."
                    }
                  </p>
                  {!searchTerm && !roleFilter && (
                    <Button 
                      onClick={() => setShowUserForm(true)}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      Create First User
                    </Button>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Departments Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Departments ({(departments || []).length})</h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {(departments || []).map((department) => (
              <Card key={department.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-200 border-0 ring-1 ring-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{department.name}</h3>
                      {department.parent && (
                        <p className="text-sm text-gray-500">
                          Parent: {department.parent.name}
                        </p>
                      )}
                    </div>
                    <Building className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>{department._count.users} users</div>
                    <div>{department._count.children} sub-departments</div>
                  </div>
                  {department.users.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-xs text-gray-500 mb-2">Team members:</p>
                      <div className="space-y-1">
                        {department.users.slice(0, 3).map(user => (
                          <div key={user.id} className="text-xs text-gray-600">
                            {user.name} - {user.position}
                          </div>
                        ))}
                        {department.users.length > 3 && (
                          <div className="text-xs text-gray-500">
                            +{department.users.length - 3} more
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 