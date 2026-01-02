import useLanguageStore from "../store/languageStore";
import clsx from "clsx";
import { motion } from "framer-motion";

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { currentLanguage, setLanguage } = useLanguageStore();

  return (
    <div
      className={clsx(
        "relative flex items-center glass rounded-full p-1",
        className
      )}
    >
      <div className="relative z-10 flex text-xs font-bold">
        <button
          onClick={() => setLanguage("en")}
          className={clsx(
            "px-3 py-1.5 rounded-full transition-colors relative",
            currentLanguage === "en"
              ? "text-white"
              : "text-subtle hover:text-theme hover:cursor-pointer"
          )}
        >
          EN
          {currentLanguage === "en" && (
            <motion.div
              layoutId="lang-active"
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full -z-10"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
        </button>
        <button
          onClick={() => setLanguage("es")}
          className={clsx(
            "px-3 py-1.5 rounded-full transition-colors relative",
            currentLanguage === "es"
              ? "text-white"
              : "text-subtle hover:text-theme hover:cursor-pointer"
          )}
        >
          ES
          {currentLanguage === "es" && (
            <motion.div
              layoutId="lang-active"
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full -z-10"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
