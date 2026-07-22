"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const activeTab = navItems.find(item => 
    item.href === pathname || (pathname === "/" && item.href === "/")
  )?.name ?? "Home";
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      // Ensure browser scrolls smoothly to top on refresh / page reload
      if (window.history && "scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, behavior: "smooth" });

      const handleScroll = () => {
        if (window.scrollY > 60) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-700">
      <AnimatePresence mode="wait">
        {!isScrolled ? (
          /* SPLIT MODE: At Top of Page (`isScrolled === false`) */
          <motion.div
            key="split-header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between px-6 py-4 md:px-12 w-full"
          >
            {/* Brand / Logo PNG sliding in from far LEFT (`floating left side se nekal ke le ana`) */}
            <motion.div
              initial={{ x: -140, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 90, damping: 15, delay: 0.1 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="pointer-events-auto flex items-center gap-2.5 px-4 md:px-5 py-2 rounded-full bg-white/90 dark:bg-zinc-900/85 backdrop-blur-3xl border border-neutral-200 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.12)] cursor-pointer group"
            >
              <img
                src="/logo.png"
                alt="FKTECH Logo"
                className="h-7 md:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-black text-sm md:text-base tracking-wider text-black dark:text-white group-hover:text-[#16a34a] dark:group-hover:text-[#22c55e] transition-colors">
                FKTECH
              </span>
            </motion.div>

            {/* Liquid Glass Navbar dropping smoothly from TOP (`y: -80`) */}
            <motion.nav
              initial={{ y: -80, opacity: 0, scale: 0.85 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 90, damping: 15, delay: 0.2 }}
              className="pointer-events-auto relative flex items-center gap-1.5 md:gap-2.5 p-2 rounded-full bg-white/85 dark:bg-zinc-900/85 backdrop-blur-3xl border border-neutral-200 dark:border-white/12 shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.14)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/15 dark:via-cyan-400/10 to-transparent animate-shimmer pointer-events-none" />

              {navItems.map((item) => {
                const isActive = activeTab === item.name;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 md:px-7 md:py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer group",
                      isActive
                        ? "text-black dark:text-white drop-shadow-sm dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                        : "text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabSplit"
                        className="absolute inset-0 rounded-full animate-water border border-neutral-200 dark:border-white/15 bg-white dark:bg-white/10 shadow-sm dark:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                        transition={{ type: "spring", bounce: 0.55, duration: 1.25 }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute inset-0 rounded-full animate-water opacity-0 group-hover:opacity-80 transition-all duration-300 scale-95 group-hover:scale-100 shadow-sm dark:shadow-[inset_0_0_15px_rgba(34,197,94,0.4)]" />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                );
              })}
            </motion.nav>

            {/* Dark / White Mode Toggle sliding in from far RIGHT (`floating right side se nekal ke le ana`) */}
            <motion.div
              initial={{ x: 140, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 90, damping: 15, delay: 0.3 }}
              className="pointer-events-auto"
            >
              <motion.button
                whileHover={{ scale: 1.12, rotate: 6, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="relative group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/85 dark:bg-zinc-900/85 backdrop-blur-3xl border border-neutral-200 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.12)] transition-all duration-300 cursor-pointer overflow-hidden"
                title="Toggle Dark / White Mode"
              >
                <span className="absolute inset-0 animate-water opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

                {mounted ? (
                  resolvedTheme === "dark" ? (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 flex items-center gap-2 text-cyan-300 font-bold tracking-wide"
                    >
                      <Moon className="w-4 h-4 fill-cyan-400/40 drop-shadow-[0_0_8px_cyan]" />
                      <span className="text-xs md:text-sm">Dark</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 flex items-center gap-2 text-amber-600 font-bold tracking-wide"
                    >
                      <Sun className="w-4 h-4 fill-amber-400/50 drop-shadow-[0_0_8px_orange]" />
                      <span className="text-xs md:text-sm">White</span>
                    </motion.div>
                  )
                ) : (
                  <div className="w-14 h-4 bg-muted/40 rounded animate-pulse" />
                )}
              </motion.button>
            </motion.div>
          </motion.div>
        ) : (
          /* UNIFIED CAPSULE MODE: On Scroll (`isScrolled === true`) -> All 3 items move into center and merge (`darmyan ki trf ayenge and aek box bnayega`) */
          <motion.div
            key="unified-capsule"
            initial={{ y: -30, scale: 0.9, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -30, scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="flex items-center justify-center pt-3 px-4 w-full"
          >
            <div className="pointer-events-auto flex items-center gap-2 md:gap-4 p-1.5 px-3 md:px-4 rounded-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-3xl border border-neutral-300 dark:border-white/15 shadow-[0_15px_45px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-500">
              {/* Merged Left Brand */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                <img src="/logo.png" alt="FKTECH Logo" className="h-6 w-auto object-contain" />
                <span className="font-black text-xs md:text-sm tracking-wider text-black dark:text-white">
                  FKTECH
                </span>
              </motion.div>

              {/* Merged Center Nav Buttons */}
              <div className="flex items-center gap-1 md:gap-1.5 border-x border-neutral-200 dark:border-white/10 px-2 md:px-3">
                {navItems.map((item) => {
                  const isActive = activeTab === item.name;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "relative px-3 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer group",
                        isActive
                          ? "text-black dark:text-white"
                          : "text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabUnified"
                          className="absolute inset-0 rounded-full animate-water border border-neutral-200 dark:border-white/15 bg-white dark:bg-white/10 shadow-sm dark:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                          transition={{ type: "spring", bounce: 0.55, duration: 1.25 }}
                        />
                      )}
                      {!isActive && (
                        <span className="absolute inset-0 rounded-full animate-water opacity-0 group-hover:opacity-80 transition-all duration-300 scale-95 group-hover:scale-100" />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Merged Right Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                title="Toggle Dark / White Mode"
              >
                {mounted ? (
                  resolvedTheme === "dark" ? (
                    <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-xs md:text-sm">
                      <Moon className="w-3.5 h-3.5 fill-cyan-400/40" />
                      <span>Dark</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-amber-600 font-bold text-xs md:text-sm">
                      <Sun className="w-3.5 h-3.5 fill-amber-400/50" />
                      <span>White</span>
                    </div>
                  )
                ) : (
                  <div className="w-10 h-3 bg-muted/40 rounded animate-pulse" />
                )}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
