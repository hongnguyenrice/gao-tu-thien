import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/AppShell";
import { organizationSchema } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gạo Từ Thiện Giá Sỉ Tận Gốc | Vựa Gạo Sóc Trăng",
    template: "%s | Vựa Gạo Sóc Trăng",
  },
  description:
    "Vựa Gạo Sóc Trăng cung cấp gạo từ thiện giá sỉ tận gốc cho chùa, bếp ăn, đoàn thiện nguyện. Đóng bao 5kg-10kg miễn phí, giao tận nơi, hóa đơn VAT 5%.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "Gạo Từ Thiện Giá Sỉ Tận Gốc | Vựa Gạo Sóc Trăng",
    description:
      "Vựa Gạo Sóc Trăng cung cấp gạo từ thiện giá sỉ tận gốc cho chùa, bếp ăn, đoàn thiện nguyện. Đóng bao 5kg-10kg miễn phí, giao tận nơi, hóa đơn VAT 5%.",
    url: `${SITE_URL}/`,
    type: "website",
    locale: "vi_VN",
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/he-thong-kho-vua-gao-soc-trang.jpg`,
        width: 1200,
        height: 630,
        alt: "Vựa Gạo Sóc Trăng - Kho gạo từ thiện giá sỉ tận gốc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gạo Từ Thiện Giá Sỉ Tận Gốc | Vựa Gạo Sóc Trăng",
    description:
      "Vựa Gạo Sóc Trăng cung cấp gạo từ thiện giá sỉ tận gốc cho chùa, bếp ăn, đoàn thiện nguyện. Đóng bao 5kg-10kg miễn phí, giao tận nơi, hóa đơn VAT 5%.",
    images: [`${SITE_URL}/he-thong-kho-vua-gao-soc-trang.jpg`],
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* Google Analytics 4 (GA4) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5H4LMYKGW9"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5H4LMYKGW9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Microsoft Clarity - Tải trễ để tối ưu điểm hiệu năng Mobile */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                setTimeout(function() {
                  (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                  })(window, document, "clarity", "script", "zbs6s6lg7p");
                }, 1500);
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
