"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Import arrays from the index file
import { imgArr1, imgArr2 } from "../assets/posters";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Combine both arrays to get all poster images
  const allImages = [...imgArr1, ...imgArr2];

  // Group images into pairs for the two-column slide layout
  const slides: { left: typeof allImages[0]; right: typeof allImages[0] }[] = [];
  for (let i = 0; i < allImages.length; i += 2) {
    if (allImages[i]) {
      slides.push({
        left: allImages[i],
        right: allImages[i + 1] || allImages[0], // Fallback if odd number of images
      });
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 4000);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSlide, isPaused]);

  return (
    <section id="projects" className="py-24 px-6 sm:px-8 lg:px-12 bg-white border-t border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <div
            className="inline-flex items-center px-3.5 py-1 rounded-full border mb-2 border-zinc-200/60"
            style={{ background: "rgba(110,227,26,0.08)", borderColor: "rgba(110,227,26,0.3)" }}
          >
            <span className="text-xs font-bold tracking-wide" style={{ color: "#4ab012" }}>
              Our Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            Our Work <span className="text-[#4ab012]">Showcase</span>
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
            Discover the creative visual work and ad creatives we design to captivate audiences and drive conversions.
          </p>
        </div>

        {/* Slide Show Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative w-full max-w-5xl mx-auto"
        >
          {/* Main Slide Track Wrapper - Clean transparent/white styling with faders */}
          <div className="overflow-hidden p-2 relative">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }}
            >
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className="flex-none w-full grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* Left Big Picture */}
                  <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white group">
                    <Image
                      src={slide.left.image1}
                      alt={slide.left.text || "Project Poster"}
                      fill
                      sizes="(max-w-768px) 100vw, 550px"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      priority={idx === 0}
                    />
                  </div>

                  {/* Right Big Picture */}
                  <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white group">
                    <Image
                      src={slide.right.image1}
                      alt={slide.right.text || "Project Poster"}
                      fill
                      sizes="(max-w-768px) 100vw, 550px"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      priority={idx === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-[-20px] sm:left-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 hover:text-[#4ab012] flex items-center justify-center transition-all cursor-pointer z-20 shadow-md focus:outline-none hover:border-[#6EE31A]/50"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-[-20px] sm:right-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 hover:text-[#4ab012] flex items-center justify-center transition-all cursor-pointer z-20 shadow-md focus:outline-none hover:border-[#6EE31A]/50"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators / Progress Dots */}
        <div className="flex justify-center items-center gap-2 pt-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? "w-8 bg-[#4ab012]" : "w-2 bg-zinc-200 hover:bg-zinc-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
