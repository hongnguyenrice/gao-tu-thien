'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { CartProvider } from '@/context/CartContext';
import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, ZALO_URL } from '@/data/site';

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-emerald-200 selection:text-emerald-900">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
        <CartDrawer />

        {/* Nút CTA cố định ở góc màn hình: Nhận báo giá qua Zalo & Gọi tư vấn */}
        <aside
          aria-label="Liên hệ nhanh"
          className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end"
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
