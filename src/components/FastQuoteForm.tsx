'use client';

import React, { useState } from 'react';
import { RICE_PRODUCTS } from '@/data/mockData';
import { Calculator, CheckCircle2, Send, PhoneCall, MessageCircle, Loader2, Sparkles, ShieldCheck } from 'lucide-react';
import { sendQuoteToTelegram } from '@/lib/telegram';
import { trackLeadSubmit } from '@/lib/analytics';

export const FastQuoteForm: React.FC = () => {
  const [selectedRiceId, setSelectedRiceId] = useState<string>(RICE_PRODUCTS[0].id);
  const [volumeKg, setVolumeKg] = useState<number>(500);
  const [packagingType, setPackagingType] = useState<string>('Bao 10kg');
  const [deliveryLocation, setDeliveryLocation] = useState<string>('TP. Hồ Chí Minh');
  const [deliveryDate, setDeliveryDate] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerOrg, setCustomerOrg] = useState<string>('');
  const [needVat, setNeedVat] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const selectedProduct = RICE_PRODUCTS.find((p) => p.id === selectedRiceId) || RICE_PRODUCTS[0];

  // Tính giá theo volume
  const calculatePrice = () => {
    let price = selectedProduct.pricePerKg;
    const sorted = [...selectedProduct.tiers].sort((a, b) => b.minKg - a.minKg);
    for (const tier of sorted) {
      if (volumeKg >= tier.minKg) {
        price = tier.pricePerKg;
        break;
      }
    }
    return price;
  };

  const unitPrice = calculatePrice();
  const subtotal = unitPrice * volumeKg;
  const vatAmount = needVat ? subtotal * 0.05 : 0; // VAT gạo thông thường 5%
  const totalEstimated = subtotal + vatAmount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerPhone) {
      alert('Vui lòng nhập số điện thoại để nhận bảng dự toán qua Zalo/SMS.');
      return;
    }

    setIsSubmitting(true);
    try {
      trackLeadSubmit(selectedProduct.name, volumeKg);
      await sendQuoteToTelegram({
        customerName: customerName || 'Khách hỏi báo giá',
        customerPhone,
        customerOrg,
        riceName: selectedProduct.name,
        volumeKg,
        packagingType,
        unitPrice,
        totalEstimated,
        needVat,
        deliveryLocation,
        deliveryDate,
      });
    } catch (err) {
      console.error('Lỗi khi gửi báo giá qua Telegram:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <section id="bao-gia-nhanh" className="py-16 sm:py-20 bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-100/60 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-amber-300/80 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-12">
            {/* Cột trái: Máy tính dự toán ngân sách */}
            <div className="lg:col-span-7 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-stone-200/80">
              <div className="inline-flex items-center gap-2 text-amber-900 bg-amber-100/90 border border-amber-300/80 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                <Calculator className="w-4 h-4 text-amber-700" /> Công Cụ Tính Dự Toán Ngân Sách
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight">
                Tính Nhanh Chi Phí Gạo Từ Thiện
              </h2>
              <p className="text-sm text-stone-600 mt-2 font-normal">
                Điều chỉnh loại gạo, số lượng và quy cách đóng gói để xem dự toán kinh phí chuẩn xác cho chương trình thiện nguyện của Quý đoàn.
              </p>

              <div className="mt-8 space-y-6">
                {/* Chọn loại gạo */}
                <div>
                  <label htmlFor="select-rice-type" className="block text-xs font-bold text-stone-800 mb-2">
                    1. Loại Gạo Dự Kiến Sử Dụng:
                  </label>
                  <select
                    id="select-rice-type"
                    name="riceType"
                    aria-label="1. Loại Gạo Dự Kiến Sử Dụng"
                    value={selectedRiceId}
                    onChange={(e) => setSelectedRiceId(e.target.value)}
                    className="w-full text-sm font-bold border border-stone-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-2xs"
                  >
                    {RICE_PRODUCTS.map((rice) => (
                      <option key={rice.id} value={rice.id}>
                        {rice.name} ({rice.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Chọn số lượng kg */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="volume-slider" className="text-xs font-bold text-stone-800">
                      2. Tổng Số Lượng Cần (Kg):
                    </label>
                    <span className="text-sm font-black text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-lg">
                      {volumeKg.toLocaleString('vi-VN')} kg ({volumeKg >= 1000 ? `${(volumeKg/1000).toFixed(1)} tấn` : `${volumeKg} kg`})
                    </span>
                  </div>

                  <input
                    id="volume-slider"
                    name="volumeKg"
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={volumeKg}
                    onChange={(e) => setVolumeKg(Number(e.target.value))}
                    aria-label="2. Tổng Số Lượng Cần (Kg)"
                    className="w-full accent-amber-600 h-2 bg-stone-200 rounded-lg cursor-pointer"
                  />

                  <div className="flex gap-2 mt-2.5 flex-wrap">
                    {[300, 500, 1000, 2000, 5000].map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setVolumeKg(v)}
                        className={`text-xs px-3 py-1.5 rounded-xl border font-bold transition ${
                          volumeKg === v
                            ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white border-amber-700 shadow-xs'
                            : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                        }`}
                      >
                        {v >= 1000 ? `${v / 1000} Tấn` : `${v} kg`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quy cách đóng gói & Khu vực giao */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="select-packaging" className="block text-xs font-bold text-stone-800 mb-2">
                      3. Quy Cách Đóng Bao:
                    </label>
                    <select
                      id="select-packaging"
                      name="packaging"
                      aria-label="3. Quy Cách Đóng Bao"
                      value={packagingType}
                      onChange={(e) => setPackagingType(e.target.value)}
                      className="w-full text-xs font-semibold border border-stone-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-2xs"
                    >
                      <option value="Bao 5kg">Túi 5kg (Thích hợp chia hộ gia đình)</option>
                      <option value="Bao 10kg">Bao 10kg (Phổ biến nhất)</option>
                      <option value="Bao 25kg">Bao 25kg (Tiết kiệm)</option>
                      <option value="Bao 50kg">Bao 50kg (Bếp ăn lớn / Nấu cháo)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="select-delivery" className="block text-xs font-bold text-stone-800 mb-2">
                      4. Khu Vực Giao Hàng:
                    </label>
                    <select
                      id="select-delivery"
                      name="delivery"
                      aria-label="4. Khu Vực Giao Hàng"
                      value={deliveryLocation}
                      onChange={(e) => setDeliveryLocation(e.target.value)}
                      className="w-full text-xs font-semibold border border-stone-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-2xs"
                    >
                      <option value="TP. Hồ Chí Minh">Nội thành TP. Hồ Chí Minh (Giao hỏa tốc)</option>
                      <option value="Bình Dương / Đồng Nai">Bình Dương / Đồng Nai / Long An</option>
                      <option value="Tây Nam Bộ">Các tỉnh Miền Tây Nam Bộ</option>
                      <option value="Tây Nguyên / Miền Trung">Tây Nguyên / Miền Trung (Xe tải ghép)</option>
                    </select>
                  </div>
                </div>

                {/* Hóa đơn VAT */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="vat-calc"
                    checked={needVat}
                    onChange={(e) => setNeedVat(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded-sm focus:ring-emerald-500"
                  />
                  <label htmlFor="vat-calc" className="text-xs font-semibold text-stone-700 cursor-pointer">
                    Cần xuất hoá đơn tài chính VAT 5% (để quyết toán với công ty / quỹ từ thiện)
                  </label>
                </div>
              </div>

              {/* Bảng tổng kết dự toán cao cấp */}
              <div className="mt-8 bg-gradient-to-br from-amber-50/80 via-white to-amber-50/50 p-6 rounded-2xl border border-amber-200/90 shadow-xs">
                <div className="space-y-2.5 text-xs text-stone-600">
                  <div className="flex justify-between">
                    <span className="font-medium">Đơn giá áp dụng:</span>
                    <span className="font-bold text-stone-900">{unitPrice.toLocaleString('vi-VN')} đ/kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Số lượng suất quà tương đương:</span>
                    <span className="font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {packagingType === 'Bao 5kg' ? `${Math.floor(volumeKg / 5)} phần (5kg)` : `${Math.floor(volumeKg / 10)} phần (10kg)`}
                    </span>
                  </div>
                  {needVat && (
                    <div className="flex justify-between">
                      <span className="font-medium">Thuế VAT dự kiến (5%):</span>
                      <span className="font-bold text-stone-900">{vatAmount.toLocaleString('vi-VN')} đ</span>
                    </div>
                  )}
                  <div className="pt-3 border-t border-amber-200/80 flex justify-between items-baseline text-sm">
                    <span className="font-black text-stone-900 text-sm sm:text-base">Tổng Dự Toán Ngân Sách:</span>
                    <span className="text-2xl sm:text-3xl font-black text-amber-900">
                      {totalEstimated.toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cột phải: Form gửi yêu cầu và nhận báo giá */}
            <div className="lg:col-span-5 p-6 sm:p-10 bg-gradient-to-br from-[#063323] via-[#094330] to-[#04281c] text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-emerald-700/40">
              <div>
                <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 fill-amber-300" /> Báo Giá Chính Thức Có Dấu Mộc
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-1.5 text-white">Gửi Yêu Cầu Báo Giá</h3>
                <p className="text-xs text-emerald-100/80 mb-6 leading-relaxed">
                  Để lại thông tin, chuyên viên gạo sẽ liên hệ qua Zalo hoặc điện thoại gửi file báo giá có dấu mộc sau 5 phút.
                </p>

                {isSubmitted ? (
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h4 className="font-bold text-lg text-white">Đã Gửi Báo Giá Đến Kho Thành Công!</h4>
                    <p className="text-xs text-amber-100 leading-relaxed">
                      Thông tin yêu cầu của Quý đoàn <strong>{customerOrg || customerName}</strong> ({volumeKg.toLocaleString('vi-VN')} kg {selectedProduct.name}) đã được chuyển thẳng tới Telegram ban quản lý kho.
                    </p>

                    <div className="bg-black/20 p-3 rounded-xl text-left text-xs space-y-1 border border-white/10">
                      <div><strong>Người nhận báo giá:</strong> {customerName} - {customerPhone}</div>
                      <div><strong>Dự toán sơ bộ:</strong> {totalEstimated.toLocaleString('vi-VN')} đ ({packagingType})</div>
                      <div><strong>Khu vực giao:</strong> {deliveryLocation}</div>
                    </div>

                    <a
                      href="https://zalo.me/0762234135"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-amber-950 font-black rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition"
                    >
                      <MessageCircle className="w-4 h-4" /> Nhắn Zalo Kho (0762 234 135) Lấy File Báo Giá
                    </a>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs underline text-amber-200 hover:text-white pt-1 block mx-auto font-semibold"
                    >
                      Tạo dự toán cho loại gạo khác
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div>
                      <label htmlFor="customer-name" className="block text-emerald-100 font-bold mb-1">
                        Họ và tên người đại diện liên hệ *:
                      </label>
                      <input
                        id="customer-name"
                        name="customerName"
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Ví dụ: Chị Diệu Tâm, Anh Minh..."
                        className="w-full p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-emerald-100/50 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label htmlFor="customer-phone" className="block text-emerald-100 font-bold mb-1">
                        Số điện thoại / Zalo *:
                      </label>
                      <input
                        id="customer-phone"
                        name="customerPhone"
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="Số điện thoại nhận báo giá Zalo"
                        className="w-full p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-emerald-100/50 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label htmlFor="delivery-date" className="block text-emerald-100 font-bold mb-1">
                        Thời gian cần hàng dự kiến:
                      </label>
                      <input
                        id="delivery-date"
                        name="deliveryDate"
                        type="text"
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                        placeholder="Ví dụ: Ngày 15 âm lịch, ngày mai, hoặc cuối tuần..."
                        className="w-full p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-emerald-100/50 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label htmlFor="customer-org" className="block text-emerald-100 font-bold mb-1">
                        Tên Đoàn Từ Thiện / Công Ty / Chùa (Nếu có):
                      </label>
                      <input
                        id="customer-org"
                        name="customerOrg"
                        type="text"
                        value={customerOrg}
                        onChange={(e) => setCustomerOrg(e.target.value)}
                        placeholder="Ví dụ: Nhóm Thiện Nguyện Sen Vàng..."
                        className="w-full p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-emerald-100/50 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 disabled:opacity-60 text-amber-950 font-black rounded-xl shadow-lg shadow-amber-500/25 transition flex items-center justify-center gap-2 text-sm sm:text-base mt-6 border border-amber-300/40 active:scale-95"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-amber-950" />
                          Đang gửi thông tin...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-amber-950" />
                          Gửi Nhận Báo Giá Đóng Mộc Ngay
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Hỗ trợ gọi trực tiếp */}
              <div className="pt-6 mt-6 border-t border-white/15 text-center">
                <span className="text-xs text-emerald-200/90 font-medium">Cần tư vấn chọn mẫu gạo trực tiếp?</span>
                <a
                  href="tel:0762234135"
                  className="mt-1 flex items-center justify-center gap-2 text-base sm:text-lg font-black text-amber-300 hover:underline"
                >
                  <PhoneCall className="w-4 h-4" /> 0762 234 135 (24/7)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
