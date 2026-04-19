/**
 * Home Page — Clinical Authority design
 * Deep navy + teal + amber palette, Playfair Display headlines
 * Sections: Hero, 29-Day Gap, Who It's For, Two Pillars, Testimonials, Bottom CTA
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Download, Calculator, Calendar } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435242541/L4bpoLh2LFma8n5yzFsaLc/hero-bg-bF3opehcWTcKMHZWVMeBPB.webp";
const MIKE_PHOTO = "/manus-storage/mike-beverly-headshot_88ed3f68.jpg";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const practitioners = [
  "Integrative Medicine",
  "Functional Medicine",
  "Naturopathic Practitioners",
  "Chiropractors",
  "Acupuncturists",
  "Massage & Physical Therapy",
];

const testimonials = [
  {
    quote: "I stopped thinking of it as a product and started thinking of it as part of the protocol. My chronic fatigue patients are doing better between visits and six of my first eight enrolled patients renewed without prompting.",
    attribution: "Naturopathic Practitioner",
  },
  {
    quote: "I worried it would add burden to patients who were already carrying a lot. The opposite happened. They described it as the practice extending its care into their daily lives.",
    attribution: "Functional Medicine Practitioner",
  },
  {
    quote: "I waited eight months before reaching out. My only regret was the eight months.",
    attribution: "Integrative GP",
  },
];

export default function Home() {
  const gapRef = useFadeUp();
  const whoRef = useFadeUp();
  const pillarsRef = useFadeUp();
  const testimonialsRef = useFadeUp();

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navigation />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center pt-16"
        style={{ backgroundColor: "oklch(0.18 0.04 240)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.18 0.04 240) 55%, oklch(0.18 0.04 240 / 60%) 80%, transparent 100%)" }} />
        {/* Mike's photo — right side of hero */}
        <div
          className="absolute right-0 bottom-0 hidden lg:block"
          style={{ width: "42%", height: "100%", pointerEvents: "none" }}
        >
          <img
            src={MIKE_PHOTO}
            alt="Mike Beverly"
            className="absolute bottom-0 right-0 h-full object-cover object-top"
            style={{
              maskImage: "linear-gradient(to left, rgba(0,0,0,0.85) 40%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%)",
              WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.85) 40%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "destination-in",
            }}
          />
        </div>
        <div className="container relative z-10 py-24">
          <div className="max-w-2xl">
            <p className="section-label mb-4">Practitioner Education · Practice Freedom</p>
            <h1
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              There is a 29-Day Healing Gap in your practice.
              <span className="block mt-2" style={{ color: "oklch(0.75 0.15 70)" }}>
                Here is what you can do about it.
              </span>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-6 max-w-xl">
              Your patients leave appointments motivated and with a plan. Then they go home for 29 days — navigating their chronic condition entirely on their own. No clinical support. No between-visit protocol.
            </p>
            <p className="text-white/60 text-base mb-8">
              That gap has a name. And there is something you can do about it.
            </p>
            <ul className="mb-10 space-y-3">
              {[
                "Your patients deserve support in the 29 days you do not see them",
                "The science of cellular signalling explained honestly for clinicians",
                "A practice income model built on clinical work you are already doing",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80" style={{ fontSize: "1rem" }}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "oklch(0.55 0.12 185)", marginTop: "8px" }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/manus-storage/redox_signalling_professional(1)_8896aa96.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded text-white font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "oklch(0.55 0.12 185)" }}
              >
                <Download size={16} />
                Download the Practitioner Guide (free)
              </a>
              <a
                href="https://launch.mikebeverly.life"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded font-semibold text-sm transition-all hover:bg-white/10 border"
                style={{ borderColor: "oklch(1 0 0 / 30%)", color: "white" }}
              >
                <Calculator size={16} />
                Explore the Practice Freedom Calculator
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 29-DAY GAP ── */}
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(0.14 0.04 240)" }}
      >
        <div className="container">
          <div ref={gapRef} className="fade-up max-w-3xl mx-auto text-center">
            <p className="section-label mb-4">The Core Problem</p>
            <div className="teal-rule mx-auto mb-6" />
            <h2
              className="text-white text-3xl md:text-4xl font-bold mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The 29-Day Healing Gap
            </h2>
            <div className="text-left space-y-4 text-white/75 text-base leading-relaxed">
              <p>You see a chronic condition patient. You do excellent clinical work. The assessment, the protocol, the education. They leave motivated.</p>
              <p>And then they go home for 29 days.</p>
              <p>In those 29 days their cellular environment keeps running. Oxidative load accumulates. Inflammatory signalling continues. The body does not pause between appointments.</p>
              <p>When they come back, many practitioners describe the same experience: <span className="text-white font-semibold">starting over.</span></p>
              <p>This is the 29-Day Healing Gap. It is not a failure of clinical skill. It is a structural gap in how care is delivered. And it has a solution.</p>
              <p>The science of cellular signalling — specifically the NRF2 pathway and redox biology — gives practitioners a clinically grounded, evidence-honest framework for supporting their patients at the cellular level between visits.</p>
            </div>
            <div className="mt-10">
              <a
                href="/manus-storage/redox_signalling_professional(1)_8896aa96.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-white font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "oklch(0.55 0.12 185)" }}
              >
                Read the Practitioner Guide <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
        <div className="container">
          <div ref={whoRef} className="fade-up">
            <p className="section-label mb-4">Who This Is For</p>
            <div className="teal-rule mb-6" />
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.04 240)" }}
            >
              This is for practitioners who give a damn.
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl mb-10">
              If you are in integrative, functional, naturopathic, chiropractic, acupuncture, massage therapy, or physical therapy practice and you have ever felt constrained by a system that prioritises intervention over long-term resilience, you are in the right place. This work is for practitioners who have reached a simple conclusion: sick care is not health care.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {practitioners.map((p, i) => (
                <div
                  key={i}
                  className="px-5 py-4 rounded border text-sm font-medium transition-all hover:border-teal hover:shadow-md"
                  style={{
                    borderColor: "oklch(0.88 0.01 240)",
                    color: "oklch(0.18 0.04 240)",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: "oklch(0.55 0.12 185)" }} />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TWO PILLARS ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.18 0.04 240)" }}>
        <div className="container">
          <div ref={pillarsRef} className="fade-up">
            <p className="section-label mb-4">Two Things. Both Matter.</p>
            <div className="teal-rule mb-6" />
            <h2
              className="text-white text-3xl md:text-4xl font-bold mb-12"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Two things. Both matter.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Clinical */}
              <div className="rounded-lg p-8" style={{ backgroundColor: "oklch(0.22 0.04 240)" }}>
                <p className="section-label mb-3">The Science</p>
                <h3
                  className="text-white text-xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Honest and Clinically Grounded
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  The NRF2 pathway is one of the most significant cytoprotective mechanisms in human physiology. When activated it upregulates hundreds of genes involved in oxidative stress response, inflammation resolution, and mitochondrial biogenesis.
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  This is not a supplement conversation. It is a cellular signalling conversation. And it changes how you support chronic condition patients between appointments.
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  I use a three-tier evidence framework so every practitioner I work with knows exactly what the science supports, what it suggests, and what remains unproven.
                </p>
                <a
                  href="/manus-storage/redox_signalling_professional(1)_8896aa96.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: "oklch(0.55 0.12 185)" }}
                >
                  <Download size={14} /> Download the Practitioner Guide
                </a>
              </div>
              {/* Practice Freedom */}
              <div className="rounded-lg p-8" style={{ backgroundColor: "oklch(0.22 0.04 240)" }}>
                <p className="section-label mb-3">Practice Freedom</p>
                <h3
                  className="text-white text-xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Values-Aligned Recurring Income
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Most practice income is episodic. A patient comes in, you deliver care, you bill. If your schedule slips, your income slips with it.
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  The model I work with gives practitioners a recurring income stream generated from clinical conversations they are already having. No additional appointments. No compromise of professional integrity.
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  By month six, practitioners working this model conservatively generate an additional{" "}
                  <span className="text-white font-semibold">$3,000–$3,500 per month</span> in recurring income.
                </p>
                <a
                  href="https://launch.mikebeverly.life"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: "oklch(0.55 0.12 185)" }}
                >
                  <Calculator size={14} /> Model Your Own Numbers
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
        <div className="container">
          <div ref={testimonialsRef} className="fade-up">
            <p className="section-label mb-4">Practitioner Voices</p>
            <div className="teal-rule mb-6" />
            <h2
              className="text-3xl md:text-4xl font-bold mb-12"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.04 240)" }}
            >
              What practitioners are saying
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-sm border" style={{ borderColor: "oklch(0.88 0.01 240)" }}>
                  <div className="quote-block mb-4" style={{ color: "oklch(0.30 0.04 240)" }}>
                    "{t.quote}"
                  </div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "oklch(0.55 0.12 185)", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    — {t.attribution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.14 0.04 240)" }}>
        <div className="container">
          <div className="text-center">
            <p className="section-label mb-4">Ready to Close the Gap?</p>
            <div className="teal-rule mx-auto mb-6" />
            <h2
              className="text-white text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to close the gap?
            </h2>
            <p className="text-white/60 text-base mb-12">Two ways to start. No pressure on either.</p>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <div className="rounded-lg p-6" style={{ backgroundColor: "oklch(0.22 0.04 240)", border: "1px solid oklch(1 0 0 / 10%)" }}>
                <p className="section-label mb-3">For Practitioners Who Want the Science</p>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  The Practitioner Guide covers the NRF2 mechanism, the honest evidence picture, and a plain-language claims framework. It is free and written specifically for clinicians.
                </p>
                <a
                  href="/manus-storage/redox_signalling_professional(1)_8896aa96.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-white text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "oklch(0.55 0.12 185)" }}
                >
                  <Download size={14} /> Download the Practitioner Guide
                </a>
              </div>
              <div className="rounded-lg p-6" style={{ backgroundColor: "oklch(0.22 0.04 240)", border: "1px solid oklch(1 0 0 / 10%)" }}>
                <p className="section-label mb-3">For Practitioners Ready for a Conversation</p>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  The Private Practitioner Briefing is 30 minutes. No slides. No pitch. Just a direct conversation about whether this fits your practice.
                </p>
                <a
                  href="https://calendly.com/mikebeverly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold transition-all border hover:bg-white/10"
                  style={{ borderColor: "oklch(0.55 0.12 185)", color: "oklch(0.65 0.10 185)" }}
                >
                  <Calendar size={14} /> Book a Private Briefing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
