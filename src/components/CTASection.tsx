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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-theme mb-4">
              {t("whyUs.title")}
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              {t("whyUs.subtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 text-center group hover:shadow-lg hover:shadow-purple-500/5 transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <feature.icon size={24} className="text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold text-theme mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
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
