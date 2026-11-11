'use client';

import React, { useState } from 'react';
import { CHARITY_PARTNERS, CharityPartner } from '@/data/mockData';
import { useCart } from '@/context/CartContext';
import { Heart, MapPin, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const CharityPartnerList: React.FC = () => {
  const { setOrderDetails, setIsCartOpen } = useCart();
  const [selectedPartnerId, setSelectedPartnerId] = useState<string | null>(null);

  const handleSelectPartnerForDonation = (partner: CharityPartner) => {
    setSelectedPartnerId(partner.id);
    setOrderDetails((prev) => ({
      ...prev,
      recipient: {
        isCharityPartner: true,
        partnerId: partner.id,
        partnerName: partner.name,
        recipientName: partner.contactPerson,
        recipientPhone: partner.phone,
        recipientAddress: `${partner.address}, ${partner.province}`,
        noteForDelivery: `Giao gạo từ thiện tài trợ cho ${partner.name}. Vui lòng liên hệ ${partner.contactPerson} (${partner.phone}) để tiếp nhận.`
      }
    }));
    setIsCartOpen(true);
  };

  return (
    <section id="diem-tiep-nhan" className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" /> Cầu Nối Trao Yêu Thương
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Các Điểm Chùa & Mái Ấm Đang Cần Tiếp Tế Gạo
          </h2>
          <p className="mt-3 text-gray-600 text-base sm:text-lg">
            Mạnh thường quân ở xa hoặc kiều bào muốn gửi tặng gạo có thể chọn trực tiếp các cơ sở tiếp nhận đã được xác minh bên dưới. Chúng tôi hỗ trợ giao tận nơi và gửi hình ảnh bàn giao thực tế.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHARITY_PARTNERS.map((partner) => {
            const percentAchieved = Math.min(100, Math.round((partner.currentReceivedKg / partner.monthlyNeedKg) * 100));
            const isSelected = selectedPartnerId === partner.id;

            return (
              <div
                key={partner.id}
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden bg-white ${
                  isSelected
                    ? 'border-rose-500 ring-2 ring-rose-300 shadow-lg'
                    : 'border-gray-200 hover:border-rose-200 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Image & Verified Tag */}
                  <div className="relative h-44 bg-gray-100 overflow-hidden">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {partner.verified && (
                      <span className="absolute top-3 left-3 bg-white/95 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs backdrop-blur-xs">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Đã xác minh địa chỉ
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-medium px-2 py-0.5 rounded-md backdrop-blur-xs">
                      {partner.province}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-snug line-clamp-2 min-h-[44px]">
                      {partner.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 mt-2 line-clamp-3 leading-relaxed">
                      {partner.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-gray-100 space-y-1.5 text-xs sm:text-sm text-gray-600">
                      <div className="flex items-start gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{partner.address}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span>Người nhận: <strong>{partner.contactPerson}</strong></span>
                      </div>
                    </div>

                    {/* Progress Bar Gạo tháng này */}
                    <div className="mt-4 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="text-gray-500 font-medium">Nhu cầu tháng:</span>
                        <span className="font-bold text-gray-900">
                          {partner.currentReceivedKg} / {partner.monthlyNeedKg} kg
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-amber-500 to-rose-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${percentAchieved}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-right text-gray-500 mt-1">
                        Đã tiếp nhận {percentAchieved}% nhu cầu
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleSelectPartnerForDonation(partner)}
                    className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition ${
                      isSelected
                        ? 'bg-rose-700 text-white'
                        : 'bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" /> Đang chọn gửi tới đây
                      </>
                    ) : (
                      <>
                        <Heart className="w-4 h-4 fill-rose-500 text-rose-500" /> Chọn gửi gạo đến điểm này
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
