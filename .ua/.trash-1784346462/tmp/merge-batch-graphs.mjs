import fs from 'fs';
import path from 'path';

const projectRoot = 'c:/Users/salar pc/Documents/my portfolio';
const intermediateDir = path.join(projectRoot, '.ua', 'intermediate');

const files = fs.readdirSync(intermediateDir).filter(f => /^batch-\d+(?:-part-\d+)?\.json$/.test(f));
console.log(`Found ${files.length} batch files to merge:`, files);

const nodesMap = new Map();
const edgesSet = new Set();
const edgesList = [];
const warnings = [];

for (const file of files) {
  const filePath = path.join(intermediateDir, file);
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (data.nodes) {
      for (const node of data.nodes) {
        if (!node.id) continue;
        // Normalize complexity
        let comp = node.complexity || 'simple';
        if (['low', 'easy'].includes(comp)) comp = 'simple';
        else if (['medium', 'intermediate'].includes(comp)) comp = 'moderate';
        else if (['high', 'hard', 'difficult'].includes(comp)) comp = 'complex';
        if (!['simple', 'moderate', 'complex'].includes(comp)) comp = 'simple';
        node.complexity = comp;
        
        nodesMap.set(node.id, node);
      }
    }
    if (data.edges) {
      for (const edge of data.edges) {
        if (!edge.source || !edge.target || !edge.type) continue;
        const key = `${edge.source}|${edge.target}|${edge.type}`;
        if (!edgesSet.has(key)) {
          edgesSet.add(key);
          edgesList.push(edge);
        }
      }
    }
  } catch (err) {
    warnings.push(`Failed to read ${file}: ${err.message}`);
  }
}

// Drop dangling edges
const validIds = new Set(nodesMap.keys());
const validEdges = [];
let droppedEdges = 0;

for (const edge of edgesList) {
  if (validIds.has(edge.source) && validIds.has(edge.target)) {
    validEdges.push(edge);
  } else {
    droppedEdges++;
  }
}

const assembled = {
  nodes: Array.from(nodesMap.values()),
  edges: validEdges
};

const outPath = path.join(intermediateDir, 'assembled-graph.json');
fs.writeFileSync(outPath, JSON.stringify(assembled, null, 2));

console.log(`Merged graph saved to ${outPath}`);
console.log(`Summary: ${assembled.nodes.length} nodes, ${assembled.edges.length} edges (dropped ${droppedEdges} dangling edges).`);
