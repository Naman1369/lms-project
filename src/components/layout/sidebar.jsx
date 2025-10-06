import React from 'react';

const Sidebar = ({ role }) => {
  let links;
  // This logic will be expanded upon later. For now, it's a structural placeholder.
  if (role === 'admin') {
    links = (
      <>
        <a href="#admin-dashboard" className="text-blue-600 hover:text-blue-800">Admin Dashboard</a>
        <a href="#edit-lessons" className="text-blue-600 hover:text-blue-800">Edit Lessons</a>
        <a href="#manage-users" className="text-blue-600 hover:text-blue-800">Manage Users</a>
      </>
    );
  } else { // Default to student role
    links = (
      <>
        <a href="#dashboard" className="text-green-600 hover:text-green-800">Dashboard</a>
        <a href="#courses" className="text-green-600 hover:text-green-800">My Courses</a>
        <a href="#grades" className="text-green-600 hover:text-green-800">Grades</a>
        <a href="#profile" className="text-green-600 hover:text-green-800">Profile</a>
      </>
    );
  }

  return (
    <aside className="w-64 bg-gray-100 h-full p-4 hidden md:block border-r">
      <nav className="flex flex-col gap-4">
        {links}
        <a href="#logout" className="text-gray-600 hover:text-gray-800 mt-auto">Logout</a>
      </nav>
    </aside>
  );
};

export default Sidebar;