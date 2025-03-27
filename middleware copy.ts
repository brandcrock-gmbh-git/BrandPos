import createMiddleware from "next-intl/middleware";


export default createMiddleware({
  locales: ["en", "de"],
  defaultLocale: "en",
  pathnames: {
    '/': '/',
    '/plans': {
      en: '/plans',
      de: '/plant'
    },
    '/features': {
      en: '/features',
      de: '/merkmale'
    },
    '/integrations': {
      en: '/integrations',
      de: '/Integrationen'
    },
    '/integrations/integrations-pos-system': {
      en: '/integrations/integrations-pos-system',
      de: '/integrationen/integrationen-pos-system'
    },
    '/integrations/integrations-accounting': {
      en: '/integrations/integrations-accounting',
      de: '/integrationen/integrationen-buchhaltung'
    },
    '/resources': {
      en: '/resources',
      de: '/ressourcen'
    },
    '/faq': {
      en: '/faq',
      de: '/anfrage'
    },
    '/about-us': {
      en: '/about-us',
      de: '/über-uns'
    },
    '/contact': {
      en: '/contact',
      de: '/kontakt'
    },
    '/resources/how-to-create-website': {
      en: '/resources/how-to-create-website',
      de: '/resourcen/wie-erstelle-ich-eine-website'
    },
    '/resources/how-to-create-website-one': {
      en: '/resources/how-to-create-website-one',
      de: '/resourcen/wie-erstelle-ich-eine-website-nach-Plan'
    },
    
  }
});

export const config = {
  matcher: ["/", "/(de|en)/:path*"],
};




