import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import connectToDatabase from '@/utils/mongodb';
import User from '@/app/models/User';
import Providers from "@/components/Providers";
import { Toaster } from 'react-hot-toast'; // --- 1. IMPORT Toaster ---

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LMS Platform", // I've updated this to be more descriptive
  description: "A full-stack Learning Management System",
};

export default async function RootLayout({ children }) {
  try {
    await connectToDatabase();
    console.log('✅ MongoDB connection established');
    console.log('✅ User model loaded successfully:', !!User);
  } catch (error) {
    console.error('❌ Database or Model loading failed:', error.message);
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
          
          {/* --- 2. ADD THE Toaster COMPONENT HERE --- */}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}