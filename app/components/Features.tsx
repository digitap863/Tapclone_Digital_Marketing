"use client";

import React from "react";

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 px-6 sm:px-8 lg:px-12 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/20"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Outstanding Capabilities
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Built for speed. Optimized for growth.
          </p>
          <p className="text-zinc-500 dark:text-zinc-400">
            A comprehensive suite of powerful features designed to make your web app development smooth and performant.
          </p>
        </div>

        {/* Bento-style Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 (Large 2-column on medium screen) */}
          <div className="md:col-span-2 group bg-white dark:bg-zinc-900/60 p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col h-full justify-between gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-violet-50 dark:bg-violet-950/50 flex items-center justify-center text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Lightning Fast Edge Delivery</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
                  Deploy your code globally in milliseconds. Our edge computing network renders and delivers content from locations closest to your customers, providing instantaneous visual feedback and near-zero loading times.
                </p>
              </div>
              <div className="w-full bg-gradient-to-r from-violet-100 to-indigo-50 dark:from-zinc-800 dark:to-zinc-900 h-28 rounded-xl flex items-center justify-around px-6 overflow-hidden">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white dark:bg-zinc-800 shadow-sm text-zinc-600 dark:text-zinc-300">TTFB &lt; 50ms</span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white dark:bg-zinc-800 shadow-sm text-zinc-600 dark:text-zinc-300">99.99% Global Uptime</span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white dark:bg-zinc-800 shadow-sm text-zinc-600 dark:text-zinc-300">Vercel Edge Ready</span>
              </div>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="group bg-white dark:bg-zinc-900/60 p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col h-full justify-between gap-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Ironclad Security</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Protect details and operations. End-to-end encryption, regular penetration test audits, and advanced key rotations are standard safeguards.
                </p>
              </div>
              <div className="border border-zinc-100 dark:border-zinc-800 p-4 rounded-xl space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-400">Encryption Status</span>
                  <span className="text-emerald-500 font-bold">Active</span>
                </div>
                <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="group bg-white dark:bg-zinc-900/60 p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col h-full justify-between gap-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/50 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Multiplayer Synergy</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Work live with colleagues. Real-time document updates, inline editing comments, and cursors keep teams aligned without context switches.
                </p>
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-violet-400 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-xs font-bold text-white">JD</div>
                <div className="w-8 h-8 rounded-full bg-indigo-400 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-xs font-bold text-white -ml-4">AS</div>
                <div className="w-8 h-8 rounded-full bg-zinc-300 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-xs font-bold text-zinc-700 -ml-4">+4</div>
              </div>
            </div>
          </div>

          {/* Feature Card 4 (Large 2-column) */}
          <div className="md:col-span-2 group bg-white dark:bg-zinc-900/60 p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col h-full justify-between gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 dark:bg-pink-950/50 flex items-center justify-center text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Empowered AI Copilots</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
                  Automate mundane flows. Leverage built-in machine learning systems that analyze code structure, auto-document functional properties, and suggest semantic naming structures in seconds.
                </p>
              </div>
              <div className="w-full font-mono text-[10px] bg-zinc-950 text-zinc-300 p-4 rounded-xl overflow-x-auto border border-zinc-800 leading-normal">
                <span className="text-pink-400">const</span> tapclone = <span className="text-indigo-400">new</span> <span className="text-yellow-400">Campaign</span>();<br />
                tapclone.<span className="text-blue-400">enableAI</span>(&#123; mode: <span className="text-emerald-400">&apos;optimization&apos;</span>, autoScale: <span className="text-pink-400">true</span> &#125;);
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
