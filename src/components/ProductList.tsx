'use client';

import React, { useState, useRef } from 'react';
import { RICE_PRODUCTS, RiceProduct } from '@/data/mockData';
import { useCart } from '@/context/CartContext';
import { Check, Info, ShoppingCart, Sparkles, Star, MessageCircle, Phone, Package, Image as ImageIcon, ChevronLeft, ChevronRight, LayoutGrid, TableProperties, Clock } from 'lucide-react';
import { ZALO_URL, PHONE_TEL, PHONE_DISPLAY } from '@/data/site';
import { PackagingModal } from '@/components/PackagingModal';
import { PackagingModel } from '@/data/packagingData';

export const ProductList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProductForModal, setSelectedProductForModal] = useState<RiceProduct | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [viewMode, setViewMode] = useState<'table' | 'carousel'>('table');

  const categories: { id: string; name: string; match?: (p: RiceProduct) => boolean }[] = [
    { id: 'all', name: 'Tất Cả 6 Loại Gạo' },
    { id: 'bep-an', name: 'Bếp Ăn & Nở Xốp', match: (p) => p.id === 'gao-se-chia' },
    { id: 'phat-qua', name: 'Phát Quà Thiện Nguyện', match: (p) => ['gao-nghia-tinh', 'gao-thien-lanh', 'gao-thanh-y'].includes(p.id) },
    { id: 'cung-duong', name: 'Cúng Dường & Đặc Sản', match: (p) => ['gao-st25-thuong-hang', 'gao-thanh-y', 'gao-thien-lanh'].includes(p.id) },
    { id: 'nau-chao', name: 'Nấu Cháo Tình Thương', match: (p) => p.id === 'gao-tam-tinh-thuong' },
  ];

  const currentCategoryObj = categories.find((c) => c.id === selectedCategory);
  const filteredProducts = !currentCategoryObj || currentCategoryObj.id === 'all'
    ? RICE_PRODUCTS
    : RICE_PRODUCTS.filter((p) => currentCategoryObj.match ? currentCategoryObj.match(p) : true);

  const totalCards = filteredProducts.length;

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

  const handleScrollToConsultation = () => {
    const el = document.getElementById('tu-van-theo-yeu-cau');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="san-pham" className="py-16 sm:py-20 bg-stone-100/60 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-950 border border-emerald-300/80 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-2.5 shadow-2xs backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-600" /> Bảng Giá Sỉ Tận Gốc Cho Đoàn Từ Thiện
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            Các Loại Gạo Chuyên Dụng Từ Thiện
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
            Bảng giá sỉ áp dụng chuẩn theo quy cách <strong>bao 25kg</strong>. <strong className="text-emerald-900 font-bold">Miễn phí 100% chi phí đóng gói mọi quy cách</strong> (túi 5kg quai xách, bao 10kg, 25kg, 50kg). Giá thực tế linh hoạt đàm phán theo số lượng và tuyến xe giao hàng.
          </p>

          {/* Dòng link nhỏ ở đầu lưới sản phẩm */}
          <div className="mt-3.5">
            <button
              type="button"
              onClick={handleScrollToConsultation}
              className="text-xs sm:text-sm font-bold text-amber-800 hover:text-amber-950 underline inline-flex items-center gap-1 group"
            >
              <span>Không chắc chọn loại nào? Nhờ kho tư vấn →</span>
            </button>
          </div>

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
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-emerald-800 via-emerald-800 to-teal-900 text-white shadow-md shadow-emerald-900/20 ring-1 ring-emerald-600/30'
                    : 'bg-white/90 text-stone-700 hover:bg-stone-50 border border-stone-200/80 shadow-2xs'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Switch chế độ xem: Bảng So Sánh Giá (Mặc định) – Thẻ Vuốt Ngang (Thì sau) */}
          <div className="flex items-center justify-center mt-6 sm:mt-8">
            <div className="inline-flex items-center bg-white p-1.5 rounded-2xl border border-stone-200/90 shadow-xs gap-1 max-w-full">
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition ${
                  viewMode === 'table'
                    ? 'bg-gradient-to-r from-emerald-800 via-emerald-800 to-teal-900 text-white shadow-sm ring-1 ring-emerald-700/50'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                <TableProperties className="w-3.5 h-3.5 text-amber-400" />
                <span>Bảng So Sánh Giá</span>
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 text-white px-1.5 py-0.2 rounded-full">
                  Mặc định
                </span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition ${
                  viewMode === 'carousel'
                    ? 'bg-gradient-to-r from-emerald-800 via-emerald-800 to-teal-900 text-white shadow-sm ring-1 ring-emerald-700/50'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5 text-emerald-600" />
                <span className="md:hidden">Thẻ Vuốt Ngang</span>
                <span className="hidden md:inline">Lưới Thẻ Chi Tiết</span>
              </button>
            </div>
          </div>
        </div>

        {/* Nội dung danh sách sản phẩm theo chế độ xem (Bảng so sánh mặc định hoặc Thẻ chi tiết) */}
        {viewMode === 'table' ? (
          <div>
            {/* 1. BẢNG SO SÁNH GIÁ TRÊN MOBILE (Danh sách tối ưu chạm vuốt) */}
            <div className="md:hidden bg-white rounded-3xl border border-stone-200/90 shadow-luxury overflow-hidden p-4 space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-stone-100">
                <span className="font-bold text-stone-800">So sánh 6 dòng gạo từ thiện:</span>
                <span className="text-[11px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80">
                  Giá sỉ tự giảm theo số kg
                </span>
              </div>

              <div className="space-y-3">
                {filteredProducts.map((p, idx) => {
                  const minPrice = p.tiers[p.tiers.length - 1].pricePerKg;
                  const maxPrice = p.pricePerKg;
                  return (
                    <div
                      key={p.id}
                      className="p-3.5 rounded-2xl border border-stone-200/90 bg-stone-50/70 hover:bg-amber-50/40 transition flex flex-col gap-2.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-black text-stone-900 text-sm">{p.name}</span>
                            {p.isPopular && (
                              <span className="bg-rose-100 text-rose-700 text-[10px] font-black px-2 py-0.5 rounded-full shrink-0 border border-rose-200">
                                Bán chạy nhất
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-stone-500 mt-0.5">
                            Độ dẻo: <span className="text-amber-500 font-black">{'★'.repeat(p.characteristics.softness)}</span>
                            <span className="text-stone-300 font-normal">{'★'.repeat(5 - p.characteristics.softness)}</span>
                            {' • '}{p.category}
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <div className="text-xs font-black text-emerald-900">
                            {minPrice.toLocaleString('vi-VN')} đ – {maxPrice.toLocaleString('vi-VN')} đ
                          </div>
                          <span className="text-[10px] text-stone-500 block">VNĐ/kg</span>
                        </div>
                      </div>

                      <div className="text-xs text-stone-600 line-clamp-1 bg-white/80 p-2 rounded-xl border border-stone-100">
                        🎯 <strong>Khuyên dùng:</strong> {p.characteristics.suitability}
                      </div>

                      <div className="flex items-center gap-2 pt-1 border-t border-stone-200/60">
                        <button
                          type="button"
                          onClick={() => {
                            setViewMode('carousel');
                            setTimeout(() => scrollToCard(idx), 80);
                          }}
                          className="flex-1 py-2 px-3 bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-white font-bold text-xs rounded-xl shadow-xs active:scale-95 transition text-center flex items-center justify-center gap-1"
                        >
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span>Chọn Đặt / Tính Giá</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setSelectedProductForModal(p)}
                          className="py-2 px-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs rounded-xl active:scale-95 transition text-center"
                        >
                          Chi Tiết
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => setViewMode('carousel')}
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline inline-flex items-center gap-1"
                >
                  <span>Chuyển sang xem dạng thẻ vuốt ngang →</span>
                </button>
              </div>
            </div>

            {/* 2. BẢNG SO SÁNH GIÁ TRÊN DESKTOP (Bảng đối chiếu ngang chuyên nghiệp) */}
            <div className="hidden md:block bg-white rounded-3xl border border-stone-200 shadow-luxury overflow-hidden animate-in fade-in duration-200">
              <div className="p-6 bg-gradient-to-r from-emerald-950 via-emerald-900 to-stone-900 text-white flex items-center justify-between border-b border-emerald-800/40">
                <div>
                  <span className="text-xs font-black text-amber-300 uppercase tracking-wider block mb-1">
                    Bảng So Sánh Giá Gạo Sỉ Tận Gốc
                  </span>
                  <h3 className="text-xl font-black text-white">
                    Đối Chiếu Toàn Bộ 6 Dòng Gạo Từ Thiện
                  </h3>
                </div>
                <div className="text-right text-xs text-stone-300">
                  <span className="inline-block bg-white/10 px-3 py-1 rounded-full border border-white/15">
                    ✅ Miễn phí đóng túi 5kg quai xách, bao 10kg, 25kg, 50kg
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-stone-50/90 text-stone-700 text-xs font-black uppercase tracking-wider border-b border-stone-200">
                      <th className="py-4 px-6">Loại Gạo</th>
                      <th className="py-4 px-4">Đặc Tính Cơm</th>
                      <th className="py-4 px-4">Khuyên Dùng Cho</th>
                      <th className="py-4 px-4 text-right">Dưới 300kg</th>
                      <th className="py-4 px-4 text-right">Từ 500kg</th>
                      <th className="py-4 px-4 text-right">Từ 1.000kg (1T)</th>
                      <th className="py-4 px-6 text-center">Thao Tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-sm">
                    {filteredProducts.map((p, idx) => {
                      const priceUnder300 = p.pricePerKg;
                      const tier500 = p.tiers.find((t) => t.minKg === 500)?.pricePerKg || p.tiers[0]?.pricePerKg;
                      const tier1000 = p.tiers.find((t) => t.minKg >= 1000)?.pricePerKg || p.tiers[p.tiers.length - 1].pricePerKg;
                      return (
                        <tr key={p.id} className="hover:bg-amber-50/30 transition-colors">
                          <td className="py-4 px-6">
                            <div className="font-extrabold text-stone-900 text-base">{p.name}</div>
                            <div className="text-xs text-stone-500">{p.category}</div>
                            {p.isPopular && (
                              <span className="inline-block mt-1 bg-rose-100 text-rose-700 text-[10px] font-black px-2 py-0.2 rounded-full border border-rose-200">
                                Bán chạy nhất
                              </span>
                            )}
                          </td>
                          <td className="py-4 px-4">
                            <div className="text-xs text-stone-600">
                              Độ dẻo: <span className="text-amber-500 font-bold">{'★'.repeat(p.characteristics.softness)}</span>
                              <span className="text-stone-300">{'★'.repeat(5 - p.characteristics.softness)}</span>
                            </div>
                            <div className="text-xs text-stone-500 mt-0.5">
                              Hương thơm: <span className="text-amber-500 font-bold">{'★'.repeat(p.characteristics.fragrance)}</span>
                              <span className="text-stone-300">{'★'.repeat(5 - p.characteristics.fragrance)}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-xs text-stone-700 line-clamp-2 max-w-[220px]">
                              {p.characteristics.suitability}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right font-medium text-stone-600 whitespace-nowrap">
                            {priceUnder300.toLocaleString('vi-VN')} đ/kg
                          </td>
                          <td className="py-4 px-4 text-right font-bold text-amber-900 whitespace-nowrap">
                            {tier500.toLocaleString('vi-VN')} đ/kg
                          </td>
                          <td className="py-4 px-4 text-right font-black text-emerald-800 whitespace-nowrap text-base">
                            {tier1000.toLocaleString('vi-VN')} đ/kg
                          </td>
                          <td className="py-4 px-6 text-center whitespace-nowrap">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                type="button"
                                onClick={() => {
                                  setViewMode('carousel');
                                  setTimeout(() => scrollToCard(idx), 80);
                                }}
                                className="px-3.5 py-1.5 bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-white font-bold text-xs rounded-xl shadow-xs transition"
                              >
                                Chọn Đặt
                              </button>
                              <button
                                type="button"
                                onClick={() => setSelectedProductForModal(p)}
                                className="px-2.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs rounded-xl transition"
                                title="Xem chi tiết & hình ảnh bao bì"
                              >
                                Chi Tiết
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-stone-50 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500">
                <span>Đơn giá trên áp dụng chuẩn đóng bao 25kg, miễn phí 100% công đóng túi 5kg-10kg.</span>
                <button
                  type="button"
                  onClick={() => setViewMode('carousel')}
                  className="font-bold text-emerald-800 hover:underline"
                >
                  Chuyển sang xem dạng thẻ chi tiết ➔
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* CHẾ ĐỘ THẺ VUỐT NGANG (MOBILE) & LƯỚI THẺ CHI TIẾT (DESKTOP) */
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
                        ? 'w-6 bg-emerald-700'
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

        {/* Thẻ Theo Yêu Cầu: Đặt bên dưới lưới 6 sản phẩm, không kéo giãn chiều cao các thẻ gạo */}
        <div id="tu-van-theo-yeu-cau" className="mt-8 sm:mt-12 scroll-mt-24">
          <CustomRiceRequestCard />
        </div>
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

const PRODUCT_THEMES: Record<string, {
  cardBorder: string;
  headerBg: string;
  categoryBadge: string;
  linkText: string;
  starColor: string;
}> = {
  'gao-se-chia': {
    cardBorder: 'border-amber-300 hover:border-amber-500 shadow-amber-900/5',
    headerBg: 'bg-gradient-to-br from-amber-100/70 via-amber-50/40 to-white',
    categoryBadge: 'bg-amber-100 text-amber-900 border border-amber-300/80',
    linkText: 'text-amber-800 hover:text-amber-950',
    starColor: 'text-amber-700',
  },
  'gao-nghia-tinh': {
    cardBorder: 'border-emerald-300 hover:border-emerald-500 shadow-emerald-900/5',
    headerBg: 'bg-gradient-to-br from-emerald-100/70 via-emerald-50/40 to-white',
    categoryBadge: 'bg-emerald-100 text-emerald-900 border border-emerald-300/80',
    linkText: 'text-emerald-800 hover:text-emerald-950',
    starColor: 'text-emerald-700',
  },
  'gao-thien-lanh': {
    cardBorder: 'border-sky-300 hover:border-sky-500 shadow-sky-900/5',
    headerBg: 'bg-gradient-to-br from-sky-100/70 via-sky-50/40 to-white',
    categoryBadge: 'bg-sky-100 text-sky-900 border border-sky-300/80',
    linkText: 'text-sky-800 hover:text-sky-950',
    starColor: 'text-sky-700',
  },
  'gao-thanh-y': {
    cardBorder: 'border-rose-300 hover:border-rose-500 shadow-rose-900/5',
    headerBg: 'bg-gradient-to-br from-rose-100/70 via-rose-50/40 to-white',
    categoryBadge: 'bg-rose-100 text-rose-900 border border-rose-300/80',
    linkText: 'text-rose-800 hover:text-rose-950',
    starColor: 'text-rose-700',
  },
  'gao-st25-thuong-hang': {
    cardBorder: 'border-purple-300 hover:border-purple-500 shadow-purple-900/5',
    headerBg: 'bg-gradient-to-br from-purple-100/70 via-purple-50/40 to-white',
    categoryBadge: 'bg-purple-100 text-purple-900 border border-purple-300/80',
    linkText: 'text-purple-800 hover:text-purple-950',
    starColor: 'text-purple-700',
  },
  'gao-tam-tinh-thuong': {
    cardBorder: 'border-teal-300 hover:border-teal-500 shadow-teal-900/5',
    headerBg: 'bg-gradient-to-br from-teal-100/70 via-teal-50/40 to-white',
    categoryBadge: 'bg-teal-100 text-teal-900 border border-teal-300/80',
    linkText: 'text-teal-800 hover:text-teal-950',
    starColor: 'text-teal-700',
  },
};

const DEFAULT_PRODUCT_THEME = {
  cardBorder: 'border-gray-300 hover:border-gray-500',
  headerBg: 'bg-gradient-to-br from-gray-100/70 via-gray-50/40 to-white',
  categoryBadge: 'bg-gray-100 text-gray-900 border border-gray-300',
  linkText: 'text-gray-800 hover:text-gray-950',
  starColor: 'text-gray-700',
};

const ProductCard: React.FC<{
  product: RiceProduct;
  onOpenDetails: () => void;
}> = ({ product, onOpenDetails }) => {
  const { addToCart } = useCart();
  const theme = PRODUCT_THEMES[product.id] || DEFAULT_PRODUCT_THEME;
  const [selectedKg, setSelectedKg] = useState<number>(500);
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

  // Xác định nấc giá hiện tại
  const getCurrentTierLabel = () => {
    if (selectedKg < 300) return 'Dưới 300kg (Lẻ)';
    if (selectedKg < 500) return 'Nấc 300–499kg';
    if (selectedKg < 1000) return 'Nấc 500–999kg';
    return 'Từ 1 Tấn (Sỉ gốc)';
  };

  // Màu sắc thay đổi theo từng nấc số lượng khách chọn
  const getTierVisual = () => {
    if (selectedKg < 300) {
      return {
        boxBg: 'bg-slate-50 border-slate-300',
        priceColor: 'text-slate-900',
        badgeBg: 'bg-slate-200 text-slate-800 border border-slate-300',
        activeBtn: 'bg-slate-700 text-white border-slate-700 shadow-xs',
        totalColor: 'text-slate-900',
        upsellBg: 'bg-slate-100 text-slate-800',
      };
    }
    if (selectedKg < 500) {
      return {
        boxBg: 'bg-blue-50/90 border-blue-300',
        priceColor: 'text-blue-950',
        badgeBg: 'bg-blue-100 text-blue-900 border border-blue-200',
        activeBtn: 'bg-blue-700 text-white border-blue-700 shadow-xs',
        totalColor: 'text-blue-950',
        upsellBg: 'bg-blue-50 text-blue-900',
      };
    }
    if (selectedKg < 1000) {
      return {
        boxBg: 'bg-emerald-50/90 border-emerald-300',
        priceColor: 'text-emerald-950',
        badgeBg: 'bg-emerald-100 text-emerald-900 border border-emerald-200',
        activeBtn: 'bg-emerald-700 text-white border-emerald-700 shadow-xs',
        totalColor: 'text-emerald-900',
        upsellBg: 'bg-emerald-50 text-emerald-900',
      };
    }
    return {
      boxBg: 'bg-amber-50/90 border-amber-400',
      priceColor: 'text-amber-950',
      badgeBg: 'bg-amber-200/90 text-amber-950 border border-amber-300',
      activeBtn: 'bg-amber-700 text-white border-amber-700 shadow-xs',
      totalColor: 'text-amber-950',
      upsellBg: 'bg-amber-50 text-amber-900',
    };
  };

  const tierVisual = getTierVisual();

  // Tính gợi ý lên nấc giá (Smart Upsell)
  const getUpsellSuggestion = () => {
    if (selectedKg < 300) {
      const tier300Price = product.tiers[0].pricePerKg;
      const saving = (product.pricePerKg - tier300Price) * 300;
      return {
        targetKg: 300,
        text: `Lên 300kg: ${tier300Price.toLocaleString('vi-VN')} đ/kg (Bớt ${(saving / 1000).toFixed(0)}k) ➔`,
      };
    }
    if (selectedKg < 500) {
      const tier500Price = product.tiers[1].pricePerKg;
      const saving = (product.tiers[0].pricePerKg - tier500Price) * 500;
      return {
        targetKg: 500,
        text: `Lên 500kg: ${tier500Price.toLocaleString('vi-VN')} đ/kg (Bớt ${(saving / 1000).toFixed(0)}k) ➔`,
      };
    }
    if (selectedKg < 1000) {
      const tier1000Price = product.tiers[2].pricePerKg;
      const saving = (product.tiers[1].pricePerKg - tier1000Price) * 1000;
      return {
        targetKg: 1000,
        text: `Lên 1 Tấn: ${tier1000Price.toLocaleString('vi-VN')} đ/kg (Bớt ${(saving / 1000).toFixed(0)}k) ➔`,
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
    <div className={`bg-white rounded-2xl border-2 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group h-full ${theme.cardBorder}`}>
      {/* Header card: Màu nền riêng biệt từng loại gạo, KHÔNG bị che huy hiệu */}
      <div className={`p-3.5 sm:p-4 border-b border-gray-100 ${theme.headerBg}`}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${theme.categoryBadge}`}>
              {product.category}
            </span>
            {product.isPopular && (
              <span className="bg-rose-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1 shrink-0">
                <Star className="w-3 h-3 fill-white" /> Đoàn chọn nhiều
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onOpenDetails}
            className={`text-xs font-bold underline flex items-center gap-0.5 shrink-0 ${theme.linkText}`}
          >
            <span>Chi tiết hạt & cơm</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <h3 className="text-base sm:text-lg font-black text-gray-900 mt-1 line-clamp-2 min-h-[28px] sm:min-h-[32px] flex items-center">
          {product.name}
        </h3>

        {/* 1 DÒNG GỘP ĐẶC TÍNH: Dẻo, Thơm và mô tả ngắn gọn */}
        <div className="text-xs text-gray-700 mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 min-h-[20px]">
          <span className={`font-semibold ${theme.starColor}`}>
            Dẻo: {'★'.repeat(product.characteristics.softness)}{'☆'.repeat(5 - product.characteristics.softness)}
          </span>
          <span className="text-gray-300">•</span>
          <span className={`font-semibold ${theme.starColor}`}>
            Thơm: {'★'.repeat(product.characteristics.fragrance)}{'☆'.repeat(5 - product.characteristics.fragrance)}
          </span>
          <span className="text-gray-300 hidden sm:inline">•</span>
          <span className="text-gray-500 line-clamp-1 hidden sm:inline">{product.shortDesc}</span>
        </div>
      </div>

      {/* Thân card tinh gọn - Tối ưu trọn vẹn màn hình điện thoại */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-2.5">
        <div>
          {/* ĐƠN GIÁ 1 HÀNG DUY NHẤT: Đổi màu theo nấc số lượng */}
          <div className={`${tierVisual.boxBg} border rounded-xl px-3 py-2 flex items-center justify-between transition-colors duration-200`}>
            <div className="flex items-baseline gap-2">
              <span className={`text-xl sm:text-2xl font-black ${tierVisual.priceColor}`}>
                {currentPrice.toLocaleString('vi-VN')} đ<span className="text-xs font-semibold text-gray-600">/kg</span>
              </span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded ${tierVisual.badgeBg}`}>
                {getCurrentTierLabel()}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowTiersDetail(!showTiersDetail)}
              className="text-xs font-bold text-gray-700 hover:text-gray-950 underline shrink-0"
            >
              {showTiersDetail ? 'Ẩn nấc ▲' : 'Bảng giá sỉ ▼'}
            </button>
          </div>

          {/* Bảng nấc giá chi tiết khi người dùng bấm mở */}
          {showTiersDetail && (
            <div className="mt-2 space-y-1 text-xs bg-gray-50 p-2.5 rounded-xl border border-gray-200 animate-in fade-in duration-150">
              <div className="flex justify-between items-center text-gray-700">
                <span>Dưới 300kg (đơn nhỏ / lẻ):</span>
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

          {/* CHỌN KHỐI LƯỢNG: 4 Nút + Ô tự nhập trên 1 hàng */}
          <div className="mt-2.5">
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-gray-800">Số lượng cần (kg):</label>
              {upsell && (
                <button
                  type="button"
                  onClick={() => setSelectedKg(upsell.targetKg)}
                  className="text-[11px] font-bold text-amber-800 hover:text-amber-950 underline"
                >
                  💡 {upsell.text}
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              {[
                { kg: 300, label: '300kg' },
                { kg: 500, label: '500kg' },
                { kg: 1000, label: '1 Tấn' },
              ].map((btn) => (
                <button
                  key={btn.kg}
                  type="button"
                  onClick={() => setSelectedKg(btn.kg)}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition ${
                    selectedKg === btn.kg
                      ? tierVisual.activeBtn
                      : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
              <div className="w-20 shrink-0">
                <input
                  type="number"
                  min="10"
                  step="10"
                  value={selectedKg}
                  onChange={(e) => setSelectedKg(Math.max(1, Number(e.target.value)))}
                  className="w-full text-xs font-bold border border-gray-300 rounded-lg py-1.5 px-1.5 text-center focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white"
                  placeholder="Khác"
                  title="Nhập số kg tùy ý"
                />
              </div>
            </div>
          </div>

          {/* QUY CÁCH BAO BÌ: 1 dòng + dropdown (Xóa hộp xanh thừa) */}
          <div className="mt-2.5">
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-gray-800">
                Đóng gói <span className="text-emerald-700 font-extrabold">(Miễn phí 100%)</span>:
              </label>
              <button
                type="button"
                onClick={() => setIsPackagingModalOpen(true)}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 underline flex items-center gap-1"
              >
                <Package className="w-3.5 h-3.5 text-amber-700" />
                <span>{chosenPackagingModel ? chosenPackagingModel.name : 'Xem 16 mẫu ➔'}</span>
              </button>
            </div>

            <select
              value={selectedPackaging}
              onChange={(e) => {
                setSelectedPackaging(e.target.value);
                setChosenPackagingModel(null);
              }}
              className="w-full text-xs font-medium border border-gray-300 rounded-lg px-2.5 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
            >
              {product.packaging.map((pack) => (
                <option key={pack} value={pack}>{pack}</option>
              ))}
            </select>
          </div>
        </div>

        {/* TẠM TÍNH & 2 NÚT HÀNH ĐỘNG TRÊN 1 HÀNG DUY NHẤT */}
        <div className="pt-2.5 border-t border-gray-200 mt-auto space-y-2">
          <div className="flex justify-between items-baseline">
            <span className="text-xs text-gray-600">
              Tạm tính ({selectedKg}kg):
            </span>
            <div className="text-right flex items-baseline gap-1.5">
              <span className={`text-xl font-black ${tierVisual.totalColor}`}>
                {(currentPrice * selectedKg).toLocaleString('vi-VN')} đ
              </span>
              <span className="text-[11px] text-gray-500">
                ({currentPrice.toLocaleString('vi-VN')} đ/kg)
              </span>
            </div>
          </div>

          {/* 2 Nút hành động: 65% Đặt hàng + 35% Zalo đàm phán */}
          <div className="grid grid-cols-12 gap-1.5">
            <button
              type="button"
              onClick={handleAddToCart}
              className={`col-span-7 py-2.5 px-2 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 transition transform active:scale-95 shadow-md ${
                addedSuccess
                  ? 'bg-emerald-600 text-white shadow-emerald-600/20'
                  : 'bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white shadow-amber-700/25 border border-amber-500/30'
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4" /> Đã Thêm Đơn
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4 text-amber-200" /> Thêm Vào Đơn
                </>
              )}
            </button>

            <a
              href={zaloNegotiateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-5 py-2.5 px-2 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 text-blue-950 border border-blue-200/90 rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition active:scale-95 text-center shadow-2xs"
              title="Nhắn Zalo xin mẫu gạo & đàm phán giá tốt nhất"
            >
              <MessageCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="truncate">Zalo Báo Giá</span>
            </a>
          </div>

          <div className="text-[10px] text-gray-500 text-center">
            * Giá chuẩn bao 25kg tại kho • Hỗ trợ VAT 5% • Miễn phí ship từ 500kg
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

const ZALO_CONSULT_TEXT = 'Chào Vựa Gạo Sóc Trăng, đoàn cần nhờ kho tư vấn:\nChương trình: ___ · Số suất/số kg: ___ · Ngân sách: ___ · Giao tại: ___ · Ngày cần: ___';
const ZALO_CONSULT_URL = `https://zalo.me/0762234135?text=${encodeURIComponent(ZALO_CONSULT_TEXT)}`;

const CustomRiceRequestCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#04281a] via-[#063b27] to-[#021d13] text-white rounded-3xl border-2 border-emerald-400/40 shadow-xl p-5 sm:p-7 lg:p-8 h-full flex flex-col justify-between relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1">
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between h-full">
          <div>
            {/* Chỉ giữ duy nhất 1 badge: Theo yêu cầu */}
            <div className="mb-3">
              <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-300 to-amber-400 text-amber-950 text-xs font-black px-3 py-1 rounded-full shadow-xs">
                <Sparkles className="w-3.5 h-3.5 fill-amber-950" /> Theo yêu cầu
              </span>
            </div>

            {/* (1) Tiêu đề chuẩn */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
              Chưa thấy loại phù hợp? Nhờ kho tư vấn
            </h3>

            {/* (2) Mô tả một câu: Màu sáng hơn, tối thiểu 14px */}
            <p className="mt-2.5 text-sm sm:text-base text-emerald-100 font-medium leading-relaxed">
              Cho kho biết ngân sách, số suất và cách dùng, kho đề xuất loại gạo hợp nhất và báo giá trong ngày làm việc
            </p>

            {/* (3) Ba gạch đầu dòng: Chữ sáng màu, tối thiểu 14px */}
            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/15 hover:border-amber-400/40 transition-colors">
                <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <div className="text-sm sm:text-[15px] text-emerald-50 leading-relaxed">
                  <strong className="text-amber-300 font-bold">Chưa biết chọn loại nào:</strong> Phân vân giữa các loại gạo, cần tư vấn phương án tối ưu số suất cơm hoặc hợp khẩu vị theo từng đối tượng người nhận.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/15 hover:border-amber-400/40 transition-colors">
                <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <div className="text-sm sm:text-[15px] text-emerald-50 leading-relaxed">
                  <strong className="text-amber-300 font-bold">Cần loại khác:</strong> Sẵn sàng cung cấp Nếp cúng dường, Gạo Lứt, Đài Thơm 8, Nàng Hoa 9, Thơm Thái... theo yêu cầu riêng của đoàn.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/15 hover:border-amber-400/40 transition-colors">
                <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <div className="text-sm sm:text-[15px] text-emerald-50 leading-relaxed">
                  <strong className="text-amber-300 font-bold">Quy cách riêng:</strong> Đóng túi 2kg 3kg, in tên đoàn, giao nhiều điểm (phối trộn chỉ thực hiện khi đoàn có yêu cầu riêng).
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cụm nút hành động & Dòng giờ làm việc */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center h-full pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/15 lg:pl-6 space-y-3">
          <div className="bg-white/5 backdrop-blur-md p-5 rounded-3xl border border-white/15 space-y-3.5 shadow-inner">
            {/* (5) Nút Zalo với mẫu tin nhắn soạn sẵn */}
            <a
              href={ZALO_CONSULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-amber-950 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition transform active:scale-95 text-center border border-amber-300/40"
            >
              <MessageCircle className="w-4 h-4 fill-amber-950 shrink-0" />
              <span>Nhắn Zalo nhờ kho tư vấn</span>
            </a>

            {/* Hotline tư vấn trực tiếp */}
            <a
              href={`tel:${PHONE_TEL}`}
              className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/20 transition active:scale-95 text-center"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>Hotline tư vấn kho: {PHONE_DISPLAY}</span>
            </a>

            {/* (6) Dòng nhỏ: Phản hồi trong giờ làm việc 7:00–20:00 */}
            <p className="text-xs text-emerald-200/90 text-center flex items-center justify-center gap-1.5 pt-1">
              <Clock className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>Phản hồi trong giờ làm việc 7:00–20:00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
