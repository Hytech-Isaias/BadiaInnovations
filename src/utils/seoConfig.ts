// SEO Configuration for Badia Innovations

export const seoConfig = {
  // Primary Keywords (High Competition)
  primaryKeywords: [
    'software development',
    'web development',
    'HR software',
    'payroll system',
    'Dominican Republic',
  ],
  
  // Secondary Keywords (Medium Competition)
  secondaryKeywords: [
    'custom web design',
    'e-commerce development',
    'business websites',
    'landing pages',
    'SaaS applications',
    'salary calculator',
    'NominalRD',
  ],
  
  // Long-tail Keywords (Low Competition - High Conversion)
  longtailKeywords: [
    'HR software Dominican Republic',
    'payroll system DR',
    'desarrollo web republica dominicana',
    'sistema de recursos humanos RD',
    'nomina dominicana',
    'custom web development DR',
    'software empresarial republica dominicana',
    'calculadora de salario RD',
    'web design company Dominican Republic',
    'tech company Dominican Republic',
  ],
  
  // Local SEO Keywords
  localKeywords: [
    'software development company DR',
    'web developers Dominican Republic',
    'IT services Dominican Republic',
    'technology solutions DR',
    'digital transformation Dominican Republic',
  ],
  
  // Competitive Keywords
  competitiveKeywords: [
    'best HR software',
    'affordable web development',
    'professional website design',
    'enterprise software solutions',
    'cloud-based HR system',
  ],
  
  // Spanish Keywords
  spanishKeywords: [
    'desarrollo de software',
    'desarrollo web',
    'diseño web',
    'sistema de nómina',
    'recursos humanos',
    'soluciones digitales',
    'aplicaciones web',
    'comercio electrónico',
    'páginas web empresariales',
    'software empresarial',
  ],
  
  // Business Categories
  categories: [
    'Software Development',
    'Web Development',
    'Human Resources Technology',
    'Payroll Management',
    'E-commerce Solutions',
    'Business Automation',
    'Digital Solutions',
    'SaaS Products',
  ],
  
  // Target Locations
  locations: [
    'Dominican Republic',
    'Santo Domingo',
    'Santiago',
    'La Romana',
    'Puerto Plata',
    'Caribbean',
    'Latin America',
  ],
  
  // Industry-Specific Terms
  industryTerms: [
    'ISR calculation',
    'AFP deductions',
    'SFS deductions',
    'TSS compliance',
    'labor code compliance',
    'employee management',
    'payroll processing',
    'React development',
    'TypeScript development',
    'cloud applications',
  ],
};

// Meta Description Templates
export const metaDescriptions = {
  home: 'Leading software development company in Dominican Republic. NominalRD HR & payroll system, custom web development, e-commerce solutions, and free business tools. Transform your business with innovative digital solutions.',
  products: 'Explore our powerful SaaS applications: NominalRD for HR & payroll management, GymTracker for fitness, and free business tools for Dominican Republic companies.',
  services: 'Professional web development services in Dominican Republic. Custom websites, landing pages, e-commerce platforms, and business applications tailored to your needs.',
  about: 'Badia Innovations is a leading software development company in Dominican Republic, specializing in HR solutions, web development, and innovative digital products.',
  contact: 'Get in touch with Badia Innovations for custom software development, web design, and HR solutions in Dominican Republic. Free consultation available.',
};

// Structured Data Schemas
export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Badia Innovations',
    url: 'https://badiainnovations.dev',
    logo: 'https://badiainnovations.dev/logo.png',
    description: 'Software development company specializing in HR solutions, web development, and SaaS applications in Dominican Republic',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DO',
    },
    sameAs: [
      'https://www.facebook.com/badiainnovations',
      'https://twitter.com/badiainnovations',
      'https://www.linkedin.com/company/badiainnovations',
    ],
  },
  
  softwareApplication: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'NominalRD',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    operatingSystem: 'Web',
    description: 'Complete HR and payroll management system for Dominican Republic businesses',
  },
  
  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Development',
    provider: {
      '@type': 'Organization',
      name: 'Badia Innovations',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Dominican Republic',
    },
    description: 'Professional web development and software solutions for businesses',
  },
};

export default seoConfig;
