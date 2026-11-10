import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { QUOTE_FORM_URL, SITE_URL } from '@/data/site';
import {
  CTABox,
  DeliveryAreas,
  FAQSection,
  OrderSteps,
  PageHeader,
  Section,
} from '@/components/content';
import { PackagingSection } from '@/components/PackagingSection';

const CANONICAL = `${SITE_URL}/quy-cach-dong-bao-va-giao-hang/`;

export const metadata: Metadata = {
  title: 'Quy Cách Đóng Bao & Giao Hàng Gạo Từ Thiện',
  description:
    'Chi tiết quy cách đóng bao 5kg, 10kg, 25kg, 50kg và dịch vụ vận chuyển gạo từ thiện tận nơi của Vựa Gạo Sóc Trăng. Xe tải giao tận chùa, mái ấm tại TP.HCM, Bình Dương, Tây Ninh; hỗ trợ bốc xếp.',
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: 'Quy Cách Đóng Bao & Giao Hàng Gạo Từ Thiện | Vựa Gạo Sóc Trăng',
    description:
      'Hỗ trợ đóng bao 5kg, 10kg in chữ Từ Thiện miễn phí. Đội xe tải giao hàng tận sảnh chùa, bếp ăn, hỗ trợ khuân vác chu đáo.',
    url: CANONICAL,
    type: 'article',
  },
};

const faqs = [
  {
    q: 'Chi phí đóng túi nhỏ 5kg và 10kg có bị tính thêm tiền không?',
    a: 'Hoàn toàn không. Chi phí bao bì 5kg, 10kg in sẵn chữ "Gạo Từ Thiện / Gạo Nghĩa Tình", công nhân chia bao và may miệng túi bằng máy chắc chắn đều được Vựa Gạo Sóc Trăng hỗ trợ miễn phí 100% cho Quý đoàn.',
  },
  {
    q: 'Bao gạo có được may miệng chắc chắn để chở đường xa không?',
    a: 'Tất cả các bao gạo từ 5kg, 10kg đến 25kg, 50kg đều được may chỉ công nghiệp hai đường chỉ chắc chắn. Quý đoàn yên tâm vận chuyển đường dài hoặc bốc xếp nhiều lần mà không lo bục rách hay rơi vãi hạt gạo.',
  },
  {
    q: 'Xe tải của kho có hỗ trợ khiêng gạo vào trong kho/sảnh chùa không?',
    a: 'Có. Tài xế và nhân viên phụ xe đi cùng luôn hỗ trợ bốc vác, khuân xếp toàn bộ các bao gạo vào tận vị trí Quý đoàn yêu cầu (sảnh chùa, kho lương thực, bếp ăn, nhà văn hóa thôn...), không để quý mạnh thường quân hay các sư thầy phải vất vả.',
  },
  {
    q: 'Thời gian đặt hàng trước bao lâu để kho chuẩn bị đóng bao và giao đúng hẹn?',
    a: 'Với các đơn từ 500kg đến 2 tấn, Quý đoàn nên liên hệ trước 1 – 2 ngày để kho đóng bao mới và sắp xếp lộ trình xe tải phù hợp nhất. Với các đơn hàng từ 5 tấn trở lên hoặc các chuyến cứu trợ bão lũ gấp, vui lòng gọi trực tiếp hotline để xưởng xay xát và điều xe tải lớn ngay.',
  },
];

export default function QuyCachDongBaoPage() {
  return (
    <>
      <PageHeader
        title="Quy Cách Đóng Bao & Dịch Vụ Vận Chuyển Gạo Từ Thiện Tận Nơi"
        path="/quy-cach-dong-bao-va-giao-hang/"
        crumb="Đóng bao & giao hàng"
        intro={
          <>
            <p>
              Để một buổi trao quà thiện nguyện diễn ra trang nghiêm, thuận lợi và nhanh chóng, khâu chuẩn bị bao bì
              đúng định lượng và khâu vận chuyển hàng đến đúng giờ là yếu tố then chốt.
            </p>
            <p>
              <strong>Vựa Gạo Sóc Trăng</strong> trang bị hệ thống cân điện tử chính xác, máy may bao công nghiệp và
              đội xe tải chuyên dụng 4 chi nhánh: cam kết đúng số ký, bao bì sạch đẹp và giao hàng tận tâm vào tận kho.
            </p>
          </>
        }
      />

      {/* Các Quy cách đóng bao */}
      <Section title="Các Quy Cách Đóng Bao Gạo Từ Thiện Tiêu Chuẩn">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Bao 5kg */}
          <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-3">
            <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md uppercase">
              Bao 5kg – Phát Quà Tận Tay
            </span>
            <h3 className="text-xl font-bold text-gray-900">Túi Nhỏ 5kg</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Bao bì dệt sạch sẽ hoặc túi quai xách in chữ "Gạo Từ Thiện / Gạo Nghĩa Tình". Kích thước gọn nhẹ, người già và phụ nữ dễ dàng mang xách về nhà.
            </p>
            <div className="text-xs font-semibold text-emerald-800 border-t border-gray-100 pt-2">
              Phù hợp: Phát quà hộ nghèo, người già neo đơn, trẻ em.
            </div>
          </div>

          {/* Bao 10kg */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-200 shadow-sm space-y-3">
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md uppercase">
              Bao 10kg – Phổ Biến Nhất
            </span>
            <h3 className="text-xl font-bold text-gray-900">Bao Dệt 10kg</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Bao dệt PP chất lượng cao, chống ẩm tốt, may miệng chắc chắn bằng chỉ may công nghiệp. Đủ lương thực cho một gia đình 3 - 4 người ăn trong 2 tuần.
            </p>
            <div className="text-xs font-semibold text-emerald-800 border-t border-gray-100 pt-2">
              Phù hợp: Quà tặng công đoàn công ty, cứu trợ bão lũ.
            </div>
          </div>

          {/* Bao 25kg & 50kg */}
          <div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-sm space-y-3">
            <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2.5 py-1 rounded-md uppercase">
              Bao 25kg / 50kg – Tiết Kiệm
            </span>
            <h3 className="text-xl font-bold text-gray-900">Bao Lớn Bếp Ăn</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Quy cách truyền thống cho các bếp cơm từ thiện 0 đồng, bếp chùa và mái ấm. Tiết kiệm tối đa chi phí bao bì, dễ dàng trút vào nồi nấu lớn.
            </p>
            <div className="text-xs font-semibold text-blue-800 border-t border-gray-100 pt-2">
              Phù hợp: Quán cơm 0 đồng, nồi cháo bệnh viện, viện dưỡng lão.
            </div>
          </div>

        </div>
      </Section>

      {/* Dịch vụ giao hàng bằng xe tải */}
      <Section title="Dịch Vụ Vận Chuyển Xe Tải & Hỗ Trợ Bốc Xếp Vào Kho" muted>
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 space-y-4">
          <h3 className="text-xl font-bold text-gray-900">
            Hệ thống xe tải linh hoạt – Phục vụ tận tâm từng chuyến hàng
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Chúng tôi hiểu rằng việc vận chuyển và bốc vác hàng tấn gạo là công việc nặng nhọc. Vì vậy, mọi chuyến hàng
            gạo từ thiện của Vựa Gạo Sóc Trăng đều đi kèm các cam kết phục vụ chu đáo:
          </p>
          <div className="grid md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-gray-900 text-sm mb-1">Xe tải đa tải trọng</h4>
              <p className="text-xs text-gray-600">
                Đội xe từ 1 tấn, 2.5 tấn, 5 tấn đến 10 tấn, dễ dàng luồn lách vào các tuyến đường nội thành, ngõ chùa
                hoặc đi đường liên tỉnh.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-gray-900 text-sm mb-1">Hỗ trợ bốc vác 100%</h4>
              <p className="text-xs text-gray-600">
                Tài xế và phụ xe chịu trách nhiệm khuân vác, sắp xếp gạo gọn gàng vào tận kho hoặc sảnh phát quà theo yêu cầu.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-gray-900 text-sm mb-1">Đúng hẹn từng giờ</h4>
              <p className="text-xs text-gray-600">
                Giao đúng khung giờ trước khi buổi lễ hoặc ca phát quà bắt đầu, không để bà con và tình nguyện viên phải chờ đợi.
              </p>
            </div>
          </div>

          {/* Contextual links */}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-3 text-xs sm:text-sm">
            <span className="text-gray-500 font-medium">Tham khảo thêm:</span>
            <Link href="/bao-gia-gao-tu-thien/" className="text-emerald-700 hover:underline font-semibold">
              Bảng báo giá gạo từ thiện theo nấc sản lượng &rarr;
            </Link>
            <Link href="/gao-phat-qua-tu-thien/" className="text-emerald-700 hover:underline font-semibold">
              Kinh nghiệm chọn gạo phát quà hộ nghèo &rarr;
            </Link>
            <Link href="/gao-cung-duong-chua/" className="text-emerald-700 hover:underline font-semibold">
              Gạo ST25 cúng dường chùa &rarr;
            </Link>
            <Link href="/chon-gao-cho-bep-an-tu-thien/" className="text-emerald-700 hover:underline font-semibold">
              Gạo lợi cơm cho quán cơm 0 đồng &rarr;
            </Link>
          </div>
        </div>
      </Section>

      {/* Danh sách 16 mẫu bao bì thực tế */}
      <PackagingSection />

      {/* Quy trình đặt hàng */}
      <Section title="Quy Trình Đặt Đóng Bao & Giao Hàng">
        <OrderSteps />
      </Section>

      {/* Mạng lưới chi nhánh & kho */}
      <Section title="Hệ Thống 4 Chi Nhánh Kho Điều Phối Xe Giao Nhanh" muted>
        <DeliveryAreas />
      </Section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Câu Hỏi Về Đóng Bao & Vận Chuyển Gạo Từ Thiện" />

      {/* CTA Box */}
      <CTABox currentPath="/quy-cach-dong-bao-va-giao-hang/" />
    </>
  );
}
