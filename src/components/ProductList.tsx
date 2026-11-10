'use client';

import React, { useState } from 'react';
import { RICE_PRODUCTS, RiceProduct } from '@/data/mockData';
import { useCart } from '@/context/CartContext';
import { Check, Info, ShoppingCart, Sparkles, Star, MessageCircle, Phone, Package, Image as ImageIcon } from 'lucide-react';
import { ZALO_URL, PHONE_TEL, PHONE_DISPLAY } from '@/data/site';
import { PackagingModal } from '@/components/PackagingModal';
import { PackagingModel } from '@/data/packagingData';

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

        {/* Product Grid - 6 ô hoàn hảo (2 hàng x 3 cột) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={() => setSelectedProductForModal(product)}
            />
          ))}

          {/* Ô thứ 6 đặc biệt: Đặt theo yêu cầu & phối trộn riêng cho chùa / bếp ăn */}
          {selectedCategory === 'all' && (
            <CustomRiceRequestCard />
          )}
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
  const [isPackagingModalOpen, setIsPackagingModalOpen] = useState(false);
  const [chosenPackagingModel, setChosenPackagingModel] = useState<PackagingModel | null>(null);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [showTiersDetail, setShowTiersDetail] = useState(false);

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
  const minTierPrice = product.tiers[product.tiers.length - 1].pricePerKg;

  const handleAddToCart = () => {
    addToCart(product, selectedKg, selectedPackaging);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative group">
      {product.isPopular && (
        <div className="absolute top-3 right-3 bg-rose-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm z-10 flex items-center gap-1">
          <Star className="w-3 h-3 fill-white" /> Đoàn chọn nhiều
        </div>
      )}

      {/* Header card gọn gàng */}
      <div className="p-4 sm:p-5 border-b border-gray-100 bg-gradient-to-br from-amber-50/30 to-white">
        <span className="text-[11px] font-bold text-amber-800 bg-amber-100/90 px-2 py-0.5 rounded-md">
          {product.category}
        </span>
        <h3 className="text-lg font-bold text-gray-900 mt-1.5 line-clamp-1">{product.name}</h3>
        <p className="text-xs text-gray-600 mt-1 line-clamp-2">{product.shortDesc}</p>

        {/* Đặc tính hạt cơm 1 dòng */}
        <div className="mt-2.5 flex items-center justify-between text-[11px] text-gray-600 bg-white p-2 rounded-xl border border-gray-100">
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

      {/* Thân card tinh gọn - Tối ưu trọn vẹn màn hình điện thoại */}
      <div className="p-4 sm:p-5 space-y-3.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Nấc giá sỉ: 1 dòng tóm tắt + nút toggle xem 4 nấc */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-2.5 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-gray-500 font-medium block">Giá sỉ theo số lượng:</span>
              <span className="text-sm font-black text-emerald-800">
                {minTierPrice.toLocaleString('vi-VN')} đ – {product.pricePerKg.toLocaleString('vi-VN')} đ<span className="text-[11px] font-normal text-gray-600">/kg</span>
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowTiersDetail(!showTiersDetail)}
              className="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 underline flex items-center gap-0.5 py-1"
            >
              <span>{showTiersDetail ? 'Ẩn nấc giá ▲' : 'Xem 4 nấc giá ▼'}</span>
            </button>
          </div>

          {/* Bảng nấc giá chi tiết khi người dùng bấm mở */}
          {showTiersDetail && (
            <div className="mt-2 space-y-1 text-xs bg-gray-50 p-2.5 rounded-xl border border-gray-200 animate-in fade-in duration-150">
              <div className="flex justify-between items-center text-gray-600">
                <span>Dưới 100kg (lẻ thử mẫu):</span>
                <span className="font-bold">{product.pricePerKg.toLocaleString('vi-VN')} đ/kg</span>
              </div>
              {product.tiers.map((t) => (
                <div
                  key={t.minKg}
                  className={`flex justify-between items-center ${
                    selectedKg >= t.minKg && (!product.tiers.find(next => next.minKg > t.minKg && selectedKg >= next.minKg))
                      ? 'text-emerald-800 font-bold'
                      : 'text-gray-600'
                  }`}
                >
                  <span>{t.label}:</span>
                  <span className="font-bold text-emerald-700">{t.pricePerKg.toLocaleString('vi-VN')} đ/kg</span>
                </div>
              ))}
            </div>
          )}

          {/* Chọn số lượng kg nhanh */}
          <div className="mt-3">
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-gray-700">Số lượng cần:</label>
              <span className="text-[11px] font-bold text-amber-800">
                Áp dụng: {basePrice.toLocaleString('vi-VN')} đ/kg
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1.5 mb-1.5">
              {[50, 100, 500, 1000].map((kg) => (
                <button
                  key={kg}
                  type="button"
                  onClick={() => setSelectedKg(kg)}
                  className={`py-1 text-xs font-bold rounded-lg border transition ${
                    selectedKg === kg
                      ? 'bg-amber-700 text-white border-amber-700 shadow-xs'
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
                className="w-full text-xs font-bold border border-gray-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                placeholder="Nhập số kg tùy ý"
              />
              <span className="text-xs font-semibold text-gray-500 shrink-0">kg</span>
            </div>
          </div>

          {/* Lựa chọn cách đóng gói bao bì */}
          <div className="mt-3">
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-gray-700">Quy cách bao:</label>
              <button
                type="button"
                onClick={() => setIsPackagingModalOpen(true)}
                className="text-[11px] font-bold text-amber-800 hover:text-amber-950 underline flex items-center gap-1"
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
              className="w-full text-xs font-medium border border-gray-300 rounded-lg px-2.5 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {product.packaging.map((pack) => (
                <option key={pack} value={pack}>{pack}</option>
              ))}
            </select>

            {/* Thông báo bao 5kg (chỉ hiện khi chọn bao 5kg) */}
            {is5kgPackaging && (
              selectedKg >= 1000 ? (
                <div className="mt-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <span>🎁</span>
                  <span>Đơn từ 1 tấn: Miễn phí 100% vỏ bao 5kg</span>
                </div>
              ) : (
                <div className="mt-1 text-[10px] text-amber-900 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <span>💡</span>
                  <span>Túi 5kg phụ thu: +300đ/kg (Đơn từ 1 tấn miễn phí)</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Tổng tiền tạm tính & nút thêm giỏ (nổi bật ngay trong tầm nhìn) */}
        <div className="pt-3 border-t border-gray-100">
          <div className="flex justify-between items-baseline mb-2.5">
            <div>
              <span className="text-xs text-gray-500 block">Tạm tính ({selectedKg}kg):</span>
            </div>
            <div className="text-right">
              <span className="text-lg font-black text-amber-800">
                {(currentPrice * selectedKg).toLocaleString('vi-VN')} đ
              </span>
              <span className="text-[10px] text-gray-500 font-semibold block">
                ({currentPrice.toLocaleString('vi-VN')} đ/kg)
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={onOpenDetails}
              className="p-2 text-gray-500 hover:text-amber-800 hover:bg-amber-50 border border-gray-200 rounded-xl transition shrink-0"
              title="Xem thông tin chi tiết hạt gạo"
            >
              <Info className="w-4 h-4" />
            </button>
            <button
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
          </div>
        </div>
      </div>

      {/* Modal chọn mẫu bao bì thực tế */}
      <PackagingModal
        isOpen={isPackagingModalOpen}
        onClose={() => setIsPackagingModalOpen(false)}
        selectedCategoryFilter={is5kgPackaging ? '5kg' : (selectedPackaging.includes('10kg') ? '10kg' : 'all')}
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
    <div className="bg-gradient-to-br from-emerald-900 via-emerald-950 to-teal-950 text-white rounded-2xl border-2 border-emerald-400/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative p-4 sm:p-5">
      <div className="absolute top-3 right-3 bg-amber-400 text-amber-950 text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
        <Sparkles className="w-3.5 h-3.5 fill-amber-950" /> Theo Yêu Cầu
      </div>

      <div>
        <div className="inline-block bg-white/15 text-emerald-200 text-xs font-bold px-2.5 py-1 rounded-md mb-2.5 border border-white/10">
          🌾 Phối Trộn & Đặt Riêng
        </div>

        <h3 className="text-xl font-black text-white leading-snug">
          Quý Đoàn Cần Phối Trộn Gạo Hoặc Tìm Loại Gạo Khác?
        </h3>

        <p className="text-xs text-emerald-100/90 mt-2 leading-relaxed">
          Kho nhận phối trộn theo công thức riêng của bếp ăn & cung cấp mọi loại gạo đặc thù theo yêu cầu của Quý đoàn:
        </p>

        <div className="mt-4 space-y-2.5 text-xs text-emerald-50">
          <div className="flex items-start gap-2 bg-white/10 p-2.5 rounded-xl border border-white/10">
            <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-200">Trộn gạo tỷ lệ riêng:</strong> 70% nở xốp 504 + 30% dẻo thơm (vừa dôi cơm vừa mềm, tối ưu chi phí bếp ăn).
            </div>
          </div>

          <div className="flex items-start gap-2 bg-white/10 p-2.5 rounded-xl border border-white/10">
            <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-200">Gạo đặc thù khác:</strong> Nếp cúng dường, Gạo Lứt đỏ, Gạo Đài Thơm 8, Nàng Hoa 9, Thơm Thái...
            </div>
          </div>

          <div className="flex items-start gap-2 bg-white/10 p-2.5 rounded-xl border border-white/10">
            <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-200">Quy cách túi riêng:</strong> Đóng túi 2kg, 3kg, in decal hoặc dán tên Đoàn thiện nguyện lên bao bì.
            </div>
          </div>
        </div>
      </div>

      {/* Nút hành động */}
      <div className="pt-5 border-t border-white/15 mt-5 space-y-2">
        <a
          href={ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-amber-950 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition transform active:scale-95"
        >
          <MessageCircle className="w-4 h-4 fill-amber-950" />
          <span>Nhắn Zalo Báo Giá Phối Trộn Riêng</span>
        </a>

        <a
          href={`tel:${PHONE_TEL}`}
          className="w-full py-2 px-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border border-white/15 transition active:scale-95"
        >
          <Phone className="w-3.5 h-3.5 text-amber-300" />
          <span>Hotline tư vấn kho: {PHONE_DISPLAY}</span>
        </a>
      </div>
    </div>
  );
};
