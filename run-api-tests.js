#!/usr/bin/env node

/**
 * OKR Tracker API Test Runner
 * 
 * This script demonstrates the comprehensive API test suite for the OKR Tracker application.
 * It provides an interactive way to run specific test suites and understand what each one covers.
 */

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const testSuites = {
  '1': {
    name: 'Health API Tests',
    command: 'npm run test:health',
    description: 'Tests the health check endpoint (/api/health) for basic functionality and response format'
  },
  '2': {
    name: 'Users API Tests',
    command: 'npm run test:users',
    description: 'Tests user management endpoints (CRUD operations, validation, authorization)'
  },
  '3': {
    name: 'Objectives API Tests',
    command: 'npm run test:objectives',
    description: 'Tests objectives management (CRUD, progress calculation, status updates)'
  },
  '4': {
    name: 'Key Results API Tests',
    command: 'npm run test:key-results',
    description: 'Tests key results management (CRUD, metric types, progress updates)'
  },
  '5': {
    name: 'Cycles API Tests',
    command: 'npm run test:cycles',
    description: 'Tests cycle management (CRUD, date validation, active cycle logic)'
  },
  '6': {
    name: 'All API Tests',
    command: 'npm run test:api',
    description: 'Runs all API tests together'
  },
  '7': {
    name: 'Coverage Report',
    command: 'npm run test:coverage',
    description: 'Generates a comprehensive test coverage report'
  }
};

function displayMenu() {
  console.log('\n🧪 OKR Tracker API Test Suite');
  console.log('=====================================');
  console.log('Choose a test suite to run:\n');
  
  Object.entries(testSuites).forEach(([key, suite]) => {
    console.log(`${key}. ${suite.name}`);
    console.log(`   ${suite.description}\n`);
  });
  
  console.log('0. Exit\n');
}

function runTest(choice) {
  const suite = testSuites[choice];
  if (!suite) {
    console.log('❌ Invalid choice. Please try again.');
    return;
  }
  
  console.log(`\n🚀 Running: ${suite.name}`);
  console.log(`📝 Description: ${suite.description}`);
  console.log(`⚡ Command: ${suite.command}\n`);
  console.log('─'.repeat(50));
  
  try {
    execSync(suite.command, { stdio: 'inherit' });
    console.log('\n✅ Test suite completed successfully!');
  } catch (error) {
    console.log('\n❌ Test suite failed. Check the output above for details.');
  }
}

function showTestInfo() {
  console.log('\n📊 Test Suite Information');
  console.log('==========================');
  console.log('Total Test Files: 5');
  console.log('Total Test Cases: 77');
  console.log('Coverage Areas:');
  console.log('  • API Endpoints: All documented endpoints');
  console.log('  • HTTP Methods: GET, POST, PUT, DELETE');
  console.log('  • Authentication: NextAuth session handling');
  console.log('  • Authorization: Role-based access control');
  console.log('  • Validation: Input validation and error handling');
  console.log('  • Business Logic: Progress calculations, status updates');
  console.log('  • Database: Prisma client mocking');
  console.log('  • Error Scenarios: Not found, validation errors, etc.');
  console.log('\nTest Framework: Jest with node-mocks-http');
  console.log('Mocking Strategy: Prisma Client and NextAuth mocks');
  console.log('Environment: Isolated test environment with mock data\n');
}

function promptUser() {
  rl.question('Enter your choice (0-7, or "info" for test information): ', (answer) => {
    if (answer === '0') {
      console.log('\n👋 Thanks for using the OKR Tracker API Test Suite!');
      rl.close();
      return;
    }
    
    if (answer.toLowerCase() === 'info') {
      showTestInfo();
      promptUser();
      return;
    }
    
    if (testSuites[answer]) {
      runTest(answer);
      console.log('\n' + '='.repeat(50));
      promptUser();
    } else {
      console.log('❌ Invalid choice. Please enter a number between 0-7 or "info".');
      promptUser();
    }
  });
}

// Main execution
console.log('🎯 Welcome to the OKR Tracker API Test Suite!');
console.log('This comprehensive test suite covers all API endpoints documented at http://localhost:3000/api/docs');
console.log('\nFeatures tested:');
console.log('✅ All CRUD operations');
console.log('✅ Authentication & Authorization');
console.log('✅ Data validation');
console.log('✅ Business logic');
console.log('✅ Error handling');
console.log('✅ Progress calculations');
console.log('✅ Role-based permissions');

displayMenu();
promptUser(); 