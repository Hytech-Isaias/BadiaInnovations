import { X, CheckCircle2, Zap, Target, Package, Award, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    serviceId: string;
}

const ServiceModal = ({ isOpen, onClose, serviceId }: ServiceModalProps) => {
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

    const serviceName = t(`services.items.${serviceId}.name`);
    const description = t(`services.items.${serviceId}.desc`);
    const extendedDesc = t(`services.items.${serviceId}.extendedDesc`, "");

    // Helper function to safely get array data
    const getArrayData = (key: string) => {
        try {
            const data = t(key, { returnObjects: true }) as any;
            return Array.isArray(data) ? data : [];
        } catch {
            return [];
        }
    };

    const features = getArrayData(`services.items.${serviceId}.features`);
    const methodologyItems = getArrayData(`services.items.${serviceId}.methodology.items`);
    const processSteps = getArrayData(`services.items.${serviceId}.process.steps`);
    const deliverables = getArrayData(`services.items.${serviceId}.deliverables.items`);
    const benefits = getArrayData(`services.items.${serviceId}.benefits.items`);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
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
                                            {serviceName}
                                        </motion.h2>
                                        <p className="text-muted text-lg max-w-2xl">{description}</p>
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
                                        <motion.div variants={itemVariants} className="prose prose-invert max-w-none">
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
                                                    {t("services.items.common.featuresTitle", "Key Features")}
                                                </h3>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {features.map((feature: string, idx: number) => (
                                                    <div key={idx} className="bg-surface border border-theme rounded-xl p-4 hover:bg-surface-2 transition-colors flex items-start gap-3 group">
                                                        <CheckCircle2 size={20} className="text-purple-500 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                                                        <span className="text-muted font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Process Timeline */}
                                    {processSteps.length > 0 && (
                                        <motion.div variants={itemVariants}>
                                            <div className="flex items-center gap-3 mb-8">
                                                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                                                    <Target size={24} />
                                                </div>
                                                <h3 className="text-2xl font-bold text-theme">
                                                    {t(`services.items.${serviceId}.process.title`)}
                                                </h3>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                                                {/* Connecting line for desktop */}
                                                <div className="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-surface-2 -z-10" />

                                                {processSteps.map((step: any, idx: number) => (
                                                    <div key={idx} className="relative group">
                                                        <div className="w-20 h-20 rounded-2xl bg-surface border border-purple-500/30 flex items-center justify-center text-3xl font-bold text-purple-500 mb-6 shadow-lg shadow-purple-900/10 group-hover:-translate-y-2 transition-transform duration-300 mx-auto lg:mx-0">
                                                            {idx + 1}
                                                        </div>
                                                        <h4 className="text-lg font-bold text-theme mb-2 text-center lg:text-left">{step.step}</h4>
                                                        <p className="text-sm text-muted leading-relaxed text-center lg:text-left">{step.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Two Column Layout for Methodology, Deliverables, Benefits */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        {/* Deliverables */}
                                        {deliverables.length > 0 && (
                                            <motion.div variants={itemVariants} className="bg-surface rounded-3xl p-6 md:p-8 border border-theme">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                                                        <Package size={24} />
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-theme">
                                                        {t(`services.items.${serviceId}.deliverables.title`)}
                                                    </h3>
                                                </div>
                                                <ul className="space-y-4">
                                                    {deliverables.map((item: string, idx: number) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                                            <span className="text-muted">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}

                                        {/* Benefits */}
                                        {benefits.length > 0 && (
                                            <motion.div variants={itemVariants} className="bg-gradient-to-br from-purple-900/10 to-blue-900/10 rounded-3xl p-6 md:p-8 border border-theme">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                                                        <Award size={24} />
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-theme">
                                                        {t(`services.items.${serviceId}.benefits.title`)}
                                                    </h3>
                                                </div>
                                                <ul className="space-y-4">
                                                    {benefits.map((item: string, idx: number) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <ArrowRight size={16} className="text-amber-500 mt-1 shrink-0" />
                                                            <span className="text-muted">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Methodology (Full width if needed) */}
                                    {methodologyItems.length > 0 && (
                                        <motion.div variants={itemVariants} className="pt-6 border-t border-theme">
                                            <h3 className="text-lg font-semibold text-muted mb-4 uppercase tracking-wider text-sm">
                                                {t(`services.items.${serviceId}.methodology.title`)}
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {methodologyItems.map((item: string, idx: number) => (
                                                    <span key={idx} className="px-4 py-2 rounded-full bg-surface border border-theme text-sm text-muted font-medium">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
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

export default ServiceModal;
