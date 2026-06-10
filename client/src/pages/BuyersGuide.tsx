/**
 * Buyers Guide — ASEA Purchasing Guide
 * Exact duplicate of aseaguide-jo74gwcu.manus.space
 * Colors: dark navy #0a0f2e, gold/amber #d4a843, white sections for pricing
 * Embedded within healinggap.com nav/footer
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const RETAIL_URL = "https://shop.aseaglobal.com/info?cartSharingId=GE5A718S0CG0AC7&st=sc&sn=cl";
const PREFERRED_URL = "https://shop.aseaglobal.com/info?cartSharingId=755AEA800CGSACG&st=sc&sn=cl";
const PARTNER_URL = "https://shop.aseaglobal.com/info?cartSharingId=G55ADA8SS3G0A3G&st=sc&sn=cl";
const RENU28_URL = "https://shop.aseaglobal.com/info?cartSharingId=3090I18SSCGS13G&st=sc&sn=cl";
const REDOXGOLD_URL = "https://shop.aseaglobal.com/info?cartSharingId=3090I18SSCGS13G&st=sc&sn=cl";
const CALENDLY_URL = "https://calendly.com/mikebeverly";
const ASEA_BOTTLES = "https://aseaguide-jo74gwcu.manus.space/manus-storage/asea_bottles_4989e429.jpg";
const RENU28_IMG = "https://aseaguide-jo74gwcu.manus.space/manus-storage/renu28_official_d0ad15d4.webp";
const REDOXGOLD_IMG = "https://aseaguide-jo74gwcu.manus.space/manus-storage/redoxgold_lifestyle_9c2822d8.webp";

const NAVY = "#0a0f2e";
const NAVY2 = "#0d1540";
const NAVY3 = "#111a4a";
const GOLD = "#d4a843";
const GOLD_DARK = "#b8902e";

const testimonials = [
  {
    text: "5 days ago got a nasty steam burn to thumb while camping. 2nd degree. It never blistered. Its day 5 today and no one but me would know. Has remained looking like a normal thumb since the day after. Nothing short of remarkable. Amazing stuff!",
    name: "Felicia McQueen",
    product: "RENU28",
  },
  {
    text: "I am truly grateful Redox found me. It has been a powerful support in my wellness journey, helping me feel more aligned, more confident, and more like myself again. This experience has been life-changing, and I am genuinely excited for what is ahead.",
    name: "Lamika Rene Reid",
    product: "ASEA REDOX",
  },
  {
    text: "I gave this young lady 2oz of Asea. Yesterday, she went in for a root canal and instead they pulled the tooth and packed it. Her mouth had a lot of inflammation and she was slurring her words. 5 minutes later, relief and clear speech!",
    name: "Barbara Stolz",
    product: "ASEA REDOX",
  },
  {
    text: "Not even 24 hours. Just ONE SMALL SAMPLE SIZE (not the whole tube). My son asked: where did the sunburn go? Love ASEA!",
    name: "Diana Lesheeklife",
    product: "RENU28",
  },
  {
    text: "ASEA Redox is something I plan to take for the rest of my life because I LOVE feeling as good as I do at almost 70. I have the energy to Line Dance 2-4 hours a week, do yard work, and play disc golf. I used to have high blood sugar, constant sore elbow, sore knees, and be as tired as my 80-year-old mother. Not for the last 10 years. I LOVE Asea Redox.",
    name: "Laura L. Schoonmaker",
    product: "ASEA REDOX",
  },
];

export default function BuyersGuide() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: NAVY }}>
      <Navigation />

      {/* ── ANNOUNCEMENT BANNER ── */}
      <div className="pt-16" style={{ backgroundColor: NAVY }}>
        <div className="flex justify-center py-5">
          <div className="px-6 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: GOLD, color: "#1a1200" }}>
            🎁 Use code <span className="font-bold tracking-wider">MIKEBEVERLY</span>: 10% off your first order
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="py-16 text-center" style={{ backgroundColor: NAVY }}>
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-extrabold leading-tight mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <span className="text-white">Feel the difference</span><br />
            <span style={{ color: GOLD }}>from the inside out.</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            ASEA REDOX is the only supplement in the world built on native redox signaling molecules, bio-identical to what your body makes naturally. The same ones your cells use to repair, protect, and renew themselves every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href={PREFERRED_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: GOLD, color: "#1a1200" }}>
              Start as Preferred Customer ↗
            </a>
            <a href={RETAIL_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-base border-2 transition-all hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}>
              Shop Retail ↗
            </a>
          </div>

          {/* Product image + timeline */}
          <div className="flex flex-col md:flex-row gap-10 items-center text-left max-w-3xl mx-auto">
            <div className="flex-shrink-0">
              <img src={ASEA_BOTTLES} alt="ASEA REDOX bottles" className="w-56 rounded-xl" />
            </div>
            <div className="flex-1">
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Through focus groups and ongoing customer feedback, we have tracked real results at every stage of the journey. Here is what people consistently report, and why we strongly recommend committing to at least <span className="font-bold" style={{ color: GOLD }}>90 days</span> to experience the full benefit.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { days: "30", label: "Days", result: "25–30% feel a shift" },
                  { days: "60", label: "Days", result: "50–60% notice results" },
                  { days: "90", label: "Days", result: "90%+ experience change" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="font-extrabold leading-none" style={{ fontSize: "3rem", color: GOLD }}>{item.days}</div>
                    <div className="text-white/50 text-xs uppercase tracking-widest mt-1 mb-2">{item.label}</div>
                    <div className="text-white/70 text-xs">{item.result}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="py-5" style={{ backgroundColor: "#060b22" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: "🔬", text: "16 Years of Science" },
              { icon: "🌍", text: "Sold in 30+ Countries" },
              { icon: "✅", text: "Cancel Any Time" },
              { icon: "🏆", text: "10M+ Bottles Sold" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <span className="text-lg">{stat.icon}</span>
                <span className="text-white/70 text-sm font-medium">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PRICING TIERS ── */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5" style={{ backgroundColor: GOLD, color: "#1a1200" }}>
              Choose Your Path
            </div>
            <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#0a0f2e", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Pick the option that fits your life
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto mb-3">
              All tiers include the full ASEA product line. Upgrade, downgrade, or cancel any time, no lock-in.
            </p>
            <p className="text-gray-400 text-xs">All links open the ASEA shop in a new tab. ASEA's shop may take a moment to load. This is normal.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {/* Retail */}
            <div className="rounded-2xl p-7 bg-white shadow-md border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Try it first</p>
              <h3 className="text-xl font-extrabold mb-3" style={{ color: NAVY }}>Retail Customer</h3>
              <div className="mb-5">
                <span className="font-extrabold text-3xl" style={{ color: NAVY }}>$172.50</span>
                <span className="text-gray-400 text-sm">/order</span>
              </div>
              <ul className="space-y-2.5 mb-7 text-sm">
                {["4-pack (4 x 32oz) available", "No subscription required", "Order when you need it"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span style={{ color: GOLD }} className="font-bold mt-0.5">✓</span>
                    <span className="text-gray-600">{f}</span>
                  </li>
                ))}
                {["6-pack not available at retail", "Preferred savings"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-300 font-bold mt-0.5">✗</span>
                    <span className="text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>
              <a href={RETAIL_URL} target="_blank" rel="noopener noreferrer"
                className="block w-full text-center py-3 rounded-lg font-bold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: NAVY, color: "white" }}>
                Shop Retail ↗
              </a>
            </div>

            {/* Preferred — featured */}
            <div className="rounded-2xl overflow-hidden shadow-2xl relative" style={{ backgroundColor: NAVY, border: `2px solid ${GOLD}` }}>
              <div className="text-center py-2.5 font-bold text-sm" style={{ backgroundColor: GOLD, color: "#1a1200" }}>
                ⭐ Most Popular
              </div>
              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: GOLD }}>Most popular</p>
                <h3 className="text-xl font-extrabold text-white mb-3">Preferred Customer</h3>
                <div className="mb-5">
                  <span className="font-extrabold text-3xl" style={{ color: GOLD }}>$155</span>
                  <span className="text-white/50 text-sm">/mo (4-pack)</span>
                </div>
                <ul className="space-y-2.5 mb-7 text-sm">
                  {[
                    "4-pack $155/mo (retail $172.50, save $17.50)",
                    "6-pack $240/mo (retail $258, save $18)",
                    "FREE RENU28 + FREE shipping with 6-pack",
                    "Consistent monthly supply secured",
                    "Cancel any time",
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: GOLD }} className="font-bold mt-0.5">✓</span>
                      <span className="text-white/80">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={PREFERRED_URL} target="_blank" rel="noopener noreferrer"
                  className="block w-full text-center py-3 rounded-lg font-bold text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: GOLD, color: "#1a1200" }}>
                  Become Preferred ↗
                </a>
              </div>
            </div>

            {/* Brand Partner */}
            <div className="rounded-2xl p-7 bg-white shadow-md border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Build &amp; earn</p>
              <h3 className="text-xl font-extrabold mb-3" style={{ color: NAVY }}>Brand Partner</h3>
              <div className="mb-5">
                <span className="font-extrabold text-3xl" style={{ color: NAVY }}>$140</span>
                <span className="text-gray-400 text-sm">/mo (4-pack)</span>
              </div>
              <ul className="space-y-2.5 mb-7 text-sm">
                {[
                  "4-pack $140/mo (retail $172.50, save $32.50)",
                  "6-pack $215/mo",
                  "FREE RENU28 + FREE shipping with 6-pack",
                  "Ability to earn referral income",
                  "One-time $40 enrollment fee",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span style={{ color: GOLD }} className="font-bold mt-0.5">✓</span>
                    <span className="text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>
              <a href={PARTNER_URL} target="_blank" rel="noopener noreferrer"
                className="block w-full text-center py-3 rounded-lg font-bold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: NAVY, color: "white" }}>
                Become Brand Partner ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── DETAILED PRODUCT CARDS ── */}
      <section className="py-20" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5" style={{ backgroundColor: GOLD, color: "#1a1200" }}>
              Flagship Product
            </div>
            <h2 className="font-extrabold text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              ASEA REDOX Cell Signaling Supplement
            </h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">
              The world's first and only supplement containing active redox signaling molecules, identical to what your body makes naturally.
            </p>
          </div>

          {/* Retail row */}
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Retail</p>
            <div className="rounded-xl p-6" style={{ backgroundColor: NAVY3, border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ backgroundColor: "rgba(212,168,67,0.15)", color: GOLD }}>Retail Customer</span>
                  <p className="text-white font-bold text-lg">4-Pack <span className="text-white/40 font-normal text-sm">4 x 32oz</span></p>
                  <p className="font-extrabold text-3xl mt-1" style={{ color: GOLD }}>$172.50</p>
                  <p className="text-white/50 text-sm mt-2">No subscription required. Order when you need it.</p>
                  <p className="text-white/25 text-sm mt-1">6-pack not available at retail</p>
                </div>
                <a href={RETAIL_URL} target="_blank" rel="noopener noreferrer"
                  className="self-end inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: GOLD, color: "#1a1200" }}>
                  Shop Retail ↗
                </a>
              </div>
            </div>
          </div>

          {/* Preferred Customer row */}
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Preferred Customer</p>
            <div className="grid md:grid-cols-2 gap-5">
              {/* 4-pack */}
              <div className="rounded-xl p-6" style={{ backgroundColor: "#0d1a4a", border: "1px solid rgba(212,168,67,0.3)" }}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ backgroundColor: "rgba(212,168,67,0.15)", color: GOLD }}>Preferred Customer</span>
                <p className="text-white font-bold text-lg">4-Pack <span className="text-white/40 font-normal text-sm">4 x 32oz</span></p>
                <p className="font-extrabold text-3xl mt-1" style={{ color: GOLD }}>$155<span className="text-lg font-bold">/mo</span></p>
                <p className="text-white/40 text-sm line-through mt-1">Retail $172.50</p>
                <p className="text-sm font-bold mt-1" style={{ color: GOLD }}>Save $17.50 every month</p>
                <p className="text-white/50 text-sm mt-3">Monthly subscription. Consistent supply at preferred pricing.</p>
                <a href={PREFERRED_URL} target="_blank" rel="noopener noreferrer"
                  className="mt-5 block w-full text-center py-3 rounded-lg font-bold text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: GOLD, color: "#1a1200" }}>
                  Order as Preferred Customer ↗
                </a>
              </div>
              {/* 6-pack best value */}
              <div className="rounded-xl p-6" style={{ backgroundColor: "#0a2010", border: "1px solid rgba(34,197,94,0.4)" }}>
                <div className="flex gap-2 mb-3 flex-wrap">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: "rgba(212,168,67,0.15)", color: GOLD }}>Preferred Customer</span>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white">Best Value</span>
                </div>
                <p className="text-white font-bold text-lg">6-Pack <span className="text-white/40 font-normal text-sm">6 x 32oz</span></p>
                <p className="font-extrabold text-3xl mt-1" style={{ color: GOLD }}>$240<span className="text-lg font-bold">/mo</span></p>
                <p className="text-sm font-bold mt-1" style={{ color: "#4ade80" }}>+ FREE RENU28 + FREE Shipping</p>
                <div className="mt-3 space-y-1.5">
                  <p className="text-sm text-white/70"><span className="font-bold text-green-400 mr-1">FREE</span>RENU28 Revitalizing Gel included</p>
                  <p className="text-sm text-white/70"><span className="font-bold text-green-400 mr-1">FREE</span>Shipping every month</p>
                </div>
                <a href={PREFERRED_URL} target="_blank" rel="noopener noreferrer"
                  className="mt-5 block w-full text-center py-3 rounded-lg font-bold text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: GOLD, color: "#1a1200" }}>
                  Order as Preferred Customer ↗
                </a>
              </div>
            </div>
          </div>

          {/* Brand Partner row */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Brand Partner</p>
            <div className="grid md:grid-cols-2 gap-5">
              {/* 4-pack */}
              <div className="rounded-xl p-6" style={{ backgroundColor: "#1a1008", border: "1px solid rgba(212,168,67,0.25)" }}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ backgroundColor: "rgba(212,168,67,0.15)", color: GOLD }}>Brand Partner</span>
                <p className="text-white font-bold text-lg">4-Pack <span className="text-white/40 font-normal text-sm">4 x 32oz</span></p>
                <p className="font-extrabold text-3xl mt-1" style={{ color: GOLD }}>$140<span className="text-lg font-bold">/mo</span></p>
                <p className="text-white/40 text-sm line-through mt-1">Retail $172.50</p>
                <p className="text-sm font-bold mt-1" style={{ color: GOLD }}>Save $32.50 every month</p>
                <p className="text-white/50 text-sm mt-3">Monthly subscription. Earn referral income while saving on your supply.</p>
                <a href={PARTNER_URL} target="_blank" rel="noopener noreferrer"
                  className="mt-5 block w-full text-center py-3 rounded-lg font-bold text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: GOLD, color: "#1a1200" }}>
                  Order as Brand Partner ↗
                </a>
              </div>
              {/* 6-pack best value */}
              <div className="rounded-xl p-6" style={{ backgroundColor: "#1a1008", border: "1px solid rgba(139,92,246,0.4)" }}>
                <div className="flex gap-2 mb-3 flex-wrap">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: "rgba(212,168,67,0.15)", color: GOLD }}>Brand Partner</span>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-purple-500 text-white">Best Value</span>
                </div>
                <p className="text-white font-bold text-lg">6-Pack <span className="text-white/40 font-normal text-sm">6 x 32oz</span></p>
                <p className="font-extrabold text-3xl mt-1" style={{ color: GOLD }}>$215<span className="text-lg font-bold">/mo</span></p>
                <p className="text-sm font-bold mt-1" style={{ color: "#4ade80" }}>+ FREE RENU28 + FREE Shipping</p>
                <div className="mt-3 space-y-1.5">
                  <p className="text-sm text-white/70"><span className="font-bold text-green-400 mr-1">FREE</span>RENU28 Revitalizing Gel included</p>
                  <p className="text-sm text-white/70"><span className="font-bold text-green-400 mr-1">FREE</span>Shipping every month</p>
                </div>
                <a href={PARTNER_URL} target="_blank" rel="noopener noreferrer"
                  className="mt-5 block w-full text-center py-3 rounded-lg font-bold text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: GOLD, color: "#1a1200" }}>
                  Order as Brand Partner ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RENU28 ── */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={RENU28_IMG} alt="RENU28 Revitalizing Redox Gel" className="w-full object-cover" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GOLD_DARK }}>Skin Care</p>
              <h2 className="font-extrabold mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.2 }}>
                RENU28®<br />Revitalizing Redox Gel
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-7">
                Wake up to skin that looks and feels younger, without harsh chemicals or complicated routines. RENU28 works at the cellular level to help your skin renew itself from within.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "✨ Visibly reduces fine lines, wrinkles & cellulite",
                  "💧 Deep hydration for tighter, more nourished skin",
                  "🌿 Soothes and calms irritated or sensitive skin",
                  "❄️ Cooling relief after sun, shaving, or activity",
                ].map((f, i) => (
                  <li key={i} className="text-gray-700 text-base">{f}</li>
                ))}
              </ul>
              <a href={RENU28_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: NAVY, color: "white" }}>
                Order RENU28 ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── REDOXGOLD ── */}
      <section className="py-20" style={{ backgroundColor: NAVY }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GOLD }}>✦ New: Recovery</p>
              <h2 className="font-extrabold text-white mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.2 }}>
                REDOXGold™<br />Massage + Soothing Gel
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-7">
                Get back to doing what you love, faster. REDOXGold combines the power of redox technology with real elemental gold to soothe tired muscles and joints so you can move freely again.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "💪 Targeted relief for tired, overworked muscles",
                  "🧘 Eases tension and stress from overexertion",
                  "⚡ Fast-absorbing, no sticky residue or strong odor",
                  "🏃 Use before or after workouts, anywhere on the go",
                ].map((f, i) => (
                  <li key={i} className="text-white/75 text-base">{f}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a href="https://discoverredox.com/redox-gold/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border-2 transition-all hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}>
                  ▶ Watch Video
                </a>
                <a href={REDOXGOLD_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: GOLD, color: "#1a1200" }}>
                  Order REDOXGold ↗
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={REDOXGOLD_IMG} alt="REDOXGold Massage + Soothing Gel" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>Real People. Real Results.</p>
            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              What Our Community Is Saying
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-xl p-6 flex flex-col" style={{ backgroundColor: NAVY3, border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ color: GOLD }}>★</span>
                  ))}
                </div>
                <p className="text-white/75 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: GOLD }}>{t.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <section className="py-20" style={{ backgroundColor: "#060b22" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>Have Questions?</p>
          <h2 className="font-extrabold text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Let us find the right fit for you
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Not sure where to start? Book a free 15-minute call with Mike Beverly and get personalized guidance.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all hover:opacity-90"
            style={{ backgroundColor: GOLD, color: "#1a1200" }}>
            Book a Free Call with Mike ↗
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
