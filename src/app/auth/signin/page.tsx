'use client'

import { useState } from 'react'
import { signIn, getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Target, Mail, Lock, AlertCircle, Check } from 'lucide-react'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/dashboard',
        rememberMe: rememberMe ? 'true' : 'false',
      })

      if (result?.error) {
        setError('Invalid email or password')
      } else {
        // Get the session to check user role
        await getSession()
        router.push('/dashboard')
      }
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-blue-600 rounded-full">
              <Target className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">OKR Tracker</h1>
          <p className="text-slate-600">Sign in to manage your objectives and key results</p>
        </div>

        <Card className="bg-white shadow-lg border-slate-200">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-semibold text-center">Welcome back</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  <span className="text-sm text-red-700">{error}</span>
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div 
                  className={`w-5 h-5 border rounded flex items-center justify-center cursor-pointer ${rememberMe ? 'bg-blue-600 border-blue-600' : 'border-slate-300'}`}
                  onClick={() => setRememberMe(!rememberMe)}
                >
                  {rememberMe && <Check className="w-3 h-3 text-white" />}
                </div>
                <label 
                  className="text-sm text-slate-700 cursor-pointer"
                  onClick={() => setRememberMe(!rememberMe)}
                >
                  Stay signed in
                </label>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="text-sm text-slate-600">
                <p className="font-medium mb-2">Test Accounts:</p>
                <div className="space-y-1 text-xs">
                  <p><strong>Manager:</strong> david.burke@company.com</p>
                  <p><strong>Staff:</strong> kevin.hughes@company.com</p>
                  <p><strong>Password:</strong> password123</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 