import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('--- Starting to seed REAL OKR data (Static Version) ---');

  // 1. Clean the database
  console.log('Clearing existing data...');
  await prisma.progressUpdate.deleteMany();
  await prisma.keyResult.deleteMany();
  await prisma.objective.deleteMany();
  await prisma.cycle.deleteMany();
  await prisma.user.deleteMany();
  await prisma.department.deleteMany();
  console.log('Database cleared successfully.');

  // 2. Create Department
  const engineering = await prisma.department.create({
    data: { name: 'Engineering' },
  });

  // 3. Create User
  const hashedPassword = await bcrypt.hash('password123', 10);
  const davidBurke = await prisma.user.create({
    data: {
      email: 'david.burke@idoxgroup.com',
      name: 'David Burke',
      password: hashedPassword,
      role: 'MANAGER',
      position: 'Test Automation Manager',
      departmentId: engineering.id,
    },
  });

  // 4. Create a single Cycle for all OKRs
  const okrCycle = await prisma.cycle.create({
    data: {
      name: '2024 OKRs',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
    },
  });

  console.log('Seeding static OKRs for David Burke...');

  // ========== OKR 1: Public Protection ========== 
  const okr1 = await prisma.objective.create({
    data: {
      title: 'Achieve 100% test coverage for all critical v1.0 modules (old Selenium) and features by the end of Q2.',
      ownerId: davidBurke.id,
      cycleId: okrCycle.id,
    },
  });
  await prisma.keyResult.createMany({
    data: [
      { description: 'Develop automated test cases for 100% of the core modules (e.g., Accidents, Contacts, Dogs, Domestics, Food Poisonings, etc.) by Q2.', objectiveId: okr1.id, ownerId: davidBurke.id, metricType: 'PERCENTAGE', targetValue: 100 },
      { description: 'Ensure 95% of all test cases (e.g., Create, Edit, Search, LHM Options) are automated by Q2.', objectiveId: okr1.id, ownerId: davidBurke.id, metricType: 'PERCENTAGE', targetValue: 95 },
      { description: 'Identify and document any gaps in test coverage by Q2 and resolve them by Q4.', objectiveId: okr1.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
    ]
  });

  // ========== OKR 2: Emapsite ========== 
  const okr2 = await prisma.objective.create({
    data: {
      title: 'Build and implement a scalable Cypress automation framework for Emapsite and ensure test coverage for key workflows.',
      ownerId: davidBurke.id,
      cycleId: okrCycle.id,
    },
  });
  await prisma.keyResult.createMany({
    data: [
      { description: 'Complete the Cypress framework setup for Emapsite by the end of Q1.', objectiveId: okr2.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
      { description: 'Identify and document all critical user journeys and test scenarios by the start of Q2.', objectiveId: okr2.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
      { description: 'Develop and automate at least 80% of the identified test cases by the end of Q2.', objectiveId: okr2.id, ownerId: davidBurke.id, metricType: 'PERCENTAGE', targetValue: 80 },
      { description: 'Onboard Kevin Hughes to the framework, ensuring they contribute at least 50% of the targeted automated test scripts by H1', objectiveId: okr2.id, ownerId: davidBurke.id, metricType: 'PERCENTAGE', targetValue: 50 },
      { description: 'Provide ongoing support and maintenance from Q2 to Q4, ensuring new starters can efficiently contribute.', objectiveId: okr2.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
    ]
  });

  // ========== OKR 3: Establish Reliable Test Environments ========== 
  const okr3 = await prisma.objective.create({
    data: {
      title: 'Ensure stable test environments, CI pipelines, and database resets for running test suites in IDOX Cloud projects (Public Protection & Planning).',
      ownerId: davidBurke.id,
      cycleId: okrCycle.id,
    },
  });
  await prisma.keyResult.createMany({
    data: [
      { description: 'Fully set up and configure test environments for automated test execution by the end of Q2.', objectiveId: okr3.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
      { description: 'Implement continuous integration (CI) pipelines for running Cypress test suites by Q2.', objectiveId: okr3.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
      { description: 'Establish automated database reset mechanisms to ensure consistent test execution by Q2.', objectiveId: okr3.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
    ]
  });

  // ========== OKR 4: Support and Mentor EHC Automation ========== 
  const okr4 = await prisma.objective.create({
    data: {
      title: 'Successfully refactor and complete the EHC automation project while mentoring team members to ensure long-term maintainability by the end of Q2.',
      ownerId: davidBurke.id,
      cycleId: okrCycle.id,
    },
  });
  await prisma.keyResult.createMany({
    data: [
      { description: 'Refactor the automation framework to improve maintainability, reducing redundant code and enhancing reusability by Q1.', objectiveId: okr4.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
      { description: 'Mentor Alan, ensuring he contributes meaningful refactoring improvements and new test scripts by Q1.', objectiveId: okr4.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
      { description: 'Complete and validate the refactored automation suite, ensuring 90% of critical test cases are automated and stable for handover to the EHC QA Team by Q2.', objectiveId: okr4.id, ownerId: davidBurke.id, metricType: 'PERCENTAGE', targetValue: 90 },
    ]
  });

  // ========== OKR 5: Expand Test Automation Coverage for IDOX Cloud Planning ========== 
  const okr5 = await prisma.objective.create({
    data: {
      title: 'Significantly increase test automation coverage for IDOX Cloud Planning while mentoring Shelley Rogan to contribute effectively.',
      ownerId: davidBurke.id,
      cycleId: okrCycle.id,
    },
  });
  await prisma.keyResult.createMany({
    data: [
      { description: 'Increase automated test coverage by 50% by the end of H1.', objectiveId: okr5.id, ownerId: davidBurke.id, metricType: 'PERCENTAGE', targetValue: 50 },
      { description: 'Double the overall test coverage by the end of H2.', objectiveId: okr5.id, ownerId: davidBurke.id, metricType: 'NUMBER', targetValue: 2, unit: 'x' },
      { description: 'Mentor Shelley Rogan, ensuring she actively contributes to test automation and helps improve coverage throughout the year.', objectiveId: okr5.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
    ]
  });

  // ========== OKR 6: Build a Fully Automated Test Framework for the Lilie ========== 
  const okr6 = await prisma.objective.create({
    data: {
      title: 'Design and implement a new test automation framework for the Lilie project, utilising modern technologies and best practices to achieve full automation from the start.',
      ownerId: davidBurke.id,
      cycleId: okrCycle.id,
    },
  });
  await prisma.keyResult.createMany({
    data: [
      { description: 'Complete planning and define how Cypress tests integrate into the deployment pipeline by the end of Q1.', objectiveId: okr6.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
      { description: 'Begin development of the test framework and initial test creation by the end of Q2.', objectiveId: okr6.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
      { description: 'Achieve at least 75% test automation coverage for critical workflows by the end of Q3.', objectiveId: okr6.id, ownerId: davidBurke.id, metricType: 'PERCENTAGE', targetValue: 75 },
      { description: 'Ensure the framework is fully integrated into CI/CD and supports full test automation for major releases by the end of Q4.', objectiveId: okr6.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
    ]
  });

  // ========== OKR 7: Skill Up New Automation Team Members ========== 
  const okr7 = await prisma.objective.create({
    data: {
      title: 'Build a highly skilled automation team proficient in JavaScript, Cypress, and existing test frameworks.',
      ownerId: davidBurke.id,
      cycleId: okrCycle.id,
    },
  });
  await prisma.keyResult.createMany({
    data: [
      { description: 'Ensure 100% of team members complete foundational JavaScript training by the end of Q1.', objectiveId: okr7.id, ownerId: davidBurke.id, metricType: 'PERCENTAGE', targetValue: 100 },
      { description: 'Conduct hands-on Cypress training sessions, with 80% of team members completing real-world test automation tasks by the end of Q2.', objectiveId: okr7.id, ownerId: davidBurke.id, metricType: 'PERCENTAGE', targetValue: 80 },
      { description: 'Enable team members to contribute to the existing Cypress Suites', objectiveId: okr7.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
      { description: 'Develop the Established Teams channel to encourage mentorship and peer review system to reinforce learning, with monthly code reviews and knowledge-sharing sessions through Q4.', objectiveId: okr7.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
    ]
  });

  // ========== OKR 8: Innovate and Simplify Automation Tools ========== 
  const okr8 = await prisma.objective.create({
    data: {
      title: 'Develop and implement tools that simplify automation for both automation & manual testers, reducing dependency on complex coding and improving overall efficiency.',
      ownerId: davidBurke.id,
      cycleId: okrCycle.id,
    },
  });
  await prisma.keyResult.createMany({
    data: [
      { description: 'Investigate and evaluate AI solutions (e.g., AI-powered test case generators, no-code/low-code automation platforms, or AI-enhanced Cypress plugins) to abstract complex coding by Q4', objectiveId: okr8.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
      { description: 'Integrate AI tools into the CI/CD pipeline in relevant projects by the end of Q4.', objectiveId: okr8.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
    ]
  });

  // ========== OKR 9: Ensure Clear Communication and Quality ========== 
  const okr9 = await prisma.objective.create({
    data: {
      title: 'Establish clear communication and quality standards for automation coverage to avoid misunderstandings and ensure high-quality test cases.',
      ownerId: davidBurke.id,
      cycleId: okrCycle.id,
    },
  });
  await prisma.keyResult.createMany({
    data: [
      { description: 'Define and document automation coverage standards for all projects, ensuring alignment with business priorities and defect-prone areas by the end of Q1.', objectiveId: okr9.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
      { description: 'Conduct monthly reviews of automation coverage & updates with stakeholders, to show progress and address any blockers Q1-Q4.', objectiveId: okr9.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
      { description: 'Investigate and propose a high-level dashboard or reporting mechanism to track and communicate automation coverage progress across all projects by the end of Q4.', objectiveId: okr9.id, ownerId: davidBurke.id, metricType: 'BOOLEAN', targetValue: 1 },
    ]
  });

  // ========== OKR 10: Increase Automated test cover ========== 
  const okr10 = await prisma.objective.create({
    data: {
      title: 'How do we increase Automated test cover more rapidly Q2. through hiring etc Expand.',
      ownerId: davidBurke.id,
      cycleId: okrCycle.id,
    },
  });

  console.log('\n--- Seeding process completed successfully! ---');
}

main()
  .catch(async (e) => {
    console.error('An error occurred during the seeding process:');
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
