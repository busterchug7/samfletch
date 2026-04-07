export const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";
// TODO: Set NEXT_PUBLIC_FORMSPREE_ID in .env.local → "https://formspree.io/f/XXXXXXXX"

export const CONTACT_EMAIL = "hello@dougdesigns.com"; // TODO: Replace with real email

export const NAV_LINKS = [
  { label: "About",    href: "#about" },
  { label: "Work",     href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process",  href: "#process" },
  { label: "Contact",  href: "#contact" },
];

export const BUSINESS_TYPES = [
  "Barber Shop / Salon",
  "Law Firm",
  "Restaurant / Cafe",
  "Construction",
  "Medical / Healthcare",
  "Real Estate",
  "Retail Store",
  "Fitness / Gym",
  "Other",
];
