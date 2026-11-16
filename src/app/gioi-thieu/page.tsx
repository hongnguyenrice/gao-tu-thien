import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { BRAND_INFO } from '@/data/mockData';
import { PHONE_DISPLAY, SITE_URL } from '@/data/site';
import { CTABox, DeliveryAreas, PageHeader, Section } from '@/components/content';

const CANONICAL = `${SITE_URL}/gioi-thieu/`;

export const metadata: Metadata = {
  title: 'Giới Thiệu Vựa Gạo Sóc Trăng – Kho Gạo Từ Thiện Giá Sỉ',
  description:
    'Giới thiệu hệ thống Vựa Gạo Sóc Trăng: Nhà máy xay xát tại Đồng Tháp và 4 kho phân phối tại TP.HCM, Bình Dương, Tây Ninh chuyên cung cấp gạo từ thiện giá sỉ tận gốc.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Giới Thiệu Vựa Gạo Sóc Trăng – Kho Gạo Từ Thiện Giá Sỉ',
    description:
      'Hệ thống kho gạo từ thiện giá sỉ tận gốc với 4 chi nhánh và nhà máy xay xát trực tiếp tại Đồng Tháp.',
    url: CANONICAL,
    type: 'website',
    images: [{ url: `${SITE_URL}/og-gao-tu-thien.jpg`, width: 1200, height: 630, alt: 'Giới thiệu Vựa Gạo Sóc Trăng' }],
  },
};

export default function GioiThieuPage() {
  return (
    <>
      <PageHeader
        title="Giới Thiệu Vựa Gạo Sóc Trăng"
        path="/gioi-thieu/"
        crumb="Giới thiệu"
        intro={
          <p>
            <strong>{BRAND_INFO.name}</strong> ({BRAND_INFO.slogan}) là đơn vị chuyên cung cấp gạo từ thiện giá sỉ tận gốc
            cho nhà chùa, tự viện, bếp ăn 0 đồng, mái ấm tình thương và các đoàn thiện nguyện trên toàn khu vực phía Nam.
          </p>
        }
      />

      <Section title="Nguồn Gạo Trực Tiếp Từ Nhà Máy Xay Xát">
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Với nhà máy xay xát đặt trực tiếp tại vùng nguyên liệu Đồng Tháp ({BRAND_INFO.factory.address}) cùng hệ thống{' '}
            {BRAND_INFO.branches.length} chi nhánh kho điều phối tại TP.HCM, Bình Dương và Tây Ninh, chúng tôi chủ động hoàn
            toàn chất lượng hạt gạo từ lúc thu hoạch đến khi đóng bao giao tận tay Quý đoàn.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>100% gạo mới nguyên chất</strong>: Không đấu trộn gạo cũ, không tẩm hương liệu hay chất bảo quản.</li>
            <li><strong>Miễn phí đóng túi nhỏ 5kg – 10kg</strong>: Sạch sẽ, may miệng chỉ đôi chắc chắn, thuận tiện phát quà tận tay.</li>
            <li><strong>Chứng từ minh bạch</strong>: Xuất hóa đơn điện tử VAT 5%, hợp đồng và chứng nhận VSATTP cho doanh nghiệp, tổ chức.</li>
            <li><strong>Tư vấn & báo giá trực tiếp</strong>: Hotline / Zalo <strong>{PHONE_DISPLAY}</strong>.</li>
          </ul>
          <p className="pt-2">
            Xem <Link href="/bao-gia-gao-tu-thien/" className="text-emerald-700 font-bold hover:underline">Bảng báo giá gạo từ thiện hôm nay</Link> hoặc{' '}
            <Link href="/lien-he/" className="text-emerald-700 font-bold hover:underline">Thông tin liên hệ các kho</Link>.
          </p>
        </div>
      </Section>

      <Section title="Hệ Thống Kho & Nhà Máy" muted>
        <DeliveryAreas />
      </Section>

      <CTABox currentPath="/gioi-thieu/" />
    </>
  );
}
