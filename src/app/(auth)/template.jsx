"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function ProductDetailLayout({ children }) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <div style={{ 'marginRight' : '10px'}}>
        {navLinks.map((link) => (
          <Link href={link.href} key={link.name}>
            {link.name}
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
}
