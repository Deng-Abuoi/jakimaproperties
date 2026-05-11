"use client";

import { useState, useEffect } from "react";
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

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-xl border-b border-black/5 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image src="/logo.png" alt="Jakima Properties Logo" fill className="object-contain" />
            </div>
            <span className={`font-serif text-xl tracking-tight hidden sm:block transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>
              Jakima Properties
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  pathname === item.href 
                    ? scrolled ? "text-black" : "text-white"
                    : scrolled ? "text-gray-500 hover:text-black" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a 
              href="tel:+254799872747" 
              className={`hidden sm:flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-white/80"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+254 799 872 747</span>
            </a>
            <button
              className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-0 bg-white z-40 transition-all duration-500 flex flex-col justify-center ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <div className="absolute top-6 right-6">
          <button
            className="p-2 text-black"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
        <nav className="px-8 space-y-8 flex flex-col">
          <Link
            href="/"
            className={`text-3xl font-serif tracking-tight ${
              pathname === "/" ? "text-black" : "text-gray-400"
            }`}
          >
            Home
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-3xl font-serif tracking-tight transition-colors ${
                pathname === item.href ? "text-black" : "text-gray-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-12 flex flex-col gap-4">
            <a 
              href="tel:+254799872747" 
              className="text-center py-4 bg-black text-white font-medium tracking-wide w-full"
            >
              Call +254 799 872 747
            </a>
            <a 
              href="https://wa.me/254799872747" 
              className="text-center py-4 bg-transparent border border-black text-black font-medium tracking-wide w-full"
            >
              WhatsApp Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}