"use client";

import React from 'react';
import MainLayout from '../layout/main-layout';
import Sidebar from '../layout/sidebar';
import Navbar from '../layout/navbar';
import Card from '../global/card';

const DashboardPage = () => (
  // MainLayout acts as the primary wrapper for the entire page
  <MainLayout
    // We pass the Sidebar and Navbar components as props
    sidebar={<Sidebar role="admin" />}
    navbar={<Navbar />}
  >
    {/* The content below is passed as `children` to MainLayout */}
    <h1 className="text-3xl font-bold mb-6 text-black">Admin Dashboard</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Total Users</h2>
        <p className="text-3xl font-bold text-black">1,250</p>
      </Card>
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Courses</h2>
        <p className="text-3xl font-bold text-black">42</p>
      </Card>
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Revenue</h2>
        <p className="text-3xl font-bold text-black">$15,800</p>
      </Card>
    </div>
  </MainLayout>
);

export default DashboardPage;