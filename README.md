# OKR Tracker - Comprehensive OKR Management System

A modern, full-featured Objectives and Key Results (OKR) management system built with Next.js, TypeScript, and Prisma. Designed for teams and organizations to track, manage, and achieve their strategic objectives.

## 🚀 Features

### Core OKR Management
- **Objectives Management**: Create, edit, and track organizational objectives
- **Key Results**: Define measurable outcomes with progress tracking
- **Progress Updates**: Real-time progress tracking with historical data
- **Cycles**: Time-based OKR periods (quarters, years)
- **Hierarchical Objectives**: Support for parent-child objective relationships

### 🎯 Missed OKR Tracking & Deadline Extension System
- **Intelligent Risk Assessment**: Automatic detection of at-risk and missed objectives
- **Target Tracking Dashboard**: Real-time statistics for total, on-track, at-risk, missed, and extended objectives
- **Smart Filtering**: Quick filters for missed targets, at-risk objectives, and extended deadlines
- **Deadline Extension Management**: Professional extension workflow with audit trails
- **Visual Risk Indicators**: Color-coded badges (🔴 Missed, 🟡 At Risk, 🟠 Extended)
- **Notification System**: Automatic notifications for deadline extensions
- **Audit Trail**: Complete tracking of who extended deadlines and when

### User Management & Authentication
- **Role-Based Access Control**: Admin, Manager, and Staff roles
- **Secure Authentication**: NextAuth.js with credential-based login
- **User Profiles**: Complete user management with departments and reporting structure
- **Department Management**: Organizational hierarchy support

### Team OKRs
- **Manager Dashboard**: Comprehensive team oversight and management
- **Individual Views**: Personal OKR tracking for team members
- **Team Analytics**: Progress tracking across teams and departments
- **Reporting Structure**: Manager-employee relationships

### Professional UI/UX
- **Modern Design**: Clean, professional interface using Tailwind CSS
- **Responsive Layout**: Works seamlessly on desktop and mobile
- **Real-time Updates**: Live progress tracking and notifications
- **Color-coded Progress**: Visual indicators for objective status
- **Professional Navigation**: Consistent navigation across all pages

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, Radix UI Components
- **Backend**: Next.js API Routes
- **Database**: SQLite (development) / PostgreSQL (production)
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Icons**: Lucide React
- **Notifications**: Built-in notification system for deadline extensions

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd okr-tracker
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:
```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# Seed the database with sample data
npx prisma db seed
```

### 5. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to access the application.

## 👥 Default Users

The system comes with pre-configured test accounts:

### QA Automation Team
- **David Burke** (Manager): `david.burke@company.com` / `password123`
- **Kevin Hughes** (Staff): `kevin.hughes@company.com` / `password123`
- **Shelley Rogan** (Staff): `shelley.rogan@company.com` / `password123`
- **Allan Pettigrew** (Staff): `allan.pettigrew@company.com` / `password123`

## 🎯 User Roles & Permissions

### Admin
- Full system access
- User management
- Department management
- Global OKR oversight
- **Deadline extension authority**

### Manager
- Team OKRs oversight
- Department-level analytics
- User creation within department
- **Deadline extension authority for team objectives**
- **Access to missed target analytics**

### Staff
- Personal OKR management
- Progress updates
- Individual analytics
- Read-only team visibility
- **View missed target indicators on own objectives**

## 📱 Application Structure

### Dashboard (`/dashboard`)
- Overview of all objectives and key results
- Real-time progress metrics
- Quick access to management functions
- Role-based content display

### Manage OKRs (`/dashboard/manage`)
- **For Managers**: Team-centric view with user filtering
- **For Staff**: Personal objectives only
- Create and edit objectives
- Add key results
- Update progress
- Advanced filtering and search

### Team OKRs (`/dashboard/team`)
- Team member overview
- Individual progress tracking
- Team analytics
- Manager dashboard functionality

### User Management (`/dashboard/users`)
- User creation and editing
- Role assignment
- Department management
- Organizational structure

## 🔧 Key Features Explained

### Role-Based Experience
The application automatically adapts based on user roles:

- **Staff users** see only their personal objectives with risk indicators
- **Managers** can view and manage their team's OKRs and extend deadlines
- **Admins** have full system access including deadline extension authority

### Progress Tracking
- Automatic progress calculation based on key results
- Color-coded indicators (Green: 80%+, Amber: 60-79%, Red: <60%)
- **Risk assessment with missed target detection**
- **At-risk objective identification**
- Historical progress updates
- Real-time dashboard metrics

### Missed OKR Management
- **Intelligent detection** of missed and at-risk objectives
- **Professional extension workflow** with proper documentation
- **Audit trail** for all deadline changes
- **Notification system** for stakeholders
- **Visual indicators** for quick status identification

### Team OKRs
- Filter objectives by team member
- Quick status filters (In Progress, At Risk, Completed, **Missed**, **Extended**)
- Team analytics and progress overview
- Individual team member cards with detailed information
- **Manager tools for deadline extension**

## 🔄 Cycles Explained

### What are Cycles?
Cycles are time-based periods that organize and structure your OKRs. Think of them as "seasons" or "quarters" for goal-setting and tracking. They provide temporal boundaries that help teams focus their efforts and measure progress within specific timeframes.

### Current Cycle: Q1 2025
Your system currently includes:
- **Name**: Q1 2025
- **Period**: January 1, 2025 - March 31, 2025
- **Focus**: First quarter automation and skill development objectives
- **Status**: Active
- **Team**: QA Automation team objectives

### How Cycles Work

#### Time Boundaries
- Each cycle has defined start and end dates
- Objectives must be assigned to a specific cycle
- Progress is tracked within the cycle timeframe
- Teams can plan and execute with clear deadlines

#### Organization Benefits
- **Focus**: Teams concentrate on specific time periods
- **Rhythm**: Creates regular planning and review cadence
- **Comparison**: Enables performance analysis across periods
- **Closure**: Provides clear start/end points for objectives
- **Planning**: Facilitates forward-looking goal setting

#### Typical Cycle Patterns
- **Quarterly**: Q1, Q2, Q3, Q4 (3 months each) - Most common
- **Semi-annual**: H1, H2 (6 months each)
- **Annual**: Yearly cycles (12 months)
- **Custom**: Project-based or event-driven cycles

### Cycle Structure
Each cycle contains:
```typescript
{
  name: string         // Display name (e.g., "Q1 2025")
  description: string  // Purpose and focus area
  startDate: Date      // When the cycle begins
  endDate: Date        // When the cycle ends
  active: boolean      // Whether this cycle is currently active
}
```

### Relationship to Objectives
- Every objective belongs to exactly one cycle
- Objectives inherit the cycle's timeframe
- Progress tracking is cycle-specific
- Historical data is preserved when cycles end

### Managing Cycles
- Access cycles through the `/api/cycles` endpoint
- View cycle information in the dashboard
- Filter objectives by cycle
- Track progress within cycle boundaries

### Best Practices
1. **Align with Business Rhythm**: Match cycles to your organization's planning calendar
2. **Consistent Duration**: Keep cycle lengths consistent for better comparison
3. **Clear Focus**: Each cycle should have a clear theme or focus area
4. **Regular Reviews**: Conduct cycle retrospectives to improve future planning
5. **Realistic Timeframes**: Ensure objectives can be meaningfully achieved within the cycle

### Example: Your Q1 2025 Cycle
The current cycle demonstrates effective cycle planning:
- **Clear Focus**: Test automation and JavaScript skill development
- **Team Alignment**: All objectives support the automation framework goal
- **Measurable Outcomes**: Specific targets for test coverage and skill development
- **Realistic Timeline**: 3-month period for meaningful progress

## 🗄 Database Schema

### Core Entities
- **Users**: Authentication and profile information
- **Departments**: Organizational structure
- **Cycles**: Time-based OKR periods
- **Objectives**: Strategic goals
- **KeyResults**: Measurable outcomes
- **ProgressUpdates**: Historical tracking data

### Relationships
- Users belong to departments and have managers
- Objectives belong to users and cycles
- Key results belong to objectives and users
- Progress updates track key result changes over time

## 🔒 Security Features

- Secure password hashing with bcrypt
- JWT-based session management
- Role-based access control
- CSRF protection
- Input validation and sanitization

## 🚀 Deployment

### Environment Variables (Production)
```env
DATABASE_URL="postgresql://username:password@host:port/database"
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://your-domain.com"
```

### Build and Deploy
```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📊 Sample Data

The system includes realistic sample data:
- QA Automation team structure
- Cypress automation objectives
- JavaScript learning key results
- Realistic progress tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check the documentation
- Review the sample data structure
- Examine the API endpoints in `/api`

## 🔄 Future Enhancements

- Email notifications
- Advanced reporting and analytics
- Integration with external tools
- Mobile application
- Advanced permission system
- Bulk operations
- Export functionality

---

Built with ❤️ for effective OKR management

## 🎯 Missed OKR Tracking & Deadline Extension System

### Overview
The system includes comprehensive functionality for tracking missed objectives and managing deadline extensions with proper governance and audit trails.

### 📊 Database Schema Enhancements

#### New Objective Fields
- **wasMissed**: Boolean flag indicating if the objective was missed
- **originalEndDate**: Stores the original cycle end date when extended
- **extendedDeadline**: New deadline when extended
- **missedReason**: Reason for missing the original deadline
- **extensionReason**: Justification for the deadline extension
- **dateExtended**: Timestamp when the extension was granted
- **extendedBy**: User ID who granted the extension
- **extendedByUser**: Relationship to the user who granted the extension

#### New Status
- **EXTENDED**: Added to the Status enum for extended objectives

### 🔧 API Endpoints

#### `/api/objectives/[id]/extend` (POST)
- Allows managers and admins to extend objective deadlines
- Validates permissions (only MANAGER and ADMIN roles)
- Updates objective with extension details
- Creates notifications for objective owners
- Records complete audit trail

### 🎨 Enhanced UI Components

#### Target Tracking & Risk Management Dashboard
- **Statistics Cards**: Real-time metrics for Total, On Track, At Risk, Missed, and Extended objectives
- **Smart Filtering**: 
  - Show Missed Targets Only
  - Show At Risk Only
  - Show Extended Only
  - Clear all filters functionality
- **Real-time Calculations**: Dynamic statistics based on current filters

#### ExtendDeadlineModal Component
- Professional modal interface for extending deadlines
- Objective summary with current progress display
- Captures missed reason (optional) and extension justification (required)
- Date picker with validation (must be future date)
- Warning notices about extension implications
- Loading states and comprehensive form validation

#### Enhanced Objective Cards
- **🔴 Missed Target Badge**: Red indicator with "Extend Deadline" button for managers
- **🟡 At Risk Badge**: Amber indicator showing percentage behind schedule
- **🟠 Extended Badge**: Orange indicator showing new deadline with details
- **Smart Button Placement**: Context-aware action buttons based on objective status

### 📈 Business Logic Features

#### Intelligent Risk Assessment Algorithm
- **Active Cycles**: Progress gap analysis
  - >10% gap from expected progress = At Risk
  - >20% gap from expected progress = Missed Target
- **Completed Cycles**: Achievement rate analysis
  - <80% achievement = Missed
  - 80-90% achievement = At Risk
- **Time Sensitivity**: Risk increases as more time elapses without progress
- **Multiple Key Results**: Aggregated achievement calculation
- **Extended Deadline Support**: Uses extended deadline when available

#### Missed Target Detection
- **Time-based Analysis**: Compares actual vs expected progress based on cycle timeline
- **Risk Levels**: LOW, MEDIUM, HIGH, CRITICAL based on progress gap
- **Completed Cycle Logic**: Different calculation for past cycles based on final achievement

### 🔐 Permission System

#### Role-based Access Control
- **STAFF**: Can view their own objectives and missed target indicators
- **MANAGER/ADMIN**: Can extend deadlines, view all objectives, manage extensions
- **Audit Trail**: All extensions logged with user ID and timestamp

### 📢 Notification System
- Automatic notifications to objective owners when deadlines are extended
- Action URLs directing users to relevant filtered views
- Real-time updates across the application

### 🎯 How the System Works

1. **Detection**: System automatically calculates missed targets based on time elapsed vs progress made
2. **Visualization**: Objectives show clear visual indicators (🔴 missed, 🟡 at risk, 🟠 extended)
3. **Action**: Managers can click "Extend Deadline" on missed objectives
4. **Documentation**: Extension modal captures both why it was missed and why extension is justified
5. **Tracking**: All extensions are recorded with full audit trail
6. **Notification**: Objective owners are automatically notified of new deadlines

### Benefits
- **Accountability**: Clear tracking of missed objectives with reasons
- **Flexibility**: Ability to adapt to changing circumstances with proper governance
- **Transparency**: Complete audit trail of all deadline changes
- **Proactive Management**: Early warning system for at-risk objectives
- **Professional Workflow**: Structured process for handling missed deadlines
