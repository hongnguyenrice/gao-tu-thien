'use client';

import React from 'react';
import Link from 'next/link';
import { Package, ShieldCheck, Truck, Users, Sparkles, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fbf9f4] via-[#fdfcf9] to-[#f8f5ee] pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 border-b border-amber-200/50">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/35 to-amber-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-gradient-to-tr from-emerald-200/35 to-teal-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Cột trái: Đề xuất giá trị cốt lõi */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            {/* Huy hiệu trên cùng - Sang trọng và sắc nét */}
            <div className="inline-flex items-center gap-2.5 bg-emerald-50/90 text-emerald-950 border border-emerald-300/80 px-4 py-1.5 rounded-full text-xs font-bold shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>Tổng Kho Gạo Từ Thiện Tận Gốc • Giá Xuất Xưởng</span>
            </div>

            {/* Tiêu đề H1 - Cắt câu chuẩn tiếng Việt, phối màu gradient cao cấp */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 leading-tight tracking-tight">
              Gạo Từ Thiện Giá Sỉ Tận Gốc
              <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-700 to-amber-700">
                Đóng Bao 5kg – 10kg & Giao Tận Nơi
              </span>
            </h1>

            {/* Đoạn mô tả: Súc tích, làm bật các cam kết đắt giá nhất */}
            <p className="text-sm sm:text-base text-stone-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              <strong className="text-stone-900 font-bold">Vựa Gạo Sóc Trăng</strong> chuyên cung cấp gạo Sạch đúng Chất lượng cam kết. Uy tín phục vụ cho Tập thể / cá nhân có lòng hảo tâm làm từ thiện cho bà con, hoặc cúng dường đến Chùa. Cung cấp gạo giá tốt cho bếp ăn. <strong className="text-emerald-900 font-bold">Giá gạo tận gốc không qua trung gian</strong>, đóng bao theo yêu cầu: 5kg, 10kg, 25kg (hỗ trợ 100% vỏ bao cho đơn hàng từ 1 tấn), giao hàng tận nơi và đầy đủ hóa đơn VAT.
            </p>

            {/* 4 Thẻ chỉ số tin cậy - Nâng cấp dạng thẻ kính sang trọng */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 py-1">
              <div className="bg-white/90 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-emerald-200/70 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all duration-300 text-center">
                <div className="text-lg sm:text-xl font-black text-emerald-800">4 Chi Nhánh</div>
                <div className="text-xs sm:text-sm text-stone-700 font-semibold mt-0.5">Bình Dương, TP.HCM, Tây Ninh</div>
              </div>

              <div className="bg-white/90 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-amber-200/70 shadow-xs hover:border-amber-400 hover:shadow-md transition-all duration-300 text-center">
                <div className="text-lg sm:text-xl font-black text-amber-700">Nhà Máy</div>
                <div className="text-xs sm:text-sm text-stone-700 font-semibold mt-0.5">Hội Cư, Đồng Tháp</div>
              </div>

              <div className="bg-white/90 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-emerald-200/70 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all duration-300 text-center">
                <div className="text-lg sm:text-xl font-black text-emerald-800">Bao Bì 0đ</div>
                <div className="text-xs sm:text-sm text-stone-700 font-semibold mt-0.5">Bao 10-25kg & đơn 1 tấn</div>
              </div>

              <div className="bg-white/90 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-amber-200/70 shadow-xs hover:border-amber-400 hover:shadow-md transition-all duration-300 text-center">
                <div className="text-lg sm:text-xl font-black text-amber-700">VAT 5%</div>
                <div className="text-xs sm:text-sm text-stone-700 font-semibold mt-0.5">Xuất hoá đơn đoàn thể</div>
              </div>
            </div>

            {/* Nút hành động CTA - Nâng cấp gradient & viền sang trọng */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-1">
              <Link
                href="#san-pham"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-700 via-emerald-800 to-teal-900 hover:from-emerald-800 hover:to-teal-950 text-white font-black px-6 py-3.5 rounded-2xl shadow-md shadow-emerald-800/25 transition-all duration-300 transform active:scale-95 text-sm sm:text-base border border-emerald-600/30"
              >
                <Package className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
                <span>Xem Bảng Giá Gạo Hôm Nay</span>
              </Link>
              
              <Link
                href="#he-thong-kho"
                className="inline-flex items-center justify-center gap-2.5 bg-white/95 hover:bg-stone-50 text-emerald-950 border-2 border-emerald-700/30 hover:border-emerald-700 font-extrabold px-5 py-3.5 rounded-2xl shadow-xs transition-all duration-300 transform active:scale-95 text-sm sm:text-base"
              >
                <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700" />
                <span>Hệ Thống 4 Kho & Nhà Máy</span>
              </Link>
            </div>

            {/* Bằng chứng tín nhiệm nhanh ngay dưới nút bấm */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-stone-700">
              <span className="flex text-amber-500 font-bold tracking-widest">★★★★★</span>
              <span>Được hơn <strong className="text-stone-900 font-bold">350+ Chùa & Nhóm Thiện Nguyện</strong> tin chọn</span>
            </div>
          </div>

          {/* Cột phải: Thẻ cam kết chất lượng sang trọng */}
          <div className="lg:col-span-5">
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl shadow-stone-900/5 border-2 border-amber-300/80">
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-rose-600 to-rose-700 text-white text-xs font-black px-3.5 py-1 rounded-full shadow-md shadow-rose-600/20">
                Tâm Sáng - Gạo Lành
              </div>

              <h2 className="text-lg sm:text-xl font-black text-stone-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Vì sao 350+ Quý đoàn tin tưởng?</span>
              </h2>

              <ul className="space-y-3.5">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm sm:text-base">Chất lượng không pha trộn</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-1">Tuyệt đối không pha gạo cũ mốc, không chất tạo mùi, không hóa chất bảo quản.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                    <Package className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm sm:text-base">Đóng bao từ thiện chuyên nghiệp</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-1">Bao bì đỏ/vàng trang nhã mang dòng chữ chúc phúc hoặc in decal tên Đoàn theo yêu cầu.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 mt-0.5 border border-blue-200">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm sm:text-base">Vận chuyển đúng hẹn & Bốc vác tận nơi</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-1">Tài xế và phụ xe hỗ trợ khiêng vác vào tận sảnh chùa, bếp ăn, Quý Phật tử không phải bận tâm.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center shrink-0 mt-0.5 border border-purple-200">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm sm:text-base">Đầy đủ hợp đồng & Hóa đơn VAT 5%</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-1">Hỗ trợ đầy đủ hóa đơn VAT điện tử và chứng từ nguồn gốc cho doanh nghiệp, công đoàn, quỹ từ thiện.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-5 pt-3.5 border-t border-stone-100 bg-amber-50/70 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 sm:p-5 rounded-b-3xl">
                <div className="flex items-center justify-between text-xs text-amber-950 font-semibold">
                  <span>Hỗ trợ gấp các chuyến phát quà đột xuất</span>
                  <span className="font-black text-amber-800 bg-amber-200/80 border border-amber-300 px-2.5 py-0.5 rounded-full shadow-2xs">Giao trong 2h</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
