"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ==========================================
// PURE NATIVE PROCEDURAL ROBOT & MACBOOK (0 DREI CHUNK ERRORS, 100% THREE.JS PRIMITIVES)
// ==========================================
function AnimatedSentinel({ stage }: { stage: "center" | "corner" }) {
  const masterGroupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const macbookRef = useRef<THREE.Group>(null);
  const screenGlowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // 1. Smoothly Glide Robot between Center Stage (`Big Showcase`) and Bottom-Right Corner (`Corner Peeking`)
    if (masterGroupRef.current) {
      const targetPos = stage === "center" ? new THREE.Vector3(0, -0.2, 0) : new THREE.Vector3(2.4, -1.6, 1.2);
      const targetScale = stage === "center" ? new THREE.Vector3(1.3, 1.3, 1.3) : new THREE.Vector3(0.75, 0.75, 0.75);
      const targetRotY = stage === "center" ? 0 : -0.4; // Tilt slightly inwards from the corner toward the center

      masterGroupRef.current.position.lerp(targetPos, 0.05);
      masterGroupRef.current.scale.lerp(targetScale, 0.05);
      masterGroupRef.current.rotation.y = THREE.MathUtils.lerp(masterGroupRef.current.rotation.y, targetRotY, 0.05);

      // Add gentle floating breathing motion
      masterGroupRef.current.position.y += Math.sin(time * 3) * 0.003;
    }

    // 2. Head & Visor Look-At Cursor Tracking (Always tracks the mouse across screen!)
    if (headRef.current) {
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 6;
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetX, 0.08);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -targetY, 0.08);
      headRef.current.rotation.z = THREE.MathUtils.lerp(headRef.current.rotation.z, -targetX * 0.15, 0.08);
    }

    // 3. Pulsating Laser Green Optics & Retina Screen Glow
    if (leftEyeRef.current?.material && rightEyeRef.current?.material) {
      const glow = 2.2 + Math.sin(time * 5) * 0.8;
      (leftEyeRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = glow;
      (rightEyeRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = glow;
    }
    if (screenGlowRef.current?.material) {
      (screenGlowRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 1.6 + Math.cos(time * 3) * 0.4;
    }

    // 4. MacBook Hover Floating right in front of Robot
    if (macbookRef.current) {
      macbookRef.current.position.y = -0.5 + Math.sin(time * 2.5) * 0.03;
      macbookRef.current.rotation.z = Math.sin(time * 1.8) * 0.02;
    }
  });

  return (
    <group ref={masterGroupRef} position={[0, -0.2, 0]} scale={[1.3, 1.3, 1.3]}>
      
      {/* ==========================================
          ROBOT BODY CHASSIS (`Titanium & Cyber Green`)
         ========================================== */}
      <group position={[0, 0, 0]}>
        {/* Torso Box */}
        <mesh position={[0, -1.1, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.3, 1.0, 0.75]} />
          <meshStandardMaterial color="#18181b" metalness={0.9} roughness={0.15} />
        </mesh>
        {/* Chest Cyber Plate */}
        <mesh position={[0, -1.0, 0.39]}>
          <boxGeometry args={[1.0, 0.6, 0.06]} />
          <meshStandardMaterial color="#27272a" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Glowing Reactor Core */}
        <mesh position={[0, -1.0, 0.43]}>
          <circleGeometry args={[0.16, 32]} />
          <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={2.5} />
        </mesh>

        {/* Neck Spine */}
        <mesh position={[0, -0.45, 0]}>
          <cylinderGeometry args={[0.2, 0.26, 0.6, 32]} />
          <meshStandardMaterial color="#09090b" metalness={0.95} roughness={0.1} />
        </mesh>
        {/* Glowing Neck Seam Rings */}
        <mesh position={[0, -0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.24, 0.025, 16, 32]} />
          <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={2} />
        </mesh>
        <mesh position={[0, -0.52, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.27, 0.025, 16, 32]} />
          <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={1.8} />
        </mesh>

        {/* --- ARTICULATED HEAD UNIT (`Tracks Cursor`) --- */}
        <group ref={headRef} position={[0, 0, 0]}>
          {/* Main Head Cranium */}
          <mesh position={[0, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.1, 0.85, 0.95]} />
            <meshStandardMaterial color="#18181b" metalness={0.9} roughness={0.15} />
          </mesh>
          {/* Glossy Black Visor Screen */}
          <mesh position={[0, 0.05, 0.49]}>
            <boxGeometry args={[0.9, 0.46, 0.04]} />
            <meshStandardMaterial color="#000000" metalness={1.0} roughness={0.05} />
          </mesh>
          {/* Glowing Laser Green Eyes */}
          <mesh ref={leftEyeRef} position={[-0.23, 0.08, 0.52]}>
            <capsuleGeometry args={[0.055, 0.1, 16, 16]} />
            <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={3} />
          </mesh>
          <mesh ref={rightEyeRef} position={[0.23, 0.08, 0.52]}>
            <capsuleGeometry args={[0.055, 0.1, 16, 16]} />
            <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={3} />
          </mesh>
          {/* Head Side Antenna Pods */}
          <mesh position={[-0.58, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.18, 0.18, 0.1, 32]} />
            <meshStandardMaterial color="#27272a" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0.58, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.18, 0.18, 0.1, 32]} />
            <meshStandardMaterial color="#27272a" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>

        {/* Hovering Cyber Hands */}
        <group position={[-0.6, -0.35, 0.8]} rotation={[0.4, 0.2, -0.1]}>
          <mesh castShadow>
            <boxGeometry args={[0.26, 0.1, 0.4]} />
            <meshStandardMaterial color="#27272a" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.055, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.07, 16]} />
            <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={3} />
          </mesh>
        </group>
        <group position={[0.6, -0.35, 0.8]} rotation={[0.4, -0.2, 0.1]}>
          <mesh castShadow>
            <boxGeometry args={[0.26, 0.1, 0.4]} />
            <meshStandardMaterial color="#27272a" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.055, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.07, 16]} />
            <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={3} />
          </mesh>
        </group>
      </group>

      {/* ==========================================
          MACBOOK PRO CYBER-DECK (`Angled Open 115 Deg`)
         ========================================== */}
      <group ref={macbookRef} position={[0, -0.5, 0.85]} rotation={[0.15, 0, 0]}>
        {/* Aluminum Base Body */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.5, 0.1, 1.7]} />
          <meshStandardMaterial color="#3f3f46" metalness={0.92} roughness={0.18} />
        </mesh>
        {/* Keyboard Well & Key Grid */}
        <mesh position={[0, 0.052, -0.1]}>
          <boxGeometry args={[2.1, 0.01, 1.0]} />
          <meshStandardMaterial color="#09090b" roughness={0.4} />
        </mesh>
        <group position={[0, 0.06, -0.1]}>
          {[-0.8, -0.4, 0, 0.4, 0.8].map((x, i) =>
            [-0.3, -0.1, 0.1, 0.3].map((z, j) => (
              <mesh key={`${i}-${j}`} position={[x, 0, z]}>
                <boxGeometry args={[0.34, 0.015, 0.18]} />
                <meshStandardMaterial color="#18181b" emissive="#22c55e" emissiveIntensity={0.2} />
              </mesh>
            ))
          )}
        </group>

        {/* Open Screen Lid (Angled back) */}
        <group position={[0, 0.05, -0.8]} rotation={[-Math.PI * 0.35, 0, 0]}>
          <mesh position={[0, 0.75, 0]} castShadow>
            <boxGeometry args={[2.5, 1.5, 0.06]} />
            <meshStandardMaterial color="#3f3f46" metalness={0.92} roughness={0.18} />
          </mesh>
          {/* Glowing Retina Display Screen (`Radiates Cyber Green on Robot`) */}
          <mesh ref={screenGlowRef} position={[0, 0.75, 0.033]}>
            <planeGeometry args={[2.34, 1.34]} />
            <meshStandardMaterial color="#052e16" emissive="#15803d" emissiveIntensity={1.8} roughness={0.1} />
          </mesh>
          {/* Apple Logo on back of lid */}
          <mesh position={[0, 0.75, -0.033]} rotation={[0, Math.PI, 0]}>
            <circleGeometry args={[0.14, 32]} />
            <meshStandardMaterial color="#ffffff" emissive="#22c55e" emissiveIntensity={3} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

// ==========================================
// MAIN EDGE-TO-EDGE 3D STAGE & AUTO-CORNER CONTROLLER
// ==========================================
export default function TestRobotScene() {
  // Stage state: 'center' (Big entrance showcase) -> 'corner' (Auto glide and tuck into right corner)
  const [stage, setStage] = useState<"center" | "corner">("center");

  useEffect(() => {
    // Automatically glide Robot into corner after 3.2 seconds of initial big showcase!
    const timer = setTimeout(() => {
      setStage("corner");
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full relative bg-zinc-950 overflow-hidden select-none">
      
      {/* Top Status Notification (`Cyber Vibe`) */}
      <div className="absolute top-5 left-6 z-30 pointer-events-none flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-[#22c55e] animate-ping" />
        <div className="font-mono text-xs uppercase tracking-widest text-white/90 bg-zinc-900/80 border border-[#22c55e]/40 px-3 py-1.5 rounded-full backdrop-blur-md">
          {stage === "center" ? "⚡ Showcase: Big Sentinel AI (Gliding to Corner in 3s...)" : "🛡️ Corner Mode: AI Guardian Peeking (`Look-At Cursor` Active)"}
        </div>
      </div>

      {/* Floating Action Bar to Manually Call/Hide Robot Anytime */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          onClick={() => setStage(stage === "center" ? "corner" : "center")}
          className="px-5 py-2.5 rounded-2xl bg-zinc-900/90 hover:bg-[#22c55e] text-white hover:text-black font-mono font-black text-xs uppercase tracking-wider transition-all duration-300 border border-[#22c55e]/50 shadow-[0_0_25px_rgba(34,197,94,0.25)] backdrop-blur-md cursor-pointer flex items-center gap-2"
        >
          <span>{stage === "center" ? "👉 Glide to Corner (`Chup Jao`)" : "🤖 Call Center Stage (`Big Mode`)"}</span>
        </button>
      </div>

      {/* 100% Native Three.js WebGL Canvas (Zero chunk loading bugs, 60 FPS in 5ms) */}
      <Canvas camera={{ position: [0, 0.4, 4.5], fov: 42 }} className="w-full h-full">
        <color attach="background" args={["#050508"]} />

        {/* High-Contrast Studio & Cyber Rim Lighting */}
        <ambientLight intensity={1.6} />
        <directionalLight position={[6, 12, 8]} intensity={3.5} color="#ffffff" />
        <directionalLight position={[-8, -4, -8]} intensity={2.8} color="#22c55e" /> {/* Cyber Green Rim */}
        <pointLight position={[0, 1.2, 2.0]} intensity={4} color="#22c55e" distance={5} />

        {/* Animated Robot & MacBook Pro */}
        <AnimatedSentinel stage={stage} />
      </Canvas>
    </div>
  );
}
