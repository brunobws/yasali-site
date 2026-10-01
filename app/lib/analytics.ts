export const analyticsConfig = {
  ga4MeasurementId: import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim() ?? "",
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID?.trim() ?? "",
  googleAdsId: import.meta.env.VITE_GOOGLE_ADS_ID?.trim() ?? "",
} as const;

export const analyticsEnabled = Object.values(analyticsConfig).some(Boolean);

export type AnalyticsEventName =
  | "cta_primary"
  | "whatsapp_click"
  | "catalog_open"
  | "decants_open"
  | "body_splash_open"
  | "product_open"
  | "instagram_click";
