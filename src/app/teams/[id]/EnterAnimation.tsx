"use client";

import { useEffect, useState } from "react";

export default function EnterAnimation({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    // Trigger burst immediately
    setBurst(true);
    // Fade in content shortly after
    const t = setTimeout(() => {
      setShow(true);
      setBurst(false);
    }, 650);
    return () => clearTimeout(t);
  }, []);

  const burstParticles = [
    { angle: 0,   dist: 90,  color: '#38bdf8' },
    { angle: 45,  dist: 120, color: '#a78bfa' },
    { angle: 90,  dist: 80,  color: '#f472b6' },
    { angle: 135, dist: 110, color: '#34d399' },
    { angle: 180, dist: 95,  color: '#38bdf8' },
    { angle: 225, dist: 130, color: '#fbbf24' },
    { angle: 270, dist: 85,  color: '#a78bfa' },
    { angle: 315, dist: 105, color: '#f472b6' },
  ];

  return (
    <>
      {/* ── Burst overlay ── */}
      {burst && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          {/* Expanding ring */}
          <div style={{
            position: 'absolute',
            width: '300px', height: '300px',
            borderRadius: '50%',
            border: '2px solid rgba(56,189,248,0.5)',
            animation: 'burst-ring 0.65s cubic-bezier(0,0,0.2,1) forwards',
          }} />
          {/* Inner glow */}
          <div style={{
            position: 'absolute',
            width: '80px', height: '80px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56,189,248,0.7), rgba(167,139,250,0.4), transparent)',
            animation: 'burst-glow 0.65s ease-out forwards',
          }} />
          {/* Particles */}
          {burstParticles.map((p, i) => {
            const rad = (p.angle * Math.PI) / 180;
            const tx = Math.cos(rad) * p.dist;
            const ty = Math.sin(rad) * p.dist;
            return (
              <div key={i} style={{
                  position: 'absolute', width: '8px', height: '8px',
                  borderRadius: '50%', background: p.color,
                  boxShadow: `0 0 12px ${p.color}`,
                  left: `calc(50% + ${tx}px)`, top: `calc(50% + ${ty}px)`,
                  transform: 'translate(-50%, -50%) scale(0)',
                  animation: 'burst-particle-scale 0.65s cubic-bezier(0.34,1.56,0.64,1) forwards',
                  animationDelay: `${i * 0.025}s`,
                }}
                className="burst-particle"
              />
            );
          })}
          <style>{`
            @keyframes burst-ring {
              from { transform: scale(0); opacity: 1; }
              to   { transform: scale(1); opacity: 0; }
            }
            @keyframes burst-glow {
              0%   { transform: scale(1); opacity: 1; }
              100% { transform: scale(3); opacity: 0; }
            }
            @keyframes burst-particle-scale {
              0%   { transform: translate(-50%, -50%) scale(0); opacity: 1; }
              60%  { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
              100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
            }
          `}</style>
        </div>
      )}

      {/* ── Animated content ── */}
      <div style={{
        opacity: show ? 1 : 0,
        transform: show ? 'scale(1) translateY(0)' : 'scale(0.97) translateY(24px)',
        transition: 'opacity 0.55s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)',
      }}>
        {children}
      </div>
    </>
  );
}
