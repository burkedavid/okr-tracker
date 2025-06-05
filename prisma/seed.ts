import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.progressUpdate.deleteMany()
  await prisma.keyResult.deleteMany()
  await prisma.objective.deleteMany()
  await prisma.cycle.deleteMany()
  await prisma.user.deleteMany()
  await prisma.department.deleteMany()

  // Create departments
  const qaAutomation = await prisma.department.create({
    data: {
      name: 'QA Automation',
    },
  })

  const engineering = await prisma.department.create({
    data: {
      name: 'Engineering',
    },
  })

  // Create users
  const hashedPassword = await bcrypt.hash('password123', 10)

  // David Burke - Test Automation Manager
  const davidBurke = await prisma.user.create({
    data: {
      email: 'david.burke@company.com',
      name: 'David Burke',
      password: hashedPassword,
      role: 'MANAGER',
      position: 'Test Automation Manager',
      departmentId: qaAutomation.id,
    },
  })

  // Kevin Hughes - QA Automation Engineer 1
  const kevinHughes = await prisma.user.create({
    data: {
      email: 'kevin.hughes@company.com',
      name: 'Kevin Hughes',
      password: hashedPassword,
      role: 'STAFF',
      position: 'QA Automation Engineer 1',
      departmentId: qaAutomation.id,
      managerId: davidBurke.id,
    },
  })

  // Shelley Rogan - QA Automation Engineer 1
  const shelleyRogan = await prisma.user.create({
    data: {
      email: 'shelley.rogan@company.com',
      name: 'Shelley Rogan',
      password: hashedPassword,
      role: 'STAFF',
      position: 'QA Automation Engineer 1',
      departmentId: qaAutomation.id,
      managerId: davidBurke.id,
    },
  })

  // Allan Pettigrew - QA Automation Engineer 1
  const allanPettigrew = await prisma.user.create({
    data: {
      email: 'allan.pettigrew@company.com',
      name: 'Allan Pettigrew',
      password: hashedPassword,
      role: 'STAFF',
      position: 'QA Automation Engineer 1',
      departmentId: qaAutomation.id,
      managerId: davidBurke.id,
    },
  })

  // Create multiple cycles
  const q4_2024 = await prisma.cycle.create({
    data: {
      name: 'Q4 2024',
      description: 'Foundation building and initial automation setup',
      startDate: new Date('2024-10-01'),
      endDate: new Date('2024-12-31'),
      active: false,
    },
  })

  const q1_2025 = await prisma.cycle.create({
    data: {
      name: 'Q1 2025',
      description: 'Automation framework implementation and skill development',
      startDate: new Date('2025-01-01'),
      endDate: new Date('2025-03-31'),
      active: false,
    },
  })

  const q2_2025 = await prisma.cycle.create({
    data: {
      name: 'Q2 2025',
      description: 'Advanced automation and quality improvement',
      startDate: new Date('2025-04-01'),
      endDate: new Date('2025-06-30'),
      active: true,
    },
  })

  const q3_2025 = await prisma.cycle.create({
    data: {
      name: 'Q3 2025',
      description: 'Scaling automation across the organization',
      startDate: new Date('2025-07-01'),
      endDate: new Date('2025-09-30'),
      active: false,
    },
  })

  const q4_2025 = await prisma.cycle.create({
    data: {
      name: 'Q4 2025',
      description: 'Innovation and advanced tooling implementation',
      startDate: new Date('2025-10-01'),
      endDate: new Date('2025-12-31'),
      active: false,
    },
  })

  const q1_2026 = await prisma.cycle.create({
    data: {
      name: 'Q1 2026',
      description: 'Next generation automation and AI integration',
      startDate: new Date('2026-01-01'),
      endDate: new Date('2026-03-31'),
      active: false,
    },
  })

  const q2_2026 = await prisma.cycle.create({
    data: {
      name: 'Q2 2026',
      description: 'Global automation standards and excellence',
      startDate: new Date('2026-04-01'),
      endDate: new Date('2026-06-30'),
      active: false,
    },
  })

  // ========== Q4 2024 OBJECTIVES (COMPLETED/HISTORICAL) ==========

  // David Burke's Q4 2024 Team Leadership Objectives
  const davidQ4Leadership = await prisma.objective.create({
    data: {
      title: 'Establish Team Structure and Initial Automation Strategy',
      description: 'Build the foundation for a successful QA automation team and define our automation approach',
      type: 'TEAM',
      status: 'COMPLETED',
      ownerId: davidBurke.id,
      cycleId: q4_2024.id,
    },
  })

  const davidQ4Planning = await prisma.objective.create({
    data: {
      title: 'Create Comprehensive Automation Roadmap',
      description: 'Develop detailed plans for automation implementation across all product lines',
      type: 'PERSONAL',
      status: 'COMPLETED',
      ownerId: davidBurke.id,
      cycleId: q4_2024.id,
    },
  })

  // Kevin Hughes Q4 2024 - Foundation Building
  const kevinQ4Foundation = await prisma.objective.create({
    data: {
      title: 'Establish Solid Automation Foundation for Legacy Applications',
      description: 'Build reliable test automation for existing applications using Cypress framework',
      type: 'PERSONAL',
      status: 'COMPLETED',
      ownerId: kevinHughes.id,
      cycleId: q4_2024.id,
      parentId: davidQ4Leadership.id,
    },
  })

  // Shelley Rogan Q4 2024 - Quality Focus
  const shelleyQ4Quality = await prisma.objective.create({
    data: {
      title: 'Drive Quality Through Comprehensive Test Coverage',
      description: 'Implement proactive testing that prevents production defects and improves user experience',
      type: 'PERSONAL',
      status: 'COMPLETED',
      ownerId: shelleyRogan.id,
      cycleId: q4_2024.id,
      parentId: davidQ4Leadership.id,
    },
  })

  // Allan Pettigrew Q4 2024 - Team Efficiency
  const allanQ4Efficiency = await prisma.objective.create({
    data: {
      title: 'Enable Team Efficiency and Developer Collaboration',
      description: 'Optimize automation processes to support development teams and accelerate delivery',
      type: 'PERSONAL',
      status: 'COMPLETED',
      ownerId: allanPettigrew.id,
      cycleId: q4_2024.id,
      parentId: davidQ4Leadership.id,
    },
  })

  // ========== Q1 2025 OBJECTIVES (CURRENT/ACTIVE) ==========

  // David Burke's Q1 2025 Objectives
  const davidQ1Strategy = await prisma.objective.create({
    data: {
      title: 'Scale Automation Framework Across All Product Lines',
      description: 'Implement comprehensive test automation strategy across Open Maps, Idox Cloud Planning, and Public Protection',
      type: 'TEAM',
      status: 'COMPLETED',
      ownerId: davidBurke.id,
      cycleId: q1_2025.id,
    },
  })

  const davidQ1Development = await prisma.objective.create({
    data: {
      title: 'Build Knowledge Sharing and Learning Culture',
      description: 'Develop team expertise and share automation knowledge across the organization',
      type: 'PERSONAL',
      status: 'COMPLETED',
      ownerId: davidBurke.id,
      cycleId: q1_2025.id,
    },
  })

  // Kevin Hughes Q1 2025 - Advanced Automation
  const kevinQ1Advanced = await prisma.objective.create({
    data: {
      title: 'Enhance Customer-Centric Automation Design for Open Maps',
      description: 'Align automation efforts with customer needs and business outcomes for Open Maps application',
      type: 'PERSONAL',
      status: 'COMPLETED',
      ownerId: kevinHughes.id,
      cycleId: q1_2025.id,
      parentId: davidQ1Strategy.id,
    },
  })

  const kevinQ1Growth = await prisma.objective.create({
    data: {
      title: 'Prepare for Career Growth and Future Opportunities',
      description: 'Develop skills beyond current role and explore career advancement possibilities',
      type: 'PERSONAL',
      status: 'COMPLETED',
      ownerId: kevinHughes.id,
      cycleId: q1_2025.id,
    },
  })

  // Shelley Rogan Q1 2025 - Framework Development
  const shelleyQ1Framework = await prisma.objective.create({
    data: {
      title: 'Build Fully Automated Test Framework for Idox Cloud Planning',
      description: 'Design and implement new test automation framework for the Lille project, utilizing modern technologies',
      type: 'PERSONAL',
      status: 'COMPLETED',
      ownerId: shelleyRogan.id,
      cycleId: q1_2025.id,
      parentId: davidQ1Strategy.id,
    },
  })

  const shelleyQ1Skills = await prisma.objective.create({
    data: {
      title: 'Skill Up New Automation Team Members',
      description: 'Build a highly skilled automation team proficient in JavaScript, Cypress, and existing test frameworks',
      type: 'PERSONAL',
      status: 'COMPLETED',
      ownerId: shelleyRogan.id,
      cycleId: q1_2025.id,
      parentId: davidQ1Development.id,
    },
  })

  // Allan Pettigrew Q1 2025 - Innovation Focus
  const allanQ1Innovation = await prisma.objective.create({
    data: {
      title: 'Innovate and Simplify Automation Tools for Manual Testers',
      description: 'Develop and implement tools that simplify automation for both automation & manual testers',
      type: 'PERSONAL',
      status: 'COMPLETED',
      ownerId: allanPettigrew.id,
      cycleId: q1_2025.id,
      parentId: davidQ1Strategy.id,
    },
  })

  const allanQ1Communication = await prisma.objective.create({
    data: {
      title: 'Ensure Clear Communication and Quality in Automation Coverage',
      description: 'Establish clear communication and quality standards for automation coverage with project teams',
      type: 'PERSONAL',
      status: 'COMPLETED',
      ownerId: allanPettigrew.id,
      cycleId: q1_2025.id,
    },
  })

  // ========== Q2 2025 OBJECTIVES (PLANNED/NOT STARTED) ==========

  // David Burke Q2 2025 - Strategic Leadership
  const davidQ2Leadership = await prisma.objective.create({
    data: {
      title: 'Establish Center of Excellence for Test Automation',
      description: 'Create a center of excellence that supports automation across the entire organization',
      type: 'TEAM',
      status: 'IN_PROGRESS',
      ownerId: davidBurke.id,
      cycleId: q2_2025.id,
    },
  })

  // Kevin Hughes Q2 2025 - Mentorship
  const kevinQ2Mentorship = await prisma.objective.create({
    data: {
      title: 'Lead Automation Mentorship Program',
      description: 'Mentor new team members and lead knowledge transfer initiatives',
      type: 'PERSONAL',
      status: 'IN_PROGRESS',
      ownerId: kevinHughes.id,
      cycleId: q2_2025.id,
    },
  })

  // Shelley Rogan Q2 2025 - Advanced Framework
  const shelleyQ2Advanced = await prisma.objective.create({
    data: {
      title: 'Implement AI-Enhanced Test Automation',
      description: 'Research and implement AI-powered test generation and maintenance tools',
      type: 'PERSONAL',
      status: 'IN_PROGRESS',
      ownerId: shelleyRogan.id,
      cycleId: q2_2025.id,
    },
  })

  // Allan Pettigrew Q2 2025 - Platform Development
  const allanQ2Platform = await prisma.objective.create({
    data: {
      title: 'Develop Self-Service Automation Platform',
      description: 'Create platform that allows non-technical team members to create and maintain basic tests',
      type: 'PERSONAL',
      status: 'IN_PROGRESS',
      ownerId: allanPettigrew.id,
      cycleId: q2_2025.id,
    },
  })

  // ========== KEY RESULTS FOR Q2 2025 (IN PROGRESS) ==========

  // David Burke Q2 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Establish automation standards and best practices documentation',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 75,
      objectiveId: davidQ2Leadership.id,
      ownerId: davidBurke.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Train 5 additional teams in automation best practices',
      metricType: 'NUMBER',
      targetValue: 5,
      currentValue: 3,
      unit: ' teams',
      objectiveId: davidQ2Leadership.id,
      ownerId: davidBurke.id,
    },
  })

  // Kevin Hughes Q2 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Mentor 2 new automation engineers to proficiency',
      metricType: 'NUMBER',
      targetValue: 2,
      currentValue: 1,
      unit: ' engineers',
      objectiveId: kevinQ2Mentorship.id,
      ownerId: kevinHughes.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Create comprehensive mentorship program documentation',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 85,
      objectiveId: kevinQ2Mentorship.id,
      ownerId: kevinHughes.id,
    },
  })

  // Shelley Rogan Q2 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Research and prototype AI-powered test generation tools',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 90,
      objectiveId: shelleyQ2Advanced.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Implement AI-enhanced test maintenance for 50% of test suites',
      metricType: 'PERCENTAGE',
      targetValue: 50,
      currentValue: 25,
      objectiveId: shelleyQ2Advanced.id,
      ownerId: shelleyRogan.id,
    },
  })

  // Allan Pettigrew Q2 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Develop self-service test creation interface',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 40,
      objectiveId: allanQ2Platform.id,
      ownerId: allanPettigrew.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Train 10 non-technical team members to use the platform',
      metricType: 'NUMBER',
      targetValue: 10,
      currentValue: 3,
      unit: ' team members',
      objectiveId: allanQ2Platform.id,
      ownerId: allanPettigrew.id,
    },
  })

  // ========== PROGRESS UPDATES ==========

  // Add some realistic progress updates for current objectives
  const kevinAdvancedKR = await prisma.keyResult.findFirst({
    where: {
      objectiveId: kevinQ1Advanced.id,
      description: 'Implement customer journey testing covering 2 critical business processes'
    }
  })

  if (kevinAdvancedKR) {
    await prisma.progressUpdate.create({
      data: {
        keyResultId: kevinAdvancedKR.id,
        value: 0,
        notes: 'Starting research on customer journey mapping for Open Maps application',
        createdById: kevinHughes.id,
        createdAt: new Date('2025-01-15'),
      },
    })

    await prisma.progressUpdate.create({
      data: {
        keyResultId: kevinAdvancedKR.id,
        value: 1,
        notes: 'Completed first customer journey test for user registration flow. Working on property search workflow next.',
        createdById: kevinHughes.id,
        createdAt: new Date('2025-01-28'),
      },
    })
  }

  const shelleyFrameworkKR = await prisma.keyResult.findFirst({
    where: {
      objectiveId: shelleyQ1Framework.id,
      description: 'Begin development of test framework and initial test creation'
    }
  })

  if (shelleyFrameworkKR) {
    await prisma.progressUpdate.create({
      data: {
        keyResultId: shelleyFrameworkKR.id,
        value: 0,
        notes: 'Framework design phase completed. Starting implementation of core utilities.',
        createdById: shelleyRogan.id,
        createdAt: new Date('2025-01-10'),
      },
    })

    await prisma.progressUpdate.create({
      data: {
        keyResultId: shelleyFrameworkKR.id,
        value: 40,
        notes: 'Core framework structure implemented. Page object models created for main workflows. Starting test creation phase.',
        createdById: shelleyRogan.id,
        createdAt: new Date('2025-01-25'),
      },
    })
  }

  // ========== Q3 2025 OBJECTIVES (FUTURE PLANNING) ==========

  // David Burke Q3 2025 - Organizational Scaling
  const davidQ3Scaling = await prisma.objective.create({
    data: {
      title: 'Scale Automation Practices Organization-Wide',
      description: 'Expand automation expertise and practices to all development teams across the organization',
      type: 'TEAM',
      status: 'NOT_STARTED',
      ownerId: davidBurke.id,
      cycleId: q3_2025.id,
    },
  })

  // Kevin Hughes Q3 2025 - Leadership Development
  const kevinQ3Leadership = await prisma.objective.create({
    data: {
      title: 'Develop Technical Leadership Skills',
      description: 'Take on senior technical responsibilities and mentor junior team members',
      type: 'PERSONAL',
      status: 'NOT_STARTED',
      ownerId: kevinHughes.id,
      cycleId: q3_2025.id,
    },
  })

  // Shelley Rogan Q3 2025 - Advanced Automation
  const shelleyQ3Advanced = await prisma.objective.create({
    data: {
      title: 'Implement Cross-Platform Test Automation',
      description: 'Develop automation solutions that work across web, mobile, and API platforms',
      type: 'PERSONAL',
      status: 'NOT_STARTED',
      ownerId: shelleyRogan.id,
      cycleId: q3_2025.id,
    },
  })

  // Allan Pettigrew Q3 2025 - Innovation Lab
  const allanQ3Innovation = await prisma.objective.create({
    data: {
      title: 'Establish Automation Innovation Lab',
      description: 'Create dedicated space for experimenting with cutting-edge automation technologies',
      type: 'PERSONAL',
      status: 'NOT_STARTED',
      ownerId: allanPettigrew.id,
      cycleId: q3_2025.id,
    },
  })

  // ========== Q4 2025 OBJECTIVES (FUTURE PLANNING) ==========

  // David Burke Q4 2025 - Strategic Vision
  const davidQ4Vision = await prisma.objective.create({
    data: {
      title: 'Define 2026 Automation Strategy and Vision',
      description: 'Establish long-term automation roadmap and strategic direction for the next year',
      type: 'TEAM',
      status: 'NOT_STARTED',
      ownerId: davidBurke.id,
      cycleId: q4_2025.id,
    },
  })

  // Kevin Hughes Q4 2025 - Specialization
  const kevinQ4Specialization = await prisma.objective.create({
    data: {
      title: 'Become Subject Matter Expert in Performance Testing',
      description: 'Develop deep expertise in performance and load testing automation',
      type: 'PERSONAL',
      status: 'NOT_STARTED',
      ownerId: kevinHughes.id,
      cycleId: q4_2025.id,
    },
  })

  // Shelley Rogan Q4 2025 - Architecture
  const shelleyQ4Architecture = await prisma.objective.create({
    data: {
      title: 'Design Next-Generation Test Architecture',
      description: 'Architect scalable, maintainable test automation infrastructure for 2026',
      type: 'PERSONAL',
      status: 'NOT_STARTED',
      ownerId: shelleyRogan.id,
      cycleId: q4_2025.id,
    },
  })

  // Allan Pettigrew Q4 2025 - Automation as Code
  const allanQ4AutomationCode = await prisma.objective.create({
    data: {
      title: 'Implement Infrastructure as Code for Test Environments',
      description: 'Automate test environment provisioning and management using IaC principles',
      type: 'PERSONAL',
      status: 'NOT_STARTED',
      ownerId: allanPettigrew.id,
      cycleId: q4_2025.id,
    },
  })

  // ========== Q1 2026 OBJECTIVES (FUTURE PLANNING) ==========

  // David Burke Q1 2026 - AI Integration
  const davidQ1AI = await prisma.objective.create({
    data: {
      title: 'Integrate AI and Machine Learning into Test Automation',
      description: 'Implement AI-powered test generation, maintenance, and analysis capabilities',
      type: 'TEAM',
      status: 'NOT_STARTED',
      ownerId: davidBurke.id,
      cycleId: q1_2026.id,
    },
  })

  // Kevin Hughes Q1 2026 - Advanced Analytics
  const kevinQ1Analytics = await prisma.objective.create({
    data: {
      title: 'Develop Advanced Test Analytics Platform',
      description: 'Build comprehensive analytics and reporting platform for test automation insights',
      type: 'PERSONAL',
      status: 'NOT_STARTED',
      ownerId: kevinHughes.id,
      cycleId: q1_2026.id,
    },
  })

  // Shelley Rogan Q1 2026 - Cloud Native
  const shelleyQ1CloudNative = await prisma.objective.create({
    data: {
      title: 'Implement Cloud-Native Test Automation',
      description: 'Migrate all test automation to cloud-native, containerized architecture',
      type: 'PERSONAL',
      status: 'NOT_STARTED',
      ownerId: shelleyRogan.id,
      cycleId: q1_2026.id,
    },
  })

  // Allan Pettigrew Q1 2026 - Autonomous Testing
  const allanQ1Autonomous = await prisma.objective.create({
    data: {
      title: 'Develop Autonomous Testing Capabilities',
      description: 'Create self-healing, self-maintaining test automation systems',
      type: 'PERSONAL',
      status: 'NOT_STARTED',
      ownerId: allanPettigrew.id,
      cycleId: q1_2026.id,
    },
  })

  // ========== Q2 2026 OBJECTIVES (FUTURE PLANNING) ==========

  // David Burke Q2 2026 - Global Excellence
  const davidQ2Excellence = await prisma.objective.create({
    data: {
      title: 'Establish Global Automation Excellence Program',
      description: 'Create world-class automation practices and share expertise globally',
      type: 'TEAM',
      status: 'NOT_STARTED',
      ownerId: davidBurke.id,
      cycleId: q2_2026.id,
    },
  })

  // Kevin Hughes Q2 2026 - Innovation
  const kevinQ2Innovation = await prisma.objective.create({
    data: {
      title: 'Lead Breakthrough Innovation in Test Automation',
      description: 'Pioneer new approaches and technologies in the test automation field',
      type: 'PERSONAL',
      status: 'NOT_STARTED',
      ownerId: kevinHughes.id,
      cycleId: q2_2026.id,
    },
  })

  // Shelley Rogan Q2 2026 - Ecosystem
  const shelleyQ2Ecosystem = await prisma.objective.create({
    data: {
      title: 'Build Comprehensive Automation Ecosystem',
      description: 'Create integrated ecosystem of tools, platforms, and practices',
      type: 'PERSONAL',
      status: 'NOT_STARTED',
      ownerId: shelleyRogan.id,
      cycleId: q2_2026.id,
    },
  })

  // Allan Pettigrew Q2 2026 - Future Tech
  const allanQ2FutureTech = await prisma.objective.create({
    data: {
      title: 'Explore Emerging Technologies for Test Automation',
      description: 'Research and implement next-generation technologies like quantum computing for testing',
      type: 'PERSONAL',
      status: 'NOT_STARTED',
      ownerId: allanPettigrew.id,
      cycleId: q2_2026.id,
    },
  })

  // ========== KEY RESULTS FOR Q4 2024 (COMPLETED) ==========

  // David Burke Q4 2024 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Establish team structure and define roles',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 100,
      objectiveId: davidQ4Leadership.id,
      ownerId: davidBurke.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Create automation strategy document',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 85,
      objectiveId: davidQ4Leadership.id,
      ownerId: davidBurke.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Complete roadmap for 3 product lines',
      metricType: 'NUMBER',
      targetValue: 3,
      currentValue: 2,
      unit: ' product lines',
      objectiveId: davidQ4Planning.id,
      ownerId: davidBurke.id,
    },
  })

  // Kevin Hughes Q4 2024 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Set up Cypress framework for legacy apps',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 90,
      objectiveId: kevinQ4Foundation.id,
      ownerId: kevinHughes.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Create 15 automated test cases',
      metricType: 'NUMBER',
      targetValue: 15,
      currentValue: 12,
      unit: ' test cases',
      objectiveId: kevinQ4Foundation.id,
      ownerId: kevinHughes.id,
    },
  })

  // Shelley Rogan Q4 2024 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Achieve 80% test coverage for critical paths',
      metricType: 'PERCENTAGE',
      targetValue: 80,
      currentValue: 75,
      objectiveId: shelleyQ4Quality.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Reduce production defects by 50%',
      metricType: 'PERCENTAGE',
      targetValue: 50,
      currentValue: 35,
      objectiveId: shelleyQ4Quality.id,
      ownerId: shelleyRogan.id,
    },
  })

  // Allan Pettigrew Q4 2024 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Integrate automation with CI/CD pipeline',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 100,
      objectiveId: allanQ4Efficiency.id,
      ownerId: allanPettigrew.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Reduce test execution time by 40%',
      metricType: 'PERCENTAGE',
      targetValue: 40,
      currentValue: 25,
      objectiveId: allanQ4Efficiency.id,
      ownerId: allanPettigrew.id,
    },
  })

  // ========== KEY RESULTS FOR Q1 2025 (COMPLETED) ==========

  // David Burke Q1 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Implement automation across 3 product lines',
      metricType: 'NUMBER',
      targetValue: 3,
      currentValue: 3,
      unit: ' product lines',
      objectiveId: davidQ1Strategy.id,
      ownerId: davidBurke.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Establish knowledge sharing sessions',
      metricType: 'NUMBER',
      targetValue: 12,
      currentValue: 8,
      unit: ' sessions',
      objectiveId: davidQ1Development.id,
      ownerId: davidBurke.id,
    },
  })

  // Kevin Hughes Q1 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Implement customer journey testing covering 2 critical business processes',
      metricType: 'NUMBER',
      targetValue: 2,
      currentValue: 1,
      unit: ' processes',
      objectiveId: kevinQ1Advanced.id,
      ownerId: kevinHughes.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Complete advanced automation certification',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 100,
      objectiveId: kevinQ1Growth.id,
      ownerId: kevinHughes.id,
    },
  })

  // Shelley Rogan Q1 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Begin development of test framework and initial test creation',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 85,
      objectiveId: shelleyQ1Framework.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Train 3 team members in JavaScript and Cypress',
      metricType: 'NUMBER',
      targetValue: 3,
      currentValue: 2,
      unit: ' team members',
      objectiveId: shelleyQ1Skills.id,
      ownerId: shelleyRogan.id,
    },
  })

  // Allan Pettigrew Q1 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Develop 2 automation tools for manual testers',
      metricType: 'NUMBER',
      targetValue: 2,
      currentValue: 2,
      unit: ' tools',
      objectiveId: allanQ1Innovation.id,
      ownerId: allanPettigrew.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Establish communication standards with 5 project teams',
      metricType: 'NUMBER',
      targetValue: 5,
      currentValue: 3,
      unit: ' teams',
      objectiveId: allanQ1Communication.id,
      ownerId: allanPettigrew.id,
    },
  })

  // ========== KEY RESULTS FOR Q3 2025 (FUTURE PLANNING) ==========

  // David Burke Q3 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Establish automation centers of excellence in 4 business units',
      metricType: 'NUMBER',
      targetValue: 4,
      currentValue: 0,
      unit: ' business units',
      objectiveId: davidQ3Scaling.id,
      ownerId: davidBurke.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Train 50+ developers in automation best practices',
      metricType: 'NUMBER',
      targetValue: 50,
      currentValue: 0,
      unit: ' developers',
      objectiveId: davidQ3Scaling.id,
      ownerId: davidBurke.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Achieve 95% automation adoption across development teams',
      metricType: 'PERCENTAGE',
      targetValue: 95,
      currentValue: 0,
      objectiveId: davidQ3Scaling.id,
      ownerId: davidBurke.id,
    },
  })

  // Kevin Hughes Q3 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Complete technical leadership certification program',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 0,
      objectiveId: kevinQ3Leadership.id,
      ownerId: kevinHughes.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Lead 3 major automation initiatives',
      metricType: 'NUMBER',
      targetValue: 3,
      currentValue: 0,
      unit: ' initiatives',
      objectiveId: kevinQ3Leadership.id,
      ownerId: kevinHughes.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Mentor 4 junior engineers to independent proficiency',
      metricType: 'NUMBER',
      targetValue: 4,
      currentValue: 0,
      unit: ' engineers',
      objectiveId: kevinQ3Leadership.id,
      ownerId: kevinHughes.id,
    },
  })

  // Shelley Rogan Q3 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Implement unified automation framework supporting web, mobile, and API testing',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 0,
      objectiveId: shelleyQ3Advanced.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Achieve 90% test coverage across all platforms',
      metricType: 'PERCENTAGE',
      targetValue: 90,
      currentValue: 0,
      objectiveId: shelleyQ3Advanced.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Create automated test suites for 5 mobile applications',
      metricType: 'NUMBER',
      targetValue: 5,
      currentValue: 0,
      unit: ' mobile apps',
      objectiveId: shelleyQ3Advanced.id,
      ownerId: shelleyRogan.id,
    },
  })

  // Allan Pettigrew Q3 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Establish physical innovation lab space with modern testing tools',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 0,
      objectiveId: allanQ3Innovation.id,
      ownerId: allanPettigrew.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Research and prototype 5 emerging automation technologies',
      metricType: 'NUMBER',
      targetValue: 5,
      currentValue: 0,
      unit: ' technologies',
      objectiveId: allanQ3Innovation.id,
      ownerId: allanPettigrew.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Conduct 12 innovation workshops with development teams',
      metricType: 'NUMBER',
      targetValue: 12,
      currentValue: 0,
      unit: ' workshops',
      objectiveId: allanQ3Innovation.id,
      ownerId: allanPettigrew.id,
    },
  })

  // ========== KEY RESULTS FOR Q4 2025 (FUTURE PLANNING) ==========

  // David Burke Q4 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Complete comprehensive 2026 automation strategy document',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 0,
      objectiveId: davidQ4Vision.id,
      ownerId: davidBurke.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Define strategic roadmap for 6 product lines',
      metricType: 'NUMBER',
      targetValue: 6,
      currentValue: 0,
      unit: ' product lines',
      objectiveId: davidQ4Vision.id,
      ownerId: davidBurke.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Secure budget approval for 2026 automation initiatives',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 0,
      objectiveId: davidQ4Vision.id,
      ownerId: davidBurke.id,
    },
  })

  // Kevin Hughes Q4 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Obtain advanced performance testing certifications',
      metricType: 'NUMBER',
      targetValue: 2,
      currentValue: 0,
      unit: ' certifications',
      objectiveId: kevinQ4Specialization.id,
      ownerId: kevinHughes.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Implement performance testing for 4 critical applications',
      metricType: 'NUMBER',
      targetValue: 4,
      currentValue: 0,
      unit: ' applications',
      objectiveId: kevinQ4Specialization.id,
      ownerId: kevinHughes.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Establish performance testing standards and documentation',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 0,
      objectiveId: kevinQ4Specialization.id,
      ownerId: kevinHughes.id,
    },
  })

  // Shelley Rogan Q4 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Design scalable test architecture supporting 100+ concurrent users',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 0,
      objectiveId: shelleyQ4Architecture.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Create modular framework components for reuse across projects',
      metricType: 'NUMBER',
      targetValue: 10,
      currentValue: 0,
      unit: ' components',
      objectiveId: shelleyQ4Architecture.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Achieve 99.9% test execution reliability',
      metricType: 'PERCENTAGE',
      targetValue: 99.9,
      currentValue: 0,
      objectiveId: shelleyQ4Architecture.id,
      ownerId: shelleyRogan.id,
    },
  })

  // Allan Pettigrew Q4 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Implement Infrastructure as Code for 8 test environments',
      metricType: 'NUMBER',
      targetValue: 8,
      currentValue: 0,
      unit: ' environments',
      objectiveId: allanQ4AutomationCode.id,
      ownerId: allanPettigrew.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Reduce environment provisioning time by 80%',
      metricType: 'PERCENTAGE',
      targetValue: 80,
      currentValue: 0,
      objectiveId: allanQ4AutomationCode.id,
      ownerId: allanPettigrew.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Train 6 team members in IaC tools and practices',
      metricType: 'NUMBER',
      targetValue: 6,
      currentValue: 0,
      unit: ' team members',
      objectiveId: allanQ4AutomationCode.id,
      ownerId: allanPettigrew.id,
    },
  })

  // ========== KEY RESULTS FOR Q1 2026 (FUTURE PLANNING) ==========

  // David Burke Q1 2026 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Implement AI-powered test generation for 3 product lines',
      metricType: 'NUMBER',
      targetValue: 3,
      currentValue: 0,
      unit: ' product lines',
      objectiveId: davidQ1AI.id,
      ownerId: davidBurke.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Achieve 60% reduction in test maintenance effort through AI',
      metricType: 'PERCENTAGE',
      targetValue: 60,
      currentValue: 0,
      objectiveId: davidQ1AI.id,
      ownerId: davidBurke.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Train team in AI/ML testing technologies',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 0,
      objectiveId: davidQ1AI.id,
      ownerId: davidBurke.id,
    },
  })

  // Kevin Hughes Q1 2026 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Deploy analytics platform with real-time dashboards',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 0,
      objectiveId: kevinQ1Analytics.id,
      ownerId: kevinHughes.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Integrate analytics with 10 automation frameworks',
      metricType: 'NUMBER',
      targetValue: 10,
      currentValue: 0,
      unit: ' frameworks',
      objectiveId: kevinQ1Analytics.id,
      ownerId: kevinHughes.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Generate automated insights for 15 development teams',
      metricType: 'NUMBER',
      targetValue: 15,
      currentValue: 0,
      unit: ' teams',
      objectiveId: kevinQ1Analytics.id,
      ownerId: kevinHughes.id,
    },
  })

  // Shelley Rogan Q1 2026 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Migrate 100% of test automation to cloud-native architecture',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 0,
      objectiveId: shelleyQ1CloudNative.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Implement containerized testing for 12 applications',
      metricType: 'NUMBER',
      targetValue: 12,
      currentValue: 0,
      unit: ' applications',
      objectiveId: shelleyQ1CloudNative.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Achieve 50% cost reduction through cloud optimization',
      metricType: 'PERCENTAGE',
      targetValue: 50,
      currentValue: 0,
      objectiveId: shelleyQ1CloudNative.id,
      ownerId: shelleyRogan.id,
    },
  })

  // Allan Pettigrew Q1 2026 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Develop self-healing test automation system',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 0,
      objectiveId: allanQ1Autonomous.id,
      ownerId: allanPettigrew.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Achieve 95% automatic test recovery from failures',
      metricType: 'PERCENTAGE',
      targetValue: 95,
      currentValue: 0,
      objectiveId: allanQ1Autonomous.id,
      ownerId: allanPettigrew.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Implement autonomous testing for 6 critical workflows',
      metricType: 'NUMBER',
      targetValue: 6,
      currentValue: 0,
      unit: ' workflows',
      objectiveId: allanQ1Autonomous.id,
      ownerId: allanPettigrew.id,
    },
  })

  // ========== KEY RESULTS FOR Q2 2026 (FUTURE PLANNING) ==========

  // David Burke Q2 2026 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Establish global automation standards adopted by 5 regions',
      metricType: 'NUMBER',
      targetValue: 5,
      currentValue: 0,
      unit: ' regions',
      objectiveId: davidQ2Excellence.id,
      ownerId: davidBurke.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Achieve industry recognition through 3 major conference presentations',
      metricType: 'NUMBER',
      targetValue: 3,
      currentValue: 0,
      unit: ' presentations',
      objectiveId: davidQ2Excellence.id,
      ownerId: davidBurke.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Publish 2 white papers on automation excellence',
      metricType: 'NUMBER',
      targetValue: 2,
      currentValue: 0,
      unit: ' white papers',
      objectiveId: davidQ2Excellence.id,
      ownerId: davidBurke.id,
    },
  })

  // Kevin Hughes Q2 2026 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Patent 2 breakthrough automation technologies',
      metricType: 'NUMBER',
      targetValue: 2,
      currentValue: 0,
      unit: ' patents',
      objectiveId: kevinQ2Innovation.id,
      ownerId: kevinHughes.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Lead research collaboration with 3 universities',
      metricType: 'NUMBER',
      targetValue: 3,
      currentValue: 0,
      unit: ' universities',
      objectiveId: kevinQ2Innovation.id,
      ownerId: kevinHughes.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Prototype next-generation testing tools',
      metricType: 'NUMBER',
      targetValue: 4,
      currentValue: 0,
      unit: ' prototypes',
      objectiveId: kevinQ2Innovation.id,
      ownerId: kevinHughes.id,
    },
  })

  // Shelley Rogan Q2 2026 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Integrate 20+ automation tools into unified ecosystem',
      metricType: 'NUMBER',
      targetValue: 20,
      currentValue: 0,
      unit: ' tools',
      objectiveId: shelleyQ2Ecosystem.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Establish marketplace for automation components',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 0,
      objectiveId: shelleyQ2Ecosystem.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Achieve 500+ active users of automation ecosystem',
      metricType: 'NUMBER',
      targetValue: 500,
      currentValue: 0,
      unit: ' users',
      objectiveId: shelleyQ2Ecosystem.id,
      ownerId: shelleyRogan.id,
    },
  })

  // Allan Pettigrew Q2 2026 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Research quantum computing applications in testing',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 0,
      objectiveId: allanQ2FutureTech.id,
      ownerId: allanPettigrew.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Prototype 3 emerging technology integrations',
      metricType: 'NUMBER',
      targetValue: 3,
      currentValue: 0,
      unit: ' prototypes',
      objectiveId: allanQ2FutureTech.id,
      ownerId: allanPettigrew.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Establish partnerships with 2 technology vendors',
      metricType: 'NUMBER',
      targetValue: 2,
      currentValue: 0,
      unit: ' partnerships',
      objectiveId: allanQ2FutureTech.id,
      ownerId: allanPettigrew.id,
    },
  })

  console.log('Database seeded successfully with comprehensive QA Automation team data!')
  console.log('='.repeat(60))
  console.log('CYCLES CREATED:')
  console.log('- Q4 2024 (Completed): Foundation building and initial automation setup')
  console.log('- Q1 2025 (Completed): Automation framework implementation and skill development')
  console.log('- Q2 2025 (Active): Advanced automation and quality improvement')
  console.log('- Q3 2025 (Planned): Scaling automation across the organization')
  console.log('- Q4 2025 (Planned): Innovation and advanced tooling implementation')
  console.log('- Q1 2026 (Planned): Next generation automation and AI integration')
  console.log('- Q2 2026 (Planned): Global automation standards and excellence')
  console.log('')
  console.log('USERS CREATED:')
  console.log('- David Burke (Test Automation Manager)')
  console.log('- Kevin Hughes (QA Automation Engineer 1 - Open Maps)')
  console.log('- Shelley Rogan (QA Automation Engineer 1 - Idox Cloud Planning)')
  console.log('- Allan Pettigrew (QA Automation Engineer 1 - Idox Cloud Public Protection)')
  console.log('')
  console.log('OBJECTIVES SUMMARY:')
  console.log('- Q4 2024: 5 objectives (ALL COMPLETED)')
  console.log('- Q1 2025: 7 objectives (ALL COMPLETED)')
  console.log('- Q2 2025: 4 objectives (IN PROGRESS - ACTIVE CYCLE)')
  console.log('')
  console.log('KEY RESULTS: 50+ key results with realistic progress tracking')
  console.log('PROGRESS UPDATES: Historical tracking with comments and timestamps')
  console.log('='.repeat(60))
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 