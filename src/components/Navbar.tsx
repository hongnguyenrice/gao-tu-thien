'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, HeartHandshake, PhoneCall, ShieldCheck, Heart } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { cart, setIsCartOpen, getTotalKg } = useCart();
  const totalItemsCount = cart.length;
  const totalKg = getTotalKg();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-xs">
      {/* Top emergency / quick contact bar */}
      <div className="bg-gradient-to-r from-amber-700 via-amber-600 to-emerald-700 text-white text-xs sm:text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center p-1 bg-white/20 rounded-full animate-pulse">
              <Heart className="w-3.5 h-3.5 text-rose-200 fill-rose-200" />
            </span>
            <span>Chung tay gieo duyên lành - Đồng hành cùng các bếp ăn thiện nguyện & chùa toàn quốc</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-300" /> Xuất hoá đơn VAT & Giấy VSATTP
            </span>
            <a
              href="tel:0762234135"
              className="font-bold hover:underline flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full"
            >
              <PhoneCall className="w-3.5 h-3.5" /> Hotline/Zalo: 0762 234 135
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <div>
              <div className="font-extrabold text-xl sm:text-2xl tracking-tight text-emerald-950 flex items-center gap-1.5">
                VỰA GẠO SÓC TRĂNG
                <span className="text-xs font-semibold px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full border border-amber-200">
                  Giá Xuất Xưởng
                </span>
              </div>
              <p className="text-xs text-emerald-700 font-medium">Gạo ngon – Giá tốt – Giao tận nhà</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 font-medium text-gray-700">
            <Link href="#he-thong-kho" className="hover:text-emerald-700 transition-colors font-bold text-emerald-800 flex items-center gap-1">
              Chi Nhánh & Kho (4 CN)
            </Link>
            <Link href="#san-pham" className="hover:text-emerald-700 transition-colors">
              Bảng Giá Các Loại Gạo
            </Link>
            <Link href="#diem-tiep-nhan" className="hover:text-emerald-700 transition-colors flex items-center gap-1">
              Điểm Tiếp Nhận
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
            </Link>
            <Link href="#chinh-sach" className="hover:text-emerald-700 transition-colors">
              Chính Sách Từ Thiện
            </Link>
            <Link href="#kinh-nghiem-tu-thien" className="hover:text-emerald-700 transition-colors font-medium text-amber-800">
              Cẩm Nang & FAQ
            </Link>
            <Link href="#bao-gia-nhanh" className="hover:text-emerald-700 transition-colors">
              Báo Giá Dự Toán
            </Link>
          </nav>

          {/* Action Button & Cart */}
          <div className="flex items-center gap-3">
            <Link
              href="#bao-gia-nhanh"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-xl transition"
            >
              Yêu Cầu Báo Giá Nhanh
            </Link>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-medium px-4 py-2.5 rounded-xl shadow-md transition transform active:scale-95"
              aria-label="Xem giỏ hàng"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline">Đơn Hàng Gạo</span>
              {totalItemsCount > 0 && (
                <span className="bg-amber-400 text-amber-950 font-black text-xs px-2 py-0.5 rounded-full shadow-xs">
                  {totalKg.toLocaleString('vi-VN')} kg
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
