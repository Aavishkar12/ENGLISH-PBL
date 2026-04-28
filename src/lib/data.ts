// ─── Data: Team-based structure ──────────────────────────────────────────────

export type ResourceType = "pdf" | "video";
export type FileType = "pdf" | "video" | "ppt" | "doc";

export interface Resource {
  id: string;
  teamId: number;
  title: string;
  description: string;
  type: ResourceType;
}

export interface FileItem {
  id: string;
  title: string;
  type: FileType;
  size?: string;
  views?: number;
  date?: string;
  description: string;
}

export interface Team {
  id: number;          // 1 – 10
  label: string;       // "Team 1" … "Team 10"
  tagline: string;
  color: string;       // gradient classes
  accentColor: string; // hex for icon tint
}

// Backward compat alias
export type Section = Team;

// ── 10 Teams ──────────────────────────────────────────────────────────────────
export const teams: Team[] = [
  {
    id: 1,
    label: "Team 1",
    tagline: "Narrative Writing & Storytelling",
    color: "from-cyan-500/20 to-blue-500/10",
    accentColor: "#38bdf8",
  },
  {
    id: 2,
    label: "Team 2",
    tagline: "Grammar & Sentence Mechanics",
    color: "from-violet-500/20 to-purple-500/10",
    accentColor: "#a78bfa",
  },
  {
    id: 3,
    label: "Team 3",
    tagline: "Reading Comprehension Strategies",
    color: "from-emerald-500/20 to-teal-500/10",
    accentColor: "#34d399",
  },
  {
    id: 4,
    label: "Team 4",
    tagline: "Vocabulary & Word Building",
    color: "from-amber-500/20 to-orange-500/10",
    accentColor: "#fbbf24",
  },
  {
    id: 5,
    label: "Team 5",
    tagline: "Academic Essay Writing",
    color: "from-rose-500/20 to-pink-500/10",
    accentColor: "#fb7185",
  },
  {
    id: 6,
    label: "Team 6",
    tagline: "Listening & Speaking Skills",
    color: "from-sky-500/20 to-indigo-500/10",
    accentColor: "#38bdf8",
  },
  {
    id: 7,
    label: "Team 7",
    tagline: "Poetry & Creative Expression",
    color: "from-fuchsia-500/20 to-pink-500/10",
    accentColor: "#e879f9",
  },
  {
    id: 8,
    label: "Team 8",
    tagline: "Research & Citation Methods",
    color: "from-lime-500/20 to-green-500/10",
    accentColor: "#a3e635",
  },
  {
    id: 9,
    label: "Team 9",
    tagline: "Debate & Argumentation",
    color: "from-orange-500/20 to-red-500/10",
    accentColor: "#fb923c",
  },
  {
    id: 10,
    label: "Team 10",
    tagline: "Literature & Critical Analysis",
    color: "from-blue-500/20 to-cyan-500/10",
    accentColor: "#60a5fa",
  },
];

// ── Resources: 4 per team (2 PDFs + 2 Videos) ─────────────────────────────────
const resourceTemplates = [
  // PDFs
  [
    {
      titleFn: (t: string) => `${t} – Lecture Notes`,
      desc: "Comprehensive notes covering key concepts, definitions, and structured examples.",
      type: "pdf" as ResourceType,
    },
    {
      titleFn: (t: string) => `${t} – Study Guide`,
      desc: "A condensed reference sheet with summaries, tips, and practice questions.",
      type: "pdf" as ResourceType,
    },
  ],
  // Videos
  [
    {
      titleFn: (t: string) => `${t} – Intro Lecture`,
      desc: "Recorded session introducing core frameworks and real-world examples.",
      type: "video" as ResourceType,
    },
    {
      titleFn: (t: string) => `${t} – Workshop Session`,
      desc: "Interactive workshop walkthrough with live demonstrations and Q&A.",
      type: "video" as ResourceType,
    },
  ],
];

export const resources: Resource[] = teams.flatMap((team) => {
  const tagline = team.tagline;
  return [
    ...resourceTemplates[0].map((tmpl, i) => ({
      id: `t${team.id}-pdf-${i + 1}`,
      teamId: team.id,
      title: tmpl.titleFn(tagline),
      description: tmpl.desc,
      type: tmpl.type,
    })),
    ...resourceTemplates[1].map((tmpl, i) => ({
      id: `t${team.id}-vid-${i + 1}`,
      teamId: team.id,
      title: tmpl.titleFn(tagline),
      description: tmpl.desc,
      type: tmpl.type,
    })),
  ];
});

export function getTeamResources(teamId: number): Resource[] {
  return resources.filter((r) => r.teamId === teamId);
}
