'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PACKAGING_MODELS, PackagingModel } from '@/data/packagingData';
import { X, Check, Eye, Package, Sparkles } from 'lucide-react';

interface PackagingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategoryFilter?: '5kg' | '10kg' | 'all';
  currentSelectedModelId?: string;
  onSelectModel?: (model: PackagingModel) => void;
}

export const PackagingModal: React.FC<PackagingModalProps> = ({
  isOpen,
  onClose,
  selectedCategoryFilter = 'all',
  currentSelectedModelId,
  onSelectModel,
}) => {
  const [filter, setFilter] = useState<'all' | '5kg' | '10kg'>(selectedCategoryFilter);
  const [previewModel, setPreviewModel] = useState<PackagingModel | null>(null);

  if (!isOpen) return null;

  const filteredList = PACKAGING_MODELS.filter((item) => {
    if (filter === 'all') return true;
    return item.weightCategory === filter;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-100 bg-amber-50/70 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-600 text-white rounded-2xl shadow-sm">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-gray-900">
                Kho Mẫu Bao Bì Từ Thiện Có Sẵn (5kg & 10kg)
              </h3>
              <p className="text-xs text-gray-600">
                Chụp thật 100% tại xưởng may kho Vựa Gạo Sóc Trăng • Có quai xách tiện lợi & may chỉ kép chống bục
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="px-4 sm:px-6 py-3 border-b border-gray-100 flex items-center justify-between bg-white gap-2">
          <div className="flex gap-1.5 sm:gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                filter === 'all'
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Tất Cả ({PACKAGING_MODELS.length})
            </button>
            <button
              onClick={() => setFilter('5kg')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                filter === '5kg'
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Túi 5kg Quà Tặng ({PACKAGING_MODELS.filter((p) => p.weightCategory === '5kg').length})
            </button>
            <button
              onClick={() => setFilter('10kg')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                filter === '10kg'
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Bao 10kg Gia Đình ({PACKAGING_MODELS.filter((p) => p.weightCategory === '10kg').length})
            </button>
          </div>
          <span className="text-[11px] text-emerald-700 font-bold hidden sm:inline-flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5" /> Miễn phí đóng gói đơn từ 1 tấn
          </span>
        </div>

        {/* Grid List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50/50">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredList.map((model) => {
              const isSelected = currentSelectedModelId === model.id;
              return (
                <div
                  key={model.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden flex flex-col justify-between group hover:shadow-lg ${
                    isSelected ? 'border-amber-600 ring-2 ring-amber-500/30' : 'border-gray-200 hover:border-amber-300'
                  }`}
                >
                  {/* Image container */}
                  <div
                    className="relative aspect-[3/4] bg-gray-100 cursor-pointer overflow-hidden"
                    onClick={() => setPreviewModel(model)}
                  >
                    <Image
                      src={model.image}
                      alt={model.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {model.weightCategory.toUpperCase()}
                    </div>
                    <div className="absolute top-2 right-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                      {model.tag}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="bg-white/90 text-gray-800 text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-md">
                        <Eye className="w-3.5 h-3.5" /> Xem lớn
                      </span>
                    </div>
                  </div>

                  {/* Info & action */}
                  <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs leading-snug line-clamp-1">
                        {model.name}
                      </h4>
                      <p className="text-[11px] text-gray-500 line-clamp-2 mt-1">
                        {model.suitableFor}
                      </p>
                    </div>

                    {onSelectModel ? (
                      <button
                        onClick={() => {
                          onSelectModel(model);
                          onClose();
                        }}
                        className={`w-full py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                          isSelected
                            ? 'bg-emerald-600 text-white'
                            : 'bg-amber-100 hover:bg-amber-700 text-amber-900 hover:text-white'
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Đã Chọn Mẫu Này
                          </>
                        ) : (
                          'Chọn Mẫu Này'
                        )}
                      </button>
                    ) : (
                      <button
                        onClick={() => setPreviewModel(model)}
                        className="w-full py-1.5 px-3 rounded-xl text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 text-center"
                      >
                        Xem Chi Tiết Mẫu
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info */}
        <div className="p-3 sm:p-4 border-t border-gray-100 bg-white flex flex-wrap items-center justify-between text-xs text-gray-500 gap-2">
          <span>
            💡 Quý đoàn cần in tên đoàn / dán decal riêng hoặc túi 2kg, 3kg vui lòng liên hệ Zalo: <strong className="text-amber-800">0762 234 135</strong>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-gray-900 text-white font-bold rounded-xl text-xs hover:bg-gray-800"
          >
            Đóng Lại
          </button>
        </div>
      </div>

      {/* Lightbox xem ảnh lớn */}
      {previewModel && (
        <div
          className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setPreviewModel(null)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-md">
                  Quy cách {previewModel.weightCategory}
                </span>
                <h3 className="text-lg font-black text-gray-900 mt-1">{previewModel.name}</h3>
                <p className="text-xs text-gray-500">{previewModel.description}</p>
              </div>
              <button
                onClick={() => setPreviewModel(null)}
                className="p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[3/4] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-inner">
              <Image
                src={previewModel.image}
                alt={previewModel.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>

            <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs text-amber-950">
              <strong>Phù hợp nhất cho:</strong> {previewModel.suitableFor}
            </div>

            {onSelectModel && (
              <button
                onClick={() => {
                  onSelectModel(previewModel);
                  setPreviewModel(null);
                  onClose();
                }}
                className="w-full py-3 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition"
              >
                <Check className="w-4 h-4" /> Xác Nhận Chọn Mẫu Bao Bì Này Cho Đơn
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
