#!/usr/bin/env bash
set -e

# Đường dẫn thư mục dự án
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SCRATCH_DIR="$(dirname "$PROJECT_DIR")"
TIMESTAMP="$(date +%Y%m%d-%H%M)"

echo "🚀 [1/4] Build Next.js Static Export..."
cd "$PROJECT_DIR"
npm run build

echo "📦 [2/4] Khởi tạo & commit bản tĩnh nhánh deploy..."
cd "$PROJECT_DIR/out"
rm -rf .git
git init -q
git checkout -b deploy -q
git add -A
git commit -m "deploy: update static build $TIMESTAMP" -q

echo "🌐 [3/4] Đẩy lên GitHub leutdu156-a11y & hongnguyenrice (nhánh deploy)..."
git push -f https://github.com/leutdu156-a11y/gao-tu-thien.git deploy:deploy -q
git push -f https://github.com/hongnguyenrice/gao-tu-thien.git deploy:deploy -q

echo "🗜️ [4/4] Đóng gói zip lưu trữ chuẩn YYYYMMDD-HHMM..."
ZIP_NAME="hostinger-gaotuthien-${TIMESTAMP}.zip"
cd "$PROJECT_DIR/out"
rm -f "$SCRATCH_DIR"/hostinger-gaotuthien-*.zip
zip -r -q "$SCRATCH_DIR/$ZIP_NAME" . -x ".*" -x "__MACOSX"

echo "✅ Hoàn tất deploy!"
echo "   - GitHub repo gốc: https://github.com/leutdu156-a11y/gao-tu-thien (nhánh deploy)"
echo "   - GitHub Hostinger: https://github.com/hongnguyenrice/gao-tu-thien (nhánh deploy)"
echo "   - File zip dự phòng: $SCRATCH_DIR/$ZIP_NAME"
