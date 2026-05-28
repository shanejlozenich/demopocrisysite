import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "Demopocrisy",
  description: "Institutional Memory & Procedural Systems",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-[#f5f1e8]">

        {/* Navigation */}
        <nav className="border-b border-neutral-800 px-8 py-5 flex items-center justify-between sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50">

          <Link
            href="/"
            className="text-xl font-bold tracking-wide"
          >
            DEMOPOCRISY
          </Link>

          <div className="flex gap-6 text-sm text-neutral-400">
            <Link href="/cases">Cases</Link>
            <Link href="/system-memory">Memory</Link>
            <Link href="/collective-archive">Archive</Link>
            <Link href="/network-analysis">Network</Link>
            <Link href="/coherence-models">Coherence</Link>
            <Link href="/reconstruction">Reconstruction</Link>
          </div>

        </nav>

        {children}

      </body>
    </html>
  )
}