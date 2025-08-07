import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token;

    // Allow access to auth pages when not authenticated
    if (!token) {
      // Redirect to login if trying to access protected routes
      if (
        pathname.startsWith("/admin") ||
        pathname.startsWith("/teacher") ||
        pathname.startsWith("/student")
      ) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
      return NextResponse.next();
    }

    // If authenticated, prevent access to auth pages
    if (
      pathname.startsWith("/login") ||
      pathname.startsWith("/create-account") ||
      pathname.startsWith("/forgot-password") ||
      pathname.startsWith("/verify-otp")
    ) {
      // Redirect based on role
      if (token.role === "school_director") {
        return NextResponse.redirect(new URL("/admin/dashboard", req.url));
      } else if (token.role === "teacher") {
        return NextResponse.redirect(new URL("/teacher/dashboard", req.url));
      } else if (token.role === "student") {
        return NextResponse.redirect(new URL("/student/home", req.url));
      }
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Role-based route protection
    if (pathname.startsWith("/admin") && token.role !== "school_director") {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (pathname.startsWith("/teacher") && token.role !== "teacher") {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (pathname.startsWith("/student") && token.role !== "student") {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Disable authentication in development
        if (process.env.NODE_ENV === "development") {
          return true;
        }

        const { pathname } = req.nextUrl;

        // Allow public pages
        if (
          pathname === "/" ||
          pathname.startsWith("/api/auth") ||
          pathname.startsWith("/_next") ||
          pathname.startsWith("/favicon.ico")
        ) {
          return true;
        }

        // Allow auth pages when not authenticated
        if (
          !token &&
          (pathname.startsWith("/login") ||
            pathname.startsWith("/create-account") ||
            pathname.startsWith("/forgot-password") ||
            pathname.startsWith("/verify-otp"))
        ) {
          return true;
        }

        // Require authentication for protected routes
        if (
          pathname.startsWith("/admin") ||
          pathname.startsWith("/teacher") ||
          pathname.startsWith("/student")
        ) {
          return !!token;
        }

        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
