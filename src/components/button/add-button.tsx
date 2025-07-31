import React from "react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils"; // Optional utility for conditional classNames

type AddButtonProps = {
  icon: React.ReactNode;
  onClick: () => void;
  label: string;
  className?: string;
};

function AddButton({ icon, onClick, label, className }: AddButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 bg-[#2c3e50]/98 hover:bg-[#2c3e50] text-white shadow-md px-4 py-2 rounded-sm transition-colors duration-200 font-medium cursor-pointer",
        className
      )}
    >
      <span className="text-lg">{icon}</span>
      <div className="bg-white/60 w-[.5px] h-[20px]"></div>
      <span>{label}</span>
    </button>
  );
}

export default AddButton;
