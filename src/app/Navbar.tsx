"use client";

export default function Navbar() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(4,13,26,0.85)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: '1px solid rgba(56,189,248,0.1)',
      padding: '0 2rem',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '34px', height: '34px', borderRadius: '10px',
          background: 'linear-gradient(135deg, #38bdf8, #a78bfa)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '16px', fontWeight: 900, color: 'white',
          boxShadow: '0 0 20px rgba(56,189,248,0.4)'
        }}>E</div>
        <span style={{ fontWeight: 800, fontSize: '15px', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
          English <span style={{ color: 'var(--accent)' }}>PBL</span>
        </span>
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <a href="/teams" style={{
          padding: '8px 18px', borderRadius: '10px', fontSize: '14px', fontWeight: 600,
          background: 'rgba(56,189,248,0.1)', color: 'var(--accent)',
          border: '1px solid rgba(56,189,248,0.2)', textDecoration: 'none',
          transition: 'all 0.2s ease',
        }}
          onMouseEnter={e => {
            const t = e.currentTarget;
            t.style.background = 'rgba(56,189,248,0.2)';
            t.style.borderColor = 'rgba(56,189,248,0.5)';
          }}
          onMouseLeave={e => {
            const t = e.currentTarget;
            t.style.background = 'rgba(56,189,248,0.1)';
            t.style.borderColor = 'rgba(56,189,248,0.2)';
          }}
        >
          All Teams
        </a>
      </div>
    </nav>
  );
}
