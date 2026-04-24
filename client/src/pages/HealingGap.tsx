/**
 * The 29-Day Healing Gap page — Clinical Authority design
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Download } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435242541/L4bpoLh2LFma8n5yzFsaLc/hero-bg-bF3opehcWTcKMHZWVMeBPB.webp";

export default function HealingGap() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navigation />

      {/* Header */}
      <section
        className="relative pt-32 pb-20"
        style={{ backgroundColor: "oklch(0.18 0.04 240)" }}
      >
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="container relative z-10">
          <p className="section-label mb-4">Understanding the Problem</p>
          <div className="teal-rule mb-6" />
          <h1
            className="text-white text-4xl md:text-5xl font-bold max-w-2xl leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The 29-Day Healing Gap
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-xl">
            A structural gap in integrative care that nobody talks about — and what you can do about it.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6 text-gray-700 text-base leading-relaxed">
              <h2 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.04 240)" }}>
                What happens between appointments
              </h2>
              <p>You see a chronic condition patient. You do excellent clinical work. The assessment, the protocol, the education. They leave motivated and with a plan.</p>
              <p>And then they go home for 29 days.</p>
              <p>In those 29 days their cellular environment keeps running. Oxidative load accumulates. Inflammatory signalling continues. The body does not pause between appointments.</p>
              <p>When they come back, many practitioners describe the same experience: <strong>starting over.</strong></p>
              <p>This is the 29-Day Healing Gap. It is not a failure of clinical skill. It is a structural gap in how care is delivered.</p>

              <div className="my-8 p-6 rounded-lg border-l-4" style={{ borderColor: "oklch(0.55 0.12 185)", backgroundColor: "oklch(0.93 0.01 240)" }}>
                <p className="text-lg italic font-medium" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.04 240)" }}>
                  "The body does not pause between appointments."
                </p>
              </div>

              <h2 className="text-2xl font-bold pt-4" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.04 240)" }}>
                The science behind the gap
              </h2>
              <p>The science of cellular signalling — specifically the NRF2 pathway and redox biology — gives practitioners a clinically grounded, evidence-honest framework for supporting their patients at the cellular level between visits.</p>
              <p>The NRF2 pathway is one of the most significant cytoprotective mechanisms in human physiology. When activated it upregulates hundreds of genes involved in oxidative stress response, inflammation resolution, and mitochondrial biogenesis.</p>
              <p>This is not a supplement conversation. It is a cellular signalling conversation. And it changes how you support chronic condition patients between appointments.</p>

              <h2 className="text-2xl font-bold pt-4" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.04 240)" }}>
                The solution
              </h2>
              <p>A between-visit protocol gives your chronic condition patients cellular-level support in the 29 days you do not see them. It is clinically grounded, evidence-honest, and generates a values-aligned recurring income stream from clinical conversations you are already having.</p>
              <p>It does not require additional appointments. It does not compromise your professional integrity. It does not ask you to become someone different.</p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://drive.google.com/file/d/1IjpEDlH8E49fLuod566KtIO6RhHo2RTm/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded text-white font-semibold text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "oklch(0.55 0.12 185)" }}
                >
                  <Download size={16} /> Download the Practitioner Guide
                </a>
                <a
                  href="https://calendly.com/mikebeverly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm border transition-all hover:bg-gray-50"
                  style={{ borderColor: "oklch(0.55 0.12 185)", color: "oklch(0.40 0.10 185)" }}
                >
                  Book a Private Briefing <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-lg p-6" style={{ backgroundColor: "oklch(0.18 0.04 240)" }}>
                <p className="section-label mb-3">The Three-Tier Framework</p>
                <div className="space-y-4">
                  {[
                    { tier: "Tier A", label: "Clearly Supported", desc: "What mainstream biology clearly demonstrates", color: "oklch(0.55 0.15 145)" },
                    { tier: "Tier B", label: "Preliminary Evidence", desc: "What early research suggests but has not yet confirmed", color: "oklch(0.75 0.15 70)" },
                    { tier: "Tier C", label: "Mechanistically Plausible", desc: "What is biologically logical but not yet proven", color: "oklch(0.65 0.12 30)" },
                  ].map((item) => (
                    <div key={item.tier} className="flex gap-3">
                      <div className="w-2 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: item.color, minHeight: "40px" }} />
                      <div>
                        <p className="text-white text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.tier} — {item.label}</p>
                        <p className="text-white/60 text-xs mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg p-6 border" style={{ borderColor: "oklch(0.88 0.01 240)" }}>
                <p className="section-label mb-3">Free Resource</p>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.04 240)" }}>
                  Redox Signalling for Clinicians
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  A three-page guide covering the NRF2 mechanism, an honest evidence appraisal, and a plain-language claims framework.
                </p>
                <a
                  href="https://drive.google.com/file/d/1IjpEDlH8E49fLuod566KtIO6RhHo2RTm/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: "oklch(0.55 0.12 185)" }}
                >
                  <Download size={14} /> Download Free Guide
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
