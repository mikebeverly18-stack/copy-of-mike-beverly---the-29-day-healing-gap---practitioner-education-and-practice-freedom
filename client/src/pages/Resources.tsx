/**
 * Resources page — Clinical Authority design
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Download, Calculator, Calendar, Users } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435242541/L4bpoLh2LFma8n5yzFsaLc/hero-bg-bF3opehcWTcKMHZWVMeBPB.webp";

const resources = [
  {
    icon: Download,
    label: "Free Guide",
    title: "Redox Signaling & Cellular Communication",
    subtitle: "A Practitioner's Evidence Guide",
    description: "Three pages covering the NRF2 mechanism, an honest evidence appraisal using a three-tier framework, and a plain-language claims guide for practitioner-patient conversations. Written specifically for integrative clinicians.",
    cta: "Download the Guide (free)",
    href: "/manus-storage/practitioner-guide-updated_4c2c15dd.pdf",
    tag: "PDF · 3 pages · Free",
  },
  {
    icon: Calculator,
    label: "Free Tool",
    title: "Practice Freedom Calculator",
    subtitle: "Model Your Recurring Income",
    description: "Enter your current patient numbers and see what a between-visit protocol model could generate in recurring monthly income. Conservative projections based on real practitioner data.",
    cta: "Open the Calculator",
    href: "https://launch.mikebeverly.life",
    tag: "Interactive · Free",
  },
  {
    icon: Calendar,
    label: "Private Briefing",
    title: "The Private Practitioner Briefing",
    subtitle: "30-Minute Direct Conversation",
    description: "A 30-minute conversation about whether this fits your practice. No slides. No pitch. Just an honest discussion about the science, the model, and whether it makes sense for you.",
    cta: "Book a Briefing",
    href: "https://calendly.com/mikebeverly",
    tag: "30 min · No obligation",
  },
  {
    icon: Users,
    label: "Community",
    title: "The Practice Freedom Community",
    subtitle: "Peer Practitioners in Conversation",
    description: "A private community for integrative practitioners working with the between-visit protocol model. Case discussions, clinical questions, and peer support from practitioners who are doing this work.",
    cta: "Join the Community",
    href: "https://www.facebook.com/groups/practicefreedom",
    tag: "Private group · Free",
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navigation />

      {/* Header */}
      <section className="relative pt-32 pb-20" style={{ backgroundColor: "oklch(0.18 0.04 240)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="container relative z-10">
          <p className="section-label mb-4">Practitioner Resources</p>
          <div className="teal-rule mb-6" />
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Everything you need to start.
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-xl">
            All resources are free. No email required for the guide or calculator.
          </p>
        </div>
      </section>

      {/* Resources grid */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((res, i) => {
              const Icon = res.icon;
              return (
                <div key={i} className="bg-white rounded-lg p-8 shadow-sm border flex flex-col" style={{ borderColor: "oklch(0.88 0.01 240)" }}>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.93 0.05 185)" }}>
                      <Icon size={18} style={{ color: "oklch(0.45 0.12 185)" }} />
                    </div>
                    <div>
                      <p className="section-label mb-0.5">{res.label}</p>
                      <h3 className="font-bold text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.04 240)" }}>
                        {res.title}
                      </h3>
                      <p className="text-gray-500 text-sm mt-0.5">{res.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">{res.description}</p>
                  <div className="flex items-center justify-between">
                    <a href={res.href} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-white text-sm font-semibold transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "oklch(0.55 0.12 185)" }}>
                      {res.cta}
                    </a>
                    <span className="text-xs text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{res.tag}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
