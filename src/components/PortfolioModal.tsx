import { X, ExternalLink, Code2, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface PortfolioModalProps {
    isOpen: boolean;
    onClose: () => void;
    projectId: string; // 'tailored' | 'nominalrd' | 'gymtracker'
    imageSrc?: string | null;
}

const PortfolioModal = ({ isOpen, onClose, projectId, imageSrc }: PortfolioModalProps) => {
    const { t } = useTranslation();

    // Prevent body scroll
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

    // Handle escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    const basePath = `services.portfolio.projects.${projectId}`;
    const name = t(`${basePath}.name`);
    const category = t(`${basePath}.category`);
    const desc = t(`${basePath}.desc`);
    const extendedDesc = t(`${basePath}.extendedDesc`, "");
    const link = t(`${basePath}.link`);

    const techStack = (t(`${basePath}.tech`, { returnObjects: true }) as string[]) || [];
    const results = (t(`${basePath}.results`, { returnObjects: true }) as string[]) || [];

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
                            className="w-full max-w-4xl max-h-[90vh] overflow-hidden pointer-events-auto flex flex-col shadow-2xl shadow-purple-900/20 border border-theme bg-theme rounded-3xl"
                        >
                            {/* Header Image (Optional) */}
                            {imageSrc && (
                                <div className="h-48 md:h-64 w-full relative shrink-0 overflow-hidden">
                                    <img
                                        src={imageSrc}
                                        alt={name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-theme to-transparent" />
                                    <button
                                        onClick={onClose}
                                        className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-md transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                    <div className="absolute bottom-4 left-6 md:left-8">
                                        <span className="px-3 py-1 bg-purple-600/90 backdrop-blur-md rounded-full text-xs text-white font-medium mb-2 inline-block">
                                            {category}
                                        </span>
                                        <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
                                            {name}
                                        </h2>
                                    </div>
                                </div>
                            )}

                            {/* Header Content (if no image, fallback) - logic handled by CSS above mostly but let's ensure Close button exists if no image */}
                            {!imageSrc && (
                                <div className="p-6 md:p-8 flex justify-between items-start border-b border-theme">
                                    <div>
                                        <span className="text-purple-500 font-medium text-sm">{category}</span>
                                        <h2 className="text-3xl font-bold gradient-text">{name}</h2>
                                    </div>
                                    <button onClick={onClose} className="p-2 text-muted hover:bg-surface-2 rounded-full">
                                        <X size={24} />
                                    </button>
                                </div>
                            )}

                            {/* Scrollable Content */}
                            <div className="overflow-y-auto custom-scrollbar p-6 md:p-8 bg-theme flex-1">
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="show"
                                    className="space-y-10"
                                >
                                    {/* Descriptions */}
                                    <motion.div variants={itemVariants} className="space-y-4">
                                        <p className="text-xl text-theme font-medium leading-relaxed">
                                            {desc}
                                        </p>
                                        {extendedDesc && (
                                            <p className="text-muted leading-relaxed">
                                                {extendedDesc}
                                            </p>
                                        )}
                                    </motion.div>

                                    {/* Results Metrics */}
                                    {results.length > 0 && (
                                        <motion.div variants={itemVariants}>
                                            <div className="flex items-center gap-2 mb-4">
                                                <Trophy className="text-amber-500" size={20} />
                                                <h3 className="text-lg font-bold text-theme">Key Results</h3>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                {results.map((result, idx) => (
                                                    <div key={idx} className="bg-surface rounded-xl p-4 border border-theme hover:border-purple-500/50 transition-colors">
                                                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1">
                                                            {/* Try to extract number/symbol if possible, else just render text */}
                                                            {result.split(' ')[0]}
                                                        </div>
                                                        <div className="text-sm text-muted font-medium">
                                                            {/* The rest of the string */}
                                                            {result.split(' ').slice(1).join(' ')}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Tech Stack */}
                                    {techStack.length > 0 && (
                                        <motion.div variants={itemVariants}>
                                            <div className="flex items-center gap-2 mb-4">
                                                <Code2 className="text-blue-500" size={20} />
                                                <h3 className="text-lg font-bold text-theme">Technologies</h3>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {techStack.map((tech, idx) => (
                                                    <span key={idx} className="px-3 py-1.5 bg-surface-2 text-muted rounded-lg text-sm font-mono border border-theme/50">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Footer Actions */}
                                    <motion.div variants={itemVariants} className="pt-8 flex justify-end">
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-theme border border-purple-500 text-purple-500 font-bold hover:bg-purple-500 hover:text-white transition-all shadow-lg shadow-purple-900/20"
                                        >
                                            Visit Live Project <ExternalLink size={18} />
                                        </a>
                                    </motion.div>

                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default PortfolioModal;
