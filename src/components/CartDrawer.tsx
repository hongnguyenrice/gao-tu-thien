'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { CHARITY_PARTNERS } from '@/data/mockData';
import { X, Trash2, Heart, CheckCircle2, ShoppingBag, ArrowRight, MessageCircle, PhoneCall, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendOrderToTelegram } from '@/lib/telegram';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalKg,
    getItemPricePerKg,
    getTotalAmount,
    orderDetails,
    setOrderDetails,
  } = useCart();

  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmittedSummary, setLastSubmittedSummary] = useState<{
    customerName: string;
    customerPhone: string;
    deliveryAddress: string;
    totalKg: number;
    totalPayment: number;
    partnerName?: string;
  } | null>(null);

  const totalKg = getTotalKg();
  const subtotal = getTotalAmount();
  const vatAmount = orderDetails.needVAT ? subtotal * 0.05 : 0;
  const totalPayment = subtotal + vatAmount;

  if (!isCartOpen) return null;

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderDetails.customerPhone || !orderDetails.customerName) {
      alert('Vui lòng điền họ tên và số điện thoại liên hệ');
      return;
    }

    setIsSubmitting(true);

    const itemsData = cart.map((item) => {
      const price = getItemPricePerKg(item);
      return {
        name: item.product.name,
        quantityKg: item.quantityKg,
        packaging: item.packagingChoice || 'Bao 50kg',
        unitPrice: price,
        total: price * item.quantityKg,
      };
    });

    const currentTotalKg = totalKg;
    const currentSubtotal = subtotal;
    const currentVatAmount = vatAmount;
    const currentTotalPayment = totalPayment;
    const currentAddress = orderDetails.recipient.recipientAddress || 'Giao tại kho / Thoả thuận sau';

    setLastSubmittedSummary({
      customerName: orderDetails.customerName,
      customerPhone: orderDetails.customerPhone,
      deliveryAddress: currentAddress,
      totalKg: currentTotalKg,
      totalPayment: currentTotalPayment,
      partnerName: orderDetails.recipient.isCharityPartner ? orderDetails.recipient.partnerName : undefined,
    });

    try {
      await sendOrderToTelegram({
        customerName: orderDetails.customerName,
        customerPhone: orderDetails.customerPhone,
        items: itemsData,
        totalKg: currentTotalKg,
        subtotal: currentSubtotal,
        vatAmount: currentVatAmount,
        totalPayment: currentTotalPayment,
        needVAT: orderDetails.needVAT,
        vatTaxCode: orderDetails.vatTaxCode,
        vatCompanyName: orderDetails.vatCompanyName,
        deliveryAddress: currentAddress,
        recipientName: orderDetails.recipient.recipientName,
        recipientPhone: orderDetails.recipient.recipientPhone,
        isCharityPartner: orderDetails.recipient.isCharityPartner,
        partnerName: orderDetails.recipient.partnerName,
      });
    } catch (err) {
      console.error('Lỗi khi gửi thông báo đơn hàng Telegram:', err);
    } finally {
      setIsSubmitting(false);
      setStep('success');
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
      clearCart();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs transition-opacity">
      <div className="bg-white w-full max-w-xl h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-amber-50/50">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-amber-100 text-amber-800 rounded-xl">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">
                {step === 'cart' && 'Đơn Hàng Gạo Thiện Nguyện'}
                {step === 'checkout' && 'Xác Nhận Thông Tin & Nơi Giao'}
                {step === 'success' && 'Đặt Đơn Thành Công'}
              </h3>
              <p className="text-xs text-gray-500">
                {totalKg > 0 ? `Tổng khối lượng: ${totalKg.toLocaleString('vi-VN')} kg` : 'Chưa có sản phẩm'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {step === 'cart' && (
            <>
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <div className="w-16 h-16 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-gray-800">Chưa có loại gạo nào trong đơn</h4>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto">
                    Vui lòng chọn loại gạo và số lượng ký cần đặt ở bảng sản phẩm bên dưới.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-3 px-5 py-2 text-xs font-bold text-white bg-amber-700 rounded-xl hover:bg-amber-800"
                  >
                    Xem Danh Sách Gạo
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => {
                    const pricePerKg = getItemPricePerKg(item);
                    const itemTotal = pricePerKg * item.quantityKg;

                    return (
                      <div
                        key={item.product.id}
                        className="p-4 rounded-2xl border border-gray-200 bg-white shadow-xs space-y-3"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                              {item.product.category}
                            </span>
                            <h4 className="font-bold text-gray-900 text-sm mt-1">{item.product.name}</h4>
                            <span className="text-xs text-gray-500 font-medium block">
                              Quy cách: {item.packagingChoice} (Miễn phí 100%)
                            </span>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-400 hover:text-rose-600 p-1"
                            title="Xóa loại gạo này"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Số lượng kg và giá */}
                        <div className="flex items-center justify-between pt-2 border-t border-gray-50 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500">Số lượng:</span>
                            <input
                              type="number"
                              min="10"
                              step="10"
                              value={item.quantityKg}
                              onChange={(e) => updateQuantity(item.product.id, Number(e.target.value))}
                              className="w-20 font-bold border border-gray-300 rounded-lg px-2 py-1 text-center"
                            />
                            <span className="font-semibold text-gray-700">kg</span>
                          </div>

                          <div className="text-right">
                            <div className="text-xs text-gray-400">{pricePerKg.toLocaleString('vi-VN')} đ/kg</div>
                            <div className="font-black text-amber-700 text-sm">
                              {itemTotal.toLocaleString('vi-VN')} đ
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Nơi nhận từ thiện nếu đã chọn */}
                  {orderDetails.recipient.isCharityPartner && (
                    <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-2xl text-xs space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-rose-900">
                        <Heart className="w-4 h-4 fill-rose-600 text-rose-600" />
                        Đang chọn giao trực tiếp đến điểm từ thiện:
                      </div>
                      <div className="font-semibold text-gray-800">{orderDetails.recipient.partnerName}</div>
                      <div className="text-gray-500 text-[11px]">{orderDetails.recipient.recipientAddress}</div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {step === 'checkout' && (
            <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-4 text-xs">
              <div className="bg-amber-50 p-3 rounded-xl border border-amber-200">
                <span className="font-bold text-amber-900">Thông tin người đặt / Đoàn thiện nguyện</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Họ tên người đại diện *</label>
                  <input
                    type="text"
                    required
                    value={orderDetails.customerName}
                    onChange={(e) => setOrderDetails({ ...orderDetails, customerName: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full p-2.5 rounded-lg border border-gray-300 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Số điện thoại / Zalo *</label>
                  <input
                    type="tel"
                    required
                    value={orderDetails.customerPhone}
                    onChange={(e) => setOrderDetails({ ...orderDetails, customerPhone: e.target.value })}
                    placeholder="0909xxxxxx"
                    className="w-full p-2.5 rounded-lg border border-gray-300 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Tên Đoàn / Doanh nghiệp / Nhóm</label>
                <input
                  type="text"
                  value={orderDetails.customerGroup}
                  onChange={(e) => setOrderDetails({ ...orderDetails, customerGroup: e.target.value })}
                  placeholder="Hội Từ Thiện Tâm Đức / Công ty ABC..."
                  className="w-full p-2.5 rounded-lg border border-gray-300 text-xs"
                />
              </div>

              {/* Nơi nhận gạo */}
              <div className="pt-2">
                <div className="flex justify-between items-center mb-2">
                  <label className="font-bold text-gray-900">Địa chỉ giao hàng & tiếp nhận:</label>
                  <select
                    value={orderDetails.recipient.isCharityPartner ? orderDetails.recipient.partnerId : 'custom'}
                    onChange={(e) => {
                      if (e.target.value === 'custom') {
                        setOrderDetails({
                          ...orderDetails,
                          recipient: {
                            isCharityPartner: false,
                            recipientName: '',
                            recipientPhone: '',
                            recipientAddress: '',
                            noteForDelivery: ''
                          }
                        });
                      } else {
                        const found = CHARITY_PARTNERS.find(p => p.id === e.target.value);
                        if (found) {
                          setOrderDetails({
                            ...orderDetails,
                            recipient: {
                              isCharityPartner: true,
                              partnerId: found.id,
                              partnerName: found.name,
                              recipientName: found.contactPerson,
                              recipientPhone: found.phone,
                              recipientAddress: `${found.address}, ${found.province}`,
                              noteForDelivery: `Giao trực tiếp hỗ trợ ${found.name}`
                            }
                          });
                        }
                      }
                    }}
                    className="text-xs border border-gray-300 rounded-lg p-1 bg-white font-medium"
                  >
                    <option value="custom">Tự nhập địa chỉ (hoặc giao tận đoàn)</option>
                    {CHARITY_PARTNERS.map(p => (
                      <option key={p.id} value={p.id}>Gửi tặng: {p.name}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2 bg-gray-50 p-3 rounded-xl border border-gray-200">
                  <input
                    type="text"
                    required
                    value={orderDetails.recipient.recipientAddress}
                    onChange={(e) => setOrderDetails({
                      ...orderDetails,
                      recipient: { ...orderDetails.recipient, recipientAddress: e.target.value }
                    })}
                    placeholder="Địa chỉ số nhà, đường, quận/huyện, tỉnh thành..."
                    className="w-full p-2.5 rounded-lg border border-gray-300 text-xs bg-white"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={orderDetails.recipient.recipientName}
                      onChange={(e) => setOrderDetails({
                        ...orderDetails,
                        recipient: { ...orderDetails.recipient, recipientName: e.target.value }
                      })}
                      placeholder="Người nhận tại điểm (Trụ trì/Quản lý)"
                      className="w-full p-2 rounded-lg border border-gray-300 text-xs bg-white"
                    />
                    <input
                      type="tel"
                      value={orderDetails.recipient.recipientPhone}
                      onChange={(e) => setOrderDetails({
                        ...orderDetails,
                        recipient: { ...orderDetails.recipient, recipientPhone: e.target.value }
                      })}
                      placeholder="Số ĐT người nhận tại điểm"
                      className="w-full p-2 rounded-lg border border-gray-300 text-xs bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Tùy chọn VAT */}
              <div className="pt-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="vat-drawer"
                    checked={orderDetails.needVAT}
                    onChange={(e) => setOrderDetails({ ...orderDetails, needVAT: e.target.checked })}
                    className="w-4 h-4 text-amber-600 rounded-sm"
                  />
                  <label htmlFor="vat-drawer" className="font-semibold text-gray-800 cursor-pointer">
                    Cần xuất hoá đơn tài chính VAT (5%)
                  </label>
                </div>
                {orderDetails.needVAT && (
                  <div className="mt-2 space-y-2 bg-gray-50 p-3 rounded-xl border border-gray-200">
                    <input
                      type="text"
                      placeholder="Mã số thuế doanh nghiệp / quỹ"
                      value={orderDetails.vatTaxCode || ''}
                      onChange={(e) => setOrderDetails({ ...orderDetails, vatTaxCode: e.target.value })}
                      className="w-full p-2 rounded-lg border border-gray-300 text-xs bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Tên đầy đủ công ty / tổ chức trên hoá đơn"
                      value={orderDetails.vatCompanyName || ''}
                      onChange={(e) => setOrderDetails({ ...orderDetails, vatCompanyName: e.target.value })}
                      className="w-full p-2 rounded-lg border border-gray-300 text-xs bg-white"
                    />
                  </div>
                )}
              </div>
            </form>
          )}

          {step === 'success' && (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black text-gray-900">Hoan Hỷ! Đơn Đặt Gạo Đã Được Ghi Nhận</h4>
              <p className="text-xs text-gray-600 leading-relaxed max-w-sm mx-auto">
                Hệ thống đã tự động gửi thông báo đơn hàng đến ban quản lý kho <strong>Vựa Gạo Sóc Trăng</strong>. Chúng tôi sẽ gọi lại ngay để xác nhận xe giao và mẫu gạo.
              </p>

              {lastSubmittedSummary && (
                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-left text-xs space-y-2">
                  <div className="font-bold text-amber-900 border-b border-amber-200 pb-1.5 flex justify-between items-center">
                    <span>Thông Tin Đơn Vừa Đặt</span>
                    <span className="text-[11px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-semibold">Đã gửi Telegram kho</span>
                  </div>
                  <div><strong>Người liên hệ:</strong> {lastSubmittedSummary.customerName} ({lastSubmittedSummary.customerPhone})</div>
                  <div><strong>Tổng khối lượng:</strong> {lastSubmittedSummary.totalKg.toLocaleString('vi-VN')} kg</div>
                  <div><strong>Tổng thanh toán dự kiến:</strong> <span className="font-bold text-amber-800">{lastSubmittedSummary.totalPayment.toLocaleString('vi-VN')} đ</span></div>
                  <div><strong>Địa chỉ giao:</strong> {lastSubmittedSummary.deliveryAddress}</div>
                  {lastSubmittedSummary.partnerName && (
                    <div className="text-emerald-700 font-bold">
                      ✓ Điểm đối tác thiện nguyện: {lastSubmittedSummary.partnerName}
                    </div>
                  )}
                </div>
              )}

              {/* Tùy chọn chốt nhanh qua Zalo / Hotline */}
              <div className="pt-2 space-y-2">
                <a
                  href="https://zalo.me/0762234135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-black rounded-xl text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 transition active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" /> Nhắn Zalo Kho (0762 234 135) Xác Nhận Ngay
                </a>
                <a
                  href="tel:0762234135"
                  className="w-full py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-700" /> Gọi Hotline Trực Tiếp: 0762 234 135
                </a>
              </div>

              <button
                onClick={() => {
                  setStep('cart');
                  setIsCartOpen(false);
                }}
                className="mt-4 px-6 py-2 text-stone-500 hover:text-stone-800 font-bold text-xs"
              >
                Đóng và tiếp tục xem thêm
              </button>
            </div>
          )}
        </div>

        {/* Footer: Tính tiền & Button Chuyển bước */}
        {cart.length > 0 && step !== 'success' && (
          <div className="p-4 sm:p-6 border-t border-stone-200 bg-stone-50/90 space-y-3">
            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Tổng khối lượng gạo:</span>
                <span className="font-bold text-stone-900">{totalKg.toLocaleString('vi-VN')} kg</span>
              </div>
              <div className="flex justify-between">
                <span>Tiền gạo (giá sỉ thiện nguyện):</span>
                <span className="font-bold text-stone-900">{subtotal.toLocaleString('vi-VN')} đ</span>
              </div>
              {orderDetails.needVAT && (
                <div className="flex justify-between">
                  <span>Thuế VAT 5%:</span>
                  <span className="font-bold text-stone-900">{vatAmount.toLocaleString('vi-VN')} đ</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Phí đóng gói bao 5kg/10kg:</span>
                <span className="font-bold text-emerald-700">Miễn phí (0đ)</span>
              </div>
              <div className="pt-2 border-t border-stone-200 flex justify-between items-baseline text-sm">
                <span className="font-black text-stone-900">Tổng Thanh Toán:</span>
                <span className="text-xl font-black text-amber-900">
                  {totalPayment.toLocaleString('vi-VN')} đ
                </span>
              </div>
            </div>

            {step === 'cart' ? (
              <button
                onClick={() => setStep('checkout')}
                className="w-full py-3.5 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-black rounded-xl flex items-center justify-center gap-2 text-sm shadow-md shadow-amber-700/25 transition active:scale-95 border border-amber-500/30"
              >
                Tiến Hành Đặt Hàng & Giao Nhận <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep('cart')}
                  className="px-4 py-3 bg-white border border-stone-300 hover:bg-stone-100 font-bold rounded-xl text-xs"
                >
                  Quay lại
                </button>
                <button
                  form="checkout-form"
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 hover:from-emerald-700 hover:to-teal-900 text-white font-black rounded-xl text-sm shadow-md shadow-emerald-700/25 transition flex items-center justify-center gap-2 active:scale-95 border border-emerald-500/30"
                >
                  {isSubmitting ? 'Đang gửi thông tin...' : 'Xác Nhận Đặt Gạo Từ Thiện'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
