'use client';

import React from 'react';
import Link from 'next/link';
import { HeartHandshake, Phone, MapPin, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '@/data/mockData';
import { CONTACT_LABEL, PHONE_DISPLAY, PHONE_TEL, ZALO_URL, FACEBOOK_PAGE_URL, GOOGLE_MAPS_PLACE_URL } from '@/data/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181109] text-amber-100/80 pt-16 pb-12 border-t border-amber-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-amber-900/60">
          
          {/* Cột 1: Thông tin thương hiệu */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {BRAND_INFO.name}
              </span>
            </div>
            <p className="text-xs text-amber-200/70 leading-relaxed">
              {BRAND_INFO.slogan}. Chuyên phân phối gạo từ thiện giá sỉ tận gốc từ nhà máy xay xát Đồng Tháp và 4 chi nhánh kho phủ khắp TP.HCM, Bình Dương và Tây Ninh.
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 shrink-0" /> Xuất hóa đơn VAT 5% đầy đủ cho doanh nghiệp / quỹ
              </div>
              <div className="pt-1">
                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-300 hover:text-white text-xs font-semibold bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-lg border border-white/10 transition"
                >
                  <span>🌐 Fanpage: Vựa Gạo Sóc Trăng</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Cột 2: Các chuyên trang từ thiện */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Chuyên Trang Từ Thiện
            </h3>
            <ul className="space-y-2.5 text-xs text-amber-200/80">
              <li><Link href="/bao-gia-gao-tu-thien/" className="hover:text-white transition">Báo giá gạo từ thiện mới nhất</Link></li>
              <li><Link href="/gao-phat-qua-tu-thien/" className="hover:text-white transition">Gạo phát quà hộ gia đình & người già</Link></li>
              <li><Link href="/gao-cung-duong-chua/" className="hover:text-white transition">Gạo cúng dường chùa & tự viện</Link></li>
              <li><Link href="/chon-gao-cho-bep-an-tu-thien/" className="hover:text-white transition">Chọn gạo cho bếp ăn 0 đồng & quán cơm</Link></li>
              <li><Link href="/quy-cach-dong-bao-va-giao-hang/" className="hover:text-white transition">Quy cách đóng bao 5kg-10kg & xe giao</Link></li>
              <li><Link href="/#kinh-nghiem-tu-thien" className="hover:text-white transition">Cẩm nang chọn gạo & dự toán ngân sách</Link></li>
            </ul>
          </div>

          {/* Cột 3: Chính sách & Cam kết */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Hỗ Trợ Quý Đoàn
            </h3>
            <ul className="space-y-2.5 text-xs text-amber-200/80">
              <li><Link href="/quy-cach-dong-bao-va-giao-hang/" className="hover:text-white transition">Đóng túi nhỏ 5kg, 10kg theo yêu cầu</Link></li>
              <li><Link href="/#he-thong-kho" className="hover:text-white transition">Xe tải giao tận nơi từ chi nhánh gần nhất</Link></li>
              <li><Link href="/bao-gia-gao-tu-thien/#form-bao-gia" className="hover:text-white transition">Nhận bảng dự toán chi phí chi tiết</Link></li>
              <li><Link href="/#chinh-sach" className="hover:text-white transition">Hỗ trợ khuân vác vào sảnh chùa, bếp ăn</Link></li>
              <li><Link href="/#chinh-sach" className="hover:text-white transition">Chụp ảnh / video bàn giao khi người tài trợ ở xa</Link></li>
            </ul>
          </div>

          {/* Cột 4: Hệ thống chi nhánh & Hotline */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Chi Nhánh & Nhà Máy
            </h3>
            <div className="text-xs sm:text-sm space-y-2.5">
              {BRAND_INFO.branches.map((b) => (
                <div key={b.id} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span><strong>{b.name}:</strong> {b.address}</span>
                    {b.isMain ? (
                      <a
                        href={GOOGLE_MAPS_PLACE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-xs text-amber-300 hover:underline mt-0.5 font-bold"
                      >
                        (Bản đồ Google Maps – Có hình ảnh & video thực tế)
                      </a>
                    ) : (
                      <span className="block text-xs text-amber-200/70 mt-0.5">
                        ({b.roleNote || 'Bãi xe điều phối giao hỏa tốc 2H'})
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span><strong>{BRAND_INFO.factory.name}:</strong> {BRAND_INFO.factory.address}</span>
                  <span className="block text-xs text-amber-200/70 mt-0.5">
                    ({BRAND_INFO.factory.roleNote || 'Nhà máy xay xát & đóng bao 10–50 tấn'})
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-amber-900 space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    Hotline & Zalo: <strong className="text-white text-base">{PHONE_DISPLAY}</strong>
                  </span>
                </div>
                <div className="text-xs text-amber-300">
                  (Một số duy nhất phụ trách tư vấn, báo giá và tiếp nhận đơn)
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-300/60 gap-4">
          <p>© 2026 {BRAND_INFO.name}. {BRAND_INFO.slogan}.</p>
          <div className="flex items-center gap-1 text-amber-200">
            <span>Đồng hành gieo duyên lành cùng các đoàn thiện nguyện</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
