import React from 'react';

interface SystemNode {
  title: string;
  connections: string[];
}

export default function NetworkAnalysisPage() {
  const systems: SystemNode[] = [
    {
      title: "Court Systems",
      connections: [
        "Superior Court",
        "Municipal Court",
        "Public Defense",
        "Competency Evaluation",
      ],
    },
    {
      title: "Medical Systems",
      connections: [
        "Behavioral Health",
        "Psychiatric Facilities",
        "Emergency Services",
        "Crisis Intervention",
      ],
    },
    {
      title: "Law Enforcement",
      connections: [
        "Police Reports",
        "Incident Tracking",
        "Custodial Transfer",
        "Risk Classification",
      ],
    },
    {
      title: "Information Systems",
      connections: [
        "Digital Records",
        "Cross-Agency Databases",
        "Procedural Histories",
        "Administrative Metadata",
      ],
    },
  ];

  const proceduralSteps: string[] = [
    "Incident",
    "Law Enforcement",
    "Court Intake",
    "Evaluation",
    "Institutional Record",
    "System Reinforcement",
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      
      {/* High-Contrast Architectural Background Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Main Structural Content Container */}
      <section className="relative z-10 px-6 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto">

        {/* Header Block */}
        <div className="max-w-4xl border-b border-[#262626] pb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#eb153c] font-semibold mb-3">
            Procedural Relationships // Agency Topology
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase font-mono text-white">
            Network Analysis
          </h1>
          <p className="mt-6 text-sm md:text-base text-neutral-400 leading-relaxed max-w-3xl">
            Mapping procedural interactions between courts, medical systems,
            law enforcement, evaluators, databases, and institutional memory structures.
          </p>
        </div>

        {/* Relational Matrix / Network Visualization */}
        <section className="mt-20">
          <div className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-mono mb-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#eb153c] rounded-full"></span>
            Relational Systems Matrix
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {systems.map((system) => (
              <div
                key={system.title}
                className="border border-[#262626] bg-[#121212] p-6 rounded-sm hover:border-[#eb153c] transition-all duration-300 group"
              >
                <h2 className="text-lg font-semibold tracking-wide uppercase text-white font-mono group-hover:text-[#eb153c] transition-colors duration-200">
                  {system.title}
                </h2>

                <div className="mt-6 space-y-3">
                  {system.connections.map((connection) => (
                    <div
                      key={connection}
                      className="border-l border-[#262626] pl-4 text-xs text-neutral-400 hover:text-white hover:border-neutral-400 transition-all duration-150"
                    >
                      {connection}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Procedural Flow Sequence */}
        <section className="mt-24">
          <div className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-mono mb-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#eb153c] rounded-full"></span>
            Procedural Flow Sequence
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {proceduralSteps.map((step, index) => (
              <div
                key={step}
                className="border border-[#262626] p-5 bg-[#121212] rounded-sm relative flex flex-col justify-between"
              >
                <div className="text-[10px] font-mono text-[#eb153c]">
                  {String(index + 1).padStart(2, "0")} //
                </div>
                <div className="mt-4 text-sm font-medium tracking-wide uppercase font-mono text-neutral-200">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stratigraphic Systems Observation */}
        <section className="mt-24 max-w-3xl border-t border-[#262626] pt-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[#eb153c] font-mono mb-6">
            Systems Observation Data
          </div>

          <div className="space-y-6 text-sm text-neutral-400 leading-relaxed font-sans">
            <p>
              Institutional outcomes rarely emerge from isolated decisions. 
              They emerge through recursive interaction between partially connected procedural systems.
            </p>
            <p>
              As information passes between agencies, interpretation layers 
              accumulate, often reshaping narrative continuity and procedural identity.
            </p>
            <p>
              Network analysis reveals that institutional behavior is frequently 
              emergent rather than singularly intentional.
            </p>
          </div>
        </section>

      </section>
    </main>
  );
}
