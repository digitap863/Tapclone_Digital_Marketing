"use client";

import React from "react";

// const valuePillars = [
//   {
//     title: "Creativity & Data Synergy",
//     desc: "Combining bold creative content with campaign metrics to attract high-intent audiences and maximize budgets.",
//     accentColor: "#6EE31A",
//     icon: (
//       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Full-Funnel Campaign Execution",
//     desc: "From initial campaign planning and content execution to active daily optimization and transparent reporting.",
//     accentColor: "#8B5CF6",
//     icon: (
//       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Trusted Growth Partnerships",
//     desc: "We align directly as your dedicated growth partner, committing to sustainable customer acquisition and scaling.",
//     accentColor: "#6EE31A",
//     icon: (
//       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//       </svg>
//     ),
//   },
// ];

export default function WhyChooseUs() {
  const handleContactScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "/digitalmarketing/#contact");
    }
  };

  return (
    <section
      id="why-choose-us"
      className="py-24 px-6 sm:px-8 lg:px-12 bg-zinc-50/50 border-t border-zinc-200/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="">

          {/* Left: Text */}
          <div className="lg:col-span-6 space-y-6">
            <div
              className="inline-flex items-center px-3.5 py-1 rounded-full border"
              style={{ background: "rgba(110,227,26,0.08)", borderColor: "rgba(110,227,26,0.3)" }}
            >
              <span className="text-xs font-bold tracking-wide" style={{ color: "#4ab012" }}>Why Choose Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight">
             Numbers That  <span style={{ color: "#4ab012" }}> Speak </span> <br />
              
            </h2>

            <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
             We don't just run campaigns - we build growth engines for your business.
            </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { val: "500+", title: "CLIENTS" },
            { val: "98%", title: "CLIENT SATISFACTION" },
            { val: "7+", title: "YEARS IN KERALA" },
            { val: "2x", title: "AVG. TRAFFIC GROWTH" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-zinc-50/60 p-6 rounded-2xl border border-zinc-200/50 flex flex-col justify-center items-center h-40 shadow-sm transition-all duration-300 hover:bg-white hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] hover:border-[#6EE31A]/40"
            >
              <div className="text-4xl font-extrabold text-[#4ab012] mb-2 tracking-tight">
                {stat.val}
              </div>
              <h4 className="text-[10px] sm:text-xs font-bold text-zinc-700 uppercase tracking-widest text-center leading-relaxed">
                {stat.title}
              </h4>
            </div>
          ))}
        </div>

            <div className="pt-2 flex flex-col items-center justify-center">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-enquiry", { detail: { service: "General Inquiry" } }))}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-all cursor-pointer"
                style={{ background: "#6EE31A", color: "#000000", boxShadow: "0 4px 20px rgba(110,227,26,0.25)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#5ecc16")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#6EE31A")}
              >
                Enquire Now ➔
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
