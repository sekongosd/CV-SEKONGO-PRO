"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { User, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 relative bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--color-brand-magenta)] uppercase mb-4 glow-magenta inline-block px-4 py-1 rounded-full border border-[var(--color-brand-magenta)]/30">À Propos</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8 mt-4">
                Vision & <br />
                <span className="text-gradient-main">Exécution</span>.
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                {PORTFOLIO_DATA.personalInfo.bio}
              </p>
              
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[var(--color-brand-magenta)]/10 text-[var(--color-brand-magenta)] mt-1 glow-magenta">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Ambition Entrepreneuriale</h4>
                    <p className="text-sm text-gray-400 mt-1 font-light">Construire des projets à forte valeur ajoutée en Afrique.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] mt-1 glow-blue">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Curiosité Intellectuelle</h4>
                    <p className="text-sm text-gray-400 mt-1 font-light">Apprentissage continu en finance, data et stratégie.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[3rem] glass-card border border-white/5 bg-gradient-to-br from-[var(--color-brand-magenta)]/5 to-transparent p-8 relative overflow-hidden flex flex-col justify-center hover-glow group">
                <div className="absolute top-0 right-0 w-full h-full bg-[var(--color-brand-magenta)]/10 rounded-[3rem] blur-3xl -z-10 group-hover:bg-[var(--color-brand-magenta)]/20 transition-all duration-500" />
                <User className="w-16 h-16 text-[var(--color-brand-magenta)] mb-8 glow-magenta" />
                <h4 className="text-2xl font-bold text-white mb-4">Mon Profil</h4>
                <ul className="space-y-4 text-gray-300 font-light">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-magenta)] glow-magenta" /> Étudiant Licence 3 Finance Digitale</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-magenta)] glow-magenta" /> Analyste orienté data & finance</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-magenta)] glow-magenta" /> Entrepreneur en construction</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-magenta)] glow-magenta" /> Créateur de projets innovants</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
