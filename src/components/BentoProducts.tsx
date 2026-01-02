import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Building2,
  Calculator,
  FileText,
  ArrowUpRight,
  Users,
  BarChart3,
  Shield,
  Zap,
  CheckCircle2,
} from "lucide-react";
import useThemeStore from "../store/themeStore";

const BentoProducts = () => {
  const { t } = useTranslation();
  const { theme } = useThemeStore();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section
      id="products"
      className="py-24 bg-surface relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            theme === "dark"
              ? "rgba(131, 66, 229, 0.03)"
              : "rgba(131, 66, 229, 0.02)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-light rounded-full text-sm font-medium text-purple-500 mb-6">
            <Zap size={14} />
            {t("products.apps.title")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-theme mb-4">
            {t("products.title")}
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            {t("products.subtitle")}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {/* Main Product - NominalRD (spans 2 cols and 2 rows on large screens) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:row-span-2 group"
          >
            <div className="h-full glass rounded-3xl p-8 relative overflow-hidden hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
              {/* Gradient accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-600/20 to-purple-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <Building2 size={32} className="text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold">
                    Enterprise
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-theme mb-3">
                  {t("products.apps.items.nominal.name")}
                </h3>
                <p className="text-muted mb-6 leading-relaxed">
                  {t("products.apps.items.nominal.desc")}
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: Users, label: "Employee Mgmt" },
                    { icon: BarChart3, label: "Reports & Analytics" },
                    { icon: Shield, label: "Legal Compliance" },
                    { icon: CheckCircle2, label: "Payroll Auto" },
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 glass-light rounded-xl p-3"
                    >
                      <feature.icon size={16} className="text-purple-500" />
                      <span className="text-sm text-muted">
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://nominalrd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium group-hover:from-purple-500 group-hover:to-purple-400 transition-all"
                >
                  {t("products.apps.items.nominal.cta")}
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Free Tool 1 - Salary Calculator */}
          <motion.div variants={itemVariants} className="group">
            <div className="h-full glass rounded-3xl p-6 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-400 flex items-center justify-center">
                  <Calculator size={24} className="text-white" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                  Free
                </span>
              </div>

              <h4 className="text-lg font-bold text-theme mb-2">
                {t("products.tools.items.salary.name")}
              </h4>
              <p className="text-sm text-muted mb-4 line-clamp-2">
                {t("products.tools.items.salary.desc")}
              </p>

              <a
                href="https://tools.nominalrd.com/es/salary-calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-purple-500 hover:text-purple-400 transition-colors"
              >
                {t("products.tools.items.salary.cta")}
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Free Tool 2 - TSS Calculator */}
          <motion.div variants={itemVariants} className="group">
            <div className="h-full glass rounded-3xl p-6 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-300 flex items-center justify-center">
                  <FileText size={24} className="text-white" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                  Free
                </span>
              </div>

              <h4 className="text-lg font-bold text-theme mb-2">
                {t("products.tools.items.leaves.name")}
              </h4>
              <p className="text-sm text-muted mb-4 line-clamp-2">
                {t("products.tools.items.leaves.desc")}
              </p>

              <a
                href="https://tools.nominalrd.com/es/leaves-benefits-calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-purple-500 hover:text-purple-400 transition-colors"
              >
                {t("products.tools.items.leaves.cta")}
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="h-full glass rounded-3xl p-6 flex items-center justify-around">
              {[
                { value: "20+", label: "Active Users" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Support" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoProducts;
