'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WarehouseNetwork } from '@/components/WarehouseNetwork';
import { ProductList } from '@/components/ProductList';
import { CharityPartnerList } from '@/components/CharityPartnerList';
import { PolicyCommitments } from '@/components/PolicyCommitments';
import { FastQuoteForm } from '@/components/FastQuoteForm';
import { CharityGuideAndFAQ } from '@/components/CharityGuideAndFAQ';
import { CartDrawer } from '@/components/CartDrawer';
import { Footer } from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import { Phone, MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-emerald-200 selection:text-emerald-900">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <WarehouseNetwork />
          <ProductList />
          <CharityPartnerList />
          <PolicyCommitments />
          <CharityGuideAndFAQ />
          <FastQuoteForm />
        </main>

        <Footer />
        <CartDrawer />

        {/* Floating Quick Action Contacts (Zalo & Hotline) */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
          <a
            href="https://zalo.me/0762234135"
            target="_blank"
            rel="noopener noreferrer"
            className="w-13 h-13 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform group relative"
            aria-label="Chat Zalo tư vấn gạo từ thiện"
          >
            <MessageCircle className="w-7 h-7" />
            <span className="absolute right-15 bg-blue-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md hidden group-hover:block">
              Chat Zalo: 0762 234 135
            </span>
          </a>

          <a
            href="tel:0762234135"
            className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform group relative animate-bounce"
            aria-label="Gọi ngay hotline tư vấn"
          >
            <Phone className="w-6 h-6" />
            <span className="absolute right-15 bg-emerald-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md hidden group-hover:block">
              Hotline: 0762 234 135
            </span>
          </a>
        </div>
      </div>
    </CartProvider>
  );
}
