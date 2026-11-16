import type { Metadata } from 'next';
import React from 'react';
import { BRAND_INFO } from '@/data/mockData';
import { PHONE_DISPLAY, SITE_URL } from '@/data/site';
import { CTABox, PageHeader, Section } from '@/components/content';

const CANONICAL = `${SITE_URL}/dieu-khoan-va-chinh-sach/`;

export const metadata: Metadata = {
  title: 'Điều Khoản & Chính Sách Giao Nhận, Đổi Trả | Vựa Gạo Sóc Trăng',
  description:
    'Chính sách giao hàng, kiểm tra cân ký, đổi trả gạo 100%, xuất hóa đơn VAT 5% và bảo mật thông tin đoàn thiện nguyện tại Vựa Gạo Sóc Trăng.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Điều Khoản & Chính Sách | Vựa Gạo Sóc Trăng',
    description: 'Quy định giao nhận, kiểm hàng, đổi trả và bảo mật thông tin tại Vựa Gạo Sóc Trăng.',
    url: CANONICAL,
    type: 'website',
    images: [{ url: `${SITE_URL}/og-gao-tu-thien.jpg`, width: 1200, height: 630, alt: 'Điều khoản và chính sách Vựa Gạo Sóc Trăng' }],
  },
};

export default function DieuKhoanChinhSachPage() {
  return (
    <>
      <PageHeader
        title="Điều Khoản & Chính Sách"
        path="/dieu-khoan-va-chinh-sach/"
        crumb="Điều khoản & Chính sách"
        intro={
          <p>
            Các quy định minh bạch về kiểm tra chất lượng gạo, giao nhận xe tải, chính sách đổi trả, xuất hóa đơn VAT và
            bảo mật thông tin của Quý đoàn tại <strong>{BRAND_INFO.name}</strong>.
          </p>
        }
      />

      <Section title="1. Chính Sách Kiểm Hàng & Đổi Trả 100%">
        <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
          <li>Quý đoàn được quyền mở bao kiểm tra hạt gạo thực tế và cân thử trọng lượng trước khi ký nhận và thanh toán.</li>
          <li>Cam kết <strong>đổi trả hoặc hoàn tiền 100% ngay lập tức</strong> nếu gạo giao không đúng chủng loại đã chốt, có dấu hiệu ẩm mốc, mối mọt hoặc thiếu cân.</li>
        </ul>
      </Section>

      <Section title="2. Chính Sách Đóng Bao & Vận Chuyển" muted>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
          <li><strong>Đóng bao nhỏ 5kg – 10kg miễn phí</strong>: Kho tài trợ bao bì và công may miệng cho đơn hàng thiện nguyện.</li>
          <li><strong>Giao hàng bằng xe tải</strong>: Giao đúng giờ tới cổng chùa, mái ấm, bếp ăn hoặc điểm tập kết; tài xế hỗ trợ bốc xếp gọn gàng vào kho.</li>
          <li>Cước vận chuyển được thông báo rõ ràng trước khi chốt đơn dựa trên khối lượng và địa điểm nhận.</li>
        </ul>
      </Section>

      <Section title="3. Chính Sách Hóa Đơn & Thanh Toán">
        <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
          <li>Hỗ trợ xuất <strong>hóa đơn điện tử VAT 5%</strong>, hợp đồng kinh tế và giấy chứng nhận ATVSTP theo yêu cầu của doanh nghiệp, tổ chức.</li>
          <li>Thanh toán linh hoạt bằng chuyển khoản ngân hàng hoặc tiền mặt khi nhận đủ hàng.</li>
        </ul>
      </Section>

      <Section title="4. Chính Sách Bảo Mật Thông Tin" muted>
        <p className="text-gray-700 leading-relaxed">
          Thông tin liên hệ (tên người đặt, số điện thoại, tên đoàn/chùa, địa chỉ giao gạo) chỉ được dùng cho mục đích báo
          giá, điều phối xe tải giao hàng và xuất hóa đơn theo yêu cầu của Quý khách. Chúng tôi không chia sẻ hoặc bán dữ liệu
          cho bên thứ ba. Mọi thắc mắc vui lòng gọi <strong>{PHONE_DISPLAY}</strong>.
        </p>
      </Section>

      <CTABox currentPath="/dieu-khoan-va-chinh-sach/" />
    </>
  );
}
