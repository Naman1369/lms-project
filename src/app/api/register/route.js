import { NextResponse } from 'next/server';
import connectToDatabase from '@/utils/mongodb';
import User from '@/app/models/User'; // Corrected path to your User model
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    await connectToDatabase();
    const { name, email, password, role } = await request.json();

    // --- Start Validation ---
    if (!name || !email || !password || !role) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    if (password.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters long' }, { status: 400 });
    }
    // --- End Validation ---

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User with this email already exists' }, { status: 409 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user in the database
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    console.log('✅ User registered successfully in MongoDB:', newUser.email);

    // Return a success response with the user data
    // This is the end of your 'try' block, right after 'User.create()'

    // --- REPLACE THE OLD 'return' STATEMENT WITH THIS ---

    // Determine redirect message based on user role
    const dashboardUrl = newUser.role === 'admin' ? '/admin-dashboard' : '/student-dashboard';
    const redirectMessage = `User registered successfully. Redirecting to ${dashboardUrl}`;

    return NextResponse.json(
      { 
        message: redirectMessage,
        user: {
          id: newUser._id.toString(),
          email: newUser.email,
          name: newUser.name,
          role: newUser.role
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('❌ Registration Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}