/**
 * Navigation — Clinical Authority design
 * Deep navy background, teal accents, Playfair Display brand name
 * Sticky top nav with mobile hamburger
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "The 29-Day Healing Gap", href: "/healing-gap" },
  { label: "For Practitioners", href: "/for-practitioners" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "The Healing Divide", href: "/the-book" },
  { label: "Blog", href: "/blog" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-2xl" : ""
      }`}
      style={{ backgroundColor: "oklch(0.18 0.04 240)" }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Brand */}
          <Link href="/">
            <span
              className="font-bold text-white text-lg tracking-tight cursor-pointer"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mike Beverly
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                    location === link.href
                      ? "text-teal"
                      : "text-white/80 hover:text-white"
                  }`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <a
              href="https://calendly.com/mikebeverly"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "oklch(0.55 0.12 185)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Book a Briefing
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden border-t border-white/10"
          style={{ backgroundColor: "oklch(0.18 0.04 240)" }}
        >
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`block py-2 text-sm font-medium cursor-pointer ${
                    location === link.href ? "text-teal" : "text-white/80"
                  }`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <a
              href="https://calendly.com/mikebeverly"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 rounded text-sm font-semibold text-white text-center"
              style={{ backgroundColor: "oklch(0.55 0.12 185)" }}
            >
              Book a Briefing
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
