// src/components/layout/DashboardLayout.js
import Navbar from './Navbar';
import Footer from './Footer';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 md:p-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}