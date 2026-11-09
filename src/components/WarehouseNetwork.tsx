'use client';

import React from 'react';
import { BRAND_INFO } from '@/data/mockData';
import { MapPin, Factory, Store, Phone, CheckCircle, Navigation } from 'lucide-react';

export const WarehouseNetwork: React.FC = () => {
  return (
    <section id="he-thong-kho" className="py-16 bg-gradient-to-b from-white via-amber-50/40 to-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề phần hệ thống */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <Store className="w-3.5 h-3.5" /> Mạng Lưới Phục Vụ Bà Con Khắp Nơi
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Hệ Thống Chi Nhánh & Nhà Máy
          </h2>
          <p className="mt-3 text-gray-600 text-base sm:text-lg">
            <strong>{BRAND_INFO.name}</strong> – {BRAND_INFO.slogan}. Quý đoàn cần tìm chi nhánh gần chùa hoặc điểm tập kết phát quà, cứ nhắn địa chỉ, chúng tôi kiểm tra và điều xe từ chi nhánh phù hợp nhất!
          </p>
        </div>

        {/* Khối Banner Hình Ảnh & Thông Điệp */}
        <div className="mb-12 bg-white rounded-3xl border border-amber-200 shadow-lg overflow-hidden grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 p-4 sm:p-6 bg-emerald-950 flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-inner max-w-md w-full">
              <img
                src="/he-thong-kho-vua-gao-soc-trang.jpg"
                alt="Hệ thống chi nhánh & nhà máy Vựa Gạo Sóc Trăng"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
            <div className="inline-block bg-amber-100 text-amber-900 font-bold text-xs px-3 py-1 rounded-lg">
              🌾 Vựa Gạo Sóc Trăng - Phục Vụ Tận Tâm
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
              Nhà Máy Xay Xát Trực Tiếp Tại Đồng Tháp & 4 Chi Nhánh Điều Phối Nhanh
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Nhờ sở hữu nhà máy xay xát công suất lớn ngay tại vựa lúa miền Tây cùng mạng lưới 4 chi nhánh kho phủ rộng khắp các cửa ngõ TP.HCM, Bình Dương và Tây Ninh, chúng tôi cam kết:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 text-xs text-gray-700">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Giá xuất xưởng không qua lái buôn</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Giao hỏa tốc từ chi nhánh gần nhất</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Chở trực tiếp xe tải từ 500kg - 10 tấn</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hỗ trợ khuân vác vào sảnh chùa, bếp ăn</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href={`tel:${BRAND_INFO.hotline.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition transform hover:-translate-y-0.5 text-sm"
              >
                <Phone className="w-4 h-4" />
                Hotline Tổng Đài: {BRAND_INFO.hotlineDisplay}
              </a>
              <a
                href={`https://zalo.me/${BRAND_INFO.zalo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold px-5 py-3 rounded-xl border border-amber-300 transition text-sm"
              >
                Nhắn Zalo Tìm Chi Nhánh Gần Bạn
              </a>
            </div>
          </div>
        </div>

        {/* Danh sách 4 Chi Nhánh + 1 Nhà Máy */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* 4 Chi nhánh */}
          {BRAND_INFO.branches.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-black text-sm flex items-center justify-center">
                    {b.index}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    Chi nhánh
                  </span>
                </div>

                <h4 className="font-bold text-gray-900 text-sm mb-2">{b.name}</h4>

                <div className="flex items-start gap-2 text-xs text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{b.address}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <a
                  href={`tel:${BRAND_INFO.hotline.replace(/\s+/g, '')}`}
                  className="w-full py-1.5 px-2 bg-gray-50 hover:bg-emerald-50 text-emerald-700 hover:text-emerald-800 rounded-lg font-bold text-xs flex items-center justify-center gap-1 transition"
                >
                  <Phone className="w-3 h-3" /> {b.phone}
                </a>
              </div>
            </div>
          ))}

          {/* 1 Nhà máy */}
          <div className="bg-gradient-to-br from-amber-700 to-amber-900 text-white rounded-2xl p-5 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center">
                  <Factory className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-bold text-amber-200 bg-white/10 px-2 py-0.5 rounded-md">
                  Nhà máy
                </span>
              </div>

              <h4 className="font-bold text-white text-sm mb-2">{BRAND_INFO.factory.name}</h4>

              <div className="flex items-start gap-2 text-xs text-amber-100 mb-3">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span className="leading-snug">{BRAND_INFO.factory.address}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10">
              <a
                href={`tel:${BRAND_INFO.hotline.replace(/\s+/g, '')}`}
                className="w-full py-1.5 px-2 bg-white/20 hover:bg-white/30 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1 transition"
              >
                <Phone className="w-3 h-3" /> {BRAND_INFO.factory.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Hộp ghi chú hỗ trợ bà con */}
        <div className="mt-8 bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-amber-950 font-medium">
            <span className="p-2 bg-amber-200 rounded-xl">
              <Navigation className="w-5 h-5 text-amber-800" />
            </span>
            <span>
              <strong>Cô chú, Quý đoàn cần tìm chi nhánh gần nhà?</strong> Cứ nhắn địa chỉ cho shop qua Zalo hoặc Hotline <strong>{BRAND_INFO.hotlineDisplay}</strong>, shop kiểm tra và hướng dẫn chi nhánh phù hợp nhất!
            </span>
          </div>

          <a
            href={`https://zalo.me/${BRAND_INFO.zalo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-bold bg-amber-700 hover:bg-amber-800 text-white px-4 py-2.5 rounded-xl shadow-xs transition"
          >
            Nhắn Địa Chỉ Nhận Hướng Dẫn
          </a>
        </div>

      </div>
    </section>
  );
};
