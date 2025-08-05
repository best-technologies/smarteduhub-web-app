import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const schoolName = formData.get("schoolName") as string;
    const schoolEmail = formData.get("schoolEmail") as string;
    const schoolAddress = formData.get("schoolAddress") as string;
    const schoolType = formData.get("schoolType") as string;
    const schoolOwnership = formData.get("schoolOwnership") as string;

    // Extract files
    const cacFile = formData.get("cac") as File;
    const utilityFile = formData.get("utility") as File;
    const taxIdFile = formData.get("taxId") as File;

    // Validate required fields
    if (
      !schoolName ||
      !schoolEmail ||
      !schoolAddress ||
      !schoolType ||
      !schoolOwnership
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All school information fields are required",
          statusCode: 400,
        },
        { status: 400 }
      );
    }

    // Validate required files
    if (!cacFile || !utilityFile) {
      return NextResponse.json(
        {
          success: false,
          message: "CAC document and utility bill are required",
          statusCode: 400,
        },
        { status: 400 }
      );
    }

    // Create FormData for the backend API
    const backendFormData = new FormData();
    backendFormData.append("schoolName", schoolName);
    backendFormData.append("schoolEmail", schoolEmail);
    backendFormData.append("schoolAddress", schoolAddress);
    backendFormData.append("schoolType", schoolType);
    backendFormData.append("schoolOwnership", schoolOwnership);
    backendFormData.append("cac", cacFile);
    backendFormData.append("utility", utilityFile);

    if (taxIdFile) {
      backendFormData.append("taxId", taxIdFile);
    }

    // Send to backend API
    const response = await fetch(
      "https://smart-edu-hub.onrender.com/api/v1/auth/onboard-school",
      {
        method: "POST",
        body: backendFormData,
      }
    );

    const data = await response.json();

    if (response.ok && data.statusCode === 201 && data.success === true) {
      return NextResponse.json(
        {
          success: true,
          message: "School registration successful",
          statusCode: 201,
          data: data.data,
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: data.message || "Registration failed",
          statusCode: response.status,
          error: data.error,
        },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Please try again later.",
        statusCode: 500,
      },
      { status: 500 }
    );
  }
}
