'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, MapPin, ExternalLink, ShieldCheck, CheckCircle2, MessageCircle, Heart, X, Eye, ThumbsUp } from 'lucide-react';
import { GOOGLE_MAPS_PLACE_URL, PHONE_DISPLAY, ZALO_URL } from '@/data/site';

interface ReviewItem {
  id: string;
  author: string;
  avatarText: string;
  avatarBg: string;
  badge: string;
  isLocalGuide?: boolean;
  rating: number;
  time: string;
  comment: string;
  highlightTag: string;
  screenshot: string;
  attachedPhoto?: {
    src: string;
    caption: string;
  };
  likes?: number;
  reply?: {
    author: string;
    time: string;
    text: string;
  };
}

const REVIEWS: ReviewItem[] = [
  {
    id: 'le-ut-du',
    author: 'LE UT DU (ludu)',
    avatarText: 'LU',
    avatarBg: 'bg-amber-600',
    badge: 'Local Guide · 105 bài đánh giá · 289 ảnh',
    isLocalGuide: true,
    rating: 5,
    time: '7 tháng trước',
    comment: 'gạo ngon giá oki',
    highlightTag: 'Ảnh hạt gạo thực tế',
    screenshot: '/danh-gia/review-leutdu.png',
    attachedPhoto: {
      src: '/danh-gia/anh-gao-leutdu.png',
      caption: 'Ảnh hạt gạo dài, trắng đều được khách chụp trực tiếp trên tay',
    },
    likes: 1,
  },
  {
    id: 'di-mery',
    author: 'Dĩ Mery2022',
    avatarText: 'DM',
    avatarBg: 'bg-sky-600',
    badge: '2 bài đánh giá',
    rating: 5,
    time: '5 tháng trước',
    comment: 'ST24 dẻo vừa, phù hợp nhà mình thích ăn cơm mềm.',
    highlightTag: 'Gạo ST24 dẻo ngọt',
    screenshot: '/danh-gia/review-dimery.png',
    likes: 2,
    reply: {
      author: 'Vựa Gạo Sóc Trăng (Chủ sở hữu)',
      time: '5 tháng trước',
      text: 'cảm ơn chị',
    },
  },
  {
    id: 'trang-tang',
    author: 'Trang Tăng',
    avatarText: 'TT',
    avatarBg: 'bg-rose-600',
    badge: '2 bài đánh giá',
    rating: 5,
    time: '5 tháng trước',
    comment: 'Nhân viên nhắn tin báo trước khi giao, không phải chờ mù.',
    highlightTag: 'Giao hàng đúng hẹn',
    screenshot: '/danh-gia/review-trangtang.png',
    likes: 2,
    reply: {
      author: 'Vựa Gạo Sóc Trăng (Chủ sở hữu)',
      time: '5 tháng trước',
      text: 'cảm ơn chị',
    },
  },
  {
    id: 'quang-thanh-bui',
    author: 'Quang Thanh Bui',
    avatarText: 'QB',
    avatarBg: 'bg-emerald-600',
    badge: '2 bài đánh giá',
    rating: 5,
    time: '5 tháng trước',
    comment: 'Nhà có người lớn tuổi nên khá kỹ khi chọn gạo, may mắn biết được Vựa Gạo Sóc Trăng, cơm nấu lên mềm vừa phải, ăn không bị khô.',
    highlightTag: 'Cơm mềm, hợp người già',
    screenshot: '/danh-gia/review-quangthanh.png',
    likes: 1,
    reply: {
      author: 'Vựa Gạo Sóc Trăng (Chủ sở hữu)',
      time: '5 tháng trước',
      text: 'dạ vâng',
    },
  },
  {
    id: 'ma-bach',
    author: 'Mã Bach',
    avatarText: 'MB',
    avatarBg: 'bg-purple-600',
    badge: '2 bài đánh giá',
    rating: 5,
    time: '5 tháng trước',
    comment: 'Mua thử 5kg, nấu được thì đặt thêm 10kg liền. Hài lòng.',
    highlightTag: 'Khách mua thử rồi đặt tiếp',
    screenshot: '/danh-gia/review-mabach.png',
    likes: 1,
    reply: {
      author: 'Vựa Gạo Sóc Trăng (Chủ sở hữu)',
      time: '5 tháng trước',
      text: 'mua tiếp nha a',
    },
  },
];

export const GoogleReviews: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-stone-50 via-amber-50/30 to-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            Đánh Giá Khách Hàng Trên Google Maps
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            Khách Hàng Nói Gì Về Vựa Gạo Sóc Trăng?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            Phản hồi thực tế 100% từ người tiêu dùng, các gia đình và các đoàn thiện nguyện đã trải nghiệm chất lượng gạo và dịch vụ giao hàng tận nơi của chúng tôi.
          </p>

          {/* Điểm xếp hạng tổng quan */}
          <div className="mt-5 inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-base font-black text-gray-900">5.0 / 5.0</span>
            <span className="text-gray-300">|</span>
            <span className="text-xs sm:text-sm font-semibold text-emerald-700 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Đã xác minh trên Google Maps
            </span>
          </div>
        </div>

        {/* Danh sách thẻ đánh giá */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header thẻ: Avatar, Tên, Badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${review.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-sm flex-shrink-0`}
                    >
                      {review.avatarText}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm leading-tight flex items-center gap-1.5">
                        {review.author}
                        {review.isLocalGuide && (
                          <span className="inline-flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
                            ★ Local Guide
                          </span>
                        )}
                      </h3>
                      <p className="text-[11px] text-gray-500 mt-0.5">{review.badge}</p>
                    </div>
                  </div>

                  {/* Nút xem ảnh chụp màn hình gốc */}
                  <button
                    onClick={() => setSelectedScreenshot(review.screenshot)}
                    title="Xem ảnh chụp màn hình gốc từ Google Maps"
                    className="text-xs text-stone-500 hover:text-emerald-700 bg-stone-50 hover:bg-stone-100 px-2 py-1 rounded-lg border border-stone-200 flex items-center gap-1 transition-colors flex-shrink-0"
                  >
                    <Eye className="w-3 h-3" />
                    <span className="hidden sm:inline">Ảnh gốc</span>
                  </button>
                </div>

                {/* Số sao & thời gian */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-gray-400">{review.time}</span>
                </div>

                {/* Nội dung đánh giá */}
                <p className="text-sm text-gray-800 leading-relaxed font-medium mb-3">
                  &ldquo;{review.comment}&rdquo;
                </p>

                {/* Ảnh đính kèm (nếu có, như card LE UT DU) */}
                {review.attachedPhoto && (
                  <div className="mb-3 rounded-xl overflow-hidden border border-stone-200 bg-stone-50 p-2">
                    <div className="relative h-44 w-full rounded-lg overflow-hidden cursor-pointer" onClick={() => setSelectedScreenshot(review.attachedPhoto!.src)}>
                      <Image
                        src={review.attachedPhoto.src}
                        alt="Ảnh gạo thực tế do khách hàng chụp"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1.5 italic text-center">
                      📸 {review.attachedPhoto.caption}
                    </p>
                  </div>
                )}
              </div>

              {/* Phần phản hồi của Vựa Gạo Sóc Trăng */}
              <div className="pt-3 border-t border-stone-100 mt-2">
                {review.reply ? (
                  <div className="bg-stone-50 rounded-xl p-2.5 text-xs text-gray-600 border border-stone-200/70">
                    <div className="font-bold text-gray-900 flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        {review.reply.author}
                      </span>
                      <span className="text-[10px] text-gray-400 font-normal">{review.reply.time}</span>
                    </div>
                    <p className="mt-1 text-gray-700 italic">&ldquo;{review.reply.text}&rdquo;</p>
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      ✓ {review.highlightTag}
                    </span>
                    <span className="text-gray-400">Google Maps Review</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Nút bấm chuyển sang xem trực tiếp Google Maps */}
        <div className="mt-10 text-center flex flex-wrap items-center justify-center gap-4">
          <a
            href={GOOGLE_MAPS_PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            <MapPin className="w-4 h-4 text-emerald-200" />
            Xem Tất Cả Đánh Giá Trên Google Maps
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-stone-50 text-gray-800 font-bold text-sm border border-stone-300 shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            Liên Hệ Đặt Gạo Qua Zalo
          </a>
        </div>
      </div>

      {/* Lightbox Modal xem ảnh chụp màn hình gốc */}
      {selectedScreenshot && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div
            className="relative bg-stone-900 rounded-2xl max-w-lg w-full p-4 border border-stone-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3 text-white pb-2 border-b border-stone-800">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Ảnh chụp màn hình Google Maps thực tế
              </span>
              <button
                onClick={() => setSelectedScreenshot(null)}
                className="p-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative w-full rounded-xl overflow-hidden bg-black flex items-center justify-center min-h-[240px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedScreenshot}
                alt="Ảnh chụp màn hình đánh giá Google Maps"
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>

            <p className="mt-3 text-[11px] text-gray-400 text-center">
              Chụp trực tiếp từ trang Google Maps của Vựa Gạo Sóc Trăng.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
