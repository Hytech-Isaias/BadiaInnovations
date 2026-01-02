import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

const GlassCard = ({
  children,
  className,
  hover = true,
  gradient = false,
}: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
      className={clsx(
        "relative rounded-2xl overflow-hidden",
        gradient ? "gradient-border" : "glass",
        className
      )}
    >
      {gradient && <div className="absolute inset-0 bg-brand-surface" />}
      <div className={clsx("relative z-10", gradient && "p-[1px]")}>
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
