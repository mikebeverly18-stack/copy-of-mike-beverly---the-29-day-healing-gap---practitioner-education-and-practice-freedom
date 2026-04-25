/**
 * For Practitioners page — Clinical Authority design
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Download, CheckCircle } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435242541/L4bpoLh2LFma8n5yzFsaLc/hero-bg-bF3opehcWTcKMHZWVMeBPB.webp";

const objections = [
  { q: "I do not sell things to my patients.", a: "This is not selling. It is extending your clinical care into the 29 days you do not see them. The reframe is not about the product. It is about the protocol." },
  { q: "I am already busy. I do not have capacity for more.", a: "This model does not require additional appointments. It is built on clinical conversations you are already having. The only difference is the outcome of those conversations." },
  { q: "I am not sure the science supports it.", a: "Neither am I — fully. That is why I use a three-tier evidence framework that distinguishes what is clearly supported, what is preliminary, and what is mechanistically plausible. Honesty is the foundation." },
  { q: "My patients cannot afford it.", a: "The practitioners I work with are often surprised. Patients who are committed to their health outcomes — which describes most chronic condition patients — tend to prioritise this kind of support." },
];

export default function ForPractitioners() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navigation />

      {/* Header */}
      <section className="relative pt-32 pb-20" style={{ backgroundColor: "oklch(0.18 0.04 240)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="container relative z-10">
          <p className="section-label mb-4">For Integrative Practitioners</p>
          <div className="teal-rule mb-6" />
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            A conversation worth having.
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-xl">
            The Private Practitioner Briefing is 30 minutes. No slides. No pitch. Just a direct conversation about whether this fits your practice.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="https://calendly.com/mikebeverly" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded text-white font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "oklch(0.55 0.12 185)" }}>
              <Calendar size={16} /> Book a Private Briefing
            </a>
            <a href="/manus-storage/practitioner-guide-updated_4c2c15dd.pdf" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm border transition-all hover:bg-white/10"
              style={{ borderColor: "oklch(1 0 0 / 30%)", color: "white" }}>
              <Download size={16} /> Download the Practitioner Guide First
            </a>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label mb-4">What to Expect</p>
              <div className="teal-rule mb-6" />
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.04 240)" }}>
                The Private Practitioner Briefing
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                This is not a sales call. It is a professional conversation between two people who take integrative care seriously. I will ask you about your practice, your patient population, and what you are trying to build. You will ask me whatever you need to ask.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                At the end of 30 minutes, you will know whether this is a fit. If it is not, I will tell you. If it is, we will talk about next steps.
              </p>
              <div className="space-y-3">
                {[
                  "30 minutes, no slides, no pitch",
                  "Honest conversation about fit",
                  "Science and income model both covered",
                  "No obligation, no follow-up pressure",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: "oklch(0.55 0.12 185)", flexShrink: 0 }} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a href="https://calendly.com/mikebeverly" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded text-white font-semibold text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "oklch(0.55 0.12 185)" }}>
                  <Calendar size={16} /> Book Your Briefing
                </a>
              </div>
            </div>

            {/* Income model */}
            <div className="rounded-lg p-8" style={{ backgroundColor: "oklch(0.18 0.04 240)" }}>
              <p className="section-label mb-4">The Income Model</p>
              <h3 className="text-white text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                What practitioners are generating
              </h3>
              <div className="space-y-4 mb-6">
                {[
                  { label: "Month 1–2", value: "3–5 enrolled patients", note: "Learning the conversation" },
                  { label: "Month 3–4", value: "8–12 enrolled patients", note: "Conversations becoming natural" },
                  { label: "Month 5–6", value: "$2,500–$3,500/mo recurring", note: "Compounding as patients renew" },
                  { label: "Month 12+", value: "$5,000–$8,000/mo recurring", note: "With consistent practice" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-start border-b border-white/10 pb-3">
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{row.label}</p>
                      <p className="text-white font-semibold text-sm mt-0.5">{row.value}</p>
                    </div>
                    <p className="text-white/40 text-xs text-right max-w-[120px]">{row.note}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-xs">These are representative ranges based on practitioners I work with. Individual results vary based on practice size, patient population, and consistency of implementation.</p>
              <div className="mt-6">
                <a href="https://launch.mikebeverly.life" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "oklch(0.55 0.12 185)" }}>
                  Model your own numbers →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objections */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.14 0.04 240)" }}>
        <div className="container">
          <p className="section-label mb-4">Common Questions</p>
          <div className="teal-rule mb-6" />
          <h2 className="text-white text-3xl font-bold mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            What practitioners ask first
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {objections.map((item, i) => (
              <div key={i} className="rounded-lg p-6" style={{ backgroundColor: "oklch(0.22 0.04 240)" }}>
                <p className="text-white font-semibold text-base mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  "{item.q}"
                </p>
                <p className="text-white/65 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
