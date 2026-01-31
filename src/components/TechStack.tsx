import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Layout,
  Smartphone,
  Cloud,
  Layers,
  Box,
  Hexagon,
  Monitor,
  Zap
} from "lucide-react";

const TechStack = () => {
  const technologies = [
    { icon: Layout, name: "React", color: "text-blue-400", bg: "bg-blue-400/10" },
    { icon: Monitor, name: "Vue.js", color: "text-green-500", bg: "bg-green-500/10" },
    { icon: Server, name: "Laravel", color: "text-red-500", bg: "bg-red-500/10" },
    { icon: Hexagon, name: "NestJS", color: "text-red-600", bg: "bg-red-600/10" },
    { icon: Zap, name: "Spring Boot", color: "text-green-600", bg: "bg-green-600/10" },
    { icon: Database, name: "PostgreSQL", color: "text-blue-300", bg: "bg-blue-300/10" },
    { icon: Smartphone, name: "React Native", color: "text-purple-400", bg: "bg-purple-400/10" },
    { icon: Cloud, name: "AWS/GCP", color: "text-yellow-500", bg: "bg-yellow-500/10" },
    { icon: Box, name: "Docker", color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: Layers, name: "Tailwind", color: "text-cyan-400", bg: "bg-cyan-400/10" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Pulse */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px]"
      />

      {/* Central Hub - Code Essence */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="relative z-20 w-40 h-40 rounded-3xl glass border border-purple-500/30 flex items-center justify-center shadow-2xl backdrop-blur-xl group cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl" />
        <div className="text-center relative z-10">
          <Code2 size={48} className="text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
          <div className="text-sm font-bold tracking-wider text-theme">BADIA<br />CORE</div>
        </div>

        {/* Inner Rings */}
        <div className="absolute inset-0 border border-purple-500/20 rounded-3xl animate-pulse" />
        <div className="absolute -inset-2 border border-purple-500/10 rounded-[2rem]" />
      </motion.div>

      {/* Connected Network */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="absolute inset-0"
      >
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {technologies.map((_, i) => {
            const angle = (i * (360 / technologies.length)) * (Math.PI / 180);
            const radius = 200;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            // Center is 50%, 50%
            return (
              <motion.line
                key={`line-${i}`}
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${x}px)`}
                y2={`calc(50% + ${y}px)`}
                stroke="url(#grad1)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
              />
            );
          })}
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>

        {technologies.map((tech, i) => {
          const angle = (i * (360 / technologies.length)) * (Math.PI / 180);
          const radius = 200; // Orbital radius
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={tech.name}
              variants={item}
              className="absolute left-1/2 top-1/2 -ml-10 -mt-10" // Centered based on new size 20 (w-20)
              style={{ x, y }}
            >
              <motion.div
                whileHover={{ scale: 1.15, y: -5 }}
                className={`w-20 h-20 rounded-2xl ${tech.bg} backdrop-blur-md border border-white/10 flex flex-col items-center justify-center shadow-xl cursor-default group hover:shadow-purple-500/20 transition-all duration-300`}
              >
                <tech.icon size={28} className={`${tech.color} mb-2 group-hover:rotate-12 transition-transform duration-300`} />
                <span className="text-[10px] text-muted font-bold uppercase tracking-wider group-hover:text-theme transition-colors">{tech.name}</span>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Orbit Rings */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" style={{ transform: 'scale(1.5)' }}>
        <motion.circle
          cx="50%"
          cy="50%"
          r="200"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          className="text-purple-500/50"
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{ pathLength: 1, rotate: 360 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        <motion.circle
          cx="50%"
          cy="50%"
          r="160" // Inner ring
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          strokeDasharray="4 4"
          className="text-blue-500/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
};

export default TechStack;
