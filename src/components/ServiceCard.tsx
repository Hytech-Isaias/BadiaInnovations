import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import clsx from "clsx";

interface ServiceCardProps {
  icon: ReactNode;
  name: string;
  description: string;
  features: string[];
  accentColor?: "primary" | "secondary" | "accent";
}

const ServiceCard = ({
  icon,
  name,
  description,
  features,
  accentColor = "primary",
}: ServiceCardProps) => {
  const accentClasses = {
    primary: "from-purple-600 to-purple-500",
    secondary: "from-purple-500 to-purple-400",
    accent: "from-purple-700 to-purple-600",
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="relative group h-full"
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      <div className="relative glass rounded-2xl p-8 h-full flex flex-col card-hover">
        {/* Icon with animated background */}
        <div className="relative mb-6">
          <div
            className={clsx(
              "w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center",
              accentClasses[accentColor]
            )}
          >
            {icon}
          </div>
          <div
            className={clsx(
              "absolute inset-0 w-14 h-14 rounded-xl bg-gradient-to-br opacity-50 blur-xl group-hover:opacity-80 transition-opacity",
              accentClasses[accentColor]
            )}
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-theme mb-3">{name}</h3>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-xs text-muted glass-light rounded-lg px-3 py-2"
            >
              <Check size={12} className="text-purple-500 flex-shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
