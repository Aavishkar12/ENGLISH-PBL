"use client";

import { Search, Bell, Settings } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  title?: string;
}

export default function Navbar({ title }: NavbarProps) {
  const [focused, setFocused] = useState(false);

  return (
    <header
      className="glass-navbar sticky top-0 z-30 flex items-center justify-between px-6 h-16 w-full"
    >
      {/* Left: Page title */}
      <div className="flex items-center gap-2 min-w-0">
        {title && (
          <h1
            className="text-base font-semibold truncate"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h1>
        )}
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-md mx-6">
        <div
          className="flex items-center gap-2.5 px-4 h-9 rounded-xl transition-all duration-200"
          style={{
            background: focused ? "rgba(56,189,248,0.08)" : "var(--bg-card)",
            border: `1px solid ${focused ? "var(--border-accent)" : "var(--border)"}`,
            boxShadow: focused ? "0 0 0 3px var(--accent-glow)" : "none",
          }}
        >
          <Search size={15} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search files, sections..."
            className="flex-1 bg-transparent text-sm outline-none"
            style={{ color: "var(--text-primary)" }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <kbd
            className="hidden sm:inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-md font-mono"
            style={{
              background: "var(--bg-base)",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
            }}
          >
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right: Actions + Avatar */}
      <div className="flex items-center gap-2">
        <button
          className="relative flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 hover:scale-105"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            color: "var(--text-secondary)",
          }}
          aria-label="Notifications"
        >
          <Bell size={16} />
          <span
            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
            style={{ background: "var(--accent)", boxShadow: "0 0 6px var(--accent-glow)" }}
          />
        </button>
        <button
          className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 hover:scale-105"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            color: "var(--text-secondary)",
          }}
          aria-label="Settings"
        >
          <Settings size={16} />
        </button>
      </div>
    </header>
  );
}
