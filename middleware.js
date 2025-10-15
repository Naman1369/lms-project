import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Get the user's token from the request
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const userRole = token?.role;

  // --- Redirect authenticated users from signin page ---
  if (token && pathname.startsWith('/signin')) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = userRole === 'admin' ? '/admin-dashboard' : '/student-dashboard';
    return NextResponse.redirect(redirectUrl);
  }

  // --- Protect dashboard routes ---
  const isAdminRoute = pathname.startsWith('/admin-dashboard');
  const isStudentRoute = pathname.startsWith('/student-dashboard');

  if (isAdminRoute || isStudentRoute) {
    // If user is not logged in, redirect to signin
    if (!token) {
      console.log(`[MIDDLEWARE] Unauthorized: No token. Redirecting from ${pathname} to /signin.`);
      const signinUrl = req.nextUrl.clone();
      signinUrl.pathname = '/signin';
      signinUrl.searchParams.set('callbackUrl', pathname); // Remembers where the user was going
      return NextResponse.redirect(signinUrl);
    }
    
    // If admin tries to access student page, redirect to admin dashboard
    if (isStudentRoute && userRole === 'admin') {
      console.log(`[MIDDLEWARE] Unauthorized: Admin role mismatch. Redirecting from ${pathname}.`);
      const adminUrl = req.nextUrl.clone();
      adminUrl.pathname = '/admin-dashboard';
      return NextResponse.redirect(adminUrl);
    }
    
    // If student tries to access admin page, redirect to student dashboard
    if (isAdminRoute && userRole === 'student') {
      console.log(`[MIDDLEWARE] Unauthorized: Student role mismatch. Redirecting from ${pathname}.`);
      const studentUrl = req.nextUrl.clone();
      studentUrl.pathname = '/student-dashboard';
      return NextResponse.redirect(studentUrl);
    }
  }

  // If all checks pass, allow the request to continue
  return NextResponse.next();
}

// Configures which routes the middleware will run on
export const config = {
  matcher: [
    '/admin-dashboard/:path*',
    '/student-dashboard/:path*',
    '/signin' // Added to prevent logged-in users from seeing the sign-in page
  ],
};