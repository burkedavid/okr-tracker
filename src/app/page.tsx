import Link from 'next/link'
import { ArrowRight, Target, Users, TrendingUp, Shield, AlertTriangle, Bell, Eye, Settings, UserCheck, CheckCircle, Award, Trophy } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Target className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">OKR Tracker</span>
            </div>
            <Link 
              href="/auth/signin"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Master Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Objectives</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Comprehensive OKR management with intelligent tracking, deadline extensions, 
              and professional team collaboration tools.
            </p>
            <div className="flex justify-center mb-8">
              <Link 
                href="/auth/signin"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Start Tracking OKRs</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Real-time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">Smart</div>
                <div className="text-sm text-gray-600">Risk Detection</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">Pro</div>
                <div className="text-sm text-gray-600">Extensions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">Team</div>
                <div className="text-sm text-gray-600">Collaboration</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 animate-bounce">
          <div className="bg-green-100 p-2 rounded-full">
            <CheckCircle className="h-5 w-5 text-green-600" />
          </div>
        </div>
        <div className="absolute top-16 right-16 animate-pulse">
          <div className="bg-blue-100 p-2 rounded-full">
            <TrendingUp className="h-5 w-5 text-blue-600" />
          </div>
        </div>
        <div className="absolute bottom-10 left-16 animate-bounce delay-1000">
          <div className="bg-purple-100 p-2 rounded-full">
            <Award className="h-5 w-5 text-purple-600" />
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Everything You Need for OKR Success</h2>
            <p className="text-lg text-gray-600">Professional-grade features for modern organizations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Core OKR Management */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center space-x-3 mb-3">
                <Target className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Core OKR Management</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Create, edit, and track objectives with measurable key results.</p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">Hierarchical</span>
                <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">Cycles</span>
                <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">Progress</span>
              </div>
            </div>

            {/* Missed OKR Tracking */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
              <div className="flex items-center space-x-3 mb-3">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <h3 className="text-lg font-semibold text-gray-900">🎯 Smart Risk Detection</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Intelligent tracking with professional deadline extensions.</p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-red-200 text-red-800 px-2 py-1 rounded text-xs">🔴 Missed</span>
                <span className="bg-amber-200 text-amber-800 px-2 py-1 rounded text-xs">🟡 At Risk</span>
                <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-xs">🟠 Extended</span>
              </div>
            </div>

            {/* Team Management */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Team Collaboration</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Manager dashboards with comprehensive team oversight.</p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">Dashboards</span>
                <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">Analytics</span>
                <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">Individual</span>
              </div>
            </div>

            {/* Developer API */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <div className="flex items-center space-x-3 mb-3">
                <Settings className="h-6 w-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Developer API</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Comprehensive REST API with full documentation. 
                <Link href="/api/docs" className="text-purple-600 hover:text-purple-800 underline ml-1">
                  View API Docs →
                </Link>
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">REST API</span>
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">Integration</span>
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">Analytics</span>
              </div>
            </div>

            {/* Security */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
              <div className="flex items-center space-x-3 mb-3">
                <Shield className="h-6 w-6 text-orange-600" />
                <h3 className="text-lg font-semibold text-gray-900">Enterprise Security</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Role-based access with complete audit trails.</p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-xs">RBAC</span>
                <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-xs">Auth</span>
                <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-xs">Audit</span>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200">
              <div className="flex items-center space-x-3 mb-3">
                <Bell className="h-6 w-6 text-indigo-600" />
                <h3 className="text-lg font-semibold text-gray-900">Smart Notifications</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Automated alerts for extensions and progress updates.</p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-indigo-200 text-indigo-800 px-2 py-1 rounded text-xs">Real-time</span>
                <span className="bg-indigo-200 text-indigo-800 px-2 py-1 rounded text-xs">Extensions</span>
                <span className="bg-indigo-200 text-indigo-800 px-2 py-1 rounded text-xs">Progress</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview & Roles */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Dashboard Preview */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Risk Management</h3>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Target Tracking Dashboard</h4>
                  <Eye className="h-5 w-5 text-gray-400" />
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-blue-600">12</div>
                    <div className="text-xs text-gray-600">Total</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-green-600">8</div>
                    <div className="text-xs text-gray-600">On Track</div>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-amber-600">3</div>
                    <div className="text-xs text-gray-600">At Risk</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-red-600">1</div>
                    <div className="text-xs text-gray-600">Missed</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Overall Progress</span>
                    <span className="font-semibold text-gray-900">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-500 w-2 h-2 rounded-full"></div>
                  <span className="text-sm text-gray-700"><strong>🔴 Missed Target Detection:</strong> Automatic identification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-500 w-2 h-2 rounded-full"></div>
                  <span className="text-sm text-gray-700"><strong>🟡 At-Risk Monitoring:</strong> Early warning system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-500 w-2 h-2 rounded-full"></div>
                  <span className="text-sm text-gray-700"><strong>🟠 Extension Management:</strong> Professional workflow</span>
                </div>
              </div>
            </div>

            {/* Role-Based Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Built for Every Role</h3>
              <div className="space-y-4">
                {/* Admin */}
                <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500">
                  <div className="flex items-center space-x-3 mb-2">
                    <Settings className="h-5 w-5 text-purple-600" />
                    <h4 className="font-semibold text-gray-900">Admin</h4>
                  </div>
                  <p className="text-sm text-gray-600">Full system access, user management, global oversight, extension authority</p>
                </div>

                {/* Manager */}
                <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
                  <div className="flex items-center space-x-3 mb-2">
                    <UserCheck className="h-5 w-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Manager</h4>
                  </div>
                  <p className="text-sm text-gray-600">Team oversight, extension authority, analytics, missed target management</p>
                </div>

                {/* Staff */}
                <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
                  <div className="flex items-center space-x-3 mb-2">
                    <Users className="h-5 w-5 text-green-600" />
                    <h4 className="font-semibold text-gray-900">Staff</h4>
                  </div>
                  <p className="text-sm text-gray-600">Personal OKR management, progress updates, risk indicators, team visibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your OKR Management?</h2>
          <p className="text-lg text-blue-100 mb-6">
            Join organizations using our comprehensive system to achieve strategic objectives.
          </p>
          <Link 
            href="/auth/signin"
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Start Your OKR Journey</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Target className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold">OKR Tracker</span>
            </div>
            <div className="text-gray-400 text-sm">
              Built with ❤️ for effective OKR management
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
