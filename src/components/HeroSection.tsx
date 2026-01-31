import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Phone,
} from "lucide-react";
import { useRef } from "react";
import useThemeStore from "../store/themeStore";
import TechStack from "./TechStack";

const HeroSection = () => {
  const { t } = useTranslation();
  const { theme } = useThemeStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleScrollToProducts = () => {
    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-theme pt-20"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary purple glow - center bottom */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="hero-glow hero-glow-primary absolute left-1/2 top-1/2 -translate-x-1/2 w-[800px] h-[800px]"
          style={{
            opacity: theme === "dark" ? 1 : 0.4,
          }}
        />

        {/* Secondary glow - top right */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="hero-glow hero-glow-secondary absolute -top-40 -right-40 w-[600px] h-[600px]"
        />

        {/* Binary/Code Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono text-xs overflow-hidden leading-tight select-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap" style={{ transform: `translateX(${i % 2 === 0 ? -10 : 0}px)` }}>
              {`const innovation = true; // badia.core.init(); return future; `.repeat(10)}
            </div>
          ))}
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${theme === "dark" ? "#fff" : "#000"
              } 1px, transparent 1px), 
                             linear-gradient(90deg, ${theme === "dark" ? "#fff" : "#000"
              } 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 md:px-6"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 items-center min-h-[calc(100vh-100px)]">
          {/* Left side - Content */}
          <div className="py-4 lg:py-0">
            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-theme leading-[1.1] mb-4"
            >
              {t("hero.title")} <span className="hero-braces">{"{"}</span>
              <span className="gradient-text">{t("hero.titleHighlight")}</span>
              <span className="hero-braces">{"}"}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-lg text-muted leading-relaxed mb-6 max-w-xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <motion.button
                onClick={handleScrollToProducts}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-theme border border-theme hover:border-purple-500 hover:text-purple-500 transition-all"
              >
                {t("hero.cta1")}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>

              <motion.button
                onClick={handleScrollToContact}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 px-7 py-3.5 rounded-full font-semibold glass text-theme hover:bg-purple-500/10 transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <Phone size={14} className="text-purple-500 ml-0.5" />
                </div>
                {t("hero.cta2")}
              </motion.button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-8"
            >
              {[
                { value: "5+", label: t("hero.stats.projects") },
                { value: "3+", label: t("hero.stats.clients") },
                { value: "100%", label: t("hero.stats.satisfaction") },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Tech Stack Visualization */}
          <div className="hidden lg:flex items-center justify-center relative h-[480px] lg:h-[520px]">
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TechStack />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity }}
        onClick={handleScrollToProducts}
        className="absolute bottom-8 right-8 flex items-center gap-3 cursor-pointer text-muted hover:text-purple-500 transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">
          {t("hero.scroll")}
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-8 h-8 rounded-full border border-current flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 3, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
