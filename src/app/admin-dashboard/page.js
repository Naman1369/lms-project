import DashboardPage from '@/components/pages/dashboard-page';

export default function AdminDashboardPage() {
  // All session checking logic is now handled by the middleware.
  // This component's only job is to render the UI.
  return <DashboardPage />;
}