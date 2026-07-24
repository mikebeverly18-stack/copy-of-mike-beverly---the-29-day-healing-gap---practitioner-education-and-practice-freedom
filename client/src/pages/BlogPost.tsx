/**
 * Individual blog post page — Mike Beverly | The 29-Day Healing Gap
 * Design: Deep navy + teal + gold. Playfair Display headlines. Long-form reading layout.
 * Renders full post content from blogPosts data file.
 */

import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { getBlogPost, blogPosts, type BlogPost } from "@/data/blogPosts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";

function formatContent(content: string) {
  // Split content into paragraphs and handle **bold** markdown
  const paragraphs = content.split("\n\n");

  const renderInlineBold = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);

    return parts.map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={j} className="text-white font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return paragraphs.map((para, i) => {
    if (!para.trim()) return null;

    if (para === "---") {
      return <hr key={i} className="my-10 border-white/10" />;
    }

    if (para.startsWith("## ")) {
      return (
        <h3
          key={i}
          className="font-['Playfair_Display'] text-2xl font-bold text-white mt-10 mb-4"
        >
          {para.slice(3)}
        </h3>
      );
    }

    // Handle headings (lines starting with **)
    if (para.startsWith("**") && para.endsWith("**") && !para.slice(2, -2).includes("**")) {
      return (
        <h3
          key={i}
          className="font-['Playfair_Display'] text-2xl font-bold text-white mt-10 mb-4"
        >
          {para.slice(2, -2)}
        </h3>
      );
    }

    const listItems = para.split("\n");
    if (listItems.every((item) => item.startsWith("- "))) {
      return (
        <ul key={i} className="mb-7 space-y-3 pl-6 text-white/75 text-lg leading-relaxed list-disc marker:text-teal-400">
          {listItems.map((item, j) => (
            <li key={j}>{renderInlineBold(item.slice(2))}</li>
          ))}
        </ul>
      );
    }

    if (para.startsWith("*") && para.endsWith("*") && !para.startsWith("**")) {
      return (
        <p key={i} className="text-white/55 text-base leading-relaxed italic mb-5">
          {renderInlineBold(para.slice(1, -1))}
        </p>
      );
    }

    return (
      <p key={i} className="text-white/75 text-lg leading-relaxed mb-6">
        {renderInlineBold(para)}
      </p>
    );
  });
}

function RelatedPost({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="group flex gap-4 p-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-sm transition-all duration-200 cursor-pointer">
        <div className="flex-1 min-w-0">
          <p className="text-teal-400 text-xs uppercase tracking-widest font-semibold mb-1">
            {post.category}
          </p>
          <h4 className="font-['Playfair_Display'] text-white text-base font-bold leading-snug group-hover:text-teal-200 transition-colors line-clamp-2">
            {post.title}
          </h4>
          <p className="text-white/40 text-sm mt-1">{post.readTime}</p>
        </div>
        <ArrowRight size={16} className="text-white/30 group-hover:text-teal-400 mt-1 flex-shrink-0 transition-colors" />
      </div>
    </Link>
  );
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = getBlogPost(params.slug);

  useEffect(() => {
    if (!post) return;

    const previousTitle = document.title;
    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const createdDescription = !description;
    const previousDescription = description?.getAttribute("content") ?? "";

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    document.title = post.seoTitle ?? `${post.title} | The 29-Day Healing Gap`;
    description.content = post.metaDescription ?? post.excerpt;

    return () => {
      document.title = previousTitle;
      if (createdDescription) {
        description?.remove();
      } else if (description) {
        description.content = previousDescription;
      }
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a1628] text-white">
        <Navigation />
        <div className="max-w-3xl mx-auto px-6 py-40 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl font-bold text-white mb-4">
            Article not found
          </h1>
          <p className="text-white/60 mb-8">
            This article may have been moved or removed.
          </p>
          <Link href="/blog">
            <span className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium transition-colors">
              <ArrowLeft size={16} /> Back to Blog
            </span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related posts (same category or same audience, excluding current)
  const related = blogPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        (p.category === post.category || p.audience === post.audience)
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navigation />

      {/* Back nav */}
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-8">
        <Link href="/blog">
          <span className="inline-flex items-center gap-2 text-white/40 hover:text-teal-400 text-sm font-medium transition-colors cursor-pointer">
            <ArrowLeft size={14} /> All Articles
          </span>
        </Link>
      </div>

      {/* Article header */}
      <article className="max-w-4xl mx-auto px-6 pb-16">
        <header className="mb-12">
          <div className="relative mb-7 overflow-hidden border-y border-white/10 py-3">
            <span
              aria-hidden="true"
              className="absolute -top-8 right-0 select-none font-['Playfair_Display'] text-8xl font-bold leading-none text-amber-300/[0.13]"
            >
              29
            </span>
            <div className="relative flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em]">
              <span className="text-teal-400">29-Day Healing Gap</span>
              <span className="h-px w-8 bg-teal-400/50" />
              <span className="text-white/45">Clinical Field Note</span>
            </div>
          </div>
          {/* Category badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-teal-500/20 text-teal-300">
              {post.category}
            </span>
            {post.audience === "practitioners" && (
              <span className="text-xs text-teal-400/70 uppercase tracking-widest font-medium">
                For Practitioners
              </span>
            )}
            {post.audience === "patients" && (
              <span className="text-xs text-amber-400/70 uppercase tracking-widest font-medium">
                For Patients
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            {post.title}
          </h1>

          {/* Subtitle */}
          <p className="text-white/55 text-xl italic leading-relaxed mb-8 font-light">
            {post.subtitle}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-6 text-white/40 text-sm pb-8 border-b border-white/10">
            <span className="flex items-center gap-2">
              <span className="text-white/70 font-semibold">Mike Beverly</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readTime}
            </span>
          </div>

          {/* Cover image */}
          {post.image && (
            <div className="mt-10 -mx-6 md:mx-0 overflow-hidden rounded-sm">
              <img
                src={post.image}
                alt={post.title}
                className="w-full object-cover max-h-[520px] object-center"
              />
            </div>
          )}
        </header>

        {/* Article body */}
        <div className="max-w-2xl">
          {post.slug === "the-burnout-nobody-talks-about-in-hands-on-practice" && (
            <aside className="mb-10 border-y border-teal-400/30 bg-teal-500/[0.07] px-6 py-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                Practitioner Freedom Note
              </p>
              <p className="font-['Playfair_Display'] text-2xl leading-snug text-white">
                Your hands are part of the care model. Protecting them is part of practice sustainability.
              </p>
            </aside>
          )}
          {formatContent(post.content)}
        </div>

        {/* Author signature */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full bg-teal-700/30 border border-teal-500/30 flex items-center justify-center flex-shrink-0">
              <span className="text-teal-400 font-bold text-lg font-['Playfair_Display']">M</span>
            </div>
            <div>
              <p className="text-white font-semibold text-base mb-1">Mike Beverly</p>
              <p className="text-white/50 text-sm leading-relaxed max-w-lg">
                Author of <em>The Healing Divide</em>. Works with integrative, functional, naturopathic, chiropractic, and hands-on practitioners to bridge the 29-Day Healing Gap and build sustainable practice models.
              </p>
              <a
                href="https://launch.mikebeverly.life"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 text-sm font-medium mt-3 transition-colors"
              >
                Practice Freedom Calculator <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-[#0d1b2e] border-t border-white/10 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-teal-400 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
              Continue Reading
            </p>
            <h2 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((p) => (
                <RelatedPost key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#0a1628] border-t border-white/10 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-teal-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Practice Freedom Calculator
          </p>
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-white mb-5">
            See what the model looks like for your caseload.
          </h2>
          <p className="text-white/60 text-lg mb-8">
            No email required. Just your numbers. About two minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://launch.mikebeverly.life"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-8 py-4 transition-colors duration-200"
            >
              Open the Calculator <ArrowRight size={18} />
            </a>
            <Link href="/blog">
              <span className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-teal-500/50 text-white/70 hover:text-white font-medium px-8 py-4 transition-all duration-200 cursor-pointer">
                <ArrowLeft size={16} /> Back to Blog
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
