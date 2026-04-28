"use client";

import { FileText, Video, Presentation, FileIcon, Eye, Download } from "lucide-react";
import { FileItem } from "@/lib/data";

const typeConfig = {
  pdf: {
    icon: FileText,
    label: "PDF",
    color: "#f87171",
    bg: "rgba(248,113,113,0.12)",
    border: "rgba(248,113,113,0.25)",
  },
  video: {
    icon: Video,
    label: "Video",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.12)",
    border: "rgba(167,139,250,0.25)",
  },
  ppt: {
    icon: Presentation,
    label: "PPT",
    color: "#fb923c",
    bg: "rgba(251,146,60,0.12)",
    border: "rgba(251,146,60,0.25)",
  },
  doc: {
    icon: FileIcon,
    label: "DOC",
    color: "#34d399",
    bg: "rgba(52,211,153,0.12)",
    border: "rgba(52,211,153,0.25)",
  },
};

interface FileCardProps {
  file: FileItem;
  index?: number;
}

export default function FileCard({ file, index = 0 }: FileCardProps) {
  const config = typeConfig[file.type];
  const Icon = config.icon;

  return (
    <div
      className="card-glow group relative flex flex-col gap-4 p-5 rounded-2xl overflow-hidden"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
        animationDelay: `${index * 50}ms`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        {/* File icon */}
        <div
          className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-all duration-300 group-hover:scale-110"
          style={{
            background: config.bg,
            border: `1px solid ${config.border}`,
          }}
        >
          <Icon size={18} style={{ color: config.color }} strokeWidth={2} />
        </div>

        {/* Type Badge */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full"
              style={{
                background: config.bg,
                color: config.color,
                border: `1px solid ${config.border}`,
              }}
            >
              {config.label}
            </span>
            {file.size && (
              <span className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                {file.size}
              </span>
            )}
          </div>
          <h3
            className="font-semibold text-sm leading-snug line-clamp-1"
            style={{ color: "var(--text-primary)" }}
          >
            {file.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "var(--text-secondary)" }}>
        {file.description}
      </p>

      {/* Footer */}
      <div
        className="flex items-center justify-between pt-3"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-3">
          {file.views !== undefined && (
            <div className="flex items-center gap-1.5 text-[11px]" style={{ color: "var(--text-muted)" }}>
              <Eye size={12} />
              <span>{file.views}</span>
            </div>
          )}
          {file.date && (
            <span className="text-[11px]" style={{ color: "var(--text-muted)" }}>
              {file.date}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
          <button
            className="flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1.5 rounded-lg transition-all duration-150 hover:scale-105"
            style={{
              background: "rgba(56,189,248,0.12)",
              border: "1px solid var(--border-accent)",
              color: "var(--accent)",
            }}
            aria-label={`View ${file.title}`}
          >
            <Eye size={11} />
            View
          </button>
          <button
            className="flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1.5 rounded-lg transition-all duration-150 hover:scale-105"
            style={{
              background: "var(--bg-base)",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
            aria-label={`Download ${file.title}`}
          >
            <Download size={11} />
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
