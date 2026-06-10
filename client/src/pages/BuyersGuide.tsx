/**
 * Buyers Guide page — ASEA Purchasing Guide with Mike Beverly fixed links
 * Design system: deep navy bg, teal/gold accents, Playfair Display headlines, Plus Jakarta Sans body
 * Sections: announcement banner, hero, pricing tiers, RENU28, FAQ, have questions CTA
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, ShoppingCart, Star, CheckCircle, ArrowRight, Droplets, Sparkles } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435242541/L4bpoLh2LFma8n5yzFsaLc/hero-bg-bF3opehcWTcKMHZWVMeBPB.webp";

const RETAIL_URL = "https://www.myasealife.com/cart-sharing?cartSharingId=GE5A718S0CG0AC7";
const PREFERRED_URL = "https://www.myasealife.com/cart-sharing?cartSharingId=755AEA800CGSACG";
const PARTNER_URL = "https://www.myasealife.com/cart-sharing?cartSharingId=G55ADA8SS3G0A3G";
const RENU28_URL = "https://www.myasealife.com/cart-sharing?cartSharingId=3090I18SSCGS13G";
const CALENDLY_URL = "https://calendly.com/mikebeverly";

const pricingTiers = [
  {
    label: "Retail Customer",
    tag: null,
    price: "Full price",
    commitment: "No commitment required",
    description: "Order when you want, at full retail price. No autoship, no account required beyond checkout.",
    features: [
      "One-time purchase, no subscription",
      "Full access to the product catalog",
      "Standard shipping options",
      "No ongoing obligation",
    ],
    cta: "Shop Retail",
    url: RETAIL_URL,
    highlight: false,
  },
  {
    label: "Preferred Customer",
    tag: "Most Popular",
    price: "10 to 22% off",
    commitment: "Monthly autoship",
    description: "The option most of Mike's clients choose. Lock in a lower price on monthly autoship and cancel any time.",
    features: [
      "10 to 22% discount on all orders",
      "Monthly autoship at your chosen quantity",
      "Priority customer support",
      "Cancel or pause any time",
      "Use code MIKEBEVERLY for 10% off your first order",
    ],
    cta: "Start as Preferred Customer",
    url: PREFERRED_URL,
    highlight: true,
  },
  {
    label: "Brand Partner",
    tag: null,
    price: "Everything in Preferred",
    commitment: "Plus business opportunity",
    description: "Everything a Preferred Customer gets, plus the ability to share the products and build a business alongside your practice.",
    features: [
      "All Preferred Customer discounts",
      "Business builder tools and support",
      "Ability to enroll others",
      "Access to Mike's practitioner training",
      "Income potential alongside your practice",
    ],
    cta: "Become a Brand Partner",
    url: PARTNER_URL,
    highlight: false,
  },
];

export default function BuyersGuide() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Announcement Banner */}
      <div className="w-full py-2.5 px-4 text-center text-sm font-semibold tracking-wide" style={{ backgroundColor: "oklch(0.55 0.12 185)", color: "white", fontFamily: "'Space Grotesk', sans-serif" }}>
        Use code <span className="font-bold tracking-widest">MIKEBEVERLY</span> for 10% off your first order
      </div>

      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-24" style={{ backgroundColor: "oklch(0.18 0.04 240)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="container relative z-10">
          <p className="section-label mb-4">ASEA Purchasing Guide</p>
          <div className="teal-rule mb-6" />
          <h1 className="text-white text-5xl md:text-6xl font-bold max-w-2xl leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Feel the difference<br />from the inside out.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-10">
            ASEA REDOX is the only supplement in the world built on native redox signaling molecules, bio-identical to what your body makes naturally. The same ones your cells use to repair, protect, and renew themselves every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={PREFERRED_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded text-white font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "oklch(0.55 0.12 185)" }}>
              <ShoppingCart size={18} /> Start as Preferred Customer
            </a>
            <a href={RETAIL_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded font-semibold border transition-all hover:bg-white/10"
              style={{ borderColor: "oklch(1 0 0 / 30%)", color: "white" }}>
              Shop Retail <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* What is ASEA REDOX */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <p className="section-label mb-4">What Makes ASEA Different</p>
            <div className="teal-rule mb-8" />
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Every cell in your body produces redox signaling molecules. They are the messengers that tell your immune system when to activate, your genes when to express, and your cells when to repair or replace themselves. Without them, nothing works properly.
              </p>
              <p>
                The problem is that your body's ability to produce these molecules declines with age, stress, and environmental exposure. By the time most people are in their 40s, cellular signaling is already compromised.
              </p>
              <p>
                ASEA REDOX is the only product in the world that has stabilized native redox signaling molecules outside the body. It does not contain vitamins, minerals, or herbs. It contains the same molecules your cells already use, in a form your body recognizes and can put to work immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.14 0.04 240)" }}>
        <div className="container">
          <p className="section-label mb-4">Pick the Option That Fits Your Life</p>
          <div className="teal-rule mb-6" />
          <h2 className="text-white text-3xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Three ways to get started
          </h2>
          <p className="text-white/50 text-base mb-12 max-w-xl">
            All three options ship directly from ASEA. Mike's links ensure your order is connected to his account so he can support you personally.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className="rounded-lg p-7 flex flex-col relative"
                style={{
                  backgroundColor: tier.highlight ? "oklch(0.22 0.06 185)" : "oklch(0.22 0.04 240)",
                  border: tier.highlight ? "2px solid oklch(0.55 0.12 185)" : "2px solid transparent",
                }}
              >
                {tier.tag && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-white"
                      style={{ backgroundColor: "oklch(0.55 0.12 185)", fontFamily: "'Space Grotesk', sans-serif" }}>
                      {tier.tag}
                    </span>
                  </div>
                )}
                <div className="mb-5">
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{tier.label}</p>
                  <p className="text-white text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{tier.price}</p>
                  <p className="text-white/50 text-sm mt-1">{tier.commitment}</p>
                </div>
                <p className="text-white/65 text-sm leading-relaxed mb-6">{tier.description}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.12 185)" }} />
                      <span className="text-white/70 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded font-semibold text-sm transition-all"
                  style={tier.highlight
                    ? { backgroundColor: "oklch(0.55 0.12 185)", color: "white" }
                    : { backgroundColor: "oklch(0.28 0.04 240)", color: "white", border: "1px solid oklch(1 0 0 / 20%)" }
                  }
                >
                  {tier.cta} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
          <p className="text-white/30 text-xs mt-8 max-w-2xl">
            Individual results vary. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </section>

      {/* RENU28 Section */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.18 0.04 240)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-4">Also Worth Knowing About</p>
              <div className="teal-rule mb-6" />
              <h2 className="text-white text-3xl font-bold mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                RENU28: The Topical Gel
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-6">
                RENU28 is ASEA's topical redox gel, designed to support skin renewal and localized cellular signaling from the outside in. It uses the same redox signaling technology as ASEA REDOX, applied directly to the skin.
              </p>
              <p className="text-white/65 text-base leading-relaxed mb-8">
                Many of Mike's clients use RENU28 alongside their ASEA REDOX protocol for a whole-body approach to cellular support. It is fragrance-free, paraben-free, and suitable for all skin types.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Supports skin renewal at the cellular level",
                  "Fragrance-free and paraben-free",
                  "Pairs naturally with the ASEA REDOX protocol",
                  "Used topically, no ingestion required",
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Sparkles size={15} className="flex-shrink-0" style={{ color: "oklch(0.55 0.12 185)" }} />
                    <span className="text-white/70 text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <a href={RENU28_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-white font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "oklch(0.55 0.12 185)" }}>
                <ShoppingCart size={16} /> Shop RENU28
              </a>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "oklch(0.22 0.04 240)", border: "1px solid oklch(1 0 0 / 10%)" }}>
              <div className="p-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "oklch(0.28 0.06 185)" }}>
                  <Droplets size={40} style={{ color: "oklch(0.55 0.12 185)" }} />
                </div>
                <p className="text-white text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>RENU28 Revitalizing Redox Gel</p>
                <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
                  The same redox signaling technology as ASEA REDOX, in a topical gel formulated for skin renewal and localized support.
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="oklch(0.75 0.15 85)" style={{ color: "oklch(0.75 0.15 85)" }} />
                  ))}
                </div>
                <p className="text-white/30 text-xs">Fragrance-free · Paraben-free · All skin types</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Have Questions */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-label mb-4">Not Sure Where to Start?</p>
            <div className="teal-rule mb-6 mx-auto" />
            <h2 className="text-3xl font-bold mb-5" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.04 240)" }}>
              Have Questions?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Mike is happy to answer questions about the science, the products, or which option makes the most sense for where you are right now. Book a free 20-minute call and get a straight answer.
            </p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded text-white font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "oklch(0.55 0.12 185)" }}>
              <Calendar size={18} /> Book a Call with Mike
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
