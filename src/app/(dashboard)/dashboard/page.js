// app/dashboard/page.js
import Navbar from '@/src/components/layout/navbar';
import CourseCard from '@/src/components/global/card';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CourseCard
            title="Introduction to Next.js"
            description="Learn the fundamentals of building modern web applications with Next.js."
          />
          <CourseCard
            title="Mastering Tailwind CSS"
            description="A deep dive into utility-first styling for rapid UI development."
          />
          <CourseCard
            title="Full-Stack Web Development"
            description="Build and deploy a complete web application from scratch with Mongoose and NextAuth."
          />
        </div>
      </main>
    </div>
  );
}