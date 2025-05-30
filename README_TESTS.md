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

- **Test Files**: 5
- **Test Cases**: 77
- **Endpoints Covered**: All documented API endpoints
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

## 🔧 Test Framework

- **Framework**: Jest
- **HTTP Mocking**: node-mocks-http
- **Database Mocking**: Prisma Client mocks
- **Authentication**: NextAuth session mocks

## 📁 Test Structure

```
__tests__/
├── api/
│   ├── health.test.js          # Health endpoint tests
│   ├── users.test.js           # User management tests
│   ├── objectives.test.js      # Objectives tests
│   ├── key-results.test.js     # Key results tests
│   └── cycles.test.js          # Cycles tests
├── jest.config.js              # Jest configuration
└── jest.setup.js               # Test environment setup
```

## 🎨 Test Features

### Comprehensive Coverage
- **All HTTP Methods**: GET, POST, PUT, DELETE
- **Authentication**: Session validation
- **Authorization**: Role-based permissions (ADMIN, MANAGER, STAFF)
- **Validation**: Input validation and error handling
- **Business Logic**: Progress calculations, status updates
- **Error Scenarios**: Not found, validation errors, database errors

### Mocking Strategy
- **Prisma Client**: Complete database operation mocking
- **NextAuth**: Session and authentication mocking
- **HTTP Requests**: Request/response mocking with node-mocks-http

### Test Data
- Realistic test scenarios
- Edge case coverage
- Consistent mock data
- Error condition testing

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
- ✅ `/api/key-results` - Key results CRUD
- ✅ `/api/cycles` - Cycles management

### Business Logic
- ✅ Progress calculations (key results → objectives)
- ✅ Status auto-updates based on progress
- ✅ Role-based authorization
- ✅ Data validation and constraints
- ✅ Cascade updates and relationships

### Error Handling
- ✅ 404 Not Found scenarios
- ✅ 401 Unauthorized access
- ✅ 400 Validation errors
- ✅ 500 Server errors
- ✅ Database constraint violations

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

All 77 tests passing ✅

```
Test Suites: 5 passed, 5 total
Tests:       77 passed, 77 total
Snapshots:   0 total
```

## 🎉 Benefits

- **Confidence**: Comprehensive coverage ensures API reliability
- **Documentation**: Tests serve as living documentation
- **Regression Prevention**: Catches breaking changes early
- **Development Speed**: Fast feedback loop for API changes
- **Quality Assurance**: Validates business logic and edge cases 