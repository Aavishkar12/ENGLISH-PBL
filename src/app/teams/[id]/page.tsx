import { getTeams, getTeamById } from "@/lib/teams";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Download, ExternalLink, Play, FileText, ArrowLeft, View } from "lucide-react";

export function generateStaticParams() {
  return getTeams().map((team) => ({
    id: team.id,
  }));
}

export default async function TeamDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const team = getTeamById(resolvedParams.id);

  if (!team) {
    notFound();
  }

  return (
    <div className="animate-fade-in pb-20">
      <Link href="/teams" className="inline-flex items-center gap-2 text-sm text-[var(--border-accent)] hover:text-[var(--accent)] transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Teams
      </Link>

      <header className="mb-12 border-b border-[var(--border)] pb-8">
        <div className="flex items-center gap-5 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-500 text-white flex items-center justify-center font-black text-3xl shadow-lg shadow-sky-500/20">
            {team.index}
          </div>
          <h1 className="text-4xl md:text-6xl font-black">{team.name} Showcase</h1>
        </div>
        <p className="text-xl text-[var(--text-secondary)] ml-21">Section O1 | Room 822 | English PBL</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Video Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass rounded-3xl overflow-hidden flex flex-col group relative border border-[var(--border)] shadow-xl shadow-black/50">
            <div className="border-b border-[var(--border)] bg-[var(--bg-navbar)] p-5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
              <span className="ml-4 text-sm font-mono text-[var(--text-muted)] tracking-wider">Presentation Video</span>
            </div>
            
            <div className="p-1 bg-black aspect-video flex items-center justify-center w-full relative">
              {team.videoPath ? (
                <video 
                  controls 
                  className="w-full h-full object-contain rounded-2xl"
                  src={team.videoPath}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-[var(--text-muted)] p-12">
                  <Play className="w-20 h-20 mb-4 opacity-20" />
                  <p className="text-lg">No video available for this team</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Resources */}
        <div className="space-y-6">
          <div className="glass rounded-3xl p-8 border border-[var(--border)]">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
              <FileText className="w-6 h-6 text-indigo-400" />
              Project Deliverables
            </h3>
            
            <div className="space-y-5">
              {team.presentationPath ? (
                <div className="bg-[var(--bg-base)] p-5 rounded-2xl border border-[var(--border)] hover:border-indigo-500/50 transition-colors shadow-inner">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-lg text-[var(--text-primary)] mb-1">Presentation</p>
                      <p className="text-xs text-indigo-400/80 uppercase tracking-wider font-bold">Document</p>
                    </div>
                    <div className="p-2 bg-indigo-500/10 rounded-lg">
                      <FileText className="w-6 h-6 text-indigo-400" />
                    </div>
                  </div>
                  <div className="mt-5 flex gap-2">
                    <a href={team.presentationPath} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 px-4 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 text-center text-sm rounded-xl font-bold transition-colors flex justify-center items-center gap-2">
                      <View className="w-4 h-4"/> View / Download
                    </a>
                  </div>
                </div>
              ) : (
                 <div className="bg-[var(--bg-base)]/50 p-6 rounded-2xl border border-[var(--border)] border-dashed text-center text-[var(--text-muted)] text-sm shadow-inner">
                   No presentation document uploaded
                 </div>
              )}

              {team.modelPath ? (
                <div className="bg-[var(--bg-base)] p-5 rounded-2xl border border-[var(--border)] hover:border-emerald-500/50 transition-colors shadow-inner">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-lg text-[var(--text-primary)] mb-1">Project Model</p>
                      <p className="text-xs text-emerald-400/80 uppercase tracking-wider font-bold">Asset</p>
                    </div>
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <ExternalLink className="w-6 h-6 text-emerald-400" />
                    </div>
                  </div>
                  <div className="mt-5 flex gap-2">
                    <a href={team.modelPath} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 px-4 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 text-center text-sm rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                       <Download className="w-4 h-4"/> Download Asset
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
