import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { RICE_PRODUCTS } from '@/data/mockData';
import {
  CONTACT_LABEL,
  DELIVERY,
  DELIVERY_AREAS,
  ORDER_STEPS,
  PHONE_DISPLAY,
  PRICE_UPDATED,
  SITE_URL,
} from '@/data/site';
import {
  CTABox,
  DeliveryAreas,
  FAQSection,
  OrderSteps,
  PageHeader,
  PriceTable,
  Section,
} from '@/components/content';
import { FastQuoteForm } from '@/components/FastQuoteForm';

const CANONICAL = `${SITE_URL}/bao-gia-gao-tu-thien/`;

export const metadata: Metadata = {
  title: 'Báo Giá Gạo Từ Thiện Giá Sỉ Tận Gốc',
  description:
    'Bảng báo giá gạo từ thiện giá sỉ tận gốc hôm nay: Gạo Sẻ Chia, Nghĩa Tình, ST25. Đóng bao 5kg-10kg miễn phí, giao xe tải tận nơi, xuất hóa đơn VAT 5%.',
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: 'Báo Giá Gạo Từ Thiện Giá Sỉ Tận Gốc | Vựa Gạo Sóc Trăng',
    description:
      'Bảng báo giá gạo từ thiện giá sỉ tận gốc hôm nay: Gạo Sẻ Chia, Nghĩa Tình, ST25. Đóng bao 5kg-10kg miễn phí, giao xe tải tận nơi, xuất hóa đơn VAT 5%.',
    url: CANONICAL,
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/he-thong-kho-vua-gao-soc-trang.jpg`,
        width: 1200,
        height: 630,
        alt: 'Bảng báo giá gạo từ thiện giá sỉ tận gốc',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Báo Giá Gạo Từ Thiện Giá Sỉ Tận Gốc | Vựa Gạo Sóc Trăng',
    description:
      'Bảng báo giá gạo từ thiện giá sỉ tận gốc hôm nay: Gạo Sẻ Chia, Nghĩa Tình, ST25. Đóng bao 5kg-10kg miễn phí, giao xe tải tận nơi, xuất hóa đơn VAT 5%.',
    images: [`${SITE_URL}/he-thong-kho-vua-gao-soc-trang.jpg`],
  },
};

const faqs = [
  {
    q: 'Bảng giá gạo từ thiện áp dụng cho đơn hàng số lượng bao nhiêu?',
    a: 'Chúng tôi áp dụng bảng giá sỉ theo từng nấc khối lượng: dưới 300kg (cho đơn nhỏ / thử mẫu), từ 300kg - 499kg, từ 500kg - 999kg và từ 1.000kg (1 tấn) trở lên. Với các chương trình cứu trợ quy mô lớn từ 5 tấn trở lên, kho áp dụng chính sách giá xuất xưởng trực tiếp từ nhà máy Đồng Tháp.',
  },
  {
    q: 'Báo giá đã bao gồm chi phí đóng bao 5kg, 10kg chưa?',
    a: 'Chi phí đóng bao nhỏ 5kg, 10kg (bao bì in sẵn chữ Gạo Từ Thiện hoặc bao dệt may miệng chắc chắn) được tài trợ hoàn toàn miễn phí cho Quý đoàn thiện nguyện.',
  },
  {
    q: 'Doanh nghiệp mua gạo từ thiện có được xuất hóa đơn VAT không?',
    a: 'Có đầy đủ. Chúng tôi xuất hóa đơn điện tử VAT (thuế suất 5% cho mặt hàng gạo sơ chế) kèm hợp đồng mua bán và giấy chứng nhận ATVSTP để doanh nghiệp quyết toán chi phí công đoàn minh bạch.',
  },
  {
    q: 'Thời gian nhận bảng báo giá chính thức mất bao lâu?',
    a: 'Sau khi Quý đoàn điền form bên dưới hoặc nhắn Zalo/gọi hotline, chuyên viên gạo sẽ gửi bảng báo giá có dấu mộc công ty và ảnh mẫu gạo thực tế trong vòng 5 - 15 phút.',
  },
];

export default function BaoGiaPage() {
  return (
    <>
      <PageHeader
        title="Báo Giá Gạo Từ Thiện Giá Sỉ Tận Gốc"
        path="/bao-gia-gao-tu-thien/"
        crumb="Báo giá gạo từ thiện"
        intro={
          <>
            <p>
              Bảng báo giá gạo từ thiện sỉ tận gốc cập nhật ngày {PRICE_UPDATED} của <strong>Vựa Gạo Sóc Trăng</strong>.
              Đơn giá được tối ưu riêng cho các chương trình phát quà hộ nghèo, cúng dường tự viện, bếp cơm tình thương
              và cứu trợ bão lũ.
            </p>
            <p>
              Hỗ trợ đóng bao 5kg, 10kg miễn phí, giao hàng bằng xe tải chuyên dụng đến tận chùa, mái ấm, bếp ăn
              và xuất hóa đơn điện tử VAT 5% đầy đủ.
            </p>
          </>
        }
      />

      {/* Bảng giá gạo sỉ bậc thang */}
      <Section id="bang-gia" title="Bảng Giá Sỉ Các Loại Gạo Từ Thiện Hôm Nay">
        <p className="text-sm text-gray-600 mb-4">
          Bảng giá chi tiết theo từng nấc số lượng. Bấm vào từng loại gạo hoặc điền form bên dưới để nhận bảng dự toán chính xác theo địa điểm giao.
        </p>
        <PriceTable products={RICE_PRODUCTS} anchors />

        {/* Cẩm nang liên kết nội bộ */}
        <div className="mt-8 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5">
          <h4 className="text-sm font-bold text-emerald-950 mb-3">Xem Hướng Dẫn Chọn Gạo Chuyên Biệt Theo Từng Mục Đích:</h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs sm:text-sm">
            <Link href="/gao-phat-qua-tu-thien/" className="bg-white p-3 rounded-xl border border-emerald-100 font-semibold text-emerald-900 hover:text-emerald-700 hover:border-emerald-300 transition-colors block">
              🎁 Gạo phát quà hộ nghèo (túi 5kg - 10kg) &rarr;
            </Link>
            <Link href="/gao-cung-duong-chua/" className="bg-white p-3 rounded-xl border border-emerald-100 font-semibold text-emerald-900 hover:text-emerald-700 hover:border-emerald-300 transition-colors block">
              🪷 Gạo ST25 cúng dường chùa &rarr;
            </Link>
            <Link href="/chon-gao-cho-bep-an-tu-thien/" className="bg-white p-3 rounded-xl border border-emerald-100 font-semibold text-emerald-900 hover:text-emerald-700 hover:border-emerald-300 transition-colors block">
              🍲 Gạo lợi cơm cho quán cơm 0 đồng &rarr;
            </Link>
            <Link href="/quy-cach-dong-bao-va-giao-hang/" className="bg-white p-3 rounded-xl border border-emerald-100 font-semibold text-emerald-900 hover:text-emerald-700 hover:border-emerald-300 transition-colors block">
              🚚 Quy cách đóng bao & giao xe tải &rarr;
            </Link>
          </div>
        </div>
      </Section>

      {/* Form nhận báo giá nhanh */}
      <div id="form-bao-gia" className="scroll-mt-24">
        <FastQuoteForm />
      </div>

      {/* Quy trình đặt hàng */}
      <Section title="Quy Trình Nhận Báo Giá & Đặt Hàng Gạo Từ Thiện" muted>
        <OrderSteps />
      </Section>

      {/* Khu vực và thời gian giao hàng */}
      <Section title="Khu Vực Giao Hàng & Hệ Thống 4 Chi Nhánh Kho">
        <DeliveryAreas />
      </Section>

      {/* FAQ Báo giá */}
      <FAQSection faqs={faqs} title="Câu Hỏi Thường Gặp Về Báo Giá Gạo Từ Thiện" />

      {/* CTA Box */}
      <CTABox currentPath="/bao-gia-gao-tu-thien/" />
    </>
  );
}
