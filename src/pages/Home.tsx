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
        <title>Badia Innovations | Software Development, HR Solutions & Web Design in Dominican Republic</title>
        <meta
          name="description"
          content="Leading software development company in Dominican Republic. NominalRD HR & payroll system, custom web development, e-commerce solutions, and free business tools. Transform your business with innovative digital solutions."
        />
        <meta
          name="keywords"
          content="software development Dominican Republic, web development DR, NominalRD, HR software Dominican Republic, payroll system DR, custom web design, e-commerce development, business websites, landing pages, software solutions, SaaS applications, salary calculator Dominican Republic, nomina RD, sistema de recursos humanos, desarrollo web republica dominicana"
        />
        <link rel="canonical" href="https://badiainnovations.dev/" />
        <meta
          property="og:title"
          content="Badia Innovations | Software Development & HR Solutions in Dominican Republic"
        />
        <meta
          property="og:description"
          content="Leading software development company in Dominican Republic. NominalRD HR & payroll system, custom web development, e-commerce solutions, and free business tools."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://badiainnovations.dev/" />
        <meta property="og:image" content="https://badiainnovations.dev/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Badia Innovations | Software Development & HR Solutions" />
        <meta name="twitter:description" content="Leading software development company in Dominican Republic. NominalRD HR & payroll system, custom web development, e-commerce solutions." />
        <meta name="twitter:image" content="https://badiainnovations.dev/twitter-image.jpg" />
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
