import fs from 'fs';
import path from 'path';

const projectRoot = 'c:/Users/salar pc/Documents/my portfolio';
const uaDir = path.join(projectRoot, '.ua');
const intermediateDir = path.join(uaDir, 'intermediate');

const scan = JSON.parse(fs.readFileSync(path.join(intermediateDir, 'scan-result.json'), 'utf8'));
const assembled = JSON.parse(fs.readFileSync(path.join(intermediateDir, 'assembled-graph.json'), 'utf8'));
const layers = JSON.parse(fs.readFileSync(path.join(intermediateDir, 'layers.json'), 'utf8'));
const tour = JSON.parse(fs.readFileSync(path.join(intermediateDir, 'tour.json'), 'utf8'));

const fullGraph = {
  version: "1.0.0",
  project: {
    name: scan.name || "fktech-portfolio",
    languages: scan.languages || ["typescript", "javascript", "json", "markdown", "css"],
    frameworks: scan.frameworks || ["React", "Next.js", "Tailwind CSS", "Three.js"],
    description: scan.description || "Modern High-Performance Portfolio Website with Interactive 3D Cyber-Robot Spline Scene, Next.js 16, React 19, Three.js, and Framer Motion",
    analyzedAt: new Date().toISOString(),
    gitCommitHash: "HEAD"
  },
  nodes: assembled.nodes,
  edges: assembled.edges,
  layers: layers,
  tour: tour
};

const outPath = path.join(intermediateDir, 'assembled-graph.json');
fs.writeFileSync(outPath, JSON.stringify(fullGraph, null, 2));

// Validation
const issues = [];
const warnings = [];
const nodeIds = new Set(fullGraph.nodes.map(n => n.id));

for (const layer of fullGraph.layers) {
  for (const id of layer.nodeIds || []) {
    if (!nodeIds.has(id)) issues.push(`Layer '${layer.id}' refs missing node '${id}'`);
  }
}

for (const step of fullGraph.tour) {
  for (const id of step.nodeIds || []) {
    if (!nodeIds.has(id)) issues.push(`Tour step '${step.title}' refs missing node '${id}'`);
  }
}

const stats = {
  totalNodes: fullGraph.nodes.length,
  totalEdges: fullGraph.edges.length,
  totalLayers: fullGraph.layers.length,
  tourSteps: fullGraph.tour.length,
  nodeTypes: fullGraph.nodes.reduce((a, n) => { a[n.type] = (a[n.type]||0)+1; return a; }, {}),
  edgeTypes: fullGraph.edges.reduce((a, e) => { a[e.type] = (a[e.type]||0)+1; return a; }, {})
};

const revPath = path.join(intermediateDir, 'review.json');
fs.writeFileSync(revPath, JSON.stringify({ issues, warnings, stats }, null, 2));
console.log(`Phase 6 validation complete. Issues: ${issues.length}, Warnings: ${warnings.length}`);
console.log(JSON.stringify(stats, null, 2));
