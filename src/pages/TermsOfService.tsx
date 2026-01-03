import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FileText, CheckCircle, XCircle, Scale, AlertTriangle, CreditCard, RefreshCw, Mail, Users2 } from "lucide-react";

const TermsOfService = () => {
  const { t, i18n } = useTranslation();

  const sections = [
    {
      icon: CheckCircle,
      title: t("terms.sections.acceptance.title"),
      content: t("terms.sections.acceptance.items", { returnObjects: true }) as string[],
    },
    {
      icon: Users2,
      title: t("terms.sections.accounts.title"),
      content: t("terms.sections.accounts.items", { returnObjects: true }) as string[],
    },
    {
      icon: Scale,
      title: t("terms.sections.acceptable.title"),
      content: t("terms.sections.acceptable.items", { returnObjects: true }) as string[],
    },
    {
      icon: FileText,
      title: t("terms.sections.ip.title"),
      content: t("terms.sections.ip.items", { returnObjects: true }) as string[],
    },
    {
      icon: CreditCard,
      title: t("terms.sections.payments.title"),
      content: t("terms.sections.payments.items", { returnObjects: true }) as string[],
    },
    {
      icon: RefreshCw,
      title: t("terms.sections.free.title"),
      content: t("terms.sections.free.items", { returnObjects: true }) as string[],
    },
    {
      icon: AlertTriangle,
      title: t("terms.sections.disclaimers.title"),
      content: t("terms.sections.disclaimers.items", { returnObjects: true }) as string[],
    },
    {
      icon: XCircle,
      title: t("terms.sections.termination.title"),
      content: t("terms.sections.termination.items", { returnObjects: true }) as string[],
    },
  ];

  const additionalSections = [
    {
      title: t("terms.additional.thirdParty.title"),
      content: t("terms.additional.thirdParty.content"),
    },
    {
      title: t("terms.additional.advertising.title"),
      content: t("terms.additional.advertising.content"),
    },
    {
      title: t("terms.additional.privacy.title"),
      content: t("terms.additional.privacy.content"),
    },
    {
      title: t("terms.additional.compliance.title"),
      content: t("terms.additional.compliance.content"),
    },
    {
      title: t("terms.additional.export.title"),
      content: t("terms.additional.export.content"),
    },
    {
      title: t("terms.additional.indemnification.title"),
      content: t("terms.additional.indemnification.content"),
    },
    {
      title: t("terms.additional.governing.title"),
      content: t("terms.additional.governing.content"),
    },
    {
      title: t("terms.additional.severability.title"),
      content: t("terms.additional.severability.content"),
    },
    {
      title: t("terms.additional.entire.title"),
      content: t("terms.additional.entire.content"),
    },
    {
      title: t("terms.additional.waiver.title"),
      content: t("terms.additional.waiver.content"),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("terms.title")} | Badia Innovations</title>
        <meta
          name="description"
          content={t("terms.intro.p1")}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://badiainnovations.dev/${i18n.language}/terms-of-service`} />
      </Helmet>

      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 mb-6">
              <FileText className="text-purple-500" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t("terms.title")}
            </h1>
            <p className="text-muted text-lg">
              {t("terms.lastUpdated")}
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass p-8 rounded-2xl mb-8"
          >
            <p className="text-lg leading-relaxed text-theme mb-4">
              {t("terms.intro.p1")}
            </p>
            <p className="text-muted leading-relaxed">
              {t("terms.intro.p2")}
            </p>
          </motion.div>

          {/* Main Sections */}
          <div className="space-y-6 mb-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                className="glass p-8 rounded-2xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                    <section.icon className="text-purple-500" size={24} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-theme mb-4">
                      {section.title}
                    </h2>
                    <ul className="space-y-3">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="text-muted leading-relaxed flex gap-3">
                          <span className="text-purple-500 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="space-y-6 mb-12">
            {additionalSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                className="glass p-8 rounded-2xl"
              >
                <h2 className="text-2xl font-bold text-theme mb-4">
                  {section.title}
                </h2>
                <p className="text-muted leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass p-8 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                <Mail className="text-purple-500" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-theme mb-4">
                  {t("terms.contact.title")}
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  {t("terms.contact.description")}
                </p>
                <div className="space-y-2 text-muted">
                  <p>
                    <strong className="text-theme">{t("terms.contact.email")}:</strong>{" "}
                    <a
                      href={`mailto:${t("terms.contact.emailAddress")}`}
                      className="text-purple-500 hover:underline"
                    >
                      {t("terms.contact.emailAddress")}
                    </a>
                  </p>
                  <p>
                    <strong className="text-theme">{t("terms.contact.support")}:</strong>{" "}
                    <a
                      href={`mailto:${t("terms.contact.supportAddress")}`}
                      className="text-purple-500 hover:underline"
                    >
                      {t("terms.contact.supportAddress")}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Updates Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 p-6 rounded-xl bg-amber-500/10 border border-amber-500/20"
          >
            <p className="text-sm text-muted">
              <strong className="text-theme">{t("terms.updates.title")}</strong> {t("terms.updates.content")}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
