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
];

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = (serviceTitle: string) => {
    setModalService(serviceTitle);
    setIsModalOpen(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setFormSubmitted(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 3000);
    }
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
          <p className="text-zinc-500 max-w-md leading-relaxed text-sm sm:text-base">
            We architect end-to-end digital acquisition funnels that capture high-intent leads and drive measurable ROI for growing businesses.
          </p>
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
                  <span>Learn More</span>
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
          <div
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
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Container */}
          <div
            className="relative bg-white w-full max-w-lg rounded-3xl border border-zinc-200/80 shadow-2xl p-6 sm:p-8 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200"
            style={{
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 p-2 rounded-full hover:bg-zinc-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(110,227,26,0.1)", color: "#4ab012" }}
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">Request Sent!</h3>
                <p className="text-sm text-zinc-500 max-w-sm">
                  Thank you for your interest in our {modalService} services. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-5">
                <div className="space-y-2">
                  <div
                    className="inline-flex items-center px-3.5 py-1 rounded-full border"
                    style={{ background: "rgba(110,227,26,0.08)", borderColor: "rgba(110,227,26,0.3)" }}
                  >
                    <span className="text-xs font-bold tracking-wide" style={{ color: "#4ab012" }}>
                      Inquire Service
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                    Scale Your <span className="text-[#4ab012]">{modalService}</span>
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Provide your details below to request a callback regarding {modalService}.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label htmlFor="modal-name" className="text-xs font-bold uppercase tracking-wider text-zinc-600">Full Name</label>
                    <input
                      type="text"
                      id="modal-name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none transition-colors text-sm"
                      onFocus={(e) => (e.target.style.borderColor = "#6EE31A")}
                      onBlur={(e) => (e.target.style.borderColor = "")}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="modal-email" className="text-xs font-bold uppercase tracking-wider text-zinc-600">Email Address</label>
                    <input
                      type="email"
                      id="modal-email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none transition-colors text-sm"
                      onFocus={(e) => (e.target.style.borderColor = "#6EE31A")}
                      onBlur={(e) => (e.target.style.borderColor = "")}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="modal-phone" className="text-xs font-bold uppercase tracking-wider text-zinc-600">Phone Number</label>
                    <input
                      type="tel"
                      id="modal-phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none transition-colors text-sm"
                      onFocus={(e) => (e.target.style.borderColor = "#6EE31A")}
                      onBlur={(e) => (e.target.style.borderColor = "")}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="modal-service" className="text-xs font-bold uppercase tracking-wider text-zinc-600">Service Needed</label>
                    <select
                      id="modal-service"
                      value={modalService}
                      onChange={(e) => setModalService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 focus:outline-none transition-colors cursor-pointer text-sm"
                      onFocus={(e) => (e.target.style.borderColor = "#6EE31A")}
                      onBlur={(e) => (e.target.style.borderColor = "")}
                    >
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Search Engine Optimization">Search Engine Optimization</option>
                      <option value="Performance Marketing & Paid Ads">Performance Marketing & Paid Ads</option>
                      <option value="Content Marketing">Content Marketing</option>
                      <option value="Email Marketing">Email Marketing</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="modal-message" className="text-xs font-bold uppercase tracking-wider text-zinc-600">Brief Message</label>
                    <textarea
                      id="modal-message"
                      required
                      rows={3}
                      placeholder="Tell us about your project or goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none transition-colors resize-y text-sm"
                      onFocus={(e) => (e.target.style.borderColor = "#6EE31A")}
                      onBlur={(e) => (e.target.style.borderColor = "")}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold rounded-xl transition-all duration-200 cursor-pointer"
                  style={{ background: "#6EE31A", color: "#000000", boxShadow: "0 4px 20px rgba(110,227,26,0.25)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#5ecc16")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#6EE31A")}
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
