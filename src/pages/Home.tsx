import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import BentoProducts from "../components/BentoProducts";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import CTASection from "../components/CTASection";

const Home = () => {
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
      <AboutSection />
      <CTASection />
    </>
  );
};

export default Home;
