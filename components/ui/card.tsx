import { ReactNode } from "react";
import clsx from "clsx";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "border border-gray-800 rounded-2xl p-5",
        "bg-gray-950/50 backdrop-blur",
        "transition-all duration-200",
        "hover:border-gray-700 hover:bg-gray-900/60",
        className
      )}
    >
      {children}
    </div>
  );
}