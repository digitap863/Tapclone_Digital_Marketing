"use client";

import React, { useState, useEffect } from "react";

export default function InquiryModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState("General Inquiry");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ service?: string }>;
      setModalService(customEvent.detail?.service || "General Inquiry");
      setIsModalOpen(true);
    };

    window.addEventListener("open-enquiry", handleOpen);
    return () => {
      window.removeEventListener("open-enquiry", handleOpen);
    };
  }, []);

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

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: modalService,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setTimeout(() => {
          setIsModalOpen(false);
          setFormSubmitted(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
        }, 3000);
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Failed to send inquiry. Please try again.");
      }
    } catch (err) {
      setErrorMessage("A network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isModalOpen) return null;

  return (
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
              {/* <h3 className="text-2xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                Scale Your <span className="text-[#4ab012]">{modalService}</span>
              </h3> */}
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
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Search Engine Optimization">Search Engine Optimization</option>
                  <option value="Performance Marketing & Paid Ads">Performance Marketing & Paid Ads</option>
                  <option value="Content Marketing">Content Marketing</option>
                  <option value="Email Marketing">Email Marketing</option>
                  <option value="Video Production">Video Production</option>
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

            {errorMessage && (
              <div className="text-red-500 text-xs font-semibold bg-red-50/50 border border-red-200/50 p-3 rounded-xl">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: "#6EE31A", color: "#000000", boxShadow: "0 4px 20px rgba(110,227,26,0.25)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#5ecc16")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#6EE31A")}
            >
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
