"use client";

import { FaStar } from "react-icons/fa6";
import { testimonials } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

const featured = testimonials[0];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-[7.5rem] px-6 bg-[#F4F4F4]">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="section-header text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-4 block">
              Client Stories
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0A0A0A]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Don&apos;t Take Our Word for It
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <figure className="relative">
            {/* Oversized decorative quote mark */}
            <span
              aria-hidden
              className="absolute -top-6 -left-2 md:-left-8 text-[8rem] md:text-[11rem] leading-none text-[#C9A84C]/12 select-none pointer-events-none"
              style={{ fontFamily: "Georgia, serif" }}
            >
              &ldquo;
            </span>

            {/* Stars */}
            <div className="flex gap-1 mb-6 relative z-10">
              {Array.from({ length: featured.rating }).map((_, i) => (
                <FaStar key={i} className="text-[#C9A84C]" size={16} />
              ))}
            </div>

            {/* Quote body */}
            <blockquote
              className="relative z-10 text-xl md:text-2xl text-[#0A0A0A] leading-relaxed mb-8 font-light"
            >
              {featured.quote}
            </blockquote>

            {/* Result callout + attribution */}
            <figcaption className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-[#E4E4E7]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/25 flex items-center justify-center text-[#C9A84C] font-bold text-sm shrink-0">
                  {featured.name[0]}
                </div>
                <div>
                  <p className="text-[#0A0A0A] font-semibold text-sm">{featured.name}</p>
                  <p className="text-[#9CA3AF] text-xs">{featured.business}</p>
                </div>
              </div>

              {/* Inline result stat */}
              <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                60+ monthly bookings driven by the new site
              </div>
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </section>
  );
}
