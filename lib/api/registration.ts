interface SchoolFormData {
  schoolName: string;
  schoolEmail: string;
  schoolAddress: string;
  schoolType: string;
  schoolOwnership: string;
}

interface DocumentData {
  cac: File | null;
  utility: File | null;
  taxId: File | null;
}

interface RegistrationResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data?: any;
  error?: any;
}

export async function registerSchool(
  schoolData: SchoolFormData,
  documentData: DocumentData
): Promise<RegistrationResponse> {
  try {
    const formData = new FormData();

    // Append school data
    formData.append("schoolName", schoolData.schoolName);
    formData.append("schoolEmail", schoolData.schoolEmail);
    formData.append("schoolAddress", schoolData.schoolAddress);
    formData.append("schoolType", schoolData.schoolType);
    formData.append("schoolOwnership", schoolData.schoolOwnership);

    // Append files
    if (documentData.cac) {
      formData.append("cac", documentData.cac);
    }
    if (documentData.utility) {
      formData.append("utility", documentData.utility);
    }
    if (documentData.taxId) {
      formData.append("taxId", documentData.taxId);
    }

    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    return {
      success: data.success,
      statusCode: data.statusCode,
      message: data.message,
      data: data.data,
      error: data.error,
    };
  } catch (error) {
    console.error("Registration API error:", error);
    return {
      success: false,
      statusCode: 500,
      message: "Network error. Please check your connection and try again.",
      error: error,
    };
  }
}
