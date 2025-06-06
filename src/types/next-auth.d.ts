import { DefaultSession } from 'next-auth'

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      role: string
      department?: string
      position?: string
      avatar?: string
    }
  }

  interface User {
    id: string
    email: string
    name: string
    role: string
    department?: string
    position?: string
    avatar?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string
    department?: string
    position?: string
    avatar?: string
  }
} 