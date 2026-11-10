export interface RiceProduct {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  description: string;
  pricePerKg: number; // Giá bán lẻ tham khảo (VNĐ/kg)
  tiers: {
    minKg: number;
    pricePerKg: number;
    label: string;
  }[];
  packaging: string[]; // ví dụ: "Bao 5kg", "Bao 10kg", "Bao 25kg", "Bao 50kg"
  characteristics: {
    softness: number; // 1-5 sao dẻo
    fragrance: number; // 1-5 sao thơm
    suitability: string; // "Phù hợp nấu quán cơm từ thiện, bếp ăn chùa, phát quà hộ nghèo"
  };
  recommendedFor: string;
  isPopular?: boolean;
}

export interface CharityPartner {
  id: string;
  name: string;
  type: 'chua' | 'mai_am' | 'bep_an' | 'hoi_chu_thap_do';
  address: string;
  province: string;
  contactPerson: string;
  phone: string;
  monthlyNeedKg: number;
  currentReceivedKg: number;
  description: string;
  image: string;
  verified: boolean;
}

export const RICE_PRODUCTS: RiceProduct[] = [
  {
    id: 'gao-504',
    name: 'Gạo IR50404 (Gạo Nở Xốp Lợi Cơm)',
    category: 'Gạo Nở Xốp',
    shortDesc: 'Hạt gạo to tròn, nở nhiều, dôi cơm, thích hợp nhất cho các bếp ăn từ thiện và quán cơm bình dân.',
    description: 'Gạo IR 50404 có đặc tính nở xốp, khô ráo, hạt cơm không dính dính bết. Khi nấu cho ra số lượng cơm rất lớn (lợi cơm), cơm chiên hoặc ăn kèm canh súp rất ngon, giúp tiết kiệm tối đa chi phí cho các bếp từ thiện nấu hàng trăm suất ăn mỗi ngày.',
    pricePerKg: 13500,
    tiers: [
      { minKg: 300, pricePerKg: 13000, label: 'Từ 300kg - 499kg' },
      { minKg: 500, pricePerKg: 12500, label: 'Từ 500kg - 999kg (Nửa tấn)' },
      { minKg: 1000, pricePerKg: 12000, label: 'Từ 1.000kg trở lên (Từ 1 tấn)' },
    ],
    packaging: ['Bao 10kg', 'Bao 25kg', 'Bao 50kg', 'Túi 5kg (chia phần quà)'],
    characteristics: {
      softness: 2,
      fragrance: 2,
      suitability: 'Bếp ăn từ thiện, chùa nấu cơm từ thiện quy mô lớn, quán cơm 0 đồng'
    },
    recommendedFor: 'Tối ưu số suất cơm / Tiết kiệm chi phí ngân sách',
    isPopular: true
  },
  {
    id: 'gao-lai-sua',
    name: 'Gạo Lài Sữa (Dẻo Vừa - Thơm Nhẹ)',
    category: 'Gạo Dẻo Thơm Phổ Thông',
    shortDesc: 'Cơm mềm, ngọt vị, mùi thơm tự nhiên. Lựa chọn số 1 để đóng bao 5kg, 10kg phát quà từ thiện.',
    description: 'Hạt gạo dài, màu trắng sữa đục. Cơm khi chín mềm dẻo vừa, có độ kết dính nhẹ, để nguội vẫn ngon không bị cứng. Rất thích hợp để chia quà tặng cho bà con hộ nghèo, người già neo đơn dịp lễ Vu Lan, Tết, Phật Đản.',
    pricePerKg: 16500,
    tiers: [
      { minKg: 300, pricePerKg: 15800, label: 'Từ 300kg - 499kg' },
      { minKg: 500, pricePerKg: 15200, label: 'Từ 500kg - 999kg (Nửa tấn)' },
      { minKg: 1000, pricePerKg: 14700, label: 'Từ 1.000kg trở lên (Từ 1 tấn)' },
    ],
    packaging: ['Bao 5kg (in sẵn chữ Từ Thiện)', 'Bao 10kg', 'Bao 25kg'],
    characteristics: {
      softness: 4,
      fragrance: 3,
      suitability: 'Phát quà hộ gia đình khó khăn, người già, trẻ em mái ấm'
    },
    recommendedFor: 'Được các mạnh thường quân chuộng nhất để phát quà tận tay',
    isPopular: true
  },
  {
    id: 'gao-thom-jasmine',
    name: 'Gạo Thơm Jasmine 85',
    category: 'Gạo Thơm Đặc Sản',
    shortDesc: 'Hạt dài, trong bóng, thơm hoa lài, cơm mềm dẻo thanh tao.',
    description: 'Giống lúa thơm thuần phẩm chất cao cấp, hạt dài thon trắng trong. Cơm nấu chín thơm ngát, mềm dẻo, ngọt hậu. Thích hợp cho các chương trình cứu trợ chất lượng cao, các cơ sở nuôi dưỡng trẻ mồ côi và người già.',
    pricePerKg: 17500,
    tiers: [
      { minKg: 300, pricePerKg: 16800, label: 'Từ 300kg - 499kg' },
      { minKg: 500, pricePerKg: 16200, label: 'Từ 500kg - 999kg' },
      { minKg: 1000, pricePerKg: 15600, label: 'Từ 1.000kg trở lên' },
    ],
    packaging: ['Bao 5kg', 'Bao 10kg', 'Bao 25kg'],
    characteristics: {
      softness: 4,
      fragrance: 4,
      suitability: 'Mái ấm tình thương, trung tâm bảo trợ xã hội, chùa'
    },
    recommendedFor: 'Quà tặng từ thiện chất lượng cao'
  },
  {
    id: 'gao-st25-thuong-hang',
    name: 'Gạo ST25 Sóc Trăng (Thượng Hạng)',
    category: 'Gạo Ngon Nhất Thế Giới',
    shortDesc: 'Hạt cơm dai dẻo mềm đặc biệt, thơm hương lá dứa, giàu dinh dưỡng.',
    description: 'Loại gạo lừng danh dành cho các đơn vị tài trợ muốn mang lại bữa cơm chất lượng cao nhất cho các em nhỏ cơ nhỡ, bệnh nhân viện nhi hoặc viện dưỡng lão.',
    pricePerKg: 25000,
    tiers: [
      { minKg: 300, pricePerKg: 23500, label: 'Từ 300kg - 499kg' },
      { minKg: 500, pricePerKg: 22500, label: 'Từ 500kg - 999kg' },
      { minKg: 1000, pricePerKg: 21500, label: 'Từ 1.000kg trở lên' },
    ],
    packaging: ['Bao 10kg', 'Bao 25kg', 'Bao 5kg'],
    characteristics: {
      softness: 5,
      fragrance: 5,
      suitability: 'Viện dưỡng lão, bếp ăn bệnh viện ung bướu, chùa cao cấp'
    },
    recommendedFor: 'Tài trợ cao cấp & nâng cao dinh dưỡng'
  },
  {
    id: 'gao-tam-thom',
    name: 'Gạo Tấm Thơm (Nấu Cháo Từ Thiện)',
    category: 'Gạo Nấu Cháo / Cơm Tấm',
    shortDesc: 'Mầm phôi nguyên hạt tấm, nấu cháo nhanh nhừ, sánh mịn, ngọt nước canh cháo.',
    description: 'Chuyên dụng cho các nồi cháo từ thiện bệnh viện (cháo dinh dưỡng sáng phát miễn phí cho thân nhân và bệnh nhân khó khăn). Nấu mau nhừ, mùi thơm lành, rất sánh.',
    pricePerKg: 14500,
    tiers: [
      { minKg: 300, pricePerKg: 13900, label: 'Từ 300kg - 499kg' },
      { minKg: 500, pricePerKg: 13400, label: 'Từ 500kg - 999kg' },
      { minKg: 1000, pricePerKg: 12800, label: 'Từ 1.000kg trở lên' },
    ],
    packaging: ['Bao 10kg', 'Bao 25kg', 'Bao 50kg', 'Túi 5kg (chia phần quà)'],
    characteristics: {
      softness: 4,
      fragrance: 3,
      suitability: 'Nồi cháo tình thương bệnh viện, phát cháo đêm'
    },
    recommendedFor: 'Chuyên dụng cho các nhóm thiện nguyện nấu cháo'
  }
];

export const CHARITY_PARTNERS: CharityPartner[] = [
  {
    id: 'chua-tu-tam',
    name: 'Chùa Từ Tâm - Bếp Cơm Chay Miễn Phí',
    type: 'chua',
    address: '142 Đường số 8, Phường Linh Tây, TP. Thủ Đức',
    province: 'TP. Hồ Chí Minh',
    contactPerson: 'Đại đức Thích Thiện Tâm',
    phone: '0908 123 456',
    monthlyNeedKg: 2500,
    currentReceivedKg: 1650,
    description: 'Phục vụ từ 400 - 500 suất cơm chay dinh dưỡng miễn phí mỗi ngày từ Thứ 2 đến Thứ 7 cho lao động nghèo, người bán vé số và sinh viên khó khăn.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    verified: true
  },
  {
    id: 'mai-am-hoa-mai',
    name: 'Mái Ấm Hy Vọng Hoa Mai',
    type: 'mai_am',
    address: 'Ấp Phước Hưng, Xã Long Phước, Long Thành',
    province: 'Đồng Nai',
    contactPerson: 'Cô Sơ Nguyễn Thị Mai',
    phone: '0912 987 654',
    monthlyNeedKg: 1200,
    currentReceivedKg: 700,
    description: 'Cơ sở hiện nuôi dưỡng 68 em nhỏ mồ côi và 25 cụ già neo đơn không nơi nương tựa. Rất cần nguồn gạo thơm mềm để chăm sóc sức khỏe dinh dưỡng các cụ và cháu nhỏ.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
    verified: true
  },
  {
    id: 'bep-an-0-dong-ung-buou',
    name: 'Bếp Cơm Nghĩa Tình (Cửa Viện Ung Bướu)',
    type: 'bep_an',
    address: 'Số 47 Nơ Trang Long, Phường 14, Quận Bình Thạnh',
    province: 'TP. Hồ Chí Minh',
    contactPerson: 'Anh Trần Hữu Phước',
    phone: '0933 555 888',
    monthlyNeedKg: 3000,
    currentReceivedKg: 2100,
    description: 'Tiếp sức cho các bệnh nhân hiểm nghèo và thân nhân xa quê điều trị nội trú. Nấu mỗi ngày 2 cữ sáng (cháo đậu xanh/thịt nạc) và trưa (cơm mặn dinh dưỡng).',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80',
    verified: true
  },
  {
    id: 'hoi-chu-thap-do-ben-tre',
    name: 'Quỹ Cứu Trợ Xã Hội Huyện Mỏ Cày Nam',
    type: 'hoi_chu_thap_do',
    address: 'Thị trấn Mỏ Cày, Huyện Mỏ Cày Nam',
    province: 'Bến Tre',
    contactPerson: 'Bác Lê Văn Tám',
    phone: '0275 384 1234',
    monthlyNeedKg: 2000,
    currentReceivedKg: 950,
    description: 'Định kỳ phát quà đầu tháng gồm gạo và nhu yếu phẩm cho 200 hộ gia đình neo đơn, người tàn tật và gia đình chính sách khó khăn tại vùng sâu.',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb7?auto=format&fit=crop&w=600&q=80',
    verified: true
  }
];

export interface PolicySupport {
  title: string;
  desc: string;
  icon: string;
}

export interface BranchLocation {
  id: string;
  type: 'branch' | 'factory';
  index?: number;
  name: string;
  address: string;
  area: string;
  phone: string;
  hours?: string;
}

export const BRAND_INFO = {
  name: 'VỰA GẠO SÓC TRĂNG',
  slogan: 'Gạo ngon – Giá tốt – Giao tận nhà',
  subTitle: 'Hệ Thống Chi Nhánh & Nhà Máy Cung Cấp Gạo Từ Thiện',
  hotline: '0762 234 135',
  hotlineDisplay: '0762 234 135',
  zalo: '0762234135',
  branches: [
    {
      id: 'cn-1',
      type: 'branch' as const,
      index: 1,
      name: 'Chi Nhánh 1 (Lái Thiêu)',
      address: 'Số 11, Lô 2, Đường Lái Thiêu 9, P. Lái Thiêu, TP. Thuận An, Bình Dương',
      area: 'Lái Thiêu',
      phone: '0762 234 135',
      hours: '07:00 – 20:00'
    },
    {
      id: 'cn-2',
      type: 'branch' as const,
      index: 2,
      name: 'Chi Nhánh 2 (Phước Long)',
      address: '44 Đường Số 7, P. Phước Long, TP. Thủ Đức, TP.HCM',
      area: 'Thủ Đức',
      phone: '0762 234 135',
      hours: '07:00 – 20:00'
    },
    {
      id: 'cn-3',
      type: 'branch' as const,
      index: 3,
      name: 'Chi Nhánh 3 (Tân Kiểng)',
      address: '120 Đường Số 1, P. Tân Kiểng, Q.7, TP.HCM',
      area: 'Quận 7',
      phone: '0762 234 135',
      hours: '07:00 – 20:00'
    },
    {
      id: 'cn-4',
      type: 'branch' as const,
      index: 4,
      name: 'Chi Nhánh 4 (Hậu Nghĩa)',
      address: 'Ấp Khiêm Cương, Hậu Nghĩa, Tây Ninh',
      area: 'Hậu Nghĩa',
      phone: '0762 234 135',
      hours: '07:00 – 20:00'
    }
  ],
  factory: {
    id: 'factory-1',
    type: 'factory' as const,
    name: 'Nhà Máy Xay Xát Đồng Tháp',
    address: 'Ấp An Thái, Xã Hội Cư, Tỉnh Đồng Tháp',
    area: 'Đồng Tháp',
    phone: '0762 234 135',
    hours: '06:00 – 21:00'
  }
};

export const CHARITY_COMMITMENTS: PolicySupport[] = [
  {
    title: 'Giá Sỉ Tận Gốc Cho Từ Thiện',
    desc: 'Cam kết chia sẻ một phần lợi nhuận cho thiện nguyện, giá luôn ưu đãi nhất thị trường, không tăng giá các dịp cao điểm rằm/lễ Tết.',
    icon: 'BadgePercent'
  },
  {
    title: 'Hỗ Trợ Đóng Gói Túi 5kg - 10kg Miễn Phí',
    desc: 'Có sẵn bao bì in chữ "Gạo Từ Thiện / Gạo Nghĩa Tình" trang trọng, sạch đẹp, may miệng bao chắc chắn để thuận tiện phát tận tay bà con.',
    icon: 'PackageCheck'
  },
  {
    title: 'Vận Chuyển Tận Nơi & Bốc Xếp Vào Kho',
    desc: 'Hệ thống xe tải chi nhánh giao hàng tận các điểm chùa, mái ấm, viện dưỡng lão nội thành và liên tỉnh; phụ trách khuân vác vào kho gọn gàng chu đáo.',
    icon: 'Truck'
  },
  {
    title: 'Đầy Đủ Hóa Đơn VAT & Giấy VSATTP',
    desc: 'Cung cấp hóa đơn đỏ (VAT), giấy chứng nhận nguồn gốc xuất xứ, kiểm nghiệm an toàn thực phẩm để quý đoàn dễ dàng quyết toán tài chính minh bạch.',
    icon: 'FileText'
  },
  {
    title: 'Chụp Ảnh & Quay Video Bàn Giao',
    desc: 'Nếu Mạnh Thường Quân ở xa hoặc ở nước ngoài gửi tặng, chúng tôi hỗ trợ chụp ảnh, quay video cân ký và ký biên nhận tại cơ sở tiếp nhận.',
    icon: 'Camera'
  },
  {
    title: 'Đổi Trả 100% Nếu Không Đạt Chất Lượng',
    desc: 'Bảo đảm tuyệt đối gạo mới, không pha trộn, không chất bảo quản hay hương liệu tạo mùi, không mối mọt.',
    icon: 'ShieldCheck'
  }
];
