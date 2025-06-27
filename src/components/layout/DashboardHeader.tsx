'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { Session } from 'next-auth'
import { Button } from '@/components/ui/button'
import { 
  Home,
  Users,
  Settings,
  Target,
  LogOut,
  User,
  Shield,
  ChevronDown,
  Calendar
} from 'lucide-react'

interface DashboardHeaderProps {
  title: string
  icon: React.ReactNode
  description?: string
  currentPage?: string
  actions?: Array<{
    label: string
    onClick?: () => void
    href?: string
    variant?: 'default' | 'secondary' | 'outline' | 'ghost'
    icon?: React.ReactNode
    disabled?: boolean
    hidden?: boolean
  }>
  showViewToggle?: boolean
  viewMode?: 'team' | 'personal'
  onViewModeChange?: (mode: 'team' | 'personal') => void
}

export default function DashboardHeader({
  title,
  icon,
  description,
  currentPage,
  actions = [],
  showViewToggle = false,
  viewMode = 'team',
  onViewModeChange
}: DashboardHeaderProps) {
  const { data: session } = useSession()

  // Type assertion for our custom session with extended user properties
  const typedSession = session as Session | null

  const [showUserMenu, setShowUserMenu] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  const handleLogout = async () => {
    await signOut({ 
      callbackUrl: '/auth/signin',
      redirect: true 
    })
  }

  // Default navigation actions based on user role and current page
  const defaultActions = [
    // Show "Home" button on all pages except Dashboard - ALWAYS FIRST
    {
      label: 'Home',
      href: '/dashboard',
      variant: 'ghost' as const,
      icon: <Home className="w-4 h-4" />,
      hidden: currentPage === 'Dashboard',
      disabled: false,
      onClick: undefined
    },
    {
      label: 'User Management',
      href: '/dashboard/users',
      variant: 'outline' as const,
      icon: <Settings className="w-4 h-4" />,
      hidden: typedSession?.user?.role === 'STAFF' || currentPage === 'User Management' || currentPage === 'Manage OKRs',
      disabled: false,
      onClick: undefined
    },
    {
      label: 'Team OKRs',
      href: '/dashboard/team',
      variant: 'outline' as const,
      icon: <Users className="w-4 h-4" />,
      hidden: typedSession?.user?.role === 'STAFF' || currentPage === 'Team OKRs' || currentPage === 'Manage OKRs',
      disabled: false,
      onClick: undefined
    },
    {
      label: 'Timeline',
      href: '/dashboard/timeline',
      variant: 'outline' as const,
      icon: <Calendar className="w-4 h-4" />,
      hidden: currentPage === 'Timeline',
      disabled: false,
      onClick: undefined
    },
    {
      label: 'Manage OKRs',
      href: '/dashboard/manage',
      variant: 'outline' as const,
      icon: <Target className="w-4 h-4" />,
      hidden: currentPage === 'Manage OKRs',
      disabled: false,
      onClick: undefined
    }
  ]

  // Merge actions with Home button first, then custom actions, then remaining default actions
  const homeAction = defaultActions.find(action => action.label === 'Home')
  const otherDefaultActions = defaultActions.filter(action => action.label !== 'Home')
  
  const allActions = [
    ...(homeAction ? [homeAction] : []),
    ...actions,
    ...otherDefaultActions.filter(defaultAction => 
      !actions.some(action => action.label === defaultAction.label)
    )
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Left Side - Title with Icon */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <div className="text-blue-600">
                  {icon}
                </div>
              </div>
              
              <div>
                <h1 className="text-lg font-bold text-slate-800">
                  {title}
                </h1>
                {description && (
                  <p className="text-xs text-slate-500 max-w-xs">
                    {description}
                  </p>
                )}
              </div>
            </div>

            {/* View Mode Toggle for Managers */}
            {showViewToggle && typedSession?.user?.role === 'MANAGER' && (
              <div className="flex items-center bg-slate-100 rounded-lg p-1 ml-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onViewModeChange?.('team')}
                  className={viewMode === 'team' 
                    ? 'bg-blue-600 text-white h-7 px-3 rounded-md' 
                    : 'text-slate-600 hover:bg-slate-200 h-7 px-3 rounded-md'
                  }
                >
                  <Users className="w-3 h-3 mr-1" />
                  Team
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onViewModeChange?.('personal')}
                  className={viewMode === 'personal' 
                    ? 'bg-blue-600 text-white h-7 px-3 rounded-md' 
                    : 'text-slate-600 hover:bg-slate-200 h-7 px-3 rounded-md'
                  }
                >
                  <User className="w-3 h-3 mr-1" />
                  Mine
                </Button>
              </div>
            )}
          </div>

          {/* Right Side - Actions and User */}
          <div className="flex items-center gap-2 justify-end">
            {/* Action Buttons */}
            {allActions
              .filter(action => !action.hidden)
              .map((action, index) => {
                if (action.href) {
                  return (
                    <Link key={index} href={action.href}>
                      <Button
                        variant={action.variant || 'outline'}
                        size="sm"
                        className={action.variant === 'default' ? 'bg-blue-600 hover:bg-blue-700 text-white h-8 px-3' :
                                 action.variant === 'secondary' ? 'bg-emerald-600 hover:bg-emerald-700 text-white h-8 px-3' :
                                 action.variant === 'ghost' && action.label === 'Update Progress' ? 'bg-purple-600 hover:bg-purple-700 text-white h-8 px-3' :
                                 action.variant === 'ghost' ? 'text-slate-600 hover:bg-slate-100 h-8 px-3' :
                                 'border-slate-300 text-slate-700 hover:bg-slate-50 h-8 px-3'}
                      >
                        {action.icon}
                        <span className="ml-2">{action.label}</span>
                      </Button>
                    </Link>
                  )
                } else {
                  return (
                    <Button
                      key={index}
                      variant={action.variant || 'outline'}
                      size="sm"
                      onClick={action.onClick}
                      disabled={action.disabled}
                      className={action.variant === 'default' ? 'bg-blue-600 hover:bg-blue-700 text-white h-8 px-3' :
                               action.variant === 'secondary' ? 'bg-emerald-600 hover:bg-emerald-700 text-white h-8 px-3' :
                               action.variant === 'ghost' && action.label === 'Update Progress' ? 'bg-purple-600 hover:bg-purple-700 text-white h-8 px-3' :
                               action.variant === 'ghost' ? 'text-slate-600 hover:bg-slate-100 h-8 px-3' :
                               'border-slate-300 text-slate-700 hover:bg-slate-50 h-8 px-3'}
                    >
                      {action.icon}
                      <span className="ml-2">{action.label}</span>
                    </Button>
                  )
                }
              })}

            {/* User Profile with Dropdown */}
            {typedSession?.user && (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 bg-slate-50 hover:bg-slate-100 rounded-lg px-3 py-1.5 border border-slate-200 transition-colors"
                >
                  <div className="flex items-center justify-center w-7 h-7 bg-blue-600 text-white rounded-full text-xs font-medium">
                    {typedSession.user.name?.charAt(0).toUpperCase() || typedSession.user.email?.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-slate-900">
                      {typedSession.user.name || 
                       typedSession.user.email || 'User'}
                    </div>
                    <div className="text-xs text-slate-500 flex items-center space-x-1">
                      {typedSession.user.role === 'ADMIN' && <Shield className="w-3 h-3 text-amber-600" />}
                      {typedSession.user.role === 'MANAGER' && <Shield className="w-3 h-3 text-blue-600" />}
                      {typedSession.user.role === 'STAFF' && <User className="w-3 h-3 text-slate-600" />}
                      <span>{typedSession.user.role}</span>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>

                {/* Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-slate-100">
                      <div className="text-sm font-medium text-slate-900">
                        {typedSession.user.name || 'User'}
                      </div>
                      <div className="text-sm text-slate-500">
                        {typedSession.user.email}
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-2 text-sm text-red-700 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 