import {
  X,
  CheckCircle2,
  Zap,
  Shield,
  Package,
  ArrowUpRight,
  Calculator,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId: string;
  productType: "apps" | "tools";
}

interface ComplianceItem {
  title: string;
  items: string[];
}

interface HRModuleItem {
  title: string;
  items: string[];
}

interface PayrollFeatureItem {
  title: string;
  items: string[];
}

interface DeductionItem {
  name: string;
  rate: string;
  desc: string;
}

interface HowItWorksItem {
  title: string;
  intro: string;
  deductions: DeductionItem[];
  note?: string;
}

interface BracketItem {
  range: string;
  rate: string;
}

interface ISRScaleItem {
  title: string;
  brackets: BracketItem[];
}

const ProductModal = ({
  isOpen,
  onClose,
  productId,
  productType,
}: ProductModalProps) => {
  const { t } = useTranslation();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const basePath = `products.${productType}.items.${productId}`;
  const productName = t(`${basePath}.name`);
  const description = t(`${basePath}.desc`);
  const extendedDesc = t(`${basePath}.extendedDesc`, "");
  const link = t(`${basePath}.link`, "");
  const cta = t(`${basePath}.cta`, "");

  // Helper function to safely get data
  const getData = (key: string) => {
    try {
      const data = t(key, { returnObjects: true });
      // If translation returns the key itself (string), treat as missing data
      if (typeof data === "string") return null;
      return data;
    } catch {
      return null;
    }
  };

  const getArray = (key: string) => {
    const data = getData(key);
    return Array.isArray(data) ? data : [];
  };

  // General Features
  const features = getArray(`${basePath}.features`).map((f: any) =>
    typeof f === "string" ? { label: f } : f,
  );

  // Specific Data for NominalRD
  const dominicanCompliance = getData(
    `${basePath}.dominicanCompliance`,
  ) as ComplianceItem | null;
  const hrModules = getData(`${basePath}.hrModules`) as HRModuleItem | null;
  const payrollFeatures = getData(
    `${basePath}.payrollFeatures`,
  ) as PayrollFeatureItem | null;

  // Specific Data for Salary Calc
  const howItWorks = getData(`${basePath}.howItWorks`) as HowItWorksItem | null;
  const isrScale = getData(`${basePath}.isrScale`) as ISRScaleItem | null;

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-5xl max-h-[90vh] overflow-hidden pointer-events-auto flex flex-col shadow-2xl shadow-purple-900/20 border border-theme bg-theme rounded-3xl"
            >
              {/* Header */}
              <div className="relative shrink-0 p-6 md:p-8 border-b border-theme bg-surface/95 backdrop-blur-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                    >
                      {productName}
                    </motion.h2>
                    <p className="text-muted text-lg max-w-2xl">
                      {description}
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-surface-2 rounded-full transition-colors text-muted hover:text-theme shrink-0"
                    aria-label="Close modal"
                  >
                    <X size={28} />
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto custom-scrollbar p-6 md:p-8 bg-theme">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="space-y-12"
                >
                  {/* Extended Description */}
                  {extendedDesc && (
                    <motion.div
                      variants={itemVariants}
                      className="prose prose-invert max-w-none"
                    >
                      <p className="text-xl leading-relaxed text-theme font-light">
                        {extendedDesc}
                      </p>
                    </motion.div>
                  )}

                  {/* Features Grid */}
                  {features.length > 0 && (
                    <motion.div variants={itemVariants}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-surface-2 text-purple-500">
                          <Zap size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-theme">
                          Key Features
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {features.map((feature: any, idx: number) => (
                          <div
                            key={idx}
                            className="bg-surface border border-theme rounded-xl p-4 hover:bg-surface-2 transition-colors flex items-start gap-3 group"
                          >
                            <CheckCircle2
                              size={20}
                              className="text-purple-500 mt-1 shrink-0 group-hover:scale-110 transition-transform"
                            />
                            <span className="text-muted font-medium">
                              {feature.label || feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* NominalRD: Compliance & Compliance */}
                  {dominicanCompliance?.items && (
                    <motion.div
                      variants={itemVariants}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    >
                      <div className="bg-surface rounded-3xl p-6 md:p-8 border border-theme">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                            <Shield size={24} />
                          </div>
                          <h3 className="text-2xl font-bold text-theme">
                            {dominicanCompliance.title}
                          </h3>
                        </div>
                        <ul className="space-y-4">
                          {dominicanCompliance.items?.map(
                            (item: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2
                                  size={18}
                                  className="text-emerald-500 mt-1 shrink-0"
                                />
                                <span className="text-muted">{item}</span>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>

                      {/* Payroll Features */}
                      {payrollFeatures?.items && (
                        <div className="bg-gradient-to-br from-purple-900/10 to-blue-900/10 rounded-3xl p-6 md:p-8 border border-theme">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                              <Calculator size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-theme">
                              {payrollFeatures.title}
                            </h3>
                          </div>
                          <ul className="space-y-4">
                            {payrollFeatures.items?.map(
                              (item: string, idx: number) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3"
                                >
                                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                  <span className="text-muted">{item}</span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* NominalRD: HR Modules */}
                  {hrModules?.items && (
                    <motion.div variants={itemVariants}>
                      <div className="pt-6 border-t border-theme">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                            <Package size={24} />
                          </div>
                          <h3 className="text-2xl font-bold text-theme">
                            {hrModules.title}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {hrModules.items?.map((item: string, idx: number) => (
                            <span
                              key={idx}
                              className="px-4 py-2 rounded-full bg-surface border border-theme text-sm text-muted font-medium"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Tools: How It Works */}
                  {howItWorks?.deductions && (
                    <motion.div variants={itemVariants} className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                          <FileText size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-theme">
                          {howItWorks.title}
                        </h3>
                      </div>
                      <p className="text-muted">{howItWorks.intro}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {howItWorks.deductions?.map(
                          (deduction: any, idx: number) => (
                            <div
                              key={idx}
                              className="bg-surface p-4 rounded-xl border border-theme"
                            >
                              <h4 className="font-bold text-theme mb-1">
                                {deduction.name}
                              </h4>
                              <div className="text-xs font-mono text-purple-500 mb-2">
                                {deduction.rate}
                              </div>
                              <p className="text-sm text-muted">
                                {deduction.desc}
                              </p>
                            </div>
                          ),
                        )}
                      </div>
                      {howItWorks.note && (
                        <div className="bg-surface-2 p-4 rounded-xl text-sm text-muted italic border-l-4 border-purple-500">
                          {howItWorks.note}
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* Tools: ISR Scale */}
                  {isrScale?.brackets && (
                    <motion.div
                      variants={itemVariants}
                      className="bg-surface rounded-2xl border border-theme overflow-hidden"
                    >
                      <div className="p-4 bg-surface-2 border-b border-theme font-bold text-theme flex items-center gap-2">
                        <Calculator size={18} />
                        {isrScale.title}
                      </div>
                      <div className="divide-y divide-border">
                        {isrScale.brackets?.map((bracket: any, idx: number) => (
                          <div
                            key={idx}
                            className="p-4 flex flex-col sm:flex-row sm:justify-between gap-2 hover:bg-surface-2 transition-colors"
                          >
                            <span className="font-mono text-sm text-muted">
                              {bracket.range}
                            </span>
                            <span className="font-medium text-theme">
                              {bracket.rate}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* CTA Footer */}
                  {link && (
                    <motion.div
                      variants={itemVariants}
                      className="flex justify-end pt-6 border-t border-theme"
                    >
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:-translate-y-1"
                      >
                        {cta || "Visit Website"}
                        <ArrowUpRight size={18} />
                      </a>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
