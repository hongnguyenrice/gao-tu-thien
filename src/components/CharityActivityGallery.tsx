'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Camera, ExternalLink, MessageCircle, Heart, CheckCircle2, Video, Play, Sparkles, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { FACEBOOK_PAGE_URL, MESSENGER_URL, ZALO_URL } from '@/data/site';

interface ActivityItem {
  id: string;
  image: string;
  title: string;
  location: string;
  desc: string;
  tag: string;
  spec: string;
}

const FEATURED_ACTIVITY: ActivityItem = {
  id: 'tet-se-chia-cai-be',
  image: '/hoat-dong/tet-se-chia-cai-be.jpg',
  title: 'Chương Trình Tết Sẻ Chia – Trao Tặng Gạo Nghĩa Tình',
  location: 'Xã Đông Hoà Hiệp, Huyện Cái Bè, Tỉnh Tiền Giang',
  desc: 'Hình ảnh thực tế trong chương trình Tết Sẻ Chia. Vựa Gạo Sóc Trăng đóng gói từng bao gạo 5kg dẻo thơm, cùng Quý mạnh thường quân trao tận tay các hộ nghèo, người già neo đơn và trẻ em có hoàn cảnh khó khăn.',
  tag: 'Hoạt Động Tiêu Biểu',
  spec: 'Túi 5kg quai xách phát quà tận tay',
};

const ACTIVITIES: ActivityItem[] = [
  {
    id: 'trao-gao-tan-tay',
    image: '/hoat-dong/trao-gao-tan-tay.jpg',
    title: 'Trao Gạo Tận Tay Người Dân Khó Khăn',
    location: 'Chương trình phát quà dân sinh',
    desc: 'Từng túi gạo trắng sạch được trao tận tay bà con đi xe đạp, người lao động nghèo trên phố.',
    tag: 'Phát Quà Tận Tay',
    spec: 'Túi 5kg quai xách chắc chắn',
  },
  {
    id: 'chuyen-xe-trao-tang',
    image: '/hoat-dong/chuyen-xe-trao-tang.jpg',
    title: 'Tiếp Sức Các Cô Chú Lớn Tuổi',
    location: 'Khu dân cư & Mái ấm bảo trợ',
    desc: 'Các bao gạo nghĩa tình được chở đến tận nơi, trao cho các bác lớn tuổi và người neo đơn.',
    tag: 'Tiếp Sức Người Già',
    spec: 'Gạo dẻo mềm, dễ ăn',
  },
  {
    id: 'chong-bao-huong-lai-10kg',
    image: '/hoat-dong/chong-bao-huong-lai-10kg.jpg',
    title: 'Gạo Hương Lài 10kg Đóng Bao Sạch Đẹp',
    location: 'Kho thành phẩm Vựa Gạo Sóc Trăng',
    desc: 'Các hàng bao gạo dẻo thơm được may chỉ chắc chắn, xếp pallet khô ráo sẵn sàng xuất xưởng.',
    tag: 'Bao Bì Trang Trọng',
    spec: 'Bao 10kg may máy công nghiệp',
  },
  {
    id: 'kho-gao-xuat-hang',
    image: '/hoat-dong/kho-gao-xuat-hang.jpg',
    title: 'Kho Bãi Lớn – Xuất Hàng Nhanh Chóng',
    location: 'Hệ thống kho Vựa Gạo Sóc Trăng',
    desc: 'Kho bãi quy mô lớn, nhân viên bốc xếp tận tâm, sẵn sàng điều xe tải xuất hàng từ vài trăm ký đến hàng chục tấn.',
    tag: 'Giá Sỉ Tận Gốc',
    spec: 'Điều xe tải giao tận điểm tập kết',
  },
  {
    id: 'chuan-bi-bao-gao',
    image: '/hoat-dong/chuan-bi-bao-gao-5kg.jpg',
    title: 'Xếp Ngay Ngắn Trước Giờ Trao Tặng',
    location: 'Điểm tập kết trước giờ trao quà',
    desc: 'Từng phần gạo được sắp xếp ngăn nắp, bảo đảm đủ ký 100%, hạt gạo khô ráo và nguyên vẹn.',
    tag: 'Chu Đáo Tận Tâm',
    spec: 'Cam kết cân chuẩn đủ ký 100%',
  },
  {
    id: 'dong-goi-tui-5kg-pallet',
    image: '/hoat-dong/dong-goi-tui-5kg-pallet.jpg',
    title: 'Xếp Pallet Túi 5kg Sẵn Sàng Xuất Kho',
    location: 'Khu vực đóng gói & chuẩn bị xuất xưởng',
    desc: 'Túi gạo 5kg tiện lợi được may chắc chắn, xếp pallet khô ráo sẵn sàng điều xe tải chở đến Quý đoàn.',
    tag: 'Đóng Túi 5kg Miễn Phí',
    spec: 'Miễn phí chi phí bao bì 100%',
  },
];

// Danh sách tổng hợp dùng cho trình xem ảnh lớn (Lightbox)
const ALL_GALLERY_ITEMS: ActivityItem[] = [FEATURED_ACTIVITY, ...ACTIVITIES];

export const CharityActivityGallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % ALL_GALLERY_ITEMS.length));
  }, []);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + ALL_GALLERY_ITEMS.length) % ALL_GALLERY_ITEMS.length
    );
  }, []);

  // Lắng nghe phím bấm Escape, Mũi tên trái/phải
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleCloseLightbox, handleNext, handlePrev]);

  const currentItem = lightboxIndex !== null ? ALL_GALLERY_ITEMS[lightboxIndex] : null;

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-emerald-50/30 to-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header khối */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2.5">
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" /> Hình Ảnh Thật – Người Thật – Việc Thật
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Hình Ảnh Hoạt Động & Giao Hàng Thực Tế
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
            Mỗi chuyến xe là một nhân duyên thiện lành. Vựa Gạo Sóc Trăng trân trọng từng đơn hàng của Quý mạnh thường quân, 
            cam kết giao đúng hẹn, hỗ trợ bốc vác chu đáo và đồng hành cùng các chương trình thiện nguyện trao tặng bà con.
          </p>
        </div>

        {/* TẤM HÌNH CHỦ ĐẠO LỚN: Tết Sẻ Chia Tại Cái Bè */}
        <div className="mb-10 bg-white rounded-3xl overflow-hidden border-2 border-amber-300 shadow-xl grid lg:grid-cols-12 items-center">
          <div
            onClick={() => setLightboxIndex(0)}
            className="lg:col-span-7 relative bg-gray-950 overflow-hidden aspect-[4/3] lg:aspect-[16/11] cursor-pointer group"
            title="Bấm để xem ảnh phóng to sắc nét"
          >
            <img
              src={FEATURED_ACTIVITY.image}
              alt={FEATURED_ACTIVITY.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 bg-amber-500 text-amber-950 font-black text-xs px-3.5 py-1.5 rounded-full shadow-md">
                <Sparkles className="w-4 h-4 fill-amber-950" /> {FEATURED_ACTIVITY.tag}
              </span>
            </div>
            <div className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs flex items-center gap-1.5 transition">
              <ZoomIn className="w-3.5 h-3.5" /> Chạm phóng to
            </div>
            <div className="absolute bottom-3 left-4 right-4 text-white drop-shadow-md">
              <span className="text-xs text-amber-200 font-bold block">📍 {FEATURED_ACTIVITY.location}</span>
              <p className="font-extrabold text-base sm:text-lg">{FEATURED_ACTIVITY.title}</p>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 space-y-4">
            <div className="inline-block bg-emerald-100 text-emerald-900 font-bold text-xs px-3 py-1 rounded-lg">
              🌾 Đồng Hành Cùng Đoàn Thiện Nguyện
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug">
              Bữa Cơm Nghĩa Tình Đến Tận Tay Từng Hộ Gia Đình Khó Khăn
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {FEATURED_ACTIVITY.desc}
            </p>

            <div className="space-y-2 pt-1 text-xs text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Gạo mới mùa gặt, hạt đều, không pha trộn</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Đóng túi 5kg may chắc chắn, thuận tiện trao tặng</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hỗ trợ chở xe tải và bốc dỡ tận nơi tổ chức</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-5 py-2.5 rounded-xl shadow-md transition text-xs sm:text-sm active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                Nhắn Zalo Nhận Tư Vấn Đóng Bao Quà
              </a>
            </div>
          </div>
        </div>

        {/* Lưới 6 hình ảnh hoạt động thực tế: Bố cục thoáng 100% không che ảnh + Lightbox */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {ACTIVITIES.map((act, idx) => (
            <div
              key={act.id}
              onClick={() => setLightboxIndex(idx + 1)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Hình ảnh thoáng 100%: Xóa gradient đen che ảnh, ảnh sáng rõ */}
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Badge Tag góc trên trái */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 bg-emerald-700/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs backdrop-blur-xs">
                    <CheckCircle2 className="w-3 h-3 text-emerald-300" /> {act.tag}
                  </span>
                </div>

                {/* Nút phóng to góc trên phải */}
                <div className="absolute top-3 right-3 bg-black/50 group-hover:bg-black/75 text-white p-1.5 rounded-full backdrop-blur-xs transition">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Thông tin chuyển xuống dưới ảnh: Thoáng và rõ ràng */}
              <div className="p-4 flex-1 flex flex-col justify-between bg-white space-y-2.5">
                <div>
                  <span className="text-[11px] font-semibold text-amber-800 flex items-center gap-1 truncate">
                    📍 {act.location}
                  </span>
                  <h3 className="font-black text-sm sm:text-base text-gray-900 mt-1 leading-snug group-hover:text-emerald-800 transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1.5">
                    {act.desc}
                  </p>

                  {/* Nhãn nghiệp vụ thực tế */}
                  <div className="mt-2.5 inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-emerald-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{act.spec}</span>
                  </div>
                </div>

                {/* Chân thẻ */}
                <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px]">
                  <span className="font-bold text-emerald-800">Vựa Gạo Sóc Trăng</span>
                  <span className="text-gray-500 flex items-center gap-1 font-medium group-hover:text-emerald-700 transition">
                    <Camera className="w-3 h-3 text-gray-400" /> Chạm xem ảnh lớn ➔
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Khối Video thực tế & Liên kết Fanpage Facebook */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Cột trái: Thông điệp & Các nút bấm */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-bold px-3 py-1 rounded-full">
                <Video className="w-3.5 h-3.5 text-blue-300" /> Kênh Fanpage Facebook Chính Thức
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">
                Xem Hàng Trăm Video & Chuyến Xe Giao Gạo Trực Tiếp
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 max-w-2xl leading-relaxed">
                Chúng tôi liên tục cập nhật video các chuyến xe tải chở gạo đến chùa, mái ấm và bà con vùng sâu vùng xa trên Fanpage <strong>Vựa Gạo Sóc Trăng</strong>. Quý đoàn có thể xem video thực tế hoặc nhắn tin trực tiếp để nhận hình ảnh bàn giao của đơn hàng mình!
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-blue-900/40 transform hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Xem Trọn Bộ Video Trên Fanpage</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={MESSENGER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-white/15 hover:bg-white/25 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition border border-white/20 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-blue-300" />
                  <span>Nhắn Messenger</span>
                </a>
                <a
                  href={ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition shadow-sm active:scale-95"
                >
                  <span>Nhắn Zalo Báo Giá</span>
                </a>
              </div>
            </div>

            {/* Cột phải: Video player phát trực tiếp clip ngắn */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 max-w-[220px] w-full bg-black">
                <video
                  src="/hoat-dong/video-giao-hang.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/hoat-dong/tet-se-chia-cai-be.jpg"
                  className="w-full h-auto object-cover aspect-[9/16]"
                >
                  Trình duyệt không hỗ trợ xem video.
                </video>
              </div>
              <span className="mt-2 text-[11px] text-blue-200 flex items-center gap-1">
                <Play className="w-3 h-3 fill-blue-300 text-blue-300" /> Bấm để xem clip giao gạo thực tế
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* MODAL LIGHTBOX: Xem hình ảnh thật phóng to toàn màn hình */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={handleCloseLightbox}
        >
          {/* Thanh trên cùng: Đếm số ảnh + Nút đóng */}
          <div
            className="flex items-center justify-between text-white max-w-5xl mx-auto w-full z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="bg-white/15 px-3 py-1 rounded-full text-xs font-bold text-emerald-300">
                {(lightboxIndex ?? 0) + 1} / {ALL_GALLERY_ITEMS.length}
              </span>
              <span className="text-xs text-gray-300 hidden sm:inline">
                Hình ảnh thực tế Vựa Gạo Sóc Trăng
              </span>
            </div>

            <button
              type="button"
              onClick={handleCloseLightbox}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition text-lg active:scale-95"
              aria-label="Đóng xem ảnh lớn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Khu vực giữa: Ảnh lớn + Nút chuyển qua lại */}
          <div
            className="relative flex-1 flex items-center justify-center my-2 max-w-5xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nút Prev */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-1 sm:left-3 z-10 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition active:scale-95 border border-white/20"
              aria-label="Ảnh trước"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Ảnh phóng to */}
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[62vh] sm:max-h-[70vh] max-w-full w-auto object-contain rounded-2xl shadow-2xl mx-auto select-none"
            />

            {/* Nút Next */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-1 sm:right-3 z-10 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition active:scale-95 border border-white/20"
              aria-label="Ảnh tiếp theo"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Thanh dưới cùng: Chú thích chi tiết & nút tư vấn */}
          <div
            className="max-w-2xl mx-auto w-full bg-white/10 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/15 text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-700 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {currentItem.tag}
                </span>
                <span className="bg-amber-400 text-amber-950 text-xs font-black px-2.5 py-0.5 rounded-full">
                  {currentItem.spec}
                </span>
              </div>
              <span className="text-xs text-amber-200 font-semibold truncate">
                📍 {currentItem.location}
              </span>
            </div>

            <h3 className="text-sm sm:text-base font-black text-white mt-1 leading-snug">
              {currentItem.title}
            </h3>
            <p className="text-xs text-gray-200 mt-1 leading-relaxed">
              {currentItem.desc}
            </p>

            <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between text-xs">
              <span className="text-emerald-300 font-semibold">
                ✓ Cam kết hình thật 100% từ các chuyến giao gạo
              </span>
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-bold underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Nhắn Zalo hỏi về chuyến này ➔</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
