"use client";

import React, { useState } from "react";
import Image from "next/image";

import areva from "../assets/clients/areva.png";
import logo4 from "../assets/clients/ahalia.png";
import logo7 from "../assets/clients/logo7.png";
import logo8 from "../assets/clients/logo8.png";
import logo17 from "../assets/clients/logo17.png";
import logo19 from "../assets/clients/logo19.png";
import logo22 from "../assets/clients/logo22.png";
import logo2 from "../assets/clients/logo2.png";
import logo21 from "../assets/clients/reliant.png";
import logo26 from "../assets/clients/logo26.png";



const clientLogos = [
  { name: "Client Logo 1", src: areva },
  { name: "Client Logo 2", src: logo4 },
  { name: "Client Logo 4", src: logo7 },
  { name: "Client Logo 5", src: logo8 },
  { name: "Client Logo 6", src: logo17 },
  { name: "Client Logo 7", src: logo19 },
  { name: "Client Logo 8", src: logo22 },
  { name: "Client Logo 9", src: logo2 },
  { name: "Client Logo 10", src: logo21 },
  { name: "Client Logo 11", src: logo26 },

];

export default function Clients() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="clients" className="py-20 px-6 sm:px-8 lg:px-12 bg-zinc-50/50 border-t border-zinc-200/30">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        
        {/* Title and Description */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div
            className="inline-flex items-center px-3.5 py-1 rounded-full border mb-1"
            style={{ background: "rgba(110,227,26,0.08)", borderColor: "rgba(110,227,26,0.3)" }}
          >
            <span className="text-xs font-bold tracking-wide" style={{ color: "#4ab012" }}>
              Our Clients
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            Trusted by <span className="text-[#4ab012]">500+ companies</span>
          </h2>
          
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Our clients trust us to deliver exceptional digital marketing solutions, empowering their online presence and enhancing their business growth.
          </p>
        </div>

        {/* WhatsApp Enquire Button */}
        <div className="pt-2">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-enquiry", { detail: { service: "General Inquiry" } }))}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white shadow-md transition-all duration-200 hover:scale-105 cursor-pointer bg-[#25D366] hover:bg-[#20ba5a] focus:outline-none"
            style={{ boxShadow: "0 4px 20px rgba(37, 211, 102, 0.25)" }}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 2C6.446 2 1.92 6.509 1.916 12.067c-.002 1.776.467 3.51 1.358 5.047L1.83 22l5.068-1.321c1.493.81 3.167 1.237 4.873 1.237h.005c5.583 0 10.109-4.509 10.113-10.07A9.972 9.972 0 0022.029 4.83 9.948 9.948 0 0012.031 2zm5.72 13.918c-.313.874-1.53 1.597-2.106 1.696-.576.098-1.226.175-3.834-.863-3.136-1.249-5.114-4.37-5.271-4.577-.157-.207-1.267-1.637-1.267-3.118 0-1.48.784-2.207 1.063-2.507.28-.3.612-.375.816-.375.204 0 .408.001.587.008.188.007.437-.074.685.508.252.593.86 2.035.935 2.186.075.152.125.328.025.524-.1.197-.15.319-.299.49-.15.172-.315.385-.45.52-.15.152-.307.319-.133.609.175.29.777 1.247 1.666 2.012.913.787 1.686 1.026 2.032 1.178.347.152.55.127.754-.1.204-.227.873-1.014 1.107-1.36.233-.346.467-.29.79-.172.321.118 2.036.932 2.385 1.104.35.172.583.254.67.402.086.15.086.858-.227 1.732z"/>
            </svg>
            <span>Enquire Now</span>
          </button>
        </div>

        {/* Scrolling Client Logos */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="pt-8 border-t border-zinc-200/50 overflow-hidden relative w-full select-none"
        >
          {/* Faders on left and right for seamless look */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-zinc-50/95 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-zinc-50/95 to-transparent z-10 pointer-events-none" />

          <div className="flex w-max relative py-2">
            {/* Track 1 */}
            <div
              style={{ animationPlayState: isPaused ? "paused" : "running" }}
              className="flex animate-marquee shrink-0 items-center gap-6 px-4"
            >
              {clientLogos.map((logo, idx) => (
                <div
                  key={`track1-${idx}`}
                  className="flex items-center justify-center h-20 w-44 bg-white border border-zinc-200/80 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] px-6 shrink-0 transition-transform duration-200 hover:scale-105"
                  title={logo.name}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                    width={140}
                    height={56}
                  />
                </div>
              ))}
            </div>

            {/* Track 2 (Duplicate for seamless loop) */}
            <div
              style={{ animationPlayState: isPaused ? "paused" : "running" }}
              className="flex animate-marquee shrink-0 items-center gap-6 px-4"
              aria-hidden="true"
            >
              {clientLogos.map((logo, idx) => (
                <div
                  key={`track2-${idx}`}
                  className="flex items-center justify-center h-20 w-44 bg-white border border-zinc-200/80 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] px-6 shrink-0 transition-transform duration-200 hover:scale-105"
                  title={logo.name}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                    width={140}
                    height={56}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
