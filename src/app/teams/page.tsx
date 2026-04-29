import { getTeams } from "@/lib/teams";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TeamCard from "./TeamCard";

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

export default async function TeamsPage() {
  const teams = getTeams();

  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* Header */}
      <div className="animate-fade-in-up" style={{ marginBottom: '3rem' }}>
        <Link href="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontSize: '0.875rem', color: 'var(--text-muted)', textDecoration: 'none',
          fontWeight: 600, marginBottom: '1.5rem',
        }}>
          <ArrowLeft style={{ width: 14, height: 14 }} />
          Back to Home
        </Link>

        <h1 style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900,
          letterSpacing: '-0.04em', marginBottom: '0.75rem', lineHeight: 1.1,
        }}>
          <span className="gradient-text">Section O1</span> Teams
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '500px' }}>
          Select a team below to view their presentation video, PDF, and all project deliverables.
        </p>
      </div>

      {/* Teams Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '1.25rem',
      }}>
        {teams.map((team, i) => (
          <TeamCard 
            key={team.id}
            team={team}
            colors={COLORS[i % COLORS.length]}
            animationDelay={`${i * 0.06}s`}
          />
        ))}
      </div>
    </div>
  );
}
