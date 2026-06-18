"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Vision() {
  return (
    <section id="vision" className="py-32 relative bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto rounded-[3rem] bg-black/40 border border-[var(--color-brand-blue)]/20 p-12 md:p-24 relative overflow-hidden text-center hover-glow"
        >
          {/* Animated Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[var(--color-brand-blue)]/10 to-[var(--color-brand-green)]/10 rounded-full blur-[120px] animate-[var(--animate-spin-slow)]" />
          
          <div className="relative z-10">
            <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--color-brand-green)] uppercase mb-6 glow-green inline-block px-4 py-1 rounded-full border border-[var(--color-brand-green)]/30">Vision Stratégique</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8 leading-tight drop-shadow-md">
              {PORTFOLIO_DATA.vision.title}
            </h3>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              {PORTFOLIO_DATA.vision.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
