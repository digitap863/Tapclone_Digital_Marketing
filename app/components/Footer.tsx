"use client";

import React from "react";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.replace("#", ""));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200/50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2.5 cursor-pointer">
              <img src="/Tapclone logo black.png" alt="Tapclone Logo" className="h-8 w-auto object-contain" />
            </a>
            <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
              Helping businesses grow with smart and effective digital marketing solutions. Reaching the right audience and achieving real results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Why Us", href: "#why-choose-us" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-zinc-500 transition-colors cursor-pointer"
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#4ab012")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex gap-3">
              {[
                {
                  label: "Twitter / X",
                  icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
                },
                {
                  label: "LinkedIn",
                  icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />,
                },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white border border-zinc-200/50 flex items-center justify-center text-zinc-500 transition-all hover:-translate-y-0.5"
                  aria-label={label}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#4ab012";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(110,227,26,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "";
                    (e.currentTarget as HTMLElement).style.borderColor = "";
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{icon}</svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-400">&copy; {new Date().getFullYear()} Tapclone. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-zinc-400">
            <a href="#" className="transition-colors" onMouseEnter={(e) => (e.currentTarget.style.color = "#4ab012")} onMouseLeave={(e) => (e.currentTarget.style.color = "")}>Privacy Policy</a>
            <a href="#" className="transition-colors" onMouseEnter={(e) => (e.currentTarget.style.color = "#4ab012")} onMouseLeave={(e) => (e.currentTarget.style.color = "")}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
