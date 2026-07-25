"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AK FLOW",
    category: "B2B SaaS Platform",
    description: "A secure multi-tenant SaaS platform engineered with a strict SvelteKit SPA frontend and an Express backend. Leverages Socket.IO for real-time company-scoped chat and robust multi-tenancy via Prisma.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    link: null,
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
    link: "https://instantflow.online",
    langIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    ]
  },
  {
    title: "MJ Marketing",
    category: "Real Estate Corporate",
    description: "A premium, high-trust corporate portal for MJ Group of Companies. Engineered with React and TailwindCSS, it boasts pixel-perfect responsive layouts, smooth scroll-triggered micro-animations, and an ultra-modern glassmorphism aesthetic. Integrates sophisticated property valuation forms to maximize client conversion.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    link: "https://www.mjmarketingofficial.com/",
    langIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
    ]
  },
  {
    title: "Copyright Testing Engine",
    category: "AI / Video Automation",
    description: "An automated utility leveraging AI and Web Workers to analyze and test video/audio content against strict YouTube and TikTok copyright algorithms. Utilizes advanced FFmpeg processing pipelines.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    link: null,
    langIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
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

      {/* Massive 2x2 Cinematic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 relative">
        {/* Ambient background glow for the whole grid */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#22c55e]/5 blur-[120px] pointer-events-none rounded-full" />

        {projects.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
            className="col-span-1 group relative flex flex-col bg-white/5 dark:bg-zinc-900/40 backdrop-blur-xl border border-neutral-200 dark:border-white/10 rounded-3xl overflow-hidden transition-all duration-700 hover:border-[#22c55e]/60 dark:hover:border-[#22c55e]/60 hover:shadow-[0_0_50px_rgba(34,197,94,0.15)] dark:hover:shadow-[0_0_80px_rgba(34,197,94,0.2)]"
          >
            {/* Cinematic Glow Inside Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Image Section */}
            <div className="relative w-full h-72 md:h-96 overflow-hidden bg-neutral-100 dark:bg-zinc-950">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
              
              {/* Category Badge */}
              <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-[#22c55e]/40 text-white text-xs font-bold tracking-widest uppercase shadow-xl group-hover:border-[#22c55e] transition-colors duration-500">
                {item.category}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-10 flex flex-col flex-grow justify-between relative z-10">
              <div>
                <h3 className="text-3xl font-black text-black dark:text-white group-hover:text-[#22c55e] transition-colors duration-500 mb-5">
                  {item.title}
                </h3>
                
                {/* Always-visible Tech Icons under title */}
                <div className="flex items-center gap-3 mb-6">
                  {item.langIcons.map((iconSrc, i) => (
                    <div key={i} className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/5 backdrop-blur-md border border-neutral-200 dark:border-white/10 flex items-center justify-center p-2 shadow-sm group-hover:border-[#22c55e]/40 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-500 hover:-translate-y-1">
                      <img src={iconSrc} alt="Tech Icon" className="w-full h-full object-contain filter drop-shadow-md" />
                    </div>
                  ))}
                </div>

                <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium group-hover:text-neutral-300 transition-colors duration-500">
                  {item.description}
                </p>
              </div>

              <div className="mt-10 flex items-center justify-between">
                {/* Specific Live Link Button (Only if available) */}
                {item.link ? (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#22c55e] text-black font-bold uppercase tracking-widest text-xs hover:bg-white hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all duration-300"
                  >
                    Visit Live Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-800 text-neutral-400 font-bold uppercase tracking-widest text-xs cursor-not-allowed border border-neutral-700">
                    Internal System
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
