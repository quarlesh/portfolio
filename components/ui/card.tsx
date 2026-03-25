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
        "border border-gray-200 rounded-2xl p-5",
        "bg-white shadow-md",
        "text-gray-800",
        className
      )}
    >
      {children}
    </div>
  );
}