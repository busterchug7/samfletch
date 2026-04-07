"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { FiGlobe, FiPhone, FiMapPin } from "react-icons/fi";
import { useEffect, useState } from "react";
import { ShinyButton } from "@/components/ui/ShinyButton";

/* ── Rotating pain-point phrases ── */
const phrases = [
  "No website holding you back?",
  "Outdated design losing leads?",
  "Low conversions costing you sales?",
  "Competitors outranking you online?",
];

/* ── Framer variants ── */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Hero() {
  const scrollToSection = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  /* Rotating phrase */
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % phrases.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex bg-[#FAFAFA] overflow-hidden">

      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 lg:w-[55%] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #D4D4D8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Subtle gold ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-[#C9A84C]/8 blur-[80px] pointer-events-none" />

      {/* ════ LEFT COLUMN ════ */}
      <motion.div
        className="relative z-10 flex flex-col justify-between w-full lg:w-[55%] px-10 md:px-16 pt-20 pb-8"
        variants={container}
        initial="hidden"
        animate="show"
      >

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center">

          {/* Rotating pain-point */}
          <motion.div variants={item} className="mb-5 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A84C] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C9A84C]" />
            </span>
            <span
              className="text-xs uppercase tracking-[0.18em] text-[#6B7280]"
              style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s" }}
            >
              {phrases[phraseIndex]}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-6xl md:text-7xl lg:text-[5.5rem] leading-[1] tracking-tight text-[#0A0A0A] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            More Leads.
            <br />
            More Sales.
            <br />
            <span className="text-[#C9A84C]">Better Websites.</span>
          </motion.h1>

          {/* Animated gold rule */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
            className="h-[2px] bg-[#C9A84C] mb-6"
          />

          {/* Try before you buy */}
          <motion.p
            variants={item}
            className="text-xl md:text-2xl tracking-[0.08em] uppercase text-[#0A0A0A] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Try before you buy.
          </motion.p>

          {/* Body text */}
          <motion.p
            variants={item}
            className="text-[#6B7280] text-base leading-relaxed max-w-md mb-10"
          >
            We design your website first—so you can see exactly what
            you&apos;re getting before you commit. No risk, no pressure.
          </motion.p>

          {/* CTA */}
          <motion.div variants={item} className="flex flex-col gap-3 w-fit">
            <ShinyButton onClick={() => scrollToSection("#contact")}>
              Get your free website design →
            </ShinyButton>
            <span className="text-[10px] uppercase tracking-widest text-[#9CA3AF]">
              ◆ Limited spots available this month
            </span>
          </motion.div>

        </div>

        {/* Bottom info strip */}
        <motion.div
          variants={item}
          className="flex flex-wrap gap-6 mt-12 pt-6 border-t border-[#E4E4E7]"
        >
          {[
            { icon: <FiGlobe size={12} />, text: "dougdesigns.com" },
            { icon: <FiPhone size={12} />, text: "+44 (0) 7700 900000" },
            { icon: <FiMapPin size={12} />, text: "Exeter, United Kingdom" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-1.5 text-[#9CA3AF] text-xs">
              <span className="text-[#C9A84C]">{icon}</span>
              {text}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ════ RIGHT COLUMN — angled image ════ */}
      <div className="hidden lg:block absolute right-0 top-0 h-full w-[50%] drop-shadow-[-12px_0_40px_rgba(0,0,0,0.18)]">
        <motion.div
          className="relative h-full w-full overflow-hidden"
          style={{ clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1920&q=80"
            alt="Web design workspace"
            fill
            priority
            className="object-cover scale-105 brightness-110 contrast-105"
            style={{ objectPosition: "35% center" }}
            sizes="50vw"
          />
          {/* Thin gradient bleed — just enough to blend the edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA]/30 via-transparent to-transparent" />
          {/* Subtle gold glow on the right panel edge */}
          <div className="absolute inset-y-0 left-[10%] w-px bg-gradient-to-b from-transparent via-[#C9A84C]/40 to-transparent" />

          {/* Stats bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 z-10"
            style={{
              background: "rgba(7, 8, 16, 0.62)",
              borderTop: "1px solid rgba(201, 168, 76, 0.25)",
              backdropFilter: "blur(6px)",
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative grid grid-cols-3 text-center py-5 px-6">
              {/* Divider 1 */}
              <span className="absolute left-1/3 top-1/2 -translate-y-1/2 w-px h-6 bg-white/10" />
              {/* Divider 2 */}
              <span className="absolute left-2/3 top-1/2 -translate-y-1/2 w-px h-6 bg-white/10" />

              {[
                { value: "50+",   label: "Websites Designed" },
                { value: "100%",  label: "Design Satisfaction" },
                { value: "48hr",  label: "First Concept Delivered" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p
                    className="text-3xl text-white leading-none"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {value}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-white/55 mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* University badge */}
          <motion.div
            className="absolute top-20 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-[#E4E4E7] rounded-full px-4 py-2 shadow-lg"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-[10px] uppercase tracking-widest text-[#6B7280]">
              🎓 Founded at the University of Exeter
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
