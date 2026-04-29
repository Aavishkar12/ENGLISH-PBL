import { getTeams } from "@/lib/teams";
import Link from "next/link";
import { FolderGit2, PlayCircle, FileText } from "lucide-react";

export default function TeamsPage() {
  const teams = getTeams();

  return (
    <div className="animate-fade-in pb-20">
      <div className="mb-12">
        <Link href="/" className="text-sm text-[var(--border-accent)] hover:text-[var(--accent)] transition-colors mb-4 inline-block">&larr; Back to Home</Link>
        <h1 className="text-5xl font-black gradient-text mb-4 mt-2">Section O1 Teams</h1>
        <p className="text-lg text-[var(--text-secondary)]">Select a team below to view their presentation video, PDF, and project deliverables.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-6">
        {teams.map((team, i) => (
          <Link 
            href={`/teams/${team.id}`}
            key={team.id}
            className="group glass rounded-3xl p-6 hover:bg-slate-800/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_var(--accent-glow)] flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden h-[260px] border border-[var(--border)] hover:border-[var(--accent)]/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${
              i % 3 === 0 ? 'from-purple-500/20 to-indigo-500/20 text-indigo-400' :
              i % 3 === 1 ? 'from-sky-500/20 to-cyan-500/20 text-cyan-400' :
              'from-emerald-500/20 to-teal-500/20 text-teal-400'
            } mb-2 relative z-10 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
              <span className="text-4xl font-black">{team.index}</span>
            </div>

            <div className="relative z-10 w-full">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{team.name}</h2>
              
              <div className="flex items-center justify-center gap-4 mt-auto">
                {team.videoPath && <PlayCircle className="w-5 h-5 text-sky-400 group-hover:animate-pulse" />}
                {team.presentationPath && <FileText className="w-5 h-5 text-indigo-400 group-hover:animate-pulse" />}
                {team.modelPath && <FolderGit2 className="w-5 h-5 text-emerald-400 group-hover:animate-pulse" />}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
