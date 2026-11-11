'use client';

import React from 'react';
import { CHARITY_COMMITMENTS } from '@/data/mockData';
import { BadgePercent, PackageCheck, Truck, FileText, Camera, ShieldCheck, Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';
import { ZALO_URL } from '@/data/site';

interface CommitmentVisual {
  icon: React.ReactNode;
  iconBg: string;
  tagStyle: string;
  cardBorder: string;
  numberColor: string;
  gradientBg: string;
}

const COMMITMENT_THEMES: Record<string, CommitmentVisual> = {
  BadgePercent: {
    icon: <BadgePercent className="w-5 h-5 sm:w-6 sm:h-6 text-amber-800" />,
    iconBg: 'bg-amber-100 text-amber-900 border-amber-200',
    tagStyle: 'bg-amber-100/90 text-amber-950 border-amber-300',
    cardBorder: 'border-amber-200 hover:border-amber-400 hover:shadow-amber-900/10',
    numberColor: 'text-amber-500',
    gradientBg: 'from-amber-50/60 via-white to-white',
  },
  PackageCheck: {
    icon: <PackageCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-800" />,
    iconBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    tagStyle: 'bg-emerald-100/90 text-emerald-950 border-emerald-300',
    cardBorder: 'border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-900/10',
    numberColor: 'text-emerald-500',
    gradientBg: 'from-emerald-50/60 via-white to-white',
  },
  Truck: {
    icon: <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-800" />,
    iconBg: 'bg-blue-100 text-blue-900 border-blue-200',
    tagStyle: 'bg-blue-100/90 text-blue-950 border-blue-300',
    cardBorder: 'border-blue-200 hover:border-blue-400 hover:shadow-blue-900/10',
    numberColor: 'text-blue-500',
    gradientBg: 'from-blue-50/60 via-white to-white',
  },
  FileText: {
    icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-purple-800" />,
    iconBg: 'bg-purple-100 text-purple-900 border-purple-200',
    tagStyle: 'bg-purple-100/90 text-purple-950 border-purple-300',
    cardBorder: 'border-purple-200 hover:border-purple-400 hover:shadow-purple-900/10',
    numberColor: 'text-purple-500',
    gradientBg: 'from-purple-50/60 via-white to-white',
  },
  Camera: {
    icon: <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-rose-800" />,
    iconBg: 'bg-rose-100 text-rose-900 border-rose-200',
    tagStyle: 'bg-rose-100/90 text-rose-950 border-rose-300',
    cardBorder: 'border-rose-200 hover:border-rose-400 hover:shadow-rose-900/10',
    numberColor: 'text-rose-500',
    gradientBg: 'from-rose-50/60 via-white to-white',
  },
  ShieldCheck: {
    icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-teal-800" />,
    iconBg: 'bg-teal-100 text-teal-900 border-teal-200',
    tagStyle: 'bg-teal-100/90 text-teal-950 border-teal-300',
    cardBorder: 'border-teal-200 hover:border-teal-400 hover:shadow-teal-900/10',
    numberColor: 'text-teal-500',
    gradientBg: 'from-teal-50/60 via-white to-white',
  },
};

export const PolicyCommitments: React.FC = () => {
  return (
    <section id="chinh-sach" className="py-16 sm:py-20 bg-gradient-to-b from-stone-50 via-white to-stone-50/60 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header khối */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 border border-amber-300/80 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-700 fill-amber-700" /> Đồng Hành Thiện Nguyện
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-stone-900 leading-tight tracking-tight">
            Chính Sách Hỗ Trợ Đặc Biệt Dành Cho Đoàn Từ Thiện
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
            Chúng tôi xem mỗi hạt gạo gửi đi là một phần phước lành. Cam kết phục vụ chu đáo từ khâu chọn gạo, đóng bao, giao hàng cho đến chứng từ tài chính minh bạch.
          </p>
        </div>

        {/* Lưới 6 Cam Kết Vàng: Màu sắc nhận diện riêng, tag cụ thể, tối ưu mobile gọn gàng */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CHARITY_COMMITMENTS.map((item, index) => {
            const theme = COMMITMENT_THEMES[item.icon] || COMMITMENT_THEMES.ShieldCheck;
            const itemNumber = (index + 1).toString().padStart(2, '0');
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${theme.gradientBg} p-5 sm:p-6 rounded-2xl border-2 ${theme.cardBorder} shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div>
                  {/* Hàng đầu: Icon + Số thứ tự + Tag cam kết */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${theme.iconBg} border flex items-center justify-center shrink-0 shadow-2xs`}>
                        {theme.icon}
                      </div>
                      <span className={`text-base font-black ${theme.numberColor}`}>
                        #{itemNumber}
                      </span>
                    </div>

                    {item.tag && (
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border shadow-2xs ${theme.tagStyle}`}>
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* Tiêu đề cam kết */}
                  <h3 className="text-base sm:text-lg font-black text-gray-900 leading-snug">
                    {item.title}
                  </h3>

                  {/* Mô tả chi tiết */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>

                {/* Điểm nhấn mấu chốt dưới đáy thẻ */}
                {item.keyPoint && (
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item.keyPoint}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Banner hỗ trợ in bao bì */}
        <div className="mt-10 sm:mt-14 bg-gradient-to-r from-[#451a03] via-[#78350f] to-[#1c0c03] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-amber-400/40 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left relative z-10">
            <span className="inline-block bg-white/20 text-amber-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-1">
              🌾 Dịch Vụ Độc Quyền Cho Mạnh Thường Quân
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Cần In Ấn Decal / Tên Đoàn Lên Từng Túi Gạo?
            </h3>
            <p className="text-amber-100 text-xs sm:text-sm max-w-xl leading-relaxed font-normal">
              Hỗ trợ thiết kế maquette và in ấn thông điệp từ thiện, tên Mạnh Thường Quân hoặc logo Doanh nghiệp dán trên từng bao 5kg – 10kg để buổi phát quà thêm trang trọng và ý nghĩa.
            </p>
          </div>
          <a
            href="https://zalo.me/0762234135?text=%C4%90o%C3%A0n%20c%E1%BA%A7n%20nh%E1%BA%ADn%20m%E1%BA%ABu%20thi%E1%BA%BFt%20k%E1%BA%BF%20Decal%20in%20t%C3%AAn%20%C4%91o%C3%A0n%20d%C3%A1n%20l%C3%AAn%20bao%20g%E1%BA%A1o%20t%E1%BB%AB%20thi%E1%BB%87n"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-amber-950 font-black px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition transform hover:-translate-y-0.5 active:scale-95 text-xs sm:text-sm flex items-center gap-2 relative z-10 border border-amber-300/40"
          >
            <MessageCircle className="w-4 h-4 fill-amber-950" />
            <span>Nhắn Zalo Nhận Thiết Kế Mẫu Miễn Phí</span>
          </a>
        </div>

      </div>
    </section>
  );
};
