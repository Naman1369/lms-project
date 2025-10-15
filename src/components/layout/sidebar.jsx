"use client";
import React from 'react';
import { signOut } from 'next-auth/react';
import toast from 'react-hot-toast';

const Sidebar = ({ role }) => {
  const handleLogout = async () => {
    const loadingToast = toast.loading('Logging out...');
    try {
      await signOut({ callbackUrl: '/signin' });
      toast.dismiss(loadingToast);
      // signOut handles the redirect, so no router.push is needed here.
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error('Logout failed. Please try again.');
    }
  };

  // The link structure remains the same, but the logout item is now a button
  const adminLinks = (
    <>
      <a href="/admin-dashboard" className="text-blue-600 hover:text-blue-800">Admin Dashboard</a>
      {/* ... other admin links ... */}
      <button onClick={handleLogout} className="text-red-500 hover:text-red-700 text-left font-semibold">Logout</button>
    </>
  );

  const studentLinks = (
    <>
      <a href="/student-dashboard" className="text-green-600 hover:text-green-800">Student Dashboard</a>
      {/* ... other student links ... */}
      <button onClick={handleLogout} className="text-red-500 hover:text-red-700 text-left font-semibold">Logout</button>
    </>
  );
  
  return (
    <aside className="w-64 bg-gray-100 h-full p-4 hidden md:block border-r">
      <nav className="flex flex-col gap-4">
        {role === 'admin' ? adminLinks : studentLinks}
      </nav>
    </aside>
  );
};

export default Sidebar;