"use client";

import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 lg:px-12 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top: Text Content in 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <div
              className="inline-flex items-center px-3.5 py-1 rounded-full border mb-2"
              style={{ background: "rgba(110,227,26,0.08)", borderColor: "rgba(110,227,26,0.3)" }}
            >
              <span className="text-xs font-bold tracking-wide" style={{ color: "#4ab012" }}>
                About TapClone
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight">
              Evolving Brands Through <br />
              <span className="text-[#4ab012]">
                Digital Innovation.
              </span>
            </h2>
            <p className="text-zinc-500 leading-relaxed text-sm sm:text-base">
              TapClone started as a creative digital marketing agency in 2018. Our creativity, innovation, and quantifiable results have helped to evolve us from a basic advertising agency into a full-scale digital marketing and SEO agency based in Kochi. Over the past 5 years, we have worked successfully for 500+ clients.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:pt-[76px]">
            <p className="text-zinc-500 leading-relaxed text-sm sm:text-base">
              Our team is made up of creative professionals that shape our fast-paced, media agnostic environment, where ideas bounce freely, traditions are re-defined, and we explore the limitless possibilities of digital. Through the fields of SEO and PPC, Google My Business, social media strategy, branding, and web design, we ensure that every marketing strategy we develop works in tandem with your brand vision and goals.
            </p>
            <p className="text-zinc-500 leading-relaxed text-sm sm:text-base">
              TapClone is based in Kochi and works across India and UAE clients. We combine storytelling, technology, and strategic thinking to develop innovative solutions ultimately capturing the audience and potentially increasing long term growth in a competitive digital landscape.
            </p>
          </div>
        </div>

        {/* Bottom: 4 Stats Cards in a Single Row following the site's white theme design pattern */}
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
      </div>
    </section>
  );
}
