"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS credentials
    const serviceID = "service_b6pe05t";
    const templateID = "template_87t4l8c";
    const publicKey = "N9nRq4DxLG8qQmy0t";

    if (!formRef.current) return;

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
          setIsSubmitting(false);
          setIsSuccess(true);
          formRef.current?.reset();
          
          setTimeout(() => setIsSuccess(false), 5000);
      }, (error) => {
          setIsSubmitting(false);
          alert("Failed to send message: " + error.text);
      });
  };

  return (
    <main className="min-h-screen bg-transparent text-black dark:text-white relative selection:bg-[#22c55e]/30 pt-24 md:pt-32 pb-24 font-sans overflow-hidden">
      
      {/* ── BACKGROUND GLOWS ── */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-4 md:px-10">
        
        {/* ── HEADER ── */}
        <div className="mb-16 md:mb-24 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-[#22c55e] uppercase">
                Let&apos;s Talk
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-black dark:text-white leading-tight mb-6">
              Get in <span className="text-[#22c55e] drop-shadow-[0_0_25px_rgba(34,197,94,0.4)]">Touch.</span>
            </h1>
            
            <p className="text-neutral-400 text-lg font-light leading-relaxed">
              Have a project in mind, need a full-stack developer, or just want to chat about tech? Drop a message below and I&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* ── CONTACT INFO (Left Side) ── */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {[
              { icon: <Mail className="w-6 h-6" />, title: "Email", info: "mrfkdeveloper@gmail.com", link: "mailto:mrfkdeveloper@gmail.com" },
              { icon: <Phone className="w-6 h-6" />, title: "WhatsApp", info: "+92 329 9736086", link: "https://wa.me/923299736086" },
              { icon: <MapPin className="w-6 h-6" />, title: "Location", info: "Remote / Global", link: "#" },
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.link}
                className="group flex items-center gap-6 p-6 rounded-2xl bg-white/[0.02] border border-black/ dark:border-white/ hover:border-[#22c55e]/30 hover:bg-[#22c55e]/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e] group-hover:scale-110 group-hover:bg-[#22c55e] group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-1">{item.title}</h3>
                  <p className="text-lg font-medium text-black dark:text-white group-hover:text-[#22c55e] transition-colors">{item.info}</p>
                </div>
              </a>
            ))}

            <div className="mt-4 p-8 rounded-2xl bg-gradient-to-br from-[#22c55e]/10 via-zinc-900/40 to-transparent border border-[#22c55e]/20 relative overflow-hidden group hover:border-[#22c55e]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 p-4 opacity-10 text-[#22c55e] group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"
              >
                <Send className="w-24 h-24 rotate-12" />
              </motion.div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2 relative z-10 group-hover:text-[#22c55e] transition-colors">Freelance Status</h3>
              <p className="text-neutral-400 font-light relative z-10 mb-6">Currently accepting new projects and remote opportunities.</p>
              <Link href="/#projects" className="inline-flex items-center gap-2 text-[#22c55e] font-bold text-sm uppercase tracking-wider hover:gap-4 transition-all relative z-10">
                View My Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* ── CONTACT FORM (Right Side) ── */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 lg:pl-10"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-black/ dark:border-white/ backdrop-blur-xl shadow-2xl hover:border-white/20 transition-all duration-500 hover:bg-white/[0.03]">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-8 flex items-center gap-3">
                Send a Message <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} className="inline-block">👋</motion.span>
              </h2>
              
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2 group">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest pl-1 group-focus-within:text-[#22c55e] transition-colors">Your Name</label>
                    <input 
                      type="text" 
                      name="user_name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-black/40 border border-black/ dark:border-white/ rounded-xl px-5 py-4 text-black dark:text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#22c55e]/50 focus:ring-1 focus:ring-[#22c55e]/50 transition-all hover:bg-black/60 hover:border-white/20"
                    />
                  </div>
                  <div className="flex flex-col gap-2 group">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest pl-1 group-focus-within:text-[#22c55e] transition-colors">Your Email</label>
                    <input 
                      type="email" 
                      name="user_email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-black/40 border border-black/ dark:border-white/ rounded-xl px-5 py-4 text-black dark:text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#22c55e]/50 focus:ring-1 focus:ring-[#22c55e]/50 transition-all hover:bg-black/60 hover:border-white/20"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 group">
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest pl-1 group-focus-within:text-[#22c55e] transition-colors">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    placeholder="Project Inquiry / Job Offer"
                    className="w-full bg-black/40 border border-black/ dark:border-white/ rounded-xl px-5 py-4 text-black dark:text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#22c55e]/50 focus:ring-1 focus:ring-[#22c55e]/50 transition-all hover:bg-black/60 hover:border-white/20"
                  />
                </div>

                <div className="flex flex-col gap-2 group">
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest pl-1 group-focus-within:text-[#22c55e] transition-colors">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full bg-black/40 border border-black/ dark:border-white/ rounded-xl px-5 py-4 text-black dark:text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#22c55e]/50 focus:ring-1 focus:ring-[#22c55e]/50 transition-all resize-none hover:bg-black/60 hover:border-white/20"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="mt-4 w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#22c55e] hover:bg-[#1eb355] text-black font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" /> Sending...
                    </span>
                  ) : isSuccess ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" /> Message Sent
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  )}
                </button>
                
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
