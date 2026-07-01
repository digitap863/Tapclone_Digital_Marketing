"use client";

import React from "react";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.split("#")[1] || href;
    const targetElement = document.getElementById(targetId);
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
            <a href="/digitalmarketing/#home" onClick={(e) => handleNavClick(e, "/digitalmarketing/#home")} className="flex items-center gap-2.5 cursor-pointer">
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
                { label: "Home", href: "/digitalmarketing/#home" },
                { label: "Services", href: "/digitalmarketing/#services" },
                { label: "Why Us", href: "/digitalmarketing/#why-choose-us" },
                { label: "Testimonials", href: "/digitalmarketing/#testimonials" },
                { label: "Portfolio", href: "/digitalmarketing/#projects" },
                { label: "Contact", href: "/digitalmarketing/#contact" },
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
                  label: "LinkedIn",
                  icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />,
                  href: "https://www.linkedin.com/company/tapclone",
                },
                {
                  label: "Instagram",
                  icon: (
                    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 16.5 5zm-4.5 1.5A5.5 5.5 0 1 0 17.5 12 5.506 5.506 0 0 0 12 6.5zm0 2A3.5 3.5 0 1 1 8.5 12 3.504 3.504 0 0 1 12 8.5z" />
                  ),
                  href: "https://www.instagram.com/tapclone_official",
                },
                {
                  label: "Facebook",
                  icon: (
                    <path d="M22 12a10 10 0 1 0-11.563 9.875v-6.987H7.898V12h2.539V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.888h-2.33v6.987A10.001 10.001 0 0 0 22 12z" />
  ),
  href: "https://www.facebook.com/Tapclone",
},
              ].map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
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
