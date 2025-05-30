import { redirect } from 'next/navigation'

export default function HomePage() {
  // Redirect to login page when authentication is enabled
  // Change this to '/dashboard' to bypass authentication
  redirect('/auth/signin')
}
