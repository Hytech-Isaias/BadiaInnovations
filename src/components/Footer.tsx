import { Mail, Linkedin, MapPin, ArrowUpRight, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import useThemeStore from "../store/themeStore";
import clsx from "clsx";

const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useThemeStore();

  const currentYear = new Date().getFullYear();

  const products = [
    { name: t("footer.productsList.nominal"), href: "https://nominalrd.com" },
    {
      name: t("footer.productsList.salaryCalc"),
      href: "https://tools.nominalrd.com/es/salary-calculator",
    },
    {
      name: t("footer.productsList.leavesCalc"),
      href: "https://tools.nominalrd.com/leaves-calculator",
    },
  ];

  const services = [
    { name: t("footer.servicesList.landing") },
    { name: t("footer.servicesList.business") },
    { name: t("footer.servicesList.ecommerce") },
    { name: t("footer.servicesList.custom") },
  ];

  return (
    <footer className="relative pt-20 pb-8 border-t border-theme bg-surface overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            theme === "dark"
              ? "rgba(131, 66, 229, 0.03)"
              : "rgba(131, 66, 229, 0.02)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Badia Innovations"
                className={clsx(
                  "h-10 w-auto",
                  theme === "dark" && "brightness-0 invert"
                )}
              />
              <span className="font-bold text-lg">
                <span className="text-theme">Badia </span>
                <span className="gradient-text">Innovations</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              {t("footer.description")}
            </p>
            <div className="flex space-x-3">
              <motion.a
                href="https://www.linkedin.com/in/isaias-badia-26a2571b4/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-muted hover:text-purple-500 hover:bg-purple-500/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="mailto:support@badiainnovations.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-muted hover:text-purple-500 hover:bg-purple-500/10 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-semibold text-theme mb-6 text-sm uppercase tracking-wider">
              {t("footer.products")}
            </h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-purple-500 transition-colors duration-300 flex items-center gap-1 group text-sm"
                  >
                    {product.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-theme mb-6 text-sm uppercase tracking-wider">
              {t("footer.services")}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <span className="text-muted text-sm">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-theme mb-6 text-sm uppercase tracking-wider">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-4 text-sm text-muted">
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 glass rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-purple-500" />
                </div>
                <a
                  href="mailto:support@badiainnovations.com"
                  className="hover:text-purple-500 transition-colors duration-300 text-sm"
                >
                  support@badiainnovations.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 glass rounded-lg flex items-center justify-center flex-shrink-0">
                  <Linkedin size={14} className="text-purple-500" />
                </div>
                <a
                  href="https://www.linkedin.com/in/isaias-badia-26a2571b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-500 transition-colors duration-300"
                >
                  Isaias Badia
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-8 h-8 glass rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-purple-500" />
                </div>
                <span>{t("footer.location")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-theme pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p className="flex items-center gap-1">
            &copy; {currentYear} Badia Innovations. {t("footer.madeWith")}
            <Heart size={12} className="text-purple-500 fill-purple-500" />
            {t("footer.in")} {t("footer.location")}
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-purple-500 transition-colors duration-300"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="#"
              className="hover:text-purple-500 transition-colors duration-300"
            >
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
