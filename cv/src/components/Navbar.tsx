"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { User, Briefcase, Code, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-contact'));
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Accueil", href: "#home", icon: <User className="w-4 h-4" /> },
    { name: "Expérience", href: "#experience", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Projets", href: "#projects", icon: <Code className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" />, onClick: handleContactClick },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-xl font-space font-bold tracking-tighter text-gradient-neural">
            Sekongo.
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={item.onClick}
                className="flex items-center gap-2 text-sm font-mono tracking-widest text-gray-400 hover:text-[var(--color-cyan-energy)] transition-colors uppercase"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </nav>

          {/* Bouton Contact Rapide */}
          <button
            onClick={handleContactClick}
            className="hidden md:inline-flex items-center justify-center px-6 py-2 text-xs tracking-widest font-mono transition-all duration-300 border border-[var(--color-cyan-energy)]/50 text-[var(--color-cyan-energy)] rounded-sm hover:bg-[var(--color-cyan-energy)]/10 glow-cyan uppercase"
          >
            Init.Contact
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#05060A] pt-24 px-6 flex flex-col gap-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) item.onClick(e);
                    else setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-4 text-lg font-mono text-gray-300 hover:text-[var(--color-cyan-energy)] transition-colors p-4 terminal-glass rounded-lg"
                >
                  {item.icon}
                  <span className="uppercase tracking-widest">{item.name}</span>
                </a>
              ))}
            </div>
            <button
              onClick={handleContactClick}
              className="mt-auto mb-10 w-full py-4 text-sm tracking-widest font-mono transition-all border border-[var(--color-neural-violet)]/50 text-[var(--color-neural-violet)] rounded-md bg-[var(--color-neural-violet)]/10 glow-violet uppercase"
            >
              Init.Protocole_Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
