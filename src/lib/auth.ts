import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from './prisma'
import bcrypt from 'bcryptjs'

// We don't directly reference these types but need them for module augmentation
// Silence ESLint with disable comments
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Session } from 'next-auth'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { JWT } from 'next-auth/jwt'

// Extend the built-in session types
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role: string;
      department?: string;
      position?: string;
      avatar?: string;
    }
  }
}

// Extend JWT type
declare module 'next-auth/jwt' {
  interface JWT {
    sub?: string;
    role: string;
    department?: string;
    position?: string;
    avatar?: string;
  }
}

// Define auth options compatible with Next.js 15.3.3
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
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    // @ts-expect-error - Known issue: the type definitions for NextAuth jwt callback are incompatible with Next.js 15.3.3
    async jwt({ token, user }) {
      if (user) {
        // When user is defined, it has our custom properties from the authorize callback
        // Cast the user properties to avoid type errors
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const role = (user as any).role;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const department = (user as any).department;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const position = (user as any).position;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const avatar = (user as any).avatar;
        
        // Add them to the token
        token.role = role;
        token.department = department;
        token.position = position;
        token.avatar = avatar;
      }
      return token;
    },
    // This callback is called whenever a session is checked
    // @ts-expect-error - Known issue: the type definitions for NextAuth session callback are incompatible with Next.js 15.3.3
    async session(params) {
      const { session, token } = params;
      
      if (session.user && token.sub) {
        // Add properties from token to session
        session.user.id = token.sub;
        session.user.role = token.role as string || '';
        session.user.department = token.department as string;
        session.user.position = token.position as string;
        session.user.avatar = token.avatar as string;
      }
      return session;
    }
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error'
  }
} 