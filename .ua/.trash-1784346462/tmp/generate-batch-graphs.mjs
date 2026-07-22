import fs from 'fs';
import path from 'path';

const projectRoot = 'c:/Users/salar pc/Documents/my portfolio';
const uaDir = path.join(projectRoot, '.ua');
const intermediateDir = path.join(uaDir, 'intermediate');
const batches = JSON.parse(fs.readFileSync(path.join(intermediateDir, 'batches.json'), 'utf8')).batches;

const fileExpertInfo = {
  "components/ui/card.tsx": {
    summary: "Re-usable UI card primitive components with variants (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter) styled with Tailwind CSS.",
    tags: ["component", "ui", "card", "tailwind"]
  },
  "components/ui/demo.tsx": {
    summary: "Contains SplineSceneBasic which renders the 3D Cyber-Robot Spline scene with lazy loading and synchronized multi-phase floating card typing animation.",
    tags: ["component", "3d", "spline", "animation", "entry-point"]
  },
  "components/ui/splite.tsx": {
    summary: "Base wrapper component around @splinetool/react-spline wrapped in Suspense for loading 3D WebGL assets smoothly.",
    tags: ["component", "3d", "spline", "suspense"]
  },
  "components/ui/spotlight.tsx": {
    summary: "Interactive SVG spotlight glow animation effect component used in hero sections.",
    tags: ["component", "ui", "animation", "hero"]
  },
  "lib/utils.ts": {
    summary: "Core utility exporting cn function for merging Tailwind CSS classes cleanly using clsx and tailwind-merge.",
    tags: ["utility", "tailwind", "helpers"]
  },
  "app/layout.tsx": {
    summary: "Root Next.js layout component configuring metadata, font styles, and wrapping pages with ThemeProvider.",
    tags: ["entry-point", "layout", "nextjs", "theme"]
  },
  "components/Navbar.tsx": {
    summary: "Responsive navigation header component with glassmorphism, mobile drawer, and smooth section scrolling.",
    tags: ["component", "navigation", "header", "responsive"]
  },
  "components/theme-provider.tsx": {
    summary: "Thin wrapper around next-themes providing dark/light mode toggle functionality across the app.",
    tags: ["component", "theme", "provider", "dark-mode"]
  },
  ".codelens/README.md": {
    summary: "Documentation for CodeLens knowledge graph tools and local repository graph structure.",
    tags: ["documentation", "codelens", "overview"]
  },
  ".codelens/instructions.md": {
    summary: "Detailed operational instructions and mandatory search protocol rules for CodeLens tools.",
    tags: ["documentation", "instructions", "codelens"]
  },
  ".codelens/mcp.json": {
    summary: "MCP server configuration declaring local SQLite knowledge graph tools and resources.",
    tags: ["configuration", "mcp", "codelens"]
  },
  "AGENTS.md": {
    summary: "Global developer guidelines detailing Next.js breaking changes and mandatory CodeLens triage protocols.",
    tags: ["documentation", "guidelines", "agents"]
  },
  "CLAUDE.md": {
    summary: "Brief developer reference pointer file for project agent guidance.",
    tags: ["documentation", "reference"]
  },
  "components.json": {
    summary: "Shadcn UI component configuration specifying style presets, Tailwind configuration paths, and aliases.",
    tags: ["configuration", "ui", "shadcn", "tailwind"]
  },
  "package.json": {
    summary: "Project manifest defining dependencies (next, react, @splinetool/react-spline, three, framer-motion) and build scripts.",
    tags: ["configuration", "manifest", "dependencies"]
  },
  "tsconfig.json": {
    summary: "TypeScript compiler configuration defining strict checking, module resolution, and @/* path aliases.",
    tags: ["configuration", "typescript", "compiler"]
  },
  ".agents/AGENTS.md": {
    summary: "Workspace-level agent rules and CodeLens graph mandatory search protocols.",
    tags: ["documentation", "guidelines", "agents"]
  },
  ".codelens/codelens-graph.db": {
    summary: "Local SQLite database file caching the live symbol knowledge graph.",
    tags: ["database", "cache", "codelens"]
  },
  ".ua/.understandignore": {
    summary: "Custom ignore pattern configuration excluding test files and specific directories from analysis.",
    tags: ["configuration", "ignore", "analysis"]
  },
  "app/globals.css": {
    summary: "Global styling definitions featuring custom CSS variables, dark mode color tokens, and smooth scroll behaviors.",
    tags: ["styles", "css", "globals", "tailwind"]
  },
  "app/page.tsx": {
    summary: "Main landing page rendering interactive sections (TechBanner, AboutSection, ProjectsSection) and lazy-loading SplineSceneBasic via ViewportSection.",
    tags: ["entry-point", "page", "landing", "nextjs"]
  },
  "app/test-robot/page.tsx": {
    summary: "Dedicated test bench page rendering the standalone 3D Spline robot scene with detailed timing and typing diagnostics.",
    tags: ["page", "test", "3d", "spline"]
  },
  "components/AboutSection.tsx": {
    summary: "Interactive about section featuring dynamic tabs, skill showcases, and personal background cards.",
    tags: ["component", "about", "skills", "interactive"]
  },
  "components/ProjectsSection.tsx": {
    summary: "Portfolio projects grid showcasing featured applications with interactive modal details and live links.",
    tags: ["component", "projects", "portfolio", "grid"]
  },
  "components/TechBanner.tsx": {
    summary: "Animated horizontal ticker bar highlighting technologies (Next.js, React, Three.js, Tailwind CSS).",
    tags: ["component", "banner", "animation", "ticker"]
  },
  "components/TestRobotScene.tsx": {
    summary: "Alternate implementation of the 3D robot stage with custom event handlers and camera zoom controls.",
    tags: ["component", "3d", "spline", "scene"]
  },
  "eslint.config.mjs": {
    summary: "ESLint flat config setting up Next.js linting rules.",
    tags: ["configuration", "linter", "eslint"]
  },
  "next-env.d.ts": {
    summary: "Next.js TypeScript environment declarations.",
    tags: ["type-definition", "nextjs", "typescript"]
  },
  "next.config.ts": {
    summary: "Next.js framework configuration file.",
    tags: ["configuration", "nextjs", "build"]
  },
  "postcss.config.mjs": {
    summary: "PostCSS configuration enabling Tailwind CSS processing.",
    tags: ["configuration", "postcss", "tailwind"]
  }
};

const functionSummaries = {
  "cn": { summary: "Utility function combining clsx and tailwind-merge to cleanly construct className strings.", tags: ["utility", "tailwind", "helper"] },
  "SplineScene": { summary: "Renders the Spline WebGL canvas component inside a styled wrapper.", tags: ["component", "3d", "spline"] },
  "SplineSceneBasic": { summary: "Orchestrates the 3-phase zoom, card entry, and typing animation for the Cyber-Robot 3D scene.", tags: ["component", "3d", "animation", "spline"] },
  "Spotlight": { summary: "Renders an SVG spotlight gradient beam with customizable fill and position.", tags: ["component", "ui", "effect"] },
  "Navbar": { summary: "Top navigation bar supporting mobile menu toggle and smooth scroll anchoring.", tags: ["component", "navigation", "header"] },
  "ThemeProvider": { summary: "Wraps children with NextThemesProvider to manage color theme preferences.", tags: ["component", "theme", "provider"] },
  "RootLayout": { summary: "Root layout component defining document structure and global theme providers.", tags: ["entry-point", "layout"] },
  "Home": { summary: "Main homepage rendering Hero 3D scene, Tech banner, About tabs, and Projects grid.", tags: ["entry-point", "page"] },
  "ViewportSection": { summary: "IntersectionObserver wrapper that defers mounting children until scrolled near viewport.", tags: ["component", "performance", "lazy-load"] },
  "HeroSkeleton": { summary: "Placeholder loading skeleton displayed while the 3D Spline scene initializes.", tags: ["component", "skeleton", "loading"] },
  "TestRobotPage": { summary: "Standalone test page demonstrating robot zoom, card rise, and typing effect.", tags: ["page", "test", "3d"] },
  "AboutSection": { summary: "Renders tabbed navigation between personal story, technical skills, and background milestones.", tags: ["component", "about"] },
  "ProjectsSection": { summary: "Displays interactive cards for key portfolio projects with modal inspection.", tags: ["component", "projects"] },
  "TechBanner": { summary: "Continuous horizontal scrolling marquee displaying supported modern web technologies.", tags: ["component", "banner"] },
  "TestRobotScene": { summary: "Renders alternative 3D Spline scene stage with event listeners.", tags: ["component", "3d", "spline"] }
};

for (const b of batches) {
  const idx = b.batchIndex;
  const extractedPath = path.join(uaDir, 'tmp', `ua-file-extract-results-${idx}.json`);
  const extracted = JSON.parse(fs.readFileSync(extractedPath, 'utf8')).results;
  
  const nodes = [];
  const edges = [];
  
  for (const fileRes of extracted) {
    const fPath = fileRes.path;
    const cat = fileRes.fileCategory || 'code';
    let nodeType = 'file';
    if (cat === 'config') nodeType = 'config';
    else if (cat === 'docs') nodeType = 'document';
    else if (cat === 'infra') nodeType = 'service';
    else if (cat === 'data') nodeType = 'table';
    
    const info = fileExpertInfo[fPath] || {
      summary: `Project file located at ${fPath}.`,
      tags: [cat, "file"]
    };
    
    const fileId = `${nodeType}:${fPath}`;
    nodes.push({
      id: fileId,
      type: nodeType,
      name: path.basename(fPath),
      filePath: fPath,
      summary: info.summary,
      tags: info.tags,
      complexity: fileRes.totalLines > 200 ? 'complex' : (fileRes.totalLines > 50 ? 'moderate' : 'simple')
    });
    
    // Import edges
    const imports = b.batchImportData[fPath] || [];
    for (const impPath of imports) {
      let impType = 'file';
      if (impPath.includes('config') || impPath.endsWith('.json')) impType = 'config';
      edges.push({
        source: fileId,
        target: `${impType}:${impPath}`,
        type: "imports",
        direction: "forward",
        weight: 0.7
      });
    }
    
    // Functions & classes
    if (fileRes.functions && fileRes.functions.length > 0) {
      for (const fn of fileRes.functions) {
        if (fn.endLine - fn.startLine >= 10 || (fileRes.exports && fileRes.exports.some(e => e.name === fn.name))) {
          const fnId = `function:${fPath}:${fn.name}`;
          const fnInfo = functionSummaries[fn.name] || {
            summary: `Function ${fn.name} inside ${fPath}.`,
            tags: ["function", "code"]
          };
          nodes.push({
            id: fnId,
            type: "function",
            name: fn.name,
            filePath: fPath,
            lineRange: [fn.startLine, fn.endLine],
            summary: fnInfo.summary,
            tags: fnInfo.tags,
            complexity: (fn.endLine - fn.startLine) > 50 ? 'moderate' : 'simple'
          });
          
          edges.push({
            source: fileId,
            target: fnId,
            type: "contains",
            direction: "forward",
            weight: 1.0
          });
          
          if (fileRes.exports && fileRes.exports.some(e => e.name === fn.name)) {
            edges.push({
              source: fileId,
              target: fnId,
              type: "exports",
              direction: "forward",
              weight: 0.8
            });
          }
        }
      }
    }
    
    // Additional configures/documents edges
    if (fPath === 'tsconfig.json') {
      edges.push({ source: fileId, target: "file:app/page.tsx", type: "configures", direction: "forward", weight: 0.6 });
      edges.push({ source: fileId, target: "file:app/layout.tsx", type: "configures", direction: "forward", weight: 0.6 });
    } else if (fPath === 'package.json') {
      edges.push({ source: fileId, target: "file:app/page.tsx", type: "configures", direction: "forward", weight: 0.6 });
    } else if (fPath === 'postcss.config.mjs') {
      edges.push({ source: fileId, target: "file:app/globals.css", type: "configures", direction: "forward", weight: 0.6 });
    } else if (fPath === 'AGENTS.md' || fPath === '.agents/AGENTS.md') {
      edges.push({ source: fileId, target: "file:app/page.tsx", type: "documents", direction: "forward", weight: 0.5 });
    }
  }
  
  const outPath = path.join(intermediateDir, `batch-${idx}.json`);
  fs.writeFileSync(outPath, JSON.stringify({ nodes, edges }, null, 2));
  console.log(`Wrote batch-${idx}.json with ${nodes.length} nodes and ${edges.length} edges.`);
}
