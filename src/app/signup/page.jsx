"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from '../../components/global/input-field';
import Button from '../../components/global/button';
import Card from '../../components/global/card';

const SignupPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        // If response is not successful, set the error message from the API
        setError(data.error || 'Registration failed. Please try again.');
      } else {
        // On success, show a message and redirect
        setSuccess('Registration successful! Redirecting to sign in...');
        setTimeout(() => {
          router.push('/signin');
        }, 2000);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please check your connection.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl text-black font-bold text-center">Create an Account</h2>
          
          {error && <div className="text-red-600 bg-red-100 p-3 rounded-md text-center text-sm">{error}</div>}
          {success && <div className="text-green-600 bg-green-100 p-3 rounded-md text-center text-sm">{success}</div>}
          
          <InputField label="Full Name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="John Doe" disabled={isLoading} />
          <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" disabled={isLoading} />
          <InputField label="Password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Min. 6 characters" disabled={isLoading} />
          
          <div>
            <label htmlFor="role" className="block text-sm text-black font-medium mb-1">I am a...</label>
            <select id="role" name="role" value={form.role} onChange={handleChange} className="w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 disabled:opacity-50" disabled={isLoading}>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </Button>
          
          <div className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button type="button" onClick={() => router.push('/signin')} className="font-semibold text-teal-600 hover:underline">
              Sign In
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignupPage;