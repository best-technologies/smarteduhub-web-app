import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
      schoolId: string;
      firstName: string;
      lastName: string;
      phoneNumber: string;
      isEmailVerified: boolean;
      requiresOtp?: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    email: string;
    name: string;
    role: string;
    schoolId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    isEmailVerified: boolean;
    requiresOtp?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string;
    schoolId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    isEmailVerified: boolean;
    requiresOtp?: boolean;
    accessToken?: string;
  }
}
