'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import {
  ShoppingBag,
  HeartHandshake,
  PhoneCall,
  ShieldCheck,
  Heart,
  Menu,
  X,
  FileText,
  Gift,
  Flame,
  Truck,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { PHONE_DISPLAY, ZALO_URL } from '@/data/site';

export const Navbar: React.FC = () => {
  const { cart, setIsCartOpen, getTotalKg } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const totalItemsCount = cart.length;
  const totalKg = getTotalKg();

  // 5 cẩm nang dịch vụ cốt lõi chuẩn SEO & chuyển đổi
  const navLinks = [
    { href: '/bao-gia-gao-tu-thien/', label: 'Báo Giá Sỉ', icon: FileText, highlight: true },
    { href: '/gao-phat-qua-tu-thien/', label: 'Gạo Phát Quà', icon: Gift },
    { href: '/gao-cung-duong-chua/', label: 'Cúng Dường Chùa', icon: Sparkles },
    { href: '/chon-gao-cho-bep-an-tu-thien/', label: 'Bếp Ăn Từ Thiện', icon: Flame },
    { href: '/quy-cach-dong-bao-va-giao-hang/', label: 'Đóng Bao & Giao Hàng', icon: Truck },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-amber-200/50 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)]">
      {/* Top bar thông tin liên hệ & cam kết dịch vụ */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-emerald-950 text-white text-xs py-1.5 px-3 sm:px-4 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-3 truncate">
            <span className="inline-flex items-center gap-1.5 font-medium truncate whitespace-nowrap">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 shrink-0 animate-pulse" />
              <span className="truncate text-amber-100/90 font-medium">Chuyên gạo từ thiện – Giá sỉ xưởng Đồng Tháp & 4 kho</span>
            </span>
            <span className="hidden lg:inline text-amber-500/60">|</span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-amber-200/90 font-medium shrink-0 whitespace-nowrap">
              <Truck className="w-3.5 h-3.5 text-amber-400" />
              <span>Giao xe tải tận chùa, bếp ăn & điểm phát quà</span>
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 whitespace-nowrap">
            <span className="hidden sm:inline-flex items-center gap-1 text-emerald-300 font-semibold text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Xuất VAT 5%
            </span>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/30 px-2.5 py-0.5 rounded-full font-bold transition flex items-center gap-1 text-[11px] sm:text-xs shadow-2xs"
            >
              <PhoneCall className="w-3 h-3 text-amber-400" /> <span className="hidden xs:inline">Hotline/Zalo:</span> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 gap-3">
          {/* Logo - Khóa cứng trên 1 dòng tuyệt đối không gãy chữ */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 ring-2 ring-emerald-500/20 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-all duration-300 shrink-0">
              <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-amber-200" />
            </div>
            <div className="shrink-0">
              <div className="font-black text-base sm:text-lg xl:text-xl tracking-tight text-emerald-950 flex items-center gap-1.5 whitespace-nowrap">
                <span>VỰA GẠO SÓC TRĂNG</span>
                <span className="text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-900 rounded-full border border-amber-300 shadow-2xs shrink-0">
                  Từ Thiện
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-emerald-800 font-semibold tracking-wide whitespace-nowrap">Gạo ngon – Giá tốt – Giao tận nơi</p>
            </div>
          </Link>

          {/* Desktop Navigation Links - Đảm bảo whitespace-nowrap không gãy chữ */}
          <nav className="hidden lg:flex items-center space-x-3.5 xl:space-x-5 2xl:space-x-6 font-semibold text-xs xl:text-sm text-stone-700 whitespace-nowrap">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap transition-colors py-1 ${
                  link.highlight
                    ? 'text-amber-800 font-bold hover:text-amber-950 border-b-2 border-amber-500'
                    : 'hover:text-emerald-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons & Mobile Hamburger Button */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Nút Nhận Báo Giá sang trọng */}
            <Link
              href="/bao-gia-gao-tu-thien/#form-bao-gia"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-xl transition shadow-xs shadow-amber-600/20 border border-amber-400/40 whitespace-nowrap shrink-0 active:scale-95"
            >
              Nhận Báo Giá
            </Link>

            {/* Nút xem giỏ hàng */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-1.5 bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-white font-bold px-3 sm:px-4 py-2 rounded-xl shadow-xs shadow-emerald-800/20 transition active:scale-95 text-xs whitespace-nowrap shrink-0 border border-emerald-600/30"
              aria-label="Xem đơn hàng đã chọn"
            >
              <ShoppingBag className="w-4 h-4 shrink-0 text-amber-200" />
              <span className="hidden md:inline">Đơn hàng</span>
              {totalItemsCount > 0 && (
                <span className="bg-amber-300 text-amber-950 font-black text-[11px] px-1.5 py-0.2 rounded-full shadow-2xs">
                  {totalKg.toLocaleString('vi-VN')}kg
                </span>
              )}
            </button>

            {/* Nút Hamburger bật/tắt Menu Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-700 hover:text-emerald-800 hover:bg-emerald-50 transition border border-stone-200 shrink-0"
              aria-label={isMobileMenuOpen ? 'Đóng menu' : 'Mở menu điều hướng'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-stone-900" /> : <Menu className="w-5 h-5 text-stone-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer (Dropdown khi bấm hamburger) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-5 space-y-1 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-3 pt-2 pb-1">
            Chuyên mục cẩm nang gạo từ thiện:
          </p>
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                  link.highlight
                    ? 'bg-amber-50 text-amber-900 border border-amber-200'
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${link.highlight ? 'text-amber-700' : 'text-emerald-700'}`} />
                <span>{link.label}</span>
              </Link>
            );
          })}

          <Link
            href="/#he-thong-kho"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition"
          >
            <MapPin className="w-4 h-4 text-emerald-700" />
            <span>Hệ Thống 4 Kho & Nhà Máy</span>
          </Link>

          <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2">
            <Link
              href="/bao-gia-gao-tu-thien/#form-bao-gia"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 text-xs font-bold text-amber-950 bg-amber-300 hover:bg-amber-400 rounded-xl transition"
            >
              📝 Nhận Dự Toán Báo Giá Nhanh
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
