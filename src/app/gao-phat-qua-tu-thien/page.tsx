import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import {
  QUOTE_FORM_URL,
  SITE_URL,
  getProducts,
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

const CANONICAL = `${SITE_URL}/gao-phat-qua-tu-thien/`;

export const metadata: Metadata = {
  title: 'Gạo Phát Quà Từ Thiện – Gạo Dẻo Mềm Đóng Bao 5kg, 10kg',
  description:
    'Cẩm nang chọn gạo phát quà từ thiện cho hộ nghèo, người già, trẻ nhỏ: Gạo dẻo vừa, dễ ăn, đóng túi 5kg-10kg. Bảng dự toán chi phí 100-1.000 suất quà chi tiết.',
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: 'Gạo Phát Quà Từ Thiện – Gạo Dẻo Mềm Đóng Bao 5kg, 10kg | Vựa Gạo Sóc Trăng',
    description:
      'Cẩm nang chọn gạo phát quà từ thiện cho hộ nghèo, người già, trẻ nhỏ: Gạo dẻo vừa, dễ ăn, đóng túi 5kg-10kg. Bảng dự toán chi phí 100-1.000 suất quà chi tiết.',
    url: CANONICAL,
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/he-thong-kho-vua-gao-soc-trang.jpg`,
        width: 1200,
        height: 630,
        alt: 'Gạo phát quà từ thiện đóng bao 5kg, 10kg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gạo Phát Quà Từ Thiện – Gạo Dẻo Mềm Đóng Bao 5kg, 10kg | Vựa Gạo Sóc Trăng',
    description:
      'Cẩm nang chọn gạo phát quà từ thiện cho hộ nghèo, người già, trẻ nhỏ: Gạo dẻo vừa, dễ ăn, đóng túi 5kg-10kg. Bảng dự toán chi phí 100-1.000 suất quà chi tiết.',
    images: [`${SITE_URL}/he-thong-kho-vua-gao-soc-trang.jpg`],
  },
};

const giftProducts = getProducts(['gao-nghia-tinh', 'gao-thien-lanh', 'gao-thanh-y', 'gao-st25-thuong-hang']);

const faqs = [
  {
    q: 'Tại sao đi phát quà từ thiện cho hộ gia đình nên chọn gạo dẻo mềm thay vì gạo nở xốp?',
    a: 'Khi phát quà tận tay hộ nghèo, người già neo đơn và trẻ em, khẩu vị gia đình Việt Nam chuộng cơm dẻo vừa, hạt mềm ngọt và thơm nhẹ. Đặc biệt nhiều hộ khó khăn nấu một lần ăn cả ngày; dòng gạo dẻo thơm chất lượng cao giữ được độ mềm ẩm tự nhiên ngay cả khi cơm đã nguội, không bị khô cứng hay nghẹn cổ như gạo nở xốp chuyên dùng cho quán cơm.',
  },
  {
    q: 'Một phần quà từ thiện nên chia định lượng bao nhiêu kg là chuẩn nhất?',
    a: 'Định lượng phổ biến và chuẩn nhất hiện nay là 5kg hoặc 10kg mỗi phần quà. Bao 5kg nhỏ gọn, phù hợp cho người già neo đơn hoặc bà con dễ xách tay đi bộ, đi xe đạp/xe máy về. Bao 10kg mang ý nghĩa hỗ trợ trọn vẹn lương thực cho cả hộ gia đình từ 3 - 4 người ăn trong 12 - 15 ngày.',
  },
  {
    q: 'Bao bì 5kg và 10kg có in sẵn chữ Gạo Từ Thiện không?',
    a: 'Có. Vựa Gạo Sóc Trăng chuẩn bị sẵn mẫu bao bì PP dệt sạch đẹp in dòng chữ trang trọng "Gạo Từ Thiện / Gạo Nghĩa Tình". Toàn bộ chi phí bao bì, công nhân đong bao và may miệng bằng chỉ đôi công nghiệp chắc chắn đều được miễn phí 100% cho Quý đoàn.',
  },
  {
    q: 'Đoàn có thể yêu cầu dán decal tên Hội Thiện Nguyện hoặc Logo Công Ty lên bao gạo không?',
    a: 'Được. Quý đoàn chỉ cần gửi file thiết kế hoặc gửi decal đến kho trước 1 - 2 ngày. Đội ngũ nhân công tại kho sẽ hỗ trợ dán hoàn chỉnh lên từng bao gạo trước khi bốc xếp lên xe tải giao đến điểm hẹn.',
  },
  {
    q: 'Kho có hỗ trợ xe tải giao gạo thẳng đến các tỉnh vùng sâu, vùng xa không?',
    a: 'Có. Chúng tôi sở hữu đội xe tải từ 1 tấn đến 10 tấn, hỗ trợ giao tận sảnh chùa, nhà văn hóa thôn, UBND xã, điểm trường vùng sâu tại TP.HCM, Bình Dương, Tây Ninh, Đồng Nai, Long An và các tỉnh miền Tây. Tài xế và phụ xe hỗ trợ bốc xếp vào tận nơi tập kết.',
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
              Đối với các chương trình trao quà tận tay bà con hộ nghèo, người già neo đơn, người khuyết tật và các mái ấm,
              kinh nghiệm mua gạo làm từ thiện quan trọng nhất là chọn đúng hạt gạo ngon lành, dẻo mềm, để nguội không khô cứng.
              Đây là cách thể hiện sự thấu hiểu và trân trọng nhất đối với người nhận.
            </p>
            <p>
              Nếu Quý đoàn đang tìm nơi <strong>mua gạo làm từ thiện</strong> giá sỉ tận gốc, <strong>Vựa Gạo Sóc Trăng</strong> tự hào
              đồng hành cùng hàng trăm đoàn từ thiện, doanh nghiệp và nhà hảo tâm với nguồn gạo mới xay xát trực tiếp từ xưởng Đồng Tháp,
              cam kết không pha trộn gạo cũ, hỗ trợ đóng bao 5kg, 10kg miễn phí và chở xe tải giao tận điểm phát quà.
            </p>
          </>
        }
      />

      {/* Cẩm nang chọn gạo chuẩn chuyên gia */}
      <Section title="Kinh Nghiệm Chọn Gạo Phát Quà Từ Thiện Hợp Khẩu Vị Số Đông">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-emerald-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg mb-3">1</div>
            <h3 className="font-bold text-gray-900 text-base mb-2">Độ dẻo vừa, vị ngọt đậm</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tránh chọn gạo quá khô hoặc quá dính nhão. Gạo có độ dẻo mềm cân bằng như <strong>Gạo Nghĩa Tình</strong> hoặc <strong>Gạo Thiện Lành</strong> giúp
              người già răng yếu hay trẻ nhỏ đều dễ ăn, cơm nở mềm và thơm lành.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-emerald-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg mb-3">2</div>
            <h3 className="font-bold text-gray-900 text-base mb-2">Để nguội không bị khô cứng</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Bà con lao động nghèo thường nấu cơm sáng mang theo đi làm hoặc ăn cả ngày. Gạo mới đạt chuẩn giữ trọn độ ẩm
              tự nhiên, hạt cơm để từ sáng đến chiều vẫn mềm ngon, không bị lại gạo hay ôi thiu nhanh.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-emerald-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg mb-3">3</div>
            <h3 className="font-bold text-gray-900 text-base mb-2">Hạt gạo mới, độ ẩm &lt;14%</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Gạo vừa xay xát từ nhà máy có mùi thơm cám tự nhiên, hạt bóng đều không vỡ vụn. Độ ẩm đạt chuẩn bảo quản
              trong túi kín từ 3 – 6 tháng mà không sinh mối mọt hay ẩm mốc.
            </p>
          </div>
        </div>

        {/* 3 dòng gạo phát quà được ưa chuộng nhất */}
        <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-6">
          <h3 className="text-base font-bold text-emerald-950 mb-4">Top 3 Loại Gạo Phát Quà Được Tin Chọn Nhiều Nhất:</h3>
          <div className="grid md:grid-cols-3 gap-5 text-sm">
            <div className="bg-white p-4 rounded-xl border border-emerald-100">
              <span className="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-900 text-xs font-bold rounded mb-1">Dễ ăn & ấm lòng</span>
              <h4 className="font-bold text-gray-900 text-base mb-1">Gạo Nghĩa Tình</h4>
              <p className="text-gray-600 text-xs mb-2">Đặc tính: Giống Liên Hương mới, dẻo vừa, ngọt bùi, để nguội vẫn mềm cơm.</p>
              <p className="text-emerald-800 font-bold">Giá sỉ: Từ 14.200đ – 15.200đ/kg</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-emerald-100">
              <span className="inline-block px-2 py-0.5 bg-sky-100 text-sky-900 text-xs font-bold rounded mb-1">Thơm lài tự nhiên</span>
              <h4 className="font-bold text-gray-900 text-base mb-1">Gạo Thiện Lành</h4>
              <p className="text-gray-600 text-xs mb-2">Đặc tính: Thơm Lài 3A chính gốc, dẻo nhiều, thơm dịu, thích hợp cúng dường & phát quà.</p>
              <p className="text-emerald-800 font-bold">Giá sỉ: Từ 15.000đ – 16.200đ/kg</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-emerald-100">
              <span className="inline-block px-2 py-0.5 bg-rose-100 text-rose-900 text-xs font-bold rounded mb-1">Quà biếu trang trọng</span>
              <h4 className="font-bold text-gray-900 text-base mb-1">Gạo Thành Ý</h4>
              <p className="text-gray-600 text-xs mb-2">Đặc tính: Hạt Ngọc Thái / Đài Thơm hạt dài, dẻo dai đậm đà, mùi thơm ngát.</p>
              <p className="text-emerald-800 font-bold">Giá sỉ: Từ 16.000đ – 17.200đ/kg</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Bảng giá các loại gạo phát quà */}
      <Section id="bang-gia-phat-qua" title="Bảng Giá Sỉ Các Loại Gạo Phát Quà Tận Gốc" muted>
        <p className="text-sm text-gray-600 mb-4">
          Giá sỉ xuất xưởng giảm sâu theo nấc sản lượng 300kg, 500kg, 1 tấn. Đã bao gồm hỗ trợ đóng bao 5kg, 10kg miễn phí.{' '}
          <Link href={QUOTE_FORM_URL} className="text-emerald-700 font-semibold underline">
            Nhận bảng báo giá chi tiết ngay
          </Link>
        </p>
        <PriceTable products={giftProducts} />
      </Section>

      {/* Bảng dự toán quy mô phần quà */}
      <Section title="Bảng Dự Toán Chi Phí Theo Quy Mô Suất Quà (5kg & 10kg)">
        <p className="text-sm text-gray-600 mb-4">
          Bảng tính nhanh ngân sách tham khảo để Ban tổ chức, Công đoàn và Mạnh thường quân dễ dàng lập kế hoạch tài chính:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-amber-50 text-amber-950 font-bold border-b border-amber-200">
              <tr>
                <th className="p-3 text-left">Quy mô chương trình</th>
                <th className="p-3 text-center">Tổng kg (Bao 5kg)</th>
                <th className="p-3 text-center">Tổng kg (Bao 10kg)</th>
                <th className="p-3 text-right">Dự toán Gạo Nghĩa Tình (Bao 5kg)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              <tr className="hover:bg-gray-50/50">
                <td className="p-3 font-bold text-gray-900">100 suất quà</td>
                <td className="p-3 text-center font-semibold text-emerald-800">500 kg</td>
                <td className="p-3 text-center font-semibold text-gray-800">1.000 kg (1 tấn)</td>
                <td className="p-3 text-right font-bold text-amber-800">~ 7.350.000 đ</td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="p-3 font-bold text-gray-900">200 suất quà</td>
                <td className="p-3 text-center font-semibold text-emerald-800">1.000 kg (1 tấn)</td>
                <td className="p-3 text-center font-semibold text-gray-800">2.000 kg (2 tấn)</td>
                <td className="p-3 text-right font-bold text-amber-800">~ 14.700.000 đ</td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="p-3 font-bold text-gray-900">500 suất quà</td>
                <td className="p-3 text-center font-semibold text-emerald-800">2.500 kg (2.5 tấn)</td>
                <td className="p-3 text-center font-semibold text-gray-800">5.000 kg (5 tấn)</td>
                <td className="p-3 text-right font-bold text-amber-800">Giá sỉ tận xưởng chiết khấu đặc biệt</td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="p-3 font-bold text-gray-900">1.000 suất quà</td>
                <td className="p-3 text-center font-semibold text-emerald-800">5.000 kg (5 tấn)</td>
                <td className="p-3 text-center font-semibold text-gray-800">10.000 kg (10 tấn)</td>
                <td className="p-3 text-right font-bold text-amber-800">Hợp đồng chuyến xe thẳng từ nhà máy</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3 italic">
          * Đơn giá đã bao gồm bao bì in chữ &ldquo;Gạo Từ Thiện&rdquo; may chỉ công nghiệp. Xuất hóa đơn VAT 5% đầy đủ cho doanh nghiệp khi có yêu cầu.
        </p>

        {/* Liên kết nội bộ ngữ cảnh */}
        <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm">
          <span className="text-gray-500 font-medium">Xem thêm các cẩm nang liên quan:</span>
          <Link href="/bao-gia-gao-tu-thien/" className="text-emerald-700 hover:underline font-semibold">
            Bảng báo giá chi tiết từng nấc kg &rarr;
          </Link>
          <Link href="/quy-cach-dong-bao-va-giao-hang/" className="text-emerald-700 hover:underline font-semibold">
            Chính sách giao xe tải tận nơi &rarr;
          </Link>
          <Link href="/gao-cung-duong-chua/" className="text-emerald-700 hover:underline font-semibold">
            Gạo cúng dường chùa &rarr;
          </Link>
          <Link href="/chon-gao-cho-bep-an-tu-thien/" className="text-emerald-700 hover:underline font-semibold">
            Gạo dôi cơm cho bếp từ thiện &rarr;
          </Link>
        </div>
      </Section>

      {/* Quy trình đặt hàng */}
      <Section title="Quy Trình 4 Bước Đặt Gạo Phát Quà Tận Nơi" muted>
        <OrderSteps />
      </Section>

      {/* Khu vực giao hàng */}
      <Section title="Đội Xe Tải Chuyên Dụng Giao Tận Điểm Phát Quà">
        <DeliveryAreas />
      </Section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Câu Hỏi Thường Gặp Khi Mua Gạo Phát Quà Từ Thiện" />

      {/* CTA Box */}
      <CTABox currentPath="/gao-phat-qua-tu-thien/" />
    </>
  );
}
