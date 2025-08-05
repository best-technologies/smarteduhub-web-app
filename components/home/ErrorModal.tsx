import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

interface ErrorModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

const ErrorModal = ({
  open,
  onClose,
  title = "Registration Failed",
  message = "We encountered an error while processing your registration. Please check your information and try again.",
}: ErrorModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md py-12 px-10 bg-white rounded-lg overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>Registration error modal</DialogTitle>
          <DialogDescription>
            Registration failed, please try again.
          </DialogDescription>
        </VisuallyHidden>

        <div className="text-center space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-lg font-medium text-brand-heading mb-2">
            {title}
          </h2>

          {/* Description */}
          <p className="mt-0 text-brand-secondary text-sm leading-relaxed">
            {message}
          </p>

          {/* Try Again Button */}
          <Button
            onClick={onClose}
            className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-medium text-sm transition-colors"
          >
            Try Again
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ErrorModal;
