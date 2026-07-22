"use client";

import * as React from "react";
import { motion } from "framer-motion";

const techList = [
  "TypeScript",
  "Python",
  "Next.js",
  "React",
  "Node.js",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
];

export function TechBanner() {
  return (
    <section className="w-full border-y border-neutral-200 dark:border-white/10 bg-neutral-100/60 dark:bg-black/50 backdrop-blur-xl py-8 px-4 md:px-10 mt-12 overflow-hidden transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.85 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="max-w-[1550px] mx-auto flex flex-wrap items-center justify-between gap-6 md:gap-8"
      >
        {techList.map((tech, index) => (
          <motion.div
            key={tech}
            whileHover={{ scale: 1.25, y: -8, rotate: index % 2 === 0 ? 3 : -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <span className="text-lg md:text-2xl font-black tracking-wider text-neutral-600 dark:text-neutral-400 group-hover:text-[#16a34a] dark:group-hover:text-[#22c55e] dark:group-hover:drop-shadow-[0_0_18px_rgba(34,197,94,0.9)] transition-all duration-300">
              {tech}
            </span>
            {index < techList.length - 1 && (
              <span className="hidden md:inline-block w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-[#16a34a] dark:group-hover:bg-[#22c55e] group-hover:scale-150 transition-all duration-300 dark:shadow-[0_0_8px_#22c55e]" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
