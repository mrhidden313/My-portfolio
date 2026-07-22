"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Smartphone, Server } from "lucide-react";

function Counter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const duration = 2200;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutProgress = 1 - Math.pow(1 - progress, 4);
      const currentVal = Math.floor(easeOutProgress * target);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
        setIsDone(true);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.10, y: -16, rotateZ: 0.5 }}
      whileTap={{ scale: 0.96 }}
      className="relative overflow-hidden bg-white/95 dark:bg-zinc-900/85 border border-neutral-200 dark:border-white/15 hover:border-[#16a34a] dark:hover:border-[#22c55e] p-8 rounded-3xl transition-all duration-500 shadow-sm hover:shadow-2xl dark:shadow-none dark:hover:shadow-[0_25px_70px_rgba(34,197,94,0.45)] group flex flex-col justify-center items-start cursor-pointer backdrop-blur-2xl"
    >
      {/* Top Green Laser Glow Line (`Expands on hover +30% effect`) */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#22c55e] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />

      <div className="flex items-baseline gap-1.5 mb-2">
        <motion.span
          animate={{
            scale: isDone ? [1, 1.2, 1] : 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-5xl md:text-6xl xl:text-7xl font-black text-black dark:text-white tracking-tight tabular-nums group-hover:text-[#16a34a] dark:group-hover:text-[#22c55e] group-hover:scale-110 transition-all duration-300 drop-shadow-sm dark:group-hover:drop-shadow-[0_0_30px_rgba(34,197,94,1)]"
        >
          {count}
        </motion.span>
        <motion.span
          animate={{
            scale: isDone ? [1, 1.3, 1] : 1,
          }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl xl:text-7xl font-black text-[#16a34a] dark:text-[#22c55e] group-hover:scale-120 transition-all duration-300 dark:drop-shadow-[0_0_25px_rgba(34,197,94,0.9)] dark:group-hover:drop-shadow-[0_0_40px_rgba(34,197,94,1)]"
        >
          {suffix}
        </motion.span>
      </div>
      <p className="text-base md:text-xl font-black text-neutral-600 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
        {label}
      </p>
    </motion.div>
  );
}

const services = [
  {
    title: "Website Development",
    desc: "Next.js 16, React 19 & High-Concurrency Web Apps",
    icon: Code,
  },
  {
    title: "App Development",
    desc: "Scalable Mobile & Interactive WebGL UI Systems",
    icon: Smartphone,
  },
  {
    title: "Cloud Infrastructure & Hosting",
    desc: "Autonomous AI Workflows & Distributed Real-Time APIs",
    icon: Server,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="w-full py-28 px-4 md:px-10 max-w-[1450px] mx-auto overflow-hidden transition-colors duration-500">
      {/* Top Section Header (`+20% stronger entrance & +30% hover title highlight`) */}
      <motion.div 
        initial={{ opacity: 0, y: 70, scale: 0.85 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 group/title cursor-pointer"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-1.5 bg-[#16a34a] dark:bg-[#22c55e] rounded-full dark:shadow-[0_0_15px_#22c55e] group-hover/title:w-20 transition-all duration-300" />
          <span className="text-xs md:text-sm font-black text-[#16a34a] dark:text-[#22c55e] tracking-widest uppercase">
            EXPERTISE & GLOBAL IMPACT
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black dark:text-white group-hover/title:text-[#16a34a] dark:group-hover/title:text-[#22c55e] transition-colors duration-300">
          What We Build &{" "}
          <span className="text-[#16a34a] dark:text-[#22c55e] dark:drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">
            Scale Worldwide.
          </span>
        </h2>
      </motion.div>

      {/* Main Split Grid: Left Services directly alongside (`ke samne`) Right Stat Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side (Columns 1-6): Vertical Services with +30% Stronger Hover Dynamics */}
        <motion.div 
          initial={{ opacity: 0, x: -70, scale: 0.88 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative pl-10 border-l-4 border-[#16a34a]/40 dark:border-[#22c55e]/50 space-y-8"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.16, duration: 0.7 }}
                whileHover={{ scale: 1.08, x: 18 }}
                className="relative flex items-start gap-6 group cursor-pointer p-6 rounded-3xl border border-transparent hover:border-[#16a34a]/60 dark:hover:border-[#22c55e]/60 bg-transparent hover:bg-white/90 dark:hover:bg-zinc-900/90 shadow-none hover:shadow-xl dark:hover:shadow-[0_15px_45px_rgba(34,197,94,0.3)] transition-all duration-300 backdrop-blur-xl"
              >
                {/* Glowing Green Timeline Dot (`Massive 2.0x scale on hover`) */}
                <span className="absolute -left-[46px] top-10 w-4 h-4 rounded-full bg-[#16a34a] dark:bg-[#22c55e] dark:shadow-[0_0_20px_#22c55e] ring-4 ring-background dark:ring-zinc-950 group-hover:scale-200 transition-transform duration-300" />

                {/* Icon Box (`+30% scale to 1.25x and neon green fill on hover`) */}
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-zinc-900 border border-neutral-200 dark:border-white/15 flex items-center justify-center text-[#16a34a] dark:text-[#22c55e] group-hover:scale-125 group-hover:bg-[#16a34a] dark:group-hover:bg-[#22c55e] group-hover:text-white dark:group-hover:text-black shadow-sm hover:shadow-md dark:group-hover:shadow-[0_0_35px_rgba(34,197,94,1)] transition-all duration-300 shrink-0 mt-1">
                  <Icon className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-black tracking-tight text-black dark:text-white group-hover:text-[#16a34a] dark:group-hover:text-[#22c55e] group-hover:translate-x-2 transition-all duration-300 inline-block drop-shadow-sm dark:group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm md:text-base font-bold text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-neutral-100 group-hover:translate-x-2 transition-all duration-300">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Right Side (Columns 7-12): The 3 Luxury Stat Cards directly alongside (`ke samne`) with +30% Hover Levitation */}
        <motion.div 
          initial={{ opacity: 0, x: 70, scale: 0.88 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Card 1: Active Global Businesses (`Span across or full box`) */}
          <div className="sm:col-span-2">
            <Counter target={150} suffix="+" label="Active Global Businesses" />
          </div>

          {/* Card 2: Countries Reached */}
          <div>
            <Counter target={12} suffix="+" label="Countries Reached" />
          </div>

          {/* Card 3: Years of Experience */}
          <div>
            <Counter target={3} suffix="+" label="Years of Experience" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
