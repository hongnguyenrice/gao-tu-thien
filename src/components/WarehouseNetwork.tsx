'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  ChevronRight,
} from 'lucide-react';
import { mapsSearchUrl, ZALO_URL, PHONE_TEL, PHONE_DISPLAY } from '@/data/site';

export const WarehouseNetwork: React.FC = () => {
  // Trạng thái mở cửa tính an toàn phía Client sau khi mount (tránh Hydration mismatch)
  const [isOpen, setIsOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentHour = new Date().getHours();
    // Giờ mở cửa kho: 7h00 - 20h00
    setIsOpen(currentHour >= 7 && currentHour < 20);
  }, []);

  // Lắng nghe scroll để cập nhật chấm định vị (Dots indicator) trên mobile
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth * 0.84; // 84vw
    if (cardWidth > 0) {
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), 4));
    }
  };

  const scrollToCard = (idx: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cardWidth = container.offsetWidth * 0.84 + 14; // card width + gap
    container.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
    setActiveIndex(idx);
  };

  return (
    <section id="he-thong-kho" className="py-12 sm:py-18 bg-gradient-to-b from-stone-50/50 via-white to-stone-50/40 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Tiêu đề mục & Trạng thái mở cửa toàn hệ thống */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-950 text-xs font-bold px-4 py-1.5 rounded-full mb-3 shadow-xs border border-emerald-300/60 backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-emerald-700" />
            <span>Mở cửa toàn hệ thống: <strong>07:00 – 20:00</strong> (Cả CN & Lễ)</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse ml-1" />
            <span className="text-[11px] font-black text-emerald-800 bg-emerald-100/80 px-2 py-0.2 rounded-full">{isOpen ? 'Đang mở' : 'Zalo 24/7'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Hệ Thống Chi Nhánh & Nhà Máy
          </h2>
          <p className="mt-2 text-stone-600 text-xs sm:text-base font-normal">
            <strong className="text-stone-900 font-bold">{BRAND_INFO.name}</strong> điều xe tải trực tiếp từ kho gần nhất để Quý đoàn nhận gạo nhanh và tiết kiệm cước phí nhất.
          </p>
        </div>

        {/* 2. DANH SÁCH 4 CHI NHÁNH & 1 NHÀ MÁY */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth no-scrollbar"
        >
          {/* 4 Chi nhánh kho */}
          {BRAND_INFO.branches.map((b) => (
            <div
              key={b.id}
              className="w-[84vw] max-w-[310px] sm:w-auto shrink-0 snap-center bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/80 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header card: Icon cửa hàng + Badge khu vực ngắn gọn */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200/80">
                    <Store className="w-4 h-4 text-emerald-700" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-extrabold text-emerald-900 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full truncate">
                    {b.area}
                  </span>
                </div>

                <h3 className="font-extrabold text-stone-900 text-sm sm:text-base mb-1.5 leading-snug">{b.name}</h3>

                {/* Địa chỉ bấm được mở Google Maps */}
                <a
                  href={mapsSearchUrl(b.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-1.5 text-xs sm:text-sm text-stone-600 hover:text-emerald-700 leading-snug mb-3.5 transition"
                  title="Bấm để mở bản đồ chỉ đường Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium group-hover:text-emerald-700 line-clamp-2 sm:line-clamp-none">
                    {b.address}
                  </span>
                </a>
              </div>

              {/* Hàng nút tương tác chuẩn: [ Chỉ đường ] [ Zalo ] [ 📞 ] */}
              <div className="pt-3 border-t border-stone-100 flex items-center gap-1.5 sm:gap-2">
                <a
                  href={mapsSearchUrl(b.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition shadow-2xs active:scale-95 whitespace-nowrap"
                  title={`Chỉ đường Google Maps đến ${b.name}`}
                >
                  <Navigation className="w-3.5 h-3.5 shrink-0" />
                  <span>Chỉ đường</span>
                </a>
                <a
                  href={ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2.5 sm:px-3 bg-blue-50 hover:bg-blue-100 text-blue-800 rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition border border-blue-200 active:scale-95 shrink-0 whitespace-nowrap"
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
          <div className="w-[84vw] max-w-[310px] sm:w-auto shrink-0 snap-center bg-gradient-to-br from-[#451a03] via-[#78350f] to-[#291102] text-white rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col justify-between sm:col-span-2 lg:col-span-1 border border-amber-500/40 hover:shadow-2xl hover:border-amber-400 hover:-translate-y-0.5 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0 border border-white/20">
                  <Factory className="w-4 h-4 text-amber-300" />
                </span>
                <span className="text-[11px] sm:text-xs font-black text-amber-300 bg-white/10 px-2.5 py-0.5 rounded-full truncate border border-white/20">
                  {BRAND_INFO.factory.area}
                </span>
              </div>

              <h3 className="font-extrabold text-white text-sm sm:text-base mb-1.5 leading-snug">{BRAND_INFO.factory.name}</h3>

              <a
                href={mapsSearchUrl(BRAND_INFO.factory.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-1.5 text-xs sm:text-sm text-amber-100 hover:text-white leading-snug mb-3.5 transition"
                title="Bấm để mở bản đồ chỉ đường Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="font-medium group-hover:text-white line-clamp-2 sm:line-clamp-none">
                  {BRAND_INFO.factory.address}
                </span>
              </a>
            </div>

            {/* 3 nút hành động của xưởng */}
            <div className="pt-3 border-t border-white/15 flex items-center gap-1.5 sm:gap-2">
              <a
                href={mapsSearchUrl(BRAND_INFO.factory.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-amber-950 rounded-xl font-black text-xs flex items-center justify-center gap-1 transition shadow-xs active:scale-95 whitespace-nowrap"
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

        {/* 3. Chấm định vị Dots Indicator trên Mobile (5 điểm: 4 kho + 1 nhà máy) */}
        <div className="flex sm:hidden items-center justify-center gap-2 mt-2 mb-6">
          {[0, 1, 2, 3, 4].map((idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              aria-label={`Xem kho hoặc nhà máy vị trí ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === idx
                  ? 'w-6 h-2 bg-emerald-600'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* 4. Khối Cam Kết Năng Lực Xưởng (Tinh gọn, đặt dưới làm bảo chứng vận hành) */}
        <div className="mt-4 sm:mt-10 bg-white rounded-3xl border border-amber-200/90 shadow-sm overflow-hidden grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-4 p-4 sm:p-6 bg-emerald-950 flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-inner max-w-sm w-full">
              <img
                src="/he-thong-kho-vua-gao-soc-trang.jpg"
                alt="Nhà máy xay xát & hệ thống chi nhánh kho Vựa Gạo Sóc Trăng"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="lg:col-span-8 p-5 sm:p-8 space-y-3.5">
            <div className="flex items-center gap-2">
              <span className="bg-amber-100 text-amber-900 font-bold text-xs px-3 py-1 rounded-lg">
                🌾 Năng Lực Cung Ứng Trực Tiếp
              </span>
              <span className="text-xs text-gray-500 hidden sm:inline">
                Nhà máy Đồng Tháp & 4 chi nhánh cửa ngõ
              </span>
            </div>

            <h3 className="text-base sm:text-xl font-extrabold text-gray-900 leading-snug">
              Cam Kết Điều Phối Xe Tải Thông Minh Cho Các Đoàn Từ Thiện
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Quý đoàn chỉ cần chọn địa điểm trao quà (chùa, bếp ăn, điểm phát quà tập trung), hệ thống kho sẽ tự động xuất hàng từ chi nhánh gần nhất để tiết kiệm tối đa cước phí vận chuyển.
            </p>

            {/* 4 Cam kết dạng icon pill tinh gọn - Không chiếm diện tích */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs text-gray-800">
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-medium text-[11px] sm:text-xs">Giá xuất xưởng 0 qua trung gian</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-medium text-[11px] sm:text-xs">Xe tải hỏa tốc từ kho gần nhất</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-medium text-[11px] sm:text-xs">Chở tải từ 500kg – 10 tấn</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-medium text-[11px] sm:text-xs">Hỗ trợ khuân vác vào sảnh chùa</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
