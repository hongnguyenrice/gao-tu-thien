# DỰ ÁN WEBSITE GẠO TỪ THIỆN – VỰA GẠO SÓC TRĂNG

> **Tên miền chính thức live**: [https://tuthien.gaosoctrang.com/](https://tuthien.gaosoctrang.com/)  
> **Thư mục lưu trữ dự án**: `/Users/leutdu/.gemini/antigravity/scratch/gao-tu-thien`  
> **Cập nhật lần cuối**: 2026-11-09 22:55

---

## 1. Vị Trí Thư Mục & Tài Nguyên

| Hạng mục | Đường dẫn / Liên kết | Ghi chú |
|:---|:---|:---|
| **Thư mục source code** | `/Users/leutdu/.gemini/antigravity/scratch/gao-tu-thien` | Chứa toàn bộ source Next.js 16 + Tailwind CSS |
| **Thư mục build tĩnh** | `/Users/leutdu/.gemini/antigravity/scratch/gao-tu-thien/out` | Thư mục sinh ra sau khi chạy `npm run build` |
| **Repo GitHub gốc** | `https://github.com/leutdu156-a11y/gao-tu-thien` | Nhánh `main` (code dev), nhánh `deploy` (bản tĩnh) |
| **Repo GitHub Hostinger** | `https://github.com/hongnguyenrice/gao-tu-thien` | Đang kết nối trực tiếp với Hostinger (nhánh `deploy`) |
| **File zip xuất bản mới nhất** | `/Users/leutdu/.gemini/antigravity/scratch/hostinger-gaotuthien-20261109-2302.zip` | Đóng gói theo chuẩn `YYYYMMDD-HHMM` |

---

## 2. Danh Sách 6 URL Live & Trạng Thái (Tất cả 200 OK)

1. **Trang chủ**: `https://tuthien.gaosoctrang.com/` (Tổng quan năng lực kho, xưởng, giá xuất xưởng)
2. **Báo giá**: `https://tuthien.gaosoctrang.com/bao-gia-gao-tu-thien/` (Bảng giá 4 nấc kg, form báo giá, VAT)
3. **Phát quà**: `https://tuthien.gaosoctrang.com/gao-phat-qua-tu-thien/` (Gạo dẻo, mềm ngọt, túi 5kg-10kg)
4. **Cúng dường**: `https://tuthien.gaosoctrang.com/gao-cung-duong-chua/` (Gạo ST25, Jasmine cúng Tam Bảo)
5. **Bếp ăn từ thiện**: `https://tuthien.gaosoctrang.com/chon-gao-cho-bep-an-tu-thien/` (Gạo 504 nở xốp dôi cơm, gạo tấm)
6. **Đóng bao & Giao hàng**: `https://tuthien.gaosoctrang.com/quy-cach-dong-bao-va-giao-hang/` (Bao bì, xe tải tận nơi)

- `robots.txt`: `https://tuthien.gaosoctrang.com/robots.txt`
- `sitemap.xml`: `https://tuthien.gaosoctrang.com/sitemap.xml`

---

## 3. Các Lệnh Thường Dùng Khi Mở Lại Dự Án

Khi mở terminal hoặc bắt đầu phiên làm việc mới, di chuyển vào thư mục dự án:
```bash
cd /Users/leutdu/.gemini/antigravity/scratch/gao-tu-thien
```

- **Chạy môi trường phát triển (Local Dev)**:
  ```bash
  npm run dev
  ```
- **Build kiểm tra tĩnh**:
  ```bash
  npm run build
  ```
- **Deploy tự động lên cả 2 GitHub repo & đóng gói Zip**:
  ```bash
  npm run deploy
  ```
  *(Lệnh này tự động: build tĩnh ➜ commit vào nhánh `deploy` ➜ đẩy sang cả `leutdu156-a11y` và `hongnguyenrice` ➜ đóng gói file zip kèm timestamp YYYYMMDD-HHMM).*

Sau khi chạy `npm run deploy`, vào Hostinger bấm nút **Triển khai** là web cập nhật ngay lập tức.

---

## 4. Cấu Trúc Mã Nguồn Quan Trọng

- `src/data/site.ts`: **Trung tâm dữ liệu của website** (Hotline/Zalo `0762 234 135`, 4 địa chỉ kho + 1 nhà máy, khu vực giao hàng, bảng giá). Mọi thay đổi về giá hoặc hotline chỉ cần sửa 1 lần tại file này.
- `src/lib/schema.ts`: Toàn bộ bộ sinh Schema.org (`WholesaleStore`, `LocalBusiness`, `Product`, `Offer`, `FAQPage`, `BreadcrumbList`).
- `src/app/layout.tsx`: Layout tổng thể, Header, Footer, Zalo CTA cố định, Title template chuẩn SEO.
- `public/robots.txt` & `public/sitemap.xml`: File khai báo SEO được copy tự động vào root khi build.
