'use client';

import React from 'react';
import { Camera, ExternalLink, MessageCircle, Heart, CheckCircle2, Video, Play } from 'lucide-react';
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
    id: 'phat-qua-mien-trung',
    image: '/hoat-dong/phat-qua-mien-trung.jpg',
    title: 'Hồng Nguyên Sẻ Chia Cùng Bà Con',
    location: 'Sân khấu chương trình từ thiện',
    desc: 'Hàng trăm bao gạo 5kg cao cấp được đóng túi cẩn thận, xếp trang trọng cùng các phần quà nhu yếu phẩm.',
    tag: 'Sẻ Chia Yêu Thương'
  },
  {
    id: 'hoi-truong-phat-qua',
    image: '/hoat-dong/hoi-truong-phat-qua.jpg',
    title: 'Hội Trường Trao Quà Thiện Nguyện',
    location: 'Hội trường tiếp nhận quà',
    desc: 'Đông đảo bà con tập trung nhận từng suất quà nghĩa tình, tiếp sức cho các hộ gia đình vượt qua khó khăn.',
    tag: 'Đồng Hành Cùng Đoàn'
  },
  {
    id: 'kiem-tra-gao',
    image: '/hoat-dong/kiem-tra-gao-tu-thien.jpg',
    title: 'Kiểm Kê Số Lượng & Nghiệm Thu',
    location: 'Khu tập kết phẩm vật',
    desc: 'Trưởng đoàn và tình nguyện viên kiểm tra kỹ lưỡng từng bao gạo, bảo đảm hạt mới, thơm ngon, cân ký đủ 100%.',
    tag: 'Minh Bạch Số Lượng'
  },
  {
    id: 'kho-gao-xuat-hang',
    image: '/hoat-dong/kho-gao-xuat-hang.jpg',
    title: 'Kho Gạo Lớn – Xuất Hàng Nhanh',
    location: 'Hệ thống kho Vựa Gạo Sóc Trăng',
    desc: 'Kho bãi quy mô lớn, nhân viên bốc xếp tận tâm, sẵn sàng điều xe tải xuất hàng từ vài trăm ký đến hàng chục tấn.',
    tag: 'Giá Sỉ Tận Gốc'
  },
  {
    id: 'chuan-bi-bao-gao',
    image: '/hoat-dong/chuan-bi-bao-gao-5kg.jpg',
    title: 'Đóng Bao Gạo Nghĩa Tình Chắc Chắn',
    location: 'Khu vực thành phẩm',
    desc: 'Từng bao gạo may chỉ đôi dày dặn, bao bì sạch sẽ, xếp pallet gọn gàng bảo đảm không rách hay ẩm mốc.',
    tag: 'Quy Cách 5kg – 10kg'
  },
  {
    id: 'ban-phat-qua',
    image: '/hoat-dong/ban-phat-qua-nhu-yeu-pham.jpg',
    title: 'Chu Đáo Từng Suất Quà Trao Tay',
    location: 'Bàn bàn giao quà tặng',
    desc: 'Đồng hành cùng Quý đoàn mang bữa cơm ấm no và sự sẻ chia chân thành nhất đến với bà con nghèo.',
    tag: 'Tận Tâm Phục Vụ'
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
            Mỗi chuyến xe là một nhân duyên thiện lành. Vựa Gạo Sóc Trăng (Nông Sản Hồng Nguyên) trân trọng từng đơn hàng của Quý mạnh thường quân, 
            cam kết giao đúng hẹn, hỗ trợ bốc vác chu đáo và gửi hình ảnh nghiệm thu tận tình.
          </p>
        </div>

        {/* Lưới hình ảnh thực tế chuẩn tỉ lệ gốc 4:3 không bị crop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {ACTIVITIES.map((act) => (
            <div
              key={act.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Hình ảnh chuẩn tỷ lệ 4:3 tự nhiên */}
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
                  <span>Nông Sản Hồng Nguyên – Vựa Gạo Sóc Trăng</span>
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
                  poster="/hoat-dong/phat-qua-mien-trung.jpg"
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
