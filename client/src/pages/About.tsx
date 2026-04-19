/**
 * About page — Mike Beverly's personal story
 * Deep navy + teal brand palette, Playfair Display headlines
 * Rewritten from Mike's March 2020 near-death experience post
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, BookOpen } from "lucide-react";
import { Link } from "wouter";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435242541/L4bpoLh2LFma8n5yzFsaLc/hero-bg-bF3opehcWTcKMHZWVMeBPB.webp";
const MIKE_PHOTO = "/manus-storage/mike-beverly-headshot_88ed3f68.jpg";
const BOOK_COVER = "/manus-storage/healing-divide-cover_a4a929fb.jpg";

export default function About() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navigation />

      {/* ── HEADER ── */}
      <section className="relative pt-32 pb-20" style={{ backgroundColor: "oklch(0.18 0.04 240)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="container relative z-10">
          <p className="section-label mb-4">About Mike Beverly</p>
          <div className="teal-rule mb-6" />
          <h1 className="text-white text-5xl md:text-6xl font-bold max-w-3xl leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            I nearly died learning this lesson.
          </h1>
          <p className="text-white/60 text-xl mt-6 max-w-xl leading-relaxed">
            Four years of research confirmed it.
          </p>
        </div>
      </section>

      {/* ── MAIN STORY ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 items-start">

            {/* Left — photo + sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="rounded-lg overflow-hidden shadow-lg" style={{ border: "4px solid oklch(0.88 0.01 240)" }}>
                <img
                  src={MIKE_PHOTO}
                  alt="Mike Beverly"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4", objectPosition: "top" }}
                />
              </div>

              {/* Credentials */}
              <div className="p-5 rounded-lg" style={{ backgroundColor: "oklch(0.18 0.04 240)" }}>
                <p className="section-label mb-3">Mike Beverly</p>
                <div className="space-y-2">
                  {[
                    "Author — The Healing Divide",
                    "Practitioner Educator",
                    "Business Coach",
                    "Speaker & Podcast Host",
                    "Healthy Lifestyle Mentor",
                  ].map((c, i) => (
                    <p key={i} className="text-white/70 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "oklch(0.55 0.12 185)" }} />
                      {c}
                    </p>
                  ))}
                </div>
                <p className="text-white/40 text-xs mt-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Central Florida, USA</p>
              </div>

              {/* Book callout */}
              <div
                className="rounded-xl p-5 flex gap-4 items-start"
                style={{ backgroundColor: "oklch(0.22 0.04 240)", border: "1px solid oklch(0.55 0.12 185 / 40%)", borderTop: "3px solid oklch(0.55 0.12 185)" }}
              >
                <img src={BOOK_COVER} alt="The Healing Divide" className="rounded w-16 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>The Healing Divide</p>
                  <p className="text-white/50 text-xs leading-relaxed mb-3">Why We Resist Natural and Alternative Healing Modalities</p>
                  <Link href="/the-book">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold cursor-pointer" style={{ color: "oklch(0.55 0.12 185)" }}>
                      <BookOpen size={12} /> Learn more →
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right — story */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.04 240)" }}>
                Why I do this work
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                In March 2020 a prescription blood thinner almost killed me. And nobody warned me it could.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                By the time I was admitted to the emergency room I had lost well over fifty percent of my blood. I was slipping deeper into a health crisis with every hour that passed.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                The bleeding stopped on the second night. I believe to this day that was not medicine. That was God.
              </p>

              {/* Nurse revelation quote */}
              <div className="my-2 p-7 rounded-xl border-l-4" style={{ borderColor: "oklch(0.55 0.12 185)", backgroundColor: "oklch(0.93 0.01 240)" }}>
                <p className="section-label mb-3">The Conversation That Changed Everything</p>
                <p className="text-lg italic leading-relaxed" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.04 240)" }}>
                  "A full year later, a holistic nurse in Ottawa told me the truth. The blood thinner I had been prescribed had no antidote. Not organically. Not pharmaceutically. If the bleeding had continued, there was nothing medicine could do to stop it."
                </p>
                <p className="text-sm mt-4 font-semibold" style={{ color: "oklch(0.55 0.12 185)", fontFamily: "'Space Grotesk', sans-serif" }}>— Mike Beverly</p>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                That revelation sent me on a search I have not stopped since.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed font-medium" style={{ color: "oklch(0.18 0.04 240)" }}>
                What actually supports the body's ability to recover at the cellular level? Not manage symptoms. Not intervene after the fact. Actually recover.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                A friend sent me eight blue bottles. Within five days I felt something shift that I had not felt in longer than I could remember.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                That moment led to four years of research into why we resist the very modalities that could help us most. Why the system pushes back. Why patients are left navigating alone in the 29 days between appointments — with no clinical support and no between-visit protocol.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                That research became my book — <em>The Healing Divide: Why We Resist Natural and Alternative Healing Modalities.</em>
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                And it became the foundation of the work I do today alongside integrative, functional, naturopathic, chiropractic, and hands-on practitioners who know that sick care is not health care.
              </p>

              <div className="p-6 rounded-xl" style={{ backgroundColor: "oklch(0.18 0.04 240)" }}>
                <p className="text-white text-lg leading-relaxed italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                  "I nearly died learning that lesson. Four years of research confirmed it."
                </p>
                <p className="text-white/50 text-sm mt-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>— Mike Beverly</p>
              </div>

              <p className="text-gray-500 text-base leading-relaxed italic">
                Watch the full story in the video below.
              </p>

              {/* Video placeholder */}
              <div
                className="rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "oklch(0.14 0.04 240)", border: "2px dashed oklch(0.55 0.12 185 / 40%)", minHeight: "280px" }}
              >
                <div className="text-center p-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "oklch(0.55 0.12 185)" }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21" /></svg>
                  </div>
                  <p className="text-white/60 text-base">Mike's Full Story — Video</p>
                  <p className="text-white/30 text-sm mt-1">Add your video URL to display here</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/mikebeverly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded text-white font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "oklch(0.55 0.12 185)", fontSize: "1rem" }}
                >
                  <Calendar size={16} /> Book a Conversation with Mike
                </a>
                <Link href="/the-book">
                  <span
                    className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold transition-all border hover:bg-gray-100 cursor-pointer"
                    style={{ borderColor: "oklch(0.18 0.04 240)", color: "oklch(0.18 0.04 240)", fontSize: "1rem" }}
                  >
                    <BookOpen size={16} /> Read The Healing Divide
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
