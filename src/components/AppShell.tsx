'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { CartProvider } from '@/context/CartContext';
import { Phone, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, ZALO_URL } from '@/data/site';
import { trackPhoneCall, trackZaloClick } from '@/lib/analytics';

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#fdfbf7] text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-950">
        <Navbar />

        {/* Thêm pb-20 trên mobile để nội dung cuối trang không bị thanh dính đáy che khuất */}
        <main className="flex-1 pb-20 lg:pb-0">{children}</main>

        <Footer />
        <CartDrawer />

        {/* 1. THANH LIÊN HỆ DÍNH ĐÁY CHO ĐIỆN THOẠI (Mobile Sticky Bottom Dock - Chuẩn app hiện đại) */}
        <aside
          aria-label="Thanh liên hệ nhanh trên điện thoại"
          className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/92 backdrop-blur-xl border-t border-amber-200/60 px-3.5 py-2.5 pb-[max(0.6rem,env(safe-area-inset-bottom))] flex items-center gap-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]"
        >
          {/* Nút Chat Zalo */}
          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackZaloClick('mobile_dock')}
            className="flex-1 h-11 px-3 rounded-xl bg-gradient-to-r from-sky-600 via-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white flex items-center justify-center gap-2 font-black text-xs shadow-md shadow-blue-600/20 border border-white/20 transition active:scale-95"
            aria-label="Nhận báo giá qua Zalo: 0762 234 135"
          >
            <MessageCircle className="w-4 h-4 shrink-0 fill-white/20" />
            <span className="truncate">Báo Giá Qua Zalo</span>
          </a>

          {/* Nút Gọi Điện Hotline */}
          <a
            href={`tel:${PHONE_TEL}`}
            onClick={() => trackPhoneCall('mobile_dock')}
            className="flex-1 h-11 px-3 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-800 to-teal-900 hover:from-emerald-800 hover:to-teal-950 text-white flex items-center justify-center gap-2 font-black text-xs shadow-md shadow-emerald-800/20 border border-emerald-600/30 transition active:scale-95"
            aria-label="Gọi hotline tư vấn: 0762 234 135"
          >
            <PhoneCall className="w-4 h-4 shrink-0 text-amber-300" />
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
            onClick={() => trackZaloClick('desktop_float')}
            className="h-12 px-4 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white flex items-center gap-2 shadow-xl shadow-blue-600/25 hover:scale-105 transition transform group border border-white/30 ring-2 ring-blue-500/20"
            aria-label="Nhận báo giá qua Zalo: 0762 234 135"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span className="text-xs font-black whitespace-nowrap">
              Báo giá Zalo: {PHONE_DISPLAY}
            </span>
          </a>

          {/* Nút Gọi tư vấn */}
          <a
            href={`tel:${PHONE_TEL}`}
            onClick={() => trackPhoneCall('desktop_float')}
            className="h-12 px-4 rounded-full bg-gradient-to-r from-emerald-700 via-emerald-800 to-teal-900 hover:from-emerald-800 hover:to-teal-950 text-white flex items-center gap-2 shadow-xl shadow-emerald-800/25 hover:scale-105 transition transform group border border-emerald-500/40 ring-2 ring-emerald-500/20"
            aria-label="Gọi tư vấn: 0762 234 135"
          >
            <Phone className="w-5 h-5 shrink-0 text-amber-300 animate-pulse" />
            <span className="text-xs font-black whitespace-nowrap">
              Gọi tư vấn: {PHONE_DISPLAY}
            </span>
          </a>
        </aside>
      </div>
    </CartProvider>
  );
};
