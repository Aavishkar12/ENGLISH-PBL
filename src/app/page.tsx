"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";
import { SectionCardSkeleton as TeamCardSkeleton } from "@/components/Skeletons";
import { teams } from "@/lib/data";
import { Sparkles, TrendingUp, BookOpen, FileText, Video } from "lucide-react";

const stats = [
  { label: "Total Files", value: "70+", icon: FileText, color: "var(--accent)" },
  { label: "Teams", value: "10", icon: BookOpen, color: "#a78bfa" },
  { label: "Trending", value: "3 New", icon: TrendingUp, color: "#fb923c" },
];


export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg-base)" }}>
      <Navbar title="Dashboard" />

      <div className="flex-1 p-6 lg:p-8 space-y-10 max-w-[1400px] w-full mx-auto">

        {/* Welcome Banner */}
        <div
          className="animate-fade-in-up relative overflow-hidden rounded-2xl p-7"
          style={{
            background: "linear-gradient(135deg, rgba(56,189,248,0.15) 0%, rgba(129,140,248,0.1) 50%, rgba(30,41,59,0.8) 100%)",
            border: "1px solid rgba(56,189,248,0.2)",
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-8 right-40 w-32 h-32 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #818cf8 0%, transparent 70%)" }}
          />
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={14} style={{ color: "var(--accent)" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                Spring 2026
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
              Welcome to O-1 section, <span className="gradient-text">Guys</span> 👋
            </h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Your Central Hub for Class Activities
              Explore team-wise resources, including notes, presentations, and videos — all organized for easy access and seamless learning.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className="animate-fade-in-up grid grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ animationDelay: "80ms" }}
        >
          {stats.map(({ label, value, icon: Icon, color }) => (
            <div
              key={label}
              className="flex items-center gap-3.5 p-4 rounded-xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center rounded-lg shrink-0"
                style={{ background: `${color}18` }}
              >
                <Icon size={17} style={{ color }} strokeWidth={2} />
              </div>
              <div>
                <p className="text-lg font-bold leading-none" style={{ color: "var(--text-primary)" }}>
                  {value}
                </p>
                <p className="text-[11px] mt-0.5" style={{ color: "var(--text-muted)" }}>
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Teams Grid */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
                Teams
              </h2>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                Browse all teams and resources
              </p>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full" style={{ background: "var(--bg-card)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
              {teams.length} teams
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {loading
              ? Array.from({ length: 10 }).map((_, i) => <TeamCardSkeleton key={i} />)
              : teams.map((team, i) => (
                <div key={team.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 60}ms` }}>
                  <TeamCard team={team} index={i} />
                </div>
              ))}
          </div>
        </section>

      </div>
    </div>
  );
}
