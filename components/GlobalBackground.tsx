"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { usePathname } from "next/navigation";

const BG_CODE_1 = `import { CloudManager } from '@saas/core';
import { Database } from '@saas/db';
const manager = new CloudManager();

async function initializeNodes() {
  const nodes = await manager.fetchNodes();

  for (const node of nodes) {
    await node.sync();
  }

  console.log("All nodes synchronized.");
  manager.setStatus("ACTIVE");

  manager.on("error", (err) => {
    Database.log(err);
  });
}

class LoadBalancer {
  private queue: Request[] = [];
  private active: boolean = false;

  public assignTask(req: Request) {
    this.queue.push(req);

    if (!this.active) {
      this.processQueue();
    }
  }

  private async processQueue() {
    this.active = true;

    while (this.queue.length > 0) {
      const task = this.queue.shift();
      await this.execute(task);
    }

    this.active = false;
    this.optimizeMemory();
  }
}`;

const BG_CODE_2 = `export class SecurityGateway {
  private readonly firewall: Firewall;
  private readonly encryption: AES256;

  constructor(token: string) {
    this.firewall = new Firewall(token);

    this.encryption = new AES256();
    this.startWatchdog();
  }

  public async verifyRequest(req: Request) {
    const isValid = await this.firewall.check(req);

    if (!isValid) {
      throw new SecurityError("Blocked");
    }

    return this.encryption.decrypt(req.body);
  }

  private startWatchdog() {
    setInterval(() => {
      
      this.firewall.updateRules();
      this.encryption.rotateKeys();
      
    }, 1000 * 60 * 60);

    console.log("Watchdog active");
  }

  public async blockIP(ip: string) {
    await this.firewall.addToBlacklist(ip);

    this.firewall.broadcastUpdate();
  }
}`;

const BG_CODE_3 = `interface SystemConfig {
  maxWorkers: number;
  timeoutMs: number;
}

const config: SystemConfig = {
  maxWorkers: navigator.hardwareConcurrency || 4,

  timeoutMs: 30000
};

function spawnWorkers(amount: number) {
  const pool = new WorkerPool();

  for (let i = 0; i < amount; i++) {
    pool.spawn(new Worker('./job.js'));
  }

  return pool;
}

pool.on('message', (msg) => {
  if (msg.type === 'SUCCESS') {
    
    updateMetrics(msg.payload);
    releaseWorker(msg.workerId);

  } else {
    handleFailure(msg.error);
  }
});

async function mainLoop() {
  while (system.isAlive) {

    await system.fetchNextBatch();
    await system.processBatch();

    await new Promise(r => setTimeout(r, 100));
  }
}`;

export function GlobalBackground({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  // Parallax Scroll Y
  const codeScrollY = useTransform(scrollY, (y) => -y * 1.0);

  // Flashlight Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 70, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 70, damping: 20 });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll to Top on Mount & Route Change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function handleMouseMove(e: React.MouseEvent) {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }

  const maskImage = useMotionTemplate`radial-gradient(450px circle at ${smoothMouseX}px ${smoothMouseY}px, black 0%, transparent 100%)`;

  return (
    <div onMouseMove={handleMouseMove} className="w-full relative min-h-screen">
      {mounted && (
        <motion.div 
          className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-[0.25] text-[#22c55e] font-mono text-xs md:text-sm leading-relaxed"
          style={{
            WebkitMaskImage: maskImage,
            maskImage: maskImage
          }}
        >
          <motion.div style={{ y: codeScrollY }} className="w-full flex flex-col gap-12 pt-8 pb-32">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex justify-between px-4 md:px-12 w-full">
                <pre className="hidden md:block w-1/3 opacity-100">{BG_CODE_1}</pre>
                <pre className="w-full md:w-1/3 opacity-100">{BG_CODE_2}</pre>
                <pre className="hidden lg:block w-1/3 opacity-100">{BG_CODE_3}</pre>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
      
      {/* Page Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
