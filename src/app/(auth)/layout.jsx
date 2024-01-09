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
    <React.Fragment>
      {navLinks.map((link) => (
        <Link href={link.href} key={link.name}>
          {link.name}
        </Link>
      ))}
      {children}
    </React.Fragment>
  );
}
