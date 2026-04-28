"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: collapsed ? "68px" : "240px",
        background: "var(--bg-sidebar)",
        borderRight: "1px solid var(--border)",
        transition: "width 0.3s cubic-bezier(0.4,0,0.2,1)",
      }}
      className="relative flex flex-col h-screen sticky top-0 shrink-0 z-40"
    >
      {/* Logo */}
      <div
        className="flex items-center gap-3 px-4 py-5"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div
          className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
          style={{ background: "var(--accent)", boxShadow: "0 0 16px var(--accent-glow)" }}
        >
          <GraduationCap size={16} color="#0f172a" strokeWidth={2.5} />
        </div>
        {!collapsed && (
          <span
            className="font-bold text-sm tracking-tight whitespace-nowrap overflow-hidden"
            style={{ color: "var(--text-primary)" }}
          >
            EduVault
            <span className="ml-1" style={{ color: "var(--accent)" }}>
              ✦
            </span>
          </span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {!collapsed && (
          <p
            className="text-[10px] font-semibold uppercase tracking-widest px-3 mb-3"
            style={{ color: "var(--text-muted)" }}
          >
            Navigation
          </p>
        )}
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              title={label}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 group",
                active
                  ? "text-[var(--accent)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              )}
              style={{
                background: active
                  ? "rgba(56,189,248,0.1)"
                  : "transparent",
                boxShadow: active ? "0 0 0 1px var(--border-accent)" : "none",
              }}
              onMouseEnter={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(148,163,184,0.06)";
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }
              }}
            >
              <Icon
                size={18}
                strokeWidth={active ? 2.5 : 2}
                className="shrink-0"
                style={{ color: active ? "var(--accent)" : undefined }}
              />
              {!collapsed && <span className="whitespace-nowrap">{label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-[72px] flex items-center justify-center w-6 h-6 rounded-full cursor-pointer transition-all duration-200 hover:scale-110"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          color: "var(--text-secondary)",
        }}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>

      {/* Bottom badge */}
      {!collapsed && (
        <div className="p-4" style={{ borderTop: "1px solid var(--border)" }}>
          <div
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs"
            style={{ background: "rgba(56,189,248,0.08)", color: "var(--accent)" }}
          >
            <Sparkles size={13} />
            <span className="font-medium">Spring 2026</span>
          </div>
        </div>
      )}
    </aside>
  );
}
