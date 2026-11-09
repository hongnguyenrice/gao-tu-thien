import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gạo Từ Thiện Giá Sỉ Tận Gốc | Vựa Gạo Sóc Trăng - Đóng Bao 5kg 10kg Miễn Phí",
  description: "Tổng kho chuyên cung cấp gạo từ thiện giá sỉ xuất xưởng tại TP.HCM, Bình Dương, Tây Ninh & Đồng Tháp. Gạo 504 nở xốp, Gạo Lài Sữa dẻo thơm, ST25. Hỗ trợ đóng bao 5kg-10kg miễn phí, giao tận chùa/bếp ăn, xuất hóa đơn VAT.",
  keywords: [
    "gạo từ thiện",
    "gạo từ thiện giá sỉ",
    "kho gạo từ thiện tphcm",
    "đại lý gạo từ thiện bình dương",
    "gạo từ thiện đóng bao 5kg",
    "gạo từ thiện bao 10kg",
    "gạo 504 làm từ thiện",
    "gạo lài sữa từ thiện",
    "gạo st25 từ thiện",
    "báo giá gạo làm từ thiện",
    "kinh nghiệm mua gạo từ thiện",
    "gạo từ thiện xuất hóa đơn vat"
  ],
  openGraph: {
    title: "Gạo Từ Thiện Giá Sỉ Tận Gốc - Vựa Gạo Sóc Trăng",
    description: "Nhà máy Đồng Tháp & 4 chi nhánh TP.HCM, Bình Dương, Tây Ninh. Đóng bao 5kg-10kg miễn phí, giao xe tải tận nơi, xuất hóa đơn VAT.",
    type: "website",
    locale: "vi_VN",
    siteName: "Vựa Gạo Sóc Trăng - Gạo Từ Thiện",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "WholesaleStore",
  "name": "Vựa Gạo Sóc Trăng - Kho Cung Cấp Gạo Từ Thiện Giá Sỉ",
  "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80",
  "telephone": "0762234135",
  "priceRange": "12.000đ - 25.000đ/kg",
  "paymentAccepted": "Tiền mặt, Chuyển khoản ngân hàng",
  "currenciesAccepted": "VND",
  "description": "Kho gạo sỉ chuyên cung cấp gạo từ thiện cho Chùa, Mái ấm, Bếp cơm 0 đồng, Đoàn thiện nguyện và Doanh nghiệp. Miễn phí đóng gói bao 5kg-10kg, giao tận nơi, xuất hóa đơn VAT.",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Số 11, Lô 2, Đường Lái Thiêu 9, P. Lái Thiêu",
      "addressLocality": "TP. Thuận An",
      "addressRegion": "Bình Dương",
      "addressCountry": "VN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "44 Đường Số 7, P. Phước Long",
      "addressLocality": "TP. Thủ Đức",
      "addressRegion": "TP. Hồ Chí Minh",
      "addressCountry": "VN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "120 Đường Số 1, P. Tân Kiểng",
      "addressLocality": "Quận 7",
      "addressRegion": "TP. Hồ Chí Minh",
      "addressCountry": "VN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Ấp An Thái, Xã Hội Cư",
      "addressLocality": "Huyện Cái Bè",
      "addressRegion": "Đồng Tháp",
      "addressCountry": "VN"
    }
  ],
  "areaServed": [
    "Thành phố Hồ Chí Minh",
    "Bình Dương",
    "Tây Ninh",
    "Đồng Tháp",
    "Đồng Nai",
    "Long An"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "06:00",
    "closes": "21:00"
  }
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kho gạo có hỗ trợ đóng túi nhỏ 5kg, 10kg miễn phí không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hoàn toàn miễn phí 100%. Vựa Gạo Sóc Trăng có sẵn bao bì 5kg, 10kg in sẵn chữ Gạo Từ Thiện/Gạo Nghĩa Tình trang trọng, tài trợ toàn bộ chi phí chia bao và may miệng túi cho Quý đoàn."
      }
    },
    {
      "@type": "Question",
      "name": "Doanh nghiệp, công ty mua gạo từ thiện có xuất hóa đơn đỏ (VAT) không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Có đầy đủ. Cung cấp hóa đơn điện tử VAT hợp pháp (thuế suất 5% cho gạo sơ chế), hợp đồng mua bán và giấy chứng nhận ATVSTP để doanh nghiệp quyết toán quỹ công đoàn minh bạch."
      }
    },
    {
      "@type": "Question",
      "name": "Chi phí vận chuyển và hỗ trợ bốc xếp đến Chùa, Mái ấm như thế nào?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hệ thống 4 chi nhánh tại TP.HCM, Bình Dương, Tây Ninh và nhà máy xay xát Đồng Tháp có đội xe tải chuyên dụng hỗ trợ miễn phí hoặc trợ giá tối đa cước xe, phụ trách khuân vác vào tận sảnh chùa hoặc kho bếp ăn."
      }
    },
    {
      "@type": "Question",
      "name": "Nên chọn loại gạo nào để làm từ thiện vừa ngon vừa tiết kiệm ngân sách?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Phát quà hộ nghèo/người già: Chọn Gạo Lài Sữa hoặc Gạo Đài Thơm 8 (dẻo vừa, thơm ngọt, để nguội vẫn mềm). Nấu bếp cơm 0 đồng: Chọn Gạo IR50404 (nở xốp nhiều, dôi cơm, tiết kiệm tối đa ngân sách). Cúng dường/biếu tặng cao cấp: Chọn Gạo ST25 Sóc Trăng."
      }
    },
    {
      "@type": "Question",
      "name": "Nếu Mạnh Thường Quân ở xa hoặc ở nước ngoài, kho có hỗ trợ xác nhận bàn giao không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kho gạo hỗ trợ giao đúng giờ đến tận chùa hoặc cơ sở bảo trợ xã hội, quay video, chụp hình cân ký và biên bản bàn giao gửi trực tiếp qua Zalo cho nhà hảo tâm ở xa."
      }
    }
  ]
};

const jsonLdProductList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Product",
      "position": 1,
      "name": "Gạo IR50404 Nở Xốp Lợi Cơm (Từ Thiện)",
      "description": "Gạo nở xốp dôi cơm chuyên dụng cho bếp ăn từ thiện, quán cơm 0 đồng, chùa nấu quy mô lớn.",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "VND",
        "lowPrice": "12000",
        "highPrice": "13500",
        "offerCount": "3"
      }
    },
    {
      "@type": "Product",
      "position": 2,
      "name": "Gạo Lài Sữa Dẻo Vừa Phát Quà Từ Thiện",
      "description": "Cơm mềm dẻo ngọt vị, phù hợp đóng bao 5kg 10kg phát quà hộ nghèo, người già neo đơn.",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "VND",
        "lowPrice": "14700",
        "highPrice": "16500",
        "offerCount": "3"
      }
    },
    {
      "@type": "Product",
      "position": 3,
      "name": "Gạo ST25 Sóc Trăng Thượng Hạng",
      "description": "Gạo dẻo thơm cao cấp dâng cúng Tam Bảo, biếu tặng mái ấm nuôi dưỡng trẻ em, viện dưỡng lão.",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "VND",
        "lowPrice": "21500",
        "highPrice": "25000",
        "offerCount": "3"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProductList) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
