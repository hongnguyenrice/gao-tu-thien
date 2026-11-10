'use client';

import React, { useState, useRef } from 'react';
import { RICE_PRODUCTS, RiceProduct } from '@/data/mockData';
import { useCart } from '@/context/CartContext';
import { Check, Info, ShoppingCart, Sparkles, Star, MessageCircle, Phone, Package, Image as ImageIcon, ChevronLeft, ChevronRight, LayoutGrid, TableProperties } from 'lucide-react';
import { ZALO_URL, PHONE_TEL, PHONE_DISPLAY } from '@/data/site';
import { PackagingModal } from '@/components/PackagingModal';
import { PackagingModel } from '@/data/packagingData';

export const ProductList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProductForModal, setSelectedProductForModal] = useState<RiceProduct | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileViewMode, setMobileViewMode] = useState<'carousel' | 'table'>('carousel');

  const categories = [
    { id: 'all', name: 'Tất Cả Loại Gạo' },
    { id: 'Gạo Nở Xốp', name: 'Gạo Nở Xốp Lợi Cơm (Bếp Ăn)' },
    { id: 'Gạo Dẻo Thơm Phổ Thông', name: 'Gạo Dẻo Thơm (Phát Quà)' },
    { id: 'Gạo Thơm Đặc Sản', name: 'Gạo Thơm Đặc Sản' },
    { id: 'Gạo Nấu Cháo / Cơm Tấm', name: 'Gạo Nấu Cháo Tình Thương' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? RICE_PRODUCTS
    : RICE_PRODUCTS.filter((p) => p.category === selectedCategory);

  const totalCards = filteredProducts.length + (selectedCategory === 'all' ? 1 : 0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const cardWidth = clientWidth * 0.86;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveSlide(Math.min(totalCards - 1, Math.max(0, index)));
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth * 0.86;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    setActiveSlide(index);
  };

  return (
    <section id="san-pham" className="py-16 bg-gray-50/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Bảng Giá Sỉ Tận Gốc Cho Đoàn Từ Thiện
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Các Loại Gạo Chuyên Dụng Từ Thiện
          </h2>
          <p className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed">
            Bảng giá sỉ áp dụng chuẩn theo quy cách <strong>bao 25kg</strong>. <strong className="text-emerald-800">Miễn phí 100% chi phí đóng gói mọi quy cách</strong> (túi 5kg quai xách, bao 10kg, 25kg, 50kg). Giá thực tế linh hoạt đàm phán theo số lượng và tuyến xe giao hàng.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-6 sm:mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActiveSlide(0);
                  if (scrollRef.current) scrollRef.current.scrollTo({ left: 0 });
                }}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-amber-700 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Mobile view switch & counter */}
          <div className="flex md:hidden items-center justify-between mt-6 bg-white p-1.5 rounded-2xl border border-gray-200 shadow-xs">
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => setMobileViewMode('carousel')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                  mobileViewMode === 'carousel'
                    ? 'bg-amber-700 text-white shadow-xs'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" /> Thẻ Vuốt Ngang
              </button>
              <button
                type="button"
                onClick={() => setMobileViewMode('table')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                  mobileViewMode === 'table'
                    ? 'bg-amber-700 text-white shadow-xs'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <TableProperties className="w-3.5 h-3.5" /> Bảng So Sánh Giá
              </button>
            </div>

            {mobileViewMode === 'carousel' && (
              <div className="flex items-center gap-1 pr-2 text-xs font-black text-amber-800">
                <span>{activeSlide + 1}</span>
                <span className="text-gray-400 font-normal">/</span>
                <span className="text-gray-500 font-normal">{totalCards}</span>
              </div>
            )}
          </div>
        </div>

        {/* Nội dung danh sách sản phẩm: Mobile thông minh + Desktop lưới 2x3 */}
        {mobileViewMode === 'table' ? (
          /* Bảng so sánh giá nhanh dạng danh sách trên Mobile */
          <div className="md:hidden bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden p-4 space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-gray-100">
              <span className="font-bold text-gray-800">So sánh 5 loại gạo từ thiện:</span>
              <span className="text-[11px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                Giá sỉ tự giảm theo số kg
              </span>
            </div>

            <div className="space-y-2.5">
              {RICE_PRODUCTS.map((p, idx) => {
                const minPrice = p.tiers[p.tiers.length - 1].pricePerKg;
                const maxPrice = p.pricePerKg;
                return (
                  <div
                    key={p.id}
                    className="p-3 rounded-2xl border border-gray-200 bg-gray-50/70 hover:bg-amber-50/50 transition flex items-center justify-between gap-2.5"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-gray-900 text-xs truncate">{p.name}</span>
                        {p.isPopular && (
                          <span className="bg-rose-100 text-rose-700 text-[9px] font-bold px-1.5 py-0.2 rounded-full shrink-0">Hot</span>
                        )}
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5 truncate">
                        Độ dẻo: {'★'.repeat(p.characteristics.softness)}{'☆'.repeat(5 - p.characteristics.softness)} • {p.category}
                      </div>
                      <div className="text-xs font-black text-amber-800 mt-1">
                        Sỉ từ {minPrice.toLocaleString('vi-VN')} đ – {maxPrice.toLocaleString('vi-VN')} đ<span className="text-[10px] font-normal text-gray-500">/kg</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setMobileViewMode('carousel');
                        setTimeout(() => scrollToCard(idx), 80);
                      }}
                      className="px-3.5 py-2 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs rounded-xl shadow-xs shrink-0"
                    >
                      Chọn Đặt
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => setMobileViewMode('carousel')}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 underline"
              >
                Quay lại dạng thẻ vuốt ngang ➔
              </button>
            </div>
          </div>
        ) : (
          /* Mobile Vuốt Ngang (Snap Carousel) + Desktop Grid 2x3 */
          <div>
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 scrollbar-none items-stretch"
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="w-[86vw] sm:w-[380px] md:w-auto shrink-0 md:shrink snap-center flex flex-col h-full"
                >
                  <ProductCard
                    product={product}
                    onOpenDetails={() => setSelectedProductForModal(product)}
                  />
                </div>
              ))}

              {/* Ô thứ 6 đặc biệt: Đặt theo yêu cầu & phối trộn riêng cho chùa / bếp ăn */}
              {selectedCategory === 'all' && (
                <div className="w-[86vw] sm:w-[380px] md:w-auto shrink-0 md:shrink snap-center flex flex-col h-full">
                  <CustomRiceRequestCard />
                </div>
              )}
            </div>

            {/* Mobile Carousel Controls & Navigation Dots */}
            <div className="flex md:hidden items-center justify-between pt-3 px-1">
              <button
                type="button"
                onClick={() => scrollToCard(Math.max(0, activeSlide - 1))}
                disabled={activeSlide === 0}
                className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 disabled:opacity-30 shadow-xs active:scale-95 transition"
                aria-label="Xem thẻ gạo trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalCards }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => scrollToCard(idx)}
                    className={`h-2 rounded-full transition-all ${
                      activeSlide === idx
                        ? 'w-6 bg-amber-700'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Chuyển đến thẻ gạo ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollToCard(Math.min(totalCards - 1, activeSlide + 1))}
                disabled={activeSlide >= totalCards - 1}
                className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 disabled:opacity-30 shadow-xs active:scale-95 transition"
                aria-label="Xem thẻ gạo tiếp theo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal chi tiết nếu người dùng bấm xem */}
      {selectedProductForModal && (
        <ProductDetailModal
          product={selectedProductForModal}
          onClose={() => setSelectedProductForModal(null)}
        />
      )}
    </section>
  );
};

const ProductCard: React.FC<{
  product: RiceProduct;
  onOpenDetails: () => void;
}> = ({ product, onOpenDetails }) => {
  const { addToCart } = useCart();
  const [selectedKg, setSelectedKg] = useState<number>(100);
  const [selectedPackaging, setSelectedPackaging] = useState<string>(product.packaging[0] || 'Bao 10kg');
  const [isPackagingModalOpen, setIsPackagingModalOpen] = useState(false);
  const [chosenPackagingModel, setChosenPackagingModel] = useState<PackagingModel | null>(null);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [showTiersDetail, setShowTiersDetail] = useState(false);

  // Tính giá gạo cơ bản dựa vào selectedKg (chuẩn bao 25kg, miễn phí mọi quy cách bao)
  const getBasePricePerKg = (kg: number) => {
    let p = product.pricePerKg;
    const sorted = [...product.tiers].sort((a, b) => b.minKg - a.minKg);
    for (const t of sorted) {
      if (kg >= t.minKg) {
        p = t.pricePerKg;
        break;
      }
    }
    return p;
  };

  const currentPrice = getBasePricePerKg(selectedKg);
  const minTierPrice = product.tiers[product.tiers.length - 1].pricePerKg;
  const maxTierPrice = product.pricePerKg;

  // Xác định nấc giá hiện tại
  const getCurrentTierLabel = () => {
    if (selectedKg < 100) return 'Dưới 100kg (Đơn lẻ thử mẫu)';
    if (selectedKg < 500) return 'Nấc sỉ 100kg – 499kg';
    if (selectedKg < 1000) return 'Nấc sỉ 500kg – 999kg (Nửa tấn)';
    return 'Từ 1 Tấn trở lên (Sỉ kịch trần)';
  };

  // Tính gợi ý lên nấc giá (Smart Upsell)
  const getUpsellSuggestion = () => {
    if (selectedKg < 100) {
      const tier100Price = product.tiers[0].pricePerKg;
      const savingPerKg = product.pricePerKg - tier100Price;
      const totalSaving = savingPerKg * 100;
      return {
        targetKg: 100,
        text: `Lên 100kg: chỉ còn ${tier100Price.toLocaleString('vi-VN')} đ/kg (Tiết kiệm ${totalSaving.toLocaleString('vi-VN')} đ)`,
      };
    }
    if (selectedKg < 500) {
      const currentTierPrice = product.tiers[0].pricePerKg;
      const tier500Price = product.tiers[1].pricePerKg;
      const savingPerKg = currentTierPrice - tier500Price;
      const totalSaving = savingPerKg * 500;
      return {
        targetKg: 500,
        text: `Lên 500kg: chỉ còn ${tier500Price.toLocaleString('vi-VN')} đ/kg (Tiết kiệm ${totalSaving.toLocaleString('vi-VN')} đ)`,
      };
    }
    if (selectedKg < 1000) {
      const currentTierPrice = product.tiers[1].pricePerKg;
      const tier1000Price = product.tiers[2].pricePerKg;
      const savingPerKg = currentTierPrice - tier1000Price;
      const totalSaving = savingPerKg * 1000;
      return {
        targetKg: 1000,
        text: `Lên 1 Tấn: chỉ còn ${tier1000Price.toLocaleString('vi-VN')} đ/kg (Tiết kiệm ${totalSaving.toLocaleString('vi-VN')} đ)`,
      };
    }
    return null;
  };

  const upsell = getUpsellSuggestion();

  const handleAddToCart = () => {
    addToCart(product, selectedKg, selectedPackaging);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const zaloNegotiateUrl = `https://zalo.me/0762234135?text=${encodeURIComponent(
    `Chào Vựa Gạo Sóc Trăng, đoàn chúng tôi quan tâm loại ${product.name}, dự kiến đặt ${selectedKg}kg đóng gói ${selectedPackaging}. Xin gửi mẫu gạo thử và báo giá đàm phán tốt nhất cho đoàn.`
  )}`;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group h-full">
      {product.isPopular && (
        <div className="absolute top-3 right-3 bg-rose-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm z-10 flex items-center gap-1">
          <Star className="w-3 h-3 fill-white" /> Đoàn chọn nhiều
        </div>
      )}

      {/* Header card gọn gàng - chiều cao cố định để các thẻ luôn thẳng hàng */}
      <div className="p-4 sm:p-5 border-b border-gray-100 bg-gradient-to-br from-amber-50/40 to-white">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-amber-800 bg-amber-100/90 px-2.5 py-0.5 rounded-md">
            {product.category}
          </span>
          <button
            type="button"
            onClick={onOpenDetails}
            className="text-xs font-bold text-amber-800 hover:text-amber-950 underline flex items-center gap-0.5"
          >
            <span>Chi tiết hạt & cơm</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <h3 className="text-lg font-extrabold text-gray-900 mt-2 line-clamp-1 h-7 flex items-center">{product.name}</h3>
        <p className="text-xs text-gray-700 mt-1 line-clamp-2 min-h-[32px] leading-relaxed">{product.shortDesc}</p>

        {/* Đặc tính hạt cơm rõ ràng, font 13px dễ đọc */}
        <div className="mt-3 flex items-center justify-between text-xs sm:text-sm text-gray-800 bg-white p-2.5 rounded-xl border border-gray-200">
          <div>
            <span className="text-gray-500 font-medium">Độ dẻo: </span>
            <span className="font-bold text-amber-700">{'★'.repeat(product.characteristics.softness)}{'☆'.repeat(5 - product.characteristics.softness)}</span>
          </div>
          <div>
            <span className="text-gray-500 font-medium">Mùi thơm: </span>
            <span className="font-bold text-amber-700">{'★'.repeat(product.characteristics.fragrance)}{'☆'.repeat(5 - product.characteristics.fragrance)}</span>
          </div>
        </div>
      </div>

      {/* Thân card - Phân cấp giá chuẩn xác & Minh bạch 100% */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* PHÂN CẤP GIÁ CHUẨN: Giá đang áp dụng to nhất, nổi bật nhất */}
          <div className="bg-emerald-50/80 border border-emerald-300/80 rounded-2xl p-3">
            <div className="flex justify-between items-baseline">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                  Đơn giá đang áp dụng:
                </span>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-2xl font-black text-emerald-900">
                    {currentPrice.toLocaleString('vi-VN')} đ
                  </span>
                  <span className="text-xs font-semibold text-gray-600">/kg (chuẩn bao 25kg)</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowTiersDetail(!showTiersDetail)}
                className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline shrink-0 py-1"
              >
                {showTiersDetail ? 'Ẩn 4 nấc ▲' : 'Xem 4 nấc giá ▼'}
              </button>
            </div>

            {/* Dòng nấc đang áp dụng + khoảng giá tham khảo */}
            <div className="mt-1.5 pt-1.5 border-t border-emerald-200/60 flex items-center justify-between text-xs">
              <span className="font-bold text-emerald-800">
                {getCurrentTierLabel()}
              </span>
              <span className="text-gray-500">
                Sỉ từ {minTierPrice.toLocaleString('vi-VN')} – {maxTierPrice.toLocaleString('vi-VN')} đ
              </span>
            </div>

            {/* Bảng nấc giá chi tiết khi người dùng bấm mở */}
            {showTiersDetail && (
              <div className="mt-2.5 pt-2 border-t border-emerald-200 space-y-1.5 text-xs">
                <div className="flex justify-between items-center text-gray-700">
                  <span>Dưới 100kg (lẻ thử mẫu):</span>
                  <span className="font-bold">{product.pricePerKg.toLocaleString('vi-VN')} đ/kg</span>
                </div>
                {product.tiers.map((t) => (
                  <div
                    key={t.minKg}
                    className={`flex justify-between items-center ${
                      selectedKg >= t.minKg && (!product.tiers.find(next => next.minKg > t.minKg && selectedKg >= next.minKg))
                        ? 'text-emerald-900 font-extrabold bg-emerald-100/70 px-2 py-0.5 rounded'
                        : 'text-gray-700'
                    }`}
                  >
                    <span>{t.label}:</span>
                    <span className="font-bold">{t.pricePerKg.toLocaleString('vi-VN')} đ/kg</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Chọn số lượng kg nhanh */}
          <div className="mt-3.5">
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-gray-800">Chọn khối lượng dự kiến:</label>
              <span className="text-xs text-gray-500">Hoặc tự nhập số kg</span>
            </div>

            <div className="grid grid-cols-4 gap-1.5 mb-2">
              {[
                { kg: 50, label: '50 kg', sub: 'Lẻ thử' },
                { kg: 100, label: '100 kg', sub: 'Nấc 1' },
                { kg: 500, label: '500 kg', sub: 'Nấc 2' },
                { kg: 1000, label: '1 Tấn', sub: 'Sỉ gốc' },
              ].map((btn) => (
                <button
                  key={btn.kg}
                  type="button"
                  onClick={() => setSelectedKg(btn.kg)}
                  className={`py-1.5 px-1 text-center rounded-xl border transition ${
                    selectedKg === btn.kg
                      ? 'bg-amber-700 text-white border-amber-700 shadow-sm'
                      : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="text-xs font-bold">{btn.label}</div>
                  <div className={`text-[10px] ${selectedKg === btn.kg ? 'text-amber-100' : 'text-gray-500'}`}>
                    {btn.sub}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="number"
                min="10"
                step="10"
                value={selectedKg}
                onChange={(e) => setSelectedKg(Math.max(1, Number(e.target.value)))}
                className="w-full text-sm font-bold border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                placeholder="Nhập số kg tùy ý (VD: 250, 600...)"
              />
              <span className="text-xs font-bold text-gray-700 shrink-0">kg</span>
            </div>

            {/* Gợi ý lên nấc giá (Smart Upsell) */}
            <div className="min-h-[26px] mt-1.5 flex items-center">
              {upsell ? (
                <button
                  type="button"
                  onClick={() => setSelectedKg(upsell.targetKg)}
                  className="w-full text-[11px] font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1 rounded-lg flex items-center justify-between text-left transition"
                >
                  <span>💡 {upsell.text}</span>
                  <span className="text-amber-700 font-extrabold underline shrink-0 ml-1">Chọn nấc này ➔</span>
                </button>
              ) : (
                <div className="w-full text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-lg flex items-center gap-1">
                  <span>🎉</span>
                  <span>Đơn từ 1 tấn: Đang áp dụng giá sỉ kịch trần tận xưởng!</span>
                </div>
              )}
            </div>
          </div>

          {/* Lựa chọn cách đóng gói bao bì (Miễn phí 100%) */}
          <div className="mt-3">
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-gray-800">Quy cách đóng gói:</label>
              <button
                type="button"
                onClick={() => setIsPackagingModalOpen(true)}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 underline flex items-center gap-1"
              >
                <Package className="w-3.5 h-3.5 text-amber-700" />
                <span>{chosenPackagingModel ? chosenPackagingModel.name : 'Xem 16 mẫu bao bì ➔'}</span>
              </button>
            </div>

            <select
              value={selectedPackaging}
              onChange={(e) => {
                setSelectedPackaging(e.target.value);
                setChosenPackagingModel(null);
              }}
              className="w-full text-xs font-medium border border-gray-300 rounded-xl px-2.5 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {product.packaging.map((pack) => (
                <option key={pack} value={pack}>{pack}</option>
              ))}
            </select>

            {/* Dòng cam kết bao bì miễn phí 100% */}
            <div className="mt-1.5 text-xs text-emerald-800 bg-emerald-50/80 border border-emerald-200 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>Miễn phí 100% chi phí đóng túi 5kg quai xách, bao 10kg, 25kg, 50kg</span>
            </div>
          </div>
        </div>

        {/* Tổng tiền tạm tính & 2 nút hành động (Thêm đơn + Zalo đàm phán) */}
        <div className="pt-3.5 border-t border-gray-200 mt-auto space-y-2.5">
          <div className="flex justify-between items-baseline">
            <div>
              <span className="text-xs text-gray-600 block">Tạm tính ({selectedKg}kg):</span>
            </div>
            <div className="text-right">
              <span className="text-xl font-black text-amber-800">
                {(currentPrice * selectedKg).toLocaleString('vi-VN')} đ
              </span>
              <span className="text-xs text-gray-500 block">
                ({currentPrice.toLocaleString('vi-VN')} đ/kg)
              </span>
            </div>
          </div>

          <div className="text-[11px] text-gray-500 leading-tight">
            * Giá chuẩn bao 25kg tại kho (chưa gồm VAT 5%). Miễn phí giao nội thành từ 500kg.
          </div>

          {/* 2 nút hành động song song: Đặt hàng + Zalo đàm phán */}
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              type="button"
              onClick={handleAddToCart}
              className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition transform active:scale-95 shadow-sm ${
                addedSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-amber-700 hover:bg-amber-800 text-white shadow-amber-700/20'
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4" /> Đã Thêm Vào Đơn
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" /> Thêm Vào Đơn Hàng
                </>
              )}
            </button>

            <a
              href={zaloNegotiateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3.5 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition active:scale-95 shrink-0"
              title="Nhắn Zalo xin mẫu gạo & đàm phán giá tốt nhất"
            >
              <MessageCircle className="w-4 h-4 text-blue-600" />
              <span>Zalo Đàm Phán / Xin Mẫu</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal chọn mẫu bao bì thực tế */}
      <PackagingModal
        isOpen={isPackagingModalOpen}
        onClose={() => setIsPackagingModalOpen(false)}
        selectedCategoryFilter={selectedPackaging.includes('5kg') ? '5kg' : (selectedPackaging.includes('10kg') ? '10kg' : 'all')}
        currentSelectedModelId={chosenPackagingModel?.id}
        onSelectModel={(model) => {
          setChosenPackagingModel(model);
          const baseWeight = model.weightCategory === '5kg' ? 'Bao 5kg' : 'Bao 10kg';
          setSelectedPackaging(`${baseWeight} (${model.name})`);
        }}
      />
    </div>
  );
};

const ProductDetailModal: React.FC<{
  product: RiceProduct;
  onClose: () => void;
}> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 overflow-y-auto max-h-[90vh] shadow-2xl relative animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 text-2xl font-bold w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition"
        >
          &times;
        </button>

        <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
          {product.category}
        </span>
        <h3 className="text-2xl font-black text-gray-900 mt-2">{product.name}</h3>
        <p className="text-sm font-semibold text-emerald-700 mt-1">{product.recommendedFor}</p>

        <div className="mt-4 space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>{product.description}</p>

          <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200">
            <h4 className="font-bold text-amber-950 mb-2">Đặc điểm phù hợp cho từ thiện:</h4>
            <p className="text-gray-800">{product.characteristics.suitability}</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">Quy cách đóng gói sẵn sàng:</h4>
            <div className="flex flex-wrap gap-2">
              {product.packaging.map((pack) => (
                <span key={pack} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg text-xs font-semibold">
                  {pack}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl text-sm"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

const CustomRiceRequestCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-900 via-emerald-950 to-teal-950 text-white rounded-2xl border-2 border-emerald-400/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative p-4 sm:p-5 h-full">
      <div className="absolute top-3 right-3 bg-amber-400 text-amber-950 text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1 z-10">
        <Sparkles className="w-3.5 h-3.5 fill-amber-950" /> Theo Yêu Cầu
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <span className="inline-block bg-white/15 text-emerald-200 text-[11px] font-bold px-2 py-0.5 rounded-md border border-white/10">
            🌾 Phối Trộn & Đặt Riêng
          </span>

          <h3 className="text-lg sm:text-xl font-black text-white leading-snug mt-1.5 line-clamp-2 min-h-[48px] flex items-center">
            Quý Đoàn Cần Phối Trộn Gạo Hoặc Tìm Loại Gạo Khác?
          </h3>

          <p className="text-xs text-emerald-100/90 mt-1 leading-relaxed line-clamp-2 min-h-[32px]">
            Kho nhận phối trộn theo công thức riêng của bếp ăn & cung cấp mọi loại gạo đặc thù theo yêu cầu của Quý đoàn:
          </p>

          <div className="mt-3.5 space-y-2 text-xs text-emerald-50">
            <div className="flex items-start gap-2 bg-white/10 p-2 rounded-xl border border-white/10">
              <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-200">Trộn gạo tỷ lệ riêng:</strong> 70% nở xốp 504 + 30% dẻo thơm (vừa dôi cơm vừa mềm, tối ưu chi phí).
              </div>
            </div>

            <div className="flex items-start gap-2 bg-white/10 p-2 rounded-xl border border-white/10">
              <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-200">Gạo đặc thù khác:</strong> Nếp cúng dường, Gạo Lứt đỏ, Đài Thơm 8, Nàng Hoa 9, Thơm Thái...
              </div>
            </div>

            <div className="flex items-start gap-2 bg-white/10 p-2 rounded-xl border border-white/10">
              <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-200">Quy cách túi riêng:</strong> Đóng túi 2kg, 3kg, in decal hoặc dán tên Đoàn thiện nguyện lên bao.
              </div>
            </div>
          </div>
        </div>

        {/* Nút hành động cố định thẳng hàng dưới đáy */}
        <div className="pt-3 border-t border-white/15 mt-auto space-y-2">
          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 bg-amber-400 hover:bg-amber-300 text-amber-950 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md transition transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-amber-950" />
            <span>Nhắn Zalo Báo Giá Phối Trộn Riêng</span>
          </a>

          <a
            href={`tel:${PHONE_TEL}`}
            className="w-full py-2 px-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border border-white/15 transition active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 text-amber-300" />
            <span>Hotline tư vấn kho: {PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
