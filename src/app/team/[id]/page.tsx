"use client";

import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";
import ResourceCard from "@/components/ResourceCard";
import { teams, getTeamResources, Resource } from "@/lib/data";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic"; // ensure server side rendering

export default function TeamPage({ params }: { params: { id: string } }) {
  const teamId = Number(params.id);
  const [team, setTeam] = useState<(typeof teams)[0] | null>(null);
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    const found = teams.find((t) => t.id === teamId) || null;
    setTeam(found);
    if (found) {
      setResources(getTeamResources(teamId));
    }
  }, [teamId]);

  if (!team) {
    return (
      <div className="flex flex-col min-h-screen" style={{ background: "var(--bg-base)" }}>
        <Navbar title="Team Not Found" />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-lg" style={{ color: "var(--text-primary)" }}>Team not found.</p>
        </div>
        <div className="p-4">
          <Link href="/" className="text-sm underline" style={{ color: "var(--accent)" }}>← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg-base)" }}>
      <Navbar title={team.label} />
      <main className="flex-1 p-6 lg:p-8 max-w-[1400px] w-full mx-auto space-y-8">
        {/* Team Header */}
        <section className="p-6 rounded-2xl bg-card" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <h2 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>{team.label}</h2>
          <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>{team.tagline}</p>
        </section>

        {/* Resources Grid */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>Resources</h3>
            <span className="text-xs px-2.5 py-1 rounded-full" style={{ background: "var(--bg-card)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>{resources.length} items</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {resources.map((res, i) => (
              <ResourceCard key={res.id} file={res} index={i} />
            ))}
          </div>
        </section>

        <div className="mt-8">
          <Link href="/team" className="text-sm underline" style={{ color: "var(--accent)" }}>← Back to Teams</Link>
        </div>
      </main>
    </div>
  );
}
