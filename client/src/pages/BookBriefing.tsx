/**
 * Book a Briefing page — Clinical Authority design
 * Single-purpose conversion page with Calendly embed
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435242541/L4bpoLh2LFma8n5yzFsaLc/hero-bg-bF3opehcWTcKMHZWVMeBPB.webp";

export default function BookBriefing() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navigation />

      {/* Header */}
      <section className="relative pt-32 pb-20" style={{ backgroundColor: "oklch(0.18 0.04 240)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="container relative z-10">
          <p className="section-label mb-4">Private Practitioner Briefing</p>
          <div className="teal-rule mb-6" />
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Book a Private Briefing
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-xl">
            30 minutes. No slides. No pitch. Just a direct conversation about whether this fits your practice.
          </p>
        </div>
      </section>

      {/* Booking section */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: What to expect */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="section-label mb-3">What to Expect</p>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.04 240)" }}>
                  An honest conversation
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This is not a sales call. It is a professional conversation between two people who take integrative care seriously. I will ask you about your practice, your patient population, and what you are trying to build. You will ask me whatever you need to ask.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "We will cover the science honestly — what is supported, what is preliminary, what is not proven",
                  "We will look at the income model and whether it fits your practice size and patient population",
                  "We will discuss the between-visit protocol and how it integrates with your existing clinical work",
                  "At the end you will know whether this is a fit. If it is not, I will tell you.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.12 185)" }} />
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-lg p-5" style={{ backgroundColor: "oklch(0.18 0.04 240)" }}>
                <p className="section-label mb-2">Who this is for</p>
                <p className="text-white/65 text-sm leading-relaxed">
                  Integrative, functional, naturopathic, chiropractic, acupuncture, massage therapy, or physical therapy practitioners who work with chronic condition patients and are open to a values-aligned conversation about practice growth.
                </p>
              </div>
            </div>

            {/* Right: Calendly embed */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden" style={{ borderColor: "oklch(0.88 0.01 240)" }}>
                <div className="p-6 border-b" style={{ borderColor: "oklch(0.88 0.01 240)", backgroundColor: "oklch(0.18 0.04 240)" }}>
                  <p className="text-white font-semibold text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Select a time that works for you
                  </p>
                  <p className="text-white/50 text-sm mt-1">30-minute video call · All time zones available</p>
                </div>
                {/* Calendly inline embed */}
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/mikebeverly/30min"
                  style={{ minWidth: "320px", height: "700px" }}
                />
                <script
                  type="text/javascript"
                  src="https://assets.calendly.com/assets/external/widget.js"
                  async
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
