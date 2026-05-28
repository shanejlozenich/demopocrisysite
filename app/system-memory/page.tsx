export default function SystemMemoryPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f1e8] px-8 md:px-20 py-16">

      <section className="max-w-6xl">

        <div className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Institutional Continuity / Procedural Retention
        </div>

        <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight">
          System Memory
        </h1>

        <p className="mt-8 max-w-4xl text-xl text-neutral-400 leading-relaxed">
          Examination of how institutions store, preserve, reinterpret,
          and operationalize identity, risk, psychiatric classification,
          and procedural history across time.
        </p>

      </section>

      {/* Core Concepts */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">

        <div className="border border-neutral-800 p-8">
          <h2 className="text-3xl font-semibold">
            Classification Persistence
          </h2>

          <p className="mt-6 text-neutral-400 leading-relaxed">
            Institutional systems often preserve categorical labels
            longer than contextual evidence, creating long-term identity
            persistence independent of narrative continuity.
          </p>
        </div>

        <div className="border border-neutral-800 p-8">
          <h2 className="text-3xl font-semibold">
            Procedural Memory Drift
          </h2>

          <p className="mt-6 text-neutral-400 leading-relaxed">
            As records circulate through agencies, interpretation layers
            accumulate and gradually diverge from originating events.
          </p>
        </div>

        <div className="border border-neutral-800 p-8">
          <h2 className="text-3xl font-semibold">
            Psychiatric Encoding
          </h2>

          <p className="mt-6 text-neutral-400 leading-relaxed">
            Behavioral interpretation may become institutionalized in ways
            that reshape future procedural interactions.
          </p>
        </div>

        <div className="border border-neutral-800 p-8">
          <h2 className="text-3xl font-semibold">
            Recursive Documentation
          </h2>

          <p className="mt-6 text-neutral-400 leading-relaxed">
            Systems frequently reference prior institutional conclusions,
            reinforcing memory structures through repetition.
          </p>
        </div>

      </section>

      {/* Closing */}
      <section className="mt-24 max-w-4xl">

        <div className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8">
          Observation
        </div>

        <p className="text-lg text-neutral-300 leading-relaxed">
          Institutional memory is not passive storage. It is an active
          procedural force that shapes future interpretation, response,
          classification, and access.
        </p>

      </section>

    </main>
  )
}