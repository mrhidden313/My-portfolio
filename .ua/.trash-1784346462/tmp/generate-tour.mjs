import fs from 'fs';
import path from 'path';

const intermediateDir = 'c:/Users/salar pc/Documents/my portfolio/.ua/intermediate';

const tour = [
  {
    order: 1,
    title: "Project & Knowledge Graph Overview",
    description: "Start here to understand the portfolio's developer guidelines and local CodeLens knowledge graph architecture. These documents outline mandatory search protocols and explain how symbols are tracked in real-time across the codebase.",
    nodeIds: [
      "document:AGENTS.md",
      "document:.codelens/README.md",
      "document:.codelens/instructions.md"
    ]
  },
  {
    order: 2,
    title: "Application Bootstrapping & Layout",
    description: "The root layout bootstraps the Next.js App Router structure, configuring metadata, font styling, and wrapping all routes with ThemeProvider for seamless dark/light mode transitions and global CSS variables.",
    nodeIds: [
      "file:app/layout.tsx",
      "function:app/layout.tsx:RootLayout",
      "file:components/theme-provider.tsx",
      "file:app/globals.css"
    ],
    languageLesson: "Next.js App Router root layouts (`app/layout.tsx`) must wrap children and define `<html>` and `<body>` tags, allowing Server Components to inject SEO metadata and client theme providers cleanly."
  },
  {
    order: 3,
    title: "Homepage Architecture & Lazy Loading",
    description: "The main homepage orchestrates hero sections and content grids while maintaining blazing-fast initial load times. It uses a custom ViewportSection (IntersectionObserver) to defer mounting heavy 3D assets until the user scrolls close.",
    nodeIds: [
      "file:app/page.tsx",
      "function:app/page.tsx:Home",
      "function:app/page.tsx:ViewportSection",
      "function:app/page.tsx:HeroSkeleton"
    ],
    languageLesson: "Using `IntersectionObserver` with `rootMargin` allows pre-fetching components slightly before they enter the viewport, giving users instant interaction without paying the upfront WebGL initialization penalty."
  },
  {
    order: 4,
    title: "Core 3D Cyber-Robot Spline Scene",
    description: "This is the centerpiece of the portfolio. `SplineSceneBasic` loads the WebGL Cyber-Robot stage via Suspense and synchronizes three distinct animation phases: initial zoom-out, glass card rise-up, and human-like typewriter text generation.",
    nodeIds: [
      "file:components/ui/demo.tsx",
      "function:components/ui/demo.tsx:SplineSceneBasic",
      "file:components/ui/splite.tsx",
      "function:components/ui/splite.tsx:SplineScene"
    ],
    languageLesson: "React `Suspense` combined with `next/dynamic` (`ssr: false`) prevents server-side rendering crashes for GPU-dependent Three.js/Spline canvases while showing a smooth loading skeleton."
  },
  {
    order: 5,
    title: "Interactive UI & Navigation Components",
    description: "Explore the visual presentation layer, including the glassmorphic responsive Navbar with smooth scroll anchoring, the tabbed AboutSection for personal skills, the ProjectsSection grid with modals, and the animated TechBanner ticker.",
    nodeIds: [
      "file:components/Navbar.tsx",
      "function:components/Navbar.tsx:Navbar",
      "file:components/AboutSection.tsx",
      "file:components/ProjectsSection.tsx",
      "file:components/TechBanner.tsx"
    ]
  },
  {
    order: 6,
    title: "Design Primitives & Tailwind Utilities",
    description: "The foundational styling primitives rely on the `cn` utility function (`clsx` + `tailwind-merge`) to resolve conditional CSS classes without conflicts, powering reusable variant blocks like `Card` and `Spotlight`.",
    nodeIds: [
      "file:lib/utils.ts",
      "function:lib/utils.ts:cn",
      "file:components/ui/card.tsx",
      "file:components/ui/spotlight.tsx"
    ],
    languageLesson: "`tailwind-merge` is crucial when building reusable UI components because it overrides conflicting utility classes (e.g., `p-4` vs `p-8`) deterministically instead of depending on CSS stylesheet cascade order."
  },
  {
    order: 7,
    title: "3D Animation Test Bench & Diagnostics",
    description: "A dedicated experimental environment (`app/test-robot/page.tsx`) that isolates the Spline canvas and Framer Motion timeline. This allows testing camera zoom controls and character typing intervals independently of the main homepage.",
    nodeIds: [
      "file:app/test-robot/page.tsx",
      "function:app/test-robot/page.tsx:TestRobotPage",
      "file:components/TestRobotScene.tsx"
    ]
  },
  {
    order: 8,
    title: "Build & Framework Configuration",
    description: "Conclude the tour by examining the build system: Next.js framework settings, strict TypeScript compiler paths (`@/*`), package dependencies, and PostCSS pipeline enabling modern Tailwind CSS processing.",
    nodeIds: [
      "config:package.json",
      "config:tsconfig.json",
      "config:components.json",
      "file:next.config.ts",
      "file:postcss.config.mjs"
    ]
  }
];

const tourPath = path.join(intermediateDir, 'tour.json');
fs.writeFileSync(tourPath, JSON.stringify(tour, null, 2));
console.log(`Wrote tour.json with ${tour.length} pedagogical steps.`);
