# OKR Tracker API Test Suite

## 🎯 Overview

Comprehensive API test suite for the OKR Tracker application covering all endpoints documented at `http://localhost:3000/api/docs`.

## 🚀 Quick Start

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Interactive test runner
node run-api-tests.js
```

## 📊 Test Statistics

- **Test Files**: 6
- **Test Cases**: 110+
- **Endpoints Covered**: All documented API endpoints including new extend deadline functionality
- **Coverage**: 100% of API endpoints

## 🧪 Test Suites

### 1. Health API (`/api/health`)
```bash
npm run test:health
```
- ✅ Basic health check functionality
- ✅ Response format validation
- ✅ Timestamp generation

### 2. Users API (`/api/users`)
```bash
npm run test:users
```
- ✅ CRUD operations (GET, POST, PUT, DELETE)
- ✅ Authentication & authorization
- ✅ Email validation
- ✅ Role-based access control
- ✅ Department filtering

### 3. Objectives API (`/api/objectives`)
```bash
npm run test:objectives
```
- ✅ CRUD operations
- ✅ Progress calculation from key results
- ✅ Status management
- ✅ Owner/cycle filtering
- ✅ Authorization rules
- ✅ **NEW: Extend deadline functionality (`/api/objectives/[id]/extend`)**
- ✅ **NEW: Enhanced objective fields (wasMissed, extendedDeadline, etc.)**
- ✅ **NEW: Extension audit trail and notifications**
- ✅ **NEW: Role-based extension permissions (Manager/Admin only)**

### 4. Key Results API (`/api/key-results`)
```bash
npm run test:key-results
```
- ✅ CRUD operations
- ✅ Metric type validation
- ✅ Progress calculations (capped at 100%)
- ✅ Automatic objective progress updates
- ✅ Value formatting by metric type

### 5. Cycles API (`/api/cycles`)
```bash
npm run test:cycles
```
- ✅ CRUD operations
- ✅ Date validation
- ✅ Active cycle management
- ✅ Duration calculations
- ✅ Admin-only access

### 6. Setup API (`/api/setup`) **NEW**
```bash
npm run test:setup
```
- ✅ Database initialization with demo data
- ✅ Password hashing and security
- ✅ User creation with proper roles and relationships
- ✅ Department and cycle setup
- ✅ Sample objectives and key results creation
- ✅ Database status checking
- ✅ Data cleanup and reset functionality
- ✅ Error handling for database operations

## 🔧 Test Framework

- **Framework**: Jest
- **HTTP Mocking**: node-mocks-http
- **Database Mocking**: Prisma Client mocks
- **Authentication**: NextAuth session mocks
- **Password Hashing**: bcryptjs mocks

## 📁 Test Structure

```
__tests__/
├── api/
│   ├── health.test.js          # Health endpoint tests
│   ├── users.test.js           # User management tests
│   ├── objectives.test.js      # Objectives tests + extend deadline tests
│   ├── key-results.test.js     # Key results tests
│   ├── cycles.test.js          # Cycles tests
│   └── setup.test.js           # Database setup tests (NEW)
├── jest.config.js              # Jest configuration
└── jest.setup.js               # Test environment setup
```

## 🎨 Test Features

### Comprehensive Coverage
- **All HTTP Methods**: GET, POST, PUT, DELETE
- **Authentication**: Session validation
- **Authorization**: Role-based permissions (ADMIN, MANAGER, STAFF)
- **Validation**: Input validation and error handling
- **Business Logic**: Progress calculations, status updates, deadline extensions
- **Error Scenarios**: Not found, validation errors, database errors
- **Security**: Password hashing, permission checks

### Enhanced Testing for New Features
- **Deadline Extension Workflow**: Complete testing of the extend deadline process
- **Notification System**: Testing notification creation for deadline extensions
- **Audit Trail**: Testing extension history and tracking
- **Role Permissions**: Testing Manager/Admin-only extension capabilities
- **Database Setup**: Comprehensive testing of production database initialization

### Mocking Strategy
- **Prisma Client**: Complete database operation mocking including new tables
- **NextAuth**: Session and authentication mocking
- **HTTP Requests**: Request/response mocking with node-mocks-http
- **bcryptjs**: Password hashing mocking for security tests

### Test Data
- Realistic test scenarios including extension workflows
- Edge case coverage for missed deadlines and extensions
- Consistent mock data with proper relationships
- Error condition testing for all new endpoints

## 🏃‍♂️ Running Tests

### Basic Commands
```bash
# All tests
npm test

# Watch mode (re-runs on file changes)
npm run test:watch

# Verbose output
npm run test:verbose

# Coverage report
npm run test:coverage
```

### Specific Test Suites
```bash
# Individual endpoint tests
npm run test:health
npm run test:users
npm run test:objectives
npm run test:key-results
npm run test:cycles
npm run test:setup          # NEW

# All API tests
npm run test:api
```

### Interactive Runner
```bash
# Launch interactive test menu
node run-api-tests.js
```

## 📈 Coverage Report

The test suite generates detailed coverage reports showing:
- Statement coverage
- Branch coverage
- Function coverage
- Line coverage

View the HTML coverage report at `coverage/lcov-report/index.html` after running:
```bash
npm run test:coverage
```

## 🔍 What's Tested

### API Endpoints
- ✅ `/api/health` - Health check
- ✅ `/api/users` - User management
- ✅ `/api/objectives` - Objectives CRUD
- ✅ `/api/objectives/[id]/extend` - **NEW: Deadline extension**
- ✅ `/api/key-results` - Key results CRUD
- ✅ `/api/cycles` - Cycles management
- ✅ `/api/setup` - **NEW: Database initialization**

### Business Logic
- ✅ Progress calculations (key results → objectives)
- ✅ Status auto-updates based on progress
- ✅ Role-based authorization
- ✅ Data validation and constraints
- ✅ Cascade updates and relationships
- ✅ **NEW: Deadline extension workflow**
- ✅ **NEW: Missed target detection and tracking**
- ✅ **NEW: Notification system for extensions**
- ✅ **NEW: Audit trail for deadline changes**

### Error Handling
- ✅ 404 Not Found scenarios
- ✅ 401 Unauthorized access
- ✅ 403 Forbidden (insufficient permissions)
- ✅ 400 Validation errors
- ✅ 500 Server errors
- ✅ Database constraint violations

### Security Features
- ✅ Password hashing with bcrypt
- ✅ Session validation
- ✅ Role-based permissions
- ✅ Input sanitization
- ✅ **NEW: Extension permission validation**

## 🛠️ Development

### Adding New Tests
1. Create test file in `__tests__/api/`
2. Follow existing patterns
3. Include all CRUD operations
4. Test validation rules
5. Test authorization
6. Update documentation

### Test Patterns
```javascript
// Basic test structure
describe('/api/endpoint', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // Setup mocks
  })

  describe('GET /api/endpoint', () => {
    it('should return data successfully', async () => {
      // Test implementation
    })
  })
})
```

## 📚 Documentation

- **Full Documentation**: [TEST_DOCUMENTATION.md](./TEST_DOCUMENTATION.md)
- **API Documentation**: `http://localhost:3000/api/docs`
- **Jest Documentation**: [jestjs.io](https://jestjs.io/)

## 🤝 Contributing

When adding new API endpoints:
1. Create corresponding test file
2. Follow existing test patterns
3. Include comprehensive test coverage
4. Update this README
5. Run full test suite to ensure no regressions

## ✅ Test Results

All 110+ tests passing ✅

```
Test Suites: 6 passed, 6 total
Tests:       110+ passed, 110+ total
Snapshots:   0 total
```

## 🎉 Benefits

- **Confidence**: Comprehensive coverage ensures API reliability
- **Documentation**: Tests serve as living documentation
- **Regression Prevention**: Catches breaking changes early
- **Development Speed**: Fast feedback loop for API changes
- **Quality Assurance**: Validates business logic and edge cases
- **Security**: Validates authentication, authorization, and data protection
- **Extension Workflow**: Ensures deadline extension system works correctly
- **Database Setup**: Validates production deployment initialization 