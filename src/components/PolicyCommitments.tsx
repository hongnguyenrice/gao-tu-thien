'use client';

import React from 'react';
import { CHARITY_COMMITMENTS } from '@/data/mockData';
import { BadgePercent, PackageCheck, Truck, FileText, Camera, ShieldCheck } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  BadgePercent: <BadgePercent className="w-6 h-6 text-amber-700" />,
  PackageCheck: <PackageCheck className="w-6 h-6 text-emerald-700" />,
  Truck: <Truck className="w-6 h-6 text-blue-700" />,
  FileText: <FileText className="w-6 h-6 text-purple-700" />,
  Camera: <Camera className="w-6 h-6 text-rose-700" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-teal-700" />,
};

export const PolicyCommitments: React.FC = () => {
  return (
    <section id="chinh-sach" className="py-16 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-amber-700 font-bold text-xs uppercase tracking-widest bg-amber-100/80 px-3 py-1 rounded-full">
            Đồng Hành Thiện Nguyện
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
            Chính Sách Hỗ Trợ Đặc Biệt Dành Cho Đoàn Từ Thiện
          </h2>
          <p className="mt-3 text-gray-600 text-base">
            Chúng tôi xem mỗi hạt gạo gửi đi là một phần phước lành. Cam kết phục vụ chu đáo từ khâu chọn gạo, đóng bao, giao hàng cho đến chứng từ tài chính.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHARITY_COMMITMENTS.map((item, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-5">
                {iconMap[item.icon] || <ShieldCheck className="w-6 h-6 text-amber-700" />}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Banner hỗ trợ in bao bì */}
        <div className="mt-12 bg-gradient-to-r from-amber-700 via-amber-800 to-amber-950 text-white rounded-3xl p-8 lg:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black">Cần In Ấn Decal / Tên Đoàn Lên Từng Túi Gạo?</h3>
            <p className="text-amber-200 text-sm max-w-xl">
              Hỗ trợ in ấn thông điệp từ thiện, tên Mạnh Thường Quân hoặc logo Doanh nghiệp dán trên từng bao 5kg - 10kg để buổi phát quà thêm trang trọng và ý nghĩa.
            </p>
          </div>
          <a
            href="https://zalo.me/0909123456"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-amber-900 hover:bg-amber-50 font-bold px-6 py-3.5 rounded-xl shadow-md transition"
          >
            Nhắn Zalo Nhận Thiết Kế Mẫu
          </a>
        </div>
      </div>
    </section>
  );
};
