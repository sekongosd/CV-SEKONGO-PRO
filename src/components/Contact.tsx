"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { Mail, ArrowRight, X, TerminalSquare } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-contact', handleOpen);
    return () => window.removeEventListener('open-contact', handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#05060A]/90 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto terminal-glass rounded-xl border border-[var(--color-cyan-energy)]/30 shadow-[0_0_50px_rgba(0,245,255,0.1)] flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-[var(--color-cyan-energy)]/20 bg-[var(--color-space-black)]/50">
              <div className="flex items-center gap-2 text-[var(--color-cyan-energy)] font-mono text-sm">
                <TerminalSquare className="w-4 h-4" />
                <span>PROTOCOLE_CONTACT_SÉCURISÉ.exe</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-[var(--color-cyan-energy)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-10 grid lg:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center">
                <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-[var(--color-neon-blue)] uppercase mb-4 glow-text-blue">
                  SYSTÈME.COMMUNICATION
                </h2>
                <h3 className="text-3xl md:text-4xl font-space font-bold text-white tracking-tight mb-6">
                  Initialiser la <br />
                  <span className="text-gradient-neural">Connexion</span>.
                </h3>
                <p className="text-gray-400 text-sm font-sans font-light leading-relaxed mb-10">
                  Le système est prêt à recevoir vos requêtes. Transmettez vos propositions d'innovation, de collaboration ou de stratégie financière.
                </p>
                
                <div className="space-y-4">
                  <a href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`} className="group flex items-center gap-4 p-4 rounded-lg bg-[var(--color-space-black)] border border-white/5 hover:border-[var(--color-cyan-energy)]/50 transition-all cursor-pointer">
                    <div className="w-10 h-10 rounded-md bg-[var(--color-cyan-energy)]/10 flex items-center justify-center text-[var(--color-cyan-energy)] group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="font-mono">
                      <div className="text-[10px] text-gray-500 mb-1">NŒUD_EMAIL_DIRECT</div>
                      <div className="text-sm text-white font-medium">{PORTFOLIO_DATA.personalInfo.email}</div>
                    </div>
                  </a>
                  
                  <div className="flex gap-4">
                    <a href={PORTFOLIO_DATA.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 p-4 rounded-lg bg-[var(--color-space-black)] border border-white/5 hover:border-[var(--color-neon-blue)]/50 text-[var(--color-neon-blue)] transition-all font-mono text-xs">
                      <FaLinkedin className="w-4 h-4" /> LINKEDIN
                    </a>
                    <a href={PORTFOLIO_DATA.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 p-4 rounded-lg bg-[var(--color-space-black)] border border-white/5 hover:border-[#25D366]/50 text-[#25D366] transition-all font-mono text-xs">
                      WHATSAPP
                    </a>
                    <a href={PORTFOLIO_DATA.socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 p-4 rounded-lg bg-[var(--color-space-black)] border border-white/5 hover:border-[var(--color-neural-violet)]/50 text-[var(--color-neural-violet)] transition-all font-mono text-xs">
                      <FaGithub className="w-4 h-4" /> GITHUB
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <form className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-mono tracking-widest text-[var(--color-cyan-energy)] uppercase">IDENTIFIANT (Nom)</label>
                    <input type="text" id="name" required placeholder="User_ID" className="w-full bg-[var(--color-space-black)] border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[var(--color-cyan-energy)] focus:bg-[var(--color-cyan-energy)]/5 transition-all text-white font-mono text-sm placeholder:text-gray-700" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-mono tracking-widest text-[var(--color-cyan-energy)] uppercase">ADRESSE_RETOUR (Email)</label>
                    <input type="email" id="email" required placeholder="user@network.com" className="w-full bg-[var(--color-space-black)] border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[var(--color-cyan-energy)] focus:bg-[var(--color-cyan-energy)]/5 transition-all text-white font-mono text-sm placeholder:text-gray-700" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] font-mono tracking-widest text-[var(--color-cyan-energy)] uppercase">DONNÉES_UTILES (Message)</label>
                    <textarea id="message" rows={4} required placeholder="Saisissez vos données..." className="w-full bg-[var(--color-space-black)] border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[var(--color-cyan-energy)] focus:bg-[var(--color-cyan-energy)]/5 transition-all text-white font-mono text-sm placeholder:text-gray-700 resize-none" />
                  </div>
                  
                  <button type="submit" className="group mt-2 w-full flex items-center justify-center gap-3 px-6 py-4 bg-[var(--color-cyan-energy)]/10 text-[var(--color-cyan-energy)] font-mono font-bold text-sm rounded-md border border-[var(--color-cyan-energy)]/50 hover:bg-[var(--color-cyan-energy)]/20 transition-all glow-cyan hover-glitch">
                    TRANSMETTRE_DONNÉES <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
