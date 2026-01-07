import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  Shield,
  Headphones,
  TrendingUp,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import useThemeStore from "../store/themeStore";

const CTASection = () => {
  const { t } = useTranslation();
  const { theme } = useThemeStore();

  const features = [
    {
      icon: Sparkles,
      title: t("whyUs.features.modern.title"),
      desc: t("whyUs.features.modern.desc"),
    },
    {
      icon: Shield,
      title: t("whyUs.features.security.title"),
      desc: t("whyUs.features.security.desc"),
    },
    {
      icon: Headphones,
      title: t("whyUs.features.support.title"),
      desc: t("whyUs.features.support.desc"),
    },
    {
      icon: TrendingUp,
      title: t("whyUs.features.scalable.title"),
      desc: t("whyUs.features.scalable.desc"),
    },
  ];

  return (
    <>
      {/* Why Choose Us */}
      {/* Why Choose Us */}
      <section className="py-24 bg-surface relative overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-theme mb-6">
                {t("whyUs.title")}
              </h2>
              <p className="text-muted text-lg mb-8 leading-relaxed max-w-xl">
                {t("whyUs.subtitle")}
              </p>

              {/* Feature List */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 transition-colors">
                      <feature.icon size={22} className="text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-theme mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Visualization - Glass Dashboard */}
            <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
              {/* Main Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] aspect-video glass rounded-3xl border border-white/20 p-8 shadow-2xl backdrop-blur-xl z-20"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      BI
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-theme">
                        Badia Innovations
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Available for hire
                      </div>
                    </div>
                  </div>
                  <div className="glass-light px-3 py-1.5 rounded-full text-xs font-medium text-theme">
                    Pro Verified
                  </div>
                </div>

                {/* Stats Grid inside Main Card */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { label: "Projects", value: "5+" },
                    { label: "Clients", value: "3+" },
                    { label: "Rating", value: "4.9/5" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="text-center p-3 rounded-xl bg-purple-500/5 border border-purple-500/10"
                    >
                      <div className="text-lg font-bold text-theme">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Bottom Section */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-muted uppercase tracking-wider">
                    Recent Activity
                  </h4>
                  <div className="space-y-2">
                    {[
                      "Deployed new SaaS Platform",
                      "Optimized Database Query Speed",
                      "UI/UX Redesign for Client",
                    ].map((activity, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-default"
                      >
                        <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 text-xs font-bold">
                          {i + 1}
                        </div>
                        <span className="text-sm text-theme">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Widget 1: Satisfaction (Top Left) */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0,
                }}
                className="absolute top-[5%] -left-[8%] z-30"
              >
                <div className="glass p-5 rounded-2xl shadow-xl w-48 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-theme">
                      Success Rate
                    </span>
                    <TrendingUp size={16} className="text-green-500" />
                  </div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-3xl font-bold text-theme">98%</span>
                    <span className="text-xs text-green-500 mb-1">+2.4%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-3 rounded-full overflow-hidden">
                    <div className="h-full w-[98%] bg-green-500 rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Widget 2: Tech Stack (Bottom Right) */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-[5%] -right-[8%] z-30"
              >
                <div className="glass p-5 rounded-2xl shadow-xl w-56 border border-white/20">
                  <span className="text-sm font-semibold text-theme block mb-4">
                    Core Technologies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["React", "NestJS", "AWS", "Framer"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-purple-500/10 text-xs text-purple-500 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Widget 3: Support (Top Right) */}
              <motion.div
                animate={{ y: [-8, 8, -8], x: [-5, 5, -5] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -top-[5%] right-[5%] z-30"
              >
                <div className="glass p-4 rounded-xl shadow-lg border border-white/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Headphones size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <div className="text-xs text-muted">Support</div>
                    <div className="text-sm font-bold text-theme">
                      24/7 Live
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 animated-gradient opacity-20" />
          <div
            className="absolute inset-0"
            style={{
              background:
                theme === "dark"
                  ? "rgba(10, 10, 11, 0.85)"
                  : "rgba(255, 255, 255, 0.9)",
            }}
          />
        </div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-20 h-20 rounded-2xl bg-purple-500/10 border border-purple-500/20 hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-[15%] w-16 h-16 rounded-xl bg-purple-600/10 border border-purple-600/20 hidden lg:block"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-theme mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
              {t("cta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:support@badiainnovations.com"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-linear-to-r from-purple-600 to-purple-500" />
                <span className="absolute inset-0 bg-linear-to-r from-purple-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <Mail size={18} />
                  {t("cta.button")}
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/isaias-badia-26a2571b4/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold glass text-theme hover:bg-purple-500/10 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                {t("cta.linkedin")}
              </motion.a>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex flex-wrap justify-center gap-8 text-muted text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                {t("cta.trust.available")}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                {t("cta.trust.fastResponse")}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                {t("cta.trust.location")}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
