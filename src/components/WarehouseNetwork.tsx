'use client';

import React from 'react';
import { BRAND_INFO } from '@/data/mockData';
import {
  MapPin,
  Factory,
  Store,
  Phone,
  CheckCircle,
  Navigation,
  MessageCircle,
} from 'lucide-react';
import { mapsSearchUrl, ZALO_URL, PHONE_TEL, PHONE_DISPLAY } from '@/data/site';

export const WarehouseNetwork: React.FC = () => {
  return (
    <section id="he-thong-kho" className="py-12 sm:py-16 bg-gradient-to-b from-white via-amber-50/40 to-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề phần hệ thống */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <Store className="w-3.5 h-3.5" /> Mạng Lưới Phục Vụ Bà Con Khắp Nơi
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
            Hệ Thống Chi Nhánh & Nhà Máy
          </h2>
          <p className="mt-2.5 text-gray-600 text-sm sm:text-base">
            <strong>{BRAND_INFO.name}</strong> – {BRAND_INFO.slogan}. Quý đoàn cần tìm kho gần chùa hoặc điểm tập kết phát quà, cứ bấm chỉ đường Google Maps hoặc nhắn Zalo để kho điều xe tải gần nhất!
          </p>
        </div>

        {/* Khối Banner Hình Ảnh & Thông Điệp */}
        <div className="mb-10 sm:mb-12 bg-white rounded-3xl border border-amber-200 shadow-md overflow-hidden grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 p-4 sm:p-6 bg-emerald-950 flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-inner max-w-md w-full">
              <img
                src="/he-thong-kho-vua-gao-soc-trang.jpg"
                alt="Hệ thống chi nhánh & nhà máy Vựa Gạo Sóc Trăng"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 space-y-5">
            <div className="inline-block bg-amber-100 text-amber-900 font-bold text-xs px-3 py-1 rounded-lg">
              🌾 Vựa Gạo Sóc Trăng - Phục Vụ Tận Tâm
            </div>

            <h3 className="text-xl sm:text-3xl font-black text-gray-900 leading-tight">
              Nhà Máy Xay Xát Đồng Tháp & 4 Chi Nhánh Kho Điều Xe Tải Giao Nhanh
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Nhờ sở hữu nhà máy xay xát công suất lớn ngay tại vựa lúa miền Tây cùng mạng lưới 4 chi nhánh kho phủ khắp các cửa ngõ TP.HCM, Bình Dương và Tây Ninh, chúng tôi cam kết:
            </p>

            <div className="grid sm:grid-cols-2 gap-2.5 text-xs text-gray-700">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Giá xuất xưởng không qua trung gian</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Giao xe tải hỏa tốc từ kho gần nhất</span>
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

            <div className="pt-2 flex flex-wrap gap-3 items-center">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-md transition transform hover:-translate-y-0.5 text-xs sm:text-sm"
              >
                <Phone className="w-4 h-4" />
                Hotline Tổng Đài: {PHONE_DISPLAY}
              </a>
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold px-4 py-2.5 rounded-xl border border-amber-300 transition text-xs sm:text-sm"
              >
                <MessageCircle className="w-4 h-4 text-amber-800" />
                Nhắn Zalo Tìm Kho Gần Bạn
              </a>
            </div>
          </div>
        </div>

        {/* Danh sách 4 Chi Nhánh + 1 Nhà Máy - Thiết kế Card Tinh Gọn & Tích Hợp Chỉ Đường Google Maps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
          
          {/* 4 Chi nhánh kho */}
          {BRAND_INFO.branches.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center shrink-0">
                    {b.index}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md truncate">
                    {b.area}
                  </span>
                </div>

                <h4 className="font-bold text-gray-900 text-sm mb-1.5">{b.name}</h4>

                <div className="flex items-start gap-1.5 text-xs text-gray-600 mb-4 min-h-[40px]">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="leading-snug text-[11px] sm:text-xs">{b.address}</span>
                </div>
              </div>

              {/* 2 nút hành động: Chỉ đường Maps + Nhắn Zalo kho */}
              <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
                <a
                  href={mapsSearchUrl(b.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1 transition border border-emerald-200 active:scale-95"
                  title={`Xem chỉ đường Google Maps đến ${b.name}`}
                >
                  <Navigation className="w-3 h-3 text-emerald-700 shrink-0" />
                  <span>Chỉ đường</span>
                </a>
                <a
                  href={ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1 transition border border-blue-200 active:scale-95 shrink-0"
                  title="Nhắn Zalo kho"
                >
                  <MessageCircle className="w-3 h-3 text-blue-600 shrink-0" />
                  <span>Zalo</span>
                </a>
              </div>
            </div>
          ))}

          {/* 1 Nhà máy xay xát miền Tây */}
          <div className="bg-gradient-to-br from-amber-800 to-amber-950 text-white rounded-2xl p-4 sm:p-5 shadow-md flex flex-col justify-between sm:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="w-7 h-7 rounded-lg bg-white/20 text-white flex items-center justify-center shrink-0">
                  <Factory className="w-3.5 h-3.5 text-amber-200" />
                </span>
                <span className="text-[10px] font-bold text-amber-200 bg-white/10 px-2 py-0.5 rounded-md truncate">
                  Tổng Xưởng Gạo
                </span>
              </div>

              <h4 className="font-bold text-white text-sm mb-1.5">{BRAND_INFO.factory.name}</h4>

              <div className="flex items-start gap-1.5 text-xs text-amber-100/90 mb-4 min-h-[40px]">
                <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                <span className="leading-snug text-[11px] sm:text-xs">{BRAND_INFO.factory.address}</span>
              </div>
            </div>

            {/* 2 nút hành động của xưởng */}
            <div className="pt-3 border-t border-white/10 flex items-center gap-2">
              <a
                href={mapsSearchUrl(BRAND_INFO.factory.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-2 bg-white/15 hover:bg-white/25 text-white rounded-xl font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1 transition border border-white/20 active:scale-95"
                title="Xem chỉ đường Google Maps đến Nhà máy Đồng Tháp"
              >
                <Navigation className="w-3 h-3 text-amber-300 shrink-0" />
                <span>Chỉ đường</span>
              </a>
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 bg-white/15 hover:bg-white/25 text-white rounded-xl font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1 transition border border-white/20 active:scale-95 shrink-0"
                title="Nhắn Zalo xưởng"
              >
                <MessageCircle className="w-3 h-3 text-amber-300 shrink-0" />
                <span>Zalo</span>
              </a>
            </div>
          </div>

        </div>

        {/* Hộp ghi chú hỗ trợ bà con */}
        <div className="mt-8 bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-amber-950 font-medium">
            <span className="text-xl">🚛</span>
            <p>
              <strong>Cam kết điều phối thông minh:</strong> Đoàn thiện nguyện chỉ cần chọn địa điểm trao quà, hệ thống sẽ tự động xuất hàng từ chi nhánh gần nhất để tiết kiệm chi phí và thời gian chở xe tải cho đoàn!
            </p>
          </div>
          <a
            href={`tel:${PHONE_TEL}`}
            className="shrink-0 text-xs font-bold text-emerald-800 bg-white px-4 py-2 rounded-xl border border-amber-300 hover:bg-emerald-50 transition"
          >
            Hotline: {PHONE_DISPLAY}
          </a>
        </div>

      </div>
    </section>
  );
};
