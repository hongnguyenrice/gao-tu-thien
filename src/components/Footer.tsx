'use client';

import React from 'react';
import Link from 'next/link';
import {
  HeartHandshake,
  Phone,
  MapPin,
  ShieldCheck,
  Heart,
  ExternalLink,
  Truck,
  MessageCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import { BRAND_INFO } from '@/data/mockData';
import {
  CONTACT_LABEL,
  PHONE_DISPLAY,
  PHONE_TEL,
  ZALO_URL,
  FACEBOOK_PAGE_URL,
  GOOGLE_MAPS_PLACE_URL,
} from '@/data/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181109] text-amber-100/80 pt-14 pb-12 border-t border-amber-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* TẦNG 1: 3 CỘT THÔNG TIN CHÍNH (CÂN ĐỐI 100%, KHÔNG BỊ LỆCH) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Cột 1 (lg:col-span-5): Thông tin thương hiệu & Hotline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {BRAND_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-amber-200/70 leading-relaxed">
              {BRAND_INFO.slogan}. Chuyên phân phối gạo từ thiện giá sỉ tận gốc cho Chùa, Viện dưỡng lão, Bếp ăn 0 đồng và các Đoàn thiện nguyện tại TP.HCM, Bình Dương và các tỉnh lân cận.
            </p>

            {/* Hotline & Giờ làm việc nổi bật */}
            <div className="p-3.5 rounded-2xl bg-amber-950/70 border border-amber-800/70 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                  <Phone className="w-4 h-4 text-amber-400" />
                </span>
                <div>
                  <div className="text-[11px] uppercase font-bold text-amber-300/80 tracking-wider">Hotline & Zalo Duy Nhất</div>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="font-black text-lg text-white hover:text-amber-300 transition tracking-tight"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="text-right text-xs">
                <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/40">
                  <Clock className="w-3 h-3" /> 07:00 – 20:00
                </span>
                <div className="text-[11px] text-amber-300/70 mt-0.5">Zalo tư vấn 24/7</div>
              </div>
            </div>

            {/* VAT & Fanpage */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs">
              <div className="text-emerald-400 font-semibold flex items-center gap-1.5 bg-emerald-950/40 border border-emerald-900/60 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Xuất hóa đơn VAT 5% đầy đủ cho doanh nghiệp / quỹ</span>
              </div>
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-300 hover:text-white font-semibold bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-lg border border-white/10 transition"
              >
                <span>🌐 Fanpage: Vựa Gạo Sóc Trăng</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Cột 2 (lg:col-span-4): Chuyên trang từ thiện */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Chuyên Trang Từ Thiện</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-amber-200/80">
              <li>
                <Link href="/bao-gia-gao-tu-thien/" className="hover:text-white transition flex items-center gap-1.5 group">
                  <span className="text-amber-500 group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Báo giá gạo từ thiện mới nhất</span>
                </Link>
              </li>
              <li>
                <Link href="/gao-phat-qua-tu-thien/" className="hover:text-white transition flex items-center gap-1.5 group">
                  <span className="text-amber-500 group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Gạo phát quà hộ gia đình & người già</span>
                </Link>
              </li>
              <li>
                <Link href="/gao-cung-duong-chua/" className="hover:text-white transition flex items-center gap-1.5 group">
                  <span className="text-amber-500 group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Gạo cúng dường chùa & tự viện</span>
                </Link>
              </li>
              <li>
                <Link href="/chon-gao-cho-bep-an-tu-thien/" className="hover:text-white transition flex items-center gap-1.5 group">
                  <span className="text-amber-500 group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Chọn gạo cho bếp ăn 0 đồng & quán cơm</span>
                </Link>
              </li>
              <li>
                <Link href="/quy-cach-dong-bao-va-giao-hang/" className="hover:text-white transition flex items-center gap-1.5 group">
                  <span className="text-amber-500 group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Quy cách đóng bao 5kg-10kg & xe giao</span>
                </Link>
              </li>
              <li>
                <Link href="/#kinh-nghiem-tu-thien" className="hover:text-white transition flex items-center gap-1.5 group">
                  <span className="text-amber-500 group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Cẩm nang chọn gạo & dự toán ngân sách</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3 (lg:col-span-3): Chính sách hỗ trợ quý đoàn */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Hỗ Trợ Quý Đoàn</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-amber-200/80">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span>Đóng túi 5kg, 10kg quai xách miễn phí</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span>Xe tải giao tận nơi đúng giờ đoàn tổ chức</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span>Hỗ trợ khuân vác vào sảnh chùa, bếp ăn</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span>Bình ổn giá sỉ dịp cao điểm Vu Lan, Tết</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span>Hỗ trợ chụp ảnh / video bàn giao khi người tài trợ ở xa</span>
              </li>
            </ul>
          </div>

        </div>

        {/* TẦNG 2: MẠNG LƯỚI TRỤ SỞ & BÃI XE ĐIỀU PHỐI (DÀN HÀNG NGANG ĐỐI XỨNG CÂN BẰNG) */}
        <div className="pt-8 border-t border-amber-900/60 space-y-3.5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5">
            <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider">
              <Truck className="w-4 h-4 text-emerald-400" />
              <span>Hệ Thống Trụ Sở & Mạng Lưới Điều Phối Giao Hàng</span>
            </div>
            <span className="text-xs text-amber-300/80">
              Xuất xe tải giao hỏa tốc 2 giờ đến Chùa, Bếp ăn và Điểm phát quà
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            
            {/* 1. Trụ sở chính Lái Thiêu */}
            <div className="p-3.5 rounded-2xl bg-amber-950/40 border border-emerald-500/50 flex flex-col justify-between hover:border-emerald-400 transition">
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[11px] font-black uppercase text-amber-300 bg-amber-950 px-2 py-0.5 rounded-full border border-amber-700/60">
                    Trụ Sở Chính
                  </span>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-700/60">
                    Xem mẫu trực tiếp
                  </span>
                </div>
                <div className="font-extrabold text-white text-sm mb-1">Tổng Kho Lái Thiêu</div>
                <div className="text-xs text-amber-200/80 leading-snug">
                  Số 11, Lô 2, Đường Lái Thiêu 9, P. Lái Thiêu, TP. Thuận An, Bình Dương
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-amber-900/60">
                <a
                  href={GOOGLE_MAPS_PLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-white font-bold transition"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Bản đồ Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 2. Bãi xe Thủ Đức */}
            <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-900/60 flex flex-col justify-between hover:border-amber-700/70 transition">
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[11px] font-bold uppercase text-amber-300/80">Khu Đông TP.HCM</span>
                  <span className="text-[11px] font-semibold text-blue-300 bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-800/40">
                    Giao hỏa tốc 2H
                  </span>
                </div>
                <div className="font-extrabold text-white text-sm mb-1">Kho Điều Phối Thủ Đức</div>
                <div className="text-xs text-amber-200/80 leading-snug">
                  44 Đường Số 7, P. Phước Long, TP. Thủ Đức, TP.HCM
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-amber-900/40 text-[11px] text-amber-300/70">
                Bãi xe điều phối xuất hàng tận nơi 24/7
              </div>
            </div>

            {/* 3. Bãi xe Quận 7 */}
            <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-900/60 flex flex-col justify-between hover:border-amber-700/70 transition">
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[11px] font-bold uppercase text-amber-300/80">Khu Nam TP.HCM</span>
                  <span className="text-[11px] font-semibold text-blue-300 bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-800/40">
                    Giao hỏa tốc 2H
                  </span>
                </div>
                <div className="font-extrabold text-white text-sm mb-1">Kho Điều Phối Quận 7</div>
                <div className="text-xs text-amber-200/80 leading-snug">
                  120 Đường Số 1, P. Tân Kiểng, Q.7, TP.HCM
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-amber-900/40 text-[11px] text-amber-300/70">
                Bãi xe điều phối xuất hàng tận nơi 24/7
              </div>
            </div>

            {/* 4. Tây Ninh & Nhà máy Đồng Tháp */}
            <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-900/60 flex flex-col justify-between hover:border-amber-700/70 transition">
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[11px] font-bold uppercase text-amber-300/80">Liên Tỉnh & Nhà Máy</span>
                  <span className="text-[11px] font-semibold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded-full border border-amber-800/60">
                    Sỉ lớn 10–50T
                  </span>
                </div>
                <div className="font-extrabold text-white text-sm mb-1">Tây Ninh & Đồng Tháp</div>
                <div className="text-xs text-amber-200/80 leading-snug">
                  Hậu Nghĩa (Tây Ninh) & Nhà máy Hội Cư (Đồng Tháp)
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-amber-900/40 text-[11px] text-amber-300/70">
                Xay xát & điều xe tải liên tỉnh trực tiếp
              </div>
            </div>

          </div>
        </div>

        {/* TẦNG 3: FOOTER BOTTOM */}
        <div className="pt-6 border-t border-amber-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-300/70 gap-3">
          <p>© 2026 {BRAND_INFO.name}. {BRAND_INFO.slogan}.</p>
          <div className="flex items-center gap-1.5 text-amber-200">
            <span>Đồng hành gieo duyên lành cùng các đoàn thiện nguyện</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};
