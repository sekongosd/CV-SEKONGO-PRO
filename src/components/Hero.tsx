"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { ChevronRight, Terminal, Activity, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => (prev < 99 ? prev + 1 : 99));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-6 relative z-10"
        >
          {/* Boot sequence tag */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-md terminal-glass w-fit border border-[var(--color-neon-blue)]/50"
          >
            <div className="w-2 h-2 rounded-full bg-[var(--color-cyan-energy)] animate-pulse glow-cyan" />
            <span className="text-xs md:text-sm font-mono text-[var(--color-cyan-energy)] tracking-widest uppercase">
              SÉQ.D'AMORÇAGE: {counter}% TERMINÉ
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-space font-extrabold tracking-tighter leading-tight text-white drop-shadow-2xl hover-glitch transition-all cursor-crosshair">
            <span className="block text-gradient-neural">{PORTFOLIO_DATA.personalInfo.name}</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-mono text-[var(--color-plasma-white)] font-bold opacity-90 border-l-4 border-[var(--color-neon-blue)] pl-4">
            {'>'} {PORTFOLIO_DATA.personalInfo.role}
          </h2>
          
          <p className="text-lg text-gray-400 max-w-lg leading-relaxed font-sans font-light">
            {PORTFOLIO_DATA.personalInfo.tagline}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-6">
            <a
              href="#projects"
              className="group relative px-6 md:px-8 py-4 bg-[var(--color-neon-blue)]/10 text-[var(--color-cyan-energy)] font-mono font-bold rounded-md border border-[var(--color-cyan-energy)]/50 hover:bg-[var(--color-neon-blue)]/20 transition-all duration-300 overflow-hidden flex items-center justify-center gap-2 glow-blue hover-magnetic uppercase text-xs md:text-sm tracking-widest w-full md:w-auto"
            >
              <Terminal className="w-4 h-4" />
              Exéc.Écosystème()
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
              className="px-6 md:px-8 py-4 font-mono font-bold rounded-md text-[var(--color-neural-violet)] border border-[var(--color-neural-violet)]/50 hover:bg-[var(--color-neural-violet)]/10 transition-all duration-300 glow-violet hover-magnetic uppercase text-xs md:text-sm tracking-widest w-full md:w-auto"
            >
              Init.Protocole_Contact
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8 pt-10 font-mono text-gray-500">
            <div className="flex items-center gap-3 group">
              <Activity className="w-5 h-5 text-[var(--color-cyan-energy)] group-hover:animate-pulse" />
              <span className="text-xs uppercase tracking-wider group-hover:text-[var(--color-cyan-energy)] transition-colors">MODULE_DONNÉES_FINANCE</span>
            </div>
            <div className="flex items-center gap-3 group">
              <Cpu className="w-5 h-5 text-[var(--color-neural-violet)] group-hover:animate-spin" />
              <span className="text-xs uppercase tracking-wider group-hover:text-[var(--color-neural-violet)] transition-colors">NŒUD_STRATÉGIE_TECH</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative flex items-center justify-center w-full"
        >
          {/* Holographic Data Sphere & Profile Picture */}
          <div className="aspect-square w-full max-w-[280px] md:max-w-md rounded-full terminal-glass border border-[var(--color-neon-blue)]/20 relative z-10 shadow-[0_0_50px_rgba(0,245,255,0.1)] flex items-center justify-center group overflow-hidden mt-8 md:mt-0">
            
            <div className="absolute inset-2 rounded-full border border-dashed border-[var(--color-cyan-energy)]/40 animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-6 rounded-full border border-[var(--color-neural-violet)]/30 animate-[spin_20s_linear_infinite_reverse]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-cyan-energy)]/10 to-transparent rounded-full animate-pulse" />
            
            {/* Profile Picture replacing pure text */}
            <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden border-2 border-[var(--color-neon-blue)]/50 z-20 bg-[#05060A] p-1 md:p-2">
              <img src="/profile.png" alt="Sekongo Profile" className="w-full h-full object-cover object-top rounded-full filter brightness-110 contrast-125 hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05060A]/80 via-transparent to-transparent pointer-events-none rounded-full" />
              
              <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center justify-center font-mono gap-1 text-center">
                <div className="text-[var(--color-cyan-energy)] text-[10px] tracking-widest opacity-90 drop-shadow-md">CŒUR_SYSTÈME_EN_LIGNE</div>
                <div className="text-xl font-bold text-white tracking-tighter tabular-nums drop-shadow-md">
                  100.00%
                </div>
              </div>
            </div>
          </div>
          
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-500 font-mono"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-cyan-energy)]">Défiler_Bas</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-cyan-energy)] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
