import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Events from "@/components/Events";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent relative">
      <ParticlesBackground />
      <Navbar />
      
      {/* Container for content that sits above particles */}
      <div className="relative z-10 flex flex-col w-full h-full">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Vision />
        <Events />
        
        {/* Footer minimal style AI System */}
        <footer className="py-8 text-center border-t border-[var(--color-neon-blue)]/10 bg-black/40 backdrop-blur-md">
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--color-cyan-energy)]">FONCTIONNEMENT NORMAL DU SYSTÈME. © {new Date().getFullYear()} SEKONGO DOGAFOLO.</p>
        </footer>
      </div>

      {/* Contact is now an overlay / Modal */}
      <Contact />
    </main>
  );
}
