import { ReactNode } from "react";
import clsx from "clsx";

type Variant = "default" | "outline" | "subtle";

export function Badge({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <span
      className={clsx(
        "text-xs px-2.5 py-1 rounded-full font-medium",
        {
          // Solid
          "bg-white text-black":
            variant === "default",

          // Outline
          "border border-gray-700 text-gray-300":
            variant === "outline",

          // Subtle
          "bg-gray-800 text-gray-300":
            variant === "subtle",
        }
      )}
    >
      {children}
    </span>
  );
}