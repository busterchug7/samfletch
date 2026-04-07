import { NAV_LINKS, CONTACT_EMAIL } from "@/lib/constants";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div>
            <p
              className="text-xl tracking-tight mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="text-[#F5F5F5]">Doug</span>
              <span className="text-[#C9A84C]">Designs</span>
            </p>
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs">
              Custom websites that look great, perform fast, and grow your
              business. Built for real industries, not just portfolios.
            </p>
          </div>

          {/* Col 2: Nav links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#9CA3AF] mb-4 font-medium">
              Navigation
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & socials */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#9CA3AF] mb-4 font-medium">
              Get in Touch
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[#C9A84C] hover:text-[#a8873c] transition-colors text-sm block mb-6"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="flex gap-4">
              {/* TODO: Replace href values with real social URLs */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#9CA3AF] hover:text-[#C9A84C] transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#9CA3AF] hover:text-[#C9A84C] transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="text-[#9CA3AF] hover:text-[#C9A84C] transition-colors"
              >
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#9CA3AF] text-xs">
            © {year} DougDesigns. All rights reserved.
          </p>
          <p className="text-[#9CA3AF] text-xs">
            Custom websites for businesses that mean business.
          </p>
        </div>
      </div>
    </footer>
  );
}
