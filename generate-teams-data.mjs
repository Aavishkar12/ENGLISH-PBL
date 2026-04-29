import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
const dataDir = path.join(__dirname, 'src', 'data');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const teams = [];

for (let i = 0; i <= 9; i++) {
  const teamFolderName = `Team ${i}`;
  const teamPath = path.join(publicDir, teamFolderName);
  
  let videoPath = null;
  let pdfPath = null;
  let modelPath = null;

  if (fs.existsSync(teamPath)) {
    const files = fs.readdirSync(teamPath);
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      const relativePath = `/${teamFolderName}/${file}`;
      
      if (ext === '.mp4' || ext === '.webm' || ext === '.mov') {
        videoPath = relativePath;
      } else if (ext === '.pdf' || ext === '.pptx' || ext === '.ppt') {
        pdfPath = relativePath;
      } else {
        modelPath = relativePath; // fallback for model link or other
      }
    }
  }

  teams.push({
    id: `team${i}`,
    index: i,
    name: `Team ${i}`,
    videoPath,
    pdfPath,
    modelPath
  });
}

fs.writeFileSync(
  path.join(dataDir, 'teams.json'),
  JSON.stringify(teams, null, 2)
);

console.log('Successfully generated src/data/teams.json');
