/**
 * Google Analytics 4 (GA4) Event Tracking Helper
 * Giúp theo dõi các chuyển đổi quan trọng: Gọi hotline, Nhắn Zalo, Điền form báo giá, Xem bản đồ.
 */

export const GA_TRACKING_ID = 'G-GBEYDZ8SMF';

export const trackEvent = (action: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, params);
  }
};

/** Theo dõi khi khách bấm Gọi Hotline */
export const trackPhoneCall = (source: string = 'general') => {
  trackEvent('contact_phone_call', {
    event_category: 'Engagement',
    event_label: source,
  });
};

/** Theo dõi khi khách bấm Nhắn Zalo */
export const trackZaloClick = (source: string = 'general') => {
  trackEvent('contact_zalo_chat', {
    event_category: 'Engagement',
    event_label: source,
  });
};

/** Theo dõi khi khách gửi form nhận báo giá thành công */
export const trackLeadSubmit = (riceType: string, quantityKg: number) => {
  trackEvent('generate_lead', {
    event_category: 'Conversion',
    rice_type: riceType,
    quantity_kg: quantityKg,
    value: quantityKg,
  });
};

/** Theo dõi khi khách bấm xem bản đồ Google Maps */
export const trackMapClick = (branchName: string) => {
  trackEvent('view_location_map', {
    event_category: 'Engagement',
    branch: branchName,
  });
};
