'use client';

import React from 'react';
import { Camera, ExternalLink, MessageCircle, Heart, CheckCircle2, Video, Play, Sparkles } from 'lucide-react';
import { FACEBOOK_PAGE_URL, MESSENGER_URL, ZALO_URL } from '@/data/site';

interface ActivityItem {
  id: string;
  image: string;
  title: string;
  location: string;
  desc: string;
  tag: string;
}

const ACTIVITIES: ActivityItem[] = [
  {
    id: 'trao-gao-tan-tay',
    image: '/hoat-dong/trao-gao-tan-tay.jpg',
    title: 'Trao Gạo Tận Tay Người Dân Khó Khăn',
    location: 'Chương trình phát quà dân sinh',
    desc: 'Từng túi gạo trắng sạch được trao tận tay bà con đi xe đạp, người lao động nghèo trên phố.',
    tag: 'Phát Quà Tận Tay'
  },
  {
    id: 'chuyen-xe-trao-tang',
    image: '/hoat-dong/chuyen-xe-trao-tang.jpg',
    title: 'Tiếp Sức Các Cô Chú Lớn Tuổi',
    location: 'Khu dân cư & Mái ấm bảo trợ',
    desc: 'Các bao gạo nghĩa tình được chở đến tận nơi, trao cho các bác lớn tuổi và người neo đơn.',
    tag: 'Tiếp Sức Người Già'
  },
  {
    id: 'chong-bao-huong-lai-10kg',
    image: '/hoat-dong/chong-bao-huong-lai-10kg.jpg',
    title: 'Gạo Hương Lài 10kg Đóng Bao Sạch Đẹp',
    location: 'Kho thành phẩm Vựa Gạo Sóc Trăng',
    desc: 'Các hàng bao gạo dẻo thơm được may chỉ chắc chắn, xếp pallet khô ráo sẵn sàng xuất xưởng.',
    tag: 'Bao Bì Trang Trọng'
  },
  {
    id: 'kho-gao-xuat-hang',
    image: '/hoat-dong/kho-gao-xuat-hang.jpg',
    title: 'Kho Bãi Lớn – Xuất Hàng Nhanh Chóng',
    location: 'Hệ thống kho Vựa Gạo Sóc Trăng',
    desc: 'Kho bãi quy mô lớn, nhân viên bốc xếp tận tâm, sẵn sàng điều xe tải xuất hàng từ vài trăm ký đến hàng chục tấn.',
    tag: 'Giá Sỉ Tận Gốc'
  },
  {
    id: 'chuan-bi-bao-gao',
    image: '/hoat-dong/chuan-bi-bao-gao-5kg.jpg',
    title: 'Xếp Ngay Ngắn Trước Giờ Trao Tặng',
    location: 'Điểm tập kết trước giờ trao quà',
    desc: 'Từng phần gạo được sắp xếp ngăn nắp, bảo đảm đủ ký 100%, hạt gạo khô ráo và nguyên vẹn.',
    tag: 'Chu Đáo Tận Tâm'
  }
];

export const CharityActivityGallery: React.FC = () => {
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
          <div className="lg:col-span-7 relative bg-gray-950 overflow-hidden aspect-[4/3] lg:aspect-[16/11]">
            <img
              src="/hoat-dong/tet-se-chia-cai-be.jpg"
              alt="Chương trình Tết Sẻ Chia trao gạo từ thiện tại Cái Bè"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 bg-amber-500 text-amber-950 font-black text-xs px-3.5 py-1.5 rounded-full shadow-md">
                <Sparkles className="w-4 h-4 fill-amber-950" /> Hoạt Động Tiêu Biểu
              </span>
            </div>
            <div className="absolute bottom-3 left-4 right-4 text-white drop-shadow-md">
              <span className="text-xs text-amber-200 font-bold block">📍 Xã Đông Hoà Hiệp, Huyện Cái Bè, Tỉnh Tiền Giang</span>
              <p className="font-extrabold text-base sm:text-lg">Chương Trình Tết Sẻ Chia – Trao Tặng Gạo Nghĩa Tình</p>
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
              Hình ảnh thực tế trong chương trình <strong>Tết Sẻ Chia</strong>. Vựa Gạo Sóc Trăng đóng gói từng bao gạo 5kg dẻo thơm, 
              cùng Quý mạnh thường quân trao tận tay các hộ nghèo, người già neo đơn và trẻ em có hoàn cảnh khó khăn.
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
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-md transition text-xs sm:text-sm active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                Nhắn Zalo Nhận Tư Vấn Đóng Bao Quà
              </a>
            </div>
          </div>
        </div>

        {/* Lưới 5 hình ảnh hoạt động thực tế khác (chuẩn tỷ lệ, không bị cắt) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {ACTIVITIES.map((act) => (
            <div
              key={act.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Hình ảnh */}
              <div className="relative aspect-[4/3] bg-gray-900 overflow-hidden">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 bg-emerald-600/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs">
                    <CheckCircle2 className="w-3 h-3" /> {act.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] text-amber-200 font-medium block truncate">📍 {act.location}</span>
                  <h3 className="font-bold text-sm sm:text-base leading-snug drop-shadow-sm">{act.title}</h3>
                </div>
              </div>

              {/* Mô tả ngắn */}
              <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                  {act.desc}
                </p>
                <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-emerald-800">
                  <span>Vựa Gạo Sóc Trăng</span>
                  <span className="text-gray-400">Hình thật 100%</span>
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
                  className="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition shadow-sm active:scale-95"
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
    </section>
  );
};
