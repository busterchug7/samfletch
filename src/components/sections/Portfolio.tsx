"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioProjects } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#F4F4F5]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-4 block">
            Our Work
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Built for Real Businesses
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto text-base leading-relaxed">
            Every project is custom — tailored to the industry, the audience,
            and the goals of the business we&apos;re building for.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.slice(0, 3).map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.08}>
              <motion.div
                className="group relative overflow-hidden rounded-lg bg-white border border-[#E4E4E7] cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.name} website screenshot`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-[#C9A84C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 border border-white text-white text-sm font-medium rounded opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      View Project →
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3
                      className="text-[#0A0A0A] font-semibold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {project.name}
                    </h3>
                    <span className="shrink-0 text-xs text-[#C9A84C] border border-[#C9A84C]/30 px-2 py-0.5 rounded-full">
                      {project.industry}
                    </span>
                  </div>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
