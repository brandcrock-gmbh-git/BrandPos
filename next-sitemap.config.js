module.exports = {
  siteUrl: "https://brand-pos.vercel.app", // Base URL of your site
  generateRobotsTxt: true, // Enable robots.txt generation
  changefreq: "daily", // Default change frequency
  priority: 0.8, // Default priority
  generateIndexSitemap: false, // Prevent sitemap index generation
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://brand-pos.vercel.app/sitemap.xml", // Link to your sitemap
    ],
    policies: [
      {
        userAgent: "*", // Target all crawlers
        disallow: "/", // Disallow all pages
      },
    ],
  },
  alternateRefs: [
    
    {
      href: "https://brand-pos.vercel.app/en",
      hreflang: "en",
    },
    {
      href: "https://brand-pos.vercel.app/de",
      hreflang: "de",
    },
    {
      href: "https://brand-pos.vercel.app/en/plans",
      hreflang: "en",
    },
    {
      href: "https://brand-pos.vercel.app/de/plant",
      hreflang: "de",
    },
    {
      href: "https://brand-pos.vercel.app/en/price-features",
      hreflang: "en",
    },
    {
      href: "https://brand-pos.vercel.app/de/merkmale",
      hreflang: "de",
    },
    {
      href: "https://brand-pos.vercel.app/en/integrations",
      hreflang: "en",
    },
    {
      href: "https://brand-pos.vercel.app/de/integrationen",
      hreflang: "de",
    },
    {
      href: "https://brand-pos.vercel.app/en/integrations/integrations-pos-system",
      hreflang: "en",
    },
    {
      href: "https://brand-pos.vercel.app/de/integrationen/integrationen-pos-system",
      hreflang: "de",
    },
    {
      href: "https://brand-pos.vercel.app/en/integrations/integrations-accounting",
      hreflang: "en",
    },
    {
      href: "https://brand-pos.vercel.app/de/integrationen/integrationen-buchhaltung",
      hreflang: "de",
    },
    {
      href: "https://brand-pos.vercel.app/en/resources",
      hreflang: "en",
    },
    {
      href: "https://brand-pos.vercel.app/de/ressourcen",
      hreflang: "de",
    },
    {
      href: "https://brand-pos.vercel.app/en/faq",
      hreflang: "en",
    },
    {
      href: "https://brand-pos.vercel.app/de/anfrage",
      hreflang: "de",
    },
    {
      href: "https://brand-pos.vercel.app/en/data-protection",
      hreflang: "en",
    },
    {
      href: "https://brand-pos.vercel.app/de/datenschutzrichtlinie",
      hreflang: "de",
    },
    {
      href: "https://brand-pos.vercel.app/en/privacy-policy",
      hreflang: "en",
    },
    {
      href: "https://brand-pos.vercel.app/de/datenschutz",
      hreflang: "de",
    },
    {
      href: "https://brand-pos.vercel.app/en/terms-and-conditions",
      hreflang: "en",
    },
    {
      href: "https://brand-pos.vercel.app/de/bedingungen-und-konditionen",
      hreflang: "de",
    },

    {
      href: "https://brand-pos.vercel.app/en/resources/the-rise-of-biometric-payments-what-it-means-for-pos-security",
      hreflang: "en",
    },
    {
      href: "https://brand-pos.vercel.app/de/ressourcen/der-anstieg-biometrischer-zahlungen-was-es-fuer-die-pos-sicherheit-bedeutet",
      hreflang: "de",
    },

    {
      href: "https://brand-pos.vercel.app/en/resources/why-subscription-based-pos-software-is-gaining-popularity-in-2025",
      hreflang: "en",
    },
    {
      href: "https://brand-pos.vercel.app/de/ressourcen/warum-abonnementbasierte-pos-software-im-jahr-2025-an-beliebtheit-gewinnt",
      hreflang: "de",
    },

    {
      href: "https://brand-pos.vercel.app/en/resources/softpos-vs-traditional-pos-which-one-suits-your-business-in-2025",
      hreflang: "en",
    },
    {
      href: "https://brand-pos.vercel.app/de/ressourcen/softpos-vs-traditionelle-pos-welches-passt-zu-Ihrem-Geschäft-in-2025",
      hreflang: "de",
    },

    {
      href: "https://brand-pos.vercel.app/en/resources/qr-code-payments-the-future-of-cashless-transactions-for-retailers",
      hreflang: "en",
    },
    {
      href: "https://brand-pos.vercel.app/de/ressourcen/qr-code-payments-die-zukunft-der-bargeldlosen-transaktionen-für-einzelhändler",
      hreflang: "de",
    },

    {
      href: "https://brand-pos.vercel.app/en/resources/how-softpos-is-redefining-contactless-payments-for-smes",
      hreflang: "en",
    },
    {
      href: "https://brand-pos.vercel.app/de/ressourcen/wie-softpos-den-kontaktlosen-zahlungsverkehr-für-den-mes-neu-definiert",
      hreflang: "de",
    },

    {
      href: "https://brand-pos.vercel.app/en/resources/how-ai-powered-pos-systems-are-boosting-sales-and-customer-experience",
      hreflang: "en",
    },
    {
      href: "https://brand-pos.vercel.app/de/ressourcen/wie-ki-gesteuerte-pos-systeme-den-umsatz-und-das-kundenerlebnis-steigern",
      hreflang: "de",
    },
  ],
  additionalPaths: async (config) => [
    { loc: "/en/", changefreq: "monthly", priority: 1 },
    { loc: "/de/", changefreq: "monthly", priority: 1 },
    { loc: "/en/plans", changefreq: "monthly", priority: 1 },
    { loc: "/de/plant", changefreq: "monthly", priority: 1 },
    { loc: "/en/features", changefreq: "monthly", priority: 0.8 },
    { loc: "/de/merkmale", changefreq: "monthly", priority: 0.8 },
    { loc: "/en/integrations", changefreq: "monthly", priority: 0.8 },
    { loc: "/de/integrationen", changefreq: "monthly", priority: 0.8 },
    {
      loc: "/en/integrations/integrations-pos-system",
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: "/de/integrationen/integrationen-pos-system",
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: "/en/integrations/integrations-accounting",
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: "/de/integrationen/integrationen-buchhaltung",
      changefreq: "monthly",
      priority: 0.8,
    },
    { loc: "/en/resources", changefreq: "monthly", priority: 0.8 },
    { loc: "/de/ressourcen", changefreq: "monthly", priority: 0.8 },
    { loc: "/en/faq", changefreq: "monthly", priority: 0.8 },
    { loc: "/de/anfrage", changefreq: "monthly", priority: 0.8 },
    { loc: "/en/privacy-policy", changefreq: "monthly", priority: 0.8 },
    { loc: "/de/datenschutzrichtlinie", changefreq: "monthly", priority: 0.8 },
    { loc: "/en/data-protection", changefreq: "monthly", priority: 0.8 },
    { loc: "/de/datenschutz", changefreq: "monthly", priority: 0.8 },
    { loc: "/en/terms-and-conditions", changefreq: "monthly", priority: 0.8 },
    {
      loc: "/de/bedingungen-und-konditionen",
      changefreq: "monthly",
      priority: 0.8,
    },

    {
      loc: "/en/resources/the-rise-of-biometric-payments-what-it-means-for-pos-security",
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: "/de/ressourcen/der-anstieg-biometrischer-zahlungen-was-es-fuer-die-pos-sicherheit-bedeutet",
      changefreq: "monthly",
      priority: 0.8,
    },

    {
      loc: "/en/resources/why-subscription-based-pos-software-is-gaining-popularity-in-2025",
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: "/de/ressourcen/warum-abonnementbasierte-pos-software-im-jahr-2025-an-beliebtheit-gewinnt",
      changefreq: "monthly",
      priority: 0.8,
    },

    {
      loc: "/en/resources/softpos-vs-traditional-pos-which-one-suits-your-business-in-2025",
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: "/de/ressourcen/softpos-vs-traditionelle-pos-welches-passt-zu-Ihrem-geschäft-in-2025",
      changefreq: "monthly",
      priority: 0.8,
    },

    {
      loc: "/en/resources/qr-code-payments-the-future-of-cashless-transactions-for-retailers",
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: "/de/ressourcen/qr-code-payments-die-zukunft-der-bargeldlosen-transaktionen-für-einzelhändler",
      changefreq: "monthly",
      priority: 0.8,
    },

    {
      loc: "/en/resources/how-softpos-is-redefining-contactless-payments-for-smes",
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: "/de/ressourcen/wie-softpos-den-kontaktlosen-zahlungsverkehr-für-den-mes-neu-definiert",
      changefreq: "monthly",
      priority: 0.8,
    },

    {
      loc: "/en/resources/how-ai-powered-pos-systems-are-boosting-sales-and-customer-experience",
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: "/de/ressourcen/wie-ki-gesteuerte-pos-systeme-den-umsatz-und-das-kundenerlebnis-steigern",
      changefreq: "monthly",
      priority: 0.8,
    },
  ],
};
