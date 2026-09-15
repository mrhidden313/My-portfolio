"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rocket, Award, ArrowRight } from "lucide-react";



// --- Skeletons & Lazy Loaded Components ---
function HeroSkeleton() {
  return (
    <div className="w-full min-h-[600px] rounded-3xl bg-card/60 dark:bg-black/60 border-2 border-border dark:border-white/10 animate-pulse flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="loader" />
        <p className="text-sm font-bold text-muted-foreground animate-pulse">
          Loading 3D Experience...
        </p>
      </div>
    </div>
  );
}

function SectionSkeleton() {
  return (
    <div className="w-full py-20 px-6 max-w-[1400px] mx-auto animate-pulse flex flex-col items-center gap-6">
      <div className="w-48 h-8 bg-muted rounded-xl" />
      <div className="w-full h-64 bg-muted/50 rounded-3xl" />
    </div>
  );
}

const SplineSceneBasic = dynamic(
  () => import("@/components/ui/demo").then((mod) => mod.SplineSceneBasic),
  { loading: () => <HeroSkeleton />, ssr: false }
);

const TechBanner = dynamic(
  () => import("@/components/TechBanner").then((mod) => mod.TechBanner),
  { loading: () => <div className="w-full h-24 bg-muted/30 animate-pulse mt-12" /> }
);

const AboutSection = dynamic(
  () => import("@/components/AboutSection").then((mod) => mod.AboutSection),
  { loading: () => <SectionSkeleton /> }
);

const HomeProjects = dynamic(
  () => import("@/components/HomeProjects").then((mod) => mod.HomeProjects),
  { loading: () => <SectionSkeleton /> }
);

function ViewportSection({ children, skeleton, minHeight = "400px" }: { children: React.ReactNode; skeleton?: React.ReactNode; minHeight?: string; }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { rootMargin: "450px 0px", threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} style={{ minHeight: isVisible ? "auto" : minHeight }} className="w-full">
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : (
        skeleton || <SectionSkeleton />
      )}
    </div>
  );
}

export default function FinalPortfolioPage() {
  const { scrollY } = useScroll();

  // High Quality Scroll Parallax Animations
  const imgScale = useTransform(scrollY, [0, 800], [1.2, 1.0]);

  return (
    <main className="min-h-screen bg-transparent text-black dark:text-white relative font-sans selection:bg-[#22c55e]/30">



      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-screen pt-28 md:pt-36 pb-20 overflow-hidden flex items-center">

        {/* Ambient Radial Glow */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12)_0%,transparent_70%)] pointer-events-none z-0" />

        <div className="relative z-30 max-w-[1600px] mx-auto px-6 md:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* --- LEFT COLUMN: TYPOGRAPHY & DETAILS --- */}
            <div className="lg:col-span-7 flex flex-col justify-center">

              {/* Section: FULL STACK */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="flex items-center gap-4 mb-2"
              >
                <span className="text-black dark:text-white tracking-[0.3em] text-sm md:text-base font-semibold">FULL STACK</span>
                <div className="h-[2px] w-12 md:w-20 bg-[#22c55e]" />
              </motion.div>

              {/* Section: DEVELOPER */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.4 }}
              >
                <h1 className="text-[2.5rem] sm:text-[4.5rem] md:text-[7rem] lg:text-[7.8rem] font-black tracking-tighter leading-[0.85] mb-6 font-sans">
                  <span className="text-[#22c55e] drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]">DEV</span>
                  <span className="text-black dark:text-white">ELOPER</span>
                </h1>
              </motion.div>

              {/* Section: Subheadline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
                className="flex items-start gap-4 mb-6"
              >
                <span className="text-[#22c55e] font-mono text-2xl md:text-3xl font-bold mt-1">{'</>'}</span>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-black dark:text-white font-medium leading-[1.3] tracking-wide">
                  I <span className="text-[#22c55e] font-bold">BUILD</span> SOLUTIONS,<br />
                  NOT JUST WEBSITES.
                </h2>
              </motion.div>

              {/* Section: Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
                className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-light leading-relaxed mb-8 tracking-wide max-w-xl"
              >
                Clean Code. Smart Logic. Scalable Systems.<br />
                That's my <span className="text-[#22c55e] font-medium">Standard</span>.
              </motion.p>

              {/* Section: TECH STACK */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
                className="mb-8"
              >
                <h3 className="text-[#22c55e] font-bold tracking-[0.2em] text-xs md:text-sm mb-4 uppercase">Tech Stack</h3>

                <div className="grid grid-cols-5 gap-y-5 gap-x-3 max-w-md opacity-90">
                  {/* Row 1 */}
                  {[
                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", alt: "HTML5", glow: "rgba(227,79,38,0.5)" },
                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", alt: "CSS3", glow: "rgba(21,114,182,0.5)" },
                    { custom: true, bg: "#F7DF1E", text: "JS", color: "#1a1a1a", alt: "JavaScript", glow: "rgba(247,223,30,0.6)" },
                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind", glow: "rgba(56,189,248,0.5)" },
                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React", glow: "rgba(97,218,251,0.5)" }
                  ].map((icon, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.25, y: -8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="flex flex-col items-center gap-1.5 cursor-pointer"
                    >
                      {icon.custom ? (
                        <div 
                          style={{ 
                            backgroundColor: icon.bg,
                            boxShadow: `0 8px 24px ${icon.glow}, 0 2px 4px rgba(0,0,0,0.4)`
                          }}
                          className="w-9 h-9 md:w-11 md:h-11 rounded-md flex items-center justify-center"
                        >
                          <span style={{ color: icon.color }} className="font-black text-lg leading-none pt-0.5 tracking-tight">JS</span>
                        </div>
                      ) : (
                        <div style={{ filter: `drop-shadow(0 6px 14px ${icon.glow})` }}>
                          <img src={icon.src} className="w-9 h-9 md:w-11 md:h-11" alt={icon.alt} />
                        </div>
                      )}
                      <span className="text-[9px] text-neutral-600 dark:text-neutral-400 font-semibold">{icon.alt}</span>
                    </motion.div>
                  ))}

                  {/* Row 2 */}
                  {[
                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", alt: "Node.js", glow: "rgba(104,160,99,0.5)" },
                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", alt: "Express", invert: true, glow: "rgba(255,255,255,0.3)" },
                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", alt: "MongoDB", glow: "rgba(77,179,61,0.5)" },
                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", alt: "GitHub", invert: true, glow: "rgba(255,255,255,0.3)" },
                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", alt: "Docker", glow: "rgba(13,183,237,0.5)" }
                  ].map((icon, i) => (
                    <motion.div
                      key={i + 5}
                      whileHover={{ scale: 1.25, y: -8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="flex flex-col items-center gap-1.5 cursor-pointer"
                    >
                      <div style={{ filter: `drop-shadow(0 6px 14px ${icon.glow})` }}>
                        <img src={icon.src} className={`w-9 h-9 md:w-11 md:h-11 ${icon.invert ? 'dark:invert opacity-90' : ''}`} alt={icon.alt} />
                      </div>
                      <span className="text-[9px] text-neutral-600 dark:text-neutral-400 font-semibold">{icon.alt}</span>
                    </motion.div>
                  ))}

                  {/* Row 3 */}
                  {[
                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", alt: "TypeScript", glow: "rgba(49,120,198,0.6)" },
                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", alt: "Python", glow: "rgba(55,118,171,0.5)" },
                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL", glow: "rgba(51,103,145,0.5)" },
                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", alt: "Next.js", invert: true, glow: "rgba(255,255,255,0.3)" },
                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", alt: "Redis", glow: "rgba(220,50,40,0.5)" }
                  ].map((icon, i) => (
                    <motion.div
                      key={i + 10}
                      whileHover={{ scale: 1.25, y: -8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="flex flex-col items-center gap-1.5 cursor-pointer"
                    >
                      <div style={{ filter: `drop-shadow(0 6px 14px ${icon.glow})` }}>
                        <img src={icon.src} className={`w-9 h-9 md:w-11 md:h-11 ${icon.invert ? 'dark:invert opacity-90' : ''}`} alt={icon.alt} />
                      </div>
                      <span className="text-[9px] text-neutral-600 dark:text-neutral-400 font-semibold">{icon.alt}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>


              {/* Section: Terminal CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.5 }}
              >
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.06, boxShadow: "0 0 35px rgba(34,197,94,0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl border border-[#22c55e]/40 bg-[#22c55e]/10 backdrop-blur-md cursor-pointer transition-colors"
                  >
                    <span className="text-[#22c55e] font-mono text-base md:text-lg">{'>_'}</span>
                    <span className="text-[#22c55e] font-mono tracking-wide text-xs md:text-sm font-bold">let's_build_together</span>
                  </motion.div>
                </Link>
              </motion.div>

            </div>

            {/* --- RIGHT COLUMN: FRAMED PORTRAIT WITH FLOATING BADGES --- */}
            <div className="lg:col-span-5 flex justify-center items-center relative mt-10 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-t-[200px] sm:rounded-t-[240px] rounded-b-[40px] bg-gradient-to-b from-[#22c55e]/30 via-[#16a34a]/15 to-zinc-950/80 border-2 border-[#22c55e]/40 shadow-[0_0_90px_rgba(34,197,94,0.25)] flex flex-col items-center justify-end overflow-visible group"
              >
                {/* Radial Glow Inside Arch Frame */}
                <div className="absolute inset-0 rounded-t-[200px] sm:rounded-t-[240px] rounded-b-[40px] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.25)_0%,transparent_75%)] pointer-events-none" />

                {/* 60% Scaled WebP Hero Portrait */}
                <Image
                  src="/final.webp"
                  alt="Farman Khan — Full Stack Developer"
                  width={500}
                  height={620}
                  priority
                  className="w-[88%] h-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-700 z-20"
                />

                {/* --- FLOATING BADGE 1: TOP LEFT --- */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -top-3 -left-2 sm:-left-6 z-30 flex items-center gap-2.5 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl border border-neutral-200 dark:border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.3)] pointer-events-auto"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center text-black shadow-lg shrink-0">
                    <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="block text-[9px] sm:text-[10px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">Total Projects</span>
                    <span className="block text-[11px] sm:text-sm font-black text-black dark:text-white">20+ Completed</span>
                  </div>
                </motion.div>

                {/* --- FLOATING BADGE 2: BOTTOM RIGHT --- */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                  className="absolute bottom-12 -right-2 sm:-right-6 z-30 flex items-center gap-2.5 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl border border-neutral-200 dark:border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.3)] pointer-events-auto"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black dark:bg-white/10 border border-[#22c55e]/30 flex items-center justify-center text-[#22c55e] shadow-lg shrink-0">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="block text-[9px] sm:text-[10px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">Certified</span>
                    <span className="block text-[11px] sm:text-sm font-black text-black dark:text-white">Full-Stack Dev</span>
                  </div>
                </motion.div>

                {/* --- FLOATING ACTION PILLS: BOTTOM CENTER --- */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center p-1 sm:p-1.5 rounded-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-3xl border border-neutral-200 dark:border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.4)] gap-1 sm:gap-1.5 whitespace-nowrap pointer-events-auto"
                >
                  <Link
                    href="#projects"
                    className="flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-[11px] sm:text-xs uppercase tracking-wider hover:bg-[#22c55e] dark:hover:bg-[#22c55e] dark:hover:text-black transition-all group"
                  >
                    Portfolio
                    <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#22c55e] group-hover:bg-black group-hover:text-white dark:group-hover:bg-white text-black flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-transparent hover:bg-neutral-100 dark:hover:bg-white/10 text-black dark:text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all"
                  >
                    Hire Me
                  </Link>
                </motion.div>

              </motion.div>
            </div>

          </div>
        </div>

      </section>


      {/* ========================================= */}
      {/* SECTION 2: THE ROBOT & SAAS (DESKTOP ONLY)  */}
      {/* ========================================= */}
      
      <section className="hidden md:block relative w-full z-40 bg-transparent pt-32 pb-24 border-t border-[#22c55e]/10">
        <ViewportSection skeleton={<HeroSkeleton />} minHeight="600px">
          <div className="w-full px-3 md:px-8 max-w-[1550px] mx-auto flex flex-col items-center">
            <div className="w-full text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black dark:text-white mb-4">
                SAAS <span className="text-[#22c55e]">ARCHITECTURE</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
                Building intelligent, cloud-native applications backed by modern frameworks and robust API design.
              </p>
            </div>
            <SplineSceneBasic />
          </div>
        </ViewportSection>
      </section>

      {/* --- Rest of Homepage Sections --- */}
      <section className="relative z-40 bg-transparent">
        <ViewportSection skeleton={<div className="w-full h-24 bg-muted/30 animate-pulse mt-12" />} minHeight="120px">
          <TechBanner />
        </ViewportSection>

        <ViewportSection minHeight="500px">
          <AboutSection />
        </ViewportSection>

        {/* Section: PROJECTS PREVIEW */}
        <ViewportSection minHeight="800px">
          <HomeProjects />
        </ViewportSection>
      </section>

    </main>
  );
}
