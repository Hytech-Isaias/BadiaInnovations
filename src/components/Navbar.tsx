import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import useThemeStore from "../store/themeStore";
import BlackLogo from "../assets/images/BadiaDevelopers-02.png";
import WhiteLogo from "../assets/images/BadiaDevelopers-06.png";

const Navbar = () => {
  const { t } = useTranslation();
  const { theme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.products"), path: "#products" },
    { name: t("nav.services"), path: "#services" },
    { name: t("nav.contact"), path: "#contact" },
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={clsx(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled
          ? "glass py-3 shadow-lg shadow-black/10"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={theme === "dark" ? WhiteLogo : BlackLogo}
            alt="Badia Developers"
            className="w-28 md:w-36 lg:w-42 h-auto"
            loading="lazy"
            decoding="async"
          />
          {/* <span className="font-bold text-lg hidden sm:block">
            <span className="text-theme">Badia </span>
            <span className="gradient-text">Innovations</span>
          </span> */}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavClick(link.path)}
              className="text-sm font-medium transition-colors relative group text-muted hover:text-theme"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-6 py-2.5 rounded-full font-medium text-sm overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500" />
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative text-white">{t("nav.contact")}</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="p-2 text-theme"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full glass md:hidden overflow-hidden"
          >
            <div className="flex flex-col py-6 px-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => {
                    handleNavClick(link.path);
                    setIsOpen(false);
                  }}
                  className="text-lg font-medium text-muted hover:text-theme text-left transition-colors"
                >
                  {link.name}
                </button>
              ))}

              <div className="flex justify-start py-2">
                <LanguageSwitcher />
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                  setIsOpen(false);
                }}
                className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-3 rounded-full text-center font-medium"
              >
                {t("nav.contact")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
