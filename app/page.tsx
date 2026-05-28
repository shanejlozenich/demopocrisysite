import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-10 py-20">

      <h1 className="text-6xl font-bold">
        DEMOPOCRISY
      </h1>

      <p className="mt-6 text-neutral-400 max-w-2xl">
        Institutional memory, procedural systems, and network analysis.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">

        <Link
          href="/cases"
          className="border border-neutral-800 p-6 hover:border-neutral-500"
        >
          <h2 className="text-2xl font-semibold">
            Cases
          </h2>

          <p className="mt-4 text-neutral-400">
            Procedural archives and institutional records.
          </p>
        </Link>

        <Link
          href="/system-memory"
          className="border border-neutral-800 p-6 hover:border-neutral-500"
        >
          <h2 className="text-2xl font-semibold">
            System Memory
          </h2>

          <p className="mt-4 text-neutral-400">
            Institutional continuity and memory structures.
          </p>
        </Link>

        <Link
          href="/network-analysis"
          className="border border-neutral-800 p-6 hover:border-neutral-500"
        >
          <h2 className="text-2xl font-semibold">
            Network Analysis
          </h2>

          <p className="mt-4 text-neutral-400">
            Agency interaction and procedural mapping.
          </p>
        </Link>

        <Link
          href="/collective-archive"
          className="border border-neutral-800 p-6 hover:border-neutral-500"
        >
          <h2 className="text-2xl font-semibold">
            Collective Archive
          </h2>

          <p className="mt-4 text-neutral-400">
            Historical fragmentation and procedural memory.
          </p>
        </Link>

      </div>

    </main>
  )
}