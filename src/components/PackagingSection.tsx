'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PACKAGING_MODELS, PackagingModel } from '@/data/packagingData';
import { Package, Sparkles, Eye, CheckCircle2, PhoneCall, MessageCircle, X } from 'lucide-react';

export const PackagingSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | '5kg' | '10kg'>('all');
  const [activeModel, setActiveModel] = useState<PackagingModel | null>(null);

  const filteredList = PACKAGING_MODELS.filter((item) => {
    if (filter === 'all') return true;
    return item.weightCategory === filter;
  });

  return (
    <section id="mau-bao-bi" className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề & Giới thiệu */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Package className="w-4 h-4 text-amber-700" /> Danh Sách Mẫu Bao Bì Có Sẵn Tại Kho
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Quý Đoàn Tùy Ý Chọn Mẫu Bao Bì Phù Hợp
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Kho gạo Vựa Gạo Sóc Trăng sẵn sàng hơn 16 mẫu bao bì đẹp mắt, trang trọng (túi quai xách 5kg, bao 10kg may chỉ đáy chắc chắn, túi trong suốt thấy rõ hạt gạo). Quý đoàn có thể chọn mẫu yêu thích cho chương trình thiện nguyện của mình.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs ${
                filter === 'all'
                  ? 'bg-amber-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tất Cả Các Mẫu ({PACKAGING_MODELS.length})
            </button>
            <button
              onClick={() => setFilter('5kg')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs ${
                filter === '5kg'
                  ? 'bg-amber-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Túi 5kg Quai Xách Quà Tặng ({PACKAGING_MODELS.filter((p) => p.weightCategory === '5kg').length})
            </button>
            <button
              onClick={() => setFilter('10kg')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs ${
                filter === '10kg'
                  ? 'bg-amber-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Bao 10kg Gia Đình ({PACKAGING_MODELS.filter((p) => p.weightCategory === '10kg').length})
            </button>
          </div>
        </div>

        {/* Lưới hiển thị các mẫu bao bì */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
          {filteredList.map((model) => (
            <div
              key={model.id}
              className="bg-white rounded-2xl border border-gray-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Hình ảnh */}
              <div
                className="relative aspect-[3/4] bg-gray-100 overflow-hidden cursor-pointer"
                onClick={() => setActiveModel(model)}
              >
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
                  {model.weightCategory.toUpperCase()}
                </div>
                <div className="absolute top-2.5 right-2.5 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                  {model.tag}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" /> Phóng to ảnh
                  </span>
                </div>
              </div>

              {/* Thông tin */}
              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm line-clamp-1 group-hover:text-amber-800 transition-colors">
                    {model.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 line-clamp-2 mt-1">
                    {model.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md line-clamp-1">
                    {model.suitableFor}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner cam kết đóng gói */}
        <div className="mt-12 bg-gradient-to-r from-amber-800 to-amber-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-bold bg-white/10 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4" /> Cam Kết Chất Lượng Đóng Bao
            </div>
            <h3 className="text-xl sm:text-2xl font-black">
              Đơn Từ 1 Tấn: Tài Trợ 100% Bao 5kg In Màu & May Chỉ
            </h3>
            <p className="text-xs sm:text-sm text-amber-100 max-w-2xl leading-relaxed">
              Bao 10kg, 25kg, 50kg luôn miễn phí 100%. Quý đoàn cần in tên đoàn riêng, dán tem decal lời chúc hoặc chia nhỏ túi 2kg, 3kg, xưởng đóng gói chúng tôi đều đáp ứng theo yêu cầu.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="https://zalo.me/0762234135"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition"
            >
              <MessageCircle className="w-4 h-4" /> Yêu Cầu Mẫu Bao Bì Riêng Qua Zalo
            </a>
            <a
              href="#bang-gia-gao"
              className="py-3 px-5 bg-white hover:bg-amber-50 text-amber-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md transition"
            >
              Chọn Loại Gạo Ngay
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox phóng to */}
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
              <a
                href="#bang-gia-gao"
                onClick={() => setActiveModel(null)}
                className="flex-1 py-2.5 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl text-xs text-center"
              >
                Đặt Mua Loại Gạo Này
              </a>
              <button
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
