'use client';

import React, { useState, useEffect } from 'react';
import { BRAND_INFO } from '@/data/mockData';
import {
  MapPin,
  Factory,
  Store,
  Phone,
  CheckCircle,
  Navigation,
  MessageCircle,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { mapsSearchUrl, ZALO_URL, PHONE_TEL, PHONE_DISPLAY } from '@/data/site';

export const WarehouseNetwork: React.FC = () => {
  // Trạng thái mở cửa tính an toàn phía Client sau khi mount (tránh Hydration mismatch)
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const currentHour = new Date().getHours();
    // Giờ mở cửa kho: 7h00 - 20h00
    setIsOpen(currentHour >= 7 && currentHour < 20);
  }, []);

  return (
    <section id="he-thong-kho" className="py-10 sm:py-16 bg-gradient-to-b from-white via-amber-50/40 to-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề phần hệ thống chi nhánh */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-950 text-xs font-semibold px-3.5 py-1 rounded-full mb-2.5">
            <Clock className="w-3.5 h-3.5 text-emerald-700" />
            <span>Mở cửa toàn hệ thống: <strong>07:00 – 20:00</strong> (Cả CN & Lễ)</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse ml-1" />
            <span className="text-[11px] font-bold text-emerald-800">{isOpen ? 'Đang mở' : 'Zalo 24/7'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
            Hệ Thống Chi Nhánh & Nhà Máy
          </h2>
          <p className="mt-2 text-gray-600 text-xs sm:text-base">
            <strong>{BRAND_INFO.name}</strong> điều xe tải từ kho gần nhất giúp Quý đoàn tiết kiệm tối đa cước phí vận chuyển.
          </p>
        </div>

        {/* Khối Banner Hình Ảnh & Cam Kết */}
        <div className="mb-8 sm:mb-12 bg-white rounded-3xl border border-amber-200 shadow-md overflow-hidden grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 p-4 sm:p-6 bg-emerald-950 flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-inner max-w-md w-full">
              <img
                src="/he-thong-kho-vua-gao-soc-trang.jpg"
                alt="Hệ thống chi nhánh & nhà máy Vựa Gạo Sóc Trăng"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="lg:col-span-7 p-5 sm:p-10 space-y-4 sm:space-y-5">
            <div className="inline-block bg-amber-100 text-amber-900 font-bold text-xs px-3 py-1 rounded-lg">
              🌾 Vựa Gạo Sóc Trăng - Phục Vụ Tận Tâm
            </div>

            <h3 className="text-xl sm:text-3xl font-black text-gray-900 leading-tight">
              Nhà Máy Xay Xát Đồng Tháp & 4 Chi Nhánh Kho Điều Xe Tải Giao Nhanh
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Nhờ sở hữu nhà máy xay xát công suất lớn ngay tại vựa lúa miền Tây cùng mạng lưới 4 chi nhánh kho phủ khắp các cửa ngõ TP.HCM, Bình Dương và Tây Ninh, chúng tôi cam kết:
            </p>

            <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-700">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Giá xuất xưởng không qua trung gian</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Giao xe tải hỏa tốc từ kho gần nhất</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Chở trực tiếp xe tải từ 500kg - 10 tấn</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hỗ trợ khuân vác vào sảnh chùa, bếp ăn</span>
              </div>
            </div>

            <div className="pt-1 flex flex-wrap gap-2.5 items-center">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-md transition transform hover:-translate-y-0.5 text-xs sm:text-sm"
              >
                <Phone className="w-4 h-4" />
                Hotline: {PHONE_DISPLAY}
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

        {/* Danh sách 4 Chi Nhánh + 1 Nhà Máy
            - Mobile: Snap Carousel vuốt ngang mượt mà (chỉ tốn ~200px chiều cao)
            - Tablet/Desktop: Grid 5 cột rộng rãi
        */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth no-scrollbar">
          
          {/* 4 Chi nhánh kho */}
          {BRAND_INFO.branches.map((b) => (
            <div
              key={b.id}
              className="w-[84vw] max-w-[310px] sm:w-auto shrink-0 snap-center bg-white rounded-2xl p-4 sm:p-5 border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header card: Icon cửa hàng + Badge khu vực ngắn gọn */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Store className="w-4 h-4 text-emerald-700" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full truncate">
                    {b.area}
                  </span>
                </div>

                <h3 className="font-extrabold text-gray-900 text-sm sm:text-base mb-1.5 leading-snug">{b.name}</h3>

                {/* Địa chỉ bấm được link Google Maps */}
                <a
                  href={mapsSearchUrl(b.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-1.5 text-xs sm:text-sm text-gray-800 hover:text-emerald-700 leading-snug mb-3 transition"
                  title="Bấm để mở bản đồ chỉ đường Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium underline decoration-gray-300 underline-offset-2 group-hover:decoration-emerald-600 line-clamp-2 sm:line-clamp-none">
                    {b.address}
                  </span>
                </a>
              </div>

              {/* Hàng nút hành động chuẩn mobile: [ Chỉ đường ] [ Zalo ] [ 📞 ] */}
              <div className="pt-2.5 border-t border-gray-100 flex items-center gap-1.5 sm:gap-2">
                <a
                  href={mapsSearchUrl(b.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition shadow-xs active:scale-95 whitespace-nowrap"
                  title={`Chỉ đường Google Maps đến ${b.name}`}
                >
                  <Navigation className="w-3.5 h-3.5 shrink-0" />
                  <span>Chỉ đường</span>
                </a>
                <a
                  href={ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2.5 sm:px-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition border border-blue-200 active:scale-95 shrink-0 whitespace-nowrap"
                  title="Nhắn tin Zalo điều xe tải"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Zalo</span>
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="py-2 px-2.5 bg-amber-50 hover:bg-amber-100 text-amber-900 rounded-xl font-bold text-xs flex items-center justify-center transition border border-amber-200 active:scale-95 shrink-0"
                  title={`Gọi hotline kho: ${PHONE_DISPLAY}`}
                  aria-label={`Gọi hotline kho: ${PHONE_DISPLAY}`}
                >
                  <Phone className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                </a>
              </div>
            </div>
          ))}

          {/* 1 Nhà máy xay xát Đồng Tháp */}
          <div className="w-[84vw] max-w-[310px] sm:w-auto shrink-0 snap-center bg-gradient-to-br from-amber-800 to-amber-950 text-white rounded-2xl p-4 sm:p-5 shadow-md flex flex-col justify-between sm:col-span-2 lg:col-span-1 border border-amber-700/50 hover:shadow-xl transition-all">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                  <Factory className="w-4 h-4 text-amber-200" />
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-amber-200 bg-white/10 px-2.5 py-0.5 rounded-full truncate border border-white/10">
                  {BRAND_INFO.factory.area}
                </span>
              </div>

              <h3 className="font-extrabold text-white text-sm sm:text-base mb-1.5 leading-snug">{BRAND_INFO.factory.name}</h3>

              {/* Địa chỉ bấm được */}
              <a
                href={mapsSearchUrl(BRAND_INFO.factory.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-1.5 text-xs sm:text-sm text-amber-100 hover:text-white leading-snug mb-3 transition"
                title="Bấm để mở bản đồ chỉ đường Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="font-medium underline decoration-amber-300/40 underline-offset-2 group-hover:decoration-white line-clamp-2 sm:line-clamp-none">
                  {BRAND_INFO.factory.address}
                </span>
              </a>
            </div>

            {/* 3 nút hành động của xưởng */}
            <div className="pt-2.5 border-t border-white/10 flex items-center gap-1.5 sm:gap-2">
              <a
                href={mapsSearchUrl(BRAND_INFO.factory.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-2 bg-amber-500 hover:bg-amber-400 text-amber-950 rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition shadow-xs active:scale-95 whitespace-nowrap"
                title="Xem chỉ đường Google Maps đến Nhà máy Đồng Tháp"
              >
                <Navigation className="w-3.5 h-3.5 shrink-0" />
                <span>Chỉ đường</span>
              </a>
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2.5 sm:px-3 bg-white/15 hover:bg-white/25 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition border border-white/20 active:scale-95 shrink-0 whitespace-nowrap"
                title="Nhắn Zalo xưởng Đồng Tháp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>Zalo</span>
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="py-2 px-2.5 bg-white/15 hover:bg-white/25 text-white rounded-xl font-bold text-xs flex items-center justify-center transition border border-white/20 active:scale-95 shrink-0"
                title={`Gọi hotline xưởng: ${PHONE_DISPLAY}`}
                aria-label={`Gọi hotline xưởng: ${PHONE_DISPLAY}`}
              >
                <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              </a>
            </div>
          </div>

        </div>

        {/* Chỉ dẫn vuốt nhẹ nhàng trên mobile */}
        <div className="flex sm:hidden items-center justify-center gap-1.5 text-xs text-emerald-800 font-semibold mt-2 animate-pulse">
          <span>👉 Vuốt ngang để xem 4 chi nhánh & nhà máy</span>
        </div>

        {/* Hộp ghi chú hỗ trợ bà con */}
        <div className="mt-6 sm:mt-8 bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
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
