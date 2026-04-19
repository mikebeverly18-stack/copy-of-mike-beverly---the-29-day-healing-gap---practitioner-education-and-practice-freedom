/**
 * The Book page — The Healing Divide by Mike Beverly
 * Design: Deep navy + teal brand palette, Playfair Display headlines
 * Layout: Asymmetric hero with book cover, then features + free chapter CTA
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Download, ShoppingCart, Star } from "lucide-react";

const BOOK_COVER = "/manus-storage/healing-divide-cover_a4a929fb.jpg";
const FREE_CHAPTERS_PDF = "/manus-storage/TheHealingDivide_FreeChapters(4)_d47d7e47.pdf";
const AMAZON_URL = "https://www.amazon.com/Healing-Divide-Natural-Alternative-Modalities/dp/B0GTHMHWZB";

const chapters = [
  {
    number: "01",
    title: "The Divide Is Real",
    description: "Why the gap between conventional and natural medicine exists — and why it matters more than ever for your patients.",
  },
  {
    number: "02",
    title: "Why We Resist",
    description: "The cultural, psychological, and institutional forces that shape trust in healing — and why smart, educated people still resist what works.",
  },
  {
    number: "03",
    title: "The Science They Don't Teach",
    description: "Cutting-edge research on cellular signalling, the NRF2 pathway, and what it means for practitioners working with chronic conditions.",
  },
];

const endorsements = [
  {
    quote: "A pro-understanding book that every integrative practitioner should read. Beverly bridges the gap between what the science says and what patients believe.",
    name: "Richard G. Michal, M.D.",
    title: "Duke Medical School — Foreword",
  },
  {
    quote: "This is not an anti-medicine book. It is a deeply researched, honest examination of why healing is more complicated than any single modality.",
    name: "Reader Review",
    title: "Amazon Verified Purchase",
  },
];

export default function TheBook() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-0" style={{ backgroundColor: "oklch(0.18 0.04 240)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            {/* Left — text */}
            <div className="pb-20">
              <p className="section-label mb-4">The Book That Started It All</p>
              <div className="teal-rule mb-6" />
              <h1
                className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                The Healing<br />
                <span style={{ color: "oklch(0.75 0.12 60)" }}>Divide</span>
              </h1>
              <p className="text-white/60 text-lg mb-2 uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9rem" }}>
                Why We Resist Natural and Alternative Healing Modalities
              </p>
              <p className="text-white/40 text-sm mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Foreword by Richard G. Michal, M.D. — Duke Medical School
              </p>
              <p className="text-white/75 text-xl leading-relaxed mb-10 max-w-lg">
                What if the greatest obstacle to your patients' healing isn't their diagnosis — it's the story they've been told about their own body?
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={FREE_CHAPTERS_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded text-white font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "oklch(0.55 0.12 185)", fontSize: "1rem" }}
                >
                  <Download size={18} /> Download Free Chapters
                </a>
                <a
                  href={AMAZON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded font-semibold transition-all border hover:bg-white/10"
                  style={{ borderColor: "oklch(0.75 0.12 60)", color: "oklch(0.75 0.12 60)", fontSize: "1rem" }}
                >
                  <ShoppingCart size={18} /> Get the Full Book on Amazon
                </a>
              </div>
            </div>

            {/* Right — book cover */}
            <div className="flex justify-center lg:justify-end items-end">
              <div
                className="relative"
                style={{
                  filter: "drop-shadow(-20px 20px 40px oklch(0 0 0 / 60%))",
                  transform: "perspective(800px) rotateY(-8deg)",
                }}
              >
                <img
                  src={BOOK_COVER}
                  alt="The Healing Divide by Mike Beverly"
                  className="rounded-lg"
                  style={{ width: "280px", maxWidth: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div style={{ lineHeight: 0, marginTop: "-2px" }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="oklch(0.97 0.005 240)" />
          </svg>
        </div>
      </section>

      {/* ── ABOUT THE BOOK ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-4">About the Book</p>
              <div className="teal-rule mb-6" />
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.04 240)" }}
              >
                Four years of research. One honest answer.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                This is not an anti-medicine book. It is a pro-understanding book. Drawing on cutting-edge science, real patient stories, and conversations with practitioners across disciplines, <em>The Healing Divide</em> examines why people resist natural and alternative healing modalities — even when the information is accessible and the evidence is compelling.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Mike Beverly spent 3½ years researching the cultural, psychological, and institutional forces that shape trust in healing. What he found changed how he works with practitioners — and ultimately led to the 29-Day Healing Gap framework.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you are a practitioner, a patient, or simply someone trying to make sense of a fragmented healthcare landscape, this book gives you a framework for understanding the divide — and crossing it.
              </p>
            </div>

            {/* What's inside */}
            <div>
              <p className="section-label mb-4">Free Sample Chapters</p>
              <div className="teal-rule mb-6" />
              <div className="space-y-5">
                {chapters.map((ch) => (
                  <div
                    key={ch.number}
                    className="rounded-xl p-6 flex gap-5 items-start"
                    style={{ backgroundColor: "oklch(1 0 0)", border: "1px solid oklch(0.92 0.004 286.32)" }}
                  >
                    <span
                      className="text-3xl font-bold shrink-0"
                      style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.55 0.12 185)", lineHeight: 1 }}
                    >
                      {ch.number}
                    </span>
                    <div>
                      <p className="font-bold text-lg mb-1" style={{ color: "oklch(0.18 0.04 240)", fontFamily: "'Playfair Display', serif" }}>
                        {ch.title}
                      </p>
                      <p className="text-gray-500 text-base leading-relaxed">{ch.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href={FREE_CHAPTERS_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded text-white font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "oklch(0.55 0.12 185)", fontSize: "1rem" }}
                >
                  <Download size={18} /> Download These Chapters Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENDORSEMENTS ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.14 0.04 240)" }}>
        <div className="container">
          <p className="section-label mb-4 text-center">What Readers Are Saying</p>
          <div className="teal-rule mx-auto mb-12" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {endorsements.map((e, i) => (
              <div
                key={i}
                className="rounded-xl p-8"
                style={{ backgroundColor: "oklch(0.22 0.04 240)", border: "1px solid oklch(1 0 0 / 10%)" }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} fill="oklch(0.75 0.12 60)" style={{ color: "oklch(0.75 0.12 60)" }} />
                  ))}
                </div>
                <p className="text-white/80 text-lg leading-relaxed italic mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  "{e.quote}"
                </p>
                <div>
                  <p className="text-white font-semibold text-base">{e.name}</p>
                  <p className="text-white/40 text-sm">{e.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.18 0.04 240)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <BookOpen size={48} className="mx-auto mb-6" style={{ color: "oklch(0.55 0.12 185)" }} />
            <h2
              className="text-white text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Start reading today.
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Download the free sample chapters — no email required. Or get the full book on Amazon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={FREE_CHAPTERS_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded text-white font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "oklch(0.55 0.12 185)", fontSize: "1rem" }}
              >
                <Download size={18} /> Download Free Chapters
              </a>
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded font-semibold transition-all border hover:bg-white/10"
                style={{ borderColor: "oklch(0.75 0.12 60)", color: "oklch(0.75 0.12 60)", fontSize: "1rem" }}
              >
                <ShoppingCart size={18} /> Buy on Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
