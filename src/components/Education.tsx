"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-32 relative bg-transparent border-t border-[var(--color-brand-green)]/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--color-brand-green)] uppercase mb-4 glow-green inline-block px-4 py-1 rounded-full border border-[var(--color-brand-green)]/30">Fondations</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-6">
              Parcours <span className="text-gradient-main">Académique</span>.
            </h3>
          </div>

          <div className="space-y-6">
            {PORTFOLIO_DATA.education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl bg-black/40 border border-white/5 hover:border-[var(--color-brand-green)]/30 transition-all hover-glow"
              >
                <div className="mb-4 md:mb-0 md:w-2/3">
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--color-brand-green)] transition-colors">{item.degree}</h4>
                  <div className="text-gray-300 font-medium mb-2">{item.school}</div>
                  <p className="text-sm text-gray-500 font-light">{item.description}</p>
                </div>
                <div className="md:w-1/3 md:text-right">
                  <span className="inline-block px-4 py-2 rounded-full border border-[var(--color-brand-green)]/20 text-xs font-semibold text-[var(--color-brand-green)] bg-[var(--color-brand-green)]/10 shadow-[0_0_10px_rgba(0,255,136,0.1)]">
                    {item.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
