import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, otp } = body;

    // Validate required fields
    if (!email || !otp) {
      return NextResponse.json(
        { message: "Email and OTP are required" },
        { status: 400 }
      );
    }

    // Make request to backend
    const response = await fetch(
      `${process.env.BACKEND_URL}/auth/director-verify-login-otp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { message: errorData.message || "OTP verification failed" },
        { status: response.status }
      );
    }

    const userData = await response.json();

    // Return user data for Auth.js
    return NextResponse.json({
      success: true,
      user: userData,
    });
  } catch (error) {
    console.error("Verify OTP API error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
