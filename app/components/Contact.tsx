"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Performance Marketing",
    message: "",
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.phone || !contactForm.message) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          phone: contactForm.phone,
          service: contactForm.projectType,
          message: contactForm.message,
        }),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setContactForm({ name: "", email: "", phone: "", projectType: "Performance Marketing", message: "" });
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setErrorMessage("A network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12 bg-white border-t border-zinc-100">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div
            className="inline-flex items-center px-3.5 py-1 rounded-full border mb-2"
            style={{ background: "rgba(110,227,26,0.08)", borderColor: "rgba(110,227,26,0.3)" }}
          >
            <span className="text-xs font-bold tracking-wide" style={{ color: "#4ab012" }}>
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            Start Building with <br className="hidden sm:inline" />
            <span className="text-[#4ab012]">
              TapClone.
            </span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm sm:text-base">
            Ready to scale your next digital marketing campaign or web presence? Write to us, and our team will respond within a few hours.
          </p>
        </div>

        <div className="bg-zinc-50/50 p-8 sm:p-12 rounded-3xl border border-zinc-200/50 shadow-sm relative overflow-hidden">
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
              <h3 className="text-2xl font-bold text-zinc-900">Message Sent Successfully!</h3>
              <p className="text-sm text-zinc-500 max-w-md">
                Thank you for reaching out. We will get back to you shortly at the email address provided.
              </p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-600">Full Name</label>
                  <input
                    type="text" id="name" required placeholder="Jane Doe"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none transition-colors text-sm"
                    onFocus={(e) => (e.target.style.borderColor = "#6EE31A")}
                    onBlur={(e) => (e.target.style.borderColor = "")}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-600">Email Address</label>
                  <input
                    type="email" id="email" required placeholder="jane@example.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none transition-colors text-sm"
                    onFocus={(e) => (e.target.style.borderColor = "#6EE31A")}
                    onBlur={(e) => (e.target.style.borderColor = "")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-zinc-600">Phone Number</label>
                  <input
                    type="tel" id="phone" required placeholder="+91 98765 43210"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none transition-colors text-sm"
                    onFocus={(e) => (e.target.style.borderColor = "#6EE31A")}
                    onBlur={(e) => (e.target.style.borderColor = "")}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="project-type" className="text-xs font-bold uppercase tracking-wider text-zinc-600">Service Needed</label>
                  <select
                    id="project-type"
                    value={contactForm.projectType}
                    onChange={(e) => setContactForm({ ...contactForm, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 focus:outline-none transition-colors cursor-pointer text-sm"
                    onFocus={(e) => (e.target.style.borderColor = "#6EE31A")}
                    onBlur={(e) => (e.target.style.borderColor = "")}
                  >
                    <option>Performance Marketing</option>
                    <option>Search Engine Optimization</option>
                    <option>Social Media Marketing</option>
                    <option>Content Marketing</option>
                    <option>Email Marketing</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-600">Message</label>
                <textarea
                  id="message" required rows={5} placeholder="Tell us a little bit about what you're working on..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none transition-colors resize-y text-sm"
                  onFocus={(e) => (e.target.style.borderColor = "#6EE31A")}
                  onBlur={(e) => (e.target.style.borderColor = "")}
                />
              </div>

              {errorMessage && (
                <div className="text-red-500 text-sm font-semibold bg-red-50/50 border border-red-200/50 p-3 rounded-xl">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: "#6EE31A", color: "#000000", boxShadow: "0 4px 20px rgba(110,227,26,0.25)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#5ecc16")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#6EE31A")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
