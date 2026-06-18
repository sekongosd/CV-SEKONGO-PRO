"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Events() {
  return (
    <section id="events" className="py-32 relative bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-4">Réseautage & Apprentissage</h2>
              <h3 className="text-4xl font-bold text-white tracking-tight">
                Événements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Participations</span>.
              </h3>
            </div>
            <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors border-b border-white/10 pb-1">
              Proposer un événement &rarr;
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold">
                    {event.date}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 pr-20">{event.title}</h4>
                <div className="text-sm font-medium text-violet-400 mb-4">{event.type}</div>
                <p className="text-gray-400 font-light leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
