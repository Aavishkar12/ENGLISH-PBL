import fs from 'fs';
import path from 'path';

export interface Team {
  id: string;
  name: string;
  index: number;
  videoPath: string | null;
  presentationPath: string | null;
  modelPath: string | null;
}

export function getTeams(): Team[] {
  const publicDir = path.join(process.cwd(), 'public');
  const teams: Team[] = [];

  for (let i = 0; i <= 9; i++) {
    const teamFolderName = `Team ${i}`;
    const teamPath = path.join(publicDir, teamFolderName);

    let videoPath: string | null = null;
    let presentationPath: string | null = null;
    let modelPath: string | null = null;

    if (fs.existsSync(teamPath)) {
      const files = fs.readdirSync(teamPath);
      for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        const relativePath = `/${teamFolderName}/${file}`;
        
        if (ext === '.mp4' || ext === '.webm' || ext === '.mov' || ext === '.mkv') {
          videoPath = relativePath;
        } else if (ext === '.pdf' || ext === '.pptx' || ext === '.ppt') {
          presentationPath = relativePath;
        } else if (ext !== '.svg') { 
          // Avoiding matching next.js default svgs if they accidentally went in there
          modelPath = relativePath;
        }
      }
    }

    teams.push({
      id: `team${i}`,
      name: `Team ${i}`,
      index: i,
      videoPath,
      presentationPath,
      modelPath
    });
  }

  return teams;
}

export function getTeamById(id: string): Team | undefined {
  return getTeams().find(t => t.id === id);
}
