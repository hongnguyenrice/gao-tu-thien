'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { CartProvider } from '@/context/CartContext';
import { Phone, MessageCircle, PhoneCall } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, ZALO_URL } from '@/data/site';

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-emerald-200 selection:text-emerald-900">
        <Navbar />

        {/* Thêm pb-20 trên mobile để nội dung cuối trang không bị thanh dính đáy che khuất */}
        <main className="flex-1 pb-20 lg:pb-0">{children}</main>

        <Footer />
        <CartDrawer />

        {/* 1. THANH LIÊN HỆ DÍNH ĐÁY CHO ĐIỆN THOẠI (Mobile Sticky Bottom Bar - chuẩn tối ưu ngón tay) */}
        <aside
          aria-label="Thanh liên hệ nhanh trên điện thoại"
          className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] flex items-center gap-2.5 shadow-2xl"
        >
          {/* Nút Chat Zalo */}
          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-11 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 font-bold text-xs shadow-sm transition active:scale-95"
            aria-label="Nhận báo giá qua Zalo: 0762 234 135"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span className="truncate">Báo Giá Qua Zalo</span>
          </a>

          {/* Nút Gọi Điện Hotline */}
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex-1 h-11 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center gap-2 font-bold text-xs shadow-sm transition active:scale-95"
            aria-label="Gọi hotline tư vấn: 0762 234 135"
          >
            <PhoneCall className="w-4 h-4 shrink-0" />
            <span className="truncate">Gọi {PHONE_DISPLAY}</span>
          </a>
        </aside>

        {/* 2. NÚT NỔI Ở GÓC MÀN HÌNH CHO MÁY TÍNH (Desktop Floating Buttons) */}
        <aside
          aria-label="Liên hệ nhanh trên máy tính"
          className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col gap-3 items-end"
        >
          {/* Nút Chat Zalo nhận báo giá */}
          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 shadow-lg hover:scale-105 transition transform group"
            aria-label="Nhận báo giá qua Zalo: 0762 234 135"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span className="text-xs font-bold whitespace-nowrap">
              Báo giá Zalo: {PHONE_DISPLAY}
            </span>
          </a>

          {/* Nút Gọi tư vấn */}
          <a
            href={`tel:${PHONE_TEL}`}
            className="h-12 px-4 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white flex items-center gap-2 shadow-lg hover:scale-105 transition transform group animate-bounce"
            aria-label="Gọi tư vấn: 0762 234 135"
          >
            <Phone className="w-5 h-5 shrink-0" />
            <span className="text-xs font-bold whitespace-nowrap">
              Gọi tư vấn: {PHONE_DISPLAY}
            </span>
          </a>
        </aside>
      </div>
    </CartProvider>
  );
};
