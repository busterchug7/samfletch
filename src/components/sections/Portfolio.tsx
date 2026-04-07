"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { portfolioProjects } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

const shuffle = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [projects, setProjects] = useState(portfolioProjects);

  useEffect(() => {
    if (!isInView) return;

    const shuffleProjects = () => {
      setProjects(shuffle(portfolioProjects));
      timeoutRef.current = setTimeout(shuffleProjects, 7000);
    };

    shuffleProjects();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isInView]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 lg:py-[7.5rem] px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <div className="section-header">
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
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                transition={{ duration: 1.5, type: "spring" }}
              >
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
                      <span className="px-4 py-2 border border-white bg-white text-black text-sm font-medium rounded opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
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
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
