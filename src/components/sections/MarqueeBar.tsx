"use client";

import { marqueeItems } from "@/lib/data";

export default function MarqueeBar() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="bg-[#F4F4F5] border-y border-[#E4E4E7] py-4 overflow-hidden">
      <p className="sr-only">What we offer</p>
      <div className="flex" style={{ width: "max-content" }}>
        <ul className="flex items-center animate-marquee" aria-label="What we offer">
          {items.map((item, i) => (
            <li key={i} className="flex items-center">
              <span className="text-[#6B7280] text-sm uppercase tracking-widest whitespace-nowrap px-8">
                {item}
              </span>
              <span className="text-[#C9A84C] text-xs select-none">◆</span>
            </li>
          ))}
        </ul>
        <ul className="flex items-center animate-marquee" aria-hidden="true">
          {items.map((item, i) => (
            <li key={i} className="flex items-center">
              <span className="text-[#6B7280] text-sm uppercase tracking-widest whitespace-nowrap px-8">
                {item}
              </span>
              <span className="text-[#C9A84C] text-xs select-none">◆</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
