import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="bg-foreground text-background py-16 lg:py-20"
      aria-label="Site footer"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 mb-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white rounded-sm"
              aria-label="Jakima Properties — Go to homepage"
            >
              <div className="relative w-10 h-10">
                <Image src="/logo.png" alt="" fill className="object-contain" aria-hidden="true" />
              </div>
              <span className="font-semibold text-lg text-white">Jakima Properties</span>
            </Link>
            <p className="text-sm text-white/80 mb-6 max-w-xs">
              Find greater returns by investing in a place to call home.
            </p>

            {/* Social Links */}
            <nav aria-label="Social media links">
              <ul className="flex items-center gap-4 list-none p-0 m-0">
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                    aria-label="Follow us on Facebook (opens in new tab)"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true" focusable="false">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                    aria-label="Follow us on Instagram (opens in new tab)"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true" focusable="false">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                    aria-label="Follow us on TikTok (opens in new tab)"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true" focusable="false">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.46.07-5.04 1.51-7.05 1.18-1.6 2.96-2.7 4.96-3.11.23-.05.47-.07.71-.1v4.06c-1.04.15-2.02.6-2.75 1.34-.84.81-1.28 1.99-1.16 3.16.1 1.08.68 2.06 1.56 2.65 1.17.76 2.74.83 3.98.22 1.25-.6 2.07-1.84 2.22-3.18.06-.5.03-1.01.03-1.51V.02h-.02z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Explore Links */}
          <nav aria-label="Explore properties">
            <h2 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Explore</h2>
            <ul className="space-y-3 list-none p-0 m-0">
              <li>
                <Link href="/properties" className="text-sm text-white/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm transition-colors">
                  All Properties
                </Link>
              </li>
              <li>
                <Link href="/off-plan" className="text-sm text-white/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm transition-colors">
                  Off-Plan
                </Link>
              </li>
              <li>
                <Link href="/land" className="text-sm text-white/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm transition-colors">
                  Land
                </Link>
              </li>
              <li>
                <Link href="/rentals" className="text-sm text-white/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm transition-colors">
                  Rentals
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company Links */}
          <nav aria-label="Company information">
            <h2 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h2>
            <ul className="space-y-3 list-none p-0 m-0">
              <li>
                <Link href="/about" className="text-sm text-white/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h2 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h2>
            <address className="not-italic">
              <ul className="space-y-4 list-none p-0 m-0">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-white/50 shrink-0" aria-hidden="true" />
                  <span className="text-sm text-white/80">Nairobi &amp; Kiambu, Kenya</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white/50 shrink-0" aria-hidden="true" />
                  <a
                    href="tel:+254799872747"
                    className="text-sm text-white/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm transition-colors"
                    aria-label="Call us at 0799 872 747"
                  >
                    0799 872 747
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white/50 shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:info@jakimaproperties.com"
                    className="text-sm text-white/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm transition-colors"
                    aria-label="Email us at info@jakimaproperties.com"
                  >
                    info@jakimaproperties.com
                  </a>
                </li>
              </ul>
            </address>
            <a
              href="https://wa.me/254799872747"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              aria-label="Chat with us on WhatsApp (opens in new tab)"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true" focusable="false">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.86L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.633-.5-5.152-1.371l-.37-.217-3.826.998 1.02-3.716-.24-.379A9.69 9.69 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/70">
            <span aria-label={`Copyright ${new Date().getFullYear()}`}>©</span> {new Date().getFullYear()} Jakima Properties. All rights reserved.
          </p>
          <nav aria-label="Legal pages">
            <ul className="flex items-center gap-6 text-sm text-white/70 list-none p-0 m-0">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}