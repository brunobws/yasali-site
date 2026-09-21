export type PublicationStatus = 'starter' | 'ready';

export interface OrganizationSchema {
  type: 'Organization' | 'LocalBusiness' | 'ProfessionalService';
  name: string;
  logo?: string;
  sameAs?: string[];
}

export interface PublicSiteConfig {
  publicationStatus: PublicationStatus;
  language: string;
  locale: string;
  defaultTitle: string;
  defaultDescription: string;
  siteUrl?: string;
  defaultOpenGraphImage?: string;
  defaultOpenGraphImageAlt?: string;
  publicPaths: string[];
  organization?: OrganizationSchema;
  analytics: AnalyticsConfig;
}

export interface AnalyticsConfig {
  /** Só ative depois de confirmar plataformas, IDs e consentimento. */
  enabled: boolean;
  consentRequired: boolean;
  ga4MeasurementId?: string;
  metaPixelId?: string;
  googleAdsId?: string;
  privacyPolicyPath?: string;
}

// Esta é a única fonte técnica de URLs e metadados públicos do cliente.
// Só altere `publicationStatus` para `ready` depois de confirmar domínio,
// imagem de compartilhamento e caminhos publicáveis em client/ e planning/.
export const siteConfig: PublicSiteConfig = {
  publicationStatus: 'starter',
  language: 'pt-BR',
  locale: 'pt_BR',
  defaultTitle: 'Projeto em preparação',
  defaultDescription: 'Base técnica ainda não configurada para publicação.',
  siteUrl: undefined,
  defaultOpenGraphImage: undefined,
  defaultOpenGraphImageAlt: undefined,
  publicPaths: [],
  organization: undefined,
  analytics: {
    enabled: false,
    consentRequired: true,
    ga4MeasurementId: undefined,
    metaPixelId: undefined,
    googleAdsId: undefined,
    privacyPolicyPath: undefined,
  },
};
