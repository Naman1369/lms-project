"use client";

import React, { useState } from 'react';
import InputField from '../global/input-field';
import Button from '../global/button';
import Card from '../global/card'; // We can use the Card for a nice container

const LoginPage = () => {
  // State for form inputs, errors, and loading status
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Update form state on input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setError('');       // Clear previous errors
    
    // --- Basic Client-Side Validation ---
    if (!form.email || !form.password) {
      setError('Email and password are required.');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate an API call
    setTimeout(() => {
      console.log('Form Submitted:', form);
      // In a real app, you would handle the API response here.
      // For now, we just log it and reset the loading state.
      alert(`Simulating login for: ${form.email}`);
      setIsLoading(false);
    }, 1000);
  };
  
  /*
  // NOTE: For future use, here is the advanced handleSubmit from your course material
  // that connects to NextAuth. You can swap this in when you are ready to connect the backend.
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!form.email || !form.password) {
      setError('Email and password are required.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const res = await signIn("credentials", { 
        redirect: false, 
        email: form.email,
        password: form.password
      });
      
      if (res?.error) {
        setError("Invalid credentials");
      }
      
      if (res?.ok) {
        router.push('/dashboard'); // Or role-based redirect
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };
  */

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl text-black font-bold mb-6 text-center">Sign In</h2>
          
          {error && (
            <div className="mb-4 text-red-600 bg-red-100 p-3 rounded-md text-center text-sm" role="alert">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            <InputField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              disabled={isLoading}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              disabled={isLoading}
            />
          </div>
          
          <Button type="submit" disabled={isLoading} className="w-full mt-6">
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;