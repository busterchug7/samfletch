"use client";

import ScrollReveal from "./ScrollReveal";

export default function CtaBanner() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 lg:py-[7.5rem] px-6 bg-[#C9A84C] overflow-hidden">
      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "128px",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#a8873c]/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[#a8873c]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="section-header--gold">
            <span className="text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/60 mb-4 block font-medium">
              Ready to Grow?
            </span>
            <h2
              className="text-4xl md:text-6xl font-bold text-[#0A0A0A] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to grow your
              <br />
              business online?
            </h2>
          </div>
          <p className="text-[#0A0A0A]/70 max-w-xl mx-auto mb-10 text-base leading-relaxed">
            Every week you go without a professional website is a week your
            competitors are winning clients you should have. Let&apos;s change
            that.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-[#0A0A0A] text-[#F5F5F5] font-semibold rounded hover:bg-[#1A1A1A] transition-all duration-200 hover:scale-105 active:scale-100 cursor-pointer border-none text-sm tracking-wide"
            >
              Start Your Project →
            </button>
            <a
              href="mailto:hello@dougdesigns.com" /* TODO: Replace with real email */
              className="px-8 py-4 border-2 border-[#0A0A0A] text-[#0A0A0A] font-medium rounded hover:bg-[#0A0A0A]/10 transition-all duration-200 text-sm tracking-wide inline-flex items-center justify-center"
            >
              Email Us Directly
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
