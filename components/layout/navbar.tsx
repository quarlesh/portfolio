"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/systems", label: "Systems" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-800">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Name */}
        <Link href="/" className="font-semibold text-lg tracking-tight">
          Haylee Quarles
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}