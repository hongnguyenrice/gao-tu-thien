'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, HeartHandshake, PhoneCall, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { MAIN_SITE_URL, PHONE_DISPLAY, PHONE_TEL, ZALO_URL } from '@/data/site';

export const Navbar: React.FC = () => {
  const { cart, setIsCartOpen, getTotalKg } = useCart();
  const totalItemsCount = cart.length;
  const totalKg = getTotalKg();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-xs">
      {/* Top bar thông tin liên hệ và liên kết web mẹ gaosoctrang.com */}
      <div className="bg-gradient-to-r from-amber-800 via-amber-700 to-emerald-800 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300" />
              Chuyên gạo từ thiện – Giá sỉ xuất xưởng Đồng Tháp & 4 chi nhánh kho
            </span>
            <span className="hidden lg:inline text-amber-200">|</span>
            <a
              href={MAIN_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1 text-amber-100 hover:text-white underline font-semibold"
            >
              Xem trang chủ gaosoctrang.com <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1 text-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" /> Xuất hoá đơn VAT 5%
            </span>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/15 hover:bg-white/25 px-2.5 py-0.5 rounded-full font-bold transition flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" /> Hotline & Zalo báo giá: {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-xl tracking-tight text-emerald-950 flex items-center gap-1.5">
                VỰA GẠO SÓC TRĂNG
                <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full border border-amber-200">
                  Từ Thiện
                </span>
              </div>
              <p className="text-[11px] text-emerald-700 font-medium">Gạo ngon – Giá tốt – Giao tận nơi</p>
            </div>
          </Link>

          {/* Navigation Links tới 5 trang độc lập */}
          <nav className="hidden lg:flex items-center space-x-5 font-semibold text-xs xl:text-sm text-gray-700">
            <Link href="/bao-gia-gao-tu-thien/" className="hover:text-emerald-700 text-amber-800 transition">
              Báo Giá Gạo Sỉ
            </Link>
            <Link href="/gao-phat-qua-tu-thien/" className="hover:text-emerald-700 transition">
              Gạo Phát Quà
            </Link>
            <Link href="/gao-cung-duong-chua/" className="hover:text-emerald-700 transition">
              Cúng Dường Chùa
            </Link>
            <Link href="/chon-gao-cho-bep-an-tu-thien/" className="hover:text-emerald-700 transition">
              Bếp Ăn Từ Thiện
            </Link>
            <Link href="/quy-cach-dong-bao-va-giao-hang/" className="hover:text-emerald-700 transition">
              Đóng Bao & Giao Hàng
            </Link>
            <Link href="/#he-thong-kho" className="hover:text-emerald-700 text-emerald-800 transition">
              Kho Gần Nhất
            </Link>
          </nav>

          {/* Action Button & Cart */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/bao-gia-gao-tu-thien/#form-bao-gia"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-amber-950 bg-amber-200 hover:bg-amber-300 border border-amber-300 rounded-xl transition shadow-xs"
            >
              Nhận Báo Giá Nhanh
            </Link>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-3.5 py-2 rounded-xl shadow-sm transition text-xs"
              aria-label="Xem đơn hàng đã chọn"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden md:inline">Đơn hàng</span>
              {totalItemsCount > 0 && (
                <span className="bg-amber-300 text-amber-950 font-black text-[11px] px-1.5 py-0.2 rounded-full">
                  {totalKg.toLocaleString('vi-VN')}kg
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
