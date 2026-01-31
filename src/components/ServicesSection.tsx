import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  Globe,
  Code2,
  ShoppingCart,
  Smartphone,
  Blocks,
  Search,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import useThemeStore from "../store/themeStore";
import tailoredWeddingsImg from "../assets/images/TailoredWeddings.png?format=webp;png&quality=90";
import ServiceModal from "./ServiceModal";
import PortfolioModal from "./PortfolioModal";

const ServicesSection = () => {
  const { t } = useTranslation();
  const { theme } = useThemeStore();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<{ id: string, img: string | null } | null>(null);

  const services = [
    {
      id: "landing",
      icon: Globe,
      name: t("services.items.landing.name"),
      desc: t("services.items.landing.desc"),
      features: t("services.items.landing.features", {
        returnObjects: true,
      }) as string[],
      gradient: "from-purple-600 to-purple-500",
    },
    {
      id: "business",
      icon: Code2,
      name: t("services.items.business.name"),
      desc: t("services.items.business.desc"),
      features: t("services.items.business.features", {
        returnObjects: true,
      }) as string[],
      gradient: "from-purple-500 to-purple-400",
    },
    {
      id: "ecommerce",
      icon: ShoppingCart,
      name: t("services.items.ecommerce.name"),
      desc: t("services.items.ecommerce.desc"),
      features: t("services.items.ecommerce.features", {
        returnObjects: true,
      }) as string[],
      gradient: "from-purple-700 to-purple-600",
    },
    {
      id: "custom",
      icon: Blocks,
      name: t("services.items.custom.name"),
      desc: t("services.items.custom.desc"),
      features: t("services.items.custom.features", {
        returnObjects: true,
      }) as string[],
      gradient: "from-purple-600 to-purple-700",
    },
    {
      id: "app",
      icon: Smartphone,
      name: t("services.items.app.name"),
      desc: t("services.items.app.desc"),
      features: t("services.items.app.features", {
        returnObjects: true,
      }) as string[],
      gradient: "from-purple-500 to-purple-600",
    },
    {
      id: "seo",
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
              <div className="h-full glass rounded-3xl p-8 relative overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col">
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Content wrapper with z-index */}
                <div className="relative z-10 flex flex-col h-full">
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
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="px-3 py-1.5 glass-light rounded-lg text-xs text-muted font-medium"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <button
                    onClick={() => setSelectedService(service.id)}
                    className="mt-auto flex items-center gap-2 text-sm font-medium text-purple-500 hover:text-purple-600 transition-colors group/btn"
                  >
                    {t("services.learnMore", "Learn More")}
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-theme mb-4">
              {t("services.portfolio.title")}
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">{t("services.portfolio.subtitle")}</p>
          </div>


          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Tailored Weddings */}
            <div
              onClick={() => setSelectedProject({ id: 'tailored', img: tailoredWeddingsImg.img.src })}
              className="block group cursor-pointer"
            >
              <div className="h-full glass rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                <div className="h-48 overflow-hidden relative bg-surface-2">
                  <img
                    src={tailoredWeddingsImg.img.src}
                    alt="Tailored Weddings RD"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-purple-600/90 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                      {t("services.portfolio.projects.tailored.category")}
                    </span>
                  </div>
                  {/* Overlay for Click Hint */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-sm font-medium flex items-center gap-2">
                      View Details <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="text-xl font-bold text-theme group-hover:text-purple-500 transition-colors">
                      {t("services.portfolio.projects.tailored.name")}
                    </h4>
                  </div>
                  <p className="text-muted text-sm mb-4 line-clamp-2">
                    {t("services.portfolio.projects.tailored.desc")}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {(t("services.portfolio.projects.tailored.tech", { returnObjects: true }) as string[]).slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 glass-light rounded text-xs text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* NominalRD */}
            <div
              onClick={() => setSelectedProject({ id: 'nominalrd', img: null })}
              className="block group cursor-pointer"
            >
              <div className="h-full glass rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                <div className="h-48 overflow-hidden relative bg-gradient-to-br from-purple-900 to-purple-700 flex items-center justify-center">
                  <div className="text-6xl font-black text-white/20">NRD</div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-purple-600/90 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                      {t("services.portfolio.projects.nominalrd.category")}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-white text-sm font-medium flex items-center gap-2">
                      View Details <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="text-xl font-bold text-theme group-hover:text-purple-500 transition-colors">
                      {t("services.portfolio.projects.nominalrd.name")}
                    </h4>
                  </div>
                  <p className="text-muted text-sm mb-4 line-clamp-2">
                    {t("services.portfolio.projects.nominalrd.desc")}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {(t("services.portfolio.projects.nominalrd.tech", { returnObjects: true }) as string[]).slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 glass-light rounded text-xs text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* GymTracker */}
            <div
              onClick={() => setSelectedProject({ id: 'gymtracker', img: null })}
              className="block group cursor-pointer"
            >
              <div className="h-full glass rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                <div className="h-48 overflow-hidden relative bg-gradient-to-br from-green-900 to-emerald-700 flex items-center justify-center">
                  <div className="text-6xl font-black text-white/20">GT</div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-emerald-600/90 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                      {t("services.portfolio.projects.gymtracker.category")}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-white text-sm font-medium flex items-center gap-2">
                      View Details <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="text-xl font-bold text-theme group-hover:text-purple-500 transition-colors">
                      {t("services.portfolio.projects.gymtracker.name")}
                    </h4>
                  </div>
                  <p className="text-muted text-sm mb-4 line-clamp-2">
                    {t("services.portfolio.projects.gymtracker.desc")}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {(t("services.portfolio.projects.gymtracker.tech", { returnObjects: true }) as string[]).slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 glass-light rounded text-xs text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-theme text-center mb-10">
              {t("services.portfolio.testimonials.title")}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {(t("services.portfolio.testimonials.items", { returnObjects: true }) as Array<{ quote: string, author: string, role: string, company: string }>).map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="text-purple-500 text-4xl mb-4">"</div>
                  <p className="text-muted text-sm mb-6 leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-theme font-semibold text-sm">{testimonial.author}</p>
                      <p className="text-muted text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          serviceId={selectedService}
        />
      )}

      {/* Portfolio Modal */}
      {selectedProject && (
        <PortfolioModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          projectId={selectedProject.id}
          imageSrc={selectedProject.img}
        />
      )}
    </section>
  );
};


export default ServicesSection;
