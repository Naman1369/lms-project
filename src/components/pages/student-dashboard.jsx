"use client";

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import MainLayout from '../layout/main-layout';
import Sidebar from '../layout/sidebar';
import Navbar from '../layout/navbar';
import Card from '../global/card';

const StudentDashboardPage = () => {
  // 1. Get the session data and status on the client
  const { data: session, status } = useSession();
  const router = useRouter();

  // 2. useEffect hook to handle redirection
  useEffect(() => {
    // Don't do anything while session is loading
    if (status === "loading") return;

    // If no session or user is not a student, redirect
    if (!session || session.user?.role !== "student") {
      router.replace("/signin");
    }
  }, [session, status, router]);

  // This log will appear in the browser's developer console (client-side)
  if (session) {
    console.log('STUDENT SESSION (Client-side):', session);
  }

  // 3. Show a loading state while session is being verified
  if (status === "loading" || !session) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  // 4. If authorized, render the full dashboard
  if (session.user?.role === "student") {
    return (
      <MainLayout sidebar={<Sidebar role="student" />} navbar={<Navbar />}>
        <h1 className="text-3xl font-bold mb-6 text-black">Student Dashboard</h1>
        <Card>
          <h2 className="text-xl text-black font-semibold mb-2">Welcome!</h2>
          <p className='text-black'>This is your student dashboard. Here you can find your enrolled courses and grades.</p>
        </Card>
      </MainLayout>
    );
  }

  // Fallback in case of role mismatch, though redirect should handle it
  return null;
};

export default StudentDashboardPage;