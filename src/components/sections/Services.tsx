"use client";

import {
  FaPaintbrush,
  FaShareNodes,
  FaMagnifyingGlass,
  FaScrewdriverWrench,
} from "react-icons/fa6";
import { services } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  FaPaintbrush: <FaPaintbrush size={22} />,
  FaShareNodes: <FaShareNodes size={22} />,
  FaMagnifyingGlass: <FaMagnifyingGlass size={22} />,
  FaScrewdriverWrench: <FaScrewdriverWrench size={22} />,
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-[7.5rem] px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <div className="section-header">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-4 block">
              What We Do
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Everything Your Business
              <br />
              Needs Online
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto text-base leading-relaxed">
              From first impression to final conversion — we handle the full picture.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="group bg-[#FAFAFA] border border-[#E4E4E7] rounded-lg p-6 h-full hover:border-[#C9A84C]/60 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] mb-5 group-hover:bg-[#C9A84C]/20 transition-colors duration-300">
                  {iconMap[service.iconName]}
                </div>
                <h3
                  className="text-[#0A0A0A] font-semibold text-lg mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.title}
                </h3>
                <p className="text-[#6B7280] text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
