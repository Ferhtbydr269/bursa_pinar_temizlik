declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_ADS_ID = "AW-456872467";
export const CONVERSION_ID = "AW-456872467/wsqWCMu_zq4aEJOk7dkB";

export function trackConversion(url?: string) {
  if (typeof window === "undefined" || !window.gtag) return;

  const callback = () => {
    if (url) window.location.href = url;
  };

  window.gtag("event", "conversion", {
    send_to: CONVERSION_ID,
    value: 1.0,
    currency: "TRY",
    event_callback: callback,
  });
}

export function trackPageConversion() {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", "conversion", {
    send_to: CONVERSION_ID,
    value: 1.0,
    currency: "TRY",
  });
}
