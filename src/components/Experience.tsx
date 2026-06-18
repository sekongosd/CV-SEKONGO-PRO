"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { Terminal, Database } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[var(--color-neon-blue)]/10 border border-[var(--color-neon-blue)]/30 mb-4">
              <Database className="w-3 h-3 text-[var(--color-neon-blue)] animate-pulse" />
              <h2 className="text-[10px] font-mono tracking-widest text-[var(--color-neon-blue)] uppercase">COUCHE_MÉMOIRE_DONNÉES</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-space font-bold text-white tracking-tight mt-2">
              Historique <span className="text-gradient-neural">Opérationnel</span>.
            </h3>
          </div>

          <div className="relative border-l-2 border-dashed border-[var(--color-neon-blue)]/20 ml-4 md:ml-0 md:border-none">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-[var(--color-neon-blue)]/20 -translate-x-1/2" />
            
            {PORTFOLIO_DATA.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 pl-8 md:pl-0 md:flex items-center justify-between w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="hidden md:block w-5/12" />
                
                {/* Timeline Node */}
                <div className="absolute left-[-6px] md:left-1/2 w-3 h-3 rounded-none bg-[var(--color-neon-blue)] md:-translate-x-1.5 mt-2 md:mt-0 glow-blue z-10 animate-pulse rotate-45" />
                
                <div className="w-full md:w-5/12">
                  <div className="terminal-glass p-8 rounded-lg hover:border-[var(--color-cyan-energy)]/50 transition-all duration-300 group hover-magnetic">
                    <div className="flex justify-between items-start mb-6">
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-sm bg-[var(--color-cyan-energy)]/10 text-[var(--color-cyan-energy)] font-mono text-[10px] tracking-widest border border-[var(--color-cyan-energy)]/20">
                        <Terminal className="w-3 h-3" /> T:{exp.period}
                      </span>
                      <span className="font-mono text-[10px] text-gray-600">ID: {exp.id}</span>
                    </div>
                    
                    <h3 className="text-xl font-space font-bold text-white mb-1 group-hover:text-[var(--color-cyan-energy)] transition-colors">
                      {exp.title}
                    </h3>
                    <h4 className="text-xs font-mono tracking-widest text-[var(--color-neural-violet)] mb-6 uppercase">
                      {exp.company}
                    </h4>
                    <p className="text-gray-400 leading-relaxed font-sans font-light text-sm">
                      {exp.description}
                    </p>
                    
                    {/* Decorative Circuit Lines */}
                    <div className="mt-6 flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                      <div className="h-px bg-[var(--color-cyan-energy)]/50 flex-1" />
                      <div className="w-1 h-1 bg-[var(--color-cyan-energy)] rotate-45" />
                      <div className="h-px bg-[var(--color-cyan-energy)]/50 w-8" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
