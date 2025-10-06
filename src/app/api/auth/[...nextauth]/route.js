// app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
// import User from '@/models/User'; // I will create this model later
// import { connectToDB } from '@/utils/database'; // I will create this utility later
// import bcrypt from 'bcryptjs';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is where i'll add my user authentication logic.
        // For now, I'll return a mock user to show it's configured.
        // In the future, I will connect to MongoDB, find the user, and verify the password.

        if (credentials.email === "admin@example.com" && credentials.password === "password") {
          return { id: "1", name: "Admin User", email: "admin@example.com" };
        } else {
          return null; // Authentication failed
        }
      }
    })
  ],
  pages: {
    signIn: '/login', // Direct users to my custom login page
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };