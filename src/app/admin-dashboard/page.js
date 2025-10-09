import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route'; // Import authOptions
import DashboardPage from '@/components/pages/dashboard-page';

export default async function AdminDashboardPage() {
  // 1. Fetch the session data on the server
  const session = await getServerSession(authOptions);

  // 2. Check if the user is authenticated and has the 'admin' role
  if (!session || session.user?.role !== 'admin') {
    // 3. Redirect to the sign-in page if not authorized
    redirect('/signin');
  }

  // This log will appear in your VS Code terminal (server-side)
  console.log('ADMIN SESSION (Server-side):', session);

  // 4. If authorized, render the page
  return <DashboardPage />;
}