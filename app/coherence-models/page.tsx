export default function CoherenceModelsPage() {
  const models = [
    {
      title: "Self Coherence",
      description:
        "Alignment between internal identity, memory continuity, emotional regulation, and behavioral consistency.",
    },
    {
      title: "Social Coherence",
      description:
        "Relationship between individual experience and surrounding cultural, familial, and societal structures.",
    },
    {
      title: "Institutional Coherence",
      description:
        "Degree of alignment between institutional interpretation and lived contextual reality.",
    },
    {
      title: "Environmental Coherence",
      description:
        "Interaction between physical environment, circumstance, timing, and adaptive human response.",
    },
    {
      title: "Narrative Coherence",
      description:
        "The continuity and integrity of personal narrative across time, memory, and procedural interaction.",
    },
    {
      title: "Procedural Coherence",
      description:
        "Consistency between systems, policies, documentation, and actual operational behavior.",
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
            Human Systems / Relational Alignment / Structural Continuity
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight">
            Coherence Models
          </h1>

          <p className="mt-8 text-xl text-neutral-400 leading-relaxed max-w-4xl">
            Experimental frameworks exploring the alignment between
            individual experience, institutional systems, collective culture,
            environmental conditions, and procedural interpretation.
          </p>

        </div>

        {/* Coherence Grid */}
        <section className="mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {models.map((model) => (
            <div
              key={model.title}
              className="border border-neutral-800 bg-black/20 p-8 hover:border-neutral-600 transition-all"
            >
              <h2 className="text-2xl font-semibold">
                {model.title}
              </h2>

              <p className="mt-6 text-neutral-400 leading-relaxed">
                {model.description}
              </p>
            </div>
          ))}

        </section>

        {/* Diagram Section */}
        <section className="mt-28">

          <div className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8">
            Relational Framework
          </div>

          <div className="border border-neutral-800 p-12">

            <div className="flex flex-col xl:flex-row items-center justify-between gap-8">

              <div className="border border-neutral-700 px-8 py-6">
                Self
              </div>

              <div className="text-neutral-600 text-2xl">
                →
              </div>

              <div className="border border-neutral-700 px-8 py-6">
                Culture
              </div>

              <div className="text-neutral-600 text-2xl">
                →
              </div>

              <div className="border border-neutral-700 px-8 py-6">
                Institution
              </div>

              <div className="text-neutral-600 text-2xl">
                →
              </div>

              <div className="border border-neutral-700 px-8 py-6">
                Environment
              </div>

            </div>

          </div>

        </section>

        {/* Observation */}
        <section className="mt-28 max-w-4xl">

          <div className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8">
            Systems Observation
          </div>

          <div className="space-y-8 text-lg text-neutral-300 leading-relaxed">

            <p>
              Coherence is not absolute agreement between systems.
              It is the degree to which relational structures maintain
              continuity without fragmentation or recursive contradiction.
            </p>

            <p>
              Human distress frequently emerges when institutional,
              environmental, and narrative systems diverge beyond
              sustainable thresholds of integration.
            </p>

            <p>
              Measuring coherence may provide alternative frameworks
              for evaluating procedural justice, social stability,
              and human adaptation.
            </p>

          </div>

        </section>

      </section>

    </main>
  )
}