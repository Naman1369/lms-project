import { NextResponse } from 'next/server';

// This is a mock in-memory user store.
// In a real application, you would use a database.
const users = [];

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password, role } = body;

    // --- Start Validation ---
    if (!name || !email || !password || !role) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters long' }, { status: 400 });
    }

    if (!['student', 'admin'].includes(role)) {
      return NextResponse.json({ error: 'Invalid role selected' }, { status: 400 });
    }
    // --- End Validation ---

    // Check if user already exists in our mock array
    if (users.find(user => user.email === email)) {
      return NextResponse.json({ error: 'User with this email already exists' }, { status: 409 }); // 409 Conflict
    }

    // Simulate creating a new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      role,
      createdAt: new Date().toISOString(),
    };

    // "Store" the new user in our mock array
    users.push(newUser);

    // This console.log is the "database record" for this task
    console.log('✅ New User Registered:', newUser);

    return NextResponse.json(
      { message: 'User registered successfully', userId: newUser.id },
      { status: 201 }
    );

  } catch (error) {
    console.error('REGISTRATION ERROR:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}