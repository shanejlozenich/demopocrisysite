export default function NetworkAnalysisPage() {
  const systems = [
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
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f1e8] overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Main Content */}
      <section className="relative z-10 px-8 md:px-20 py-16">

        {/* Header */}
        <div className="max-w-5xl">

          <div className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Procedural Relationships / Agency Topology
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight">
            Network Analysis
          </h1>

          <p className="mt-8 text-xl text-neutral-400 leading-relaxed max-w-4xl">
            Mapping procedural interactions between courts, medical systems,
            law enforcement, evaluators, databases, and institutional memory structures.
          </p>

        </div>

        {/* Network Visualization */}
        <section className="mt-24">

          <div className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-10">
            Relational Systems
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {systems.map((system) => (
              <div
                key={system.title}
                className="border border-neutral-800 bg-black/30 backdrop-blur-sm p-8 hover:border-neutral-600 transition-all"
              >
                <h2 className="text-2xl font-semibold">
                  {system.title}
                </h2>

                <div className="mt-8 space-y-4">

                  {system.connections.map((connection) => (
                    <div
                      key={connection}
                      className="border-l border-neutral-700 pl-4 text-neutral-400 hover:text-white transition-all"
                    >
                      {connection}
                    </div>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* Procedural Flow */}
        <section className="mt-28">

          <div className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-10">
            Procedural Flow Sequence
          </div>

          <div className="flex flex-col xl:flex-row gap-6 items-stretch">

            {[
              "Incident",
              "Law Enforcement",
              "Court Intake",
              "Evaluation",
              "Institutional Record",
              "System Reinforcement",
            ].map((step, index) => (
              <div
                key={step}
                className="flex-1 border border-neutral-800 p-6 bg-black/20"
              >
                <div className="text-sm text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="mt-4 text-xl font-medium">
                  {step}
                </div>
              </div>
            ))}

          </div>

        </section>

        {/* Observation */}
        <section className="mt-28 max-w-4xl">

          <div className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8">
            Systems Observation
          </div>

          <div className="space-y-8 text-lg text-neutral-300 leading-relaxed">

            <p>
              Institutional outcomes rarely emerge from isolated decisions.
              They emerge through recursive interaction between partially
              connected procedural systems.
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
  )
}