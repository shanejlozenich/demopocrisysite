export default function ReconstructionPage() {
  const frameworks = [
    {
      title: "Procedural Transparency",
      description:
        "Systems should preserve contextual continuity and allow visibility into institutional decision-making pathways.",
    },
    {
      title: "Human-Centered Review",
      description:
        "Procedural systems must account for lived experience, environmental conditions, and narrative integrity.",
    },
    {
      title: "Context Preservation",
      description:
        "Institutional memory structures should retain contextual evidence alongside classification systems.",
    },
    {
      title: "Relational Accountability",
      description:
        "Agencies operating within interconnected systems should maintain traceable responsibility across procedural chains.",
    },
    {
      title: "Coherence Evaluation",
      description:
        "Justice systems may benefit from evaluating systemic coherence rather than relying solely on categorical interpretation.",
    },
    {
      title: "Adaptive Frameworks",
      description:
        "Future institutional systems should evolve dynamically in response to evidence, social change, and procedural outcomes.",
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
            Procedural Futures / Structural Redesign / Institutional Evolution
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight">
            Reconstruction
          </h1>

          <p className="mt-8 text-xl text-neutral-400 leading-relaxed max-w-4xl">
            Explorations into alternative systems of procedural justice,
            institutional accountability, coherence-centered evaluation,
            and adaptive societal frameworks.
          </p>

        </div>

        {/* Framework Grid */}
        <section className="mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {frameworks.map((framework) => (
            <div
              key={framework.title}
              className="border border-neutral-800 bg-black/20 p-8 hover:border-neutral-600 transition-all"
            >
              <h2 className="text-2xl font-semibold">
                {framework.title}
              </h2>

              <p className="mt-6 text-neutral-400 leading-relaxed">
                {framework.description}
              </p>
            </div>
          ))}

        </section>

        {/* Reconstruction Sequence */}
        <section className="mt-28">

          <div className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8">
            Structural Sequence
          </div>

          <div className="flex flex-col xl:flex-row gap-6">

            {[
              "Observation",
              "Analysis",
              "Context Recovery",
              "Systems Redesign",
              "Adaptive Integration",
              "Coherent Continuity",
            ].map((step, index) => (
              <div
                key={step}
                className="flex-1 border border-neutral-800 bg-black/20 p-6"
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
            Reconstruction Principle
          </div>

          <div className="space-y-8 text-lg text-neutral-300 leading-relaxed">

            <p>
              Reconstruction is not merely correction of procedural error.
              It is the redesign of relational systems that have lost
              coherence between structure and human reality.
            </p>

            <p>
              Future institutional systems may require adaptive models
              capable of integrating context, memory continuity,
              environmental conditions, and relational accountability.
            </p>

            <p>
              Sustainable justice frameworks must preserve not only order,
              but intelligibility, proportionality, and human continuity
              across time.
            </p>

          </div>

        </section>

      </section>

    </main>
  )
}