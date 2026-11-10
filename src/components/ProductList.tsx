'use client';

import React, { useState } from 'react';
import { RICE_PRODUCTS, RiceProduct } from '@/data/mockData';
import { useCart } from '@/context/CartContext';
import { Check, Info, ShoppingCart, Sparkles, Star } from 'lucide-react';

export const ProductList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProductForModal, setSelectedProductForModal] = useState<RiceProduct | null>(null);

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

  return (
    <section id="san-pham" className="py-16 bg-gray-50/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Bảng Giá Sỉ Tận Gốc Cho Đoàn Từ Thiện
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Các Loại Gạo Chuyên Dụng Từ Thiện
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
            Đơn giá tự động giảm theo từng nấc khối lượng (từ 100kg, 500kg, và từ 1 tấn). Miễn phí đóng gói bao bì 10kg, 25kg, 50kg; <strong className="text-emerald-800">tài trợ miễn phí 100% vỏ bao 5kg cho đơn từ 1 tấn</strong>.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-amber-700 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={() => setSelectedProductForModal(product)}
            />
          ))}
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

const ProductCard: React.FC<{
  product: RiceProduct;
  onOpenDetails: () => void;
}> = ({ product, onOpenDetails }) => {
  const { addToCart } = useCart();
  const [selectedKg, setSelectedKg] = useState<number>(100);
  const [selectedPackaging, setSelectedPackaging] = useState<string>(product.packaging[0] || 'Bao 10kg');
  const [addedSuccess, setAddedSuccess] = useState(false);

  // Tính giá gạo cơ bản dựa vào selectedKg
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

  const is5kgPackaging = selectedPackaging.includes('5kg');
  // Phụ phí bao 5kg: +300đ/kg nếu < 1000kg. Từ 1 tấn (1000kg) trở lên tài trợ miễn phí 100%.
  const packagingSurcharge = is5kgPackaging ? (selectedKg >= 1000 ? 0 : 300) : 0;
  const basePrice = getBasePricePerKg(selectedKg);
  const currentPrice = basePrice + packagingSurcharge;

  const handleAddToCart = () => {
    addToCart(product, selectedKg, selectedPackaging);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative group">
      {product.isPopular && (
        <div className="absolute top-3 right-3 bg-rose-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm z-10 flex items-center gap-1">
          <Star className="w-3 h-3 fill-white" /> Được đoàn chọn nhiều
        </div>
      )}

      {/* Header card */}
      <div className="p-6 border-b border-gray-100 bg-gradient-to-br from-amber-50/40 to-white">
        <span className="text-xs font-bold text-amber-700 bg-amber-100/80 px-2.5 py-0.5 rounded-md">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mt-2 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2 min-h-[40px]">{product.shortDesc}</p>

        {/* Đặc tính hạt cơm */}
        <div className="mt-4 flex items-center justify-between text-xs text-gray-600 bg-white p-2.5 rounded-xl border border-gray-100">
          <div>
            <span className="text-gray-400">Độ dẻo: </span>
            <span className="font-semibold text-amber-700">{'★'.repeat(product.characteristics.softness)}{'☆'.repeat(5 - product.characteristics.softness)}</span>
          </div>
          <div>
            <span className="text-gray-400">Mùi thơm: </span>
            <span className="font-semibold text-amber-700">{'★'.repeat(product.characteristics.fragrance)}{'☆'.repeat(5 - product.characteristics.fragrance)}</span>
          </div>
        </div>
      </div>

      {/* Bảng nấc giá theo số lượng */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            Bảng giá sỉ bậc thang:
          </div>
          <div className="space-y-1.5 text-xs">
            <div className={`flex justify-between items-center p-1.5 rounded-lg ${selectedKg < 100 ? 'bg-amber-50 font-bold text-amber-900' : 'text-gray-600'}`}>
              <span>Dưới 100kg (lẻ thử mẫu)</span>
              <span className="font-bold">{product.pricePerKg.toLocaleString('vi-VN')} đ/kg</span>
            </div>
            {product.tiers.map((t) => (
              <div
                key={t.minKg}
                className={`flex justify-between items-center p-1.5 rounded-lg transition-colors ${
                  selectedKg >= t.minKg && (!product.tiers.find(next => next.minKg > t.minKg && selectedKg >= next.minKg))
                    ? 'bg-emerald-50 border border-emerald-200 font-bold text-emerald-900'
                    : 'text-gray-600'
                }`}
              >
                <span>{t.label}</span>
                <span className="font-bold text-emerald-700">{t.pricePerKg.toLocaleString('vi-VN')} đ/kg</span>
              </div>
            ))}
          </div>

          {/* Lựa chọn số lượng kg nhanh */}
          <div className="mt-4">
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              Chọn số lượng dự kiến:
            </label>
            <div className="grid grid-cols-4 gap-1.5 mb-2">
              {[50, 100, 500, 1000].map((kg) => (
                <button
                  key={kg}
                  type="button"
                  onClick={() => setSelectedKg(kg)}
                  className={`py-1.5 text-xs font-bold rounded-lg border transition ${
                    selectedKg === kg
                      ? 'bg-amber-700 text-white border-amber-700'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {kg >= 1000 ? `${kg / 1000} Tấn` : `${kg} kg`}
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
                className="w-full text-sm font-bold border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Nhập số kg tùy ý"
              />
              <span className="text-xs font-semibold text-gray-500 shrink-0">kg</span>
            </div>
          </div>

          {/* Lựa chọn cách đóng gói bao bì */}
          <div className="mt-3">
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-bold text-gray-700">
                Đóng gói túi / bao:
              </label>
              {is5kgPackaging && selectedKg >= 1000 && (
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  🎁 Tài trợ bao 5kg: 0đ
                </span>
              )}
            </div>
            <select
              value={selectedPackaging}
              onChange={(e) => setSelectedPackaging(e.target.value)}
              className="w-full text-xs font-medium border border-gray-300 rounded-lg px-2.5 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {product.packaging.map((pack) => (
                <option key={pack} value={pack}>{pack}</option>
              ))}
            </select>

            {/* Thông báo chính sách bao bì minh bạch */}
            {is5kgPackaging ? (
              selectedKg >= 1000 ? (
                <div className="mt-1.5 p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-950 flex items-start gap-1.5">
                  <span className="text-sm">🎁</span>
                  <div>
                    <strong className="text-emerald-800">Đơn từ 1 tấn:</strong> Vựa Gạo Sóc Trăng <strong>tài trợ miễn phí 100%</strong> toàn bộ vỏ bao 5kg in chữ Từ Thiện & công may!
                  </div>
                </div>
              ) : (
                <div className="mt-1.5 p-2 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-950 flex items-start gap-1.5">
                  <span className="text-sm">💡</span>
                  <div>
                    Túi 5kg phụ thu tiền vỏ in & may chỉ: <strong>+300đ/kg</strong> (+1.500đ/túi). 
                    <span className="text-emerald-700 font-bold block sm:inline sm:ml-1">Đơn từ 1 tấn được TÀI TRỢ MIỄN PHÍ.</span>
                  </div>
                </div>
              )
            ) : (
              <div className="mt-1.5 text-[11px] text-gray-500 flex items-center gap-1 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Bao 10kg, 25kg, 50kg: <strong>Miễn phí đóng gói 100%</strong></span>
              </div>
            )}
          </div>
        </div>

        {/* Tổng tiền tạm tính & nút thêm giỏ */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex justify-between items-baseline mb-3">
            <div>
              <span className="text-xs text-gray-500 block">Tạm tính ({selectedKg}kg):</span>
              {is5kgPackaging && (
                <span className="text-[10px] text-gray-500">
                  {selectedKg >= 1000
                    ? `Gạo ${basePrice.toLocaleString('vi-VN')}đ + Bao 5kg: 0đ`
                    : `Gạo ${basePrice.toLocaleString('vi-VN')}đ + Bao 5kg: 300đ`}
                </span>
              )}
            </div>
            <div className="text-right">
              <span className="text-lg font-black text-amber-700">
                {(currentPrice * selectedKg).toLocaleString('vi-VN')} đ
              </span>
              <div className="text-[11px] text-gray-500 font-semibold">
                ({currentPrice.toLocaleString('vi-VN')} đ/kg)
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={onOpenDetails}
              className="p-2.5 text-gray-500 hover:text-amber-700 hover:bg-amber-50 border border-gray-200 rounded-xl transition"
              title="Xem thông tin chi tiết"
            >
              <Info className="w-5 h-5" />
            </button>
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-2.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition transform active:scale-95 shadow-sm ${
                addedSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/20'
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4" /> Đã thêm vào đơn
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" /> Thêm Vào Đơn Hàng
                </>
              )}
            </button>
          </div>
        </div>
      </div>
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
