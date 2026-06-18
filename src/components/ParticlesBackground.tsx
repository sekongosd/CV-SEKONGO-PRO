"use client";

import { useCallback } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={init}>
      <Particles
      id="tsparticles"
      className="fixed inset-0 -z-50 pointer-events-none"
      options={{
        background: {
          color: {
            value: "#05060A",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
                color: "#4DA3FF"
              },
            },
          },
        },
        particles: {
          color: {
            value: ["#4DA3FF", "#00F5FF", "#7C5CFF"],
          },
          links: {
            color: "#4DA3FF",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
          number: {
            density: {
              enable: true,
              width: 800,
              height: 800
            },
            value: 60,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
    </ParticlesProvider>
  );
}
