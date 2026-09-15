"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring for outer glowing ring
  const ringSpringConfig = { damping: 22, stiffness: 200, mass: 0.4 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  // Tight spring for center precise dot
  const dotSpringConfig = { damping: 35, stiffness: 700, mass: 0.1 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    setIsMounted(true);

    // Detect mobile screen width / touch / coarse pointer devices where custom cursor isn't appropriate
    const isMobileDevice =
      window.innerWidth < 768 ||
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window;

    if (isMobileDevice) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Event delegation to detect interactive elements (links, buttons, inputs, cards)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const interactiveEl = target.closest(
        'a, button, input, textarea, select, [role="button"], [data-interactive], .cursor-pointer'
      );
      if (interactiveEl) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isMounted || isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Glowing Ring */}
      <motion.div
        className="absolute top-0 left-0 rounded-full border border-cyan-500/60 dark:border-cyan-400/70"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 36,
          height: 36,
          boxShadow: isHovering
            ? "0 0 20px rgba(6, 182, 212, 0.6), inset 0 0 10px rgba(6, 182, 212, 0.3)"
            : "0 0 14px rgba(6, 182, 212, 0.35)",
          backgroundColor: isHovering ? "rgba(6, 182, 212, 0.15)" : "transparent",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.4 : isHovering ? 0.5 : 1,
        }}
        transition={{
          opacity: { duration: 0.3, ease: "easeInOut" },
          scale: { duration: 0.2, ease: "easeOut" },
        }}
      />

      {/* Inner Precise Dot */}
      <motion.div
        className="absolute top-0 left-0 rounded-full bg-cyan-400 dark:bg-cyan-300"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 6 : 8,
          height: isHovering ? 6 : 8,
          boxShadow: "0 0 8px rgba(34, 211, 238, 0.9)",
        }}
        animate={{
          opacity: isVisible ? (isHovering ? 0.6 : 1) : 0,
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { duration: 0.15 },
        }}
      />
    </div>
  );
}
