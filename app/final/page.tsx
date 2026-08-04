"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";



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



      {/* --- HERO SECTION (LOCKED CONTAINER) --- */}
      <section className="relative w-full min-h-screen overflow-hidden">

      {/* --- RIGHT SIDE IMAGE & LIGHTING --- */}
      <div className="absolute top-0 right-0 w-full md:w-[65%] h-screen z-10 pointer-events-none flex justify-center lg:justify-end">

        {/* Optimized Green Lighting */}
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full bg-[radial-gradient(circle_at_right_center,rgba(34,197,94,0.15)_0%,rgba(34,197,94,0.05)_40%,transparent_70%)] z-20 pointer-events-none transform-gpu" />

        {/* The Image — 10% larger */}
        <motion.div
          style={{ scale: imgScale, translateY: "calc(15vh + 55px)" }}
          className="absolute bottom-0 right-0 w-full max-w-[1320px] h-[104vh] md:h-[110vh] z-10 origin-bottom translate-x-[15%] md:translate-x-[5%] lg:translate-x-[0%]"
        >
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="w-full h-full relative"
          >
            <img
              src="/final.png"
              alt="Farman Khan"
              className="w-full h-full object-contain object-bottom pt-4 md:pt-12 mix-blend-lighten"
              style={{
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 20%)",
                maskImage: "linear-gradient(to top, transparent 0%, black 20%)"
              }}
            />
            {/* Left vignette — soft fade so no hard left edge */}
            <div className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-[#050505]/90 via-[#050505]/40 to-transparent pointer-events-none z-10" />
            {/* Right vignette — soft fade so no hard right edge */}
            <div className="absolute inset-y-0 right-0 w-[12%] bg-gradient-to-l from-[#050505]/70 via-[#050505]/20 to-transparent pointer-events-none z-10" />
          </motion.div>
        </motion.div>
      </div>

      {/* --- FOREGROUND CONTENT (Left Column) --- */}
      <div className="relative z-30 max-w-[1600px] mx-auto px-6 md:px-20 pt-20 md:pt-32 pb-24 h-full min-h-screen flex flex-col justify-center">

        <div className="w-full md:w-[55%] mt-[5vh]">

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
            <h1 className="text-[4.5rem] md:text-[7.2rem] lg:text-[9rem] font-black tracking-tighter leading-[0.8] mb-8 font-sans" style={{ transform: "scaleY(1.15)", transformOrigin: "left" }}>
              <span className="text-[#22c55e] drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]">DEV</span>
              <span className="text-black dark:text-white">ELOPER</span>
            </h1>
          </motion.div>

          {/* Section: Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="flex items-start gap-4 mb-8"
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
            className="text-neutral-400 text-lg md:text-2xl font-light leading-relaxed mb-12 tracking-wide"
          >
            Clean Code. Smart Logic.<br />
            Scalable Systems.<br />
            That's my <span className="text-[#22c55e] font-medium">Standard</span>.
          </motion.p>

          {/* Section: TECH STACK */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-[#22c55e] font-bold tracking-[0.2em] text-sm md:text-base mb-6">TECH STACK</h3>

            <div className="grid grid-cols-5 gap-y-6 gap-x-4 max-w-md opacity-90">
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
                  whileHover={{ 
                    scale: 1.3, 
                    y: -12,
                    rotateY: 15,
                    rotateX: -10,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex flex-col items-center gap-2 cursor-pointer"
                  style={{ perspective: "600px", transformStyle: "preserve-3d" }}
                >
                  {icon.custom ? (
                    <div 
                      style={{ 
                        backgroundColor: icon.bg,
                        boxShadow: `0 8px 24px ${icon.glow}, 0 2px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)`,
                        transform: "translateZ(0)"
                      }}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-md flex items-center justify-center"
                    >
                      <span style={{ color: icon.color }} className="font-black text-xl leading-none pt-0.5 tracking-tight">JS</span>
                    </div>
                  ) : (
                    <div style={{ filter: `drop-shadow(0 6px 16px ${icon.glow}) drop-shadow(0 2px 4px rgba(0,0,0,0.5))` }}>
                      <img src={icon.src} className="w-10 h-10 md:w-12 md:h-12" alt={icon.alt} />
                    </div>
                  )}
                  <span className="text-[10px] text-neutral-400 font-semibold">{icon.alt}</span>
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
                  whileHover={{ 
                    scale: 1.3, 
                    y: -12,
                    rotateY: 15,
                    rotateX: -10,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex flex-col items-center gap-2 cursor-pointer"
                  style={{ perspective: "600px", transformStyle: "preserve-3d" }}
                >
                  <div style={{ filter: `drop-shadow(0 6px 16px ${icon.glow}) drop-shadow(0 2px 4px rgba(0,0,0,0.5))` }}>
                    <img src={icon.src} className={`w-10 h-10 md:w-12 md:h-12 ${icon.invert ? 'invert opacity-90' : ''}`} alt={icon.alt} />
                  </div>
                  <span className="text-[10px] text-neutral-400 font-semibold">{icon.alt}</span>
                </motion.div>
              ))}

              {/* Row 3 — Languages & DB */}
              {[
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", alt: "TypeScript", glow: "rgba(49,120,198,0.6)" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", alt: "Python", glow: "rgba(55,118,171,0.5)" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL", glow: "rgba(51,103,145,0.5)" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", alt: "Next.js", invert: true, glow: "rgba(255,255,255,0.3)" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", alt: "Redis", glow: "rgba(220,50,40,0.5)" }
              ].map((icon, i) => (
                <motion.div
                  key={i + 10}
                  whileHover={{ 
                    scale: 1.3, 
                    y: -12,
                    rotateY: 15,
                    rotateX: -10,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex flex-col items-center gap-2 cursor-pointer"
                  style={{ perspective: "600px", transformStyle: "preserve-3d" }}
                >
                  <div style={{ filter: `drop-shadow(0 6px 16px ${icon.glow}) drop-shadow(0 2px 4px rgba(0,0,0,0.5))` }}>
                    <img src={icon.src} className={`w-10 h-10 md:w-12 md:h-12 ${icon.invert ? 'invert opacity-90' : ''}`} alt={icon.alt} />
                  </div>
                  <span className="text-[10px] text-neutral-400 font-semibold">{icon.alt}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section: WHAT I DO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-[#22c55e] font-bold tracking-[0.2em] text-sm md:text-base mb-6">WHAT I DO</h3>
            <ul className="space-y-4">
              {['Web Development', 'API Development', 'Database Design', 'Problem Solving'].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 45, color: "#ffffff", textShadow: "0px 0px 15px rgba(34,197,94,0.8)" }}
                  className="flex items-center gap-3 text-neutral-300 md:text-lg font-light tracking-wide cursor-pointer transition-colors"
                >
                  <span className="text-[#22c55e] text-xl font-medium">{'>'}</span> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Section: Terminal CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.15, boxShadow: "0 0 50px rgba(34,197,94,0.6)", backgroundColor: "rgba(34,197,94,0.25)" }}
              whileTap={{ scale: 0.90 }}
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-[#22c55e]/30 bg-[#22c55e]/5 backdrop-blur-md cursor-pointer transition-colors duration-300"
            >
              <span className="text-[#22c55e] font-mono text-lg">{'>_'}</span>
              <span className="text-[#22c55e] font-mono tracking-wide">let's_build_together</span>
            </motion.div>
          </motion.div>

          {/* Section: ABOUT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, type: "spring", bounce: 0.4 }}
            className="mt-20"
          >
            <p className="text-neutral-400 text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-6 tracking-wide">
              Crafting seamless web applications by bridging pixel-perfect React and Next.js frontends with scalable Node.js, Express, and PostgreSQL backends. From UI animations to database architecture — every layer of the product lifecycle is handled with precision.
            </p>
            <p className="text-neutral-400 text-xl md:text-2xl lg:text-3xl font-light leading-relaxed tracking-wide">
              Design and engineering aren&apos;t separate jobs — they&apos;re one process. <span className="text-[#22c55e] font-medium drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]">Complete products. Looks sharp, runs fast, scales without compromise.</span>
            </p>
          </motion.div>

        </div>
      </div>

      {/* --- BOTTOM RIGHT SIGNATURE --- */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-10 right-10 md:bottom-16 md:right-16 flex flex-col items-end z-40 pointer-events-none"
      >
        <span className="text-[#22c55e] text-5xl md:text-7xl opacity-90 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" style={{ fontFamily: "'Brush Script MT', 'Dancing Script', cursive" }}>
          Farman
        </span>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-black dark:text-white tracking-[0.3em] text-sm md:text-base font-semibold">DEVELOPER</span>
          <span className="text-[#22c55e] font-mono font-bold text-xl">{'</>'}</span>
        </div>
      </motion.div>

      </section>

      {/* ========================================= */}
      {/* SECTION 2: THE ROBOT & SAAS                 */}
      {/* ========================================= */}
      
      <section className="relative w-full z-40 bg-transparent pt-32 pb-24 border-t border-[#22c55e]/10">
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
