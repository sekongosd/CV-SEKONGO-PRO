"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { ArrowUpRight, Box } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-20 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[var(--color-brand-magenta)]/10 border border-[var(--color-brand-magenta)]/30 mb-4 glow-magenta">
              <Box className="w-3 h-3 text-[var(--color-brand-magenta)]" />
              <h2 className="text-[10px] font-mono tracking-widest text-[var(--color-brand-magenta)] uppercase">ÉCOSYSTÈME_SYSTÈME</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-space font-bold text-white tracking-tight mt-2">
              Projets & <span className="text-gradient-main">Holdings</span>.
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, rotateX: 10, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 50 }}
                className="group relative flex flex-col h-full terminal-glass rounded-xl overflow-hidden hover:border-[var(--color-brand-magenta)]/50 transition-all duration-500 hover-glow hover-magnetic perspective-1000"
              >
                {/* Holographic Header */}
                <div className="h-48 w-full bg-gradient-to-br from-white/[0.02] to-white/[0.05] relative overflow-hidden p-6 flex flex-col justify-between border-b border-white/5">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-magenta)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--color-brand-magenta)]/30 transition-colors duration-500" />
                  
                  {/* Grid Lines for Tech feel */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                  <div className="flex justify-between items-start z-10">
                    <span className="px-2 py-1 text-[10px] font-mono tracking-widest bg-[var(--color-brand-magenta)]/10 text-[var(--color-brand-magenta)] rounded-sm border border-[var(--color-brand-magenta)]/30">
                      {project.type}
                    </span>
                    <a href={project.link} className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[var(--color-brand-magenta)] group-hover:border-[var(--color-brand-magenta)]/50 transition-all hover-glitch">
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <h3 className="text-2xl font-space font-bold text-white z-10 mt-auto drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative">
                  <p className="text-gray-400 leading-relaxed mb-8 flex-grow font-sans font-light text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-[10px] font-mono tracking-wider border border-[var(--color-brand-magenta)]/20 rounded text-[var(--color-brand-magenta)] bg-[var(--color-brand-magenta)]/5">
                        {tag}
                      </span>
                    ))}
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
