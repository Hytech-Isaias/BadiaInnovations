import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import useThemeStore from "../store/themeStore";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-10 h-10 rounded-full glass flex items-center justify-center overflow-hidden group"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : 180,
          scale: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <Moon size={18} className="text-purple-400" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: theme === "light" ? 0 : -180,
          scale: theme === "light" ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <Sun size={18} className="text-purple-600" />
      </motion.div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
    </motion.button>
  );
};

export default ThemeToggle;
