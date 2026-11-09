'use client';

import React from 'react';
import Link from 'next/link';
import { HeartHandshake, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-950 text-amber-100/80 pt-16 pb-12 border-t border-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-amber-900/60">
          {/* Cột 1: Thông tin thương hiệu */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                VỰA GẠO SÓC TRĂNG
              </span>
            </div>
            <p className="text-xs text-amber-200/70 leading-relaxed">
              Gạo ngon – Giá tốt – Giao tận nhà. Hệ thống nhà máy xay xát Đồng Tháp & 4 chi nhánh kho phủ rộng sẵn sàng phục vụ Quý đoàn thiện nguyện, Chùa và Bếp ăn từ thiện.
            </p>
            <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Giấy chứng nhận ATVSTP & Giấy ĐKKD đầy đủ
            </div>
          </div>

          {/* Cột 2: Các dòng gạo phổ biến */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Loại Gạo Từ Thiện
            </h4>
            <ul className="space-y-2.5 text-xs text-amber-200/80">
              <li><Link href="#san-pham" className="hover:text-white transition">Gạo IR50404 nở xốp lợi cơm (Bếp ăn)</Link></li>
              <li><Link href="#san-pham" className="hover:text-white transition">Gạo Lài Sữa dẻo vừa (Phát quà)</Link></li>
              <li><Link href="#san-pham" className="hover:text-white transition">Gạo Thơm Jasmine dẻo mềm</Link></li>
              <li><Link href="#san-pham" className="hover:text-white transition">Gạo ST25 Sóc Trăng Thượng Hạng</Link></li>
              <li><Link href="#san-pham" className="hover:text-white transition">Gạo Tấm Thơm (Nấu cháo từ thiện BV)</Link></li>
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ khách hàng */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Hỗ Trợ Quý Đoàn
            </h4>
            <ul className="space-y-2.5 text-xs text-amber-200/80">
              <li><Link href="#he-thong-kho" className="hover:text-white transition">Xem 4 chi nhánh gần bạn</Link></li>
              <li><Link href="#chinh-sach" className="hover:text-white transition">Đóng túi 5kg, 10kg miễn phí</Link></li>
              <li><Link href="#diem-tiep-nhan" className="hover:text-white transition">Chuyển phát thẳng tới Chùa & Mái ấm</Link></li>
              <li><Link href="#chinh-sach" className="hover:text-white transition">Xuất hóa đơn điện tử VAT (5%)</Link></li>
              <li><Link href="#chinh-sach" className="hover:text-white transition">Chụp hình / Video nghiệm thu tại điểm</Link></li>
            </ul>
          </div>

          {/* Cột 4: Hệ thống chi nhánh & nhà máy */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Chi Nhánh & Nhà Máy
            </h4>
            <div className="text-xs space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>CN 1:</strong> Số 11, Lô 2, Đường Lái Thiêu 9, P. Lái Thiêu, TP.HCM</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>CN 2:</strong> 44 Đường Số 7, P. Phước Long, TP.HCM</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>CN 3:</strong> 120 Đường Số 1, P. Tân Kiểng, Q.7, TP.HCM</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>CN 4:</strong> Ấp Khiêm Cương, Hậu Nghĩa, Tây Ninh</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Nhà máy:</strong> Ấp An Thái, Xã Hội Cư, Tỉnh Đồng Tháp</span>
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-amber-900">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Hotline/Zalo: <strong className="text-white text-sm">0762 234 135</strong></span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-300/60 gap-4">
          <p>© 2026 Vựa Gạo Sóc Trăng. Gạo ngon – Giá tốt – Giao tận nhà.</p>
          <div className="flex items-center gap-1 text-amber-200">
            <span>Đồng hành gieo duyên lành cùng các đoàn thiện nguyện</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
