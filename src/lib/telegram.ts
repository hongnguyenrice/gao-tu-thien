// Cấu hình & Hàm gửi thông báo đơn hàng qua Telegram Bot
// Thiết kế 2 lớp: Ưu tiên Bot Đơn Từ Thiện (@dontuthien_bot), tự động fallback sang @Vua_Gao_BOT

export const TELEGRAM_CONFIG = {
  primaryBotToken: process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || '8708178633:AAEjHaPCBx4hG39MSuTjtYHaZhF9-tXaDTw',
  fallbackBotToken: '8849563794:AAFAjeQhbaB0uT1TYek7yJrhxJhQjT_CaSY',
  chatId: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || '8729460838',
};

export interface TelegramOrderItem {
  name: string;
  quantityKg: number;
  packaging: string;
  unitPrice: number;
  total: number;
}

export interface TelegramOrderData {
  customerName: string;
  customerPhone: string;
  items: TelegramOrderItem[];
  totalKg: number;
  subtotal: number;
  vatAmount: number;
  totalPayment: number;
  needVAT: boolean;
  vatTaxCode?: string;
  vatCompanyName?: string;
  deliveryAddress: string;
  recipientName?: string;
  recipientPhone?: string;
  isCharityPartner?: boolean;
  partnerName?: string;
}

export interface TelegramQuoteData {
  customerName: string;
  customerPhone: string;
  customerOrg?: string;
  riceName: string;
  volumeKg: number;
  packagingType: string;
  unitPrice: number;
  totalEstimated: number;
  needVat: boolean;
  deliveryLocation: string;
  deliveryDate?: string;
}

/**
 * Gửi tin nhắn qua Telegram Bot API (Direct fetch với CORS)
 */
async function sendViaToken(token: string, chatId: string, htmlMessage: string): Promise<boolean> {
  if (!token || !chatId) return false;
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: htmlMessage,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });
    const data = await res.json();
    return Boolean(data.ok);
  } catch (err) {
    console.error('[Telegram Send Error]', err);
    return false;
  }
}

/**
 * Gửi tin nhắn có tự động fallback an toàn
 */
async function sendTelegramRaw(htmlMessage: string): Promise<boolean> {
  const { primaryBotToken, fallbackBotToken, chatId } = TELEGRAM_CONFIG;

  // 1. Thử gửi bằng Bot chính (@dontuthien_bot)
  const primarySuccess = await sendViaToken(primaryBotToken, chatId, htmlMessage);
  if (primarySuccess) return true;

  // 2. Nếu bot chính chưa được người dùng bấm /start, tự động fallback sang Bot dự phòng (@Vua_Gao_BOT)
  if (fallbackBotToken && fallbackBotToken !== primaryBotToken) {
    console.warn('[Telegram Bot] Chuyển tiếp tin nhắn qua bot dự phòng...');
    return sendViaToken(fallbackBotToken, chatId, htmlMessage);
  }

  return false;
}

/**
 * Gửi thông báo khi khách đặt đơn hàng từ thiện trong Giỏ hàng
 */
export async function sendOrderToTelegram(order: TelegramOrderData): Promise<boolean> {
  const now = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

  const itemsList = order.items
    .map(
      (item, idx) =>
        `   ${idx + 1}. <b>${item.name}</b>: ${item.quantityKg.toLocaleString('vi-VN')} kg (${item.packaging})\n` +
        `      ➜ Giá sỉ: ${item.unitPrice.toLocaleString('vi-VN')} đ/kg | Thành tiền: <b>${item.total.toLocaleString('vi-VN')} đ</b>`
    )
    .join('\n');

  const partnerInfo = order.isCharityPartner && order.partnerName
    ? `\n🎗 <b>Điểm nhận đối tác:</b> ${order.partnerName}`
    : '';

  const recipientContact = (order.recipientName || order.recipientPhone)
    ? `\n👤 <b>Người nhận tại điểm:</b> ${order.recipientName || 'Chưa rõ'} - ${order.recipientPhone || 'Chưa có SĐT'}`
    : '';

  const vatInfo = order.needVAT
    ? `\n📑 <b>Yêu cầu xuất VAT (5%):</b> Có (+${order.vatAmount.toLocaleString('vi-VN')} đ)\n   - MST: ${order.vatTaxCode || 'Chưa nhập'}\n   - Tên tổ chức: ${order.vatCompanyName || 'Chưa nhập'}`
    : '\n📑 <b>Hóa đơn VAT:</b> Không yêu cầu';

  const message =
    `🌾 <b>ĐƠN HÀNG GẠO TỪ THIỆN MỚI</b>\n` +
    `⏰ <i>Thời gian: ${now}</i>\n` +
    `──────────────────────\n` +
    `👤 <b>Người đại diện:</b> <b>${order.customerName}</b>\n` +
    `📞 <b>Số điện thoại:</b> <code>${order.customerPhone}</code>\n` +
    `📍 <b>Địa chỉ giao:</b> ${order.deliveryAddress || 'Chưa nhập địa chỉ'}` +
    `${partnerInfo}` +
    `${recipientContact}\n` +
    `──────────────────────\n` +
    `📦 <b>DANH SÁCH GẠO ĐẶT:</b>\n` +
    `${itemsList}\n` +
    `──────────────────────\n` +
    `⚖️ <b>Tổng khối lượng:</b> <b>${order.totalKg.toLocaleString('vi-VN')} kg</b> (${(order.totalKg / 1000).toFixed(2)} tấn)\n` +
    `💰 <b>Tiền gạo:</b> ${order.subtotal.toLocaleString('vi-VN')} đ\n` +
    `${vatInfo}\n` +
    `💵 <b>TỔNG THANH TOÁN:</b> <b>${order.totalPayment.toLocaleString('vi-VN')} đ</b>\n` +
    `──────────────────────\n` +
    `🌐 <i>Nguồn: tuthien.gaosoctrang.com</i>`;

  return sendTelegramRaw(message);
}

/**
 * Gửi thông báo khi khách gửi form Dự Toán Báo Giá Nhanh
 */
export async function sendQuoteToTelegram(quote: TelegramQuoteData): Promise<boolean> {
  const now = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

  const orgInfo = quote.customerOrg ? `\n🏢 <b>Đoàn / Tổ chức:</b> ${quote.customerOrg}` : '';
  const dateInfo = quote.deliveryDate ? `\n📅 <b>Ngày phát dự kiến:</b> ${quote.deliveryDate}` : '';
  const vatInfo = quote.needVat ? '\n📑 <b>Cần hóa đơn VAT:</b> Có' : '';

  const message =
    `📋 <b>YÊU CẦU DỰ TOÁN BÁO GIÁ NHANH</b>\n` +
    `⏰ <i>Thời gian: ${now}</i>\n` +
    `──────────────────────\n` +
    `👤 <b>Người liên hệ:</b> <b>${quote.customerName || 'Khách hàng'}</b>\n` +
    `📞 <b>Số điện thoại:</b> <code>${quote.customerPhone}</code>` +
    `${orgInfo}\n` +
    `📍 <b>Khu vực giao:</b> ${quote.deliveryLocation}` +
    `${dateInfo}` +
    `${vatInfo}\n` +
    `──────────────────────\n` +
    `🌾 <b>Loại gạo:</b> <b>${quote.riceName}</b>\n` +
    `⚖️ <b>Số lượng:</b> <b>${quote.volumeKg.toLocaleString('vi-VN')} kg</b> (${(quote.volumeKg / 1000).toFixed(1)} tấn)\n` +
    `📦 <b>Quy cách bao:</b> ${quote.packagingType}\n` +
    `💵 <b>Đơn giá sỉ ước tính:</b> ${quote.unitPrice.toLocaleString('vi-VN')} đ/kg\n` +
    `💰 <b>TỔNG DỰ TOÁN:</b> <b>${quote.totalEstimated.toLocaleString('vi-VN')} đ</b>\n` +
    `──────────────────────\n` +
    `🌐 <i>Nguồn: tuthien.gaosoctrang.com</i>`;

  return sendTelegramRaw(message);
}
