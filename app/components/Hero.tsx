"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [callbackForm, setCallbackForm] = useState({ name: "", phone: "", email: "", company: "" });

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (callbackForm.name && callbackForm.phone && callbackForm.email && callbackForm.company) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setCallbackForm({ name: "", phone: "", email: "", company: "" });
      }, 5000);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6 sm:px-8 lg:px-12 bg-white overflow-hidden"
    >
      {/* Subtle grid lines background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Badge */}
            <div
              className="inline-flex self-start items-center px-4 py-1.5 rounded-full mb-4 border"
              style={{ background: "rgba(110,227,26,0.08)", borderColor: "rgba(110,227,26,0.3)" }}
            >
              <span className="text-xs font-bold tracking-wide" style={{ color: "#4ab012" }}>
                Top #1 Digital Marketing Agency
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.2] mb-4"
              style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
            >
              Grow Your Business with Data-Driven <br />
              Digital Marketing
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-500 max-w-xl leading-relaxed mb-6">
              At Tapclone, we help businesses grow with smart and effective digital marketing solutions. Whether you&apos;re just starting out or looking to scale, we&apos;re here to help you reach the right audience and achieve real results.
            </p>

            {/* Form Card */}
            {formSubmitted ? (
              <div
                className="p-6 sm:p-7 rounded-2xl max-w-xl text-center space-y-4"
                style={{
                  background: "rgba(110,227,26,0.04)",
                  border: "2px solid #6EE31A",
                  boxShadow: "0 0 0 4px rgba(110,227,26,0.08), 0 20px 60px rgba(110,227,26,0.12)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto"
                  style={{ background: "rgba(110,227,26,0.1)", color: "#4ab012" }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Callback Request Received!</h3>
                <p className="text-sm text-zinc-500">Thank you. One of our digital growth experts will call you back shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={handleCallbackSubmit}
                className="p-5 sm:p-7 rounded-2xl max-w-xl space-y-4 relative overflow-hidden"
                style={{
                  background: "rgba(110,227,26,0.03)",
                  border: "2px solid #6EE31A",
                  boxShadow: "0 0 0 4px rgba(110,227,26,0.08), 0 20px 60px rgba(0,0,0,0.08), 0 4px 20px rgba(110,227,26,0.15)",
                }}
              >
                {/* Lime left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background: "#6EE31A" }}
                />
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
                  Let&apos;s Drive Your Digital Growth
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    { type: "text", placeholder: "Name", key: "name" },
                    { type: "tel", placeholder: "Phone", key: "phone" },
                    { type: "email", placeholder: "Email", key: "email" },
                    { type: "text", placeholder: "Company Name", key: "company" },
                  ].map(({ type, placeholder, key }) => (
                    <input
                      key={key}
                      type={type}
                      required
                      placeholder={placeholder}
                      value={callbackForm[key as keyof typeof callbackForm]}
                      onChange={(e) => setCallbackForm({ ...callbackForm, [key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 text-sm transition-colors focus:outline-none"
                      onFocus={(e) => (e.target.style.borderColor = "#6EE31A")}
                      onBlur={(e) => (e.target.style.borderColor = "")}
                    />
                  ))}
                </div>
                <div className="pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full font-extrabold text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 cursor-pointer"
                    style={{ background: "#6EE31A", color: "#000000", boxShadow: "0 4px 20px rgba(110,227,26,0.3)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#5ecc16")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#6EE31A")}
                  >
                    Get a Callback
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-5 flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
              <Image
                src="/banner-image.png"
                alt="Digital Marketing Specialist"
                width={500}
                height={500}
                priority
                className="relative z-10 w-full h-auto object-contain select-none hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all cursor-pointer"
          style={{ background: "#6EE31A", boxShadow: "0 4px 20px rgba(110,227,26,0.3)" }}
          aria-label="Contact support chat"
          onMouseEnter={(e) => (e.currentTarget.style.background = "#5ecc16")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#6EE31A")}
        >
          <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
        <div className="bg-white px-4 py-2.5 rounded-full border border-zinc-200 shadow-md text-xs font-bold text-zinc-700 hidden sm:flex items-center gap-1.5 animate-bounce">
          Contact us
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#6EE31A" }} />
        </div>
      </div>
    </section>
  );
}
