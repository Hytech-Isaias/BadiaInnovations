import type { Variants } from 'framer-motion';

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const textReveal: Variants = {
  hidden: { y: '100%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const slideInLeft: Variants = {
  hidden: { x: -60, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const slideInRight: Variants = {
  hidden: { x: 60, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const parallax: Variants = {
  hidden: {
    scale: 1.15,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
    },
  },
};

export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export const hoverGlow = {
  rest: { 
    boxShadow: '0 0 0 rgba(99, 102, 241, 0)' 
  },
  hover: {
    boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)',
    transition: { duration: 0.3 },
  },
};

export const float: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const pulse: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const gradientShift: Variants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};
