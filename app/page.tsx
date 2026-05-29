import Link from "next/link";

export default function Home() {
  const navLinks = [
    { name: "Cases", href: "/cases" },
    { name: "Memory", href: "/memory" },
    { name: "Archive", href: "/archive" },
    { name: "Network", href: "/network" },
    { name: "Coherence", href: "/coherence" },
    { name: "Reconstruction", href: "/reconstruction" },
  ];

  const cards = [
    {
      title: "Cases",
      description: "Procedural archives and institutional records.",
      href: "/cases",
    },
    {
      title: "System Memory",
      description: "Institutional continuity and memory structures.",
      href: "/memory",
    },
    {
      title: "Network Analysis",
      description: "Agency interaction and procedural mapping.",
      href: "/network",
    },
    {
      title: "Collective Archive",
      description: "Historical fragmentation and procedural memory.",
      href: "/archive",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white font-sans px-6 md:px-16 lg:px-24">
      {/* Navigation Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between py-8 border-b border-zinc-800/50 gap-4">
        <div className="text-xl font-bold tracking-wider text-zinc-400 select-none">
          DEMOPOCRISY
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col justify-center py-16 max-w-5xl">
        <div className="space-y-4 mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white uppercase">
            Demopocrisy
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl">
            Institutional memory, procedural systems, and network analysis.
          </p>
        </div>

        {/* Dashboard/Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group block p-8 rounded-lg bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700/80 transition-all duration-300 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-zinc-200 transition-colors">
                {card.title}
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}