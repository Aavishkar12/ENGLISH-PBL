import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";

export const metadata: Metadata = {
  title: "English PBL Showcase | SRM IST KTR",
  description:
    "Showcasing the English Project Based Learning presentations from Section O1, Room 822. Faculty: Dr. B. Monika Nair, SRM IST KTR.",
  keywords: ["english pbl", "srm", "srmist", "ktr", "presentations", "section o1", "project based learning"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="relative flex flex-col min-h-screen overflow-hidden" style={{ background: 'var(--bg-base)' }}>

          {/* ── Aurora background blobs ── */}
          <div style={{
            position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0
          }}>
            <div style={{
              position: 'absolute', top: '-20%', left: '-10%',
              width: '700px', height: '700px',
              background: 'radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)',
              animation: 'aurora 18s ease-in-out infinite',
              borderRadius: '50%'
            }} />
            <div style={{
              position: 'absolute', bottom: '-20%', right: '-10%',
              width: '600px', height: '600px',
              background: 'radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%)',
              animation: 'aurora 22s ease-in-out infinite reverse',
              borderRadius: '50%'
            }} />
            <div style={{
              position: 'absolute', top: '40%', left: '40%',
              width: '400px', height: '400px',
              background: 'radial-gradient(circle, rgba(244,114,182,0.10) 0%, transparent 70%)',
              animation: 'aurora 14s ease-in-out infinite 5s',
              borderRadius: '50%'
            }} />
            {/* Star particles */}
            {[...Array(30)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                borderRadius: '50%',
                background: 'white',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `star-twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3
              }} />
            ))}
          </div>

          <Navbar />

          {/* ── Main Content ── */}
          <main style={{ flex: 1, position: 'relative', zIndex: 10, width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
            {children}
          </main>

          {/* ── Footer ── */}
          <footer style={{
            position: 'relative', zIndex: 10, textAlign: 'center',
            padding: '1.5rem', borderTop: '1px solid rgba(148,163,184,0.08)',
            color: 'var(--text-muted)', fontSize: '13px', fontWeight: 500
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span>© 2025 English PBL Showcase · SRM IST KTR Section O1 · Dr. B. Monika Nair</span>
              <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '14px', letterSpacing: '0.02em' }}>
                Created by Aavishkar Singh and Pranav Pratap Singh
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
