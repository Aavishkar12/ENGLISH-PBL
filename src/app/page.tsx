import Link from "next/link";
import { ArrowRight, BookOpen, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center animate-fade-in-up">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-accent)] bg-[var(--bg-card)]/50 backdrop-blur-sm mb-8">
        <BookOpen className="w-4 h-4 text-[var(--accent)]" />
        <span className="text-sm font-medium tracking-wider uppercase text-[var(--text-secondary)]">
          Vellore Institute of Technology
        </span>
      </div>

      <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 mt-4">
        English PBL <br className="hidden md:block" />
        <span className="gradient-text">Showcase</span>
      </h1>

      <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-12 max-w-2xl leading-relaxed">
        Explore the phenomenal Project Based Learning presentations from <strong className="text-[var(--text-primary)]">Section O1, Room 822</strong>.
        <br /><span className="text-lg opacity-80 mt-2 block">Faculty: Dr. B. Monika Nair</span>
      </p>

      <Link
        href="/teams"
        className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-[var(--text-primary)] text-[var(--bg-base)] font-bold rounded-2xl overflow-hidden transition-transform hover:scale-[1.03] active:scale-[0.98] shadow-2xl shadow-sky-500/20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Users className="w-6 h-6 relative z-10" />
        <span className="text-xl relative z-10">View All Teams</span>
        <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
