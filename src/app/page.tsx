"use client";
import Link from "next/link";
import { ArrowRight, Users, Star, BookOpen, Sparkles, Award } from "lucide-react";
import { useState, useEffect } from "react";

const QUOTES = [
  { text: "Education is not the filling of a pail, but the lighting of a fire.", author: "W.B. Yeats" },
  { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
  { text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin" },
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
  { text: "The roots of education are bitter, but the fruit is sweet.", author: "Aristotle" },
  { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
];

const STATS = [
  { label: "Teams", value: "10", icon: Users, color: "#38bdf8" },
  { label: "Presentations", value: "10", icon: BookOpen, color: "#a78bfa" },
  { label: "Projects", value: "10+", icon: Star, color: "#f472b6" },
  { label: "Excellence", value: "100%", icon: Award, color: "#fbbf24" },
];

const COLORS = [
  ['#38bdf8', '#0ea5e9'],
  ['#a78bfa', '#7c3aed'],
  ['#f472b6', '#db2777'],
  ['#34d399', '#059669'],
  ['#fb923c', '#ea580c'],
  ['#fbbf24', '#d97706'],
  ['#818cf8', '#4f46e5'],
  ['#2dd4bf', '#0d9488'],
  ['#f87171', '#dc2626'],
  ['#c084fc', '#9333ea'],
];

export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quoteVisible, setQuoteVisible] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setQuoteVisible(false);
      setTimeout(() => {
        setQuoteIndex(i => (i + 1) % QUOTES.length);
        setQuoteVisible(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  const q = QUOTES[quoteIndex];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5rem', paddingTop: '3rem', paddingBottom: '4rem' }}>

      {/* ── Hero Section ─────────────────────────────────── */}
      <section style={{ textAlign: 'center', maxWidth: '900px', width: '100%' }}>
        {/* Badge */}
        <div className="animate-badge-pop" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '8px 20px', borderRadius: '100px', marginBottom: '2rem',
          background: 'rgba(56,189,248,0.08)',
          border: '1px solid rgba(56,189,248,0.25)',
          backdropFilter: 'blur(12px)',
        }}>
          <Sparkles style={{ width: 14, height: 14, color: '#38bdf8' }} />
          <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#38bdf8' }}>
            SRM Institute of Science and Technology, KTR
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up delay-100" style={{
          fontSize: 'clamp(3rem, 9vw, 7rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          marginBottom: '1.5rem',
          color: 'var(--text-primary)',
        }}>
          English PBL{' '}
          <span className="gradient-text">Showcase</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-200" style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.7,
          fontWeight: 400,
        }}>
          Explore phenomenal Project Based Learning presentations from{' '}
          <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Section O1, Room 822</strong>.
          <br />
          <span style={{ fontSize: '0.9em', opacity: 0.75, marginTop: '0.25rem', display: 'inline-block' }}>
            Faculty: Dr. B. Monika Nair
          </span>
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up delay-300">
          <Link href="/teams" style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            padding: '18px 40px', borderRadius: '16px',
            background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
            color: 'white', fontWeight: 800, fontSize: '1.1rem',
            textDecoration: 'none', letterSpacing: '-0.01em',
            boxShadow: '0 0 40px rgba(56,189,248,0.35), 0 20px 60px rgba(0,0,0,0.4)',
            transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
            position: 'relative', overflow: 'hidden',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 0 60px rgba(56,189,248,0.5), 0 25px 70px rgba(0,0,0,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(56,189,248,0.35), 0 20px 60px rgba(0,0,0,0.4)';
            }}
          >
            <Users style={{ width: 22, height: 22 }} />
            Explore All Teams
            <ArrowRight style={{ width: 20, height: 20 }} />
          </Link>
        </div>
      </section>

      {/* ── Stats Row ────────────────────────────────────── */}
      <section className="animate-fade-in-up delay-400" style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '1rem', width: '100%', maxWidth: '700px'
      }}>
        {STATS.map(({ label, value, icon: Icon, color }) => (
          <div key={label} style={{
            background: 'rgba(13,31,56,0.6)', backdropFilter: 'blur(20px)',
            border: '1px solid rgba(148,163,184,0.1)',
            borderRadius: '16px', padding: '1.25rem', textAlign: 'center',
            transition: 'all 0.3s ease',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = color + '40';
              e.currentTarget.style.boxShadow = `0 10px 40px ${color}20`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Icon style={{ width: 24, height: 24, color, margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color, lineHeight: 1 }}>{value}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
          </div>
        ))}
      </section>

      {/* ── Animated Quote ───────────────────────────────── */}
      <section style={{ width: '100%', maxWidth: '750px', textAlign: 'center' }}>
        <div style={{
          background: 'rgba(13,31,56,0.5)', backdropFilter: 'blur(24px)',
          border: '1px solid rgba(56,189,248,0.15)', borderRadius: '24px',
          padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden',
        }}>
          {/* Decorative quote mark */}
          <div style={{
            position: 'absolute', top: '-20px', left: '30px',
            fontSize: '8rem', color: 'rgba(56,189,248,0.08)', fontFamily: 'Georgia, serif',
            lineHeight: 1, userSelect: 'none', pointerEvents: 'none', fontWeight: 900,
          }}>"</div>
          <div style={{
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            opacity: quoteVisible ? 1 : 0,
            transform: quoteVisible ? 'translateY(0)' : 'translateY(10px)',
            position: 'relative', zIndex: 1,
          }}>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontStyle: 'italic',
              color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '1rem', fontWeight: 500,
            }}>
              &ldquo;{q.text}&rdquo;
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.04em' }}>
              — {q.author}
            </p>
          </div>
          {/* Quote dots indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '1.25rem', position: 'relative', zIndex: 1 }}>
            {QUOTES.map((_, i) => (
              <button key={i} onClick={() => { setQuoteVisible(false); setTimeout(() => { setQuoteIndex(i); setQuoteVisible(true); }, 300); }} style={{
                width: i === quoteIndex ? '20px' : '6px', height: '6px', borderRadius: '100px',
                background: i === quoteIndex ? 'var(--accent)' : 'rgba(148,163,184,0.3)',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'all 0.3s ease',
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Preview Grid ────────────────────────────── */}
      <section style={{ width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 className="animate-fade-in-up" style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900,
            letterSpacing: '-0.03em', marginBottom: '0.75rem',
          }}>
            Meet the <span className="gradient-text">Teams</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Click on any team to explore their work
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem', width: '100%',
        }}>
          {COLORS.map(([c1, c2], i) => (
            <Link key={i} href={`/teams/team${i}`} style={{ textDecoration: 'none' }}>
              <div className="animate-card-enter gradient-border" style={{
                animationDelay: `${i * 0.07}s`,
                padding: '1.5rem', textAlign: 'center', cursor: 'pointer',
                background: 'rgba(13,31,56,0.7)', backdropFilter: 'blur(16px)',
                borderRadius: '20px', border: '1px solid rgba(148,163,184,0.1)',
                transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
                position: 'relative', overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                  e.currentTarget.style.boxShadow = `0 20px 60px ${c1}30, 0 0 40px ${c1}20`;
                  e.currentTarget.style.borderColor = c1 + '50';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)';
                }}
              >
                {/* background gradient blob */}
                <div style={{
                  position: 'absolute', inset: 0, opacity: 0.06,
                  background: `radial-gradient(circle at 50% 50%, ${c1}, transparent 70%)`,
                  borderRadius: 'inherit',
                }} />
                <div style={{
                  width: '60px', height: '60px', borderRadius: '16px', margin: '0 auto 1rem',
                  background: `linear-gradient(135deg, ${c1}30, ${c2}20)`,
                  border: `1.5px solid ${c1}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.8rem', fontWeight: 900,
                  color: c1,
                  position: 'relative', zIndex: 1,
                  boxShadow: `0 0 20px ${c1}25`,
                }}>
                  {i}
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '4px' }}>Team {i}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>View Project →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
