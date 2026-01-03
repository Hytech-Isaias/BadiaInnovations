import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Shield, Eye, Cookie, Database, Lock, Users, Globe, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();

  const sections = [
    {
      icon: Database,
      title: t("privacy.sections.collection.title"),
      content: t("privacy.sections.collection.items", { returnObjects: true }) as string[],
    },
    {
      icon: Eye,
      title: t("privacy.sections.usage.title"),
      content: t("privacy.sections.usage.items", { returnObjects: true }) as string[],
    },
    {
      icon: Cookie,
      title: t("privacy.sections.cookies.title"),
      content: t("privacy.sections.cookies.items", { returnObjects: true }) as string[],
    },
    {
      icon: Globe,
      title: t("privacy.sections.thirdParty.title"),
      content: t("privacy.sections.thirdParty.items", { returnObjects: true }) as string[],
    },
    {
      icon: Users,
      title: t("privacy.sections.sharing.title"),
      content: t("privacy.sections.sharing.items", { returnObjects: true }) as string[],
    },
    {
      icon: Lock,
      title: t("privacy.sections.security.title"),
      content: t("privacy.sections.security.items", { returnObjects: true }) as string[],
    },
    {
      icon: Database,
      title: t("privacy.sections.retention.title"),
      content: t("privacy.sections.retention.items", { returnObjects: true }) as string[],
    },
    {
      icon: Shield,
      title: t("privacy.sections.rights.title"),
      content: t("privacy.sections.rights.items", { returnObjects: true }) as string[],
    },
  ];

  const additionalSections = [
    {
      title: t("privacy.additional.children.title"),
      content: t("privacy.additional.children.content"),
    },
    {
      title: t("privacy.additional.international.title"),
      content: t("privacy.additional.international.content"),
    },
    {
      title: t("privacy.additional.ccpa.title"),
      content: t("privacy.additional.ccpa.content"),
    },
    {
      title: t("privacy.additional.gdpr.title"),
      content: t("privacy.additional.gdpr.content"),
    },
    {
      title: t("privacy.additional.googleAds.title"),
      content: t("privacy.additional.googleAds.content"),
    },
    {
      title: t("privacy.additional.doNotTrack.title"),
      content: t("privacy.additional.doNotTrack.content"),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("privacy.title")} | Badia Innovations</title>
        <meta
          name="description"
          content={t("privacy.intro.p1")}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://badiainnovations.dev/${i18n.language}/privacy-policy`} />
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
              <Shield className="text-purple-500" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t("privacy.title")}
            </h1>
            <p className="text-muted text-lg">
              {t("privacy.lastUpdated")}
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
              {t("privacy.intro.p1")}
            </p>
            <p className="text-muted leading-relaxed">
              {t("privacy.intro.p2")}
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
                  <div>
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
                  {t("privacy.contact.title")}
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  {t("privacy.contact.description")}
                </p>
                <div className="space-y-2 text-muted">
                  <p>
                    <strong className="text-theme">{t("privacy.contact.email")}:</strong>{" "}
                    <a
                      href={`mailto:${t("privacy.contact.emailAddress")}`}
                      className="text-purple-500 hover:underline"
                    >
                      {t("privacy.contact.emailAddress")}
                    </a>
                  </p>
                  <p>
                    <strong className="text-theme">{t("privacy.contact.support")}:</strong>{" "}
                    <a
                      href={`mailto:${t("privacy.contact.supportAddress")}`}
                      className="text-purple-500 hover:underline"
                    >
                      {t("privacy.contact.supportAddress")}
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
              <strong className="text-theme">{t("privacy.updates.title")}</strong> {t("privacy.updates.content")}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
