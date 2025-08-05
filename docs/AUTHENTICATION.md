# Authentication Setup Documentation

## Overview

This project uses NextAuth.js (Auth.js) for authentication with industry-standard security practices.

## Features Implemented

### 1. School Registration

- **Endpoint**: `/api/auth/register`
- **Method**: POST
- **Backend API**: `https://smart-edu-hub.onrender.com/api/v1/auth/onboard-school`
- **File Upload Support**: CAC, Utility Bill, Tax ID Certificate

### 2. Authentication Flow

- Uses NextAuth.js with JWT strategy
- Credentials provider for email/password login
- Secure session management
- Role-based authentication (admin, student, teacher)

### 3. Route Protection

- Middleware-based route protection
- Role-based access control
- Automatic redirects for unauthorized access

## Environment Variables

Create a `.env.local` file with the following:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-nextauth-secret-key-here
BACKEND_API_URL=https://smart-edu-hub.onrender.com/api/v1
```

## API Routes

### Registration Route

- **Path**: `/api/auth/register`
- **Handles**: Form data and file uploads
- **Validates**: Required fields and files
- **Forwards**: Data to backend API
- **Returns**: Success/error response

### Auth Routes

- **Path**: `/api/auth/[...nextauth]`
- **Handles**: NextAuth.js authentication flow
- **Supports**: Login, logout, session management

## Components

### Success Modal

- Shows on successful registration
- Redirects to home page
- Uses the existing `SuccessModal` component

### Error Modal

- Shows on registration failure
- Allows retry without navigation
- Custom error messages based on API response

## Security Features

1. **JWT-based Sessions**: Secure, stateless authentication
2. **Role-based Access**: Different access levels for different user types
3. **Protected Routes**: Middleware prevents unauthorized access
4. **Secure File Upload**: Validates file types and sizes
5. **Error Handling**: Proper error messages without exposing sensitive data

## Usage

### Registration Process

1. User fills school information in `/create-account`
2. User uploads required documents in `/confirm-create`
3. Form data and files sent to backend via `/api/auth/register`
4. Success: Show success modal, redirect to home
5. Error: Show error modal, allow retry

### Future Login Implementation

The authentication system is set up to handle login via the credentials provider. To implement login:

1. Create login form components
2. Use NextAuth's `signIn` function
3. Handle successful login with session management
4. Redirect based on user role

## File Structure

```
/app
  /api
    /auth
      /[...nextauth]
        route.ts
      /register
        route.ts
/components
  /home
    ErrorModal.tsx
    SuccessModal.tsx
  /providers
    auth-provider.tsx
/lib
  /api
    registration.ts
  auth.ts
/types
  next-auth.d.ts
middleware.ts
```

## Testing

1. Start the development server: `pnpm dev`
2. Navigate to `/create-account`
3. Fill in school information
4. Upload required documents
5. Submit and verify API integration

## Next Steps

1. Implement login functionality
2. Add password reset flow
3. Implement email verification
4. Add two-factor authentication (optional)
5. Create user profile management
