"use client";

import React, { useState } from "react";

// Accent colors cycle: white → lime green → white → purple → repeat
const accentColors = [
  "text-white",
  "text-[#6EE31A]",   // lime green
  "text-white",
  "text-[#8B5CF6]",   // purple-violet
  "text-white",
];

const iconColors = [
  "text-white",
  "text-[#6EE31A]",
  "text-white",
  "text-[#8B5CF6]",
  "text-white",
];

const marketingItems = [
  {
    label: "Performance Marketing",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    label: "SEO",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    label: "Social Media Marketing",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742l5.136-2.568m0 7.653l-5.136-2.568m-5.12 2.73a3 3 0 110-6 3 3 0 010 6zm10.24-8.618a3 3 0 110-6 3 3 0 010 6zm0 10.24a3 3 0 110-6 3 3 0 010 6z" />
      </svg>
    ),
  },
  {
    label: "Content Marketing",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    label: "Email Marketing",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

// Separator diamond between items
function Separator() {
  return (
    <span className="text-zinc-600 text-xl font-black select-none px-2">✦</span>
  );
}

export default function MarketingMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full overflow-hidden select-none relative z-20 shadow-xl"
      style={{ background: "#0a0a0a" }}
    >
      {/* Subtle diagonal line texture overlay matching reference */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 31px)",
        }}
      />

      <div className="flex w-max relative py-5">
        {/* Track 1 */}
        <div
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
          className="flex animate-marquee shrink-0 items-center gap-0 px-8"
        >
          {marketingItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <div
                className={`flex items-center gap-3 font-black uppercase tracking-wider text-lg sm:text-xl md:text-2xl lg:text-3xl whitespace-nowrap ${accentColors[idx % accentColors.length]}`}
                style={{ fontFamily: "'Inter', 'Arial Black', sans-serif", letterSpacing: "0.04em" }}
              >
                <span className={iconColors[idx % iconColors.length]}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
              <Separator />
            </React.Fragment>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless loop) */}
        <div
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
          className="flex animate-marquee shrink-0 items-center gap-0 px-8"
          aria-hidden="true"
        >
          {marketingItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <div
                className={`flex items-center gap-3 font-black uppercase tracking-wider text-lg sm:text-xl md:text-2xl lg:text-3xl whitespace-nowrap ${accentColors[idx % accentColors.length]}`}
                style={{ fontFamily: "'Inter', 'Arial Black', sans-serif", letterSpacing: "0.04em" }}
              >
                <span className={iconColors[idx % iconColors.length]}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
              <Separator />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
