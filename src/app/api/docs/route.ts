import { NextResponse } from 'next/server'

export async function GET() {
  const apiDocs = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OKR Tracker API Documentation</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #3b82f6;
            --primary-dark: #1d4ed8;
            --secondary: #6366f1;
            --success: #10b981;
            --warning: #f59e0b;
            --error: #ef4444;
            --gray-50: #f9fafb;
            --gray-100: #f3f4f6;
            --gray-200: #e5e7eb;
            --gray-300: #d1d5db;
            --gray-400: #9ca3af;
            --gray-500: #6b7280;
            --gray-600: #4b5563;
            --gray-700: #374151;
            --gray-800: #1f2937;
            --gray-900: #111827;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: var(--gray-800);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .header {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 24px;
            padding: 3rem;
            margin-bottom: 2rem;
            text-align: center;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .header h1 {
            font-size: 3.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
        }
        
        .header p {
            font-size: 1.25rem;
            color: var(--gray-600);
            font-weight: 400;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .stat-card {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            padding: 1.5rem;
            border-radius: 16px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .stat-number {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }
        
        .stat-label {
            color: var(--gray-600);
            font-size: 0.875rem;
            font-weight: 500;
        }
        
        .endpoint-group {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            margin-bottom: 2rem;
            overflow: hidden;
            box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .endpoint-group:hover {
            transform: translateY(-2px);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .group-header {
            background: linear-gradient(135deg, var(--gray-50) 0%, var(--gray-100) 100%);
            padding: 2rem;
            border-bottom: 1px solid var(--gray-200);
        }
        
        .group-title {
            font-size: 1.75rem;
            font-weight: 700;
            color: var(--gray-900);
            margin-bottom: 0.5rem;
            letter-spacing: -0.01em;
        }
        
        .group-description {
            color: var(--gray-600);
            font-size: 1.1rem;
        }
        
        .endpoint {
            padding: 2rem;
            border-bottom: 1px solid var(--gray-100);
            transition: background-color 0.2s ease;
        }
        
        .endpoint:last-child {
            border-bottom: none;
        }
        
        .endpoint:hover {
            background: var(--gray-50);
        }
        
        .endpoint-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .method {
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-weight: 600;
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .method.get { 
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
        }
        .method.post { 
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            color: white;
        }
        .method.put { 
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            color: white;
        }
        .method.delete { 
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            color: white;
        }
        
        .endpoint-path {
            font-family: 'JetBrains Mono', monospace;
            font-size: 1.1rem;
            font-weight: 500;
            color: var(--gray-900);
            background: var(--gray-100);
            padding: 0.5rem 1rem;
            border-radius: 8px;
            border: 1px solid var(--gray-200);
        }
        
        .endpoint-description {
            color: var(--gray-600);
            margin-bottom: 1.5rem;
            font-size: 1rem;
        }
        
        .params {
            margin-top: 1.5rem;
        }
        
        .params-title {
            font-weight: 600;
            color: var(--gray-800);
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }
        
        .param {
            background: linear-gradient(135deg, var(--gray-50) 0%, white 100%);
            padding: 1.25rem;
            border-radius: 12px;
            margin-bottom: 1rem;
            border: 1px solid var(--gray-200);
            transition: all 0.2s ease;
        }
        
        .param:hover {
            border-color: var(--primary);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
        }
        
        .param-name {
            font-family: 'JetBrains Mono', monospace;
            font-weight: 600;
            color: var(--primary);
            font-size: 0.95rem;
        }
        
        .param-type {
            color: var(--secondary);
            font-size: 0.875rem;
            margin-left: 0.75rem;
            font-weight: 500;
            background: rgba(99, 102, 241, 0.1);
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
        }
        
        .param-description {
            color: var(--gray-600);
            font-size: 0.9rem;
            margin-top: 0.5rem;
            line-height: 1.5;
        }
        
        .response {
            background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
            border: 1px solid #a7f3d0;
            border-radius: 12px;
            padding: 1.5rem;
            margin-top: 1.5rem;
        }
        
        .response-title {
            font-weight: 600;
            color: var(--success);
            margin-bottom: 0.75rem;
            font-size: 1rem;
        }
        
        .response-description {
            color: #065f46;
            font-size: 0.9rem;
            line-height: 1.5;
        }
        
        .base-url {
            background: linear-gradient(135deg, var(--gray-900) 0%, var(--gray-800) 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 16px;
            font-family: 'JetBrains Mono', monospace;
            margin-bottom: 2rem;
            text-align: center;
            font-size: 1.1rem;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }
        
        .note {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: 1px solid #fbbf24;
            border-radius: 12px;
            padding: 1.5rem;
            margin: 1.5rem 0;
        }
        
        .note-title {
            font-weight: 600;
            color: #92400e;
            margin-bottom: 0.75rem;
            font-size: 1rem;
        }
        
        .note-text {
            color: #a16207;
            font-size: 0.9rem;
            line-height: 1.5;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 1rem;
            }
            
            .header {
                padding: 2rem 1.5rem;
            }
            
            .header h1 {
                font-size: 2.5rem;
            }
            
            .endpoint-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.75rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 OKR Tracker API</h1>
            <p>Complete API documentation for the OKR Management System</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-number">25+</div>
                <div class="stat-label">Endpoints</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">REST</div>
                <div class="stat-label">Architecture</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">JSON</div>
                <div class="stat-label">Response Format</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">Auth</div>
                <div class="stat-label">Secured</div>
            </div>
        </div>
        
        <div class="base-url">
            <strong>Base URL:</strong> ${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api
        </div>
        
        <div class="note">
            <div class="note-title">🔐 Authentication Required</div>
            <div class="note-text">Most endpoints require authentication. Make sure you're logged in or include proper authentication headers.</div>
        </div>
        
        <!-- Health Check Endpoint -->
        <div class="endpoint-group">
            <div class="group-header">
                <div class="group-title">🏥 Health Check</div>
                <div class="group-description">API health monitoring</div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method get">GET</span>
                    <span class="endpoint-path">/health</span>
                </div>
                <div class="endpoint-description">Check API health status</div>
                <div class="response">
                    <div class="response-title">Response:</div>
                    <div class="response-description">Returns API status, timestamp, and service name</div>
                </div>
            </div>
        </div>
        
        <!-- Authentication Endpoints -->
        <div class="endpoint-group">
            <div class="group-header">
                <div class="group-title">🔐 Authentication</div>
                <div class="group-description">User authentication and session management</div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method post">POST</span>
                    <span class="endpoint-path">/auth/signin</span>
                </div>
                <div class="endpoint-description">Sign in with email and password</div>
                <div class="params">
                    <div class="params-title">Request Body:</div>
                    <div class="param">
                        <span class="param-name">email</span>
                        <span class="param-type">string</span>
                        <div class="param-description">User's email address</div>
                    </div>
                    <div class="param">
                        <span class="param-name">password</span>
                        <span class="param-type">string</span>
                        <div class="param-description">User's password</div>
                    </div>
                </div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method post">POST</span>
                    <span class="endpoint-path">/auth/signout</span>
                </div>
                <div class="endpoint-description">Sign out current user</div>
            </div>
        </div>
        
        <!-- Users Endpoints -->
        <div class="endpoint-group">
            <div class="group-header">
                <div class="group-title">👥 Users</div>
                <div class="group-description">User management and profile operations</div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method get">GET</span>
                    <span class="endpoint-path">/users</span>
                </div>
                <div class="endpoint-description">Get all users with their objectives and progress</div>
                <div class="response">
                    <div class="response-title">Response:</div>
                    <div class="response-description">Array of users with departments, managers, objectives, and calculated progress</div>
                </div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method post">POST</span>
                    <span class="endpoint-path">/users</span>
                </div>
                <div class="endpoint-description">Create a new user</div>
                <div class="params">
                    <div class="params-title">Request Body:</div>
                    <div class="param">
                        <span class="param-name">name</span>
                        <span class="param-type">string</span>
                        <div class="param-description">User's full name (required)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">email</span>
                        <span class="param-type">string</span>
                        <div class="param-description">User's email address (required)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">password</span>
                        <span class="param-type">string</span>
                        <div class="param-description">User's password (required)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">role</span>
                        <span class="param-type">string</span>
                        <div class="param-description">User role: ADMIN, MANAGER, or STAFF</div>
                    </div>
                    <div class="param">
                        <span class="param-name">position</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Job title/position</div>
                    </div>
                    <div class="param">
                        <span class="param-name">departmentId</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Department ID</div>
                    </div>
                    <div class="param">
                        <span class="param-name">managerId</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Manager's user ID</div>
                    </div>
                </div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method put">PUT</span>
                    <span class="endpoint-path">/users?id={userId}</span>
                </div>
                <div class="endpoint-description">Update an existing user</div>
                <div class="params">
                    <div class="params-title">Query Parameters:</div>
                    <div class="param">
                        <span class="param-name">id</span>
                        <span class="param-type">string</span>
                        <div class="param-description">User ID to update (required)</div>
                    </div>
                </div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method delete">DELETE</span>
                    <span class="endpoint-path">/users?id={userId}</span>
                </div>
                <div class="endpoint-description">Delete or deactivate a user</div>
                <div class="params">
                    <div class="params-title">Query Parameters:</div>
                    <div class="param">
                        <span class="param-name">id</span>
                        <span class="param-type">string</span>
                        <div class="param-description">User ID to delete (required)</div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Objectives Endpoints -->
        <div class="endpoint-group">
            <div class="group-header">
                <div class="group-title">🎯 Objectives</div>
                <div class="group-description">Objective management with intelligent tracking and deadline extensions</div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method get">GET</span>
                    <span class="endpoint-path">/objectives</span>
                </div>
                <div class="endpoint-description">Get all objectives with progress calculation and risk assessment</div>
                <div class="response">
                    <div class="response-title">Response:</div>
                    <div class="response-description">Array of objectives with owners, cycles, key results, calculated progress, risk levels, and missed deadline tracking</div>
                </div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method post">POST</span>
                    <span class="endpoint-path">/objectives</span>
                </div>
                <div class="endpoint-description">Create a new objective</div>
                <div class="params">
                    <div class="params-title">Request Body:</div>
                    <div class="param">
                        <span class="param-name">title</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Objective title (required)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">description</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Objective description</div>
                    </div>
                    <div class="param">
                        <span class="param-name">type</span>
                        <span class="param-type">string</span>
                        <div class="param-description">PERSONAL, TEAM, or COMPANY</div>
                    </div>
                    <div class="param">
                        <span class="param-name">ownerId</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Owner's user ID (required)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">cycleId</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Cycle ID (required)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">parentId</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Parent objective ID (optional)</div>
                    </div>
                </div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method put">PUT</span>
                    <span class="endpoint-path">/objectives?id={objectiveId}</span>
                </div>
                <div class="endpoint-description">Update an existing objective</div>
                <div class="params">
                    <div class="params-title">Query Parameters:</div>
                    <div class="param">
                        <span class="param-name">id</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Objective ID to update (required)</div>
                    </div>
                </div>
                <div class="params">
                    <div class="params-title">Request Body:</div>
                    <div class="param">
                        <span class="param-name">title</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Updated objective title</div>
                    </div>
                    <div class="param">
                        <span class="param-name">description</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Updated objective description</div>
                    </div>
                    <div class="param">
                        <span class="param-name">type</span>
                        <span class="param-type">string</span>
                        <div class="param-description">PERSONAL, TEAM, or COMPANY</div>
                    </div>
                    <div class="param">
                        <span class="param-name">status</span>
                        <span class="param-type">string</span>
                        <div class="param-description">NOT_STARTED, IN_PROGRESS, COMPLETED, AT_RISK, CANCELLED, or EXTENDED</div>
                    </div>
                    <div class="param">
                        <span class="param-name">ownerId</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Owner's user ID</div>
                    </div>
                    <div class="param">
                        <span class="param-name">cycleId</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Cycle ID</div>
                    </div>
                    <div class="param">
                        <span class="param-name">parentId</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Parent objective ID (optional)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">wasMissed</span>
                        <span class="param-type">boolean</span>
                        <div class="param-description">Whether the objective missed its original deadline</div>
                    </div>
                    <div class="param">
                        <span class="param-name">originalEndDate</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Original cycle end date (ISO 8601 format)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">extendedDeadline</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Extended deadline date (ISO 8601 format)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">missedReason</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Reason for missing the original deadline</div>
                    </div>
                    <div class="param">
                        <span class="param-name">extensionReason</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Justification for deadline extension</div>
                    </div>
                </div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method post">POST</span>
                    <span class="endpoint-path">/objectives/{objectiveId}/extend</span>
                </div>
                <div class="endpoint-description">Extend deadline for a missed objective (Manager/Admin only)</div>
                <div class="params">
                    <div class="params-title">Request Body:</div>
                    <div class="param">
                        <span class="param-name">extendedDeadline</span>
                        <span class="param-type">string</span>
                        <div class="param-description">New deadline date (ISO 8601 format, required)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">missedReason</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Reason for missing original deadline (optional)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">extensionReason</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Justification for deadline extension (required)</div>
                    </div>
                </div>
                <div class="response">
                    <div class="response-title">Response:</div>
                    <div class="response-description">Updated objective with extended deadline and audit trail. Creates notification for objective owner.</div>
                </div>
                <div class="note">
                    <div class="note-title">🔐 Permission Required</div>
                    <div class="note-text">Only users with MANAGER or ADMIN role can extend deadlines. STAFF users can view extension details but cannot grant extensions.</div>
                </div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method delete">DELETE</span>
                    <span class="endpoint-path">/objectives?id={objectiveId}</span>
                </div>
                <div class="endpoint-description">Delete an objective</div>
                <div class="params">
                    <div class="params-title">Query Parameters:</div>
                    <div class="param">
                        <span class="param-name">id</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Objective ID to delete (required)</div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Risk Management -->
        <div class="endpoint-group">
            <div class="group-header">
                <div class="group-title">⚠️ Risk Management</div>
                <div class="group-description">Advanced features for tracking missed deadlines and managing objective risks</div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method get">GET</span>
                    <span class="endpoint-path">/objectives?filter=missed</span>
                </div>
                <div class="endpoint-description">Get objectives that have missed their deadlines</div>
                <div class="response">
                    <div class="response-title">Response:</div>
                    <div class="response-description">Array of objectives with wasMissed=true, including missed reasons and extension details</div>
                </div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method get">GET</span>
                    <span class="endpoint-path">/objectives?filter=at-risk</span>
                </div>
                <div class="endpoint-description">Get objectives that are at risk of missing deadlines</div>
                <div class="response">
                    <div class="response-title">Response:</div>
                    <div class="response-description">Array of objectives with progress significantly behind schedule based on time elapsed vs. progress made</div>
                </div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method get">GET</span>
                    <span class="endpoint-path">/objectives?filter=extended</span>
                </div>
                <div class="endpoint-description">Get objectives with extended deadlines</div>
                <div class="response">
                    <div class="response-title">Response:</div>
                    <div class="response-description">Array of objectives with status=EXTENDED, including extension history and audit trail</div>
                </div>
            </div>
        </div>
        
        <!-- Timeline and Analytics Section -->
        <div class="endpoint-group">
            <div class="group-header">
                <div class="group-title">📈 Timeline & Analytics</div>
                <div class="group-description">Timeline visualization and analytics features for OKR tracking</div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method get">GET</span>
                    <span class="endpoint-path">/timeline</span>
                </div>
                <div class="endpoint-description">Get timeline view data for all cycles and objectives</div>
                <div class="response">
                    <div class="response-title">Response:</div>
                    <div class="response-description">Comprehensive timeline data with cycles, objectives, progress tracking, and achievement rates</div>
                </div>
                <div class="note">
                    <div class="note-title">🔍 Timeline Features</div>
                    <div class="note-text">
                        Timeline view includes:<br>
                        • Interactive horizontal scrolling with zoom controls (25-400%)<br>
                        • Navigation buttons (Start/Left/Right/Today/End)<br>
                        • Missed target indicators with red dots<br>
                        • At-risk objectives with orange warnings<br>
                        • Filtering by risk level and completion status<br>
                        • Summary dashboard with statistics<br>
                        • Hover details with progress gaps and risk assessments
                    </div>
                </div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method get">GET</span>
                    <span class="endpoint-path">/analytics/summary</span>
                </div>
                <div class="endpoint-description">Get analytics summary for dashboard</div>
                <div class="response">
                    <div class="response-title">Response:</div>
                    <div class="response-description">Summary statistics including total, on-track, at-risk, missed, and extended objectives</div>
                </div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method get">GET</span>
                    <span class="endpoint-path">/analytics/achievement-rates</span>
                </div>
                <div class="endpoint-description">Get achievement rates by cycle</div>
                <div class="response">
                    <div class="response-title">Response:</div>
                    <div class="response-description">Historical achievement rates with completion percentages for completed cycles vs. time-based analysis for active cycles</div>
                </div>
            </div>
        </div>
        
        <!-- Key Results Endpoints -->
        <div class="endpoint-group">
            <div class="group-header">
                <div class="group-title">📊 Key Results</div>
                <div class="group-description">Key result management and progress tracking</div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method get">GET</span>
                    <span class="endpoint-path">/key-results</span>
                </div>
                <div class="endpoint-description">Get all key results</div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method post">POST</span>
                    <span class="endpoint-path">/key-results</span>
                </div>
                <div class="endpoint-description">Create a new key result</div>
                <div class="params">
                    <div class="params-title">Request Body:</div>
                    <div class="param">
                        <span class="param-name">description</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Key result description (required)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">metricType</span>
                        <span class="param-type">string</span>
                        <div class="param-description">NUMBER, PERCENTAGE, CURRENCY, or BOOLEAN</div>
                    </div>
                    <div class="param">
                        <span class="param-name">targetValue</span>
                        <span class="param-type">number</span>
                        <div class="param-description">Target value to achieve (required)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">unit</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Unit of measurement (%, $, etc.)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">objectiveId</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Parent objective ID (required)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">ownerId</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Owner's user ID (required)</div>
                    </div>
                </div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method put">PUT</span>
                    <span class="endpoint-path">/key-results</span>
                </div>
                <div class="endpoint-description">Update an existing key result</div>
                <div class="params">
                    <div class="params-title">Request Body:</div>
                    <div class="param">
                        <span class="param-name">id</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Key result ID (required)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">description</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Updated description</div>
                    </div>
                    <div class="param">
                        <span class="param-name">targetValue</span>
                        <span class="param-type">number</span>
                        <div class="param-description">Updated target value</div>
                    </div>
                    <div class="param">
                        <span class="param-name">currentValue</span>
                        <span class="param-type">number</span>
                        <div class="param-description">Updated current value</div>
                    </div>
                    <div class="param">
                        <span class="param-name">unit</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Updated unit of measurement</div>
                    </div>
                </div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method delete">DELETE</span>
                    <span class="endpoint-path">/key-results?id={keyResultId}</span>
                </div>
                <div class="endpoint-description">Delete a key result</div>
                <div class="params">
                    <div class="params-title">Query Parameters:</div>
                    <div class="param">
                        <span class="param-name">id</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Key result ID to delete (required)</div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Progress Updates Endpoints -->
        <div class="endpoint-group">
            <div class="group-header">
                <div class="group-title">📈 Progress Updates</div>
                <div class="group-description">Progress tracking and updates</div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method get">GET</span>
                    <span class="endpoint-path">/progress-updates</span>
                </div>
                <div class="endpoint-description">Get all progress updates</div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method post">POST</span>
                    <span class="endpoint-path">/progress-updates</span>
                </div>
                <div class="endpoint-description">Create a new progress update</div>
                <div class="params">
                    <div class="params-title">Request Body:</div>
                    <div class="param">
                        <span class="param-name">value</span>
                        <span class="param-type">number</span>
                        <div class="param-description">Current progress value (required)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">notes</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Progress notes or comments</div>
                    </div>
                    <div class="param">
                        <span class="param-name">keyResultId</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Key result ID (required)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">createdById</span>
                        <span class="param-type">string</span>
                        <div class="param-description">User ID who created the update (required)</div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Notifications -->
        <div class="endpoint-group">
            <div class="group-header">
                <div class="group-title">🔔 Notifications</div>
                <div class="group-description">Smart notification system for OKR events and updates</div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method get">GET</span>
                    <span class="endpoint-path">/notifications</span>
                </div>
                <div class="endpoint-description">Get user notifications</div>
                <div class="response">
                    <div class="response-title">Response:</div>
                    <div class="response-description">Array of notifications including deadline extensions, progress requests, and system updates</div>
                </div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method put">PUT</span>
                    <span class="endpoint-path">/notifications/{notificationId}/read</span>
                </div>
                <div class="endpoint-description">Mark notification as read</div>
                <div class="params">
                    <div class="params-title">URL Parameters:</div>
                    <div class="param">
                        <span class="param-name">notificationId</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Notification ID to mark as read (required)</div>
                    </div>
                </div>
            </div>
            
            <div class="note">
                <div class="note-title">📬 Notification Types</div>
                <div class="note-text">
                    System automatically creates notifications for:<br>
                    • Deadline extensions granted by managers<br>
                    • Progress update reminders<br>
                    • New objective assignments<br>
                    • Review reminders<br>
                    • Achievement celebrations<br>
                    • Escalation alerts for missed deadlines
                </div>
            </div>
        </div>
        
        <!-- Team Endpoints -->
        <div class="endpoint-group">
            <div class="group-header">
                <div class="group-title">👥 Team OKRs</div>
                <div class="group-description">Team-based data and filtering</div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method get">GET</span>
                    <span class="endpoint-path">/team?managerId={id}</span>
                </div>
                <div class="endpoint-description">Get team members by manager</div>
                <div class="params">
                    <div class="params-title">Query Parameters:</div>
                    <div class="param">
                        <span class="param-name">managerId</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Manager's user ID</div>
                    </div>
                </div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method get">GET</span>
                    <span class="endpoint-path">/team?departmentId={id}</span>
                </div>
                <div class="endpoint-description">Get team members by department</div>
                <div class="params">
                    <div class="params-title">Query Parameters:</div>
                    <div class="param">
                        <span class="param-name">departmentId</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Department ID</div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Departments Endpoints -->
        <div class="endpoint-group">
            <div class="group-header">
                <div class="group-title">🏢 Departments</div>
                <div class="group-description">Department management and organizational structure</div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method get">GET</span>
                    <span class="endpoint-path">/departments</span>
                </div>
                <div class="endpoint-description">Get all departments with hierarchy</div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method post">POST</span>
                    <span class="endpoint-path">/departments</span>
                </div>
                <div class="endpoint-description">Create a new department</div>
                <div class="params">
                    <div class="params-title">Request Body:</div>
                    <div class="param">
                        <span class="param-name">name</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Department name (required)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">parentId</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Parent department ID (optional)</div>
                    </div>
                    <div class="param">
                        <span class="param-name">headId</span>
                        <span class="param-type">string</span>
                        <div class="param-description">Department head user ID (optional)</div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Cycles Endpoints -->
        <div class="endpoint-group">
            <div class="group-header">
                <div class="group-title">🔄 Cycles</div>
                <div class="group-description">OKR cycle management</div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method get">GET</span>
                    <span class="endpoint-path">/cycles</span>
                </div>
                <div class="endpoint-description">Get all OKR cycles</div>
                <div class="response">
                    <div class="response-title">Response:</div>
                    <div class="response-description">Array of cycles with active status, date information, and comprehensive historical data spanning Q4 2024 through Q2 2026</div>
                </div>
                <div class="note">
                    <div class="note-title">📅 Comprehensive Cycle Data</div>
                    <div class="note-text">
                        Available cycles include:<br>
                        • Q4 2024 (Completed): Foundation building and initial automation setup<br>
                        • Q1 2025 (Completed): Automation framework implementation and skill development<br>
                        • Q2 2025 (Active): Advanced automation and quality improvement<br>
                        • Q3 2025 (Planned): Scaling automation across the organization<br>
                        • Q4 2025 (Planned): Innovation and advanced tooling implementation<br>
                        • Q1 2026 (Planned): Next generation automation and AI integration<br>
                        • Q2 2026 (Planned): Global automation standards and excellence<br><br>
                        Each cycle contains fully populated objectives with comprehensive key results for realistic testing and demonstration.
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
  `

  return new NextResponse(apiDocs, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
} 
