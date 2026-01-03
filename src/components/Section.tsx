import { motion } from "framer-motion";
import type { ReactNode } from "react";
import clsx from "clsx";
import { fadeUp } from "../utils/animations";

interface SectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Section = ({ children, className, delay = 0 }: SectionProps) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
};

export default Section;
