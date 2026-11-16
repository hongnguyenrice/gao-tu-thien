import type { Metadata } from 'next';
import React from 'react';
import { BRAND_INFO } from '@/data/mockData';
import { FACEBOOK_PAGE_URL, GOOGLE_MAPS_PLACE_URL, PHONE_DISPLAY, PHONE_TEL, SITE_URL, ZALO_URL } from '@/data/site';
import { CTABox, DeliveryAreas, PageHeader, Section } from '@/components/content';
import { FastQuoteForm } from '@/components/FastQuoteForm';

const CANONICAL = `${SITE_URL}/lien-he/`;

export const metadata: Metadata = {
  title: 'Liên Hệ Vựa Gạo Sóc Trăng – Hotline & Địa Chỉ Kho Gạo Từ Thiện',
  description:
    'Thông tin liên hệ Vựa Gạo Sóc Trăng: Hotline/Zalo 0762 234 135, địa chỉ 4 kho tại TP.HCM, Bình Dương, Tây Ninh và nhà máy Đồng Tháp.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Liên Hệ Vựa Gạo Sóc Trăng – Đặt Gạo Từ Thiện Giá Sỉ',
    description: 'Hotline/Zalo 0762 234 135 và địa chỉ hệ thống kho gạo từ thiện tại TP.HCM, Bình Dương, Tây Ninh.',
    url: CANONICAL,
    type: 'website',
    images: [{ url: `${SITE_URL}/og-gao-tu-thien.jpg`, width: 1200, height: 630, alt: 'Liên hệ Vựa Gạo Sóc Trăng' }],
  },
};

export default function LienHePage() {
  return (
    <>
      <PageHeader
        title="Liên Hệ Vựa Gạo Sóc Trăng"
        path="/lien-he/"
        crumb="Liên hệ"
        intro={
          <p>
            Quý đoàn thiện nguyện, nhà chùa và doanh nghiệp cần tư vấn chọn gạo, nhận bảng báo giá có mộc công ty hoặc
            đặt lịch xe tải giao hàng vui lòng liên hệ trực tiếp qua các kênh chính thức dưới đây.
          </p>
        }
      />

      <Section title="Kênh Tiếp Nhận Báo Giá & Đặt Hàng Trực Tiếp">
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-800">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-2">
            <h3 className="font-bold text-base text-gray-900">{BRAND_INFO.name}</h3>
            <p><strong>Hotline / Zalo:</strong> <a href={`tel:${PHONE_TEL}`} className="text-emerald-700 font-bold hover:underline">{PHONE_DISPLAY}</a></p>
            <p><strong>Zalo Chat:</strong> <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold hover:underline">Nhắn tin nhận báo giá</a></p>
            <p><strong>Facebook:</strong> <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold hover:underline">Fanpage Vựa Gạo Sóc Trăng</a></p>
            <p><strong>Google Maps:</strong> <a href={GOOGLE_MAPS_PLACE_URL} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold hover:underline">Xem vị trí &amp; chỉ đường</a></p>
          </div>
          <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200 space-y-2">
            <h3 className="font-bold text-base text-emerald-950">Thời Gian Phục Vụ</h3>
            <p>Thứ 2 – Chủ Nhật: <strong>07:00 – 20:00</strong> (hỗ trợ điều phối xe tải giao chùa, điểm phát quà từ sáng sớm theo lịch của Quý đoàn).</p>
            <p>Phản hồi báo giá Zalo &amp; Form: trong vòng <strong>5 – 15 phút</strong>.</p>
          </div>
        </div>
      </Section>

      <Section title="Địa Chỉ Các Kho & Nhà Máy" muted>
        <DeliveryAreas />
      </Section>

      <FastQuoteForm />

      <CTABox currentPath="/lien-he/" />
    </>
  );
}
