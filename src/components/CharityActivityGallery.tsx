'use client';

import React from 'react';
import { Camera, ExternalLink, MessageCircle, Heart, CheckCircle2, Video } from 'lucide-react';
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
    id: 'chua-lien-quang-1',
    image: '/hoat-dong/giao-gao-chua-2.jpg',
    title: 'Giao Gạo Đến Chùa Liên Quang',
    location: 'Đường Nguyễn Đình Chiểu, TP.HCM',
    desc: 'Chuyến xe chở 150kg gạo giao đúng giờ lễ, bàn giao tận nơi cho các Sư Cô.',
    tag: 'Cúng Dường Chùa'
  },
  {
    id: 'chua-lien-quang-2',
    image: '/hoat-dong/giao-gao-chua-3.jpg',
    title: 'Bàn Giao 30 Phần Quà Nghĩa Tình',
    location: 'Sảnh Chùa Liên Quang',
    desc: 'Gạo được đóng túi 5kg may chắc chắn để Sư Cô trao tặng bà con nghèo khó.',
    tag: 'Phát Quà Hộ Nghèo'
  },
  {
    id: 'chua-lien-quang-3',
    image: '/hoat-dong/giao-gao-chua-4.jpg',
    title: 'Kiểm Tra Chất Lượng & Bao Bì',
    location: 'Khu tiếp nhận phẩm vật',
    desc: 'Bao bì sạch sẽ, cân ký chuẩn xác 100%, hạt gạo trắng trong thơm mới.',
    tag: 'Cân Ký Minh Bạch'
  },
  {
    id: 'giao-kho-1',
    image: '/hoat-dong/giao-gao-chua-1.jpg',
    title: 'Xe Gạo Khởi Hành Từ Kho',
    location: 'Chi nhánh Vựa Gạo Sóc Trăng',
    desc: 'Điều xe tải giao hỏa tốc từ chi nhánh gần nhất để tiết kiệm chi phí cho đoàn.',
    tag: 'Giao Xe Tải'
  },
  {
    id: 'xe-tai-5',
    image: '/hoat-dong/giao-gao-xe-tai-5.jpg',
    title: 'Vận Chuyển Gạo Tận Điểm Tập Kết',
    location: 'Nội thành & Các Tỉnh',
    desc: 'Hỗ trợ che bạt cẩn thận, bảo đảm gạo đến nơi khô ráo, nguyên vẹn.',
    tag: 'Đúng Giờ Hẹn'
  },
  {
    id: 'vac-gao-6',
    image: '/hoat-dong/vac-gao-tan-noi-6.jpg',
    title: 'Hỗ Trợ Bốc Vác Vào Tận Kho',
    location: 'Sảnh Chùa & Bếp Ăn 0 Đồng',
    desc: 'Tài xế và phụ xe phụ trách khuân vác, sắp xếp ngăn nắp vào kho cho Quý đoàn.',
    tag: 'Hỗ Trợ Khuân Vác'
  }
];

export const CharityActivityGallery: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-emerald-50/30 to-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header khối */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2.5">
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" /> Người Thật – Việc Thật – Trao Gửi Tận Tâm
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Hình Ảnh Hoạt Động & Giao Hàng Thực Tế
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
            Mỗi chuyến xe là một nhân duyên thiện lành. Vựa Gạo Sóc Trăng trân trọng từng đơn hàng của Quý mạnh thường quân, 
            cam kết giao đúng hẹn, hỗ trợ bốc vác chu đáo và gửi hình ảnh nghiệm thu tận tình.
          </p>
        </div>

        {/* Lưới hình ảnh thực tế */}
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
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
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
                  <span className="text-gray-400">Hình ảnh thực tế</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner kết nối Fanpage Facebook & Video */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-bold px-3 py-1 rounded-full">
                <Video className="w-3.5 h-3.5 text-blue-300" /> Kênh Fanpage Facebook Chính Thức
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">
                Xem Hàng Trăm Video & Chuyến Xe Giao Gạo Trực Tiếp
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 max-w-2xl leading-relaxed">
                Chúng tôi liên tục cập nhật video các chuyến xe tải chở gạo đến chùa, mái ấm và bà con vùng sâu vùng xa trên Fanpage <strong>Vựa Gạo Sóc Trăng</strong>. Quý đoàn có thể xem video thực tế hoặc nhắn tin trực tiếp để nhận hình ảnh bàn giao của đơn hàng mình!
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-blue-900/40 transform hover:-translate-y-0.5"
              >
                <span>Xem Video Trên Fanpage</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="flex gap-2 w-full">
                <a
                  href={MESSENGER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 bg-white/15 hover:bg-white/25 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition border border-white/20"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-blue-300" />
                  <span>Messenger</span>
                </a>
                <a
                  href={ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
                >
                  <span>Nhắn Zalo</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
