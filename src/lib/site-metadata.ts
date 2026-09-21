import { siteConfig, type OrganizationSchema } from '../config/site';

interface PageMetadataInput {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  pathname: string;
}

const isPublished = () => siteConfig.publicationStatus === 'ready';

const siteOrigin = () => {
  if (!isPublished()) return undefined;
  if (!siteConfig.siteUrl) throw new Error('siteConfig.siteUrl é obrigatório para publicação.');

  const url = new URL(siteConfig.siteUrl);
  if (url.protocol !== 'https:') throw new Error('siteConfig.siteUrl precisa usar HTTPS para publicação.');
  return url;
};

const absolutePublicUrl = (value: string, origin: URL) => {
  const url = new URL(value, origin);
  if (url.protocol !== 'https:') throw new Error('URLs públicas precisam usar HTTPS.');
  return url.toString();
};

const assertPublishedConfig = () => {
  const origin = siteOrigin();
  if (!origin) return undefined;
  if (!siteConfig.defaultOpenGraphImage) throw new Error('Uma imagem Open Graph aprovada é obrigatória para publicação.');
  if (!siteConfig.publicPaths.length) throw new Error('siteConfig.publicPaths precisa listar as páginas publicáveis.');
  return origin;
};

export const getPublicSitemapUrls = () => {
  const origin = assertPublishedConfig();
  if (!origin) return [];
  return siteConfig.publicPaths.map((path) => absolutePublicUrl(path, origin));
};

export const getRobotsTxt = () => {
  const origin = assertPublishedConfig();
  if (!origin) return 'User-agent: *\nDisallow: /\n';
  return `User-agent: *\nAllow: /\nSitemap: ${absolutePublicUrl('/sitemap.xml', origin)}\n`;
};

const createOrganizationSchema = (organization: OrganizationSchema, origin: URL) => ({
  '@context': 'https://schema.org',
  '@type': organization.type,
  name: organization.name,
  url: origin.toString(),
  ...(organization.logo ? { logo: absolutePublicUrl(organization.logo, origin) } : {}),
  ...(organization.sameAs?.length ? { sameAs: organization.sameAs } : {}),
});

export const getPageMetadata = ({ title, description, image, imageAlt, noindex = false, pathname }: PageMetadataInput) => {
  const origin = assertPublishedConfig();
  const isPublic = Boolean(origin);
  const chosenImage = image ?? siteConfig.defaultOpenGraphImage;

  return {
    title: title ?? siteConfig.defaultTitle,
    description: description ?? siteConfig.defaultDescription,
    language: siteConfig.language,
    locale: siteConfig.locale,
    noindex: !isPublic || noindex,
    publicationStatus: siteConfig.publicationStatus,
    canonical: origin ? absolutePublicUrl(pathname, origin) : undefined,
    image: origin && chosenImage ? absolutePublicUrl(chosenImage, origin) : undefined,
    imageAlt: imageAlt ?? siteConfig.defaultOpenGraphImageAlt,
    sitemap: origin ? absolutePublicUrl('/sitemap.xml', origin) : undefined,
    organizationSchema: origin && siteConfig.organization ? createOrganizationSchema(siteConfig.organization, origin) : undefined,
  };
};

export const serializeJsonLd = (schema: object) => JSON.stringify(schema).replace(/</g, '\\u003c');
