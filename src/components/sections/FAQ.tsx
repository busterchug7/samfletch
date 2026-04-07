"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Every project is priced based on your specific needs, but we keep our rates significantly lower than traditional agencies — because we're a lean, university-built team with no bloated overheads. Get in touch for a free quote tailored to your business.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are designed, built, and launched within 2–4 weeks from the start of the project. Larger or more complex builds may take a little longer, but we'll always give you a clear timeline upfront.",
  },
  {
    question: "Will my website show up on Google?",
    answer:
      "Yes. Every website we build is optimised for search engines (SEO) from day one — clean code, fast load times, proper metadata, and mobile responsiveness. We give your business the best possible foundation to rank and get found.",
  },
  {
    question: "Do I need to be technical to work with you?",
    answer:
      "Not at all. We handle everything — design, development, and launch. You just tell us what you need and we'll take care of the rest. We keep communication clear and jargon-free throughout the whole process.",
  },
  {
    question: "What happens after my website goes live?",
    answer:
      "We don't disappear after launch. We offer ongoing support and can make updates whenever you need them. Whether it's adding new content, tweaking the design, or expanding your site as your business grows — we've got you covered.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Background image layer */}
      <div
        className="absolute inset-[-30%] z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-[#0A0A0A]/82" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <ScrollReveal className="mb-14 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-4 block">
            FAQ
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#F5F5F5]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Got Questions?
          </h2>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="border border-[#2A2A2A] rounded-lg overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-[#141414] hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer border-none"
                >
                  <span className="text-[#F5F5F5] font-medium pr-4">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-[#C9A84C] shrink-0 text-lg"
                  >
                    ↓
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 py-5 border-t border-[#2A2A2A] bg-[#0f0f0f]">
                        <p className="text-[#9CA3AF] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[#6B7280] text-sm">
            Something else?{" "}
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-[#C9A84C] hover:underline cursor-pointer bg-transparent border-none font-medium"
            >
              Speak with a developer
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
