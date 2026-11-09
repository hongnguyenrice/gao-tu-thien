import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Xuất mỗi trang thành thư mục /ten-trang/index.html để URL có dấu "/" cuối (khớp canonical & sitemap)
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
