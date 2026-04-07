"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Logo — top left, always visible */}
      <a
        href="#"
        className="pointer-events-auto absolute top-4 left-6 text-xl tracking-tight select-none"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <span className="text-[#0A0A0A]">Doug</span>
        <span className="text-[#C9A84C]">Designs</span>
      </a>

      {/* Centered nav pill — constrained to the white 55% column on large screens */}
      <nav className="flex justify-center pt-3 lg:w-[55%]">
        <div
          className={`pointer-events-auto hidden md:flex items-center gap-8 px-8 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md border border-[#E4E4E7] shadow-sm"
              : "bg-white/80 backdrop-blur-sm border border-[#E4E4E7]/60"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="relative text-sm font-medium text-[#0A0A0A] hover:text-[#C9A84C] transition-colors duration-200 cursor-pointer bg-transparent border-none tracking-wide group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}

          {/* CTA inside pill — only on scroll */}
          <div className={`transition-all duration-300 overflow-hidden ${scrolled ? "max-w-[120px] opacity-100" : "max-w-0 opacity-0"}`}>
            <button
              onClick={() => handleNavClick("#contact")}
              className="ml-2 px-4 py-1.5 text-xs font-semibold bg-[#C9A84C] text-white rounded-full hover:bg-[#a8873c] transition-colors duration-200 cursor-pointer border-none whitespace-nowrap"
            >
              Get a Quote
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="pointer-events-auto md:hidden absolute top-4 right-6 flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#0A0A0A] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#0A0A0A] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#0A0A0A] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden bg-white/98 backdrop-blur-md border-b border-[#E4E4E7] px-6 pb-6 mt-16"
          >
            <div className="flex flex-col gap-4 pt-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-[#6B7280] hover:text-[#C9A84C] transition-colors text-base font-medium tracking-wide cursor-pointer bg-transparent border-none py-1"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-2 px-5 py-2.5 text-sm font-medium bg-[#C9A84C] text-white rounded hover:bg-[#a8873c] transition-colors cursor-pointer border-none w-full"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
