"use client";

import { motion, type Variants, animate, useInView } from "framer-motion";
import Image from "next/image";
import { FiGlobe, FiPhone, FiMapPin } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

/* ── Rotating pain-point phrases ── */
const phrases = [
  "No website holding you back?",
  "Outdated design losing leads?",
  "Low conversions costing you sales?",
  "Competitors outranking you online?",
];

/* ── Animated counter ── */
function AnimatedCounter({
  target,
  suffix,
  shouldStart,
}: {
  target: number;
  suffix: string;
  shouldStart: boolean;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    const ctrl = animate(0, target, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.floor(v)),
    });
    return ctrl.stop;
  }, [target, shouldStart]);
  return <span>{count}{suffix}</span>;
}

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

  /* Stats counter trigger */
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });

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
            <button
              onClick={() => scrollToSection("#contact")}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#C9A84C] hover:text-[#0A0A0A] transition-colors duration-200 cursor-pointer bg-transparent border-none w-fit group"
            >
              Get your free website design
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>
            <span className="text-[10px] uppercase tracking-widest text-[#9CA3AF]">
              ◆ See your new website in under 5 days
            </span>
          </motion.div>

          {/* Animated stats */}
          <motion.div
            variants={item}
            ref={statsRef}
            className="mt-12 flex gap-8"
          >
            {[
              { target: 50, suffix: "+", label: "Sites Launched" },
              { target: 12, suffix: "+", label: "Industries Served" },
              { target: 100, suffix: "%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl font-bold text-[#C9A84C]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} shouldStart={statsInView} />
                </p>
                <p className="text-[10px] uppercase tracking-widest text-[#9CA3AF] mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
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

          {/* Floating social proof card */}
          <motion.div
            className="absolute bottom-16 left-4 bg-white/95 backdrop-blur-md border border-[#E4E4E7] rounded-xl px-5 py-4 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
          >
            <p
              className="text-3xl font-bold text-[#C9A84C]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              +147%
            </p>
            <p className="text-[11px] uppercase tracking-widest text-[#6B7280] mt-0.5">
              Avg. lead increase
            </p>
            <div className="flex items-center gap-1.5 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              <span className="text-[10px] text-[#9CA3AF] uppercase tracking-wider">
                Across all clients
              </span>
            </div>
          </motion.div>

          {/* University badge */}
          <motion.div
            className="absolute top-20 left-8 bg-white/95 backdrop-blur-md border border-[#E4E4E7] rounded-full px-4 py-2 shadow-lg"
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
