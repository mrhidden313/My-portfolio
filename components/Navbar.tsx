"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const activeTab =
    navItems.find(
      (item) => item.href === pathname || (pathname === "/" && item.href === "/")
    )?.name ?? "Home";
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
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

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-700">
        
        {/* ============================================================ */}
        {/* 1. MOBILE NAVBAR BAR (< md screens) */}
        {/* ============================================================ */}
        <div className="flex md:hidden items-center justify-between px-4 py-3.5 w-full pointer-events-auto">
          {/* Mobile Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl border border-neutral-200 dark:border-white/10 shadow-lg"
          >
            <Image
              src="/logo.webp"
              alt="FKTECH Logo"
              width={80}
              height={28}
              priority
              className="h-6 w-auto object-contain"
            />
            <span className="font-black text-xs tracking-wider text-black dark:text-white">
              FKTECH
            </span>
          </Link>

          {/* Right Mobile Actions: Theme Toggle + 3-Line Hamburger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="w-10 h-10 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl border border-neutral-200 dark:border-white/10 flex items-center justify-center text-black dark:text-white shadow-md active:scale-95 transition-transform"
              aria-label="Toggle Theme"
            >
              {mounted && resolvedTheme === "dark" ? (
                <Moon className="w-4 h-4 text-[#22c55e] fill-[#22c55e]/30" />
              ) : (
                <Sun className="w-4 h-4 text-amber-500 fill-amber-500/30" />
              )}
            </button>

            {/* 3-Line Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-10 h-10 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl border border-neutral-200 dark:border-white/10 flex flex-col items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
              aria-label="Open Mobile Menu"
            >
              <span className="w-4 h-0.5 bg-black dark:bg-white rounded-full transition-all" />
              <span className="w-4 h-0.5 bg-[#22c55e] rounded-full transition-all" />
              <span className="w-4 h-0.5 bg-black dark:bg-white rounded-full transition-all" />
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. DESKTOP NAVBAR (>= md screens) */}
        {/* ============================================================ */}
        <div className="hidden md:block w-full">
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
                {/* Brand / Logo */}
                <motion.div
                  initial={{ x: -140, opacity: 0, scale: 0.8 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 90, damping: 15, delay: 0.1 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="pointer-events-auto flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 dark:bg-zinc-900/85 backdrop-blur-3xl border border-neutral-200 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.12)] cursor-pointer group"
                >
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src="/logo.webp"
                      alt="FKTECH Logo"
                      width={120}
                      height={40}
                      priority
                      className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="font-black text-base tracking-wider text-black dark:text-white group-hover:text-[#16a34a] dark:group-hover:text-[#22c55e] transition-colors">
                      FKTECH
                    </span>
                  </Link>
                </motion.div>

                {/* Liquid Glass Navbar */}
                <motion.nav
                  initial={{ y: -80, opacity: 0, scale: 0.85 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 90, damping: 15, delay: 0.2 }}
                  className="pointer-events-auto relative flex items-center gap-2 p-2 rounded-full bg-white/85 dark:bg-zinc-900/85 backdrop-blur-3xl border border-neutral-200 dark:border-white/12 shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.14)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#22c55e]/10 to-transparent animate-shimmer pointer-events-none" />

                  {navItems.map((item) => {
                    const isActive = activeTab === item.name;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "relative px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer group",
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

                {/* Dark / White Mode Toggle */}
                <motion.div
                  initial={{ x: 140, opacity: 0, scale: 0.8 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 90, damping: 15, delay: 0.3 }}
                  className="pointer-events-auto"
                >
                  <motion.button
                    whileHover={{ scale: 1.12, rotate: 6, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
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
                          className="relative z-10 flex items-center gap-1.5 text-[#22c55e] font-bold tracking-wide"
                        >
                          <Moon className="w-4 h-4 fill-[#22c55e]/40 drop-shadow-[0_0_8px_#22c55e]" />
                          <span className="text-sm">Dark</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="sun"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="relative z-10 flex items-center gap-1.5 text-amber-600 font-bold tracking-wide"
                        >
                          <Sun className="w-4 h-4 fill-amber-400/50 drop-shadow-[0_0_8px_orange]" />
                          <span className="text-sm">White</span>
                        </motion.div>
                      )
                    ) : (
                      <div className="w-14 h-4 bg-muted/40 rounded animate-pulse" />
                    )}
                  </motion.button>
                </motion.div>
              </motion.div>
            ) : (
              /* UNIFIED CAPSULE MODE: On Scroll (`isScrolled === true`) */
              <motion.div
                key="unified-capsule"
                initial={{ y: -30, scale: 0.9, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                exit={{ y: -30, scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="flex items-center justify-center pt-3 px-4 w-full"
              >
                <div className="pointer-events-auto flex items-center gap-4 p-1.5 px-4 rounded-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-3xl border border-neutral-300 dark:border-white/15 shadow-[0_15px_45px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-500">
                  {/* Merged Brand */}
                  <Link
                    href="/"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <Image src="/logo.webp" alt="FKTECH Logo" width={100} height={30} className="h-6 w-auto object-contain" />
                    <span className="font-black text-sm tracking-wider text-black dark:text-white">
                      FKTECH
                    </span>
                  </Link>

                  {/* Merged Nav Buttons */}
                  <div className="flex items-center gap-1.5 border-x border-neutral-200 dark:border-white/10 px-3">
                    {navItems.map((item) => {
                      const isActive = activeTab === item.name;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "relative px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer group",
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
                    onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                    title="Toggle Dark / White Mode"
                  >
                    {mounted ? (
                      resolvedTheme === "dark" ? (
                        <div className="flex items-center gap-1.5 text-[#22c55e] font-bold text-sm">
                          <Moon className="w-3.5 h-3.5 fill-[#22c55e]/40" />
                          <span>Dark</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-amber-600 font-bold text-sm">
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
        </div>
      </header>

      {/* ============================================================ */}
      {/* 3. MOBILE SLIDING DRAWER (Smooth ease-in/ease-out transition) */}
      {/* ============================================================ */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Slide-in Drawer from Right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1], // Smooth custom ease-out curve
              }}
              className="absolute top-0 right-0 bottom-0 w-[84%] max-w-[340px] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-3xl border-l border-neutral-200 dark:border-white/15 p-6 flex flex-col justify-between shadow-[-15px_0_50px_rgba(0,0,0,0.6)]"
            >
              {/* Drawer Top Header */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-neutral-200 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logo.webp"
                      alt="FKTECH Logo"
                      width={80}
                      height={28}
                      priority
                      className="h-6 w-auto object-contain"
                    />
                    <span className="font-black text-sm tracking-wider text-black dark:text-white">
                      FKTECH
                    </span>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-white/10 hover:bg-[#22c55e]/20 text-black dark:text-white transition-colors"
                    aria-label="Close Mobile Menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-3 mt-8">
                  {navItems.map((item, index) => {
                    const isActive = activeTab === item.name;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.06, duration: 0.35 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-extrabold transition-all duration-300",
                            isActive
                              ? "bg-[#22c55e]/15 text-[#16a34a] dark:text-[#22c55e] border border-[#22c55e]/30 shadow-sm"
                              : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/5 hover:text-black dark:hover:text-white"
                          )}
                        >
                          <span>{item.name}</span>
                          {isActive ? (
                            <span className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
                          ) : (
                            <ArrowRight className="w-4 h-4 text-neutral-400 opacity-40" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom Footer */}
              <div className="pt-6 border-t border-neutral-200 dark:border-white/10 flex flex-col gap-4">
                {/* Theme Mode Selector inside Drawer */}
                <div className="flex items-center justify-between px-2">
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Appearance</span>
                  <button
                    onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-white/10 text-xs font-bold text-black dark:text-white"
                  >
                    {resolvedTheme === "dark" ? (
                      <>
                        <Moon className="w-3.5 h-3.5 text-[#22c55e] fill-[#22c55e]" />
                        <span>Dark Mode</span>
                      </>
                    ) : (
                      <>
                        <Sun className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>Light Mode</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Direct Action Button */}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#16a34a] to-[#22c55e] text-black font-black text-center text-sm shadow-[0_4px_25px_rgba(34,197,94,0.4)] flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
                >
                  <span>Let&apos;s Build Together</span>
                  <ArrowRight className="w-4 h-4 font-black" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
