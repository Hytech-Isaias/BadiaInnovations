import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Globe,
  Code2,
  ShoppingCart,
  ArrowUpRight,
  ExternalLink,
  Smartphone,
  Blocks,
  Search,
} from "lucide-react";
import useThemeStore from "../store/themeStore";

const ServicesSection = () => {
  const { t } = useTranslation();
  const { theme } = useThemeStore();

  const services = [
    {
      icon: Globe,
      name: t("services.items.landing.name"),
      desc: t("services.items.landing.desc"),
      features: t("services.items.landing.features", {
        returnObjects: true,
      }) as string[],
      gradient: "from-purple-600 to-purple-500",
    },
    {
      icon: Code2,
      name: t("services.items.business.name"),
      desc: t("services.items.business.desc"),
      features: t("services.items.business.features", {
        returnObjects: true,
      }) as string[],
      gradient: "from-purple-500 to-purple-400",
    },
    {
      icon: ShoppingCart,
      name: t("services.items.ecommerce.name"),
      desc: t("services.items.ecommerce.desc"),
      features: t("services.items.ecommerce.features", {
        returnObjects: true,
      }) as string[],
      gradient: "from-purple-700 to-purple-600",
    },
    {
      icon: Blocks,
      name: t("services.items.custom.name"),
      desc: t("services.items.custom.desc"),
      features: t("services.items.custom.features", {
        returnObjects: true,
      }) as string[],
      gradient: "from-purple-600 to-purple-700",
    },
    {
      icon: Smartphone,
      name: t("services.items.app.name"),
      desc: t("services.items.app.desc"),
      features: t("services.items.app.features", {
        returnObjects: true,
      }) as string[],
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Search,
      name: t("services.items.seo.name"),
      desc: t("services.items.seo.desc"),
      features: t("services.items.seo.features", {
        returnObjects: true,
      }) as string[],
      gradient: "from-purple-400 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section id="services" className="py-24 bg-theme relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background:
              theme === "dark"
                ? "rgba(131, 66, 229, 0.05)"
                : "rgba(131, 66, 229, 0.03)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background:
              theme === "dark"
                ? "rgba(146, 99, 239, 0.05)"
                : "rgba(146, 99, 239, 0.03)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-theme mb-4">
            {t("services.title")}
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            {t("services.desc")}
          </p>
        </motion.div>

        {/* Services cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="h-full glass rounded-3xl p-8 relative overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <service.icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-theme mb-3 group-hover:text-purple-500 transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="px-3 py-1.5 glass-light rounded-lg text-xs text-muted font-medium"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio showcase */}
        <motion.div
          id="portfolio"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-theme mb-2">
              {t("services.portfolio.title")}
            </h3>
            <p className="text-muted">{t("services.portfolio.subtitle")}</p>
          </div>

          <a
            href="https://tailoredweddingsrd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="glass rounded-3xl p-8 md:p-12 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Preview */}
                <div className="relative">
                  <div className="aspect-16/10 rounded-2xl overflow-hidden bg-surface-2 border border-theme relative group-hover:border-purple-500/30 transition-colors">
                    {/* Browser chrome mockup */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-surface-3 flex items-center gap-2 px-4">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400/70" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                        <div className="w-3 h-3 rounded-full bg-green-400/70" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="px-4 py-1 rounded-md bg-surface-2 text-xs text-muted truncate max-w-[200px]">
                          tailoredweddingsrd.com
                        </div>
                      </div>
                    </div>

                    {/* Content area */}
                    <div className="absolute inset-0 top-8">
                      <img
                        src="/src/assets/images/TailoredWeddings.png"
                        alt="Tailored Weddings RD Website"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Floating accent */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-linear-to-br from-purple-600 to-purple-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
                </div>

                {/* Info */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <h4 className="text-2xl font-bold text-theme">
                      {t("services.portfolio.tailored.name")}
                    </h4>
                    <ExternalLink
                      size={20}
                      className="text-muted group-hover:text-purple-500 transition-colors"
                    />
                  </div>

                  <p className="text-muted mb-6 leading-relaxed">
                    {t("services.portfolio.tailored.desc")}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      "React",
                      "TailwindCSS",
                      "Framer Motion",
                      "i18n",
                      "Sanity CMS",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 glass-light rounded-lg text-xs text-muted font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-purple-600 to-purple-500 text-white font-medium group-hover:from-purple-500 group-hover:to-purple-400 transition-all">
                    {t("services.portfolio.cta")}
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
