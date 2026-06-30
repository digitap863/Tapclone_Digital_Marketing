"use client";

import React, { useRef } from "react";

const testimonialsList = [
  {
    id: 1,
    name: "Mehjebin A M",
    rating: 5,
    quote: "We are very happy with the services provided by Tapclone. The team handles our SEO and social media content effectively, with a clear understanding of our brand requirements. What stands out most is their ability to listen carefully and translate discussions into actionable results. Their suggestions are practical, well-structured, and easy to implement, which has helped improve our digital presence.",
    avatar: "girll",
  },
  {
    id: 2,
    name: "Manu",
    rating: 5,
    quote: "We had a great experience working with Tapclone for Zua Energy’s video production. Their team is highly creative, professional, and easy to work with. They transformed complex solar concepts into engaging, high-quality videos that truly represent our brand. Communication was smooth, timelines were met, and the final output exceeded expectations.",
    avatar: "boyy",
  },
  {
    id: 3,
    name: "CHIRAKEKAREN CGH",
    rating: 5,
    quote: "We have been working with TapClone for the past 5 years for handling our Google My Business and Google promotions. Their service has been consistently professional and reliable throughout this period. They manage our page efficiently, keep everything updated, and support us with effective promotions that improve our visibility.",
    avatar: "boyy",
  },
  {
    id: 4,
    name: "Nizam Nazar",
    rating: 5,
    quote: "Tapclone in Palarivattom, Kochi, is a fantastic digital marketing firm that truly understands the needs of its clients. Their team is highly professional, creative, and skilled in delivering tailored solutions for businesses of all sizes. They excel in areas like SEO, social media marketing, and content creation, ensuring excellent results.",
    avatar: "boyy",
  },
  {
    id: 5,
    name: "Basant Nair",
    rating: 5,
    quote: "We have been working with Tapclone for our digital marketing services for about 4 years now and we are very happy with their services. Be it Instagram FB promotions or Google Ads or Google Maps they are very much meeting our expectations. Thank you Team Tapclone for your support in keeping Cindrebay No.1 in Kerala through your dedicated efforts.",
    avatar: "boyy",
  },
  {
    id: 6,
    name: "Dhipin kt",
    rating: 4.5,
    quote: "I appreciate team Tapclone's way of approach towards the clients, they understands the client's needs and their business then gives consultation. If you want a 'stress-free' system of tracking or monitoring your business I am highly recommend TAPCLONE.",
    avatar: "boyy",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by approximately one visible card's width plus gap
      const scrollAmount = clientWidth;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" className="py-24 px-6 sm:px-8 lg:px-12 bg-zinc-50/50 border-t border-zinc-100">
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-xl text-left">
            <div
              className="inline-flex items-center px-3.5 py-1 rounded-full border mb-2"
              style={{ background: "rgba(110,227,26,0.08)", borderColor: "rgba(110,227,26,0.3)" }}
            >
              <span className="text-xs font-bold tracking-wide" style={{ color: "#4ab012" }}>
                Testimonials
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight">
              What Our Clients Say <br />
              <span className="text-[#4ab012]">
                About TapClone.
              </span>
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
              We partner with businesses across India and the UAE to drive growth and build sustainable digital advantages.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 shrink-0 pb-1">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 flex items-center justify-center transition-all hover:border-[#6EE31A]/50 hover:shadow-sm cursor-pointer focus:outline-none"
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 flex items-center justify-center transition-all hover:border-[#6EE31A]/50 hover:shadow-sm cursor-pointer focus:outline-none"
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials Scroll Container */}
        <div
          ref={scrollRef}
          className="scrollbar-none flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
        >
          {testimonialsList.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start snap-always bg-white p-8 rounded-3xl border border-zinc-200/50 flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] hover:border-[#6EE31A]/40"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1 text-[#eab308]">
                  {[...Array(5)].map((_, i) => {
                    const isFull = i < Math.floor(testimonial.rating);
                    const isHalf = !isFull && i < testimonial.rating;
                    if (isFull) {
                      return (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      );
                    } else if (isHalf) {
                      return (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <defs>
                            <linearGradient id={`halfGrad-${testimonial.id}`}>
                              <stop offset="50%" stopColor="currentColor" />
                              <stop offset="50%" stopColor="#e2e8f0" />
                            </linearGradient>
                          </defs>
                          <path fill={`url(#halfGrad-${testimonial.id})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      );
                    } else {
                      return (
                        <svg key={i} className="w-4 h-4 text-zinc-200 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      );
                    }
                  })}
                </div>
                {/* Quote Text */}
                <p className="text-sm text-zinc-600 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-zinc-100">
                {testimonial.avatar === "girll" ? (
                  <div className="w-10 h-10 rounded-full shrink-0 overflow-hidden bg-pink-50 flex items-center justify-center border border-pink-200/30">
                    <svg className="w-7 h-7 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full shrink-0 overflow-hidden bg-blue-50 flex items-center justify-center border border-blue-200/30">
                    <svg className="w-7 h-7 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-zinc-400">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
