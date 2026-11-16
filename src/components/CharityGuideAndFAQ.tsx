'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HOME_FAQS } from '@/data/site';
import { 
  BookOpen, 
  HelpCircle, 
  ChevronDown, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Flame, 
  Heart,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { BRAND_INFO } from '@/data/mockData';

export const CharityGuideAndFAQ: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = HOME_FAQS;

  return (
    <section id="kinh-nghiem-tu-thien" className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 border border-amber-300/80 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow-2xs">
            <BookOpen className="w-4 h-4 text-amber-700" /> Cẩm Nang & Kinh Nghiệm Mua Gạo Từ Thiện
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            Cách Chọn Đúng Loại Gạo & Dự Toán Chi Phí
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
            Kinh nghiệm đúc kết sau hơn 10 năm đồng hành cùng hàng nghìn chương trình thiện nguyện, bếp cơm 0 đồng và chùa viện trên toàn quốc.
          </p>
        </div>

        {/* 1. Hướng Dẫn Chọn Gạo Theo Mục Đích - 4 Thẻ Sang Trọng */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
          
          {/* Card 1: Hộ nghèo & Người già */}
          <div className="bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 rounded-3xl p-6 border-2 border-amber-200/90 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-bold shadow-md shadow-amber-600/20 shrink-0">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
                <span className="text-xs font-extrabold text-amber-900 bg-amber-100/90 border border-amber-200 px-2.5 py-1 rounded-lg uppercase tracking-wide">
                  Phát Quà Gia Đình
                </span>
              </div>
              <h3 className="text-lg font-black text-stone-900 mb-2">
                Gạo Nghĩa Tình / Thiện Lành
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                Cơm dẻo vừa, mềm ngọt, để nguội không bị cứng. Rất phù hợp khẩu vị số đông, người cao tuổi và các em nhỏ dễ ăn.
              </p>
            </div>
            <div>
              <div className="text-xs sm:text-sm text-emerald-900 font-bold border-t border-amber-200/80 pt-3 flex justify-between items-center mb-3">
                <span>Đóng bao:</span>
                <span className="bg-white px-2.5 py-0.5 rounded-md border border-amber-300 font-extrabold">5kg - 10kg</span>
              </div>
              <Link href="/gao-phat-qua-tu-thien/" className="text-xs sm:text-sm font-extrabold text-emerald-800 hover:text-emerald-950 flex items-center justify-between w-full group">
                <span>Cẩm nang chọn gạo phát quà</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </div>
          </div>

          {/* Card 2: Bếp ăn 0 đồng */}
          <div className="bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 rounded-3xl p-6 border-2 border-emerald-200/90 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-600/20 shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold text-emerald-900 bg-emerald-100/90 border border-emerald-200 px-2.5 py-1 rounded-lg uppercase tracking-wide">
                  Bếp Ăn & Quán Cơm
                </span>
              </div>
              <h3 className="text-lg font-black text-stone-900 mb-2">
                Gạo Sẻ Chia (Nở Xốp)
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                Đặc tính nở nhiều, rất dôi cơm, hạt cơm khô ráo chan canh không nhão. Tối đa hóa số suất cơm trên từng bao gạo với chi phí rẻ nhất.
              </p>
            </div>
            <div>
              <div className="text-xs sm:text-sm text-emerald-900 font-bold border-t border-emerald-200/80 pt-3 flex justify-between items-center mb-3">
                <span>Đóng bao:</span>
                <span className="bg-white px-2.5 py-0.5 rounded-md border border-emerald-300 font-extrabold">25kg - 50kg</span>
              </div>
              <Link href="/chon-gao-cho-bep-an-tu-thien/" className="text-xs sm:text-sm font-extrabold text-emerald-800 hover:text-emerald-950 flex items-center justify-between w-full group">
                <span>Bí quyết nấu dôi cơm 0 đồng</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </div>
          </div>

          {/* Card 3: Nấu cháo dinh dưỡng */}
          <div className="bg-gradient-to-br from-teal-50/70 via-white to-teal-50/30 rounded-3xl p-6 border-2 border-teal-200/90 hover:border-teal-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold shadow-md shadow-teal-600/20 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold text-teal-900 bg-teal-100/90 border border-teal-200 px-2.5 py-1 rounded-lg uppercase tracking-wide">
                  Nồi Cháo Bệnh Viện
                </span>
              </div>
              <h3 className="text-lg font-black text-stone-900 mb-2">
                Gạo Tấm Tình Thương
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                Hạt tấm nguyên phôi dinh dưỡng, nấu nhanh nhừ, nước cháo sánh mịn và ngọt thơm tự nhiên. Tiết kiệm thời gian ninh hầm cho tình nguyện viên.
              </p>
            </div>
            <div>
              <div className="text-xs sm:text-sm text-teal-900 font-bold border-t border-teal-200/80 pt-3 flex justify-between items-center mb-3">
                <span>Đóng bao:</span>
                <span className="bg-white px-2.5 py-0.5 rounded-md border border-teal-300 font-extrabold">10kg - 25kg</span>
              </div>
              <Link href="/chon-gao-cho-bep-an-tu-thien/#bang-gia-bep-an" className="text-xs sm:text-sm font-extrabold text-teal-800 hover:text-teal-950 flex items-center justify-between w-full group">
                <span>Xem bảng giá tấm nấu cháo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </div>
          </div>

          {/* Card 4: Cúng dường cao cấp */}
          <div className="bg-gradient-to-br from-purple-50/70 via-white to-purple-50/30 rounded-3xl p-6 border-2 border-purple-200/90 hover:border-purple-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-purple-600 text-white flex items-center justify-center font-bold shadow-md shadow-purple-600/20 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold text-purple-900 bg-purple-100/90 border border-purple-200 px-2.5 py-1 rounded-lg uppercase tracking-wide">
                  Cúng Dường & Biếu Tặng
                </span>
              </div>
              <h3 className="text-lg font-black text-stone-900 mb-2">
                Gạo ST25 Thượng Hạng
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                Hạt gạo dài bóng ngọc, vị cơm dẻo mềm hảo hạng thơm mùi lá dứa tự nhiên. Thể hiện trọn vẹn lòng thành kính khi dâng cúng Tam Bảo.
              </p>
            </div>
            <div>
              <div className="text-xs sm:text-sm text-purple-900 font-bold border-t border-purple-200/80 pt-3 flex justify-between items-center mb-3">
                <span>Đóng bao:</span>
                <span className="bg-white px-2.5 py-0.5 rounded-md border border-purple-300 font-extrabold">5kg - 25kg</span>
              </div>
              <Link href="/gao-cung-duong-chua/" className="text-xs sm:text-sm font-extrabold text-purple-800 hover:text-purple-950 flex items-center justify-between w-full group">
                <span>Gạo ST25 cúng dường chùa</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </div>
          </div>

        </div>

        {/* 2. Phần Hỏi - Đáp Thường Gặp (FAQ Accordion) */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-emerald-950 bg-emerald-100/90 border border-emerald-300/80 text-xs font-black px-3.5 py-1 rounded-full uppercase mb-2 shadow-2xs">
              <HelpCircle className="w-4 h-4 text-emerald-700" /> Thắc Mắc Thường Gặp
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
              Câu Hỏi Về Dịch Vụ Cung Cấp Gạo Từ Thiện
            </h3>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-stone-200/90 rounded-2xl overflow-hidden transition-all bg-white hover:border-amber-400 hover:shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-stone-900 hover:text-emerald-800 transition"
                >
                  <span className="flex items-center gap-3 pr-4 text-sm sm:text-base">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs font-black flex items-center justify-center shrink-0 border border-amber-300/80">
                      {idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-300 ${
                      openFaqIndex === idx ? 'rotate-180 text-emerald-700' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 border-t border-stone-100 pt-3.5 leading-relaxed font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick contact CTA */}
          <div className="mt-10 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-50/60 border-2 border-amber-300/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-black text-stone-900 text-sm sm:text-base">
                Quý đoàn cần hỗ trợ thêm thông tin hoặc mẫu gạo thực tế?
              </h4>
              <p className="text-xs text-stone-600 mt-1">
                Chúng tôi gửi mẫu gạo tận nơi miễn phí để Quý vị kiểm tra phẩm chất trước khi đặt.
              </p>
            </div>
            <a
              href={`tel:${BRAND_INFO.hotline.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-white font-black px-6 py-3 rounded-xl shadow-md shadow-emerald-700/20 text-xs sm:text-sm shrink-0 transition active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-amber-300" />
              Gọi Ngay: {BRAND_INFO.hotlineDisplay}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
