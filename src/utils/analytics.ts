// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Log custom events
export const logEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

const GA_ID = import.meta.env.VITE_PUBLIC_GA_MEASUREMENT_ID;

export const logPageView = (path: string) => {
  if (window?.gtag && GA_ID) {
    window.gtag('config', GA_ID, { page_path: path });
  }
};
