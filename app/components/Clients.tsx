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
        {/* <div className="pt-12">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-enquiry", { detail: { service: "General Inquiry" } }))}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-all cursor-pointer"
                style={{ background: "#6EE31A", color: "#000000", boxShadow: "0 4px 20px rgba(110,227,26,0.25)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#5ecc16")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#6EE31A")}
              >
                Enquire Now ➔
              </button>
            </div> */}

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
