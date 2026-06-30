"use client";

import React, { useState, useEffect } from "react";

const servicesList = [
  {
    title: "Social Media Marketing",
    desc: "Build brand awareness and customer engagement through powerful social media campaigns across Facebook, Instagram, LinkedIn, and more.",
    href: "https://www.tapclone.in/service/social-media-marketing",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742l5.136-2.568m0 7.653l-5.136-2.568m-5.12 2.73a3 3 0 110-6 3 3 0 010 6zm10.24-8.618a3 3 0 110-6 3 3 0 010 6zm0 10.24a3 3 0 110-6 3 3 0 010 6z" />
      </svg>
    ),
  },
  {
    title: "Search Engine Optimization",
    desc: "Improve search rankings, drive organic traffic, and increase online visibility so ready-to-buy clients can easily find you.",
    href: "https://www.tapclone.in/service/seo-company-kochi-kerala",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Performance Marketing & Paid Ads",
    desc: "ROI-focused advertising campaigns across Google, Meta, and LinkedIn designed to generate high-quality leads and optimize your budgets.",
    href: "https://www.tapclone.in/service/performance-marketing",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Content Marketing",
    desc: "Strategic content creation that educates your audience, builds authority, drives organic engagement, and supports business goals.",
    href: "https://www.tapclone.in/service/content-marketing",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Email Marketing",
    desc: "Stay connected with your target customers through personalized email journeys that drive repeat conversions and stronger loyalty.",
    href: "https://www.tapclone.in/service/email-marketing",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Video Production",
    desc: "Create impactful videos that engage your audience and showcase your brand. Tapclone delivers creative video content designed for websites, social media, and digital campaigns.",
    href: "https://www.tapclone.in/service/video-production",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Services() {
  // Modal opened via global event emitter
  const openModal = (serviceTitle: string) => {
    window.dispatchEvent(new CustomEvent("open-enquiry", { detail: { service: serviceTitle } }));
  };

  return (
    <section id="services" className="py-24 px-6 sm:px-8 lg:px-12 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(#80808008_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-xl">
            <div
              className="inline-flex items-center px-3.5 py-1 rounded-full border"
              style={{ background: "rgba(110,227,26,0.08)", borderColor: "rgba(110,227,26,0.3)" }}
            >
              <span className="text-xs font-bold tracking-wide" style={{ color: "#4ab012" }}>
                Growth Programs
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight">
              Data-Driven Marketing <br />
              <span className="text-[#4ab012]">
                Tailored for Scalability.
              </span>
            </h2>
          </div>
         
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <a
              key={idx}
              href={service.href}
              onClick={(e) => {
                e.preventDefault();
                openModal(service.title);
              }}
              className="group relative flex flex-col justify-between min-h-[280px] p-8 rounded-3xl bg-zinc-50/60 border border-zinc-200/50 transition-all duration-300 cursor-pointer"
              style={{ borderTopWidth: "2px", borderTopColor: "transparent" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderTopColor = "#6EE31A";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(0,0,0,0.08)";
                (e.currentTarget as HTMLElement).style.background = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderTopColor = "transparent";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.background = "rgba(250,250,250,0.6)";
              }}
            >
              <div className="space-y-4">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(110,227,26,0.1)", color: "#4ab012" }}
                >
                  {service.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-zinc-900 tracking-tight">{service.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{service.desc}</p>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="pt-6">
                <div
                  className="inline-flex items-center rounded-full pl-5 pr-1.5 py-1.5 text-xs font-bold tracking-wide"
                  style={{ background: "#6EE31A", color: "#000000" }}
                >
                  <span>Enquire Now</span>
                  <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center ml-3.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}

          {/* Card 6: Handshake Illustration */}
          {/* <div
            className="relative flex items-center justify-center min-h-[280px] p-8 rounded-3xl bg-zinc-50/60 border border-zinc-200/50 transition-all duration-300"
            style={{ borderTopWidth: "2px", borderTopColor: "transparent" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderTopColor = "#8B5CF6";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderTopColor = "transparent";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <svg className="w-full h-full max-w-[280px] max-h-[180px]" viewBox="0 0 200 130" fill="none">
              <rect x="52" y="32" width="96" height="64" rx="6" fill="#f8fafc" stroke="#6EE31A" strokeWidth="2" />
              <rect x="56" y="36" width="88" height="52" fill="#f1f5f9" rx="3" />
              <path d="M90 96L92 108H108L110 96H90Z" fill="#6EE31A" opacity="0.5" />
              <ellipse cx="100" cy="109" rx="20" ry="3" fill="#6EE31A" opacity="0.2" />
              <path d="M64 88C64 74 72 70 76 70H78L76 88H64Z" fill="#6EE31A" opacity="0.2" />
              <circle cx="71" cy="62" r="6" fill="#6EE31A" opacity="0.3" />
              <path d="M136 88C136 74 128 70 124 70H122L124 88H136Z" fill="#8B5CF6" opacity="0.2" />
              <circle cx="129" cy="62" r="6" fill="#8B5CF6" opacity="0.3" />
              <path d="M88 74H92L96 78H104L108 74H112" stroke="#4ab012" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M94 77C97 80 103 80 106 77" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
              <g className="animate-bounce" style={{ animationDuration: "3.5s" }}>
                <circle cx="100" cy="18" r="11" fill="#6EE31A" opacity="0.1" />
                <circle cx="100" cy="18" r="11" stroke="#6EE31A" strokeWidth="1.5" />
                <text x="100" y="33" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#4ab012">LOYALTY</text>
              </g>
              <g className="animate-pulse">
                <circle cx="26" cy="72" r="10" fill="#8B5CF6" opacity="0.1" />
                <circle cx="26" cy="72" r="10" stroke="#8B5CF6" strokeWidth="1.5" />
                <text x="26" y="86" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#8B5CF6">SUPPORT</text>
              </g>
              <g className="animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>
                <circle cx="174" cy="72" r="10" fill="#6EE31A" opacity="0.1" />
                <circle cx="174" cy="72" r="10" stroke="#6EE31A" strokeWidth="1.5" />
                <text x="174" y="86" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#4ab012">QUALITY</text>
              </g>
              <g className="animate-pulse">
                <circle cx="36" cy="112" r="9" fill="#8B5CF6" opacity="0.1" />
                <circle cx="36" cy="112" r="9" stroke="#8B5CF6" strokeWidth="1.2" />
                <text x="36" y="125" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#8B5CF6">GROWTH</text>
              </g>
              <g className="animate-bounce" style={{ animationDuration: "3s", animationDelay: "0.5s" }}>
                <circle cx="164" cy="112" r="9" fill="#6EE31A" opacity="0.1" />
                <circle cx="164" cy="112" r="9" stroke="#6EE31A" strokeWidth="1.2" />
                <text x="164" y="125" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#4ab012">PROMO</text>
              </g>
            </svg>
          </div> */}
        </div>
      </div>
    </section>
  );
}
