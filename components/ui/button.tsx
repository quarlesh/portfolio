import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-white/20",
        
        {
          // Primary
          "bg-emerald-500 text-white hover:hover:bg-emerald-600 datatype-font":
            variant === "primary",

          // Secondary
          "bg-gray-300 text-gray-800 hover:bg-gray-400 datatype-font":
            variant === "secondary",

          // Ghost
          "text-gray-400 hover:text-white hover:bg-gray-900 datatype-font":
            variant === "ghost",
        },

        className
      )}
      {...props}
    />
  );
}