"use client";

import Link from "next/link";
import {
  BookOpen,
  Users,
  ArrowRight,
} from "lucide-react";
import { Team } from "@/lib/data";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  team: Team;
  index?: number;
}

export default function TeamCard({ team, index = 0 }: TeamCardProps) {
  const Icon = Users; // Using Users icon as a fallback, or we can just use BookOpen. Let's stick to Users for teams.

  return (
    <Link
      href={`/team/${team.id}`}
      className="card-glow group relative flex flex-col gap-4 p-5 rounded-2xl cursor-pointer overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        animationDelay: `${index * 60}ms`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px) scale(1.02)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
      }}
    >
      {/* Background gradient blob */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br",
          team.color
        )}
      />

      {/* Icon */}
      <div
        className="relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 shadow-sm"
        style={{
          background: "rgba(56,189,248,0.12)",
          border: "1px solid rgba(56,189,248,0.2)",
        }}
      >
        <Icon size={20} style={{ color: team.accentColor || "var(--accent)" }} strokeWidth={2} />
      </div>

      {/* Text */}
      <div className="relative flex-1 space-y-1.5">
        <h3
          className="font-semibold text-base leading-snug"
          style={{ color: "var(--text-primary)" }}
        >
          {team.label}
        </h3>
        <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "var(--text-secondary)" }}>
          {team.tagline}
        </p>
      </div>

      {/* Footer */}
      <div className="relative flex items-center justify-between pt-2" style={{ borderTop: "1px solid var(--border)" }}>
        <div
          className="flex items-center gap-1 text-xs font-medium opacity-80 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1"
          style={{ color: "var(--accent)" }}
        >
          <span>View Team</span>
          <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
}
