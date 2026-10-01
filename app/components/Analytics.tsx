"use client";

import { useEffect, useState } from "react";
import { analyticsConfig, analyticsEnabled, type AnalyticsEventName } from "../lib/analytics";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const consentKey = "yasali_analytics_consent";

function loadScript(src: string, id: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function loadProviders() {
  const { ga4MeasurementId, googleAdsId, metaPixelId } = analyticsConfig;

  if (ga4MeasurementId || googleAdsId) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer?.push(args));
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4MeasurementId || googleAdsId)}`, "yasali-gtag-script");
    window.gtag("js", new Date());
    if (ga4MeasurementId) window.gtag("config", ga4MeasurementId, { anonymize_ip: true });
    if (googleAdsId) window.gtag("config", googleAdsId);
  }

  if (metaPixelId) {
    window.fbq = window.fbq || ((...args: unknown[]) => (window.fbq as unknown as { queue?: unknown[] }).queue?.push(args));
    (window.fbq as unknown as { queue?: unknown[] }).queue = (window.fbq as unknown as { queue?: unknown[] }).queue || [];
    loadScript("https://connect.facebook.net/en_US/fbevents.js", "yasali-meta-script");
    window.fbq("init", metaPixelId);
    window.fbq("track", "PageView");
  }
}

function sendEvent(name: AnalyticsEventName, destination: string) {
  const params = { destination, path: window.location.pathname };
  if (analyticsConfig.ga4MeasurementId || analyticsConfig.googleAdsId) window.gtag?.("event", name, params);
  if (analyticsConfig.metaPixelId) window.fbq?.("trackCustom", name, params);
}

function eventForLink(link: HTMLAnchorElement): [AnalyticsEventName, string] | null {
  const href = link.getAttribute("href") ?? "";
  if (href.includes("wa.me")) return ["whatsapp_click", "whatsapp"];
  if (href.includes("instagram.com")) return ["instagram_click", "instagram"];
  if (href === "/catalogo") return ["catalog_open", "catalogo"];
  if (href === "/decants") return ["decants_open", "decants"];
  if (href === "/body-splash") return ["body_splash_open", "body-splash"];
  if (href.startsWith("/produto/")) return ["product_open", "produto"];
  if (link.classList.contains("button-primary")) return ["cta_primary", "primary-cta"];
  return null;
}

export function Analytics() {
  const [consentVisible, setConsentVisible] = useState(analyticsEnabled);

  useEffect(() => {
    if (!analyticsEnabled) return;

    const accepted = window.localStorage.getItem(consentKey) === "accepted";
    if (!accepted) window.setTimeout(() => setConsentVisible(true), 0);
    if (accepted) {
      loadProviders();
      window.setTimeout(() => setConsentVisible(false), 0);
    }

    const handleClick = (event: MouseEvent) => {
      if (window.localStorage.getItem(consentKey) !== "accepted") return;
      const target = event.target instanceof Element ? event.target.closest("a") : null;
      if (!(target instanceof HTMLAnchorElement)) return;
      const analyticsEvent = eventForLink(target);
      if (analyticsEvent) sendEvent(...analyticsEvent);
    };

    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!analyticsEnabled || !consentVisible) return null;

  const accept = () => {
    window.localStorage.setItem(consentKey, "accepted");
    setConsentVisible(false);
    loadProviders();
  };

  const reject = () => {
    window.localStorage.setItem(consentKey, "rejected");
    setConsentVisible(false);
  };

  return (
    <aside className="analytics-consent" aria-labelledby="analytics-consent-title">
      <div className="analytics-consent-card">
        <strong id="analytics-consent-title">Métricas opcionais</strong>
        <p>Usamos métricas para entender a navegação e melhorar o site. Você pode aceitar ou recusar.</p>
        <div className="analytics-consent-actions">
          <button type="button" onClick={accept}>Aceitar métricas</button>
          <button type="button" onClick={reject}>Recusar</button>
        </div>
      </div>
    </aside>
  );
}
