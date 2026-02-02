import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Send, Linkedin, CheckCircle } from "lucide-react";
import useThemeStore from "../store/themeStore";

const Contact = () => {
  const { t } = useTranslation();
  const { theme } = useThemeStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background decorations */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none opacity-20"
        style={{
          background:
            theme === "dark"
              ? "rgba(131, 66, 229, 0.3)"
              : "rgba(131, 66, 229, 0.1)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-20"
        style={{
          background:
            theme === "dark"
              ? "rgba(56, 189, 248, 0.3)"
              : "rgba(56, 189, 248, 0.1)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-theme mb-6">
            {t("contactPage.title")}
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            {t("contactPage.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0 text-purple-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-theme mb-1">
                    {t("contactPage.info.email")}
                  </h3>
                  <a
                    href="mailto:support@badiainnovations.com"
                    className="text-muted hover:text-purple-500 transition-colors"
                  >
                    support@badiainnovations.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-500">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-theme mb-1">
                    {t("contactPage.info.social")}
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/isaias-badia-26a2571b4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-blue-500 transition-colors"
                  >
                    Isaias Badia
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0 text-green-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-theme mb-1">
                    {t("contactPage.info.location")}
                  </h3>
                  <p className="text-muted">
                    Espaillat, Moca, República Dominicana
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass p-8 md:p-10 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden"
            >
              <div className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-theme ml-1">
                      {t("contactPage.form.name")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-surface/50 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-hidden transition-all text-theme"
                      placeholder="Isaias Badia"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-theme ml-1">
                      {t("contactPage.form.email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-surface/50 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-hidden transition-all text-theme"
                      placeholder="isaias.badia@gmail.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-theme ml-1">
                    {t("contactPage.form.subject")}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface/50 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-hidden transition-all text-theme"
                    placeholder={t("contactPage.form.subject")}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-theme ml-1">
                    {t("contactPage.form.message")}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface/50 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-hidden transition-all text-theme resize-none"
                    placeholder={t("contactPage.form.message")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="w-full py-4 rounded-xl font-bold text-white relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-r from-purple-600 to-indigo-600 transition-opacity duration-300 ${status === "success" ? "opacity-0" : "opacity-100"}`}
                  />
                  <div
                    className={`absolute inset-0 bg-green-500 flex items-center justify-center transition-opacity duration-300 ${status === "success" ? "opacity-100" : "opacity-0"}`}
                  />

                  <span className="relative flex items-center justify-center gap-2">
                    {status === "submitting" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t("contactPage.form.sending")}
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle size={20} />
                        {t("contactPage.form.success")}
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        {t("contactPage.form.submit")}
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
