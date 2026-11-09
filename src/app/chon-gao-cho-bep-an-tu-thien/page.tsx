import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { getProducts, QUOTE_FORM_URL, SITE_URL } from '@/data/site';
import {
  CTABox,
  DeliveryAreas,
  FAQSection,
  OrderSteps,
  PageHeader,
  PriceTable,
  Section,
} from '@/components/content';

const CANONICAL = `${SITE_URL}/chon-gao-cho-bep-an-tu-thien/`;

export const metadata: Metadata = {
  title: 'Chọn Gạo Cho Bếp Ăn Từ Thiện, Quán Cơm 0 Đồng | Tiết Kiệm & Lợi Cơm',
  description:
    'Kinh nghiệm chọn gạo cho bếp ăn từ thiện bệnh viện, quán cơm 0 đồng, bếp chùa nấu hàng trăm suất. Gạo IR50404 nở xốp dôi cơm; Gạo tấm thơm nấu cháo dinh dưỡng sánh bùi, giá sỉ tốt nhất.',
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: 'Chọn Gạo Cho Bếp Ăn Từ Thiện & Quán Cơm 0 Đồng – Lợi Cơm & Tiết Kiệm Chi Phí',
    description:
      'Gạo IR50404 và Gạo Tấm Thơm sỉ tận gốc cho bếp ăn tình thương, quán cơm chay miễn phí. Giao hàng xe tải định kỳ, đóng bao 25kg, 50kg.',
    url: CANONICAL,
    type: 'article',
  },
};

const kitchenProducts = getProducts(['gao-504', 'gao-tam-thom', 'gao-lai-sua']);

const faqs = [
  {
    q: 'Tại sao các bếp ăn từ thiện lớn và quán cơm 0 đồng lại ưu tiên chọn Gạo 504?',
    a: 'Gạo IR50404 có đặc tính hạt nở xốp rất nhiều, khô ráo và không bị dính bết. Khi nấu bằng tủ cơm công nghiệp hoặc nồi quân dụng lớn, 1kg gạo 504 cho ra số lượng bát cơm nhiều hơn khoảng 20% - 30% so với gạo dẻo. Đặc biệt, người lao động nghèo ăn cơm kèm nhiều nước canh hoặc đồ xào, hạt cơm nở ráo hút canh rất ngon và không bị nhão.',
  },
  {
    q: 'Nấu cháo từ thiện tại các bệnh viện nên dùng loại gạo nào tốt nhất?',
    a: 'Nên dùng Gạo Tấm Thơm (hạt tấm vỡ nguyên mầm phôi). Gạo tấm nấu cháo nhanh nhừ hơn gạo nguyên hạt, tiết kiệm 40% thời gian đun nấu và nhiên liệu gas/điện. Khi nhừ, hạt tấm nở bung sánh mịn, nước cháo ngọt hậu và thơm lành tự nhiên, rất thích hợp cho bệnh nhân tiêu hóa dễ dàng.',
  },
  {
    q: 'Kho gạo có chính sách giữ giá ổn định theo tháng/quý cho bếp ăn từ thiện không?',
    a: 'Có. Chúng tôi có chính sách ký hợp đồng cung ứng định kỳ hàng tuần hoặc hàng tháng cho các bếp cơm thiện nguyện, viện dưỡng lão và chùa, cam kết bình ổn giá từ nhà máy Đồng Tháp và giữ xe giao đúng lịch cố định.',
  },
  {
    q: 'Bếp ăn từ thiện nên chọn quy cách đóng bao nào để thuận tiện?',
    a: 'Đối với bếp ăn nấu liên tục hàng ngày, quy cách bao 25kg hoặc 50kg là tối ưu nhất: vừa tiết kiệm chi phí bao bì, vừa dễ dàng kiểm đếm kho và dễ trút vào thùng chứa/nồi nấu công nghiệp.',
  },
];

export default function ChonGaoBepAnPage() {
  return (
    <>
      <PageHeader
        title="Kinh Nghiệm Chọn Gạo Cho Bếp Ăn Từ Thiện & Quán Cơm 0 Đồng"
        path="/chon-gao-cho-bep-an-tu-thien/"
        crumb="Chọn gạo cho bếp ăn từ thiện"
        intro={
          <>
            <p>
              Vận hành một bếp cơm từ thiện bệnh viện, quán cơm thiện nguyện 0 đồng hay bếp ăn chùa phục vụ từ 300 đến hàng
              nghìn suất ăn mỗi ngày là một bài toán kinh phí không hề nhỏ đối với các ban thiện nguyện.
            </p>
            <p>
              Chọn đúng loại gạo có độ <strong>nở xốp cao, dôi cơm, ráo hạt</strong> giúp tối đa hóa số suất ăn phục vụ bà con
              với cùng một ngân sách, đồng thời đảm bảo bát cơm thơm sạch và no lòng người lao động nghèo.
            </p>
          </>
        }
      />

      {/* So sánh 2 loại gạo chủ lực cho bếp ăn */}
      <Section title="2 Dòng Gạo Chủ Lực Tiết Kiệm Chi Phí Nhất Cho Bếp Ăn Thiện Nguyện">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Gạo 504 */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-emerald-200 shadow-sm space-y-4">
            <span className="bg-emerald-100 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
              Vua Lợi Cơm Cho Quán Cơm & Bếp Ăn
            </span>
            <h3 className="text-2xl font-bold text-gray-900">Gạo IR50404 Nở Xốp Ráo Hạt</h3>
            <ul className="text-sm text-gray-600 space-y-2.5">
              <li><strong>Đặc tính:</strong> Hạt gạo tròn to, cơm nở xốp nhiều, hạt khô ráo, không bết dính.</li>
              <li><strong>Ưu điểm kinh tế:</strong> Độ nở cực lớn, 1kg gạo cho ra 4 – 5 đĩa cơm đầy đặn. Tiết kiệm tối đa ngân sách nguyên liệu.</li>
              <li><strong>Hợp khẩu vị:</strong> Người lao động, phu hồ, bác xe ôm, sinh viên nghèo rất thích vì cơm nở chắc bụng, chan canh súp ăn rất ngon miệng.</li>
              <li><strong>Đóng bao đề xuất:</strong> Bao 25kg hoặc 50kg trút trực tiếp vào tủ cơm công nghiệp.</li>
            </ul>
          </div>

          {/* Gạo Tấm Thơm */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-blue-200 shadow-sm space-y-4">
            <span className="bg-blue-100 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
              Chuyên Dụng Cho Nồi Cháo Tình Thương
            </span>
            <h3 className="text-2xl font-bold text-gray-900">Gạo Tấm Thơm Sạch Cám</h3>
            <ul className="text-sm text-gray-600 space-y-2.5">
              <li><strong>Đặc tính:</strong> Hạt tấm vỡ từ gạo thơm nguyên chất, giữ trọn phôi mầm dinh dưỡng của hạt gạo.</li>
              <li><strong>Ưu điểm đun nấu:</strong> Hạt tấm nấu cháo cực nhanh nhừ, hạt nở bung đều, sánh mịn, không bị tách nước hay vón cục.</li>
              <li><strong>Phục vụ bệnh viện:</strong> Thích hợp nhất cho các nồi cháo phát sáng miễn phí tại cổng viện K, viện Nhi, viện Ung Bướu; cháo ngọt lành, thơm dịu, dễ nuốt.</li>
              <li><strong>Đóng bao đề xuất:</strong> Bao 25kg hoặc 50kg sạch sẽ, khô ráo.</li>
            </ul>
          </div>

        </div>
      </Section>

      {/* Bảng so sánh hiệu suất & chi phí */}
      <Section title="Bảng So Sánh Hiệu Suất Nấu Cơm Giữa Các Phân Khúc Gạo" muted>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-amber-50 text-amber-950 font-bold">
              <tr>
                <th className="p-3 text-left">Loại gạo</th>
                <th className="p-3 text-center">Đặc tính cơm</th>
                <th className="p-3 text-center">Số suất cơm / 1kg gạo</th>
                <th className="p-3 text-right">Mức giá sỉ từ 1 tấn</th>
                <th className="p-3 text-left">Đánh giá độ phù hợp bếp ăn</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              <tr>
                <td className="p-3 font-bold text-gray-900">Gạo IR50404</td>
                <td className="p-3 text-center">Nở xốp nhiều, ráo hạt</td>
                <td className="p-3 text-center font-bold text-emerald-800">4.5 - 5 suất</td>
                <td className="p-3 text-right font-bold text-emerald-800">12.000 đ/kg</td>
                <td className="p-3 text-emerald-700 font-semibold">Tối ưu chi phí nhất (Số 1 bếp ăn)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-gray-900">Gạo Tấm Thơm</td>
                <td className="p-3 text-center">Nấu cháo sánh, mau nhừ</td>
                <td className="p-3 text-center font-bold text-blue-800">7 - 8 bát cháo</td>
                <td className="p-3 text-right font-bold text-blue-800">12.800 đ/kg</td>
                <td className="p-3 text-blue-700 font-semibold">Chuyên dụng nồi cháo bệnh viện</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-gray-900">Gạo Lài Sữa</td>
                <td className="p-3 text-center">Dẻo vừa, mềm ngọt</td>
                <td className="p-3 text-center">3.5 - 4 suất</td>
                <td className="p-3 text-right">14.700 đ/kg</td>
                <td className="p-3 text-gray-600">Bếp ăn viện dưỡng lão, mái ấm trẻ em</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Bảng giá gạo bếp ăn */}
      <Section id="bang-gia-bep-an" title="Bảng Giá Sỉ Các Dòng Gạo Bếp Ăn Từ Thiện">
        <p className="text-sm text-gray-600 mb-4">
          Giá sỉ xuất xưởng áp dụng cho các bếp cơm thiện nguyện.{' '}
          <Link href={QUOTE_FORM_URL} className="text-emerald-700 font-semibold underline">
            Nhận báo giá dự toán theo tháng
          </Link>
        </p>
        <PriceTable products={kitchenProducts} />
      </Section>

      {/* Quy trình đặt hàng định kỳ */}
      <Section title="Quy Trình Giao Gạo Định Kỳ Cho Bếp Ăn & Quán Cơm" muted>
        <OrderSteps />
      </Section>

      {/* Khu vực giao hàng */}
      <Section title="Xe Tải Giao Tận Bếp Ăn Tại TP.HCM, Bình Dương, Tây Ninh & Đồng Tháp">
        <DeliveryAreas />
      </Section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Câu Hỏi Khi Mua Gạo Cho Bếp Ăn Từ Thiện" />

      {/* CTA Box */}
      <CTABox currentPath="/chon-gao-cho-bep-an-tu-thien/" />
    </>
  );
}
