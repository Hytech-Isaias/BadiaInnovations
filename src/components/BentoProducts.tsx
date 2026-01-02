import { motion, AnimatePresence } from "framer-motion";
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
  Dumbbell,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import useThemeStore from "../store/themeStore";
import { useState, useEffect } from "react";

const BentoProducts = () => {
  const { t } = useTranslation();
  const { theme } = useThemeStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const products = [
    {
      id: "nominal",
      icon: Building2,
      badge: "Enterprise",
      badgeColor: "bg-purple-500/20 text-purple-400",
      gradient: "from-purple-600 to-purple-500",
      features: [
        { icon: Users, label: "Employee Mgmt" },
        { icon: BarChart3, label: "Reports & Analytics" },
        { icon: Shield, label: "Legal Compliance" },
        { icon: CheckCircle2, label: "Payroll Auto" },
      ],
    },
    {
      id: "gymtracker",
      icon: Dumbbell,
      badge: t("products.apps.items.gymtracker.status"),
      badgeColor: "bg-yellow-500/20 text-yellow-400",
      gradient: "from-purple-500 to-purple-400",
      features: [
        { icon: Zap, label: "AI Powered" },
        { icon: BarChart3, label: "Progress Tracking" },
        { icon: Shield, label: "Web & Android" },
        { icon: CheckCircle2, label: "Free & Premium" },
      ],
    },
    {
      id: "salary",
      icon: Calculator,
      badge: "Free",
      badgeColor: "bg-green-500/20 text-green-400",
      gradient: "from-purple-500 to-purple-400",
      isTool: true,
    },
    {
      id: "leaves",
      icon: FileText,
      badge: "Free",
      badgeColor: "bg-green-500/20 text-green-400",
      gradient: "from-purple-400 to-purple-300",
      isTool: true,
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const currentProduct = products[currentIndex];
  const isApp = !currentProduct.isTool;

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

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="relative min-h-[580px] md:min-h-[500px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                <div className="h-full glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
                  {/* Gradient accent */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-600/20 to-purple-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentProduct.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <currentProduct.icon size={32} className="text-white" />
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full ${currentProduct.badgeColor} text-xs font-semibold`}
                      >
                        {currentProduct.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl md:text-3xl font-bold text-theme mb-3">
                      {isApp
                        ? t(`products.apps.items.${currentProduct.id}.name`)
                        : t(`products.tools.items.${currentProduct.id}.name`)}
                    </h3>
                    <p className="text-muted mb-6 leading-relaxed">
                      {isApp
                        ? t(`products.apps.items.${currentProduct.id}.desc`)
                        : t(`products.tools.items.${currentProduct.id}.desc`)}
                    </p>

                    {/* Features */}
                    {currentProduct.features ? (
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {currentProduct.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 glass-light rounded-xl p-3"
                          >
                            <feature.icon
                              size={16}
                              className="text-purple-500"
                            />
                            <span className="text-sm text-muted">
                              {feature.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {(
                          (isApp
                            ? t(
                                `products.apps.items.${currentProduct.id}.features`,
                                {
                                  returnObjects: true,
                                }
                              )
                            : t(
                                `products.tools.items.${currentProduct.id}.features`,
                                {
                                  returnObjects: true,
                                }
                              )) as string[]
                        ).map((feature: string, i: number) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 glass-light rounded-xl p-3"
                          >
                            <CheckCircle2
                              size={16}
                              className="text-purple-500"
                            />
                            <span className="text-sm text-muted">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* CTA */}
                    {currentProduct.id === "gymtracker" ? (
                      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-2 border border-theme text-muted font-medium cursor-not-allowed opacity-60">
                        {t("products.apps.items.gymtracker.cta")}
                      </div>
                    ) : (
                      <a
                        href={
                          isApp
                            ? t(`products.apps.items.${currentProduct.id}.link`)
                            : t(
                                `products.tools.items.${currentProduct.id}.link`
                              )
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium hover:from-purple-500 hover:to-purple-400 transition-all w-fit"
                      >
                        {isApp
                          ? t(`products.apps.items.${currentProduct.id}.cta`)
                          : t(`products.tools.items.${currentProduct.id}.cta`)}
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-theme hover:text-purple-500 transition-colors"
            aria-label="Previous product"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-theme hover:text-purple-500 transition-colors"
            aria-label="Next product"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-purple-500"
                    : "w-2 bg-surface-3 hover:bg-purple-500/50"
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoProducts;
