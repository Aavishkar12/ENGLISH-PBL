"use client";

import Link from "next/link";
import { ChevronRight, PlayCircle, FileText, FolderGit2 } from "lucide-react";

interface TeamCardProps {
  team: {
    id: string;
    name: string;
    index: number;
    videoPath: string | null;
    presentationPath: string | null;
    modelPath: string | null;
  };
  colors: string[];
  animationDelay: string;
}

export default function TeamCard({ team, colors, animationDelay }: TeamCardProps) {
  const [c1, c2] = colors;

  return (
    <Link href={`/teams/${team.id}`} style={{ textDecoration: 'none' }}>
      <div
        className="animate-card-enter"
        style={{
          animationDelay,
          background: 'rgba(13,31,56,0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(148,163,184,0.1)',
          borderRadius: '22px',
          padding: '1.75rem',
          cursor: 'pointer',
          transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget;
          el.style.transform = 'translateY(-12px) scale(1.02)';
          el.style.boxShadow = `0 25px 70px ${c1}25, 0 0 50px ${c1}15, inset 0 1px 0 ${c1}30`;
          el.style.borderColor = c1 + '60';
        }}
        onMouseLeave={e => {
          const el = e.currentTarget;
          el.style.transform = 'translateY(0) scale(1)';
          el.style.boxShadow = 'none';
          el.style.borderColor = 'rgba(148,163,184,0.1)';
        }}
      >
        {/* bg glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse at 50% 0%, ${c1}12, transparent 65%)`,
          borderRadius: 'inherit', pointerEvents: 'none',
        }} />

        {/* top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '14px',
            background: `linear-gradient(135deg, ${c1}25, ${c2}15)`,
            border: `1.5px solid ${c1}40`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.6rem', fontWeight: 900, color: c1,
            boxShadow: `0 4px 20px ${c1}20`,
          }}>{team.index}</div>
          <ChevronRight style={{ width: 16, height: 16, color: 'var(--text-muted)', marginTop: '4px' }} />
        </div>

        {/* Title */}
        <div style={{ position: 'relative', zIndex: 1, marginTop: '1.25rem' }}>
          <h2 style={{
            fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-primary)',
            marginBottom: '0.75rem', letterSpacing: '-0.02em',
          }}>{team.name}</h2>

          {/* Resource badges */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {team.videoPath && (
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '4px',
                fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.06em', padding: '3px 8px', borderRadius: '6px',
                background: 'rgba(56,189,248,0.12)', color: '#38bdf8',
                border: '1px solid rgba(56,189,248,0.2)',
              }}>
                <PlayCircle style={{ width: 10, height: 10 }} /> Video
              </span>
            )}
            {team.presentationPath && (
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '4px',
                fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.06em', padding: '3px 8px', borderRadius: '6px',
                background: 'rgba(167,139,250,0.12)', color: '#a78bfa',
                border: '1px solid rgba(167,139,250,0.2)',
              }}>
                <FileText style={{ width: 10, height: 10 }} /> Slides
              </span>
            )}
            {team.modelPath && (
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '4px',
                fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.06em', padding: '3px 8px', borderRadius: '6px',
                background: 'rgba(52,211,153,0.12)', color: '#34d399',
                border: '1px solid rgba(52,211,153,0.2)',
              }}>
                <FolderGit2 style={{ width: 10, height: 10 }} /> Model
              </span>
            )}
            {!team.videoPath && !team.presentationPath && !team.modelPath && (
              <span style={{
                fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)',
                padding: '3px 8px', borderRadius: '6px',
                background: 'rgba(148,163,184,0.08)',
                border: '1px solid rgba(148,163,184,0.1)',
              }}>Coming Soon</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
