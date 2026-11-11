import React from 'react';
import Link from 'next/link';
import { BRAND_INFO, RiceProduct } from '@/data/mockData';
import {
  CONTACT_LABEL,
  DELIVERY,
  DELIVERY_AREAS,
  ORDER_STEPS,
  PAGES,
  PHONE_DISPLAY,
  PHONE_TEL,
  PRICE_UPDATED,
  QUOTE_FORM_URL,
  QUOTE_PATH,
  REAL_PHOTOS,
  ZALO_URL,
  GOOGLE_MAPS_PLACE_URL,
  vnd,
} from '@/data/site';
import { breadcrumbSchema, faqSchema, productListSchema } from '@/lib/schema';

/* ---------- JSON-LD ---------- */
export const JsonLd: React.FC<{ data: object }> = ({ data }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
);

/* ---------- Đầu trang con: breadcrumb + H1 duy nhất ---------- */
export const PageHeader: React.FC<{ title: string; path: string; crumb: string; intro: React.ReactNode }> = ({
  title,
  path,
  crumb,
  intro,
}) => {
  const items = [
    { name: 'Trang chủ', path: '/' },
    { name: crumb, path },
  ];
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white border-b border-amber-100">
      <JsonLd data={breadcrumbSchema(items)} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-4">
          <Link href="/" className="hover:text-emerald-700">Trang chủ</Link>
          <span className="mx-1.5">/</span>
          <span className="text-gray-800 font-semibold">{crumb}</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">{title}</h1>
        <div className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed space-y-3">{intro}</div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="btn-zalo">
            Nhận báo giá qua Zalo
          </a>
          <a href={`tel:${PHONE_TEL}`} className="btn-call">
            Gọi tư vấn {PHONE_DISPLAY}
          </a>
          {path !== QUOTE_PATH && (
            <Link href={QUOTE_FORM_URL} className="btn-outline">
              Điền form nhận báo giá
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

/* ---------- Khối nội dung ---------- */
export const Section: React.FC<{ id?: string; title: string; children: React.ReactNode; muted?: boolean }> = ({
  id,
  title,
  children,
  muted,
}) => (
  <section id={id} className={`py-10 ${muted ? 'bg-gray-50/70' : ''}`}>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">{title}</h2>
      <div className="prose-vn">{children}</div>
    </div>
  </section>
);

/* ---------- Bảng giá + schema Product/Offer cho đúng các loại gạo đang hiển thị ---------- */
export const PriceTable: React.FC<{ products: RiceProduct[]; anchors?: boolean }> = ({ products, anchors }) => (
  <div>
    <JsonLd data={productListSchema(products)} />
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
      <table className="w-full text-sm">
        <thead className="bg-amber-50 text-amber-950">
          <tr>
            <th className="text-left p-3 font-bold">Loại gạo</th>
            <th className="text-right p-3 font-bold whitespace-nowrap">Dưới 300kg</th>
            {products[0]?.tiers.map((t) => (
              <th key={t.minKg} className="text-right p-3 font-bold whitespace-nowrap">
                Từ {t.minKg.toLocaleString('vi-VN')}kg
              </th>
            ))}
            <th className="text-left p-3 font-bold">Quy cách bao</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {products.map((p) => (
            <tr key={p.id} id={anchors ? p.id : undefined} className="align-top scroll-mt-28">
              <td className="p-3">
                <div className="font-bold text-gray-900">{p.name}</div>
                <div className="text-xs text-gray-500 mt-0.5">{p.characteristics.suitability}</div>
              </td>
              <td className="p-3 text-right whitespace-nowrap">{vnd(p.pricePerKg)}/kg</td>
              {p.tiers.map((t) => (
                <td key={t.minKg} className="p-3 text-right whitespace-nowrap font-semibold text-emerald-800">
                  {vnd(t.pricePerKg)}/kg
                </td>
              ))}
              <td className="p-3 text-xs text-gray-700">{p.packaging.join(' · ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="text-xs text-gray-500 mt-2">
      Giá tham khảo theo kg, cập nhật {PRICE_UPDATED}. Giá chốt, phí giao và VAT được xác nhận trong báo giá.{' '}
      <Link href={QUOTE_FORM_URL} className="text-emerald-700 font-semibold underline">Nhận báo giá chính xác</Link>
    </p>
  </div>
);

/* ---------- Quy trình đặt hàng ---------- */
export const OrderSteps: React.FC = () => (
  <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 list-none p-0 m-0">
    {ORDER_STEPS.map((s, i) => (
      <li key={s.title} className="bg-white rounded-2xl border border-gray-200 p-4">
        <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-black flex items-center justify-center mb-2">
          {i + 1}
        </div>
        <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
        <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
      </li>
    ))}
  </ol>
);

/* ---------- Khu vực & thời gian giao ---------- */
export const DeliveryAreas: React.FC = () => (
  <div className="space-y-4">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {DELIVERY_AREAS.map((d) => (
        <div key={d.from} className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-emerald-700 uppercase">{d.area}</div>
            <h3 className="font-bold text-gray-900 text-sm mt-1">{d.from}</h3>
            <p className="text-xs text-gray-600 mt-1">{d.address}</p>
            {d.roleNote && (
              <p className="text-xs text-amber-800 bg-amber-50 rounded-md p-1.5 mt-2 border border-amber-200/60 font-medium">
                {d.roleNote}
              </p>
            )}
          </div>
          <div className="mt-3 pt-2 border-t border-gray-100">
            {d.isMain ? (
              <a
                href={GOOGLE_MAPS_PLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-bold text-emerald-700 hover:underline"
              >
                Xem Google Maps (Lái Thiêu) →
              </a>
            ) : (
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-semibold text-blue-700 hover:underline"
              >
                Nhắn Zalo điều xe giao tận nơi →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
    <ul className="text-sm text-gray-700 space-y-1.5">
      <li><strong>Thời gian giao:</strong> {DELIVERY.leadTime}</li>
      <li><strong>Phí giao:</strong> {DELIVERY.fee}</li>
      <li><strong>Cần gấp:</strong> {DELIVERY.urgent}</li>
      <li><strong>Liên hệ:</strong> {CONTACT_LABEL}</li>
    </ul>
  </div>
);

/* ---------- FAQ: nội dung hiển thị và schema FAQPage dùng CHUNG một nguồn ---------- */
export const FAQSection: React.FC<{ faqs: { q: string; a: string }[]; title?: string }> = ({
  faqs,
  title = 'Câu hỏi thường gặp',
}) => (
  <section id="cau-hoi-thuong-gap" className="py-10">
    <JsonLd data={faqSchema(faqs)} />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-5">{title}</h2>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <details key={f.q} className="group bg-white border border-gray-200 rounded-2xl p-4" open={i === 0}>
            <summary className="font-bold text-gray-900 cursor-pointer list-none flex justify-between gap-3">
              <h3 className="text-sm sm:text-base">{f.q}</h3>
              <span className="text-emerald-700 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
            </summary>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- CTA cuối trang + liên kết nội bộ ---------- */
export const CTABox: React.FC<{ currentPath: string }> = ({ currentPath }) => (
  <section className="py-12 sm:py-16">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-gradient-to-br from-[#063323] via-[#094330] to-[#04281c] text-white p-7 sm:p-10 border-2 border-emerald-400/40 shadow-2xl relative overflow-hidden">
        <div className="inline-block bg-white/15 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          🌾 Phục Vụ Tận Tâm
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Nhận Báo Giá Gạo Từ Thiện Tận Gốc</h2>
        <p className="text-emerald-100 text-sm sm:text-base mt-2.5 font-normal max-w-2xl leading-relaxed">
          Gửi loại gạo, số lượng, địa điểm và ngày cần hàng — kho báo giá theo đúng chương trình của Quý đoàn.
          {' '}{CONTACT_LABEL}.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="btn-zalo">
            Nhận báo giá qua Zalo
          </a>
          <a href={`tel:${PHONE_TEL}`} className="btn-call">
            Gọi tư vấn {PHONE_DISPLAY}
          </a>
          {currentPath !== QUOTE_PATH && (
            <Link href={QUOTE_PATH} className="btn-gold">
              Xem trang báo giá gạo từ thiện
            </Link>
          )}
        </div>
      </div>
      <nav aria-label="Trang liên quan" className="mt-8">
        <h2 className="text-xs font-black text-stone-500 uppercase tracking-wider mb-3">Chuyên Mục Quan Tâm Khác:</h2>
        <ul className="flex flex-wrap gap-2.5">
          {PAGES.filter((p) => p.path !== currentPath && p.path !== '/').map((p) => (
            <li key={p.path}>
              <Link
                href={p.path}
                className="inline-block text-xs sm:text-sm bg-white hover:bg-amber-50 border border-stone-200 hover:border-amber-300 text-stone-800 hover:text-amber-950 font-bold px-3.5 py-2 rounded-xl shadow-2xs hover:shadow-xs transition"
              >
                {p.path === QUOTE_PATH ? 'Báo giá gạo từ thiện' : p.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </section>
);

/* ---------- Ảnh thực tế (chỉ hiện khi đã có ảnh thật) ---------- */
export const RealPhotos: React.FC = () =>
  REAL_PHOTOS.length === 0 ? null : (
    <Section title="Hình ảnh thực tế tại kho" muted>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 not-prose">
        {REAL_PHOTOS.map((p) => (
          <figure key={p.src} className="bg-white rounded-xl overflow-hidden border border-gray-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.alt} loading="lazy" className="w-full aspect-[4/3] object-cover" />
            <figcaption className="text-xs text-gray-600 p-2">{p.caption}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );

export { BRAND_INFO };
