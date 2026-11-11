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
  Star,
  Camera,
  Video,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import {
  mapsSearchUrl,
  ZALO_URL,
  PHONE_TEL,
  PHONE_DISPLAY,
  MAIN_BRANCH_MAP_EMBED,
  GOOGLE_MAPS_PLACE_URL,
} from '@/data/site';

export const WarehouseNetwork: React.FC = () => {
  // Trạng thái mở cửa tính an toàn phía Client sau khi mount (tránh Hydration mismatch)
  const [isOpen, setIsOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentHour = new Date().getHours();
    // Giờ mở cửa kho: 7h00 - 20h00
    setIsOpen(currentHour >= 7 && currentHour < 20);
  }, []);

  // Trì hoãn nạp iframe Google Maps cho đến khi người dùng cuộn gần tới khối này (giảm TBT & tiết kiệm CPU)
  useEffect(() => {
    if (!mapContainerRef.current || isMapLoaded) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsMapLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(mapContainerRef.current);
    return () => observer.disconnect();
  }, [isMapLoaded]);

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
            <span className="text-xs font-black text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full">{isOpen ? 'Đang mở cửa' : 'Zalo tư vấn 24/7'}</span>
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
              className={`w-[84vw] max-w-[310px] sm:w-auto shrink-0 snap-center bg-white rounded-2xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between ${
                b.isMain
                  ? 'border-emerald-500/60 ring-2 ring-emerald-500/20 shadow-md hover:shadow-xl hover:-translate-y-0.5'
                  : 'border-stone-200/80 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-0.5'
              }`}
            >
              <div>
                {/* Header card: Icon cửa hàng + Badge khu vực ngắn gọn */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200/80">
                    <Store className="w-4 h-4 text-emerald-700" />
                  </span>
                  <div className="flex items-center gap-1 overflow-hidden">
                    {b.isMain && (
                      <span className="text-xs font-black text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full flex items-center gap-0.5 shrink-0">
                        <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" /> Trụ sở chính
                      </span>
                    )}
                    <span className="text-xs sm:text-sm font-extrabold text-emerald-900 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full truncate">
                      {b.area}
                    </span>
                  </div>
                </div>

                <h3 className="font-extrabold text-stone-900 text-sm sm:text-base mb-1.5 leading-snug">{b.name}</h3>

                {/* Địa chỉ bấm được mở Google Maps */}
                <a
                  href={mapsSearchUrl(b.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-1.5 text-xs sm:text-sm text-stone-600 hover:text-emerald-700 leading-snug mb-2 transition"
                  title="Bấm để mở bản đồ chỉ đường Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium group-hover:text-emerald-700 line-clamp-2 sm:line-clamp-none">
                    {b.address}
                  </span>
                </a>

                {b.hasMedia && (
                  <div className="mb-3">
                    <a
                      href={GOOGLE_MAPS_PLACE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 px-2.5 py-1 rounded-md transition"
                      title="Xem ảnh và video thực tế cửa hàng trên Google Maps"
                    >
                      <Camera className="w-3 h-3 text-emerald-700" />
                      <span>Có đầy đủ ảnh & video thực tế</span>
                    </a>
                  </div>
                )}
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
                <span className="text-xs sm:text-sm font-black text-amber-300 bg-white/10 px-2.5 py-0.5 rounded-full truncate border border-white/20">
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
        <div className="flex sm:hidden items-center justify-center gap-1 mt-2 mb-6">
          {[0, 1, 2, 3, 4].map((idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              aria-label={`Xem kho hoặc nhà máy vị trí ${idx + 1}`}
              className="p-3 min-w-[48px] min-h-[48px] flex items-center justify-center"
            >
              <span
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx
                    ? 'w-6 h-2 bg-emerald-600'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            </button>
          ))}
        </div>

        {/* 4. KHỐI BẢN ĐỒ GOOGLE MAPS VÀ HÌNH ẢNH / VIDEO THỰC TẾ CHI NHÁNH CHÍNH */}
        <div className="mt-8 sm:mt-12 bg-white rounded-3xl border border-stone-200/90 shadow-luxury overflow-hidden">
          {/* Header của khối */}
          <div className="px-5 py-4 sm:px-8 sm:py-5 bg-gradient-to-r from-emerald-950 via-emerald-900 to-stone-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-emerald-800/40">
            <div>
              <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-black tracking-wider uppercase mb-1">
                <MapPin className="w-3.5 h-3.5 text-amber-300" />
                <span>Trụ Sở Chính & Tổng Kho Điều Phối Lái Thiêu</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                <span>Bản Đồ Google Maps & Hình Ảnh, Video Thực Tế</span>
                <span className="hidden sm:inline-flex items-center gap-1 bg-amber-400 text-stone-950 text-xs font-black px-2.5 py-0.5 rounded-full">
                  <Star className="w-3 h-3 fill-stone-950 text-stone-950" /> 5.0 Đã xác minh
                </span>
              </h3>
            </div>

            <a
              href={GOOGLE_MAPS_PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md transition active:scale-95 shrink-0"
              title="Mở Google Maps xem hình ảnh thực tế và video tại cửa hàng"
            >
              <Camera className="w-4 h-4 text-stone-950" />
              <span>Xem Ảnh & Video Trên Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-950" />
            </a>
          </div>

          {/* Thân khối: Bản đồ bên trái, Thông tin & Bằng chứng thực tế bên phải */}
          <div className="p-4 sm:p-6 lg:p-8 grid lg:grid-cols-12 gap-6 items-center">
            {/* Cột bản đồ Embed Google Maps (7 cols) - Tự động nạp khi cuộn đến */}
            <div className="lg:col-span-7">
              <div
                ref={mapContainerRef}
                className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-stone-200/90 shadow-inner bg-stone-100 flex items-center justify-center"
              >
                {isMapLoaded ? (
                  <>
                    <iframe
                      src={MAIN_BRANCH_MAP_EMBED}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="Bản đồ vị trí Vựa Gạo Sóc Trăng - Chi nhánh chính Lái Thiêu"
                      className="w-full h-full"
                    />
                    {/* Floating badge trên bản đồ */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-stone-200 flex items-center gap-2 pointer-events-none">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span className="text-xs font-bold text-stone-900">Chi Nhánh Chính Lái Thiêu</span>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center text-stone-500">
                    <MapPin className="w-8 h-8 text-emerald-600 animate-bounce mb-2" />
                    <span className="text-xs font-bold text-stone-700">Bản Đồ Google Maps Vựa Gạo Sóc Trăng</span>
                    <span className="text-xs text-stone-600 mt-1">Đang kết nối vệ tinh và dữ liệu đường đi...</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-stone-600 mt-2 flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Bản đồ tương tác trực tiếp: Phóng to, thu nhỏ hoặc bấm &quot;Chỉ đường&quot; để lái xe đến tận cửa kho.</span>
              </p>
            </div>

            {/* Cột thông tin chi tiết & chứng nhận thực tế (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="bg-emerald-50 text-emerald-900 text-xs font-black px-2.5 py-1 rounded-lg border border-emerald-200">
                    🏢 Tổng Kho & Điểm Bán Lẻ
                  </span>
                  <span className="bg-amber-50 text-amber-900 text-xs font-black px-2.5 py-1 rounded-lg border border-amber-200 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> 5.0 Google Business
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-black text-stone-900 leading-tight">
                  Vựa Gạo Sóc Trăng – Chi Nhánh 1
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-medium mt-1">
                  Số 11, Lô 2, Đường Lái Thiêu 9, P. Lái Thiêu, TP. Thuận An, Bình Dương
                </p>
              </div>

              {/* Các điểm nhấn truyền thông tin cậy: Hình ảnh + Video thực tế */}
              <div className="space-y-2.5 text-xs text-stone-700 bg-stone-50/80 p-3.5 sm:p-4 rounded-2xl border border-stone-200/70">
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Camera className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block font-bold">Hình ảnh thực tế mặt tiền & kho gạo:</strong>
                    <span>Hình chụp trực tiếp kho bãi, xe tải xuất hàng và các mẫu gạo từ thiện luôn có sẵn để đoàn kiểm tra.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Video className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block font-bold">Video đóng bao & cân ký minh bạch:</strong>
                    <span>Clip quay cận cảnh may miệng bao, kiểm tra cân nặng và bốc xếp hàng giao đến chùa, mái ấm và bếp ăn thiện nguyện.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block font-bold">Giờ phục vụ: 07:00 – 20:00 (Mỗi ngày):</strong>
                    <span>Mở cửa liên tục cả Thứ 7, Chủ Nhật và ngày Lễ để Quý khách ghé lấy mẫu hoặc bốc hàng nhanh.</span>
                  </div>
                </div>
              </div>

              {/* Các nút CTA thao tác nhanh */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={GOOGLE_MAPS_PLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs active:scale-95 transition text-center"
                >
                  <Navigation className="w-3.5 h-3.5 shrink-0" />
                  <span>Chỉ Đường Đến Kho</span>
                </a>

                <a
                  href={`tel:${PHONE_TEL}`}
                  className="py-2.5 px-3 bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-300 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                  <span>Gọi: {PHONE_DISPLAY}</span>
                </a>

                <a
                  href={ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 py-2.5 px-3 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 rounded-xl font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Nhắn Zalo Nhận Báo Giá & Video Mẫu Gạo Mới Nhất</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Khối Cam Kết Năng Lực Xưởng (Tinh gọn, đặt dưới làm bảo chứng vận hành) */}
        <div className="mt-4 sm:mt-10 bg-white rounded-3xl border border-amber-200/90 shadow-sm overflow-hidden grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-4 p-4 sm:p-6 bg-emerald-950 flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-inner max-w-sm w-full">
              <picture>
                <source srcSet="/he-thong-kho-vua-gao-soc-trang.webp" type="image/webp" />
                <img
                  src="/he-thong-kho-vua-gao-soc-trang.jpg"
                  alt="Nhà máy xay xát & hệ thống chi nhánh kho Vựa Gạo Sóc Trăng"
                  width={720}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </picture>
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
                <span className="font-semibold text-xs sm:text-sm">Giá xuất xưởng 0 qua trung gian</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">Xe tải hỏa tốc từ kho gần nhất</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">Chở tải từ 500kg – 10 tấn</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">Hỗ trợ khuân vác vào sảnh chùa</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
