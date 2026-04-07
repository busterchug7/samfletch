"use client";

import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "50+", label: "Sites Launched" },
  { value: "12+", label: "Industries Served" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#F4F4F5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <ScrollReveal direction="left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-4 block">
              About Us
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Built by Developers.
              <br />
              <span className="text-[#C9A84C]">Driven by Results.</span>
            </h2>
            <div className="space-y-5 text-[#6B7280] leading-relaxed">
              <p>
                DougDesigns was founded by a team of third-year software
                developers at the University of Exeter. What started as a shared
                frustration quickly became a mission.
              </p>
              <p>
                We kept seeing the same problem — local businesses with no
                online presence, or outdated websites that were doing more harm
                than good. Potential customers were searching, not finding, and
                moving on. Leads were being lost before a single conversation
                happened.
              </p>
              <p>
                So we built DougDesigns to fix that. We combine real engineering
                with sharp design to deliver websites that don&apos;t just look
                good — they work hard for your business every single day.
              </p>
              <p>
                And because we&apos;re a lean, university-built team with low
                overheads, we pass those savings directly to you. You get a
                professional, high-converting website at a price that won&apos;t
                break the bank — no agency markups, no hidden costs.
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Stats + quote card */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="bg-white border border-[#E4E4E7] rounded-2xl p-10 space-y-8 shadow-sm">
              <div className="border-l-2 border-[#C9A84C] pl-5">
                <p className="text-[#0A0A0A] text-lg leading-relaxed italic">
                  &ldquo;Too many great businesses were invisible online. We
                  knew we could change that.&rdquo;
                </p>
                <p className="text-[#C9A84C] text-xs uppercase tracking-widest mt-3">
                  — Founders, DougDesigns
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#E4E4E7]">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p
                      className="text-3xl font-bold text-[#C9A84C]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
