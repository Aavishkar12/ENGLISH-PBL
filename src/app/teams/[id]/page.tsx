import { getTeams, getTeamById } from "@/lib/teams";
import { notFound } from "next/navigation";
import TeamDetailContent from "./TeamDetailContent";

export function generateStaticParams() {
  return getTeams().map((team) => ({ id: team.id }));
}

export default async function TeamDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const team = getTeamById(resolvedParams.id);
  if (!team) notFound();

  return <TeamDetailContent team={team} />;
}
