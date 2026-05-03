"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "About us", href: "#about" },
  { label: "Trade", href: "#trade" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Comma Foods logo"
            width={44}
            height={48}
            className="object-contain"
            priority
          />
          <div className="leading-none">
            <span className="font-serif text-xl font-medium text-comma-red-dark block">
              comma
            </span>
            <span className="label-caps text-comma-amber mt-0.5 block">
              foods
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-gray-500 hover:text-comma-red transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            className="ml-2 bg-comma-red text-white text-sm px-5 py-2 rounded-md hover:bg-comma-red-dark transition-colors"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-600 hover:text-comma-red"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            className="bg-comma-red text-white text-sm px-5 py-2.5 rounded-md text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
