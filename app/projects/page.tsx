"use client";

import { ProjectsSection } from "@/components/ProjectsSection";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white relative selection:bg-[#22c55e]/30 pt-16 md:pt-20 font-sans overflow-hidden">
      
      {/* ── BACKGROUND GLOWS ── */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ProjectsSection />
      </motion.div>

    </main>
  );
}
