import { BRAND_INFO, RICE_PRODUCTS, RiceProduct } from './mockData';

/**
 * Cấu hình dùng chung cho toàn site. Mọi địa chỉ / số điện thoại lấy từ BRAND_INFO (mockData.ts)
 * để nội dung, CTA, Zalo và schema luôn đồng bộ — KHÔNG gõ cứng số điện thoại ở nơi khác.
 */
export const SITE_URL = 'https://tuthien.gaosoctrang.com';
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
  ...BRAND_INFO.branches.map((b) => ({
    area: b.area,
    from: b.name,
    address: b.address,
    isMain: Boolean(b.isMain),
    roleNote: b.roleNote,
    googleMapsUrl: b.googleMapsUrl,
  })),
  {
    area: BRAND_INFO.factory.area,
    from: BRAND_INFO.factory.name,
    address: BRAND_INFO.factory.address,
    isMain: false,
    roleNote: BRAND_INFO.factory.roleNote,
    googleMapsUrl: undefined,
  },
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

export const MAIN_BRANCH_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.5848209705314!2d106.70452261082477!3d10.91912418919353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7004b311ab3%3A0xd923ae41f79e52d8!2zVuG7sWEgR-G6oW8gU8OzYyBUcsSDbmc!5e0!3m2!1svi!2s!4v1794356110100!5m2!1svi!2s';

export const GOOGLE_MAPS_PLACE_URL = 'https://maps.google.com/?cid=15646541128765690584';

export const mapsSearchUrl = (address: string) => {
  if (address.includes('Lái Thiêu') || address.includes('Bình Dương')) {
    return GOOGLE_MAPS_PLACE_URL;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
};

export const HOME_FAQS = [
  {
    q: 'Kho gạo có hỗ trợ đóng túi nhỏ 5kg, 10kg miễn phí không?',
    a: 'Hoàn toàn miễn phí 100%. Vựa Gạo Sóc Trăng có sẵn các loại bao bì 5kg, 10kg in sẵn chữ "Gạo Từ Thiện / Gạo Nghĩa Tình" trang trọng và sạch đẹp. Toàn bộ chi phí bao bì, nhân công chia bao và may miệng túi chắc chắn đều được kho tài trợ 0 đồng cho Quý đoàn.',
  },
  {
    q: 'Doanh nghiệp, công ty mua làm từ thiện có xuất hóa đơn đỏ (VAT) không?',
    a: 'Có đầy đủ. Chúng tôi cung cấp hóa đơn điện tử VAT hợp pháp (thuế suất 5% đối với gạo sơ chế), hợp đồng mua bán và giấy chứng nhận kiểm nghiệm An toàn Vệ sinh Thực phẩm để doanh nghiệp quyết toán chi phí công đoàn, quỹ phúc lợi minh bạch.',
  },
  {
    q: 'Chi phí vận chuyển và hỗ trợ bốc xếp đến Chùa, Mái ấm như thế nào?',
    a: 'Với hệ thống 4 chi nhánh tại TP.HCM, Bình Dương, Tây Ninh và nhà máy xay xát Đồng Tháp, chúng tôi có đội xe tải chuyên dụng giao hàng tận nơi. Hỗ trợ miễn phí hoặc trợ giá tối đa cước xe, đồng thời tài xế và nhân viên phụ trách khuân vác, sắp xếp gạo gọn gàng vào tận kho hoặc sảnh chùa/bếp ăn.',
  },
  {
    q: 'Nên chọn loại gạo nào để vừa ngon vừa tiết kiệm ngân sách nhất?',
    a: 'Nếu phát quà hộ gia đình/người già: Nên chọn Gạo Nghĩa Tình, Gạo Thiện Lành hoặc Gạo Thành Ý (hạt dẻo vừa, thơm ngọt, để nguội vẫn mềm cơm, giá chỉ từ 14.200đ - 16.000đ/kg). Nếu tài trợ cho bếp ăn 0 đồng hoặc chùa nấu cơm số lượng lớn: Nên chọn Gạo Sẻ Chia (nở xốp nhiều, dôi cơm, chan canh không bị nhão, giá tiết kiệm chỉ từ 13.500đ/kg).',
  },
  {
    q: 'Mạnh Thường Quân ở xa hoặc ở nước ngoài, kho có hỗ trợ quay video, chụp ảnh bàn giao không?',
    a: 'Chúng tôi có quy trình hỗ trợ riêng cho nhà hảo tâm kiều bào và người bận rộn: Giao đúng giờ đến tận cơ sở bảo trợ/chùa, cân ký minh bạch, quay video và chụp ảnh lễ trao tặng cùng đại diện điểm nhận và gửi báo cáo chi tiết qua Zalo.',
  },
  {
    q: 'Làm thế nào để cam kết gạo mới, không pha trộn và đúng số ký?',
    a: 'Vựa Gạo Sóc Trăng cam kết bằng văn bản: Gạo mới xay xát trực tiếp từ nhà máy Đồng Tháp, 100% không đấu trộn gạo cũ, không hương liệu hóa chất và không chất bảo quản. Quý khách được quyền kiểm tra chất lượng và cân thử từng bao trước khi thanh toán. Nếu phát hiện sai sót, đổi trả 100% ngay lập tức.',
  },
];
