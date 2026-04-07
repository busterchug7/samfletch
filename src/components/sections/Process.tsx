"use client";

import { processSteps } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 bg-[#F4F4F5]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-4 block">
            How It Works
          </span>
          <h2
            className="text-4xl md:text-6xl font-bold text-[#0A0A0A] drop-shadow-[0_2px_12px_rgba(255,255,255,0.8)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            From First Call to{" "}
            <span className="text-[#C9A84C]">Live Site</span>
          </h2>
        </ScrollReveal>

        {/* Step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.08}>
              <div className="group relative bg-white border border-[#E4E4E7] shadow-sm rounded-2xl p-6 h-full hover:border-[#C9A84C]/60 hover:shadow-md transition-all duration-300">

                {/* Step number */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-3xl font-bold text-[#C9A84C]/40 group-hover:text-[#C9A84C]/70 transition-colors duration-300 leading-none"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.step}
                  </span>
                  {i < processSteps.length - 1 && (
                    <span className="hidden lg:block text-[#C9A84C]/40 text-lg absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      ›
                    </span>
                  )}
                </div>

                {/* Gold accent line */}
                <div className="w-6 h-0.5 bg-[#C9A84C] mb-4 group-hover:w-full transition-all duration-500" />

                {/* Title */}
                <h3
                  className="text-lg font-bold text-[#0A0A0A] mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
