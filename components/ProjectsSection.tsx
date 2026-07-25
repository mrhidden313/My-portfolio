"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "AK FLOW",
    category: "B2B SaaS Platform",
    description: "A secure multi-tenant SaaS platform engineered with a strict SvelteKit SPA frontend and an Express backend. Leverages Socket.IO for real-time company-scoped chat and robust multi-tenancy via Prisma.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tech: ["SvelteKit", "Node.js", "Socket.IO", "Prisma"],
    github: "#",
    live: "#",
    langIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
    ]
  },
  {
    title: "InstantFlow SAAS",
    category: "DevOps & Workflow Automation",
    description: "A highly complex, custom CRM engine built on a hybrid architecture. The core runs a Ruby on Rails backend and Vue.js frontend inside Docker, integrated tightly with FFMPEG and ImageMagick for advanced media processing. The real power lies in its Node.js 'Gatekeeper' and automation scripts running via PM2, which intercept webhooks to handle native WhatsApp API features seamlessly.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tech: ["Ruby on Rails", "Vue.js", "Node.js", "Docker"],
    github: "#",
    live: "#",
    langIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    ]
  },
  {
    title: "MJ Marketing",
    category: "Real Estate Corporate",
    description: "A premium, high-trust corporate portal for MJ Group of Companies. Engineered with React and TailwindCSS, it boasts pixel-perfect responsive layouts, smooth scroll-triggered micro-animations, and an ultra-modern glassmorphism aesthetic. Integrates sophisticated property valuation forms to maximize client conversion.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    github: "#",
    live: "#",
    langIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    ]
  },
  {
    title: "Copyright Testing Engine",
    category: "AI / Video Automation",
    description: "An automated utility leveraging AI and Web Workers to analyze and test video/audio content against strict YouTube and TikTok copyright algorithms. Utilizes advanced FFmpeg processing pipelines.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    tech: ["AI", "FFmpeg", "Node.js"],
    github: "#",
    live: "#",
    langIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
    ]
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-24 px-4 md:px-10 max-w-[1450px] mx-auto overflow-hidden">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black dark:text-white uppercase leading-none">
            Selected <br className="hidden md:block"/>
            <span className="text-[#22c55e]">Works</span>
          </h2>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-sm md:text-base max-w-md font-medium tracking-wide">
            A curated collection of enterprise tools, digital platforms, and system architectures I've engineered.
          </p>
        </div>
      </motion.div>

      {/* Massive 2x2 Grid (All Cards Large) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
            className="col-span-1 group relative flex flex-col bg-white dark:bg-zinc-900 border border-neutral-200 dark:border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#22c55e]/50 dark:hover:border-[#22c55e]/50 hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)]"
          >
            {/* Image Section */}
            <div className="relative w-full h-72 md:h-96 overflow-hidden bg-neutral-100 dark:bg-zinc-950">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Category Badge */}
              <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase shadow-xl">
                {item.category}
              </div>

              {/* Action Buttons & Language Icons (Hover Reveal) */}
              <div className="absolute top-5 right-5 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                {/* Language Icons */}
                <div className="flex items-center gap-1.5 mr-2">
                  {item.langIcons.map((iconSrc, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center p-1.5 shadow-lg">
                      <img src={iconSrc} alt="Tech Icon" className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>

                {/* Github / Live */}
                <a href={item.github} className="p-3 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white hover:bg-[#22c55e] hover:border-[#22c55e] hover:text-black transition-colors shadow-lg">
                  <Code2 className="w-4 h-4" />
                </a>
                <a href={item.live} className="p-3 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white hover:bg-[#22c55e] hover:border-[#22c55e] hover:text-black transition-colors shadow-lg">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-10 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-3xl font-black text-black dark:text-white group-hover:text-[#22c55e] transition-colors duration-300 mb-4">
                  {item.title}
                </h3>
                
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tech.map((t) => (
                    <span key={t} className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-lg bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-white/10 group-hover:border-[#22c55e]/30 transition-colors shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              <div className="mt-10 flex items-center gap-2 text-[#22c55e] text-sm font-black uppercase tracking-widest cursor-pointer group/link">
                View Case Study
                <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
