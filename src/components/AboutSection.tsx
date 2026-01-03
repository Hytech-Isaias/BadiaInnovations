import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Award, Code, Rocket, Users } from "lucide-react";
import useThemeStore from "../store/themeStore";
import BlackLogo from "../assets/images/BadiaDevelopers-05.png";
import WhiteLogo from "../assets/images/BadiaDevelopers-09.png";

const AboutSection = () => {
  const { t } = useTranslation();
  const { theme } = useThemeStore();

  const highlights = [
    {
      icon: Code,
      title: t("about.highlights.experience.title"),
      desc: t("about.highlights.experience.desc"),
    },
    {
      icon: Rocket,
      title: t("about.highlights.innovation.title"),
      desc: t("about.highlights.innovation.desc"),
    },
    {
      icon: Users,
      title: t("about.highlights.clients.title"),
      desc: t("about.highlights.clients.desc"),
    },
    {
      icon: Award,
      title: t("about.highlights.quality.title"),
      desc: t("about.highlights.quality.desc"),
    },
  ];

  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            theme === "dark"
              ? "rgba(131, 66, 229, 0.03)"
              : "rgba(131, 66, 229, 0.02)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-theme mb-4">
            {t("about.title")}
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            {t("about.subtitle")}
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column - Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src={theme === "dark" ? WhiteLogo : BlackLogo}
                alt="Badia Developers"
                className="w-full max-w-md lg:max-w-lg h-auto"
                loading="lazy"
                decoding="async"
              />
              {/* Decorative accent */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-linear-to-br from-purple-600 to-purple-400 rounded-full blur-3xl opacity-30" />
            </div>
          </motion.div>

          {/* Right Column - Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-light rounded-full mb-2">
              <Award size={16} className="text-purple-500" />
              <span className="text-sm font-medium text-purple-500">
                {t("about.badge")}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-theme">
              {t("about.heading")}
            </h3>

            <div className="space-y-4 text-muted leading-relaxed">
              <p>{t("about.description.p1")}</p>
              <p>{t("about.description.p2")}</p>
              <p>{t("about.description.p3")}</p>
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://www.linkedin.com/in/isaias-badia-26a2571b4/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-linear-to-r from-purple-600 to-purple-500 text-white font-medium hover:from-purple-500 hover:to-purple-400 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              {t("about.cta")}
            </motion.a>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-purple-500/5 transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <highlight.icon size={24} className="text-purple-500" />
              </div>
              <h4 className="font-semibold text-theme mb-2">
                {highlight.title}
              </h4>
              <p className="text-sm text-muted">{highlight.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
