'use client';

import React from 'react';
import Link from 'next/link';
import { Package, ShieldCheck, Truck, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/70 via-white to-amber-50/30 pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 border-b border-amber-100">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 right-10 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Cột trái: Đề xuất giá trị cốt lõi */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            {/* Huy hiệu trên cùng - Gọn gàng không bị rớt dòng luộm thuộm */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/90 text-emerald-950 border border-emerald-300/80 px-3.5 py-1 rounded-full text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Tổng Kho Gạo Từ Thiện Tận Gốc • Giá Xuất Xưởng</span>
            </div>

            {/* Tiêu đề H1 - Cắt câu chuẩn tiếng Việt, không bị gãy đôi chữ trên mobile */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Gạo Từ Thiện Giá Sỉ Tận Gốc
              <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-700 to-amber-700">
                Đóng Bao 5kg – 10kg & Giao Tận Chùa
              </span>
            </h1>

            {/* Đoạn mô tả: Súc tích, làm bật các cam kết đắt giá nhất */}
            <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong>Vựa Gạo Sóc Trăng</strong> chuyên cung cấp gạo chuẩn cho chùa, bếp ăn 0 đồng và các đoàn thiện nguyện. 
              <strong> Giá xuất xưởng không trung gian</strong>, đóng bao 10kg – 25kg miễn phí (tài trợ 100% vỏ bao 5kg từ 1 tấn), giao xe tải tận nơi và đầy đủ hóa đơn VAT.
            </p>

            {/* 4 Thẻ chỉ số tin cậy - Căn chỉnh chuẩn địa bàn và tiết kiệm chiều cao */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 py-1">
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-emerald-100 shadow-xs hover:border-emerald-300 transition text-center">
                <div className="text-lg sm:text-xl font-black text-emerald-700">4 Chi Nhánh</div>
                <div className="text-[11px] sm:text-xs text-gray-600 font-medium">Bình Dương, TP.HCM, Long An</div>
              </div>

              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-amber-100 shadow-xs hover:border-amber-300 transition text-center">
                <div className="text-lg sm:text-xl font-black text-amber-700">Nhà Máy</div>
                <div className="text-[11px] sm:text-xs text-gray-600 font-medium">Hội Cư, Đồng Tháp</div>
              </div>

              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-emerald-100 shadow-xs hover:border-emerald-300 transition text-center">
                <div className="text-lg sm:text-xl font-black text-emerald-700">Bao Bì 0đ</div>
                <div className="text-[11px] sm:text-xs text-gray-600 font-medium">Bao 10-25kg & đơn 1 tấn</div>
              </div>

              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-amber-100 shadow-xs hover:border-amber-300 transition text-center">
                <div className="text-lg sm:text-xl font-black text-amber-700">VAT 5%</div>
                <div className="text-[11px] sm:text-xs text-gray-600 font-medium">Xuất hoá đơn đoàn thể</div>
              </div>
            </div>

            {/* Nút hành động CTA - Đặt nút Xem Bảng Giá lên ưu tiên số 1 */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center lg:justify-start pt-1">
              <Link
                href="#san-pham"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-md shadow-emerald-700/20 transition transform active:scale-95 text-sm sm:text-base"
              >
                <Package className="w-4 h-4 sm:w-5 sm:h-5 text-amber-200" />
                <span>Xem Bảng Giá Gạo Hôm Nay</span>
              </Link>
              
              <Link
                href="#he-thong-kho"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-emerald-900 border border-emerald-600/30 hover:border-emerald-600 font-bold px-5 py-3 rounded-xl shadow-xs transition transform active:scale-95 text-sm sm:text-base"
              >
                <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700" />
                <span>Hệ Thống 4 Kho & Nhà Máy</span>
              </Link>
            </div>

            {/* Bằng chứng tín nhiệm nhanh ngay dưới nút bấm */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs text-gray-600">
              <span className="flex text-amber-500">★★★★★</span>
              <span>Được hơn <strong>350+ Chùa & Nhóm Thiện Nguyện</strong> tin chọn</span>
            </div>
          </div>

          {/* Cột phải: Thẻ cam kết chất lượng */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-3xl p-5 sm:p-7 shadow-xl border border-amber-200/80">
              <div className="absolute -top-3 -right-3 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Tâm Sáng - Gạo Lành
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3.5 flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Vì sao 350+ Quý đoàn tin tưởng?</span>
              </h2>

              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">Chất lượng không pha trộn</h3>
                    <p className="text-[11px] sm:text-xs text-gray-600 leading-snug">Tuyệt đối không pha gạo cũ mốc, không chất tạo mùi, không hóa chất bảo quản.</p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Package className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">Đóng bao từ thiện chuyên nghiệp</h3>
                    <p className="text-[11px] sm:text-xs text-gray-600 leading-snug">Bao bì đỏ/vàng trang nhã mang dòng chữ chúc phúc hoặc in decal tên Đoàn theo yêu cầu.</p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">Vận chuyển đúng hẹn & Bốc vác tận nơi</h3>
                    <p className="text-[11px] sm:text-xs text-gray-600 leading-snug">Tài xế và phụ xe hỗ trợ khiêng vác vào tận sảnh chùa, bếp ăn, Quý Phật tử không phải bận tâm.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-4 pt-3.5 border-t border-gray-100 bg-amber-50/60 -mx-5 -mb-5 p-4 rounded-b-3xl">
                <div className="flex items-center justify-between text-xs text-amber-950 font-medium">
                  <span>Hỗ trợ gấp các chuyến phát quà đột xuất</span>
                  <span className="font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">Giao trong 2h</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
