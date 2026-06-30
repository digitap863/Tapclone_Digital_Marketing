"use client";

import React, { useState, useEffect } from "react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0.15 };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach((item) => { const el = document.querySelector(item.href); if (el) observer.observe(el); });
    return () => { navItems.forEach((item) => { const el = document.querySelector(item.href); if (el) observer.unobserve(el); }); };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
      setIsMobileMenuOpen(false);
      window.history.pushState(null, "", href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-zinc-200/60 shadow-sm py-4"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2.5 group cursor-pointer">
            <img
              src="/Tapclone logo black.png"
              alt="Tapclone Logo"
              className="h-8 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Nav Pill */}
          <div className="hidden md:flex items-center gap-1 bg-zinc-100/70 p-1.5 rounded-full border border-zinc-200/50">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-white shadow-sm scale-[1.02] font-bold"
                      : "text-zinc-500 hover:text-zinc-900 hover:bg-white/60"
                  }`}
                  style={isActive ? { color: "#6EE31A" } : {}}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-full shadow-md hover:scale-[1.02] transition-all duration-200 cursor-pointer"
              style={{ background: "#6EE31A", color: "#000000", boxShadow: "0 4px 16px rgba(110,227,26,0.25)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#5ecc16")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#6EE31A")}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-600 hover:bg-zinc-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isMobileMenuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-lg border-b border-zinc-200/60 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive ? "bg-zinc-50 font-bold" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                }`}
                style={isActive ? { color: "#6EE31A" } : {}}
              >
                {item.label}
              </a>
            );
          })}
          <hr className="border-zinc-200/60 my-2" />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="w-full text-center px-5 py-3 text-base font-bold rounded-xl transition-all cursor-pointer"
            style={{ background: "#6EE31A", color: "#000000" }}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
