const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

// Use the Neon database URL
process.env.DATABASE_URL = "postgresql://neondb_owner:npg_Utq1JAxFvG6d@ep-falling-boat-abo3rex1-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require"

const prisma = new PrismaClient()

async function testAuth() {
  try {
    console.log('🔍 Testing database connection and authentication...')
    
    // Test database connection
    console.log('📡 Testing database connection...')
    const userCount = await prisma.user.count()
    console.log(`✅ Database connected. Found ${userCount} users.`)
    
    // Find the specific user
    console.log('👤 Looking for david.burke@company.com...')
    const user = await prisma.user.findUnique({
      where: {
        email: 'david.burke@company.com'
      },
      include: {
        department: true,
        manager: true
      }
    })
    
    if (!user) {
      console.log('❌ User not found!')
      return
    }
    
    console.log('✅ User found:', {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      active: user.active,
      department: user.department?.name
    })
    
    // Test password verification
    console.log('🔐 Testing password verification...')
    const isPasswordValid = await bcrypt.compare('password123', user.password)
    console.log(`Password valid: ${isPasswordValid}`)
    
    if (!isPasswordValid) {
      console.log('❌ Password verification failed!')
      console.log('Stored hash:', user.password.substring(0, 20) + '...')
      
      // Try to create a new hash and compare
      const newHash = await bcrypt.hash('password123', 10)
      console.log('New hash:', newHash.substring(0, 20) + '...')
      const newHashValid = await bcrypt.compare('password123', newHash)
      console.log('New hash valid:', newHashValid)
    } else {
      console.log('✅ Password verification successful!')
    }
    
    // List all users for debugging
    console.log('\n📋 All users in database:')
    const allUsers = await prisma.user.findMany({
      select: {
        email: true,
        name: true,
        role: true,
        active: true
      }
    })
    allUsers.forEach(u => {
      console.log(`- ${u.email} (${u.name}) - ${u.role} - Active: ${u.active}`)
    })
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  } finally {
    await prisma.$disconnect()
  }
}

testAuth() 