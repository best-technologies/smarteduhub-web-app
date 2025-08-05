import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // Add any additional middleware logic here
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Define which routes require authentication
        const { pathname } = req.nextUrl;

        // Admin routes require authentication
        if (pathname.startsWith("/admin")) {
          return !!token && token.role === "admin";
        }

        // Student routes require authentication
        if (pathname.startsWith("/student")) {
          return !!token && token.role === "student";
        }

        // Teacher routes require authentication
        if (pathname.startsWith("/teacher")) {
          return !!token && token.role === "teacher";
        }

        // Other routes don't require authentication
        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    "/admin/:path*",
    "/student/:path*",
    "/teacher/:path*",
    "/dashboard/:path*",
  ],
};
