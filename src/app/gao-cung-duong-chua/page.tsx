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

const CANONICAL = `${SITE_URL}/gao-cung-duong-chua/`;

export const metadata: Metadata = {
  title: 'Gạo Cúng Dường Chùa & Tự Viện – Gạo Thơm Thuần Khiết',
  description:
    'Gạo ST25, Jasmine cúng dường Tam Bảo, trai tăng, lễ Vu Lan, Phật Đản. Hạt gạo thơm dẻo thanh khiết, hỗ trợ kiều bào gửi gạo cúng dường giao tận cửa chùa.',
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: 'Gạo Cúng Dường Chùa & Tự Viện – Gạo Thơm Thuần Khiết | Vựa Gạo Sóc Trăng',
    description:
      'Gạo ST25, Jasmine cúng dường Tam Bảo, trai tăng, lễ Vu Lan, Phật Đản. Hạt gạo thơm dẻo thanh khiết, hỗ trợ kiều bào gửi gạo cúng dường giao tận cửa chùa.',
    url: CANONICAL,
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/he-thong-kho-vua-gao-soc-trang.jpg`,
        width: 1200,
        height: 630,
        alt: 'Gạo cúng dường chùa và tự viện',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gạo Cúng Dường Chùa & Tự Viện – Gạo Thơm Thuần Khiết | Vựa Gạo Sóc Trăng',
    description:
      'Gạo ST25, Jasmine cúng dường Tam Bảo, trai tăng, lễ Vu Lan, Phật Đản. Hạt gạo thơm dẻo thanh khiết, hỗ trợ kiều bào gửi gạo cúng dường giao tận cửa chùa.',
    images: [`${SITE_URL}/he-thong-kho-vua-gao-soc-trang.jpg`],
  },
};

const templeProducts = getProducts(['gao-st25-thuong-hang', 'gao-thanh-y', 'gao-thien-lanh']);

const faqs = [
  {
    q: 'Cúng dường gạo cho chùa, tịnh xá nên chọn loại gạo nào là trang nghiêm nhất?',
    a: 'Khi dâng cúng Tam Bảo và nuôi dưỡng Tăng đoàn tu học, hạt gạo tượng trưng cho hạt ngọc thực thuần khiết. Quý Phật tử và đạo tràng thường ưu tiên chọn dòng gạo phẩm chất cao nhất: ST25 Thượng Hạng (hạt dài trong bóng, thơm mùi lá dứa tự nhiên, để nguội vẫn dẻo mềm) hoặc Gạo Thiện Lành (Thơm Lài 3A) thanh tao thuần khiết. Hạt gạo trắng sạch, không pha trộn thể hiện trọn vẹn lòng thành kính.',
  },
  {
    q: 'Kho gạo có hỗ trợ giao tận nơi và bốc vác vào kho tịnh tài của chùa không?',
    a: 'Có. Đội ngũ giao hàng bằng xe tải của Vựa Gạo Sóc Trăng được dặn dò thấu đáo về văn hóa tự viện: trang phục lịch sự, đi nhẹ nói khẽ, lễ phép và hỗ trợ bốc xếp toàn bộ số gạo vào tận kho lương thực, bếp chùa hoặc vị trí do Quý Thầy/Quý Sư cô chỉ định.',
  },
  {
    q: 'Phật tử ở xa hoặc kiều bào ở nước ngoài muốn cúng dường gạo thì quy trình ra sao?',
    a: 'Chúng tôi hỗ trợ trọn gói cho Phật tử ở xa: chuẩn bị đúng loại gạo, đóng bao trang nghiêm, vận chuyển đúng hẹn đến ngôi chùa Quý vị yêu cầu. Khi giao nhận có mặt Quý Thầy/Ban quản tự, nhân viên sẽ chụp ảnh, quay video bàn giao và gửi biên bản xác nhận chi tiết qua Zalo.',
  },
  {
    q: 'Dịp cao điểm Vu Lan, Phật Đản hoặc ngày Rằm lớn giá gạo có bị tăng không?',
    a: 'Tuyệt đối không. Vựa Gạo Sóc Trăng cam kết giữ vững đơn giá sỉ bình ổn từ nhà máy xay xát Đồng Tháp quanh năm, không tăng giá hay găm hàng vào các dịp lễ lớn của Phật giáo nhằm trợ duyên công đức cùng Quý đồng đạo Phật tử.',
  },
];

export default function GaoCungDuongPage() {
  return (
    <>
      <PageHeader
        title="Gạo Cúng Dường Chùa, Tự Viện – Hạt Ngọc Sạch Thơm Dâng Tam Bảo"
        path="/gao-cung-duong-chua/"
        crumb="Gạo cúng dường chùa"
        intro={
          <>
            <p>
              Cúng dường lương thực cho chư Tăng Ni, bổn tự, tịnh xá và các bếp ăn thiện nguyện trong chùa vào mùa Vu Lan Báo Hiếu,
              Đại lễ Phật Đản, mùa An Cư Kiết Hạ hay lễ trai tăng cầu an cầu siêu là truyền thống thanh tịnh tích tụ phước báu vô lượng.
            </p>
            <p>
              <strong>Vựa Gạo Sóc Trăng</strong> trân trọng đồng hành cùng Quý Phật tử, đạo tràng và quý thiện nam tín nữ:
              cung cấp các dòng gạo thơm thượng hạng từ đồng bằng sông Cửu Long, hạt gạo mới xát trắng sạch thuần khiết,
              đóng bao trang nghiêm và xe tải giao kính cẩn tận nơi.
            </p>
          </>
        }
      />

      {/* Ý nghĩa và tiêu chuẩn cúng dường */}
      <Section title="3 Tiêu Chí Gạo Cúng Dường Trang Nghiêm Tại Vựa Gạo Sóc Trăng">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-amber-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-lg mb-3">1</div>
            <h3 className="font-bold text-gray-900 text-base mb-2">Hạt ngọc thuần khiết</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              100% lúa mới thu hoạch vụ mới, hạt thon dài đều đặn, không lẫn vỏ trấu, không hạt hư mốc, tuyệt đối không chất
              bảo quản chống mọt hay hương liệu hóa học tạo mùi thơm nhân tạo.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-amber-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-lg mb-3">2</div>
            <h3 className="font-bold text-gray-900 text-base mb-2">Đóng gói trang trọng</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Quy cách bao bì 5kg, 10kg, 25kg bằng chất liệu dệt sạch đẹp, ngay ngắn, may chỉ đôi chắc chắn, thích hợp để
              bày biện trang nghiêm tại sảnh chùa trước giờ tác bạch cúng dường.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-amber-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-lg mb-3">3</div>
            <h3 className="font-bold text-gray-900 text-base mb-2">Vận chuyển kính cẩn</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Xe giao hàng cam kết đến đúng khung giờ đã hẹn trước lễ. Đội ngũ phụ xe hỗ trợ khuân vác, sắp xếp chu đáo
              vào kho lương thực của chùa, không gây ồn ào ảnh hưởng không gian thanh tịnh.
            </p>
          </div>
        </div>

        {/* Các dịp lễ lớn cúng dường trong năm */}
        <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6">
          <h3 className="text-base font-bold text-amber-950 mb-3">Các Dịp Phật Sự Quý Phật Tử Thường Đặt Gạo Cúng Dường:</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-4 rounded-xl border border-amber-100">
              <span className="font-bold text-amber-900 block mb-1">Mùa Vu Lan Báo Hiếu</span>
              <p className="text-gray-600 text-xs">Tháng 7 Âm lịch: Cúng dường tứ sự, hồi hướng công đức cha mẹ tổ tiên.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-amber-100">
              <span className="font-bold text-amber-900 block mb-1">Mùa An Cư Kiết Hạ</span>
              <p className="text-gray-600 text-xs">Cung phụng lương thực cho trường hạ suốt 3 tháng mùa mưa của chư Tăng.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-amber-100">
              <span className="font-bold text-amber-900 block mb-1">Đại Lễ Phật Đản</span>
              <p className="text-gray-600 text-xs">Tháng 4 Âm lịch: Nấu cơm chay đãi Phật tử thập phương về chiêm bái chùa.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-amber-100">
              <span className="font-bold text-amber-900 block mb-1">Trai Tăng & Cầu An</span>
              <p className="text-gray-600 text-xs">Tuần thất, lễ cúng giỗ, ngày Rằm lớn và ngày đầu tháng gieo duyên thanh tịnh.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Sản phẩm gạo cúng dường */}
      <Section id="san-pham-cung-duong" title="Các Loại Gạo Thơm Đặc Sản Dâng Cúng Tam Bảo" muted>
        <p className="text-sm text-gray-600 mb-4">
          Bảng giá sỉ áp dụng trực tiếp cho các tự viện và chương trình cúng dường.{' '}
          <Link href={QUOTE_FORM_URL} className="text-emerald-700 font-semibold underline">
            Gửi yêu cầu nhận báo giá &rarr;
          </Link>
        </p>
        <PriceTable products={templeProducts} />

        {/* Liên kết nội bộ */}
        <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm">
          <span className="text-gray-500 font-medium">Khám phá thêm:</span>
          <Link href="/bao-gia-gao-tu-thien/" className="text-emerald-700 hover:underline font-semibold">
            Bảng giá sỉ toàn bộ các loại gạo &rarr;
          </Link>
          <Link href="/gao-phat-qua-tu-thien/" className="text-emerald-700 hover:underline font-semibold">
            Gạo phát quà hộ nghèo túi 5kg, 10kg &rarr;
          </Link>
          <Link href="/quy-cach-dong-bao-va-giao-hang/" className="text-emerald-700 hover:underline font-semibold">
            Chính sách giao nhận xe tải tận chùa &rarr;
          </Link>
        </div>
      </Section>

      {/* Quy trình đặt hàng */}
      <Section title="Quy Trình Đặt Gạo Cúng Dường Tận Chùa">
        <OrderSteps />
      </Section>

      {/* Khu vực giao hàng */}
      <Section title="Khu Vực Phục Vụ Giao Gạo Tận Tự Viện & Chùa Chiền" muted>
        <DeliveryAreas />
      </Section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Câu Hỏi Thường Gặp Về Gạo Cúng Dường Chùa" />

      {/* CTA Box */}
      <CTABox currentPath="/gao-cung-duong-chua/" />
    </>
  );
}
