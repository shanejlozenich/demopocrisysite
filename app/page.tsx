'use client';

import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f1e8] relative overflow-x-hidden flex flex-col justify-between">
      
      {/* Responsive Navigation Header */}
      <nav className="w-full border-b border-neutral-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Site Title / Identity Node */}
          <div className="text-sm font-black uppercase tracking-[0.3em] text-[#eb153c] text-center sm:text-left">
            Demopocrisy
          </div>

          {/* Navigation Links: Spreads horizontally on desktop, wraps naturally on mobile */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-neutral-400">
            <a href="/cases" className="hover:text-[#f5f1e8] transition-colors">Cases</a>
            <a href="/memory" className="hover:text-[#f5f1e8] transition-colors">Memory</a>
            <a href="/archive" className="hover:text-[#f5f1e8] transition-colors">Archive</a>
            <a href="/network" className="hover:text-[#f5f1e8] transition-colors">Network</a>
          </div>

        </div>
      </nav>

      {/* Main Landing Interface Panel */}
      <main className="flex-grow px-4 sm:px-8 md:px-20 py-12 md:py-24 flex flex-col justify-center max-w-5xl mx-auto w-full box-border">
        <section>
          <div className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#ABD822] break-words">
            Systemic Stratigraphic Mapping // Core Portal
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-black tracking-tight uppercase break-words leading-none">
            Demopocrisy
          </h1>
          <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-neutral-400 leading-relaxed">
            Institutional memory, procedural systems, and network analysis. Tracking regional infrastructure anomalies, cross-agency loops, and structural exception criteria.
          </p>
        </section>

        {/* Feature Overview Grid: Stacks on mobile, splits into 2 columns on larger displays */}
        <section className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <a href="/cases" className="border border-neutral-800 hover:border-neutral-600 bg-black/20 p-6 sm:p-8 transition-all block group">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-200 group-hover:text-[#f5f1e8]">
              Cases
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Procedural archives, forensic ledgers, and localized institutional records.
            </p>
          </a>

          <a href="/memory" className="border border-neutral-800 hover:border-neutral-600 bg-black/20 p-6 sm:p-8 transition-all block group">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-200 group-hover:text-[#f5f1e8]">
              System Memory
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Institutional continuity indices, structural tracking parameters, and record evolution.
            </p>
          </a>
        </section>
      </main>

      {/* Structured Footer Element */}
      <footer className="w-full border-t border-neutral-900 py-6 text-center text-[10px] text-neutral-600 font-mono tracking-tight px-4 box-border">
        Demopocrisy Verification Registry // Conceptual Operation Repository
      </footer>

    </div>
  );
}
