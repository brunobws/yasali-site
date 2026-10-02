export const siteUrl = "https://yasali.com.br";
export const siteName = "Yasali Perfumaria";
export const siteDescription = "Perfumes árabes, importados e decants em Sorocaba. Encontre uma fragrância para você com atendimento próximo da Yasali.";
export const instagramUrl = "https://www.instagram.com/yasali.perfumaria/";
export const whatsappNumber = "+5515981744696";
export const socialImageUrl = absoluteUrl("/og.jpg");

export function absoluteUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}

export function createPageMetadata(title: string, description: string, pathname: string) {
  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      title,
      description,
      type: "website",
      url: absoluteUrl(pathname),
      siteName,
      locale: "pt_BR",
      images: [{ url: socialImageUrl, width: 1792, height: 896, alt: "Yasali Perfumaria — perfumes árabes e importados" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImageUrl],
    },
  };
}

export const businessStructuredData = {
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  logo: absoluteUrl("/media/brand/yasali-logo-wordmark-transparent.png"),
  image: absoluteUrl("/og.jpg"),
  description: siteDescription,
  telephone: whatsappNumber,
  areaServed: {
    "@type": "City",
    name: "Sorocaba",
  },
  sameAs: [instagramUrl],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: whatsappNumber,
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: ["Portuguese"],
  },
};

export const websiteStructuredData = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  description: siteDescription,
  inLanguage: "pt-BR",
  publisher: { "@id": `${siteUrl}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/catalogo?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};
