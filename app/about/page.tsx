"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Code2, Cpu, Layers, Zap, Globe, Database } from "lucide-react";
import Link from "next/link";

const skills = [
  { category: "Frontend", color: "#22c55e", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"] },
  { category: "Backend", color: "#3b82f6", items: ["Node.js", "Express", "REST APIs", "GraphQL", "Python", "Redis"] },
  { category: "Database", color: "#f59e0b", items: ["MongoDB", "PostgreSQL", "Prisma", "Firebase", "Supabase"] },
  { category: "DevOps", color: "#8b5cf6", items: ["Docker", "GitHub Actions", "Vercel", "Linux", "Nginx"] },
];

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Full-Stack Web Apps",
    desc: "End-to-end product development — from database design to pixel-perfect UI. Built to scale.",
    color: "#22c55e",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "API & Backend Systems",
    desc: "High-performance REST and GraphQL APIs. Secure, well-documented, and built for heavy load.",
    color: "#3b82f6",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "SaaS Architecture",
    desc: "Subscription systems, multi-tenancy, auth flows, and cloud deployments for production SaaS.",
    color: "#f59e0b",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance & Optimization",
    desc: "Cutting load times, fixing bottlenecks, and ensuring smooth 60fps interfaces under real load.",
    color: "#8b5cf6",
  },
];

const stats = [
  { value: "3+", label: "Years Building" },
  { value: "20+", label: "Projects Shipped" },
  { value: "10+", label: "Happy Clients" },
  { value: "100%", label: "Ownership Per Project" },
];

export default function AboutPage() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [0.82, 0.55]);
  const y = useTransform(scrollY, [0, 400], [-20, 90]);

  return (
    <main className="min-h-screen bg-transparent text-black dark:text-white relative selection:bg-[#22c55e]/30 pb-32 font-sans">

      {/* ── HERO BG IMAGE ── */}
      <div className="absolute top-0 left-0 w-full h-[160vh] z-0 overflow-hidden flex justify-center">
        <motion.div style={{ scale, y }} className="w-full h-full max-w-[1600px] origin-top">
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/farman.png"
            alt="Farman Khan — Full Stack Developer"
            className="w-full h-full object-contain object-top opacity-85 pt-6 md:pt-10"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%), linear-gradient(to top, transparent 0%, black 22%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%), linear-gradient(to top, transparent 0%, black 22%)",
              WebkitMaskComposite: "source-in",
              maskComposite: "intersect"
            }}
          />
        </motion.div>
        {/* Extra bottom solid block */}
        <div className="absolute inset-x-0 bottom-0 h-[180px] bg-[#050505] pointer-events-none" />
      </div>


      {/* ── HERO TEXT ── */}
      <div className="relative z-10 max-w-[1450px] mx-auto px-4 md:px-10 pt-[20vh] lg:pt-[24vh]">
        <div className="w-full lg:w-7/12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-[#22c55e] uppercase">
                Available for work
              </span>
            </div>

            {/* It's Me */}
            <p className="text-black/ dark:text-white/ text-lg md:text-xl font-normal tracking-wide mb-1">
              It&apos;s Me
            </p>

            {/* MR */}
            <p className="text-[#22c55e] text-2xl md:text-3xl font-black tracking-[0.15em] uppercase drop-shadow-[0_0_15px_rgba(34,197,94,0.5)] mb-1">
              MR.
            </p>

            {/* Farman Khan. */}
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tight text-black dark:text-white leading-[0.9] mb-6">
              Farman<br />
              <span className="text-[#22c55e] drop-shadow-[0_0_35px_rgba(34,197,94,0.55)]">Khan.</span>
            </h1>

            <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed max-w-md">
              Full-Stack Developer. Crafting seamless digital products from database to deployment — with a sharp eye for UI/UX along the way.
            </p>
          </motion.div>

        </div>
      </div>

      {/* ── STATS ROW ── */}
      <div className="relative z-10 max-w-[1450px] mx-auto px-4 md:px-10 mt-[35vh] lg:mt-[40vh]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04, y: -4 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-black/ dark:border-white/ backdrop-blur-md text-center"
            >
              <div className="text-3xl md:text-4xl font-black text-[#22c55e] drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]">{s.value}</div>
              <div className="text-neutral-500 text-sm font-semibold mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── MY STORY ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-[#22c55e] font-bold tracking-[0.25em] text-xs uppercase mb-4 block">The Story</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white mb-6 leading-tight">
                Built from curiosity,<br />
                <span className="text-[#22c55e]">refined by execution.</span>
              </h2>
              <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed mb-4">
                Started coding out of pure curiosity — breaking things apart to understand how they worked. Over 3+ years, that curiosity became a discipline: building production-grade full-stack applications that handle real users, real data, and real business logic.
              </p>
              <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed">
                The stack doesn&apos;t matter as much as the outcome. Whether it&apos;s a React frontend that feels instant or a Node.js API that handles thousands of requests — the goal is always the same: <span className="text-black dark:text-white font-medium">software that actually works.</span>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { icon: <Code2 className="w-5 h-5" />, title: "Frontend Craft", desc: "Pixel-perfect, responsive, animated — UIs that feel as good as they look." },
                { icon: <Database className="w-5 h-5" />, title: "Backend Depth", desc: "Scalable APIs, clean database schemas, and systems that don't break under load." },
                { icon: <Zap className="w-5 h-5" />, title: "Full Ownership", desc: "From first commit to production deploy — every layer, handled." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6, borderColor: "rgba(34,197,94,0.4)" }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-black/ dark:border-white/ transition-all duration-300"
                >
                  <div className="p-2 rounded-xl bg-[#22c55e]/10 text-[#22c55e] shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-bold text-black dark:text-white mb-1">{item.title}</div>
                    <div className="text-neutral-500 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── SKILLS GRID ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-[#22c55e] font-bold tracking-[0.25em] text-xs uppercase mb-4 block">The Arsenal</span>
          <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white mb-10">Tools of the trade</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-black/ dark:border-white/ hover:border-[#22c55e]/50 transition-all duration-500 hover:bg-gradient-to-br hover:from-white/[0.05] hover:to-[#22c55e]/[0.05] hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]"
              >
                <div className="font-black text-sm tracking-widest uppercase mb-4 transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_currentColor]" style={{ color: group.color }}>{group.category}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-white/5 border border-black/ dark:border-white/ text-neutral-300 text-xs font-semibold group-hover:border-[#22c55e]/30 group-hover:text-white transition-all duration-300">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── SERVICES ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-[#22c55e] font-bold tracking-[0.25em] text-xs uppercase mb-4 block">What I Build</span>
          <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white mb-10">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="p-7 rounded-2xl bg-white/[0.03] border border-black/ dark:border-white/ hover:border-[#22c55e]/50 transition-all duration-500 group hover:bg-gradient-to-br hover:from-[#22c55e]/10 hover:to-transparent hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]"
              >
                <div className="p-3 rounded-xl w-fit mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_20px_currentColor]" style={{ backgroundColor: `${s.color}15`, color: s.color }}>
                  {s.icon}
                </div>
                <h3 className="text-black dark:text-white font-bold text-lg mb-2 group-hover:text-[#22c55e] transition-colors duration-300">{s.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center py-20 border-t border-black/ dark:border-white/"
        >
          <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white mb-4">
            Have a project?
          </h2>
          <p className="text-neutral-500 text-lg mb-10 max-w-md mx-auto">
            Open for freelance work and full-time roles. Let&apos;s build something that actually performs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="mailto:farman@example.com"
              whileHover={{ scale: 1.06, y: -4, boxShadow: "0 20px 60px rgba(34,197,94,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#22c55e] text-black font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
            >
              Get in Touch <ArrowUpRight className="w-5 h-5" />
            </motion.a>
            <motion.div whileHover={{ scale: 1.04, y: -3 }}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl border border-black/ dark:border-white/ text-neutral-300 hover:text-white hover:border-white/30 font-bold uppercase tracking-widest text-sm transition-all duration-300"
              >
                View Work
              </Link>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
