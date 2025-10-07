import React from 'react';
import MainLayout from '../layout/main-layout';
import Sidebar from '../layout/sidebar';
import Navbar from '../layout/navbar';
import Card from '../global/card';

const StudentDashboardPage = () => (
  <MainLayout
    // The key change is here: we pass "student" to the role prop.
    // This tells the Sidebar to render the student-specific links.
    sidebar={<Sidebar role="student" />}
    navbar={<Navbar />}
  >
    <h1 className="text-3xl font-bold mb-6 text-black">Student Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Welcome Back!</h2>
        <p className='text-black'>Here you can find your enrolled courses, track your progress, and view your grades.</p>
      </Card>
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Continue Learning</h2>
        <p className='text-black'>Your last session was on "Introduction to Next.js".</p>
      </Card>
    </div>
  </MainLayout>
);

export default StudentDashboardPage;