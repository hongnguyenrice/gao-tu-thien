import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/AppShell";
import { organizationSchema } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gạo Từ Thiện Giá Sỉ Tận Gốc | Vựa Gạo Sóc Trăng",
    template: "%s | Vựa Gạo Sóc Trăng",
  },
  description:
    "Tổng kho chuyên cung cấp 6 dòng gạo từ thiện độc quyền Vựa Gạo Sóc Trăng: Gạo Sẻ Chia, Gạo Nghĩa Tình, Gạo Thiện Lành, Gạo Thành Ý, Gạo ST25 Thượng Hạng, Gạo Tấm Tình Thương. Giá sỉ xuất xưởng, hỗ trợ đóng bao 5kg-10kg miễn phí, giao tận nơi, xuất hóa đơn VAT.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
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
    "gạo từ thiện xuất hóa đơn vat",
  ],
  openGraph: {
    title: "Gạo Từ Thiện Giá Sỉ Tận Gốc - Vựa Gạo Sóc Trăng",
    description:
      "Nhà máy Đồng Tháp & 4 chi nhánh TP.HCM, Bình Dương, Tây Ninh. Đóng bao 5kg-10kg miễn phí, giao xe tải tận nơi, xuất hóa đơn VAT.",
    url: `${SITE_URL}/`,
    type: "website",
    locale: "vi_VN",
    siteName: SITE_NAME,
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
  verification: {
    google: "FxNs107qPwwfEyZc6gIWAo-Khtkfm37rp2UX-c_qDGQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = organizationSchema();

  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* Google Analytics 4 (GA4) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GBEYDZ8SMF"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GBEYDZ8SMF', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
