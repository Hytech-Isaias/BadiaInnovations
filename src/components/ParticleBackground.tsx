import { useMemo } from "react";
import useThemeStore from "../store/themeStore";

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

const ParticleBackground = () => {
  const { theme } = useThemeStore();

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs - theme aware */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pulse-glow"
        style={{
          background:
            theme === "dark"
              ? "rgba(131, 66, 229, 0.15)"
              : "rgba(131, 66, 229, 0.08)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pulse-glow"
        style={{
          animationDelay: "1.5s",
          background:
            theme === "dark"
              ? "rgba(146, 99, 239, 0.15)"
              : "rgba(146, 99, 239, 0.08)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl pulse-glow"
        style={{
          animationDelay: "3s",
          background:
            theme === "dark"
              ? "rgba(172, 144, 245, 0.1)"
              : "rgba(172, 144, 245, 0.05)",
        }}
      />

      {/* Particles - theme aware opacity */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            background:
              theme === "dark"
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(131, 66, 229, 0.3)",
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${
              theme === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"
            } 1px, transparent 1px),
            linear-gradient(90deg, ${
              theme === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"
            } 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default ParticleBackground;
