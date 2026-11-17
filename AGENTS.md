<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project Rules: tuthien.gaosoctrang.com (Gạo Từ Thiện Giá Sỉ)

### 1. Quy trình Deploy bắt buộc (Tránh lỗi 403 Forbidden)
- Nhánh `deploy` trên GitHub (`leutdu156-a11y/gao-tu-thien` và `hongnguyenrice/gao-tu-thien`) **chỉ được chứa file tĩnh đã build từ `out/`** (gồm `index.html`, `.htaccess`), tuyệt đối **không** đẩy trực tiếp mã nguồn nhánh `main` sang `deploy` (sẽ gây lỗi LiteSpeed `403 Forbidden`).
- Luôn deploy bằng lệnh `bash scripts/deploy.sh` (tự build `out/`, push `deploy` lên cả 2 remote và đóng gói `/Users/leutdu/Downloads/hostinger-gaotuthien-YYYYMMDD-HHMM.zip`, tự dọn bản zip cũ).

### 2. Next.js Static Export & Server/Client Boundary
- Không export hằng số dữ liệu dùng chung (như `HOME_FAQS`, `RICE_PRODUCTS`) từ file có `'use client'` để import vào Server Component (`page.tsx`), sẽ gây lỗi build `TypeError: a.map is not a function`. Dữ liệu dùng chung phải đặt trong `src/data/`.

### 3. Kiểm tra Live & Cache CDN Hostinger (`hcdn`)
- Hostinger `hcdn` chặn giả mạo `User-Agent: Googlebot` từ IP ngoài dải Google (trả `403`), nên luôn kiểm tra URL bằng User-Agent thông thường.
- Các file `robots.txt`, `sitemap.xml`, `llms.txt`, `index.md`, `server-card.json` phải giữ `Cache-Control "public, max-age=0, must-revalidate"` trong `public/.htaccess`. Khi kiểm tra sau deploy mà thấy `x-hcdn-cache-status: HIT`, cần chờ hết TTL hoặc Purge Cache trong Hostinger hPanel.

### 4. SEO, Structured Data & Đánh giá Google Maps
- Tuyệt đối không bịa `review` / `aggregateRating` ảo trong JSON-LD `Product` và không gán review Google Maps (`LocalBusiness`) vào schema `Product` để tránh bị Google phạt spam dữ liệu có cấu trúc.
- Đánh giá Google Maps chỉ hiển thị dưới dạng giao diện uy tín cho người đọc (`src/components/GoogleReviews.tsx`).
- Ảnh chia sẻ link (`og:image` / `twitter:image`) dùng `/og-gao-tu-thien.jpg` (1200x630); ảnh sơ đồ kho `he-thong-kho-vua-gao-soc-trang.jpg` chỉ dùng hiển thị trong trang.
