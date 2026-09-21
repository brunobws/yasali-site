import type { AnalyticsConfig } from '../config/site';

export const ANALYTICS_EVENT_NAMES = [
  'cta_primary',
  'whatsapp_click',
  'phone_click',
  'form_submit_success',
  'external_destination',
] as const;

export type AnalyticsEventName = (typeof ANALYTICS_EVENT_NAMES)[number];

export function configuredAnalyticsProviders(config: AnalyticsConfig) {
  if (!config.enabled) return [] as const;
  return [
    config.ga4MeasurementId ? 'ga4' : undefined,
    config.metaPixelId ? 'meta' : undefined,
    config.googleAdsId ? 'google-ads' : undefined,
  ].filter(Boolean) as Array<'ga4' | 'meta' | 'google-ads'>;
}

export function hasAnalytics(config: AnalyticsConfig) {
  return configuredAnalyticsProviders(config).length > 0;
}
