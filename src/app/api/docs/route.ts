import { NextResponse } from 'next/server'

export async function GET() {
  const apiDocs = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OKR Tracker API Documentation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f8fafc;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 3rem 2rem;
            border-radius: 12px;
            margin-bottom: 2rem;
            text-align: center;
        }
        
        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }
        
        .header p {
            font-size: 1.1rem;
            opacity: 0.9;
        }
        
        .endpoint-group {
            background: white;
            border-radius: 12px;
            margin-bottom: 2rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            overflow: hidden;
        }
        
        .group-header {
            background: #f1f5f9;
            padding: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .group-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.5rem;
        }
        
        .group-description {
            color: #64748b;
        }
        
        .endpoint {
            padding: 1.5rem;
            border-bottom: 1px solid #f1f5f9;
        }
        
        .endpoint:last-child {
            border-bottom: none;
        }
        
        .endpoint-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
        }
        
        .method {
            padding: 0.25rem 0.75rem;
            border-radius: 6px;
            font-weight: 600;
            font-size: 0.875rem;
            text-transform: uppercase;
        }
        
        .method.get { background: #dcfce7; color: #166534; }
        .method.post { background: #dbeafe; color: #1d4ed8; }
        .method.put { background: #fef3c7; color: #92400e; }
        .method.delete { background: #fee2e2; color: #dc2626; }
        
        .endpoint-path {
            font-family: 'Monaco', 'Menlo', monospace;
            font-size: 1.1rem;
            font-weight: 500;
            color: #1e293b;
        }
        
        .endpoint-description {
            color: #64748b;
            margin-bottom: 1rem;
        }
        
        .params {
            margin-top: 1rem;
        }
        
        .params-title {
            font-weight: 600;
            color: #374151;
            margin-bottom: 0.5rem;
        }
        
        .param {
            background: #f8fafc;
            padding: 0.75rem;
            border-radius: 6px;
            margin-bottom: 0.5rem;
            border-left: 3px solid #3b82f6;
        }
        
        .param-name {
            font-family: 'Monaco', 'Menlo', monospace;
            font-weight: 600;
            color: #1e293b;
        }
        
        .param-type {
            color: #7c3aed;
            font-size: 0.875rem;
            margin-left: 0.5rem;
        }
        
        .param-description {
            color: #64748b;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        }
        
        .response {
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            border-radius: 6px;
            padding: 1rem;
            margin-top: 1rem;
        }
        
        .response-title {
            font-weight: 600;
            color: #166534;
            margin-bottom: 0.5rem;
        }
        
        .response-description {
            color: #15803d;
            font-size: 0.875rem;
        }
        
        .base-url {
            background: #1e293b;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            font-family: 'Monaco', 'Menlo', monospace;
            margin-bottom: 2rem;
            text-align: center;
        }
        
        .note {
            background: #fef3c7;
            border: 1px solid #fbbf24;
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 2rem;
        }
        
        .note-title {
            font-weight: 600;
            color: #92400e;
            margin-bottom: 0.5rem;
        }
        
        .note-text {
            color: #a16207;
            font-size: 0.875rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 OKR Tracker API</h1>
            <p>Complete API documentation for the OKR Management System</p>
        </div>
        
        <div class="base-url">
            <strong>Base URL:</strong> ${process.env.NEXTAUTH_URL || 'http://localhost:3001'}/api
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
                <div class="group-description">Objective management and tracking</div>
            </div>
            
            <div class="endpoint">
                <div class="endpoint-header">
                    <span class="method get">GET</span>
                    <span class="endpoint-path">/objectives</span>
                </div>
                <div class="endpoint-description">Get all objectives with progress calculation</div>
                <div class="response">
                    <div class="response-title">Response:</div>
                    <div class="response-description">Array of objectives with owners, cycles, key results, and calculated progress</div>
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
                        <div class="param-description">NOT_STARTED, IN_PROGRESS, COMPLETED, or AT_RISK</div>
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
                    <div class="response-description">Array of cycles with active status and date information</div>
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