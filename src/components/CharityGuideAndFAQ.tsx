'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  HelpCircle, 
  ChevronDown, 
  Calculator, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Flame, 
  Heart,
  PhoneCall
} from 'lucide-react';
import { BRAND_INFO } from '@/data/mockData';

export const CharityGuideAndFAQ: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: 'Kho gạo có hỗ trợ đóng túi nhỏ 5kg, 10kg miễn phí không?',
      a: 'Hoàn toàn miễn phí 100%. Vựa Gạo Sóc Trăng có sẵn các loại bao bì 5kg, 10kg in sẵn chữ "Gạo Từ Thiện / Gạo Nghĩa Tình" trang trọng và sạch đẹp. Toàn bộ chi phí bao bì, nhân công chia bao và may miệng túi chắc chắn đều được kho tài trợ 0 đồng cho Quý đoàn.'
    },
    {
      q: 'Doanh nghiệp, công ty mua làm từ thiện có xuất hóa đơn đỏ (VAT) không?',
      a: 'Có đầy đủ. Chúng tôi cung cấp hóa đơn điện tử VAT hợp pháp (thuế suất 5% đối với gạo sơ chế), hợp đồng mua bán và giấy chứng nhận kiểm nghiệm An toàn Vệ sinh Thực phẩm để doanh nghiệp quyết toán chi phí công đoàn, quỹ phúc lợi minh bạch.'
    },
    {
      q: 'Chi phí vận chuyển và hỗ trợ bốc xếp đến Chùa, Mái ấm như thế nào?',
      a: 'Với hệ thống 4 chi nhánh tại TP.HCM, Bình Dương, Tây Ninh và nhà máy xay xát Đồng Tháp, chúng tôi có đội xe tải chuyên dụng giao hàng tận nơi. Hỗ trợ miễn phí hoặc trợ giá tối đa cước xe, đồng thời tài xế và nhân viên phụ trách khuân vác, sắp xếp gạo gọn gàng vào tận kho hoặc sảnh chùa/bếp ăn.'
    },
    {
      q: 'Nên chọn loại gạo nào để vừa ngon vừa tiết kiệm ngân sách nhất?',
      a: 'Nếu phát quà hộ gia đình/người già: Nên chọn Gạo Nghĩa Tình, Gạo Thiện Lành hoặc Gạo Thành Ý (hạt dẻo vừa, thơm ngọt, để nguội vẫn mềm cơm, giá chỉ từ 14.200đ - 16.000đ/kg). Nếu tài trợ cho bếp ăn 0 đồng hoặc chùa nấu cơm số lượng lớn: Nên chọn Gạo Sẻ Chia (nở xốp nhiều, dôi cơm, chan canh không bị nhão, giá tiết kiệm chỉ từ 13.500đ/kg).'
    },
    {
      q: 'Mạnh Thường Quân ở xa hoặc ở nước ngoài, kho có hỗ trợ quay video, chụp ảnh bàn giao không?',
      a: 'Chúng tôi có quy trình hỗ trợ riêng cho nhà hảo tâm kiều bào và người bận rộn: Giao đúng giờ đến tận cơ sở bảo trợ/chùa, cân ký minh bạch, quay video và chụp ảnh lễ trao tặng cùng đại diện điểm nhận và gửi báo cáo chi tiết qua Zalo.'
    },
    {
      q: 'Làm thế nào để cam kết gạo mới, không pha trộn và đúng số ký?',
      a: 'Vựa Gạo Sóc Trăng cam kết bằng văn bản: Gạo mới xay xát trực tiếp từ nhà máy Đồng Tháp, 100% không đấu trộn gạo cũ, không hương liệu hóa chất và không chất bảo quản. Quý khách được quyền kiểm tra chất lượng và cân thử từng bao trước khi thanh toán. Nếu phát hiện sai sót, đổi trả 100% ngay lập tức.'
    }
  ];

  return (
    <section id="kinh-nghiem-tu-thien" className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <BookOpen className="w-4 h-4 text-amber-700" /> Cẩm Nang & Kinh Nghiệm Mua Gạo Từ Thiện
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Cách Chọn Đúng Loại Gạo & Dự Toán Chi Phí
          </h2>
          <p className="mt-3 text-gray-600 text-base sm:text-lg">
            Kinh nghiệm đúc kết sau hơn 10 năm đồng hành cùng hàng nghìn chương trình thiện nguyện, bếp cơm 0 đồng và chùa viện trên toàn quốc.
          </p>
        </div>

        {/* 1. Hướng Dẫn Chọn Gạo Theo Mục Đích */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: Hộ nghèo & Người già */}
          <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-200 hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold mb-4 shadow-sm">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md uppercase">
                Phát Quà Gia Đình
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">
                Gạo Nghĩa Tình / Thiện Lành
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Cơm dẻo vừa, mềm ngọt, để nguội không bị cứng. Rất phù hợp khẩu vị số đông, người cao tuổi và các em nhỏ dễ ăn.
              </p>
            </div>
            <div>
              <div className="text-xs text-emerald-800 font-bold border-t border-amber-200/80 pt-3 flex justify-between items-center mb-3">
                <span>Đóng bao:</span>
                <span className="bg-white px-2 py-0.5 rounded border border-amber-300">5kg - 10kg</span>
              </div>
              <Link href="/gao-phat-qua-tu-thien/" className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 group">
                Cẩm nang chọn gạo phát quà <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2: Bếp ăn 0 đồng */}
          <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-200 hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-4 shadow-sm">
                <Flame className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md uppercase">
                Bếp Ăn & Quán Cơm
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">
                Gạo Sẻ Chia (Nở Xốp)
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Đặc tính nở nhiều, rất dôi cơm, hạt cơm khô ráo chan canh không nhão. Tối đa hóa số suất cơm trên từng bao gạo với chi phí rẻ nhất.
              </p>
            </div>
            <div>
              <div className="text-xs text-emerald-800 font-bold border-t border-emerald-200/80 pt-3 flex justify-between items-center mb-3">
                <span>Đóng bao:</span>
                <span className="bg-white px-2 py-0.5 rounded border border-emerald-300">25kg - 50kg</span>
              </div>
              <Link href="/chon-gao-cho-bep-an-tu-thien/" className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 group">
                Bí quyết nấu dôi cơm 0 đồng <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 3: Nấu cháo dinh dưỡng */}
          <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-200 hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold mb-4 shadow-sm">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2.5 py-1 rounded-md uppercase">
                Nồi Cháo Bệnh Viện
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">
                Gạo Tấm Tình Thương
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Hạt tấm nguyên phôi dinh dưỡng, nấu nhanh nhừ, nước cháo sánh mịn và ngọt thơm tự nhiên. Tiết kiệm thời gian ninh hầm cho tình nguyện viên.
              </p>
            </div>
            <div>
              <div className="text-xs text-blue-800 font-bold border-t border-blue-200/80 pt-3 flex justify-between items-center mb-3">
                <span>Đóng bao:</span>
                <span className="bg-white px-2 py-0.5 rounded border border-blue-300">10kg - 25kg</span>
              </div>
              <Link href="/chon-gao-cho-bep-an-tu-thien/#bang-gia-bep-an" className="text-xs font-bold text-blue-800 hover:text-blue-950 flex items-center gap-1 group">
                Xem bảng giá tấm nấu cháo <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 4: Cúng dường cao cấp */}
          <div className="bg-purple-50/50 rounded-2xl p-6 border border-purple-200 hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold mb-4 shadow-sm">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-purple-800 bg-purple-100 px-2.5 py-1 rounded-md uppercase">
                Cúng Dường & Biếu Tặng
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">
                Gạo ST25 Thượng Hạng
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Hạt gạo dài bóng ngọc, vị cơm dẻo mềm hảo hạng thơm mùi lá dứa tự nhiên. Thể hiện trọn vẹn lòng thành kính khi dâng cúng Tam Bảo.
              </p>
            </div>
            <div>
              <div className="text-xs text-purple-800 font-bold border-t border-purple-200/80 pt-3 flex justify-between items-center mb-3">
                <span>Đóng bao:</span>
                <span className="bg-white px-2 py-0.5 rounded border border-purple-300">5kg - 25kg</span>
              </div>
              <Link href="/gao-cung-duong-chua/" className="text-xs font-bold text-purple-800 hover:text-purple-950 flex items-center gap-1 group">
                Gạo ST25 cúng dường chùa <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* 2. Bảng Dự Toán Ngân Sách Mẫu */}
        <div className="mb-16 bg-gradient-to-br from-amber-900 to-amber-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-amber-800/80">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase mb-2">
                <Calculator className="w-4 h-4" /> Bảng Tham Khảo Dự Toán
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Bảng Tính Ngân Sách Phát Quà Từ Thiện Mẫu
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/80 mt-1">
                Đã bao gồm: Gạo mới + Miễn phí bao bì in chữ Từ Thiện + Vận chuyển xe tải tận nơi.
              </p>
            </div>
            <a
              href={`https://zalo.me/${BRAND_INFO.zalo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-amber-950 font-black px-6 py-3 rounded-xl shadow-md transition shrink-0 text-sm"
            >
              Nhận Báo Giá Dự Toán Riêng (Zalo)
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
            
            {/* Quy mô 100 suất */}
            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 hover:border-amber-400/50 transition">
              <span className="text-xs font-bold text-amber-300 uppercase">Quy mô 100 suất</span>
              <div className="text-2xl font-black text-white mt-1 mb-2">500 kg</div>
              <p className="text-xs text-amber-200/70 mb-3">Mỗi phần 1 bao 5kg</p>
              <div className="space-y-1.5 text-xs border-t border-white/10 pt-3">
                <div className="flex justify-between">
                  <span className="text-amber-200/80">Gạo Sẻ Chia:</span>
                  <span className="font-bold text-amber-300">~7.000.000 đ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-200/80">Gạo Nghĩa Tình:</span>
                  <span className="font-bold text-emerald-300">~7.350.000 đ</span>
                </div>
              </div>
            </div>

            {/* Quy mô 200 suất */}
            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 hover:border-amber-400/50 transition">
              <span className="text-xs font-bold text-amber-300 uppercase">Quy mô 200 suất</span>
              <div className="text-2xl font-black text-white mt-1 mb-2">1.000 kg (1 Tấn)</div>
              <p className="text-xs text-amber-200/70 mb-3">Mỗi phần 1 bao 5kg</p>
              <div className="space-y-1.5 text-xs border-t border-white/10 pt-3">
                <div className="flex justify-between">
                  <span className="text-amber-200/80">Gạo Sẻ Chia:</span>
                  <span className="font-bold text-amber-300">~13.500.000 đ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-200/80">Gạo Nghĩa Tình:</span>
                  <span className="font-bold text-emerald-300">~14.200.000 đ</span>
                </div>
              </div>
            </div>

            {/* Quy mô 300 suất (10kg) */}
            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 hover:border-amber-400/50 transition">
              <span className="text-xs font-bold text-amber-300 uppercase">Quy mô 300 suất</span>
              <div className="text-2xl font-black text-white mt-1 mb-2">3.000 kg (3 Tấn)</div>
              <p className="text-xs text-amber-200/70 mb-3">Mỗi phần 1 bao 10kg</p>
              <div className="space-y-1.5 text-xs border-t border-white/10 pt-3">
                <div className="flex justify-between">
                  <span className="text-amber-200/80">Gạo Sẻ Chia:</span>
                  <span className="font-bold text-amber-300">Chiết khấu xe tải</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-200/80">Gạo Nghĩa Tình:</span>
                  <span className="font-bold text-emerald-300">Giá xưởng tốt nhất</span>
                </div>
              </div>
            </div>

            {/* Quy mô lớn từ 5 tấn */}
            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-amber-400/40 bg-amber-400/10">
              <span className="text-xs font-bold text-amber-300 uppercase">Chương Trình Lớn</span>
              <div className="text-2xl font-black text-amber-300 mt-1 mb-2">Từ 5 Tấn Trở Lên</div>
              <p className="text-xs text-amber-200/70 mb-3">Chuyến xe trực tiếp từ nhà máy</p>
              <div className="text-xs border-t border-white/10 pt-3 text-amber-100 leading-relaxed">
                Áp dụng bảng giá xuất xưởng trực tiếp Đồng Tháp, hỗ trợ chia theo từng điểm giao liên tỉnh.
              </div>
            </div>

          </div>
        </div>

        {/* 3. Phần Hỏi - Đáp Thường Gặp (FAQ Accordion - Thân thiện với AI Trích Dẫn) */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-100 text-xs font-bold px-3 py-1 rounded-full uppercase mb-2">
              <HelpCircle className="w-4 h-4" /> Thắc Mắc Thường Gặp
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Câu Hỏi Về Dịch Vụ Cung Cấp Gạo Từ Thiện
            </h3>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-colors bg-white hover:border-amber-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 hover:text-emerald-800 transition"
                >
                  <span className="flex items-center gap-3 pr-4 text-sm sm:text-base">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${
                      openFaqIndex === idx ? 'rotate-180 text-emerald-700' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 border-t border-gray-100 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick contact CTA */}
          <div className="mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                Quý đoàn cần hỗ trợ thêm thông tin hoặc mẫu gạo thực tế?
              </h4>
              <p className="text-xs text-gray-600 mt-0.5">
                Chúng tôi gửi mẫu gạo tận nơi miễn phí để Quý vị kiểm tra phẩm chất trước khi đặt.
              </p>
            </div>
            <a
              href={`tel:${BRAND_INFO.hotline.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-5 py-2.5 rounded-xl shadow-sm text-sm shrink-0 transition"
            >
              <PhoneCall className="w-4 h-4" />
              Gọi Ngay: {BRAND_INFO.hotlineDisplay}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
