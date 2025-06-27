import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from './prisma'
import bcrypt from 'bcryptjs'

// Define custom types for type safety
type CustomUser = {
  id: string;
  email: string;
  name: string;
  role: string;
  department?: string;
  position?: string;
  avatar?: string;
}

type CustomToken = {
  sub?: string;
  role?: string;
  department?: string;
  position?: string;
  avatar?: string;
  [key: string]: unknown;
}

type CustomSession = {
  user: {
    id?: string;
    role?: string;
    department?: string;
    position?: string;
    avatar?: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          },
          include: {
            department: true,
            manager: true
          }
        })

        if (!user || !user.active) {
          return null
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          department: user.department?.name,
          position: user.position || undefined,
          avatar: user.avatar || undefined
        }
      }
    })
  ],
  session: {
    strategy: 'jwt' as const,
    // Default session is 30 days when 'Stay signed in' is checked, otherwise 1 day
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user, trigger, session }: { token: CustomToken; user?: CustomUser; trigger?: string; session?: unknown }) {
      if (user) {
        token.role = user.role
        token.department = user.department
        token.position = user.position
        token.avatar = user.avatar
      }
      
      // Update session when it's updated
      if (trigger === 'update' && session) {
        // You can update token based on session update if needed
        Object.assign(token, session)
      }
      return token
    },
    async session({ session, token }: { session: CustomSession; token: CustomToken }) {
      if (token && token.sub) {
        session.user.id = token.sub
        session.user.role = token.role || ''
        session.user.department = token.department || ''
        session.user.position = token.position || ''
        session.user.avatar = token.avatar || ''
      }
      return session
    }
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error'
  }
} 