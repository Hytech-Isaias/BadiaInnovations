import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Phone,
  RotateCcw,
  Plus,
  Settings,
  Lock,
} from "lucide-react";
import { useRef } from "react";
import useThemeStore from "../store/themeStore";

// TypeScript code snippet for the code editor
const codeLines = [
  { content: "interface", type: "keyword" },
  { content: " ", type: "text" },
  { content: "AppConfig", type: "type" },
  { content: " {", type: "bracket" },
  { content: "\n", type: "text" },

  { content: "  name", type: "property" },
  { content: ": ", type: "operator" },
  { content: "string", type: "type" },
  { content: ";", type: "text" },
  { content: "\n", type: "text" },

  { content: "  version", type: "property" },
  { content: ": ", type: "operator" },
  { content: "string", type: "type" },
  { content: ";", type: "text" },
  { content: "\n", type: "text" },

  { content: "}", type: "bracket" },
  { content: "\n\n", type: "text" },

  { content: "const", type: "keyword" },
  { content: " ", type: "text" },
  { content: "config", type: "variable" },
  { content: ": ", type: "operator" },
  { content: "AppConfig", type: "type" },
  { content: " = {", type: "bracket" },
  { content: "\n", type: "text" },

  { content: "  name", type: "property" },
  { content: ": ", type: "operator" },
  { content: '"Badia Innovations"', type: "string" },
  { content: ",", type: "text" },
  { content: "\n", type: "text" },

  { content: "  version", type: "property" },
  { content: ": ", type: "operator" },
  { content: '"1.0.1"', type: "string" },
  { content: ",", type: "text" },
  { content: "\n", type: "text" },
  { content: "\n", type: "text" },

  { content: "};", type: "bracket" },
  { content: "\n\n", type: "text" },

  { content: "function", type: "keyword" },
  { content: " ", type: "text" },
  { content: "createSolution", type: "function" },
  { content: "(", type: "bracket" },
  { content: "client", type: "variable" },
  { content: ": ", type: "operator" },
  { content: "string", type: "type" },
  { content: ")", type: "bracket" },
  { content: " {", type: "bracket" },
  { content: "\n", type: "text" },

  { content: "  return", type: "keyword" },
  { content: " {", type: "bracket" },
  { content: "\n", type: "text" },

  { content: "    client", type: "property" },
  { content: ",", type: "text" },
  { content: "\n", type: "text" },

  { content: "    status", type: "property" },
  { content: ": ", type: "operator" },
  { content: '"building"', type: "string" },
  { content: "\n", type: "text" },

  { content: "  };", type: "bracket" },
  { content: "\n", type: "text" },

  { content: "}", type: "bracket" },
];

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

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(${
              theme === "dark" ? "#fff" : "#000"
            } 1px, transparent 1px), 
                             linear-gradient(90deg, ${
                               theme === "dark" ? "#fff" : "#000"
                             } 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
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
            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-theme leading-[1.05] mt-6 mb-6"
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
              className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
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

          {/* Right side - Code Editor */}
          <div className="relative h-[500px] lg:h-[600px] hidden lg:block">
            {/* Main Code Editor */}
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, x: 50, rotateY: -5 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-[5%] right-0 w-[400px]"
            >
              <div className="code-editor shadow-2xl">
                {/* Editor header */}
                <div className="code-editor-header">
                  <div className="flex gap-2">
                    <div className="code-editor-dot red"></div>
                    <div className="code-editor-dot yellow"></div>
                    <div className="code-editor-dot green"></div>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-muted">
                      <RotateCcw size={14} />
                    </button>
                    <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-muted">
                      <Plus size={14} />
                    </button>
                    <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-muted">
                      <Settings size={14} />
                    </button>
                  </div>
                </div>

                {/* Editor body */}
                <div className="code-editor-body text-theme">
                  {codeLines.map((token, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.02 }}
                      className={
                        token.type !== "text" ? `syntax-${token.type}` : ""
                      }
                      style={{ whiteSpace: "pre" }}
                    >
                      {token.content}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CSS Card */}
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: -30, rotateY: 5 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-[15%] left-[0%] w-[260px]"
            >
              <div className="css-card shadow-xl">
                <div className="css-card-header">
                  <span className="text-muted">Body</span>
                  <div className="flex items-center gap-1">
                    <button className="px-2 py-0.5 font-bold text-theme hover:bg-purple-500/20 rounded">
                      B
                    </button>
                    <button className="px-2 py-0.5 italic text-muted hover:bg-purple-500/20 rounded">
                      I
                    </button>
                    <button className="px-2 py-0.5 underline text-muted hover:bg-purple-500/20 rounded">
                      U
                    </button>
                    <span className="text-muted mx-1">+</span>
                    <span className="text-muted">/</span>
                  </div>
                </div>
                <div className="p-3 space-y-1 text-xs">
                  <div>
                    <span className="syntax-property">code</span>
                    <span className="text-muted"> {"{"}</span>
                  </div>
                  <div className="pl-3">
                    <span className="syntax-property">font-family</span>
                    <span className="syntax-operator">: </span>
                    <span className="syntax-string">
                      'Fira Code', monospace
                    </span>
                    <span className="text-muted">;</span>
                  </div>
                  <div className="pl-3">
                    <span className="syntax-property">font-size</span>
                    <span className="syntax-operator">: </span>
                    <span className="syntax-number">14px</span>
                    <span className="text-muted">;</span>
                  </div>
                  <div className="pl-3">
                    <span className="syntax-property">background-color</span>
                    <span className="syntax-operator">: </span>
                    <span className="syntax-string">#f5f5f5</span>
                    <span className="text-muted">;</span>
                  </div>
                  <div className="pl-3">
                    <span className="syntax-property">padding</span>
                    <span className="syntax-operator">: </span>
                    <span className="syntax-number">4px</span>
                    <span className="text-muted">;</span>
                  </div>
                  <div className="pl-3">
                    <span className="syntax-property">border-radius</span>
                    <span className="syntax-operator">: </span>
                    <span className="syntax-number">4px</span>
                    <span className="text-muted">;</span>
                  </div>
                  <div>
                    <span className="text-muted">{"}"}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating security element */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[5%] right-[40%]"
            >
              <div className="glass rounded-full p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400 text-xs">
                      <Lock />
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative floating elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] left-[10%] w-12 h-12 rounded-2xl bg-linear-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-500/20"
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
              className="absolute top-[40%] left-[5%] w-8 h-8 rounded-xl bg-linear-to-br from-purple-400/20 to-purple-500/20 backdrop-blur-sm border border-purple-400/20"
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
