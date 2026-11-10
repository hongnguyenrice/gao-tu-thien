import { BRAND_INFO, RICE_PRODUCTS, RiceProduct } from './mockData';

/**
 * Cấu hình dùng chung cho toàn site. Mọi địa chỉ / số điện thoại lấy từ BRAND_INFO (mockData.ts)
 * để nội dung, CTA, Zalo và schema luôn đồng bộ — KHÔNG gõ cứng số điện thoại ở nơi khác.
 */
export const SITE_URL = 'https://tuthien.gaosoctrang.com';
export const MAIN_SITE_URL = 'https://gaosoctrang.com';
export const SITE_NAME = 'Gạo Từ Thiện – Vựa Gạo Sóc Trăng';

export const PHONE_DISPLAY = BRAND_INFO.hotlineDisplay;
export const PHONE_TEL = BRAND_INFO.hotline.replace(/\s+/g, '');
export const PHONE_E164 = '+84' + PHONE_TEL.replace(/^0/, '');
export const ZALO_URL = `https://zalo.me/${BRAND_INFO.zalo}`;
export const FACEBOOK_PAGE_URL = 'https://www.facebook.com/profile.php?id=100063985415931';
export const MESSENGER_URL = 'https://m.me/100063985415931';
/** Hiện chỉ có MỘT số: vừa là hotline chính, vừa là Zalo nhận báo giá. */
export const CONTACT_LABEL = `Hotline & Zalo báo giá: ${PHONE_DISPLAY}`;

/** Ngày cập nhật bảng giá hiển thị trên site. TODO: sửa mỗi lần đổi giá trong mockData.ts */
export const PRICE_UPDATED = '09/11/2026';

export const PAGES = [
  { path: '/', label: 'Trang chủ' },
  { path: '/bao-gia-gao-tu-thien/', label: 'Báo giá' },
  { path: '/gao-phat-qua-tu-thien/', label: 'Gạo phát quà' },
  { path: '/gao-cung-duong-chua/', label: 'Cúng dường chùa' },
  { path: '/chon-gao-cho-bep-an-tu-thien/', label: 'Bếp ăn từ thiện' },
  { path: '/quy-cach-dong-bao-va-giao-hang/', label: 'Đóng bao & giao hàng' },
] as const;

export const QUOTE_PATH = '/bao-gia-gao-tu-thien/';
export const QUOTE_FORM_URL = `${QUOTE_PATH}#form-bao-gia`;

/**
 * Thông tin giao hàng. TODO (cần dữ liệu thật): thời gian giao chuẩn và phí giao.
 * Khi có số liệu chính thức, chỉ cần sửa 2 dòng leadTime / fee bên dưới.
 */
export const DELIVERY = {
  leadTime: 'Xác nhận cụ thể khi báo giá, tùy số lượng, quy cách đóng bao và địa điểm giao.',
  fee: 'Báo cụ thể theo địa điểm và số lượng ngay trong báo giá.',
  urgent: 'Chương trình cần gạo gấp: gọi trực tiếp hotline để kho kiểm tra xe và hàng sẵn có.',
};

/** Khu vực giao — suy ra từ các chi nhánh và nhà máy đang có. */
export const DELIVERY_AREAS = [
  ...BRAND_INFO.branches.map((b) => ({ area: b.area, from: b.name, address: b.address })),
  { area: BRAND_INFO.factory.area, from: BRAND_INFO.factory.name, address: BRAND_INFO.factory.address },
];

export const ORDER_STEPS = [
  {
    title: 'Gửi yêu cầu',
    desc: `Điền form "Nhận báo giá", nhắn Zalo hoặc gọi ${PHONE_DISPLAY}: loại gạo, số lượng, quy cách bao, địa điểm và ngày cần hàng.`,
  },
  {
    title: 'Nhận báo giá',
    desc: 'Kho báo đơn giá theo bậc số lượng, phí giao (nếu có) và thời gian giao dự kiến.',
  },
  {
    title: 'Chốt đơn',
    desc: 'Xác nhận loại gạo, số bao, quy cách, người nhận hàng và thông tin xuất hóa đơn VAT nếu cần.',
  },
  {
    title: 'Đóng bao & giao hàng',
    desc: 'Kho đóng bao theo quy cách đã chốt, xe giao từ chi nhánh phù hợp nhất với địa điểm.',
  },
  {
    title: 'Nhận hàng & bàn giao',
    desc: 'Kiểm tra số bao, chất lượng gạo khi nhận; hỗ trợ chụp ảnh / quay video bàn giao khi Quý đoàn cần.',
  },
];

/**
 * Ảnh thực tế (kho, đóng bao, giao hàng). TODO: chép ảnh vào /public/images/thuc-te/ rồi khai báo ở đây.
 * Khu vực ảnh chỉ hiển thị khi mảng này có dữ liệu — không dùng ảnh minh họa stock.
 */
export const REAL_PHOTOS: { src: string; alt: string; caption: string }[] = [];

export const getProduct = (id: string) => RICE_PRODUCTS.find((p) => p.id === id);
export const getProducts = (ids: string[]) =>
  ids.map(getProduct).filter((p): p is RiceProduct => Boolean(p));

/** Đơn giá áp dụng theo số kg (bậc giá trong mockData). */
export const priceFor = (product: RiceProduct, kg: number) => {
  const tier = [...product.tiers].sort((a, b) => b.minKg - a.minKg).find((t) => kg >= t.minKg);
  return tier ? tier.pricePerKg : product.pricePerKg;
};

export const vnd = (n: number) => n.toLocaleString('vi-VN') + ' đ';

export const mapsSearchUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
