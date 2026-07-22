import fs from 'fs';
import path from 'path';

const projectRoot = 'c:/Users/salar pc/Documents/my portfolio';
const uaDir = path.join(projectRoot, '.ua');
const intermediateDir = path.join(uaDir, 'intermediate');

const fullGraph = JSON.parse(fs.readFileSync(path.join(intermediateDir, 'assembled-graph.json'), 'utf8'));
const kgPath = path.join(uaDir, 'knowledge-graph.json');
fs.writeFileSync(kgPath, JSON.stringify(fullGraph, null, 2));
console.log(`Saved final knowledge graph to ${kgPath}`);

const scan = JSON.parse(fs.readFileSync(path.join(intermediateDir, 'scan-result.json'), 'utf8'));
const sourceFilePaths = (scan.files || []).map(f => f.path);

const fpInput = {
  projectRoot: projectRoot,
  sourceFilePaths: sourceFilePaths,
  gitCommitHash: "HEAD"
};
const fpInputPath = path.join(intermediateDir, 'fingerprint-input.json');
fs.writeFileSync(fpInputPath, JSON.stringify(fpInput, null, 2));
console.log(`Wrote fingerprint-input.json for ${sourceFilePaths.length} files.`);
