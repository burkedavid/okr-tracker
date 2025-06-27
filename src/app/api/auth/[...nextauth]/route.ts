import NextAuth from 'next-auth/next'
import { authOptions } from '../../../../lib/auth'

// Use the NextAuth handler with the auth options
const handler = NextAuth(authOptions)

// Export the handler functions for Next.js API routes
export { handler as GET, handler as POST }