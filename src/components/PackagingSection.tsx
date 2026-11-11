'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PACKAGING_MODELS, PackagingModel } from '@/data/packagingData';
import { PackagingModal } from '@/components/PackagingModal';
import { Package, Sparkles, Eye, MessageCircle, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { ZALO_URL } from '@/data/site';

interface PackagingSectionProps {
  mode?: 'featured' | 'full';
}

const FEATURED_PACKAGING_IDS = [
  'pack-5kg-trong-suot-huong-lai',
  'pack-5kg-than-tai',
  'pack-10kg-hat-ngoc-thai',
  'pack-10kg-phuc-loc-tho',
];

export const PackagingSection: React.FC<PackagingSectionProps> = ({ mode = 'featured' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | '5kg' | '10kg'>('all');
  const [activeModel, setActiveModel] = useState<PackagingModel | null>(null);

  // 4 mẫu tiêu biểu nhất (2 mẫu 5kg quai xách + 2 mẫu 10kg may chỉ)
  const featuredModels = PACKAGING_MODELS.filter((item) =>
    FEATURED_PACKAGING_IDS.includes(item.id)
  );

  const displayList = mode === 'full'
    ? PACKAGING_MODELS.filter((item) => selectedFilter === 'all' || item.weightCategory === selectedFilter)
    : featuredModels;

  return (
    <section id="mau-bao-bi" className="py-12 sm:py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề & Giới thiệu tinh gọn */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Package className="w-3.5 h-3.5 text-amber-700" /> Bao Bì Từ Thiện Có Sẵn Tại Kho
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Mẫu Bao Bì Đẹp Mắt, May Chỉ Chắc Chắn
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Kho sẵn sàng hơn 16 mẫu túi quai xách 5kg (thấy rõ hạt gạo / in màu trang trọng) và bao 10kg may chỉ đáy chắc chắn, chống bục rách khi vận chuyển xa.
          </p>

          {/* Nút mở kho 16 mẫu ở đầu section */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs sm:text-sm rounded-xl border border-amber-200 transition shadow-xs active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Xem Trọn Bộ 16 Mẫu Bao Bì Thật Tại Kho</span>
              <ChevronRight className="w-4 h-4 text-amber-700" />
            </button>
          </div>
        </div>

        {/* Thanh cuộn ngang trên Mobile / Lưới 5 ô trên Desktop */}
        <div className="mt-8">
          {/* Gợi ý vuốt ngang trên mobile */}
          <div className="flex md:hidden items-center justify-between text-[11px] text-gray-500 mb-2 px-1">
            <span>4 mẫu tiêu biểu + kho 12 mẫu</span>
            <span className="text-amber-800 font-semibold">Vuốt ngang để xem ➔</span>
          </div>

          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-3 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 scrollbar-none">
            {displayList.map((model) => (
              <div
                key={model.id}
                onClick={() => setActiveModel(model)}
                className="w-[68vw] sm:w-[240px] md:w-auto shrink-0 md:shrink snap-center bg-white rounded-2xl border border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col justify-between cursor-pointer group"
              >
                {/* Hình ảnh */}
                <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-xs text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                    {model.weightCategory.toUpperCase()}
                  </div>
                  <div className="absolute top-2 right-2 bg-amber-800 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                    {model.tag}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white/95 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-amber-700" /> Phóng to
                    </span>
                  </div>
                </div>

                {/* Thông tin thẻ */}
                <div className="p-3 flex-1 flex flex-col justify-between bg-white space-y-1.5">
                  <div>
                    <h3 className="font-bold text-gray-900 text-xs leading-snug line-clamp-1 group-hover:text-amber-800 transition">
                      {model.name}
                    </h3>
                    <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                      {model.suitableFor}
                    </p>
                  </div>

                  <div className="pt-1.5 border-t border-gray-100 flex items-center justify-between text-[10px]">
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                      Chụp thật tại kho
                    </span>
                    <span className="text-amber-800 font-semibold group-hover:underline">
                      Xem chi tiết ➔
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Thẻ thứ 5: Kêu gọi xem 12 mẫu còn lại trong kho */}
            {mode === 'featured' && (
              <div
                onClick={() => setIsModalOpen(true)}
                className="w-[68vw] sm:w-[240px] md:w-auto shrink-0 md:shrink snap-center bg-gradient-to-br from-amber-50 to-orange-50/80 rounded-2xl border-2 border-dashed border-amber-300 hover:border-amber-500 hover:shadow-lg transition-all duration-200 p-4 sm:p-5 flex flex-col items-center justify-center text-center cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-3">
                  <Package className="w-6 h-6" />
                </div>
                <div className="text-xs font-black text-amber-900 uppercase tracking-wide">
                  +12 Mẫu Sẵn Kho
                </div>
                <h3 className="text-sm font-extrabold text-gray-900 mt-1">
                  Xem Trọn Bộ 16 Mẫu
                </h3>
                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed line-clamp-2">
                  Bao Thần Tài, Mai Vàng Tứ Quý, Long Lài, Bồ Câu Hòa Bình...
                </p>
                <button
                  type="button"
                  className="mt-3 px-3.5 py-1.5 bg-amber-700 group-hover:bg-amber-800 text-white text-xs font-bold rounded-xl shadow-xs transition"
                >
                  Mở Bộ Sưu Tập ➔
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Banner cam kết đóng gói tinh gọn */}
        <div className="mt-8 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950 text-white rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-bold bg-white/10 px-2.5 py-0.5 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5" /> Miễn Phí Đóng Gói 100%
            </div>
            <h3 className="text-base sm:text-lg font-black">
              Hỗ trợ đóng bao miễn phí: Túi 5kg, bao 10kg, 25kg, 50kg
            </h3>
            <p className="text-xs text-amber-100 max-w-2xl leading-relaxed">
              Giá niêm yết chuẩn theo quy cách bao 25kg. Quý đoàn cần chia túi nhỏ 5kg có quai xách hay dán tem decal tên đoàn, xưởng đều hỗ trợ miễn phí 100%.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-xs transition"
            >
              <MessageCircle className="w-4 h-4" /> Đặt Mẫu Riêng Qua Zalo
            </a>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex-1 sm:flex-none py-2.5 px-4 bg-white hover:bg-amber-50 text-amber-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1 shadow-xs transition"
            >
              Xem 16 Mẫu Kho
            </button>
          </div>
        </div>
      </div>

      {/* Modal thư viện 16 mẫu đầy đủ */}
      <PackagingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCategoryFilter="all"
      />

      {/* Lightbox phóng to mẫu khi bấm từ thanh trượt */}
      {activeModel && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setActiveModel(null)}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-md">
                  Quy cách {activeModel.weightCategory}
                </span>
                <h3 className="text-base font-black text-gray-900 mt-1">{activeModel.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{activeModel.description}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModel(null)}
                className="p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[3/4] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-inner">
              <Image
                src={activeModel.image}
                alt={activeModel.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 450px"
              />
            </div>

            <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs text-amber-950">
              <strong>Phù hợp cho:</strong> {activeModel.suitableFor}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setActiveModel(null);
                  setIsModalOpen(true);
                }}
                className="flex-1 py-2.5 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl text-xs text-center"
              >
                Xem Toàn Bộ 16 Mẫu
              </button>
              <button
                type="button"
                onClick={() => setActiveModel(null)}
                className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl text-xs"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
