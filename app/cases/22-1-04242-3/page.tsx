export default function CasePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f1e8] px-8 md:px-20 py-16">

      <section className="border-b border-neutral-800 pb-10">

        <div className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Case File / Procedural Archive
        </div>

        <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight">
          Case XXXXX
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-neutral-400 leading-relaxed">
          Procedural analysis and institutional interaction archive.
        </p>

      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        <div className="border border-neutral-800 p-6">
          <div className="text-sm uppercase tracking-wide text-neutral-500">
            Status
          </div>

          <div className="mt-4 text-2xl">
            Archived
          </div>
        </div>

        <div className="border border-neutral-800 p-6">
          <div className="text-sm uppercase tracking-wide text-neutral-500">
            Classification
          </div>

          <div className="mt-4 text-2xl">
            Institutional
          </div>
        </div>

        <div className="border border-neutral-800 p-6">
          <div className="text-sm uppercase tracking-wide text-neutral-500">
            Systemic Factors
          </div>

          <div className="mt-4 text-2xl">
            Procedural Drift
          </div>
        </div>

      </section>

    </main>
  )
}