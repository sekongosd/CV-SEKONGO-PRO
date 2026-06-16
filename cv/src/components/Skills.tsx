"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { Network } from "lucide-react";

const NeuralNode = ({ title, skills, index, accentColor }: { title: string, skills: any[], index: number, accentColor: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="relative group p-6 rounded-2xl terminal-glass border border-white/5 hover:border-white/20 hover-magnetic z-10"
  >
    {/* Node Core */}
    <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full flex items-center justify-center bg-[var(--color-space-black)] border border-white/10 z-20">
      <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }} />
    </div>

    <h3 className="text-sm font-space font-bold text-white mb-4 tracking-widest uppercase" style={{ color: accentColor }}>
      {title}
    </h3>
    
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <motion.div 
          key={skill.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 + (i * 0.1) }}
          className="px-2 py-1 rounded bg-[var(--color-space-black)]/50 border border-white/10 flex items-center gap-2 hover:bg-white/5 transition-colors cursor-crosshair"
        >
          <span className="w-1 h-1 rounded-full" style={{ backgroundColor: accentColor }} />
          <span className="text-[10px] font-mono text-gray-300 tracking-wider">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto relative"
        >
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[var(--color-neural-violet)]/10 border border-[var(--color-neural-violet)]/30 mb-4 glow-violet">
              <Network className="w-3 h-3 text-[var(--color-neural-violet)] animate-spin-slow" />
              <h2 className="text-[10px] font-mono tracking-widest text-[var(--color-neural-violet)] uppercase">CLUSTER_CARTE_NEURONALE</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-space font-bold text-white tracking-tight mt-2">
              Cartographie <span className="text-gradient-violet">Cognitive</span>.
            </h3>
          </div>

          <div className="relative">
            {/* Background SVG connections simulated with CSS borders for a "Network" look */}
            <div className="absolute inset-0 border border-[var(--color-neural-violet)]/10 rounded-3xl -z-10 bg-gradient-to-br from-[var(--color-neural-violet)]/5 to-transparent" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-8">
              <NeuralNode title="Finance & Analyse" skills={PORTFOLIO_DATA.skills.finance} index={0} accentColor="var(--color-neon-blue)" />
              <NeuralNode title="Business & Stratégie" skills={PORTFOLIO_DATA.skills.business} index={1} accentColor="var(--color-cyan-energy)" />
              <NeuralNode title="Outils Digitaux" skills={PORTFOLIO_DATA.skills.tech} index={2} accentColor="var(--color-neural-violet)" />
              <NeuralNode title="Info & Support" skills={PORTFOLIO_DATA.skills.it} index={3} accentColor="var(--color-plasma-white)" />
              <NeuralNode title="Création & Com" skills={PORTFOLIO_DATA.skills.creative} index={4} accentColor="var(--color-neon-blue)" />
              <NeuralNode 
                title="Langues" 
                skills={PORTFOLIO_DATA.languages.map(l => ({ name: `${l.flag} ${l.name} (${l.level})` }))} 
                index={5} 
                accentColor="var(--color-cyan-energy)" 
              />
              <NeuralNode 
                title="Centres d'intérêt" 
                skills={PORTFOLIO_DATA.interests.map(i => ({ name: i }))} 
                index={6} 
                accentColor="var(--color-neural-violet)" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
