'use client';

import { useEffect } from 'react';
import { BRAND_INFO, RICE_PRODUCTS } from '@/data/mockData';
import { PHONE_DISPLAY, ZALO_URL } from '@/data/site';

interface WebMcpToolDefinition {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (input: Record<string, unknown>) => Promise<unknown>;
}

interface NavigatorWithModelContext extends Navigator {
  modelContext?: {
    registerTool?: (tool: WebMcpToolDefinition) => void;
    unregisterTool?: (name: string) => void;
  };
}

/** Đăng ký công cụ WebMCP đọc-only cho agent trình duyệt (nếu trình duyệt hỗ trợ navigator.modelContext). */
export function WebMcpTools() {
  useEffect(() => {
    const nav = navigator as NavigatorWithModelContext;
    const register = nav.modelContext?.registerTool;
    if (typeof register !== 'function') return;

    try {
      register.call(nav.modelContext, {
        name: 'get_charity_rice_prices',
        description:
          'Tra cứu bảng giá sỉ gạo từ thiện theo khối lượng (<300kg, 300kg+, 500kg+, 1.000kg+) và quy cách đóng bao tại Vựa Gạo Sóc Trăng.',
        inputSchema: {
          type: 'object',
          properties: {
            productId: {
              type: 'string',
              description: 'Tùy chọn: ID loại gạo (ví dụ: gao-se-chia, gao-nghia-tinh, gao-st25-thuong-hang).',
            },
          },
        },
        execute: async (input) => {
          const id = typeof input?.productId === 'string' ? input.productId : '';
          const items = id ? RICE_PRODUCTS.filter((p) => p.id === id) : RICE_PRODUCTS;
          return {
            hotline: PHONE_DISPLAY,
            zaloUrl: ZALO_URL,
            products: items.map((p) => ({
              id: p.id,
              name: p.name,
              category: p.category,
              basePricePerKg: p.pricePerKg,
              tiers: p.tiers,
              packaging: p.packaging,
            })),
          };
        },
      });

      register.call(nav.modelContext, {
        name: 'get_warehouse_locations',
        description: 'Lấy danh sách 4 chi nhánh kho, nhà máy Đồng Tháp và hotline/Zalo của Vựa Gạo Sóc Trăng.',
        inputSchema: { type: 'object', properties: {} },
        execute: async () => ({
          brand: BRAND_INFO.name,
          hotline: BRAND_INFO.hotlineDisplay,
          zaloUrl: ZALO_URL,
          branches: BRAND_INFO.branches.map((b) => ({
            id: b.id,
            name: b.name,
            address: b.address,
            area: b.area,
            hours: b.hours,
          })),
          factory: BRAND_INFO.factory,
        }),
      });
    } catch {
      // Trình duyệt không hỗ trợ đầy đủ hoặc đã đăng ký trước đó
    }

    return () => {
      try {
        nav.modelContext?.unregisterTool?.('get_charity_rice_prices');
        nav.modelContext?.unregisterTool?.('get_warehouse_locations');
      } catch {
        // Bỏ qua khi cleanup
      }
    };
  }, []);

  return null;
}
