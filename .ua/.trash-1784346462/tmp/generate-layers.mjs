import fs from 'fs';
import path from 'path';

const intermediateDir = 'c:/Users/salar pc/Documents/my portfolio/.ua/intermediate';
const assembled = JSON.parse(fs.readFileSync(path.join(intermediateDir, 'assembled-graph.json'), 'utf8'));

const allIds = new Set(assembled.nodes.map(n => n.id));

const layers = [
  {
    id: "layer:presentation-ui",
    name: "Presentation & UI Components",
    description: "Re-usable UI elements, navigation headers, theme wrappers, card primitives, and global stylesheet definitions.",
    nodeIds: [
      "file:components/Navbar.tsx",
      "file:components/AboutSection.tsx",
      "file:components/ProjectsSection.tsx",
      "file:components/TechBanner.tsx",
      "file:components/ui/card.tsx",
      "file:components/theme-provider.tsx",
      "file:app/globals.css"
    ]
  },
  {
    id: "layer:3d-interactive-engine",
    name: "3D Interactive Spline Engine",
    description: "Components orchestrating WebGL 3D Spline scene rendering, lazy-loaded viewport containers, spotlight effects, and human-like typing animations.",
    nodeIds: [
      "file:components/ui/demo.tsx",
      "file:components/ui/splite.tsx",
      "file:components/ui/spotlight.tsx",
      "file:components/TestRobotScene.tsx"
    ]
  },
  {
    id: "layer:application-pages",
    name: "Application Pages & Routing",
    description: "Next.js App Router entry pages (`app/page.tsx`, `app/test-robot/page.tsx`) and root layout structure (`app/layout.tsx`).",
    nodeIds: [
      "file:app/layout.tsx",
      "file:app/page.tsx",
      "file:app/test-robot/page.tsx"
    ]
  },
  {
    id: "layer:core-functions-utilities",
    name: "Core Functions & Utilities",
    description: "Individual extracted function nodes (`cn`, `SplineSceneBasic`, `Home`, etc.) and utility module files.",
    nodeIds: [
      "file:lib/utils.ts",
      "function:lib/utils.ts:cn",
      "function:components/ui/demo.tsx:SplineSceneBasic",
      "function:components/ui/splite.tsx:SplineScene",
      "function:components/ui/spotlight.tsx:Spotlight",
      "function:components/Navbar.tsx:Navbar",
      "function:components/theme-provider.tsx:ThemeProvider",
      "function:app/layout.tsx:RootLayout",
      "function:app/page.tsx:Home",
      "function:app/page.tsx:ViewportSection",
      "function:app/page.tsx:HeroSkeleton",
      "function:app/test-robot/page.tsx:TestRobotPage",
      "function:components/AboutSection.tsx:AboutSection",
      "function:components/ProjectsSection.tsx:ProjectsSection",
      "function:components/TechBanner.tsx:TechBanner",
      "function:components/TestRobotScene.tsx:TestRobotScene"
    ]
  },
  {
    id: "layer:build-configuration",
    name: "Build & Framework Configuration",
    description: "Next.js, Tailwind CSS, TypeScript, and ESLint configuration files controlling application compilation and styling.",
    nodeIds: [
      "config:package.json",
      "config:tsconfig.json",
      "config:components.json",
      "file:next.config.ts",
      "file:postcss.config.mjs",
      "file:eslint.config.mjs",
      "file:next-env.d.ts"
    ]
  },
  {
    id: "layer:project-documentation",
    name: "Project & AI Agent Guidelines",
    description: "Markdown documentation files (`AGENTS.md`, `README.md`, `CLAUDE.md`) providing developer protocols and CodeLens rules.",
    nodeIds: [
      "document:AGENTS.md",
      "document:CLAUDE.md",
      "document:.agents/AGENTS.md",
      "document:.codelens/README.md",
      "document:.codelens/instructions.md"
    ]
  },
  {
    id: "layer:knowledge-infrastructure",
    name: "Knowledge Graph Infrastructure & Cache",
    description: "MCP server configuration, SQLite graph database cache (`.codelens-graph.db`), and analysis ignore pattern files (`.understandignore`).",
    nodeIds: [
      "config:.codelens/mcp.json",
      "file:.codelens/codelens-graph.db",
      "file:.ua/.understandignore"
    ]
  }
];

const assigned = new Set();
for (const l of layers) {
  for (const id of l.nodeIds) {
    if (!allIds.has(id)) {
      console.error(`Error: ID ${id} in layer ${l.id} not found in assembled nodes.`);
    }
    if (assigned.has(id)) {
      console.error(`Error: ID ${id} assigned multiple times.`);
    }
    assigned.add(id);
  }
}

for (const id of allIds) {
  if (!assigned.has(id)) {
    console.error(`Warning: Unassigned node ID: ${id}. Adding to layer:core-functions-utilities.`);
    layers[3].nodeIds.push(id);
  }
}

const layersPath = path.join(intermediateDir, 'layers.json');
fs.writeFileSync(layersPath, JSON.stringify(layers, null, 2));
console.log(`Wrote layers.json with ${layers.length} layers assigned to all ${assembled.nodes.length} nodes.`);
