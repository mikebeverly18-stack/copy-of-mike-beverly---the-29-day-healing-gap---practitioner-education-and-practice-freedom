/**
 * Blog listing page — Mike Beverly | The 29-Day Healing Gap
 * Design: Deep navy + teal + gold. Playfair Display headlines. Clean card grid.
 * Audience filter: All | For Practitioners | For Patients
 */

import { useState } from "react";
import { Link } from "wouter";
import { blogPosts, getBlogPostsByAudience, type BlogPost } from "@/data/blogPosts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

const audienceFilters = [
  { label: "All Articles", value: "all" },
  { label: "For Practitioners", value: "practitioners" },
  { label: "For Patients", value: "patients" },
];

const categoryColors: Record<string, string> = {
  "The 29-Day Gap": "bg-teal-700/20 text-teal-300",
  "Clinical Insight": "bg-blue-700/20 text-blue-300",
  "Mike's Story": "bg-amber-700/20 text-amber-300",
  "The Healing Divide": "bg-purple-700/20 text-purple-300",
  "Practice Freedom": "bg-emerald-700/20 text-emerald-300",
  "Practice Sustainability": "bg-teal-700/20 text-teal-300",
  "Clinical Ethics": "bg-rose-700/20 text-rose-300",
};

function BlogCard({ post, emphasis = false }: { post: BlogPost; emphasis?: boolean }) {
  const categoryStyle = categoryColors[post.category] || "bg-gray-700/20 text-gray-300";

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group relative bg-[#0d1b2e] border border-white/10 rounded-sm overflow-hidden cursor-pointer hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/20 flex flex-col h-full">
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-teal-600 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Cover image */}
        {post.image && (
          <div className={`overflow-hidden ${emphasis ? "h-64 md:h-72" : "h-48"}`}>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        <div className="p-8 flex flex-col flex-1">
          {/* Category + audience badge */}
          <div className="flex items-center gap-3 mb-5">
            <span className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${categoryStyle}`}>
              {post.category}
            </span>
            {post.audience === "practitioners" && (
              <span className="text-xs text-teal-400/70 uppercase tracking-widest font-medium">
                Practitioners
              </span>
            )}
            {post.audience === "patients" && (
              <span className="text-xs text-amber-400/70 uppercase tracking-widest font-medium">
                Patients
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className={`font-['Playfair_Display'] font-bold text-white leading-snug mb-3 group-hover:text-teal-200 transition-colors duration-200 ${emphasis ? "text-2xl md:text-3xl" : "text-xl"}`}>
            {post.title}
          </h2>

          {/* Subtitle */}
          <p className="text-white/50 text-sm font-light italic mb-4 leading-relaxed">
            {post.subtitle}
          </p>

          {/* Excerpt */}
          <p className="text-white/70 text-base leading-relaxed mb-6 flex-1">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-5 border-t border-white/10">
            <div className="flex items-center gap-4 text-white/40 text-sm">
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {post.readTime}
              </span>
              <span>{post.date}</span>
            </div>
            <span className="flex items-center gap-1.5 text-teal-400 text-sm font-medium group-hover:gap-2.5 transition-all duration-200">
              Read <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState<"all" | "practitioners" | "patients">("all");

  const filteredPosts = getBlogPostsByAudience(activeFilter);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 px-6">
        <span
          aria-hidden="true"
          className="absolute right-4 top-16 select-none font-['Playfair_Display'] text-[10rem] leading-none font-bold text-amber-300/[0.07] md:right-[12%] md:text-[15rem]"
        >
          29
        </span>
        <div className="relative max-w-5xl mx-auto">
          <p className="text-teal-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Insights & Perspectives
          </p>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            The Blog
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            Writing on the 29-Day Healing Gap, integrative practice, cellular science, and what it means to build a practice that is both clinically excellent and financially sustainable.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="px-6 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 border-b border-white/10 pb-0">
            {audienceFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value as typeof activeFilter)}
                className={`px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px ${
                  activeFilter === filter.value
                    ? "border-teal-400 text-teal-400"
                    : "border-transparent text-white/40 hover:text-white/70"
                }`}
              >
                {filter.label}
              </button>
            ))}
            <span className="ml-auto text-white/30 text-sm">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>

      {/* Featured post (first post) */}
      {filteredPosts.length > 0 && (
        <section className="px-6 pb-12">
          <div className="max-w-5xl mx-auto">
            <Link href={`/blog/${filteredPosts[0].slug}`}>
              <article className="group relative bg-[#0d1b2e] border border-white/10 rounded-sm overflow-hidden cursor-pointer hover:border-teal-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-teal-900/20">
                <div className="h-1 w-full bg-gradient-to-r from-teal-600 via-teal-400 to-amber-400" />
                {/* Featured cover image */}
                {filteredPosts[0].image && (
                  <div className="overflow-hidden aspect-video md:aspect-auto md:h-96">
                    <img
                      src={filteredPosts[0].image}
                      alt={filteredPosts[0].title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="p-10 md:p-14">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-teal-500/20 text-teal-300">
                      Featured
                    </span>
                    <span className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${categoryColors[filteredPosts[0].category] || "bg-gray-700/20 text-gray-300"}`}>
                      {filteredPosts[0].category}
                    </span>
                  </div>
                  <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white leading-tight mb-4 group-hover:text-teal-200 transition-colors duration-200">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-white/50 text-lg italic mb-5 leading-relaxed">
                    {filteredPosts[0].subtitle}
                  </p>
                  <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5 text-white/40 text-sm">
                      <span className="flex items-center gap-1.5"><Clock size={14} />{filteredPosts[0].readTime}</span>
                      <span>{filteredPosts[0].date}</span>
                    </div>
                    <span className="flex items-center gap-2 text-teal-400 font-medium group-hover:gap-3 transition-all duration-200">
                      Read Article <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Grid of remaining posts */}
      {filteredPosts.length > 1 && (
        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.slice(1).map((post, index) => (
                <div key={post.id} className={index === 0 ? "md:col-span-2" : ""}>
                  <BlogCard post={post} emphasis={index === 0} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state */}
      {filteredPosts.length === 0 && (
        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto text-center py-20">
            <BookOpen size={40} className="text-white/20 mx-auto mb-4" />
            <p className="text-white/40 text-lg">No articles found for this filter.</p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#0d1b2e] border-t border-white/10 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-teal-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Practice Freedom Calculator
          </p>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-6">
            See what the model looks like for your caseload.
          </h2>
          <p className="text-white/60 text-lg mb-8">
            No email required. Just your numbers. About two minutes.
          </p>
          <a
            href="https://launch.mikebeverly.life"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-8 py-4 transition-colors duration-200"
          >
            Open the Calculator <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
