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
      active: true,
    },
  })

  const q2_2025 = await prisma.cycle.create({
    data: {
      name: 'Q2 2025',
      description: 'Advanced automation and quality improvement',
      startDate: new Date('2025-04-01'),
      endDate: new Date('2025-06-30'),
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
      status: 'IN_PROGRESS',
      ownerId: davidBurke.id,
      cycleId: q1_2025.id,
    },
  })

  const davidQ1Development = await prisma.objective.create({
    data: {
      title: 'Build Knowledge Sharing and Learning Culture',
      description: 'Develop team expertise and share automation knowledge across the organization',
      type: 'PERSONAL',
      status: 'IN_PROGRESS',
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
      status: 'IN_PROGRESS',
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
      status: 'IN_PROGRESS',
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
      status: 'IN_PROGRESS',
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
      status: 'IN_PROGRESS',
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
      status: 'IN_PROGRESS',
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
      status: 'IN_PROGRESS',
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
      status: 'NOT_STARTED',
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
      status: 'NOT_STARTED',
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
      status: 'NOT_STARTED',
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
      status: 'NOT_STARTED',
      ownerId: allanPettigrew.id,
      cycleId: q2_2025.id,
    },
  })

  // ========== KEY RESULTS FOR Q4 2024 (COMPLETED) ==========

  // David Burke Q4 2024 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Hire and onboard 3 QA automation engineers',
      metricType: 'NUMBER',
      targetValue: 3,
      currentValue: 3,
      unit: ' engineers',
      objectiveId: davidQ4Leadership.id,
      ownerId: davidBurke.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Define automation strategy for 3 product lines',
      metricType: 'NUMBER',
      targetValue: 3,
      currentValue: 3,
      unit: ' product lines',
      objectiveId: davidQ4Planning.id,
      ownerId: davidBurke.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Establish team processes and workflows',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 100,
      objectiveId: davidQ4Leadership.id,
      ownerId: davidBurke.id,
    },
  })

  // Kevin Hughes Q4 2024 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Complete framework training within 4 weeks',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 100,
      objectiveId: kevinQ4Foundation.id,
      ownerId: kevinHughes.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Write first automated test using the framework within 6 weeks',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 100,
      objectiveId: kevinQ4Foundation.id,
      ownerId: kevinHughes.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Achieve 80% proficiency score on framework usage assessment',
      metricType: 'PERCENTAGE',
      targetValue: 80,
      currentValue: 85,
      objectiveId: kevinQ4Foundation.id,
      ownerId: kevinHughes.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Automate 20 manual test cases in first quarter',
      metricType: 'NUMBER',
      targetValue: 20,
      currentValue: 23,
      unit: ' test cases',
      objectiveId: kevinQ4Foundation.id,
      ownerId: kevinHughes.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Achieve 1–2 automated tests per week by month 3',
      metricType: 'NUMBER',
      targetValue: 8,
      currentValue: 10,
      unit: ' tests',
      objectiveId: kevinQ4Foundation.id,
      ownerId: kevinHughes.id,
    },
  })

  // Shelley Rogan Q4 2024 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Achieve 50% automated test coverage for new feature releases',
      metricType: 'PERCENTAGE',
      targetValue: 50,
      currentValue: 55,
      objectiveId: shelleyQ4Quality.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Identify and document 8 edge cases not previously covered',
      metricType: 'NUMBER',
      targetValue: 8,
      currentValue: 12,
      unit: ' edge cases',
      objectiveId: shelleyQ4Quality.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Create automated tests for 2 complex business scenarios per month',
      metricType: 'NUMBER',
      targetValue: 6,
      currentValue: 7,
      unit: ' scenarios',
      objectiveId: shelleyQ4Quality.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Execute daily smoke tests independently and review test reports weekly',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 100,
      objectiveId: shelleyQ4Quality.id,
      ownerId: shelleyRogan.id,
    },
  })

  // Allan Pettigrew Q4 2024 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Reduce code duplication across test suites by 20%',
      metricType: 'PERCENTAGE',
      targetValue: 20,
      currentValue: 25,
      objectiveId: allanQ4Efficiency.id,
      ownerId: allanPettigrew.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Achieve 85% code review approval rate',
      metricType: 'PERCENTAGE',
      targetValue: 85,
      currentValue: 90,
      objectiveId: allanQ4Efficiency.id,
      ownerId: allanPettigrew.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Follow established coding standards in 100% of submissions',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 100,
      objectiveId: allanQ4Efficiency.id,
      ownerId: allanPettigrew.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Reduce test flakiness to under 15% through proper wait strategies',
      metricType: 'PERCENTAGE',
      targetValue: 15,
      currentValue: 12,
      objectiveId: allanQ4Efficiency.id,
      ownerId: allanPettigrew.id,
    },
  })

  // ========== KEY RESULTS FOR Q1 2025 (IN PROGRESS) ==========

  // David Burke Q1 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Implement Cypress framework across 3 product lines',
      metricType: 'NUMBER',
      targetValue: 3,
      currentValue: 2,
      unit: ' product lines',
      objectiveId: davidQ1Strategy.id,
      ownerId: davidBurke.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Achieve 70% overall test automation coverage',
      metricType: 'PERCENTAGE',
      targetValue: 70,
      currentValue: 45,
      objectiveId: davidQ1Strategy.id,
      ownerId: davidBurke.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Host 1 internal knowledge-sharing session on lessons learned',
      metricType: 'NUMBER',
      targetValue: 1,
      currentValue: 0,
      unit: ' session',
      objectiveId: davidQ1Development.id,
      ownerId: davidBurke.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Complete 1 external training and share learnings with team',
      metricType: 'NUMBER',
      targetValue: 1,
      currentValue: 1,
      unit: ' training',
      objectiveId: davidQ1Development.id,
      ownerId: davidBurke.id,
    },
  })

  // Kevin Hughes Q1 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Attend 1 customer-facing meeting to understand user pain points',
      metricType: 'NUMBER',
      targetValue: 1,
      currentValue: 0,
      unit: ' meeting',
      objectiveId: kevinQ1Advanced.id,
      ownerId: kevinHughes.id,
    },
  })

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
      description: 'Collaborate with Product Owner to improve 1 test plan based on customer feedback',
      metricType: 'NUMBER',
      targetValue: 1,
      currentValue: 0,
      unit: ' test plan',
      objectiveId: kevinQ1Advanced.id,
      ownerId: kevinHughes.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Create personal development plan aligned with career goals',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 75,
      objectiveId: kevinQ1Growth.id,
      ownerId: kevinHughes.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Take on 1 stretch assignment outside core responsibilities',
      metricType: 'NUMBER',
      targetValue: 1,
      currentValue: 0,
      unit: ' assignment',
      objectiveId: kevinQ1Growth.id,
      ownerId: kevinHughes.id,
    },
  })

  // Shelley Rogan Q1 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Complete planning and define how Cypress tests integrate into deployment pipeline',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 60,
      objectiveId: shelleyQ1Framework.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Begin development of test framework and initial test creation',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 40,
      objectiveId: shelleyQ1Framework.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Achieve at least 75% test automation coverage for critical workflows',
      metricType: 'PERCENTAGE',
      targetValue: 75,
      currentValue: 30,
      objectiveId: shelleyQ1Framework.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Ensure 100% of team members complete foundational JavaScript training',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 75,
      objectiveId: shelleyQ1Skills.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Conduct hands-on Cypress training sessions with 80% completion rate',
      metricType: 'PERCENTAGE',
      targetValue: 80,
      currentValue: 60,
      objectiveId: shelleyQ1Skills.id,
      ownerId: shelleyRogan.id,
    },
  })

  // Allan Pettigrew Q1 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Investigate and evaluate AI solutions for test automation',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 70,
      objectiveId: allanQ1Innovation.id,
      ownerId: allanPettigrew.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Integrate AI tools into CI/CD pipeline in relevant projects',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 25,
      objectiveId: allanQ1Innovation.id,
      ownerId: allanPettigrew.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Define and document automation coverage standards for all projects',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 80,
      objectiveId: allanQ1Communication.id,
      ownerId: allanPettigrew.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Conduct monthly reviews of automation coverage with stakeholders',
      metricType: 'NUMBER',
      targetValue: 3,
      currentValue: 1,
      unit: ' reviews',
      objectiveId: allanQ1Communication.id,
      ownerId: allanPettigrew.id,
    },
  })

  // ========== KEY RESULTS FOR Q2 2025 (NOT STARTED) ==========

  // David Burke Q2 2025 Key Results
  await prisma.keyResult.create({
    data: {
      description: 'Establish automation standards and best practices documentation',
      metricType: 'PERCENTAGE',
      targetValue: 100,
      currentValue: 0,
      objectiveId: davidQ2Leadership.id,
      ownerId: davidBurke.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Train 5 additional teams in automation best practices',
      metricType: 'NUMBER',
      targetValue: 5,
      currentValue: 0,
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
      currentValue: 0,
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
      currentValue: 0,
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
      currentValue: 0,
      objectiveId: shelleyQ2Advanced.id,
      ownerId: shelleyRogan.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Implement AI-enhanced test maintenance for 50% of test suites',
      metricType: 'PERCENTAGE',
      targetValue: 50,
      currentValue: 0,
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
      currentValue: 0,
      objectiveId: allanQ2Platform.id,
      ownerId: allanPettigrew.id,
    },
  })

  await prisma.keyResult.create({
    data: {
      description: 'Train 10 non-technical team members to use the platform',
      metricType: 'NUMBER',
      targetValue: 10,
      currentValue: 0,
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

  console.log('Database seeded successfully with comprehensive QA Automation team data!')
  console.log('='.repeat(60))
  console.log('CYCLES CREATED:')
  console.log('- Q4 2024 (Completed): Foundation building and initial automation setup')
  console.log('- Q1 2025 (Active): Automation framework implementation and skill development')
  console.log('- Q2 2025 (Planned): Advanced automation and quality improvement')
  console.log('')
  console.log('USERS CREATED:')
  console.log('- David Burke (Test Automation Manager)')
  console.log('- Kevin Hughes (QA Automation Engineer 1 - Open Maps)')
  console.log('- Shelley Rogan (QA Automation Engineer 1 - Idox Cloud Planning)')
  console.log('- Allan Pettigrew (QA Automation Engineer 1 - Idox Cloud Public Protection)')
  console.log('')
  console.log('OBJECTIVES SUMMARY:')
  console.log('- Q4 2024: 5 objectives (ALL COMPLETED)')
  console.log('- Q1 2025: 7 objectives (IN PROGRESS)')
  console.log('- Q2 2025: 4 objectives (NOT STARTED)')
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