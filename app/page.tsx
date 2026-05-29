import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-65px)] bg-[#0a0a0a] text-white flex flex-col justify-center items-center px-6 py-12">
      {/* High-Contrast Architectural Grid Container */}
      <div className="max-w-4xl w-full border border-[#262626] bg-[#121212] p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
        
        {/* Subtle Accent Color Frequency Indicator */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-[#eb153c]" />

        {/* Header Block */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#eb153c] font-semibold mb-2">
            System Operating Environment
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight uppercase text-white font-mono">
            Demopocrisy
          </h1>
          <p className="text-sm md:text-base text-neutral-400 mt-4 max-w-xl leading-relaxed">
            Institutional memory, procedural information frameworks, and systemic stratigraphic network analysis.
          </p>
        </div>

        {/* Terminal Matrix Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          
          {/* Card 1: Cases */}
          <Link href="/cases" className="group block p-6 bg-[#161616] border border-[#262626] hover:border-neutral-500 transition-all duration-200">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold tracking-wide uppercase text-white group-hover:text-[#eb153c] transition-colors">
                Case Files
              </h2>
              <span className="text-xs font-mono text-neutral-500 group-hover:text-neutral-300">01 //</span>
            </div>
            <p className="text-xs text-neutral-400 leading-normal">
              Access the procedural mappings, observation data logs, and historical institutional architectures.
            </p>
          </Link>

          {/* Card 2: System Administrator Verification */}
          <Link href="/admin-verification" className="group block p-6 bg-[#161616] border border-[#262626] hover:border-[#eb153c] transition-all duration-200">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold tracking-wide uppercase text-white group-hover:text-[#eb153c] transition-colors">
                Identity Registry
              </h2>
              <span className="text-xs font-mono text-[#eb153c]">02 //</span>
            </div>
            <p className="text-xs text-neutral-400 leading-normal">
              Review credential configurations, biological firmware validation logs, and sovereign administrator parameters.
            </p>
          </Link>

        </div>

        {/* Structural Calibration Footer */}
        <div className="mt-10 pt-6 border-t border-[#262626] flex flex-col sm:flex-row justify-between items-start sm:items-center text-[11px] font-mono text-neutral-500 gap-2">
          <div>STATUS: COMPONENT ROUTING STABILIZED</div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#eb153c] animate-pulse"></span>
            PORTAL SECURE // COGNITIVE METAPHOR ENGINE
          </div>
        </div>

      </div>
    </main>
  );
}