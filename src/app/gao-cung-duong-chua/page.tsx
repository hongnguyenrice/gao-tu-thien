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

const CANONICAL = `${SITE_URL}/gao-cung-duong-chua/`;

export const metadata: Metadata = {
  title: 'Gạo Cúng Dường Chùa & Tự Viện – Gạo Thơm Thuần Khiết | Vựa Gạo Sóc Trăng',
  description:
    'Cung cấp gạo cúng dường Tam Bảo, tự viện, tịnh xá dịp lễ Vu Lan, Phật Đản, rằm lớn. Gạo ST25 Sóc Trăng, Jasmine 85 dẻo thơm thuần khiết. Đóng bao 5kg, 10kg, 25kg trang nghiêm, giao tận chùa.',
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: 'Gạo Cúng Dường Chùa & Tự Viện – Gạo Thơm Thuần Khiết Dâng Tam Bảo',
    description:
      'Gạo ST25 Sóc Trăng, Jasmine hảo hạng dâng cúng chư Tăng Ni, bổn tự. Xe tải chở giao tận sảnh chùa, hỗ trợ khuân vác chu đáo.',
    url: CANONICAL,
    type: 'article',
  },
};

const templeProducts = getProducts(['gao-st25-thuong-hang', 'gao-thom-jasmine', 'gao-lai-sua']);

const faqs = [
  {
    q: 'Cúng dường gạo cho chùa, tịnh xá nên chọn loại gạo nào là trang nghiêm nhất?',
    a: 'Khi dâng cúng Tam Bảo và Tăng đoàn, hạt gạo được xem là hạt ngọc thực nuôi dưỡng thân mạng. Quý Phật tử thường chọn các dòng gạo phẩm chất cao nhất như ST25 Sóc Trăng Thượng Hạng (hạt dài trong bóng, thơm mùi lá dứa tự nhiên, cơm dẻo mềm hảo hạng) hoặc Gạo Thơm Jasmine 85 thuần chủng. Hạt gạo trắng ngọc, không pha trộn thể hiện trọn vẹn tâm thành kính và trang nghiêm.',
  },
  {
    q: 'Kho gạo có hỗ trợ giao tận nơi và bốc vác vào kho tịnh tài của chùa không?',
    a: 'Có. Đội xe tải và nhân viên giao hàng của chúng tôi được dặn dò chu đáo về phong cách phục vụ tại chốn tự viện trang nghiêm: đi nhẹ, nói khẽ, lễ phép và hỗ trợ bốc xếp toàn bộ số gạo vào tận kho lương thực hoặc sảnh chùa theo chỉ dẫn của Quý Thầy/Quý Sư cô.',
  },
  {
    q: 'Phật tử ở xa hoặc kiều bào ở nước ngoài muốn cúng dường thì kho hỗ trợ ra sao?',
    a: 'Chúng tôi có dịch vụ hỗ trợ kiều bào và Phật tử ở xa: chuẩn bị đúng loại gạo, đóng bao trang nghiêm, vận chuyển đến đúng ngôi chùa Quý vị chỉ định, quay video và chụp hình lúc giao nhận gạo có mặt đại diện bổn tự và gửi biên nhận xác thực qua Zalo.',
  },
  {
    q: 'Dịp đại lễ Vu Lan, Phật Đản hoặc ngày Rằm có bị tăng giá gạo không?',
    a: 'Vựa Gạo Sóc Trăng cam kết giữ giá bình ổn xuất xưởng từ nhà máy Đồng Tháp quanh năm, tuyệt đối không tăng giá hay găm hàng vào các dịp cao điểm lễ hội Phật giáo nhằm chung tay gieo duyên lành cùng Quý Phật tử.',
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
              Cúng dường lương thực cho chư Tăng Ni, tự viện, tịnh xá và mái ấm trong chùa vào các dịp lễ Vu Lan Báo Hiếu,
              Đại lễ Phật Đản, hay ngày Sóc Vọng (mùng 1, ngày rằm) là truyền thống tốt đẹp tích lũy công đức và gieo duyên lành.
            </p>
            <p>
              <strong>Vựa Gạo Sóc Trăng</strong> trân trọng đồng hành cùng Quý Phật tử, Quý đạo tràng: cung cấp các dòng gạo
              thơm đặc sản thuần khiết, hạt mới xát bóng đẹp, đóng bao trang nhã và giao hàng kính cẩn vào tận chùa.
            </p>
          </>
        }
      />

      {/* Ý nghĩa và tiêu chuẩn cúng dường */}
      <Section title="Tiêu Chuẩn Gạo Cúng Dường Trang Nghiêm Tại Vựa Gạo Sóc Trăng">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-gray-200">
            <h3 className="font-bold text-gray-900 text-base mb-2">Hạt ngọc thuần khiết</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              100% gạo mùa mới, xay xát sạch cám, hạt thon dài đều đặn, không lẫn tấm cám vụn, không chất bảo quản,
              không tẩm ướp hương thơm nhân tạo.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-200">
            <h3 className="font-bold text-gray-900 text-base mb-2">Đóng gói trang trọng</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Có sẵn bao bì 5kg hút chân không cao cấp (giữ hương thơm lâu dài) hoặc bao 10kg, 25kg may chỉ chắc chắn,
              bao bì sạch sẽ, ngay ngắn trước khi dâng lên Tam Bảo.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-200">
            <h3 className="font-bold text-gray-900 text-base mb-2">Giao nhận kính cẩn</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Xe giao hàng đúng giờ hành lễ hoặc giờ tiếp nhận tịnh vật của tự viện. Nhân viên hỗ trợ khuân vác
              sắp xếp cẩn thận vào tận kho chùa.
            </p>
          </div>
        </div>
      </Section>

      {/* Bảng giá gạo cúng dường */}
      <Section id="bang-gia-cung-duong" title="Các Dòng Gạo Thơm Thượng Phẩm Dâng Cúng Tam Bảo" muted>
        <p className="text-sm text-gray-600 mb-4">
          Bảng giá sỉ ưu đãi dâng chùa. Bấm để xem chi tiết từng bậc số lượng hoặc nhận bảng dự toán riêng.{' '}
          <Link href={QUOTE_FORM_URL} className="text-emerald-700 font-semibold underline">
            Yêu cầu báo giá cúng dường
          </Link>
        </p>
        <PriceTable products={templeProducts} />
      </Section>

      {/* Dịch vụ cho kiều bào & Phật tử ở xa */}
      <Section title="Dịch Vụ Cúng Dường Thay Mặt Dành Cho Kiều Bào & Phật Tử Ở Xa">
        <div className="bg-amber-50 p-6 sm:p-8 rounded-3xl border border-amber-200 space-y-4">
          <h3 className="text-xl font-bold text-gray-900">
            Kính cẩn trao tặng – Báo cáo hình ảnh & video minh bạch
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Nếu Quý Phật tử, Quý nhà hảo tâm đang sinh sống tại nước ngoài hoặc ở các tỉnh xa không thể trực tiếp đến chùa,
            Vựa Gạo Sóc Trăng sẵn sàng nhận ủy thác thực hiện trọn gói chuyến cúng dường:
          </p>
          <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
            <li>Ghi rõ tên họ, pháp danh của gia đình trên từng kiện hàng dâng Tam Bảo.</li>
            <li>Giao đúng hẹn vào tự viện, chùa, tịnh xá theo danh sách Quý vị yêu cầu.</li>
            <li>Quay video, chụp hình cân ký và biên bản tiếp nhận tịnh vật có đóng mộc hoặc chữ ký của Ban hộ tự/Đại đức trụ trì.</li>
            <li>Gửi toàn bộ tư liệu xác thực qua Zalo ngay sau khi hoàn thành buổi lễ trao nhận.</li>
          </ul>
        </div>
      </Section>

      {/* Quy trình đặt hàng */}
      <Section title="Quy Trình Đặt Gạo Cúng Dường Tự Viện" muted>
        <OrderSteps />
      </Section>

      {/* Hệ thống kho & khu vực */}
      <Section title="Phục Vụ Các Tự Viện Tại TP.HCM, Bình Dương, Tây Ninh & Miền Tây">
        <DeliveryAreas />
      </Section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Câu Hỏi Khi Cúng Dường Gạo Cho Chùa" />

      {/* CTA Box */}
      <CTABox currentPath="/gao-cung-duong-chua/" />
    </>
  );
}
