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
              Grow Your Business with Data-Driven 
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

          {/* Right Column: Hero Image - Hidden on mobile and tablet, shown on desktop */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center mt-8 lg:mt-0">
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

      {/* Floating Buttons: WhatsApp (Bottom-Left) & Call (Bottom-Right) */}
      <div className="fixed bottom-6 left-6 z-40 w-14 h-14">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <a
          href="https://wa.me/919037833933"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all cursor-pointer bg-[#25D366] border border-emerald-500/20"
          aria-label="Contact us on WhatsApp"
        >
          <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
            <path d="M12.031 2C6.446 2 1.92 6.509 1.916 12.067c-.002 1.776.467 3.51 1.358 5.047L1.83 22l5.068-1.321c1.493.81 3.167 1.237 4.873 1.237h.005c5.583 0 10.109-4.509 10.113-10.07A9.972 9.972 0 0022.029 4.83 9.948 9.948 0 0012.031 2zm5.72 13.918c-.313.874-1.53 1.597-2.106 1.696-.576.098-1.226.175-3.834-.863-3.136-1.249-5.114-4.37-5.271-4.577-.157-.207-1.267-1.637-1.267-3.118 0-1.48.784-2.207 1.063-2.507.28-.3.612-.375.816-.375.204 0 .408.001.587.008.188.007.437-.074.685.508.252.593.86 2.035.935 2.186.075.152.125.328.025.524-.1.197-.15.319-.299.49-.15.172-.315.385-.45.52-.15.152-.307.319-.133.609.175.29.777 1.247 1.666 2.012.913.787 1.686 1.026 2.032 1.178.347.152.55.127.754-.1.204-.227.873-1.014 1.107-1.36.233-.346.467-.29.79-.172.321.118 2.036.932 2.385 1.104.35.172.583.254.67.402.086.15.086.858-.227 1.732z"/>
          </svg>
        </a>
      </div>

      <div className="fixed bottom-6 right-6 z-40 w-14 h-14">
        <span className="absolute inset-0 rounded-full bg-[#6EE31A] opacity-35 animate-ping" />
        <a
          href="tel:9037833933"
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all cursor-pointer bg-[#6EE31A]"
          aria-label="Call support at 9037833933"
          onMouseEnter={(e) => (e.currentTarget.style.background = "#5ecc16")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#6EE31A")}
        >
          <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            <path d="M14.05 2a9 9 0 0 1 8 8" />
            <path d="M14.05 5.6a5 5 0 0 1 4.4 4.4" />
          </svg>
        </a>
      </div>
    </section>
  );
}
