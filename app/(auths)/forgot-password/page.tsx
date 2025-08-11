"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconHeading } from "@/components/IconHeading";
import { AuthErrorModal } from "@/components/AuthErrorModal";
import { PasswordResetSuccessModal } from "@/components/PasswordResetSuccessModal";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isFormValid = () => {
    return email.trim() !== "" && email.includes("@");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_BACKEND_URL || process.env.BACKEND_URL
        }/auth/request-password-reset-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        // Store email for password reset flow
        sessionStorage.setItem("passwordResetEmail", email.trim());
        setShowSuccessModal(true);
      } else {
        // Handle different error cases
        if (response.status === 404) {
          setErrorMessage(
            "No account found with this email address. Please check your email and try again."
          );
        } else {
          setErrorMessage(
            data.message || "Failed to send reset OTP. Please try again."
          );
        }
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error("Request password reset OTP error:", error);
      setErrorMessage(
        "Unable to connect to the server. Please check your internet connection and try again."
      );
      setShowErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuccessModalContinue = () => {
    setShowSuccessModal(false);
    router.push("/verify-otp");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-sm p-8 mt-8 lg:mt-0">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Logo and Title */}
          <IconHeading />

          <h2 className="text-xl font-medium text-brand-heading mb-2">
            Reset Your Account Password
          </h2>
          <p className="text-brand-light-accent-1 text-sm">
            Enter your email address and we will send you instructions to reset
            your password
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label
              htmlFor="email"
              className="text-sm font-medium text-brand-heading"
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="E.g. smartschool@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full"
              required
              disabled={isLoading}
            />
          </div>

          <Button
            type="submit"
            disabled={!isFormValid() || isLoading}
            className={`w-full py-3 text-white font-medium rounded-lg transition-colors ${
              isFormValid() && !isLoading
                ? "bg-brand-primary hover:bg-[#4338CA]"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {isLoading ? "Sending..." : "Send Reset Instructions"}
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-brand-light-accent-1">
            Remember password?{" "}
            <Link
              href="/login"
              className="font-medium text-brand-primary hover:text-brand-primary-hover hover:underline"
              aria-label="Sign in"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Error Modal */}
      <AuthErrorModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        title="Reset Request Failed"
        message={errorMessage}
        onRetry={() => {
          setShowErrorModal(false);
          handleSubmit({ preventDefault: () => {} } as React.FormEvent);
        }}
      />

      {/* Success Modal */}
      <PasswordResetSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        onContinue={handleSuccessModalContinue}
        title="Reset Code Sent!"
        message={`We've sent a 6-digit reset code to ${email}. Please check your email and enter the code on the next page.`}
        buttonText="Continue to Verify"
      />
    </div>
  );
};

export default ForgotPassword;
