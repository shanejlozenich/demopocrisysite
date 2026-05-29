import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demopocrisy",
  description: "Institutional memory, procedural systems, and network analysis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0a0a0a] text-white antialiased">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Client-Side Corrected Global Header */}
        <header style={{
          backgroundColor: '#161616',
          borderBottom: '1px solid #262626',
          padding: '16px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo / System Anchor */}
          <div style={{ fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', fontSize: '0.95rem' }}>
            <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '8px', height: '8px', backgroundColor: '#eb153c', borderRadius: '50%' }}></span>
              IRES // SYSTEM
            </Link>
          </div>

          {/* Corrected Navigation Router Matrix */}
<nav style={{ display: 'flex', gap: '24px' }}>
  <Link href="/" style={{ 
    color: '#a3a3a3', 
    textDecoration: 'none', 
    fontSize: '0.85rem', 
    textTransform: 'uppercase', 
    letterSpacing: '1px',
    fontWeight: 500
  }}>
    Home
  </Link>
  
  <Link href="/cases" style={{ 
    color: '#a3a3a3', 
    textDecoration: 'none', 
    fontSize: '0.85rem', 
    textTransform: 'uppercase', 
    letterSpacing: '1px',
    fontWeight: 500
  }}>
    Cases
  </Link>

  {/* New System Analysis Routing Link */}
  <Link href="/system-analysis" style={{ 
    color: '#a3a3a3', 
    textDecoration: 'none', 
    fontSize: '0.85rem', 
    textTransform: 'uppercase', 
    letterSpacing: '1px',
    fontWeight: 500
  }}>
    Analysis
  </Link>
 
  <Link href="/admin-verification" style={{ 
    color: '#eb153c', 
    textDecoration: 'none', 
    fontSize: '0.85rem', 
    textTransform: 'uppercase', 
    letterSpacing: '1px',
    fontWeight: 600
  }}>
    System Admin
  </Link>
</nav>
        </header>

        {/* Dynamic App Route Wrapper */}
        <div className="flex-1 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}

