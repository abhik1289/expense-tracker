import { cn } from "@/lib/utils";
import React from "react";
import { Loader2 } from "lucide-react"; // spinner icon

type SubmitButtonProps = {
  title: string;
  className?: string;
  disabled?: boolean;
  isWidthFull?: boolean;
  position?: "left" | "right" | "center";
};

function SubmitButton({
  title,
  className,
  disabled = false,
  isWidthFull = false,
  position = "left",
}: SubmitButtonProps) {
  const alignment = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <div className={cn("flex", alignment[position])}>
      <button
        type="submit"
        disabled={disabled}
        className={cn(
          "px-4 py-2  font-medium transition-colors duration-200 flex items-center justify-center gap-2 rounded-md",
          "bg-blue-500 hover:bg-blue-600 text-white",
          "disabled:bg-gray-400 disabled:cursor-not-allowed",
          isWidthFull && "w-full",
          className
        )}
      >
        {disabled && <Loader2 className="h-5 w-5 animate-spin" />} title
      </button>
    </div>
  );
}

export default SubmitButton;
