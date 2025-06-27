import { getServerSession } from 'next-auth/next'
import { authOptions } from './auth'
import type { Session } from 'next-auth'

// Define a type that satisfies the Next.js 15.3.3 requirements for getServerSession
type SessionWithCustomUser = Session & {
  user?: {
    id?: string;
    role?: string;
    department?: string;
    position?: string;
    avatar?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

/**
 * Helper function to get the server session with proper typing for Next.js 15.3.3
 * This avoids TypeScript errors with the authOptions configuration
 */
export async function getServerAuthSession(): Promise<SessionWithCustomUser | null> {
  // Use a more specific type assertion to avoid using 'any'
  // This maintains type safety while accommodating Next.js 15.3.3 changes
  return getServerSession(authOptions as Record<string, unknown>) as Promise<SessionWithCustomUser | null>
}
