import { cn } from "@/lib/utils";
import React from "react";

type SubmitButtonProps = {
  title: string;
  className?: string;
  disabled?: boolean;
};

function SubmitButton({
  title,
  className,
  disabled = false,
}: SubmitButtonProps) {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={cn(
        "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
        className
      )}
    >
      {title}
    </button>
  );
}

export default SubmitButton;
