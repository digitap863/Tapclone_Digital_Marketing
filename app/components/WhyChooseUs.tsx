"use client";

import React from "react";

const valuePillars = [
  {
    title: "Creativity & Data Synergy",
    desc: "Combining bold creative content with campaign metrics to attract high-intent audiences and maximize budgets.",
    accentColor: "#6EE31A",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    ),
  },
  {
    title: "Full-Funnel Campaign Execution",
    desc: "From initial campaign planning and content execution to active daily optimization and transparent reporting.",
    accentColor: "#8B5CF6",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Trusted Growth Partnerships",
    desc: "We align directly as your dedicated growth partner, committing to sustainable customer acquisition and scaling.",
    accentColor: "#6EE31A",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const handleContactScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#contact");
    }
  };

  return (
    <section
      id="why-choose-us"
      className="py-24 px-6 sm:px-8 lg:px-12 bg-zinc-50/50 border-t border-zinc-200/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div className="lg:col-span-6 space-y-6">
            <div
              className="inline-flex items-center px-3.5 py-1 rounded-full border"
              style={{ background: "rgba(110,227,26,0.08)", borderColor: "rgba(110,227,26,0.3)" }}
            >
              <span className="text-xs font-bold tracking-wide" style={{ color: "#4ab012" }}>Why Choose Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight">
              Why Choose <br />
              <span className="text-[#4ab012]">
                Tapclone?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
              At Tapclone, we believe every business deserves a marketing strategy that delivers real results. Our approach combines creativity, data, and the latest digital marketing techniques to help you attract the right audience, generate quality leads, and achieve long-term business growth.
            </p>
            <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
              From planning and execution to optimization and reporting, we&apos;re committed to being your trusted growth partner every step of the way.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={handleContactScroll}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-all cursor-pointer"
                style={{ background: "#6EE31A", color: "#000000", boxShadow: "0 4px 20px rgba(110,227,26,0.25)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#5ecc16")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#6EE31A")}
              >
                Work With Us ➔
              </a>
            </div>
          </div>

          {/* Right: Value Pillars */}
          <div className="lg:col-span-6 space-y-5">
            {valuePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="flex gap-5 bg-white p-6 rounded-2xl border border-zinc-200/50 shadow-sm transition-all duration-300"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = pillar.accentColor + "50";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px rgba(0,0,0,0.06)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(228,228,231,0.5)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 2px rgba(0,0,0,0.05)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: pillar.accentColor + "15", color: pillar.accentColor }}
                >
                  {pillar.icon}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-zinc-900 text-base">{pillar.title}</h4>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
