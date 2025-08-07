"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AuthErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  onRetry?: () => void;
}

export function AuthErrorModal({
  isOpen,
  onClose,
  title = "Authentication Failed",
  message,
  onRetry,
}: AuthErrorModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center justify-center text-center p-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <XCircle className="w-8 h-8 text-red-600" />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>

          <p className="text-sm text-gray-600 mb-6">{message}</p>

          <div className="flex gap-3 w-full">
            {onRetry && (
              <Button onClick={onRetry} variant="outline" className="flex-1">
                Try Again
              </Button>
            )}
            <Button
              onClick={onClose}
              className="flex-1 bg-brand-primary hover:bg-brand-primary-hover text-white"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
