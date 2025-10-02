import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    features: 'Features',
    pricing: 'Pricing',
    testimonials: 'Testimonials',
    integrations: 'Integrations',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'Smart Email Marketing',
    heroSubtitle: 'Automate, personalize, and scale your email campaigns with AI-powered insights',
    heroCta: 'Start Free Trial',
    heroSecondary: 'Watch Demo',
    
    // Features
    featuresTitle: 'Powerful Features',
    featuresSubtitle: 'Everything you need to succeed',
    automationTitle: 'Smart Automation',
    automationDesc: 'Create sophisticated workflows that respond to customer behavior in real-time',
    personalizationTitle: 'Advanced Personalization',
    personalizationDesc: 'Deliver tailored content that resonates with each subscriber',
    analyticsTitle: 'Deep Analytics',
    analyticsDesc: 'Track performance with comprehensive metrics and actionable insights',
    integrationsTitle: 'Seamless Integrations',
    integrationsDesc: 'Connect with your favorite tools and platforms effortlessly',
    
    // Pricing
    pricingTitle: 'Choose Your Plan',
    pricingSubtitle: 'Flexible pricing for teams of all sizes',
    starter: 'Starter',
    professional: 'Professional',
    enterprise: 'Enterprise',
    perMonth: '/month',
    selectPlan: 'Select Plan',
    upTo: 'Up to',
    subscribers: 'subscribers',
    emailsSent: 'emails/month',
    basicAutomation: 'Basic automation',
    emailSupport: 'Email support',
    advancedAutomation: 'Advanced automation',
    prioritySupport: 'Priority support',
    customIntegrations: 'Custom integrations',
    dedicatedManager: 'Dedicated account manager',
    unlimitedEverything: 'Unlimited everything',
    
    // Testimonials
    testimonialsTitle: 'Loved by Marketing Teams',
    testimonialsSubtitle: 'See what our customers say',
    
    // Contact
    contactTitle: 'Get Started Today',
    contactSubtitle: 'Join thousands of businesses using EmailMassivo',
    nameLabel: 'Full Name',
    emailLabel: 'Work Email',
    companyLabel: 'Company',
    messageLabel: 'Tell us about your needs',
    sendMessage: 'Send Message',
    
    // Footer
    product: 'Product',
    company: 'Company',
    legal: 'Legal',
    about: 'About',
    careers: 'Careers',
    blog: 'Blog',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    allRightsReserved: 'All rights reserved',
  },
  es: {
    // Header
    features: 'Características',
    pricing: 'Precios',
    testimonials: 'Testimonios',
    integrations: 'Integraciones',
    contact: 'Contacto',
    
    // Hero
    heroTitle: 'Email Marketing Inteligente',
    heroSubtitle: 'Automatiza, personaliza y escala tus campañas de email con insights impulsados por IA',
    heroCta: 'Prueba Gratuita',
    heroSecondary: 'Ver Demo',
    
    // Features
    featuresTitle: 'Funciones Poderosas',
    featuresSubtitle: 'Todo lo que necesitas para tener éxito',
    automationTitle: 'Automatización Inteligente',
    automationDesc: 'Crea flujos sofisticados que responden al comportamiento del cliente en tiempo real',
    personalizationTitle: 'Personalización Avanzada',
    personalizationDesc: 'Entrega contenido personalizado que resuena con cada suscriptor',
    analyticsTitle: 'Análisis Profundos',
    analyticsDesc: 'Rastrea el rendimiento con métricas completas e insights accionables',
    integrationsTitle: 'Integraciones Fluidas',
    integrationsDesc: 'Conecta con tus herramientas y plataformas favoritas sin esfuerzo',
    
    // Pricing
    pricingTitle: 'Elige Tu Plan',
    pricingSubtitle: 'Precios flexibles para equipos de todos los tamaños',
    starter: 'Inicial',
    professional: 'Profesional',
    enterprise: 'Empresa',
    perMonth: '/mes',
    selectPlan: 'Seleccionar Plan',
    upTo: 'Hasta',
    subscribers: 'suscriptores',
    emailsSent: 'emails/mes',
    basicAutomation: 'Automatización básica',
    emailSupport: 'Soporte por email',
    advancedAutomation: 'Automatización avanzada',
    prioritySupport: 'Soporte prioritario',
    customIntegrations: 'Integraciones personalizadas',
    dedicatedManager: 'Gerente de cuenta dedicado',
    unlimitedEverything: 'Todo ilimitado',
    
    // Testimonials
    testimonialsTitle: 'Amado por Equipos de Marketing',
    testimonialsSubtitle: 'Mira lo que dicen nuestros clientes',
    
    // Contact
    contactTitle: 'Comienza Hoy',
    contactSubtitle: 'Únete a miles de empresas usando EmailMassivo',
    nameLabel: 'Nombre Completo',
    emailLabel: 'Email de Trabajo',
    companyLabel: 'Empresa',
    messageLabel: 'Cuéntanos sobre tus necesidades',
    sendMessage: 'Enviar Mensaje',
    
    // Footer
    product: 'Producto',
    company: 'Empresa',
    legal: 'Legal',
    about: 'Acerca',
    careers: 'Carreras',
    blog: 'Blog',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    allRightsReserved: 'Todos los derechos reservados',
  },
  pt: {
    // Header
    features: 'Recursos',
    pricing: 'Preços',
    testimonials: 'Depoimentos',
    integrations: 'Integrações',
    contact: 'Contato',
    
    // Hero
    heroTitle: 'Email Marketing Inteligente',
    heroSubtitle: 'Automatize, personalize e escale suas campanhas de email com insights impulsionados por IA',
    heroCta: 'Teste Grátis',
    heroSecondary: 'Ver Demo',
    
    // Features
    featuresTitle: 'Recursos Poderosos',
    featuresSubtitle: 'Tudo que você precisa para ter sucesso',
    automationTitle: 'Automação Inteligente',
    automationDesc: 'Crie fluxos sofisticados que respondem ao comportamento do cliente em tempo real',
    personalizationTitle: 'Personalização Avançada',
    personalizationDesc: 'Entregue conteúdo personalizado que ressoa com cada assinante',
    analyticsTitle: 'Análises Profundas',
    analyticsDesc: 'Acompanhe o desempenho com métricas abrangentes e insights acionáveis',
    integrationsTitle: 'Integrações Perfeitas',
    integrationsDesc: 'Conecte-se com suas ferramentas e plataformas favoritas sem esforço',
    
    // Pricing
    pricingTitle: 'Escolha Seu Plano',
    pricingSubtitle: 'Preços flexíveis para equipes de todos os tamanhos',
    starter: 'Inicial',
    professional: 'Profissional',
    enterprise: 'Empresa',
    perMonth: '/mês',
    selectPlan: 'Selecionar Plano',
    upTo: 'Até',
    subscribers: 'assinantes',
    emailsSent: 'emails/mês',
    basicAutomation: 'Automação básica',
    emailSupport: 'Suporte por email',
    advancedAutomation: 'Automação avançada',
    prioritySupport: 'Suporte prioritário',
    customIntegrations: 'Integrações personalizadas',
    dedicatedManager: 'Gerente de conta dedicado',
    unlimitedEverything: 'Tudo ilimitado',
    
    // Testimonials
    testimonialsTitle: 'Amado por Equipes de Marketing',
    testimonialsSubtitle: 'Veja o que nossos clientes dizem',
    
    // Contact
    contactTitle: 'Comece Hoje',
    contactSubtitle: 'Junte-se a milhares de empresas usando EmailMassivo',
    nameLabel: 'Nome Completo',
    emailLabel: 'Email de Trabalho',
    companyLabel: 'Empresa',
    messageLabel: 'Conte-nos sobre suas necessidades',
    sendMessage: 'Enviar Mensagem',
    
    // Footer
    product: 'Produto',
    company: 'Empresa',
    legal: 'Legal',
    about: 'Sobre',
    careers: 'Carreiras',
    blog: 'Blog',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Serviço',
    allRightsReserved: 'Todos os direitos reservados',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
