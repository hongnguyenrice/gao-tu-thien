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

const CANONICAL = `${SITE_URL}/gao-phat-qua-tu-thien/`;

export const metadata: Metadata = {
  title: 'Gạo Phát Quà Từ Thiện – Gạo Dẻo Mềm Đóng Bao 5kg, 10kg',
  description:
    'Tư vấn chọn gạo phát quà từ thiện cho hộ nghèo, người già neo đơn, trẻ em mái ấm. Gạo Lài Sữa, Jasmine, ST25 dẻo ngọt, dễ ăn, để nguội không cứng. Đóng bao 5kg, 10kg miễn phí, giao tận nơi.',
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: 'Gạo Phát Quà Từ Thiện – Gạo Dẻo Mềm Đóng Bao 5kg, 10kg | Vựa Gạo Sóc Trăng',
    description:
      'Gạo Lài Sữa, Đài Thơm 8, ST25 chuyên dụng chia phần phát quà tận tay bà con nghèo. Hỗ trợ đóng bao 5kg, 10kg, xe tải giao tận nơi.',
    url: CANONICAL,
    type: 'article',
  },
};

// Các loại gạo phù hợp nhất cho phát quà
const giftProducts = getProducts(['gao-lai-sua', 'gao-thom-jasmine', 'gao-st25-thuong-hang']);

const faqs = [
  {
    q: 'Tại sao đi phát quà từ thiện cho hộ gia đình nên chọn gạo dẻo mềm thay vì gạo nở xốp?',
    a: 'Khi phát quà tận tay hộ nghèo, người già neo đơn và trẻ em, khẩu vị gia đình thường chuộng cơm dẻo vừa, mềm ngọt và thơm nhẹ. Đặc biệt với người lớn tuổi răng yếu hoặc các gia đình nấu ăn theo bữa, gạo dẻo để nguội vẫn mềm, không bị khô cứng hay khó nuốt như dòng gạo nở xốp chuyên dùng cho quán cơm.',
  },
  {
    q: 'Một phần quà từ thiện nên chia định lượng bao nhiêu kg là phù hợp?',
    a: 'Định lượng phổ biến và chuẩn nhất hiện nay là 5kg hoặc 10kg mỗi phần quà. Bao 5kg nhỏ gọn, bà con dễ xách tay hoặc để trên xe máy mang về. Bao 10kg mang ý nghĩa hỗ trợ trọn vẹn lương thực cho cả hộ gia đình từ 3 - 4 người ăn trong nửa tháng.',
  },
  {
    q: 'Bao bì phát quà có in sẵn chữ Từ Thiện không?',
    a: 'Chúng tôi có sẵn mẫu bao bì dệt sạch đẹp in dòng chữ "Gạo Từ Thiện / Gạo Nghĩa Tình" trang trọng. Ngoài ra, nếu Quý đoàn có nhu cầu in decal tên Hội thiện nguyện hoặc logo Công ty để dán lên từng bao, kho hỗ trợ dán hoàn chỉnh trước khi bốc lên xe giao.',
  },
  {
    q: 'Đoàn có thể đặt giao thẳng đến điểm phát quà ở các tỉnh xa không?',
    a: 'Được. Chúng tôi hỗ trợ giao thẳng bằng xe tải đến tận nhà văn hóa thôn, UBND xã, điểm tập kết trường học vùng sâu, vùng xa tại các tỉnh miền Tây, miền Đông Nam Bộ và Tây Nguyên theo đúng ngày giờ phát quà của đoàn.',
  },
];

export default function GaoPhatQuaPage() {
  return (
    <>
      <PageHeader
        title="Gạo Phát Quà Từ Thiện – Dẻo Mềm, Dễ Ăn, Đóng Bao 5kg & 10kg"
        path="/gao-phat-qua-tu-thien/"
        crumb="Gạo phát quà từ thiện"
        intro={
          <>
            <p>
              Đối với các chương trình trao quà tận tay bà con hộ nghèo, người già neo đơn, người khuyết tật và trẻ em
              cơ nhỡ, việc chọn đúng hạt gạo ngon lành, dẻo thơm là cách thể hiện trọn vẹn lòng nhân ái và sự trân trọng
              dành cho người nhận.
            </p>
            <p>
              <strong>Vựa Gạo Sóc Trăng</strong> chuyên cung cấp các dòng gạo dẻo vừa – dẻo thơm hảo hạng, hạt gạo mới xay xát,
              không pha trộn, hỗ trợ đóng bao 5kg, 10kg sạch đẹp và chở xe tải giao tận điểm phát quà.
            </p>
          </>
        }
      />

      {/* Tiêu chí chọn gạo phát quà */}
      <Section title="Kinh Nghiệm Chọn Gạo Phát Quà Từ Thiện Phù Hợp Khẩu Vị Số Đông">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-gray-200">
            <h3 className="font-bold text-gray-900 text-base mb-2">1. Cơm dẻo vừa, mềm ngọt</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Dòng gạo như <strong>Lài Sữa</strong> hoặc <strong>Đài Thơm 8</strong> có độ dẻo mềm vừa phải, cơm ngọt đậm,
              phù hợp với khẩu vị từ trẻ em đến người già.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-200">
            <h3 className="font-bold text-gray-900 text-base mb-2">2. Để nguội không bị khô cứng</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nhiều gia đình khó khăn nấu một lần ăn cả ngày. Gạo dẻo thơm chất lượng cao giữ được độ mềm ẩm tự nhiên
              ngay cả khi cơm đã nguội, không bị lại gạo.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-200">
            <h3 className="font-bold text-gray-900 text-base mb-2">3. Hạt gạo mới, sạch thuần khiết</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tuyệt đối không dùng gạo tồn kho ẩm mốc hay đánh bóng bằng hóa chất. Hạt gạo mới từ xưởng thơm tự nhiên,
              bảo quản được lâu trong túi kín.
            </p>
          </div>
        </div>
      </Section>

      {/* Bảng giá các loại gạo phát quà */}
      <Section id="bang-gia-phat-qua" title="Bảng Giá Các Loại Gạo Phát Quà Được Tin Chọn Nhất" muted>
        <p className="text-sm text-gray-600 mb-4">
          Giá sỉ ưu đãi cho các chương trình thiện nguyện, hỗ trợ đóng bao 5kg, 10kg miễn phí.{' '}
          <Link href={QUOTE_FORM_URL} className="text-emerald-700 font-semibold underline">
            Nhận báo giá dự toán ngay
          </Link>
        </p>
        <PriceTable products={giftProducts} />
      </Section>

      {/* Bảng dự toán quy mô phần quà */}
      <Section title="Bảng Dự Toán Chi Phí Theo Quy Mô Suất Quà (Tham Khảo)">
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-amber-50 text-amber-950 font-bold">
              <tr>
                <th className="p-3 text-left">Quy mô phần quà</th>
                <th className="p-3 text-center">Định lượng 5kg/suất</th>
                <th className="p-3 text-center">Định lượng 10kg/suất</th>
                <th className="p-3 text-right">Dự toán Gạo Lài Sữa (5kg/suất)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              <tr>
                <td className="p-3 font-bold">100 suất quà</td>
                <td className="p-3 text-center font-semibold text-emerald-800">500 kg</td>
                <td className="p-3 text-center">1.000 kg (1 tấn)</td>
                <td className="p-3 text-right font-bold text-amber-800">~ 7.600.000 đ</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">200 suất quà</td>
                <td className="p-3 text-center font-semibold text-emerald-800">1.000 kg (1 tấn)</td>
                <td className="p-3 text-center">2.000 kg (2 tấn)</td>
                <td className="p-3 text-right font-bold text-amber-800">~ 14.700.000 đ</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">500 suất quà</td>
                <td className="p-3 text-center font-semibold text-emerald-800">2.500 kg (2.5 tấn)</td>
                <td className="p-3 text-center">5.000 kg (5 tấn)</td>
                <td className="p-3 text-right font-bold text-amber-800">Giá xuất xưởng chiết khấu cao</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">1.000 suất quà</td>
                <td className="p-3 text-center font-semibold text-emerald-800">5.000 kg (5 tấn)</td>
                <td className="p-3 text-center">10.000 kg (10 tấn)</td>
                <td className="p-3 text-right font-bold text-amber-800">Hợp đồng chuyến xe trực tiếp xưởng</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          * Đã bao gồm bao bì in chữ Từ Thiện. Phí giao xe tải và thuế VAT 5% (nếu cần) được báo cụ thể trong bảng báo giá.
        </p>
      </Section>

      {/* Quy trình đặt hàng */}
      <Section title="Quy Trình Đặt Gạo Phát Quà Tận Nơi" muted>
        <OrderSteps />
      </Section>

      {/* Khu vực giao hàng */}
      <Section title="Giao Hàng Tận Nơi Bằng Xe Tải Chuyên Dụng">
        <DeliveryAreas />
      </Section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Thắc Mắc Khi Mua Gạo Phát Quà Từ Thiện" />

      {/* CTA Box */}
      <CTABox currentPath="/gao-phat-qua-tu-thien/" />
    </>
  );
}
