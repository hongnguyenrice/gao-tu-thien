'use client';

import React, { useState } from 'react';
import { RICE_PRODUCTS } from '@/data/mockData';
import { Calculator, CheckCircle2, Send, PhoneCall, MessageCircle, Loader2 } from 'lucide-react';
import { sendQuoteToTelegram } from '@/lib/telegram';

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
    <section id="bao-gia-nhanh" className="py-16 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-amber-200/90 shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-12">
            {/* Cột trái: Máy tính dự toán ngân sách */}
            <div className="lg:col-span-7 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-amber-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" /> Công Cụ Tính Dự Toán Ngân Sách
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Tính Nhanh Chi Phí Gạo Từ Thiện
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Điều chỉnh loại gạo, số lượng và quy cách đóng gói để xem dự toán kinh phí cho chương trình cứu trợ của Quý đoàn.
              </p>

              <div className="mt-8 space-y-6">
                {/* Chọn loại gạo */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    1. Loại Gạo Dự Kiến Sử Dụng:
                  </label>
                  <select
                    value={selectedRiceId}
                    onChange={(e) => setSelectedRiceId(e.target.value)}
                    className="w-full text-sm font-semibold border border-gray-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-amber-500"
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
                    <label className="text-xs font-bold text-gray-700">
                      2. Tổng Số Lượng Cần (Kg):
                    </label>
                    <span className="text-sm font-black text-amber-700">
                      {volumeKg.toLocaleString('vi-VN')} kg ({volumeKg >= 1000 ? `${(volumeKg/1000).toFixed(1)} tấn` : `${volumeKg} kg`})
                    </span>
                  </div>

                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={volumeKg}
                    onChange={(e) => setVolumeKg(Number(e.target.value))}
                    className="w-full accent-amber-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
                  />

                  <div className="flex gap-2 mt-2">
                    {[100, 300, 500, 1000, 2000, 5000].map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setVolumeKg(v)}
                        className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition ${
                          volumeKg === v
                            ? 'bg-amber-700 text-white border-amber-700'
                            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        {v >= 1000 ? `${v / 1000}T` : `${v}kg`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quy cách đóng gói */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">
                      3. Quy Cách Đóng Bao:
                    </label>
                    <select
                      value={packagingType}
                      onChange={(e) => setPackagingType(e.target.value)}
                      className="w-full text-xs font-medium border border-gray-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Bao 5kg">Túi 5kg (Thích hợp chia hộ gia đình)</option>
                      <option value="Bao 10kg">Bao 10kg (Phổ biến nhất)</option>
                      <option value="Bao 25kg">Bao 25kg (Tiết kiệm)</option>
                      <option value="Bao 50kg">Bao 50kg (Bếp ăn lớn / Nấu cháo)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">
                      4. Khu Vực Giao Hàng:
                    </label>
                    <select
                      value={deliveryLocation}
                      onChange={(e) => setDeliveryLocation(e.target.value)}
                      className="w-full text-xs font-medium border border-gray-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="TP. Hồ Chí Minh">Nội thành TP. Hồ Chí Minh (Giao 2h)</option>
                      <option value="Bình Dương / Đồng Nai">Bình Dương / Đồng Nai / Long An</option>
                      <option value="Tây Nam Bộ">Các tỉnh Miền Tây Nam Bộ</option>
                      <option value="Tây Nguyên / Miền Trung">Tây Nguyên / Miền Trung (Xe tải ghép)</option>
                    </select>
                  </div>
                </div>

                {/* Hóa đơn VAT */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="vat-calc"
                    checked={needVat}
                    onChange={(e) => setNeedVat(e.target.checked)}
                    className="w-4 h-4 text-amber-600 rounded-sm focus:ring-amber-500"
                  />
                  <label htmlFor="vat-calc" className="text-xs font-medium text-gray-700 cursor-pointer">
                    Cần xuất hoá đơn tài chính VAT (để quyết toán với công ty / quỹ)
                  </label>
                </div>
              </div>

              {/* Bảng tổng kết dự toán */}
              <div className="mt-8 bg-amber-50 p-5 rounded-2xl border border-amber-200">
                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Đơn giá áp dụng:</span>
                    <span className="font-bold text-gray-900">{unitPrice.toLocaleString('vi-VN')} đ/kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Số lượng suất quà tương đương:</span>
                    <span className="font-bold text-gray-900">
                      {packagingType === 'Bao 5kg' ? `${Math.floor(volumeKg / 5)} phần (5kg)` : `${Math.floor(volumeKg / 10)} phần (10kg)`}
                    </span>
                  </div>
                  {needVat && (
                    <div className="flex justify-between">
                      <span>Thuế VAT dự kiến (5%):</span>
                      <span className="font-bold text-gray-900">{vatAmount.toLocaleString('vi-VN')} đ</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-amber-200 flex justify-between items-baseline text-sm">
                    <span className="font-bold text-gray-900">Tổng Dự Toán Ngân Sách:</span>
                    <span className="text-xl font-black text-amber-800">
                      {totalEstimated.toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cột phải: Form gửi yêu cầu và nhận báo giá */}
            <div className="lg:col-span-5 p-6 sm:p-10 bg-gradient-to-br from-amber-700 to-amber-900 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-black mb-1">Gửi Yêu Cầu Báo Giá Chính Thức</h3>
                <p className="text-xs text-amber-200 mb-6">
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
                      className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition"
                    >
                      <MessageCircle className="w-4 h-4" /> Nhắn Zalo Kho (0762 234 135) Lấy File Báo Giá Dấu Mộc
                    </a>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs underline text-amber-200 hover:text-white pt-1 block mx-auto"
                    >
                      Tạo dự toán cho loại gạo khác
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block text-amber-200 font-semibold mb-1">
                        Họ và tên người đại diện liên hệ *:
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Ví dụ: Chị Diệu Tâm, Anh Minh..."
                        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-amber-200 font-semibold mb-1">
                        Số điện thoại / Zalo *:
                      </label>
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="Số điện thoại nhận báo giá Zalo"
                        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-amber-200 font-semibold mb-1">
                        Thời gian cần hàng dự kiến:
                      </label>
                      <input
                        type="text"
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                        placeholder="Ví dụ: Ngày 15 âm lịch, ngày mai, hoặc cuối tuần..."
                        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-amber-200 font-semibold mb-1">
                        Tên Đoàn Từ Thiện / Công Ty / Chùa (Nếu có):
                      </label>
                      <input
                        type="text"
                        value={customerOrg}
                        onChange={(e) => setCustomerOrg(e.target.value)}
                        placeholder="Ví dụ: Nhóm Thiện Nguyện Sen Vàng..."
                        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 text-white font-black rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm mt-6"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Đang gửi thông tin...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Gửi Nhận Báo Giá Đóng Mộc Ngay
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Hỗ trợ gọi trực tiếp */}
              <div className="pt-6 mt-6 border-t border-white/10 text-center">
                <span className="text-[11px] text-amber-200">Cần tư vấn chọn mẫu gạo trực tiếp?</span>
                <a
                  href="tel:0762234135"
                  className="mt-1 flex items-center justify-center gap-1.5 text-base font-black text-amber-300 hover:underline"
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
