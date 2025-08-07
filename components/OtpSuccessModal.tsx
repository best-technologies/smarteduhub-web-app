"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OtpSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export function OtpSuccessModal({
  isOpen,
  onClose,
  onContinue,
}: OtpSuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center justify-center text-center p-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            OTP Verified Successfully!
          </h3>

          <p className="text-sm text-gray-600 mb-6">
            Your account has been verified. You can now access your dashboard.
          </p>

          <Button
            onClick={onContinue}
            className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white"
          >
            Continue to Dashboard
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
