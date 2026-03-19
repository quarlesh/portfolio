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
          "bg-white text-black hover:bg-gray-200":
            variant === "primary",

          // Secondary
          "bg-gray-900 text-white border border-gray-700 hover:bg-gray-800":
            variant === "secondary",

          // Ghost
          "text-gray-400 hover:text-white hover:bg-gray-900":
            variant === "ghost",
        },

        className
      )}
      {...props}
    />
  );
}