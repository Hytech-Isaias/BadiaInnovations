import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import { textReveal } from "../utils/animations";

const AnimatedHero = () => {
  const { t } = useTranslation();

  const handleScrollToProducts = () => {
    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-theme">
      {/* Animated background */}
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 glass-light rounded-full text-sm font-medium text-purple-500">
            ✨ {t("hero.tagline")}
          </span>
        </motion.div>

        {/* Main Title */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            variants={textReveal}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-theme leading-tight"
          >
            {t("hero.title")}
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.h1
            variants={textReveal}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="gradient-text">{t("hero.titleHighlight")}</span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-muted leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={handleScrollToProducts}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500" />
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center justify-center gap-2">
              {t("hero.cta1")}
            </span>
          </motion.button>

          <motion.button
            onClick={handleScrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-full font-semibold glass text-theme hover:bg-purple-500/10 transition-colors"
          >
            {t("hero.cta2")}
          </motion.button>
        </motion.div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {["React", "TypeScript", "Node.js", "TailwindCSS", "PostgreSQL"].map(
            (tech, index) => (
              <span
                key={tech}
                className="px-3 py-1.5 glass-light rounded-full text-xs font-medium text-muted"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            )
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-muted cursor-pointer"
        onClick={handleScrollToProducts}
      >
        <span className="text-xs uppercase tracking-widest">
          {t("hero.scroll")}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AnimatedHero;
