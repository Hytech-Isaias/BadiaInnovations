import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import clsx from "clsx";

interface ProductCardProps {
  icon: ReactNode;
  name: string;
  description: string;
  features: string[];
  link?: string;
  cta?: string;
  featured?: boolean;
}

const ProductCard = ({
  icon,
  name,
  description,
  features,
  link,
  cta,
  featured = false,
}: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={clsx(
        "relative group rounded-2xl p-8 h-full flex flex-col card-hover",
        featured
          ? "bg-gradient-to-br from-purple-600/20 to-purple-400/10 border border-purple-500/30"
          : "glass"
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-theme mb-3 group-hover:text-purple-500 transition-colors duration-300">
        {name}
      </h3>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm text-muted"
          >
            <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Check size={12} className="text-purple-400" />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      {link && cta && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-purple-500 hover:text-purple-400 transition-colors group/link"
        >
          {cta}
          <ArrowUpRight
            size={16}
            className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
          />
        </a>
      )}
    </motion.div>
  );
};

export default ProductCard;
