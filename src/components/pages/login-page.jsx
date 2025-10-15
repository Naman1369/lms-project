"use client";
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import InputField from '../global/input-field';
import Button from '../global/button';
import Card from '../global/card';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const loadingToast = toast.loading('Signing you in...');

    try {
      const res = await signIn("credentials", { 
        redirect: false, 
        email: form.email,
        password: form.password
      });
      
      toast.dismiss(loadingToast);

      if (res?.error) {
        toast.error("Invalid credentials. Please try again.");
        return;
      }
      
      if (res?.ok) {
        toast.success('Login successful! Redirecting...');
        // We fetch the session to get the role, then redirect.
        const sessionRes = await fetch('/api/auth/session');
        const session = await sessionRes.json();
        const role = session?.user?.role;
        
        if (role === 'admin') {
          router.push('/admin-dashboard');
        } else {
          router.push('/student-dashboard');
        }
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl text-black font-bold text-center">Sign In</h2>
          <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" disabled={isLoading} />
          <InputField label="Password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="••••••••" disabled={isLoading} />
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
          <div className="text-center text-sm text-gray-600">
            Don&apos;t have an account? <button type="button" onClick={() => router.push('/signup')} className="font-semibold text-teal-600 hover:underline">Sign Up</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;