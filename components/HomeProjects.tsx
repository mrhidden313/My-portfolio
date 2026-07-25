"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const projects = [
  {
    title: "AK FLOW",
    category: "B2B SaaS Platform",
    description: "A secure multi-tenant SaaS platform built with SvelteKit and Node.js. It allows super admins to onboard agencies, assign managers, and handle ticketing and automated commission payouts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=700&auto=format&fit=crop",
  },
  {
    title: "InstantFlow SAAS",
    category: "DevOps & Workflow Builder",
    description: "A robust backend architecture designed for managing automated background tasks, executing remote SSH commands, and orchestrating complex workflows.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=700&auto=format&fit=crop",
  },
  {
    title: "MJ Marketing",
    category: "Real Estate Corporate Site",
    description: "A professional and high-trust marketing website developed for MJ Group of Companies. Features robust branding, service listings, and property valuation integration.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=700&auto=format&fit=crop",
  },
  {
    title: "Copyright Testing",
    category: "AI / Video Automation",
    description: "An automated utility leveraging AI and Web Workers to analyze and test video/audio content against strict YouTube and TikTok copyright protection algorithms.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=700&auto=format&fit=crop",
  },
];

export function HomeProjects() {
  const router = useRouter();

  return (
    <section id="projects" className="w-full py-32 px-4 md:px-10 max-w-[1450px] mx-auto border-t border-neutral-200 dark:border-white/10 overflow-hidden transition-colors duration-500">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 75, scale: 0.82 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="text-center group/header cursor-pointer"
        onClick={() => router.push('/projects')}
      >
        <h2 className="text-5xl md:text-7xl font-black tracking-tight text-black dark:text-white group-hover/header:text-[#16a34a] dark:group-hover/header:text-[#22c55e] transition-colors duration-300">
          Projects
        </h2>
        
        <div className="w-24 h-2 bg-[#16a34a] dark:bg-[#22c55e] mx-auto mt-5 rounded-full dark:shadow-[0_0_20px_#22c55e] group-hover/header:w-48 transition-all duration-500" />
      </motion.div>

      {/* Projects 4-Card Grid (Small Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
        {projects.map((item, idx) => (
          <motion.div
            key={item.title}
            onClick={() => router.push('/projects')}
            initial={{ opacity: 0, y: 95, scale: 0.82, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: idx * 0.16, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -20, scale: 1.10, rotateZ: idx % 2 === 0 ? 0.6 : -0.6 }}
            className="group relative bg-white/95 dark:bg-zinc-950/85 backdrop-blur-3xl border border-neutral-200 dark:border-white/15 hover:border-[#16a34a] dark:hover:border-[#22c55e] rounded-3xl p-6 flex flex-col justify-between transition-all duration-500 shadow-sm hover:shadow-2xl dark:shadow-none dark:hover:shadow-[0_35px_80px_rgba(34,197,94,0.45)] cursor-pointer overflow-hidden"
          >
            {/* Top Green Laser Line */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#22c55e] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-x-0 group-hover:scale-x-100" />

            {/* Image Preview Container */}
            <div className="w-full h-52 rounded-2xl overflow-hidden bg-muted/40 relative shadow-inner">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-125 group-hover:-rotate-2 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3 px-3.5 py-1 rounded-full bg-zinc-950/85 border border-[#22c55e]/60 text-white group-hover:text-[#22c55e] group-hover:border-[#22c55e] text-xs font-extrabold backdrop-blur-md shadow-md group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all duration-300">
                {item.category}
              </div>
            </div>

            {/* Content & Action Button */}
            <div className="mt-7 flex items-end justify-between gap-4 pt-2">
              <div className="flex-1">
                <h3 className="font-black text-xl md:text-2xl text-black dark:text-white group-hover:text-[#16a34a] dark:group-hover:text-[#22c55e] group-hover:translate-x-2 transition-all duration-300 inline-block drop-shadow-sm dark:group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 mb-3 line-clamp-3 leading-relaxed group-hover:text-neutral-900 dark:group-hover:text-neutral-300 transition-colors duration-300">
                  {item.description}
                </p>
                <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 font-bold group-hover:translate-x-2 group-hover:text-[#16a34a] dark:group-hover:text-[#22c55e] transition-all duration-300">
                  Explore Full Case Study →
                </p>
              </div>

              {/* Circular Green Action Button */}
              <div
                className="w-12 h-12 shrink-0 rounded-full bg-[#16a34a] dark:bg-[#22c55e] group-hover:bg-[#15803d] dark:group-hover:bg-[#22c55e] text-white dark:text-black flex items-center justify-center shadow-sm dark:shadow-[0_0_20px_rgba(34,197,94,0.6)] group-hover:scale-125 group-hover:rotate-45 transition-all duration-300 cursor-pointer"
              >
                <ArrowUpRight className="w-6 h-6 font-black" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Action Button */}
      <motion.div 
        initial={{ opacity: 0, y: 60, scale: 0.85 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-24 text-center"
      >
        <button
          onClick={() => router.push('/projects')}
          className="group/btn inline-flex items-center gap-4 px-12 py-5 rounded-full border-2 border-[#16a34a] dark:border-[#22c55e] bg-white dark:bg-[#22c55e]/10 text-[#16a34a] dark:text-[#22c55e] hover:bg-[#16a34a] dark:hover:bg-[#22c55e] hover:text-white dark:hover:text-black font-black text-lg transition-all duration-300 cursor-pointer shadow-sm hover:shadow-2xl dark:shadow-[0_0_30px_rgba(34,197,94,0.35)] dark:hover:shadow-[0_0_60px_rgba(34,197,94,0.9)]"
        >
          <span>View all projects</span>
          <ArrowRight className="w-6 h-6 font-black group-hover/btn:translate-x-3 transition-transform duration-300" />
        </button>
      </motion.div>
    </section>
  );
}
