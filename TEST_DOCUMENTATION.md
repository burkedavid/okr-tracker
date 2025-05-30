# OKR Tracker API Test Suite Documentation

## Overview

This document describes the comprehensive API test suite for the OKR Tracker application. The test suite covers all API endpoints documented at `http://localhost:3000/api/docs` and ensures the reliability and correctness of the backend functionality.

## Test Framework

- **Testing Framework**: Jest
- **HTTP Mocking**: node-mocks-http
- **Database Mocking**: Prisma Client mocks
- **Authentication Mocking**: NextAuth session mocks

## Test Structure

```
__tests__/
├── api/
│   ├── health.test.js          # Health check endpoint tests
│   ├── users.test.js           # User management API tests
│   ├── objectives.test.js      # Objectives API tests
│   ├── key-results.test.js     # Key Results API tests
│   └── cycles.test.js          # Cycles API tests
├── jest.config.js              # Jest configuration
└── jest.setup.js               # Test environment setup
```

## Running Tests

### All Tests
```bash
npm test
```

### Specific Test Suites
```bash
# Run all API tests
npm run test:api

# Run specific endpoint tests
npm run test:health
npm run test:users
npm run test:objectives
npm run test:key-results
npm run test:cycles
```

### Test Options
```bash
# Watch mode (re-runs tests on file changes)
npm run test:watch

# Generate coverage report
npm run test:coverage

# Verbose output
npm run test:verbose
```

## Test Coverage

### 1. Health API (`/api/health`)

**Endpoints Tested:**
- `GET /api/health`

**Test Cases:**
- ✅ Returns 200 status with health message
- ✅ Returns proper JSON structure
- ✅ Validates timestamp format

**Coverage:**
- Basic health check functionality
- Response format validation
- Timestamp generation

### 2. Users API (`/api/users`)

**Endpoints Tested:**
- `GET /api/users`
- `POST /api/users`
- `PUT /api/users/[id]`
- `DELETE /api/users/[id]`

**Test Cases:**
- ✅ Fetch all users with department and objectives info
- ✅ Filter users by department
- ✅ Authentication and authorization checks
- ✅ Create new user with validation
- ✅ Update user information
- ✅ Delete user (admin only)
- ✅ Email format validation
- ✅ Required field validation
- ✅ Role-based access control

**Coverage:**
- CRUD operations
- Data validation
- Authentication/authorization
- Error handling
- Filtering and querying

### 3. Objectives API (`/api/objectives`)

**Endpoints Tested:**
- `GET /api/objectives`
- `POST /api/objectives`
- `PUT /api/objectives/[id]`
- `DELETE /api/objectives/[id]`

**Test Cases:**
- ✅ Fetch objectives with key results and owner info
- ✅ Filter by owner and cycle
- ✅ Create new objectives
- ✅ Update objectives
- ✅ Delete objectives
- ✅ Progress calculation from key results
- ✅ Status validation and auto-updates
- ✅ Authorization checks (owner/manager/admin)
- ✅ Required field validation

**Coverage:**
- CRUD operations
- Progress calculation logic
- Status management
- Authorization rules
- Data relationships

### 4. Key Results API (`/api/key-results`)

**Endpoints Tested:**
- `GET /api/key-results`
- `POST /api/key-results`
- `PUT /api/key-results/[id]`
- `DELETE /api/key-results/[id]`

**Test Cases:**
- ✅ Fetch key results with owner and objective info
- ✅ Filter by objective and owner
- ✅ Create new key results
- ✅ Update key results and objective progress
- ✅ Delete key results
- ✅ Metric type validation
- ✅ Progress calculation (capped at 100%)
- ✅ Value formatting by metric type
- ✅ Authorization checks
- ✅ Automatic objective progress updates

**Coverage:**
- CRUD operations
- Progress calculations
- Metric type handling
- Value validation
- Cascading updates

### 5. Cycles API (`/api/cycles`)

**Endpoints Tested:**
- `GET /api/cycles`
- `POST /api/cycles`
- `PUT /api/cycles/[id]`
- `DELETE /api/cycles/[id]`

**Test Cases:**
- ✅ Fetch cycles with objective counts
- ✅ Filter active cycles
- ✅ Create new cycles
- ✅ Update cycles
- ✅ Delete cycles (with objective validation)
- ✅ Date range validation
- ✅ Active cycle management (only one active)
- ✅ Date overlap detection
- ✅ Duration calculations
- ✅ Progress calculations
- ✅ Admin-only access for management

**Coverage:**
- CRUD operations
- Date validation
- Business logic (active cycles)
- Duration calculations
- Admin authorization

## Test Features

### 1. Mocking Strategy

**Prisma Client Mocking:**
```javascript
jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    user: {
      findMany: jest.fn(),
      create: jest.fn(),
      // ... other methods
    },
    // ... other models
  })),
}))
```

**NextAuth Session Mocking:**
```javascript
jest.mock('next-auth/next', () => ({
  getServerSession: jest.fn(),
}))
```

### 2. Test Data Management

- Consistent mock data across tests
- Realistic test scenarios
- Edge case coverage
- Error condition testing

### 3. Validation Testing

**Field Validation:**
- Required fields
- Data types
- Format validation (email, dates)
- Range validation

**Business Logic Validation:**
- Progress calculations
- Status updates
- Authorization rules
- Data relationships

### 4. Error Handling

- Not found scenarios
- Validation errors
- Authorization failures
- Database errors

## Business Logic Testing

### Progress Calculation
- Key result progress capped at 100%
- Objective progress as average of key results
- Division by zero handling
- Empty key results handling

### Authorization Rules
- **ADMIN**: Full access to all operations
- **MANAGER**: Read/write access to team data
- **STAFF**: Read access + own data modification

### Data Integrity
- Cascade updates (key result → objective progress)
- Relationship validation
- Constraint enforcement

### Date Validation
- Start date before end date
- Date format validation
- Overlap detection for cycles
- Current date calculations

## Coverage Metrics

The test suite aims for comprehensive coverage of:

- **API Endpoints**: 100% of documented endpoints
- **HTTP Methods**: All supported methods (GET, POST, PUT, DELETE)
- **Status Codes**: Success and error responses
- **Business Logic**: Core OKR functionality
- **Edge Cases**: Boundary conditions and error scenarios
- **Security**: Authentication and authorization

## Best Practices

### Test Organization
- One test file per API endpoint
- Descriptive test names
- Grouped related tests with `describe` blocks
- Clear setup and teardown

### Mock Management
- Reset mocks between tests
- Consistent mock data
- Realistic scenarios
- Error condition mocking

### Assertions
- Specific expectations
- Multiple assertion types
- Error message validation
- Response structure validation

## Running Tests in CI/CD

The test suite is designed to run in automated environments:

```bash
# In CI/CD pipeline
npm ci
npm run test:coverage
```

**Environment Variables:**
- Tests use mock environment variables
- No external dependencies required
- Isolated test environment

## Troubleshooting

### Common Issues

1. **Mock not working**: Ensure mocks are defined before imports
2. **Async test failures**: Use proper async/await patterns
3. **Environment issues**: Check Jest configuration
4. **Import errors**: Verify module path mappings

### Debug Mode
```bash
# Run with verbose output
npm run test:verbose

# Run specific test with debug
npx jest __tests__/api/users.test.js --verbose
```

## Future Enhancements

### Planned Additions
- Integration tests with real database
- Performance testing
- Load testing
- End-to-end API testing
- Contract testing

### Test Data
- Faker.js for dynamic test data
- Test data factories
- Snapshot testing for complex objects

## Contributing

When adding new API endpoints:

1. Create corresponding test file
2. Follow existing test patterns
3. Include all CRUD operations
4. Test validation rules
5. Test authorization
6. Update this documentation

## Conclusion

This comprehensive test suite ensures the reliability and correctness of the OKR Tracker API. It covers all endpoints, business logic, validation rules, and authorization mechanisms, providing confidence in the application's backend functionality. 