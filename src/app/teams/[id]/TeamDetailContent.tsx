"use client";

import Link from "next/link";
import { Download, ExternalLink, FileText, Play, ArrowLeft, Eye, Sparkles, Trophy } from "lucide-react";
import EnterAnimation from "./EnterAnimation";
import { useState } from "react";

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

interface TeamDetailContentProps {
  team: {
    id: string;
    name: string;
    index: number;
    videoPath: string | null;
    presentationPath: string | null;
    modelPath: string | null;
  };
}

export default function TeamDetailContent({ team }: TeamDetailContentProps) {
  const [c1, c2] = COLORS[team.index % COLORS.length];

  return (
    <EnterAnimation>
      <div style={{ paddingBottom: '5rem' }}>

        {/* Back link */}
        <Link href="/teams" style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontSize: '0.875rem', color: 'var(--text-muted)', textDecoration: 'none',
          fontWeight: 600, marginBottom: '2rem',
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.color = c1}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          <ArrowLeft style={{ width: 14, height: 14 }} /> Back to Teams
        </Link>

        {/* ── Hero Header ─────────────────────────────── */}
        <header style={{
          marginBottom: '2.5rem', padding: '2.5rem',
          background: `linear-gradient(135deg, rgba(13,31,56,0.85), rgba(4,13,26,0.7))`,
          backdropFilter: 'blur(28px)',
          borderRadius: '28px',
          border: `1px solid ${c1}35`,
          boxShadow: `0 0 80px ${c1}12, 0 30px 80px rgba(0,0,0,0.4)`,
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 0% 0%, ${c1}12, transparent 55%)`, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 100% 100%, ${c2}08, transparent 55%)`, pointerEvents: 'none' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', position: 'relative', zIndex: 1, flexWrap: 'wrap' }}>
            <div style={{
              width: '80px', height: '80px', borderRadius: '22px', flexShrink: 0,
              background: `linear-gradient(135deg, ${c1}, ${c2})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.25rem', fontWeight: 900, color: 'white',
              boxShadow: `0 0 40px ${c1}50, 0 10px 30px rgba(0,0,0,0.4)`,
            }}>
              {team.index}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Sparkles style={{ width: 14, height: 14, color: c1 }} />
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: c1 }}>
                  English PBL · Section O1
                </span>
              </div>
              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900,
                letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '4px',
                color: 'var(--text-primary)',
              }}>
                {team.name}{' '}
                <span style={{
                  WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  background: `linear-gradient(135deg, ${c1}, ${c2})`,
                }}>Showcase</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 500 }}>
                Room 822 · Faculty: Dr. B. Monika Nair
              </p>
            </div>

            <Trophy style={{ width: 44, height: 44, color: c1, opacity: 0.35 }} />
          </div>
        </header>

        {/* ── Content Grid ─────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) 300px',
          gap: '1.25rem',
          alignItems: 'start',
        }}>

          {/* ── Video ── */}
          <div style={{
            background: 'rgba(13,31,56,0.75)', backdropFilter: 'blur(20px)',
            border: `1px solid ${c1}20`, borderRadius: '22px',
            overflow: 'hidden',
            boxShadow: `0 20px 60px rgba(0,0,0,0.5)`,
          }}>
            <div style={{
              padding: '13px 18px', display: 'flex', alignItems: 'center', gap: '7px',
              background: 'rgba(4,13,26,0.7)', borderBottom: `1px solid ${c1}12`,
            }}>
              <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#f87171' }} />
              <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#fbbf24' }} />
              <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#34d399' }} />
              <span style={{ marginLeft: '10px', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                Presentation Video
              </span>
            </div>

            <div style={{ background: '#000', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              {team.videoPath ? (
                <video
                  controls
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                  src={team.videoPath}
                />
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', padding: '3rem' }}>
                  <div style={{
                    width: '72px', height: '72px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `${c1}12`, border: `1.5px dashed ${c1}30`,
                  }}>
                    <Play style={{ width: 32, height: 32, opacity: 0.35 }} />
                  </div>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600 }}>No video uploaded yet</p>
                  <p style={{ fontSize: '0.78rem', opacity: 0.6 }}>Check back soon</p>
                </div>
              )}
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Deliverables */}
            <div style={{
              background: 'rgba(13,31,56,0.75)', backdropFilter: 'blur(20px)',
              border: `1px solid rgba(148,163,184,0.1)`, borderRadius: '20px', padding: '1.4rem',
            }}>
              <h3 style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1.1rem',
              }}>
                <FileText style={{ width: 16, height: 16, color: c1 }} />
                Project Deliverables
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {team.presentationPath ? (
                  <div style={{
                    background: 'rgba(4,13,26,0.6)', borderRadius: '14px',
                    border: '1px solid rgba(167,139,250,0.15)', padding: '1rem',
                    transition: 'all 0.25s ease',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(167,139,250,0.4)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(167,139,250,0.15)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(167,139,250,0.15)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <div>
                        <p style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Presentation</p>
                        <p style={{ fontSize: '0.68rem', color: '#a78bfa', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Document</p>
                      </div>
                      <div style={{ padding: '7px', background: 'rgba(167,139,250,0.1)', borderRadius: '9px' }}>
                        <FileText style={{ width: 16, height: 16, color: '#a78bfa' }} />
                      </div>
                    </div>
                    <a href={team.presentationPath} target="_blank" rel="noopener noreferrer" style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                      width: '100%', padding: '9px', borderRadius: '10px', textDecoration: 'none',
                      background: 'rgba(167,139,250,0.1)', color: '#a78bfa',
                      fontWeight: 700, fontSize: '0.78rem',
                      border: '1px solid rgba(167,139,250,0.2)',
                    }}>
                      <Eye style={{ width: 13, height: 13 }} /> View / Download
                    </a>
                  </div>
                ) : null}

                {team.modelPath ? (
                  <div style={{
                    background: 'rgba(4,13,26,0.6)', borderRadius: '14px',
                    border: '1px solid rgba(52,211,153,0.15)', padding: '1rem',
                    transition: 'all 0.25s ease',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(52,211,153,0.4)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(52,211,153,0.15)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(52,211,153,0.15)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <div>
                        <p style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Project Model</p>
                        <p style={{ fontSize: '0.68rem', color: '#34d399', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Asset</p>
                      </div>
                      <div style={{ padding: '7px', background: 'rgba(52,211,153,0.1)', borderRadius: '9px' }}>
                        <ExternalLink style={{ width: 16, height: 16, color: '#34d399' }} />
                      </div>
                    </div>
                    <a href={team.modelPath} target="_blank" rel="noopener noreferrer" style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                      width: '100%', padding: '9px', borderRadius: '10px', textDecoration: 'none',
                      background: 'rgba(52,211,153,0.1)', color: '#34d399',
                      fontWeight: 700, fontSize: '0.78rem',
                      border: '1px solid rgba(52,211,153,0.2)',
                    }}>
                      <Download style={{ width: 13, height: 13 }} /> Download Asset
                    </a>
                  </div>
                ) : null}
              </div>
            </div>

            {/* Team navigator */}
            <div style={{
              background: 'rgba(13,31,56,0.75)', backdropFilter: 'blur(20px)',
              border: 'rgba(148,163,184,0.08) 1px solid', borderRadius: '20px', padding: '1.2rem',
            }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>Browse Teams</p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {[...Array(10)].map((_, i) => {
                  const [tc, tc2] = COLORS[i];
                  const isActive = i === team.index;
                  return (
                    <Link key={i} href={`/teams/team${i}`} style={{
                      width: '36px', height: '36px', borderRadius: '10px', textDecoration: 'none',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 800, fontSize: '0.82rem',
                      background: isActive ? `linear-gradient(135deg, ${tc}, ${tc2})` : 'rgba(148,163,184,0.07)',
                      color: isActive ? 'white' : 'var(--text-muted)',
                      border: `1px solid ${isActive ? tc + '55' : 'rgba(148,163,184,0.1)'}`,
                      boxShadow: isActive ? `0 0 16px ${tc}40` : 'none',
                      transition: 'all 0.2s ease',
                    }}
                      onMouseEnter={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = `${tc}20`;
                          e.currentTarget.style.color = tc;
                          e.currentTarget.style.borderColor = `${tc}40`;
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'rgba(148,163,184,0.07)';
                          e.currentTarget.style.color = 'var(--text-muted)';
                          e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)';
                        }
                      }}
                    >
                      {i}
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </EnterAnimation>
  );
}
