"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Import arrays from the index file
import { imgArr1, imgArr2 } from "../assets/posters";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Combine both arrays to get all poster images
  const allImages = [...imgArr1, ...imgArr2];

  // Detect responsive screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint is 768px
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Group images dynamically based on viewport
  const slides: (typeof allImages[0])[][] = [];
  if (isMobile) {
    // Mobile: 1 image per slide
    allImages.forEach((img) => {
      slides.push([img]);
    });
  } else {
    // Desktop: 2 images per slide
    for (let i = 0; i < allImages.length; i += 2) {
      if (allImages[i]) {
        slides.push([
          allImages[i],
          allImages[i + 1] || allImages[0], // Fallback if odd
        ]);
      }
    }
  }

  // Safety guard for slide out-of-bounds on screen resize
  useEffect(() => {
    if (currentSlide >= slides.length && slides.length > 0) {
      setCurrentSlide(slides.length - 1);
    }
  }, [isMobile, slides.length, currentSlide]);

  const nextSlide = () => {
    if (slides.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (slides.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isPaused && slides.length > 0) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 4000);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSlide, isPaused, slides.length]);

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
          {/* Main Slide Track Wrapper */}
          <div className="overflow-hidden p-2 relative">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }}
            >
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`flex-none w-full grid gap-6 ${
                    isMobile ? "grid-cols-1" : "grid-cols-2"
                  }`}
                >
                  {slide.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white group"
                    >
                      {item.image1 && (
                        <Image
                          src={item.image1}
                          alt={item.text || "Project Poster"}
                          fill
                          sizes="(max-w-768px) 100vw, 550px"
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                          priority={idx === 0}
                        />
                      )}
                    </div>
                  ))}
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

        {/* Indicators / Progress Dots (Limited to first 12 indices for clean UI on mobile) */}
        <div className="flex justify-center items-center gap-2 pt-2 flex-wrap max-w-lg mx-auto">
          {slides.map((_, idx) => {
            // Keep dots representation compact on mobile (only show 15 dots or range)
            if (isMobile && idx > 15) return null;
            return (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx ? "w-8 bg-[#4ab012]" : "w-2 bg-zinc-200 hover:bg-zinc-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
          {isMobile && slides.length > 16 && (
            <span className="text-[10px] text-zinc-400 font-bold ml-1">+{slides.length - 16} more</span>
          )}
        </div>

      </div>
    </section>
  );
}
