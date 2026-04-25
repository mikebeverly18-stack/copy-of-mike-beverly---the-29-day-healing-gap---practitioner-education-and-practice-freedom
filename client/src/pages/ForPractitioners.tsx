/**
 * For Practitioners page — Clinical Authority design
 * Deep navy + teal brand palette, Playfair Display headlines
 * Includes: intro section, what to expect, income model, 6 Q&A, CTA
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Download, CheckCircle } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435242541/L4bpoLh2LFma8n5yzFsaLc/hero-bg-bF3opehcWTcKMHZWVMeBPB.webp";

const objections = [
  {
    q: "I don't sell things to my patients.",
    a: "Neither do the practitioners I work with. What they do is extend their clinical care into the 29 days they do not see their patients. The conversation is not about a product. It is about a protocol. That distinction changes how the conversation feels for both you and your patient.",
  },
  {
    q: "I'm already busy. I don't have capacity for more.",
    a: "This model does not require additional appointments, new systems, or extra hours. It is built entirely on clinical conversations you are already having with your chronic condition patients. The only thing that changes is what those conversations lead to.",
  },
  {
    q: "I'm not sure the science supports it.",
    a: "That is exactly the right question to bring to the briefing. I use a three-tier evidence framework that separates what is clearly supported by peer-reviewed research, what is preliminary but promising, and what is mechanistically plausible but not yet fully established. I will not ask you to recommend anything you cannot defend professionally. Honesty about the evidence is the foundation of everything I do.",
  },
  {
    q: "My patients can't afford it.",
    a: "Practitioners I work with are often surprised by this. Patients who are committed to their health outcomes, which describes most chronic condition patients, tend to prioritize this kind of support when it is presented as part of their care plan rather than an add-on. The framing matters more than the price point.",
  },
  {
    q: "What exactly am I recommending? I don't even know what this is.",
    a: "That is a fair concern and the most important reason to have the briefing before making any decision. I will walk you through the specific protocol, the science behind it, and exactly what the patient conversation looks like. You will leave the call with a clear picture of what this is and whether it fits your practice.",
  },
  {
    q: "What if my licensing board or a patient asks me to justify this?",
    a: "This is the question most practitioners are thinking but do not say out loud. The three-tier evidence framework exists precisely for this reason. You will have a clear, documented rationale for every recommendation you make, grounded in peer-reviewed cellular biology. Practitioners who work with me do not recommend things they cannot defend. That is not negotiable.",
  },
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
          <h1 className="text-white text-5xl md:text-6xl font-bold max-w-2xl leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
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

      {/* Introduction */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <p className="section-label mb-4">For Practitioners Who Know Something Is Missing</p>
            <div className="teal-rule mb-8" />
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                You have spent years building a practice around the belief that the body can heal. You refer patients, adjust protocols, and stay current on the science because you believe real healing happens between appointments, not just during them.
              </p>
              <p>
                But there is one thing you have never been able to offer. A way to support your patients in the 29 days you do not see them. A clinical bridge that extends what you do in your treatment room into their daily life.
              </p>
              <p>
                When that gap gets filled, everything improves. Your patients get better outcomes. They stay in care longer because they are actually progressing. They refer more people because they have a story worth telling. And you build a recurring income stream that grows alongside your practice without requiring a single additional appointment.
              </p>
              <p className="font-semibold" style={{ color: "oklch(0.18 0.04 240)", fontFamily: "'Playfair Display', serif", fontSize: "1.2rem" }}>
                That is what the briefing is about.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.93 0.01 240)" }}>
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
                  { label: "Month 1 to 2", value: "3 to 5 enrolled patients", note: "Learning the conversation" },
                  { label: "Month 3 to 4", value: "8 to 12 enrolled patients", note: "Conversations becoming natural" },
                  { label: "Month 5 to 6", value: "$2,500 to $3,500/mo recurring", note: "Compounding as patients renew" },
                  { label: "Month 12+", value: "$5,000 to $8,000/mo recurring", note: "With consistent practice" },
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

      {/* Q&A */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.14 0.04 240)" }}>
        <div className="container">
          <p className="section-label mb-4">Common Questions</p>
          <div className="teal-rule mb-6" />
          <h2 className="text-white text-3xl font-bold mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            What practitioners ask first
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {objections.map((item, i) => (
              <div key={i} className="rounded-lg p-7" style={{ backgroundColor: "oklch(0.22 0.04 240)" }}>
                <p className="text-white font-semibold text-base mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem" }}>
                  "{item.q}"
                </p>
                <p className="text-white/70 text-base leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.18 0.04 240)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-label mb-4">Ready to Have the Conversation?</p>
            <div className="teal-rule mb-6 mx-auto" />
            <h2 className="text-white text-3xl font-bold mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              30 minutes. No slides. No pressure.
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Book a Private Practitioner Briefing and find out whether this fits your practice, your patients, and your values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/mikebeverly" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-white font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "oklch(0.55 0.12 185)" }}>
                <Calendar size={18} /> Book a Private Briefing
              </a>
              <a href="/manus-storage/practitioner-guide-updated_4c2c15dd.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-semibold border transition-all hover:bg-white/10"
                style={{ borderColor: "oklch(1 0 0 / 30%)", color: "white" }}>
                <Download size={18} /> Download the Guide First
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
