import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { useRef } from "react";
import useThemeStore from "../store/themeStore";

const HeroSection = () => {
  const { t } = useTranslation();
  const { theme } = useThemeStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
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
      className="relative min-h-screen overflow-hidden bg-theme pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background:
              theme === "dark"
                ? "rgba(131, 66, 229, 0.15)"
                : "rgba(131, 66, 229, 0.08)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            background:
              theme === "dark"
                ? "rgba(146, 99, 239, 0.12)"
                : "rgba(146, 99, 239, 0.06)",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${
              theme === "dark" ? "#fff" : "#000"
            } 1px, transparent 1px), 
                             linear-gradient(90deg, ${
                               theme === "dark" ? "#fff" : "#000"
                             } 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 md:px-6"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-80px)]">
          {/* Left side - Content */}
          <div className="pt-8 lg:pt-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-light rounded-full mb-6"
            >
              <Sparkles size={14} className="text-purple-500" />
              <span className="text-sm font-medium text-muted">
                {t("hero.tagline")}
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-theme leading-[1.1] mb-6"
            >
              {t("hero.title")}{" "}
              <span className="gradient-text">{t("hero.titleHighlight")}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                onClick={handleScrollToProducts}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500" />
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  {t("hero.cta1")}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </motion.button>

              <motion.button
                onClick={handleScrollToContact}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 px-8 py-2 rounded-2xl font-semibold glass text-theme hover:bg-purple-500/10 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <Phone size={16} className="text-purple-500 ml-0.5" />
                </div>
                {t("hero.cta2")}
              </motion.button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
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

          {/* Right side - Floating product cards */}
          <div className="relative h-[500px] lg:h-[600px] hidden lg:block">
            {/* Main product card */}
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-[10%] right-[5%] w-[320px]"
            >
              <div className="glass rounded-3xl p-6 shadow-2xl hover:shadow-purple-500/10 transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">N</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-theme">NominalRD</h3>
                    <p className="text-sm text-muted">
                      {t("hero.cards.hrPayroll")}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-surface-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">
                      {t("hero.cards.employeeSat")}
                    </span>
                    <span className="text-purple-500 font-semibold">85%</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-theme">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-2 border-surface flex items-center justify-center text-white text-xs font-medium"
                        >
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-muted">
                      {t("hero.cards.companies")}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tools card */}
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: -30, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-[35%] left-[0%] w-[280px]"
            >
              <div className="glass rounded-3xl p-5 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted">
                    {t("hero.cards.salaryCalc")}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-500 text-xs font-medium">
                    {t("hero.cards.free")}
                  </span>
                </div>
                <div className="text-3xl font-bold text-theme mb-1">
                  RD$ 50,000
                </div>
                <div className="text-sm text-muted mb-4">
                  {t("hero.cards.netSalary")}
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="glass-light rounded-lg p-2">
                    <div className="text-muted">ISR</div>
                    <div className="font-semibold text-theme">-RD$ 2,955</div>
                  </div>
                  <div className="glass-light rounded-lg p-2">
                    <div className="text-muted">AFP</div>
                    <div className="font-semibold text-theme">-RD$ 1,854</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Web dev card */}
            <motion.div
              style={{ y: y3 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute bottom-[10%] right-[15%] w-[260px]"
            >
              <div className="glass rounded-3xl p-5 shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl glass-light flex items-center justify-center">
                    <span className="text-purple-500">🌐</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-theme text-sm">
                      {t("hero.cards.webDev")}
                    </h4>
                    <p className="text-xs text-muted">
                      {t("hero.cards.customSolutions")}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "React",
                    "Vue",
                    "Nest.js",
                    "Next.js",
                    "Laravel",
                    "Spring Boot",
                    "UI/UX",
                    "GCP",
                    "AWS",
                    "Docker",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-lg glass-light text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[5%] left-[20%] w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-500/20"
            />
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-[25%] left-[15%] w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/20 to-purple-500/20 backdrop-blur-sm border border-purple-400/20"
            />
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-muted hover:text-purple-500 transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">
          {t("hero.scroll")}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-current"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
