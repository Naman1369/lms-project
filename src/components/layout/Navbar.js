// src/components/layout/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-teal-500">
          LMS
        </Link>
        {/* Mobile menu button (functionality to be added later) */}
        <div className="md:hidden">
          <button className="text-gray-600 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/dashboard" className="text-gray-600 hover:text-teal-500">Dashboard</Link>
          <Link href="/courses" className="text-gray-600 hover:text-teal-500">Courses</Link>
          <Link href="/profile" className="text-gray-600 hover:text-teal-500">Profile</Link>
        </div>
      </div>
    </nav>
  );
}