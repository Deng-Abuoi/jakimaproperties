"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-xl border-b border-black/5 py-3" : "bg-transparent py-5"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current rounded-sm"
            aria-label="Jakima Properties — Go to homepage"
          >
            <div className="relative w-10 h-10">
              <Image src="/logo.png" alt="" fill className="object-contain" aria-hidden="true" />
            </div>
            <span className={`font-serif text-xl tracking-tight hidden sm:block transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>
              Jakima Properties
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current rounded-sm ${
                  pathname === item.href
                    ? scrolled ? "text-black" : "text-white"
                    : scrolled ? "text-gray-500 hover:text-black" : "text-white/70 hover:text-white"
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="tel:+254799872747"
              className={`hidden sm:flex items-center gap-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current rounded-sm ${
                scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-white/80"
              }`}
              aria-label="Call us at +254 799 872 747"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>+254 799 872 747</span>
            </a>
            <button
              className={`lg:hidden p-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current rounded-sm ${scrolled ? 'text-black' : 'text-white'}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`lg:hidden fixed inset-0 top-0 bg-white z-40 transition-all duration-500 flex flex-col justify-center ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
      >
        <div className="absolute top-6 right-6">
          <button
            className="p-2 text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-sm"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
          >
            <X className="w-8 h-8" aria-hidden="true" />
          </button>
        </div>
        <nav className="px-8 space-y-8 flex flex-col" aria-label="Mobile navigation">
          <Link
            href="/"
            className={`text-3xl font-serif tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black rounded-sm ${
              pathname === "/" ? "text-black" : "text-gray-400"
            }`}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-3xl font-serif tracking-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black rounded-sm ${
                pathname === item.href ? "text-black" : "text-gray-400"
              }`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-12 flex flex-col gap-4">
            <a
              href="tel:+254799872747"
              className="text-center py-4 bg-black text-white font-medium tracking-wide w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              aria-label="Call Jakima Properties at +254 799 872 747"
            >
              Call +254 799 872 747
            </a>
            <a
              href="https://wa.me/254799872747"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-4 bg-transparent border border-black text-black font-medium tracking-wide w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              aria-label="Message us on WhatsApp (opens in new tab)"
            >
              WhatsApp Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}