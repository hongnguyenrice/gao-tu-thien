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
    id: 'gao-se-chia',
    name: 'Gạo Sẻ Chia (Đoàn chọn nhiều)',
    category: 'Nở xốp (IR504)',
    shortDesc: 'Hạt tròn, cơm nở xốp mềm, dôi cơm',
    description: 'Gạo Sẻ Chia (nguồn gốc giống lúa IR504 tuyển chọn) có đặc tính hạt to tròn, nở xốp nhiều, dôi cơm tối đa. Cơm chín khô ráo, chan canh không bị nhão, hạt cơm tơi xốp dễ ăn, là giải pháp tối ưu chi phí và số lượng suất ăn hàng đầu cho các bếp ăn từ thiện và đoàn cứu trợ vùng sâu vùng xa.',
    pricePerKg: 15000,
    tiers: [
      { minKg: 300, pricePerKg: 14500, label: 'Từ 300kg - 499kg' },
      { minKg: 500, pricePerKg: 14000, label: 'Từ 500kg - 999kg (Nửa tấn)' },
      { minKg: 1000, pricePerKg: 13500, label: 'Từ 1.000kg trở lên (Từ 1 tấn)' },
    ],
    packaging: ['Bao 10kg', 'Bao 25kg', 'Bao 50kg', 'Bao 5kg'],
    characteristics: {
      softness: 2,
      fragrance: 2,
      suitability: 'Bếp ăn từ thiện, phát quà vùng cao/lao động'
    },
    recommendedFor: 'Bếp ăn từ thiện, phát quà vùng cao/lao động',
    isPopular: true
  },
  {
    id: 'gao-nghia-tinh',
    name: 'Gạo Nghĩa Tình',
    category: 'Gạo thơm Liên Hương mới',
    shortDesc: 'Cơm dẻo vừa, ngọt bùi, dễ ăn',
    description: 'Gạo Nghĩa Tình (tuyển chọn từ giống lúa thơm Liên Hương mùa mới) cho hạt cơm dẻo mềm vừa vặn, vị ngọt bùi tự nhiên, để nguội vẫn ngon không bị cứng cơm. Lựa chọn ấm áp và chu đáo nhất để chia phần phát quà cho bà con hộ nghèo, người già neo đơn dịp lễ Vu Lan, Tết, Phật Đản.',
    pricePerKg: 15800,
    tiers: [
      { minKg: 300, pricePerKg: 15200, label: 'Từ 300kg - 499kg' },
      { minKg: 500, pricePerKg: 14700, label: 'Từ 500kg - 999kg (Nửa tấn)' },
      { minKg: 1000, pricePerKg: 14200, label: 'Từ 1.000kg trở lên (Từ 1 tấn)' },
    ],
    packaging: ['Bao 5kg', 'Bao 10kg', 'Bao 25kg'],
    characteristics: {
      softness: 3,
      fragrance: 3,
      suitability: 'Phát quà hộ nghèo, người già'
    },
    recommendedFor: 'Phát quà hộ nghèo, người già',
    isPopular: false
  },
  {
    id: 'gao-thien-lanh',
    name: 'Gạo Thiện Lành',
    category: 'Thơm Lài 3A',
    shortDesc: 'Dẻo nhiều, thơm lài tự nhiên',
    description: 'Gạo Thiện Lành (Thơm Lài 3A chính gốc) nổi bật với hương hoa lài thanh tao tự nhiên, hạt cơm dẻo nhiều, mềm mịn và óng ả. Rất thích hợp để cúng dường chư Tăng Ni, các khóa tu Phật tử và gửi tặng các gia đình có hoàn cảnh khó khăn.',
    pricePerKg: 16800,
    tiers: [
      { minKg: 300, pricePerKg: 16200, label: 'Từ 300kg - 499kg' },
      { minKg: 500, pricePerKg: 15700, label: 'Từ 500kg - 999kg' },
      { minKg: 1000, pricePerKg: 15000, label: 'Từ 1.000kg trở lên' },
    ],
    packaging: ['Bao 5kg', 'Bao 10kg', 'Bao 25kg'],
    characteristics: {
      softness: 4,
      fragrance: 4,
      suitability: 'Phát quà Phật tử, cúng dường, gia đình'
    },
    recommendedFor: 'Phát quà Phật tử, cúng dường, gia đình',
    isPopular: false
  },
  {
    id: 'gao-thanh-y',
    name: 'Gạo Thành Ý',
    category: 'Hạt Ngọc Thái / Đài Thơm',
    shortDesc: 'Hạt dài, dẻo dai, thơm đậm vị',
    description: 'Gạo Thành Ý tuyển chọn từ giống lúa Hạt Ngọc Thái và Đài Thơm hạt thon dài trắng trong. Cơm khi nấu chín dẻo dai đậm đà, vị ngọt thanh, tỏa hương ngào ngạt khi mở nắp nồi cơm. Rất trang trọng cho quà biếu gia đình chính sách và thân nhân có công.',
    pricePerKg: 17800,
    tiers: [
      { minKg: 300, pricePerKg: 17200, label: 'Từ 300kg - 499kg' },
      { minKg: 500, pricePerKg: 16600, label: 'Từ 500kg - 999kg' },
      { minKg: 1000, pricePerKg: 16000, label: 'Từ 1.000kg trở lên' },
    ],
    packaging: ['Bao 5kg', 'Bao 10kg', 'Bao 25kg'],
    characteristics: {
      softness: 4,
      fragrance: 4,
      suitability: 'Quà biếu trang trọng, gia đình chính sách'
    },
    recommendedFor: 'Quà biếu trang trọng, gia đình chính sách',
    isPopular: false
  },
  {
    id: 'gao-st25-thuong-hang',
    name: 'Gạo ST25 Thượng Hạng (Đặc Sản)',
    category: 'ST25 Chuẩn Sóc Trăng',
    shortDesc: 'Dẻo mềm thượng hạng, thơm lá dứa',
    description: 'Dòng gạo ST25 thượng hạng lừng danh vùng đất Sóc Trăng. Hạt gạo dài trắng trong, cơm dai dẻo mềm đặc biệt, thơm mùi lá dứa tự nhiên. Món quà thực phẩm thanh tịnh, cao quý nhất để dâng cúng Tam Bảo tự viện và biếu tặng các đơn vị bảo trợ cao cấp.',
    pricePerKg: 25200,
    tiers: [
      { minKg: 300, pricePerKg: 24500, label: 'Từ 300kg - 499kg' },
      { minKg: 500, pricePerKg: 23800, label: 'Từ 500kg - 999kg' },
      { minKg: 1000, pricePerKg: 23000, label: 'Từ 1.000kg trở lên' },
    ],
    packaging: ['Bao 10kg', 'Bao 25kg', 'Bao 5kg'],
    characteristics: {
      softness: 5,
      fragrance: 5,
      suitability: 'Cúng dường Chùa, biếu tặng cao cấp'
    },
    recommendedFor: 'Cúng dường Chùa, biếu tặng cao cấp',
    isPopular: false
  },
  {
    id: 'gao-tam-tinh-thuong',
    name: 'Gạo Tấm Tình Thương',
    category: 'Tấm thơm xịn',
    shortDesc: 'Tấm sạch mầm phôi, nấu cháo nhanh nhừ, sánh mịn',
    description: 'Tấm thơm xịn còn nguyên mầm phôi giàu dưỡng chất, hạt tấm đều sạch sẽ không lẫn tạp chất. Nấu cháo nhanh nhừ, nước cháo sánh mịn ngọt lành, là lựa chọn số 1 cho các nồi cháo từ thiện bệnh viện và quán cơm nghĩa tình.',
    pricePerKg: 15400,
    tiers: [
      { minKg: 300, pricePerKg: 14800, label: 'Từ 300kg - 499kg' },
      { minKg: 500, pricePerKg: 14200, label: 'Từ 500kg - 999kg' },
      { minKg: 1000, pricePerKg: 13600, label: 'Từ 1.000kg trở lên' },
    ],
    packaging: ['Bao 10kg', 'Bao 25kg', 'Bao 50kg', 'Bao 5kg'],
    characteristics: {
      softness: 4,
      fragrance: 3,
      suitability: 'Nấu cháo từ thiện bệnh viện, quán cơm từ thiện'
    },
    recommendedFor: 'Nấu cháo từ thiện bệnh viện, quán cơm từ thiện',
    isPopular: false
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
  tag?: string;
  keyPoint?: string;
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
    desc: 'Cam kết chia sẻ một phần lợi nhuận cho thiện nguyện, giá luôn ưu đãi tận kho nhà máy. Tuyệt đối không tăng giá hay ép giá vào các dịp cao điểm Vu Lan, Tết, Phật Đản.',
    icon: 'BadgePercent',
    tag: 'Bình ổn giá dịp Rằm & Tết',
    keyPoint: 'Tiết kiệm tối đa ngân sách đoàn'
  },
  {
    title: 'Hỗ Trợ Đóng Gói Túi 5kg - 10kg Miễn Phí',
    desc: 'Tài trợ 100% công đóng túi 5kg quai xách và bao dệt 10kg, 25kg, 50kg. Bao bì sạch đẹp, may chỉ chắc chắn, in sẵn chữ "Gạo Từ Thiện / Gạo Nghĩa Tình" trang trọng.',
    icon: 'PackageCheck',
    tag: '0đ phụ thu bao bì',
    keyPoint: 'Miễn phí bao bì & nhân công'
  },
  {
    title: 'Vận Chuyển Tận Nơi & Bốc Xếp Vào Kho',
    desc: 'Hệ thống xe tải giao tận cửa Chùa, Mái ấm, Viện dưỡng lão nội thành và liên tỉnh. Tài xế và phụ xe bốc vác, xếp vào kho ngăn nắp, cam kết đúng giờ đoàn tổ chức.',
    icon: 'Truck',
    tag: 'Giao đúng giờ hẹn làm lễ',
    keyPoint: 'Xe tải giao & bốc vác tận nơi'
  },
  {
    title: 'Đầy Đủ Hóa Đơn VAT 5% & VSATTP',
    desc: 'Xuất hóa đơn điện tử VAT 5% chuẩn ngành nông sản, cung cấp hợp đồng kinh tế và giấy chứng nhận VSATTP để doanh nghiệp và quỹ từ thiện dễ dàng quyết toán tài chính minh bạch.',
    icon: 'FileText',
    tag: 'Minh bạch quyết toán tài chính',
    keyPoint: 'Hóa đơn VAT 5% & VSATTP'
  },
  {
    title: 'Chụp Ảnh & Quay Video Bàn Giao',
    desc: 'Dành riêng cho Mạnh Thường Quân ở xa hoặc kiều bào tài trợ: Vựa hỗ trợ quay clip cân ký thực tế, chụp ảnh trao tận nơi và gửi biên bản ký nhận từ cơ sở tiếp nhận.',
    icon: 'Camera',
    tag: 'Kiều bào & người ở xa an tâm',
    keyPoint: 'Báo cáo hình ảnh & biên nhận'
  },
  {
    title: 'Bảo Hành Gạo Mới – Đổi Trả Trong 24H',
    desc: 'Bảo đảm 100% gạo mùa mới gặt, hạt khô ráo thơm lành, không pha trộn, không chất bảo quản. Sẵn sàng 1 đổi 1 hoặc hoàn tiền 100% nếu phát hiện gạo ẩm mốc hay không đúng mẫu.',
    icon: 'ShieldCheck',
    tag: '1 đổi 1 hoặc hoàn tiền 100%',
    keyPoint: 'Cam kết 100% gạo mới sạch'
  }
];
