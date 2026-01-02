import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/HeroSection";
import BentoProducts from "../components/BentoProducts";
import ServicesSection from "../components/ServicesSection";
import CTASection from "../components/CTASection";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Badia Innovations | Software Solutions & Web Development</title>
        <meta
          name="description"
          content="Badia Innovations - Creating powerful software applications and custom web solutions. NominalRD HR App, Free Tools, and Custom Web Development."
        />
        <link rel="canonical" href="https://badiainnovations.com/" />
        <meta
          property="og:title"
          content="Badia Innovations | Software Solutions"
        />
        <meta
          property="og:description"
          content="Creating powerful software applications and custom web solutions."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <HeroSection />
      <BentoProducts />
      <ServicesSection />
      <CTASection />
    </>
  );
};

export default Home;
