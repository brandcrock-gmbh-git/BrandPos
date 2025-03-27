import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";

// Define the next-intl middleware
const intlMiddleware = createMiddleware({
  locales: ["en", "de"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/plans": { en: "/plans", de: "/plant" },
    "/features": { en: "/features", de: "/merkmale" },
    "/integrations": { en: "/integrations", de: "/Integrationen" },
    "/integrations/integrations-pos-system": {
      en: "/integrations/integrations-pos-system",
      de: "/integrationen/integrationen-pos-system",
    },
    "/integrations/integrations-accounting": {
      en: "/integrations/integrations-accounting",
      de: "/integrationen/integrationen-buchhaltung",
    },
    "/resources": { en: "/resources", de: "/ressourcen" },
    "/faq": { en: "/faq", de: "/anfrage" },
    "/about-brandpos": { en: "/about-brandpos", de: "/ueber-brandpos" },
    "/contact": { en: "/contact", de: "/kontakt" },
    "/data-protection": { en: "/data-protection", de: "/datenschutzrichtlinie" },
    "/privacy-policy": { en: "/privacy-policy", de: "/datenschutz" },
    "/terms-and-conditions": { en: "/terms-and-conditions", de: "/bedingungen-und-konditionen" },
    "/resources/the-rise-of-biometric-payments-what-it-means-for-pos-security": { en: "/resources/the-rise-of-biometric-payments-what-it-means-for-pos-security", de: "/ressourcen/der-anstieg-biometrischer-zahlungen-was-es-fuer-die-pos-sicherheit-bedeutet",},
    "/resources/why-subscription-based-pos-software-is-gaining-popularity-in-2025": { en: "/resources/why-subscription-based-pos-software-is-gaining-popularity-in-2025", de: "/ressourcen/warum-abonnementbasierte-pos-software-im-jahr-2025-an-beliebtheit-gewinnt"},
    "/resources/softpos-vs-traditional-pos-which-one-suits-your-business-in-2025": { en: "/resources/softpos-vs-traditional-pos-which-one-suits-your-business-in-2025", de: "/ressourcen/softpos-vs-traditionelle-pos-welches-passt-zu-Ihrem-Geschäft-in-2025"},
    "/resources/qr-code-payments-the-future-of-cashless-transactions-for-retailers": { en: "/resources/qr-code-payments-the-future-of-cashless-transactions-for-retailers", de: "/ressourcen/qr-code-payments-die-zukunft-der-bargeldlosen-transaktionen-für-einzelhändler"},
    "/resources/how-softpos-is-redefining-contactless-payments-for-smes": { en: "/resources/how-softpos-is-redefining-contactless-payments-for-smes", de: "/ressourcen/wie-softpos-den-kontaktlosen-zahlungsverkehr-für-den-mes-neu-definiert"},
    "/resources/how-ai-powered-pos-systems-are-boosting-sales-and-customer-experience": { en: "/resources/how-ai-powered-pos-systems-are-boosting-sales-and-customer-experience", de: "/ressourcen/wie-ki-gesteuerte-pos-systeme-den-umsatz-und-das-kundenerlebnis-steigern"},
  },
});

// Combine the two middleware functions
export function middleware(req: NextRequest) {
  let response = intlMiddleware(req); // Run the next-intl middleware

  // const regionCookie = req.cookies.get("region");
  // if (!regionCookie) {
  //   response.headers.set("x-region-set", "false");
  // } else {
  //   response.headers.set("x-region-set", "true");
  // }

  return response;
}

// Ensure middleware applies to localized paths
export const config = {
  matcher: ["/", "/(de|en)/:path*"],
};
