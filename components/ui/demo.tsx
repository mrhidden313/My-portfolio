'use client'

import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { ArrowRight } from "lucide-react"

// Ultra-condensed, diamond precision copywriting (`150+ active businesses across 12 countries`)
const ABOUT_CONTENT_LINES = [
  "ABOUT FARMAN KHAN",
  "Full-Stack & AI Systems Architect (3+ Yrs)",
  "",
  "Architecting high-concurrency SaaS & autonomous AI workflows,",
  "trusted by 150+ active businesses across 12 countries.",
  "",
  "CORE CAPABILITIES:",
  "• Next.js 16, React 19 & High-Concurrency SaaS",
  "• Autonomous LLM Agents & Cloud Architecture",
  "• Three.js & WebGL Interactive 3D UI",
  "",
  "STATUS: AVAILABLE FOR HIGH-IMPACT ENGAGEMENTS",
]

export function SplineSceneBasic() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.3], [0.88, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 1])
  const yOffset = useTransform(scrollYProgress, [0, 0.3], [30, 0])

  const [isZoomedIn, setIsZoomedIn] = useState(true)

  useEffect(() => {
    const zoomTimer = setTimeout(() => {
      setIsZoomedIn(false)
    }, 1000)
    return () => clearTimeout(zoomTimer)
  }, [])



  return (
    <motion.div ref={containerRef} style={{ scale, opacity, y: yOffset }} className="w-full">
      <Card className="w-full min-h-[600px] lg:min-h-[750px] bg-white dark:bg-black/[0.96] backdrop-blur-none dark:backdrop-blur-3xl relative overflow-visible border border-neutral-300 dark:border-white/20 shadow-xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-colors duration-500 rounded-3xl group">
        {/* Spotlight wrapped in overflow-hidden so glow stays inside rounded card corners and only shows in Dark Mode */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none hidden dark:block">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
        </div>

        <div className="flex flex-col lg:flex-row h-full relative z-10">
          {/* Left content: Delayed 1.1s so it animates AFTER WebGL shader compilation finishes, giving 60 FPS zero-lag smoothness */}
          <div className="w-full lg:w-1/2 xl:w-[46%] p-8 md:p-14 flex flex-col justify-center z-20 shrink-0">
            
            {/* White Bolded Capitalize Style (`Hello .`) right above `i am FARMAN` with +30% Hover Levitation */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.08, x: 14 }}
              transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl font-extrabold text-black dark:text-white tracking-wide mb-1 cursor-pointer inline-block w-fit transition-colors hover:text-[#16a34a] dark:hover:text-[#22c55e]"
            >
              Hello .
            </motion.div>

            {/* i am FARMAN (`lowercase i am, uppercase FARMAN, exact sizing`) with expanding green bar & +30% Hover Scale */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.06, x: 18 }}
              transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-4 mt-1 group/name cursor-pointer w-fit"
            >
              <div className="w-14 h-1.5 bg-[#16a34a] dark:bg-[#22c55e] dark:shadow-[0_0_14px_#22c55e] rounded-full shrink-0 group-hover/name:w-28 transition-all duration-300" />
              <span className="flex items-baseline gap-2.5 font-black uppercase tracking-tight">
                <span className="text-xl md:text-3xl text-black dark:text-white lowercase group-hover/name:text-[#16a34a] dark:group-hover/name:text-[#22c55e] transition-colors">
                  i am
                </span>
                <span className="text-3xl md:text-5xl text-[#16a34a] dark:text-[#22c55e] dark:drop-shadow-[0_0_15px_rgba(34,197,94,0.6)] group-hover/name:scale-110 transition-all duration-300 dark:group-hover/name:drop-shadow-[0_0_30px_rgba(34,197,94,1)]">
                  FARMAN
                </span>
              </span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#16a34a] dark:bg-[#22c55e] inline-block dark:shadow-[0_0_15px_#22c55e] group-hover/name:scale-150 group-hover/name:animate-ping transition-all" />
            </motion.div>

            {/* Big Headline: Software Developer (`+30% Hover Levitation & Laser Drop Shadow`) */}
            <motion.h1 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, x: 20 }}
              transition={{ delay: 1.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tight text-black dark:text-white leading-tight drop-shadow-sm mb-2 group/h1 cursor-pointer w-fit"
            >
              Software{" "}
              <span className="text-[#16a34a] dark:text-[#22c55e] dark:drop-shadow-[0_0_15px_rgba(34,197,94,0.6)] group-hover/h1:text-white dark:group-hover/h1:text-[#22c55e] dark:group-hover/h1:drop-shadow-[0_0_40px_rgba(34,197,94,1)] transition-all duration-300">
                Developer.
              </span>
            </motion.h1>

            {/* Paragraph (`Interactive text highlight on hover`) */}
            <motion.p 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ x: 12 }}
              transition={{ delay: 1.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 mb-6 text-neutral-800 dark:text-neutral-300 max-w-2xl text-sm md:text-base leading-relaxed font-semibold hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              Software Developer with 3+ years building scalable web applications, cloud APIs, and interactive interfaces using modern programming languages.
            </motion.p>

            {/* Language Chips (`+30% Hover Levitation: scale 1.18, y: -6, rotateZ: 2`) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-7 flex flex-wrap items-center gap-2.5"
            >
              {["TypeScript", "Python", "Next.js", "React", "Node.js", "JavaScript", "Tailwind CSS"].map((lang, chipIdx) => (
                <motion.div
                  key={lang}
                  whileHover={{ scale: 1.18, y: -6, rotateZ: chipIdx % 2 === 0 ? 2 : -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-zinc-900/90 border border-neutral-300 dark:border-white/15 shadow-sm hover:shadow-xl dark:hover:shadow-[0_10px_30px_rgba(34,197,94,0.45)] hover:border-[#16a34a] dark:hover:border-[#22c55e] transition-all duration-300 cursor-pointer group/chip"
                >
                  <span className="flex items-center gap-2 text-xs md:text-sm font-extrabold text-neutral-800 dark:text-neutral-200 group-hover/chip:text-black dark:group-hover/chip:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] dark:bg-[#22c55e] group-hover/chip:scale-200 group-hover/chip:animate-ping transition-transform dark:shadow-[0_0_8px_#22c55e]" />
                    {lang}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons (`+30% Hover Levitation: scale 1.15, y: -8 with cyber laser shadow`) */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.75, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.15, y: -8 }}
                whileTap={{ scale: 0.94 }}
                href="#contact"
                className="relative overflow-hidden px-8 py-4 rounded-2xl bg-[#16a34a] dark:bg-[#22c55e] text-black dark:text-white dark:text-black font-black text-sm flex items-center gap-3 shadow-md hover:shadow-2xl dark:shadow-[0_0_30px_rgba(34,197,94,0.5)] dark:hover:shadow-[0_20px_65px_rgba(34,197,94,1)] transition-all duration-300 cursor-pointer group/btn"
              >
                <span className="absolute inset-0 animate-water opacity-30 pointer-events-none" />
                <span className="relative z-10">Initiate Collaboration</span>
                <ArrowRight className="w-5 h-5 relative z-10 font-black group-hover/btn:translate-x-2 transition-transform duration-300" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.14, y: -6 }}
                whileTap={{ scale: 0.94 }}
                href="#about"
                className="px-8 py-4 rounded-2xl border-2 border-[#16a34a] dark:border-[#22c55e] text-[#16a34a] dark:text-[#22c55e] hover:bg-[#16a34a] dark:hover:bg-[#22c55e] hover:text-white dark:hover:text-black font-black text-sm flex items-center gap-2 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl dark:shadow-[inset_0_0_15px_rgba(34,197,94,0.15)] dark:hover:shadow-[0_15px_45px_rgba(34,197,94,0.85)]"
              >
                <span>View Technical Resume</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right content: 3D Robot Stage (`Shifted higher: y: -20 to align perfectly with compact card ending`) + Floating Card */}
          <div className="w-full lg:w-7/12 xl:w-2/3 relative min-h-[540px] lg:min-h-[740px] flex items-center justify-center overflow-visible z-10">
            {/* Robot Zoom & Shift transitions */}
            <motion.div
              animate={{
                scale: isZoomedIn ? 1.28 : 1.0,
                y: isZoomedIn ? 20 : 0,
              }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 z-10 flex items-center justify-center pointer-events-auto"
            >
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full min-h-[540px] lg:min-h-[740px] overflow-visible"
              />
            </motion.div>



          </div>
        </div>
      </Card>
    </motion.div>
  )
}
