/**
 * Footer — Clinical Authority design
 * Deep navy, teal accents, clean link structure
 */
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "oklch(0.14 0.04 240)" }}>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3
              className="text-white text-xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mike Beverly
            </h3>
            <p
              className="text-white/60 text-sm leading-relaxed mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Practitioner Educator and Practice Growth Strategist. Helping integrative practitioners close the 29-Day Healing Gap.
            </p>
            <p
              className="text-white/40 text-xs"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.05em" }}
            >
              Central Florida, USA
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-white/40 text-xs font-semibold mb-4 uppercase tracking-widest"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "The 29-Day Healing Gap", href: "/healing-gap" },
                { label: "For Practitioners", href: "/for-practitioners" },
                { label: "Resources", href: "/resources" },
                { label: "About", href: "/about" },
                { label: "Book a Briefing", href: "/book-briefing" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Resources & Contact */}
          <div>
            <p
              className="text-white/40 text-xs font-semibold mb-4 uppercase tracking-widest"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Resources
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <a
                href="https://drive.google.com/file/d/1IjpEDlH8E49fLuod566KtIO6RhHo2RTm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Download the Practitioner Guide
              </a>
              <a
                href="https://launch.mikebeverly.life"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Practice Freedom Calculator
              </a>
              <a
                href="https://calendly.com/mikebeverly"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Book a Private Briefing
              </a>
            </div>
            <p
              className="text-white/40 text-xs font-semibold mb-2 uppercase tracking-widest"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Contact
            </p>
            <a
              href="mailto:mikebeverly18@gmail.com"
              className="text-white/60 hover:text-white text-sm transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              mikebeverly18@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            © {new Date().getFullYear()} Mike Beverly. All rights reserved.
          </p>
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Practice Freedom · The 29-Day Healing Gap
          </p>
        </div>
      </div>
    </footer>
  );
}
