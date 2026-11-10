// Danh mục mẫu bao bì thực tế có sẵn tại Vựa Gạo Sóc Trăng
export interface PackagingModel {
  id: string;
  name: string;
  weightCategory: '5kg' | '10kg';
  image: string;
  tag: string;
  description: string;
  suitableFor: string;
}

export const PACKAGING_MODELS: PackagingModel[] = [
  // Nhóm bao 5kg (Túi quai xách / túi trong suốt)
  {
    id: 'pack-5kg-trong-suot-huong-lai',
    name: 'Túi 5kg Trong Suốt Hương Lài',
    weightCategory: '5kg',
    image: '/bao-bi/bao-5kg-trong-suot-huong-lai.jpg?v=2',
    tag: 'Thấy Rõ Hạt Gạo',
    description: 'Bao bì PP dệt trong suốt nhìn thấy rõ 100% hạt gạo trắng sạch, hạt đều không lẫn tấm.',
    suitableFor: 'Phát quà hộ nghèo, giúp bà con thấy gạo ngon minh bạch',
  },
  {
    id: 'pack-5kg-trong-suot-tu-quy',
    name: 'Túi 5kg Trong Suốt Tứ Quý Mai Vàng',
    weightCategory: '5kg',
    image: '/bao-bi/bao-5kg-trong-suot-tu-quy.jpg',
    tag: 'Tết / Tri Ân',
    description: 'Họa tiết cành mai vàng rực rỡ góc túi, thân túi trong suốt thấy rõ độ trắng ngần của gạo.',
    suitableFor: 'Quà thiện nguyện dịp Tết, lễ vu lan, phát quà đầu năm',
  },
  {
    id: 'pack-5kg-than-tai',
    name: 'Túi 5kg Lài Miên Thần Tài Phát Lộc',
    weightCategory: '5kg',
    image: '/bao-bi/bao-5kg-than-tai-phat-loc.jpg',
    tag: 'May Mắn / Hoan Hỷ',
    description: 'Màu đỏ rực rỡ in hình Thần Tài bưng bát cơm đầy, mang ý nghĩa no ấm, đủ đầy cho bà con.',
    suitableFor: 'Quà tặng may mắn, chúc phúc cho các gia đình khó khăn',
  },
  {
    id: 'pack-5kg-cay-mai-vang',
    name: 'Túi 5kg Cây Mai Vàng Phúc Lộc',
    weightCategory: '5kg',
    image: '/bao-bi/bao-5kg-cay-mai-vang-tet.jpg',
    tag: 'Xuân Sum Vầy',
    description: 'Khẩu hiệu "Mang Niềm Vui Đến Cho Mọi Nhà", in hình đại cổ thụ mai vàng sum suê.',
    suitableFor: 'Chương trình "Tết Vì Người Nghèo", xuân yêu thương',
  },
  {
    id: 'pack-5kg-huong-lai-cam',
    name: 'Túi 5kg Hương Lài Cam Quai Xách',
    weightCategory: '5kg',
    image: '/bao-bi/bao-5kg-huong-lai-cam-quai-xach.jpg',
    tag: 'Bền Đẹp / Tiện Lợi',
    description: 'Màu cam đất trang nhã, quai xách đục lỗ chắc chắn, may chỉ viền đáy dày dặn chống rách.',
    suitableFor: 'Bà con đi bộ, xe đạp, người già xách nhẹ nhàng',
  },
  {
    id: 'pack-5kg-lily-hong',
    name: 'Túi 5kg Hoa Sen Lily Hồng Sen',
    weightCategory: '5kg',
    image: '/bao-bi/bao-5kg-hoa-sen-lily-hong.jpg',
    tag: 'Trang Nhã / Thanh Tịnh',
    description: 'Họa tiết hoa sen hồng trang nhã, quai xách tiện dụng, đạt tiêu chuẩn xuất khẩu.',
    suitableFor: 'Cúng dường Tam Bảo, trao tặng mái ấm tình thương',
  },

  // Nhóm bao 10kg (Quai xách & may chỉ chắc chắn)
  {
    id: 'pack-10kg-hat-ngoc-thai',
    name: 'Bao 10kg Hạt Ngọc Thái (Thành Ý Trao Tay)',
    weightCategory: '10kg',
    image: '/bao-bi/bao-10kg-hat-ngoc-thai-thanh-y.jpg',
    tag: 'Ý Nghĩa Thiện Nguyện',
    description: 'In nổi bật đôi câu đối: "Thành Ý Trao Tay Hạt Ngọc Trời / Thay Lời Kết Nối Tình Thâm Giao".',
    suitableFor: 'Mẫu bao bì được các Quỹ từ thiện và Doanh nghiệp chọn nhiều nhất',
  },
  {
    id: 'pack-10kg-phuc-loc-tho',
    name: 'Bao 10kg Phúc Lộc Thọ Lài Sữa',
    weightCategory: '10kg',
    image: '/bao-bi/bao-10kg-phuc-loc-tho-lai-sua.jpg',
    tag: 'Kính Lão Đắc Thọ',
    description: 'Hình ảnh Ông Thọ cầm trái đào tiên và bầy tiên đồng, lời chúc "Hương Thơm Bát Ngát - Mềm Dẻo Ngọt Cơm".',
    suitableFor: 'Trao tặng người cao tuổi neo đơn, viện dưỡng lão',
  },
  {
    id: 'pack-10kg-than-tai-lai-mien',
    name: 'Bao 10kg Lài Miên Thần Tài',
    weightCategory: '10kg',
    image: '/bao-bi/bao-10kg-than-tai-lai-mien.jpg',
    tag: 'Đỏ Vàng May Mắn',
    description: 'Nền đỏ hoa văn gấm hoàng gia, hình tượng Thần Tài bưng thỏi vàng và bát cơm trắng.',
    suitableFor: 'Tặng công nhân viên, hộ nghèo dịp lễ Tết cuối năm',
  },
  {
    id: 'pack-10kg-bo-cau-hoa-binh',
    name: 'Bao 10kg Bồ Câu Thơm Hòa Bình',
    weightCategory: '10kg',
    image: '/bao-bi/bao-10kg-bo-cau-thom-hoa-binh.jpg',
    tag: 'Bác Ái / Hòa Bình',
    description: 'Hình ảnh chim bồ câu trắng tung cánh trên cánh đồng lúa chín vàng trĩu hạt.',
    suitableFor: 'Hội đồng hương, nhà thờ, giáo xứ làm bác ái',
  },
  {
    id: 'pack-10kg-tai-loc-tu-quy',
    name: 'Bao 10kg Tài Lộc Mai Lan Cúc Trúc',
    weightCategory: '10kg',
    image: '/bao-bi/bao-10kg-tai-loc-mai-lan-cuc-truc.jpg',
    tag: 'Tài Lộc An Khang',
    description: 'Bốn bức tranh Tứ Quý mang thông điệp thịnh vượng, chữ "Tài Lộc" viết thư pháp lớn.',
    suitableFor: 'Biếu tặng gia đình chính sách, người có công',
  },
  {
    id: 'pack-10kg-nang-hoa-go-cong',
    name: 'Bao 10kg Nàng Hoa Đặc Sản Gò Công',
    weightCategory: '10kg',
    image: '/bao-bi/bao-10kg-nang-hoa-go-cong.jpg',
    tag: 'Đặc Sản Truyền Thống',
    description: 'Bát cơm trắng nghi ngút khói bên đồng lúa xanh mướt, phong cách mộc mạc quê hương.',
    suitableFor: 'Bếp ăn tập thể, phát quà dân sinh các xóm trọ',
  },
  {
    id: 'pack-10kg-dai-loan-go-cong',
    name: 'Bao 10kg Đài Loan Gò Công',
    weightCategory: '10kg',
    image: '/bao-bi/bao-10kg-dai-loan-go-cong.jpg',
    tag: 'Dẻo Thơm Mọi Nhà',
    description: 'Khẩu hiệu "Thành ý trao tay hạt ngọc trời - Thay lời kết nối tình thâm giao".',
    suitableFor: 'Gia đình đông con, người lao động tự do',
  },
  {
    id: 'pack-10kg-long-lai-nguoi-viet',
    name: 'Bao 10kg Long Lài Gạo Người Việt',
    weightCategory: '10kg',
    image: '/bao-bi/bao-10kg-long-lai-nguoi-viet.jpg',
    tag: 'Ấm Cúng Bữa Cơm',
    description: 'Tôn vinh hạt gạo người nông dân Việt Nam, mâm cơm gia đình ấm áp sum họp.',
    suitableFor: 'Chương trình cứu trợ bão lũ, hỗ trợ vùng khó khăn',
  },
  {
    id: 'pack-10kg-lai-nhat',
    name: 'Bao 10kg Thơm Thượng Hạng Lài Nhật',
    weightCategory: '10kg',
    image: '/bao-bi/bao-10kg-lai-nhat-thuong-hang.jpg',
    tag: 'Trang Nhã / Cao Cấp',
    description: 'Thiết kế thanh nhã phong cảnh thiên nhiên mây trời, dòng gạo dẻo đậm cơm.',
    suitableFor: 'Quà biếu cán bộ hưu trí, gia đình hoàn cảnh',
  },
  {
    id: 'pack-10kg-gao-vip-campuchia',
    name: 'Bao 10kg Gạo VIP Hoàng Gia',
    weightCategory: '10kg',
    image: '/bao-bi/bao-10kg-gao-vip-campuchia.jpg',
    tag: 'Chất Lượng Thượng Hạng',
    description: 'Họa tiết bông lúa vàng óng ánh trên nền xanh navy sang trọng.',
    suitableFor: 'Doanh nghiệp tài trợ quà từ thiện cao cấp',
  },
];
