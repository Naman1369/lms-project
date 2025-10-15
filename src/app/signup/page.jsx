"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import InputField from '../../components/global/input-field';
import Button from '../../components/global/button';
import Card from '../../components/global/card';

const SignupPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const loadingToast = toast.loading('Creating your account...');

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      toast.dismiss(loadingToast);

      if (!response.ok) {
        toast.error(data.error || 'Registration failed.');
        return;
      }

      toast.success('Registration successful! Logging you in...');

      const signInResponse = await signIn('credentials', {
        redirect: false,
        email: form.email,
        password: form.password,
      });

      if (signInResponse?.ok) {
        toast.success(`Welcome, ${form.name}!`);
        const redirectUrl = form.role === 'admin' ? '/admin-dashboard' : '/student-dashboard';
        router.push(redirectUrl);
      } else {
        toast.error('Auto-login failed. Please sign in manually.');
        router.push('/signin');
      }

    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-md">
         {/* ... Your form JSX ... */}
      </Card>
    </div>
  );
};

export default SignupPage;