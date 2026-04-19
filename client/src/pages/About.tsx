/**
 * About page — Clinical Authority design
 * Uses Mike's actual headshot from mikebeverly.life
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435242541/L4bpoLh2LFma8n5yzFsaLc/hero-bg-bF3opehcWTcKMHZWVMeBPB.webp";
const MIKE_PHOTO = "/manus-storage/mike-beverly-headshot_f4a52b12.webp";

export default function About() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navigation />

      {/* Header */}
      <section className="relative pt-32 pb-20" style={{ backgroundColor: "oklch(0.18 0.04 240)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="container relative z-10">
          <p className="section-label mb-4">About Mike Beverly</p>
          <div className="teal-rule mb-6" />
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Practitioner Educator.<br />Practice Growth Strategist.
          </h1>
        </div>
      </section>

      {/* Bio section */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="rounded-lg overflow-hidden shadow-lg" style={{ border: "4px solid oklch(0.88 0.01 240)" }}>
                <img
                  src={MIKE_PHOTO}
                  alt="Mike Beverly"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4", objectPosition: "top" }}
                />
              </div>
              <div className="mt-6 p-5 rounded-lg" style={{ backgroundColor: "oklch(0.18 0.04 240)" }}>
                <p className="section-label mb-2">Credentials</p>
                <div className="space-y-1.5">
                  {["Business Coach", "Speaker", "Healthy Lifestyle Mentor", "Podcast Host", "Author"].map((c, i) => (
                    <p key={i} className="text-white/70 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "oklch(0.55 0.12 185)" }} />
                      {c}
                    </p>
                  ))}
                </div>
                <p className="text-white/40 text-xs mt-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Central Florida, USA</p>
              </div>
            </div>

            {/* Story */}
            <div className="lg:col-span-2 space-y-5 text-gray-700 text-base leading-relaxed">
              <h2 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.04 240)" }}>
                Why I do this work
              </h2>
              <p>
                I spent 20 years as a music educator — teaching instrumental music to students in elementary, middle, and high schools. Many of those students went on to become professional musicians and educators. That work taught me how to communicate complex ideas in ways that land, how to meet people where they are, and how to build trust over time.
              </p>
              <p>
                In March of 2020 my world changed. I found myself in a hospital bed, alone, facing what felt like the end. Chronic back pain, inflammation, and years of unhealthy habits had compounded into a crisis I could not ignore.
              </p>
              <p>
                That moment became my turning point. I sought out natural solutions. I found the science of cellular signalling — specifically the NRF2 pathway and redox biology. The inflammation subsided. The back pain lessened. I started to regain the energy and vitality I thought were long gone.
              </p>
              <p>
                Now at 71, I am working out, riding my bike, and playing with my grandkids. And I am spending my professional life helping integrative practitioners understand and apply this science in their practices.
              </p>

              <div className="my-6 p-6 rounded-lg border-l-4" style={{ borderColor: "oklch(0.55 0.12 185)", backgroundColor: "oklch(0.93 0.01 240)" }}>
                <p className="text-lg italic font-medium" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.04 240)" }}>
                  "I am not a researcher. I am an educator and a strategist. My job is to translate what the science says honestly, and to help practitioners build practices that reflect their values."
                </p>
                <p className="text-sm mt-3 font-semibold" style={{ color: "oklch(0.55 0.12 185)", fontFamily: "'Space Grotesk', sans-serif" }}>— Mike Beverly</p>
              </div>

              <h2 className="text-2xl font-bold pt-2" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.04 240)" }}>
                What I bring to practitioners
              </h2>
              <p>
                I work at the intersection of two things that do not often appear together: honest clinical science and sustainable practice economics. Most practitioners I speak with are deeply committed to their patients and quietly exhausted by the financial model they are working within.
              </p>
              <p>
                The between-visit protocol model I work with gives practitioners a clinically grounded way to support their chronic condition patients in the 29 days between appointments — and a values-aligned recurring income stream that does not require additional appointments or compromise of professional integrity.
              </p>
              <p>
                I am based in Central Florida with my wife Anna. My life is guided by faith and family. And this work is the most meaningful professional chapter I have had.
              </p>

              <div className="pt-4">
                <a href="https://calendly.com/mikebeverly" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded text-white font-semibold text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "oklch(0.55 0.12 185)" }}>
                  <Calendar size={16} /> Book a Conversation with Mike
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
