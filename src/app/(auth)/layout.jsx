'use client';

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function ProductDetailLayout({ children }) {
  const pathname = usePathname();
  
  return (
    <div>
      {navLinks.map((link) => (
        <Link href={link.href} key={link.name}>
          const isActive = pathname.startsWith(link.href)
          {link.name}
        </Link>
      ))}
      {children}
    </div>
  );
}
