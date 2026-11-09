'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Package, ShieldCheck, Truck, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/80 via-white to-amber-50/30 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-amber-100">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 right-10 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-100/90 text-emerald-950 border border-emerald-300/80 px-4 py-1.5 rounded-full text-sm font-semibold shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
              Vựa Gạo Sóc Trăng – Nhà Máy Đồng Tháp & 4 Chi Nhánh TP.HCM, Tây Ninh
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Gạo Ngon – Giá Tốt – Giao Tận Nhà <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-700 to-amber-700">
                Cho Các Chương Trình Từ Thiện
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong>Vựa Gạo Sóc Trăng</strong> chuyên cung cấp gạo tận gốc cho chùa, bếp ăn tình thương 0 đồng, mái ấm cơ nhỡ và các đoàn cứu trợ. 
              <strong> Giá xuất xưởng từ nhà máy</strong>, hỗ trợ chia bao 5kg - 10kg miễn phí, giao tận nơi bằng xe tải chi nhánh gần nhất và đầy đủ hóa đơn VAT.
            </p>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3">
              <div className="bg-white p-3.5 rounded-2xl border border-emerald-100 shadow-xs">
                <div className="text-2xl font-black text-emerald-700">4 Chi Nhánh</div>
                <div className="text-xs text-gray-500 font-medium">TP.HCM, Tây Ninh</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-emerald-100 shadow-xs">
                <div className="text-2xl font-black text-amber-700">Nhà Máy</div>
                <div className="text-xs text-gray-500 font-medium">Hội Cư, Đồng Tháp</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-emerald-100 shadow-xs">
                <div className="text-2xl font-black text-emerald-700">0đ</div>
                <div className="text-xs text-gray-500 font-medium">Phí đóng túi 5-10kg</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-emerald-100 shadow-xs">
                <div className="text-2xl font-black text-amber-700">VAT</div>
                <div className="text-xs text-gray-500 font-medium">Xuất hoá đơn đoàn thể</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                href="#he-thong-kho"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition transform hover:-translate-y-0.5"
              >
                <Truck className="w-5 h-5" />
                Xem Địa Chỉ 4 Chi Nhánh & Kho
              </Link>
              <Link
                href="#san-pham"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-300 font-bold px-7 py-3.5 rounded-xl shadow-xs transition transform hover:-translate-y-0.5"
              >
                <Package className="w-5 h-5 text-amber-600" />
                Bảng Giá Gạo Hôm Nay
              </Link>
            </div>
          </div>

          {/* Right column: Highlights Card / Infographic */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-200/80">
              <div className="absolute -top-3 -right-3 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Tâm Sáng - Gạo Lành
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-600" />
                Vì sao 350+ Quý đoàn tin tưởng?
              </h2>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Chất lượng không pha trộn</h3>
                    <p className="text-xs text-gray-600">Tuyệt đối không pha gạo cũ mốc, không chất tạo mùi, không chất tẩy trắng hoá học.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Package className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Đóng bao mẫu mã từ thiện chuyên nghiệp</h3>
                    <p className="text-xs text-gray-600">Bao bì đỏ/vàng trang nhã mang dòng chữ chúc phúc hoặc in decal tên Đoàn theo yêu cầu.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Vận chuyển đúng hẹn & Bốc vác tận kho</h3>
                    <p className="text-xs text-gray-600">Tài xế và phụ xe hỗ trợ khiêng vác vào tận sảnh chùa, bếp ăn, không để Quý Phật tử, Quý đoàn phải vất vả.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-gray-100 bg-amber-50/50 -mx-6 -mb-6 p-6 rounded-b-3xl">
                <div className="flex items-center justify-between text-xs text-amber-900 font-medium">
                  <span>Hỗ trợ gấp cho các chuyến từ thiện đột xuất</span>
                  <span className="font-bold text-amber-700">Giao nhanh trong 2h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
