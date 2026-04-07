"use client";

import { useState, FormEvent } from "react";
import { FORMSPREE_ENDPOINT, CONTACT_EMAIL, BUSINESS_TYPES } from "@/lib/constants";
import { FaEnvelope, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      // Fallback: open mail client if Formspree not configured
      const form = e.currentTarget;
      const data = new FormData(form);
      const body = `Name: ${data.get("name")}\nBusiness Type: ${data.get("businessType")}\nMessage: ${data.get("message")}`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=Project Inquiry&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const fieldClass =
    "w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded px-4 py-3 text-[#F5F5F5] text-sm placeholder:text-[#9CA3AF]/50 focus:border-[#C9A84C] focus:outline-none transition-colors duration-200";

  return (
    <section id="contact" className="py-20 lg:py-[7.5rem] px-6 bg-[#141414] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-header--dark">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-4 block">
              Get Started
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Let&apos;s Build Something
              <br />
              <span className="text-[#C9A84C]">Together</span>
            </h2>
            <p className="text-[#9CA3AF] max-w-md mx-auto text-sm leading-relaxed">
              Tell us about your business and what you need. We&apos;ll get back
              to you within 24 hours.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="bg-[#0A0A0A] border border-[#C9A84C]/40 rounded-lg p-10 text-center">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] text-2xl mx-auto mb-4">
                  ✓
                </div>
                <h3
                  className="text-[#F5F5F5] text-xl font-semibold mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Message Received
                </h3>
                <p className="text-[#9CA3AF] text-sm">
                  Thanks for reaching out. We&apos;ll be in touch within 24
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs text-[#9CA3AF] uppercase tracking-widest mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs text-[#9CA3AF] uppercase tracking-widest mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@yourbusiness.com"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="businessType"
                    className="block text-xs text-[#9CA3AF] uppercase tracking-widest mb-2"
                  >
                    Business Type
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    className={`${fieldClass} appearance-none`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your industry...
                    </option>
                    {BUSINESS_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-[#141414]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs text-[#9CA3AF] uppercase tracking-widest mb-2"
                  >
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What does your business do? Do you have an existing site? What are your goals?"
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please email us directly at{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-[#C9A84C] underline"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 bg-[#C9A84C] text-[#0A0A0A] font-semibold rounded hover:bg-[#a8873c] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.01] active:scale-100 cursor-pointer border-none text-sm tracking-wide"
                >
                  {status === "loading" ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>

          {/* Contact info — 2 cols */}
          <div className="lg:col-span-2 space-y-8 lg:pt-2">
            {/* Email */}
            <div>
              <p className="text-xs uppercase tracking-widest text-[#9CA3AF] mb-3">
                Email Us Directly
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 text-[#C9A84C] hover:text-[#a8873c] transition-colors group"
              >
                <FaEnvelope size={16} className="shrink-0" />
                <span className="text-sm group-hover:underline">
                  {CONTACT_EMAIL}
                </span>
              </a>
            </div>

            {/* Response time */}
            <div className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg p-5">
              <p className="text-xs uppercase tracking-widest text-[#9CA3AF] mb-2">
                Response Time
              </p>
              <p className="text-[#F5F5F5] text-sm font-medium mb-1">
                Within 24 hours
              </p>
              <p className="text-[#9CA3AF] text-xs leading-relaxed">
                We review every inquiry personally. No auto-responders, no
                phone trees.
              </p>
            </div>

            {/* What to expect */}
            <div>
              <p className="text-xs uppercase tracking-widest text-[#9CA3AF] mb-3">
                What Happens Next
              </p>
              <ul className="space-y-2">
                {[
                  "We review your project details",
                  "Free 30-min discovery call",
                  "Custom proposal within 48hrs",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#9CA3AF]">
                    <span className="text-[#C9A84C] text-xs mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs uppercase tracking-widest text-[#9CA3AF] mb-3">
                Follow Along
              </p>
              <div className="flex gap-4">
                {/* TODO: Replace with real social URLs */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9CA3AF] hover:text-[#C9A84C] transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9CA3AF] hover:text-[#C9A84C] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9CA3AF] hover:text-[#C9A84C] transition-colors"
                  aria-label="X / Twitter"
                >
                  <FaXTwitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
