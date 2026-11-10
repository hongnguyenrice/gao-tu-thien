import { BRAND_INFO, RICE_PRODUCTS, RiceProduct } from '@/data/mockData';
import { FACEBOOK_PAGE_URL, PHONE_E164, QUOTE_PATH, SITE_NAME, SITE_URL } from '@/data/site';

export const ORG_ID = `${SITE_URL}/#organization`;
const IMAGE = `${SITE_URL}/he-thong-kho-vua-gao-soc-trang.jpg`;

const allPrices = RICE_PRODUCTS.flatMap((p) => [p.pricePerKg, ...p.tiers.map((t) => t.pricePerKg)]);
const PRICE_RANGE = `${Math.min(...allPrices).toLocaleString('vi-VN')}đ - ${Math.max(...allPrices).toLocaleString('vi-VN')}đ/kg`;

const regionOf = (address: string) => {
  if (address.includes('TP.HCM')) return 'TP. Hồ Chí Minh';
  if (address.includes('Tây Ninh')) return 'Tây Ninh';
  if (address.includes('Đồng Tháp')) return 'Đồng Tháp';
  return undefined;
};

/** Địa chỉ giữ NGUYÊN chuỗi đang hiển thị trên site (streetAddress), chỉ bổ sung tỉnh/thành và quốc gia. */
const postalAddress = (address: string) => ({
  '@type': 'PostalAddress',
  streetAddress: address,
  addressRegion: regionOf(address),
  addressCountry: 'VN',
});

export function organizationSchema() {
  const branches = BRAND_INFO.branches.map((b) => ({
    '@type': 'WholesaleStore',
    '@id': `${SITE_URL}/#${b.id}`,
    name: `${BRAND_INFO.name} – ${b.name}`,
    address: postalAddress(b.address),
    areaServed: b.area,
    telephone: PHONE_E164,
    priceRange: PRICE_RANGE,
    image: IMAGE,
    url: `${SITE_URL}/`,
    parentOrganization: { '@id': ORG_ID },
  }));
  const factory = {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#${BRAND_INFO.factory.id}`,
    name: `${BRAND_INFO.name} – ${BRAND_INFO.factory.name}`,
    address: postalAddress(BRAND_INFO.factory.address),
    telephone: PHONE_E164,
    image: IMAGE,
    parentOrganization: { '@id': ORG_ID },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        inLanguage: 'vi-VN',
        publisher: { '@id': ORG_ID },
      },
      {
        '@type': 'WholesaleStore',
        '@id': ORG_ID,
        name: BRAND_INFO.name,
        alternateName: 'Vựa Gạo Sóc Trăng – Gạo Từ Thiện Giá Sỉ',
        slogan: BRAND_INFO.slogan,
        description:
          'Cung cấp gạo từ thiện giá sỉ cho chùa, bếp ăn từ thiện, mái ấm, đoàn thiện nguyện và doanh nghiệp: đóng bao 5kg-10kg, giao tận nơi, xuất hóa đơn VAT.',
        url: `${SITE_URL}/`,
        sameAs: [FACEBOOK_PAGE_URL],
        image: IMAGE,
        telephone: PHONE_E164,
        priceRange: PRICE_RANGE,
        currenciesAccepted: 'VND',
        address: postalAddress(BRAND_INFO.branches[0].address),
        areaServed: [...BRAND_INFO.branches.map((b) => b.area), BRAND_INFO.factory.area],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: PHONE_E164,
          contactType: 'sales',
          description: 'Hotline và Zalo nhận báo giá gạo từ thiện (cùng một số)',
          availableLanguage: 'vi',
          areaServed: 'VN',
        },
        department: [...branches, factory],
      },
    ],
  };
}

/** Product + Offer cho từng loại gạo có giá, mỗi bậc số lượng là một Offer riêng. */
export function productSchema(p: RiceProduct) {
  const url = `${SITE_URL}${QUOTE_PATH}#${p.id}`;
  const levels = [
    { label: 'Dưới 100kg', minKg: 1, maxKg: p.tiers[0] ? p.tiers[0].minKg - 1 : undefined, price: p.pricePerKg },
    ...p.tiers.map((t, i) => ({
      label: t.label,
      minKg: t.minKg,
      maxKg: p.tiers[i + 1] ? p.tiers[i + 1].minKg - 1 : undefined,
      price: t.pricePerKg,
    })),
  ];
  const offers = levels.map((l) => ({
    '@type': 'Offer',
    name: `${p.name} – ${l.label}`,
    url,
    price: l.price,
    priceCurrency: 'VND',
    availability: 'https://schema.org/InStock',
    seller: { '@id': ORG_ID },
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: l.price,
      priceCurrency: 'VND',
      unitCode: 'KGM',
      referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'KGM' },
    },
    eligibleQuantity: { '@type': 'QuantitativeValue', minValue: l.minKg, maxValue: l.maxKg, unitCode: 'KGM' },
  }));
  return {
    '@type': 'Product',
    '@id': url,
    name: p.name,
    description: p.description,
    category: p.category,
    brand: { '@type': 'Brand', name: BRAND_INFO.name },
    url,
    additionalProperty: [{ '@type': 'PropertyValue', name: 'Quy cách đóng bao', value: p.packaging.join(', ') }],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'VND',
      lowPrice: Math.min(...levels.map((l) => l.price)),
      highPrice: Math.max(...levels.map((l) => l.price)),
      offerCount: offers.length,
      offers,
    },
  };
}

export function productListSchema(products: RiceProduct[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Bảng giá gạo từ thiện',
    itemListElement: products.map((p, i) => ({ '@type': 'ListItem', position: i + 1, item: productSchema(p) })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
