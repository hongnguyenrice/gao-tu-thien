'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { RiceProduct } from '@/data/mockData';

export interface CartItem {
  product: RiceProduct;
  quantityKg: number;
  packagingChoice: string;
}

export interface CharityRecipient {
  isCharityPartner: boolean;
  partnerId?: string;
  partnerName?: string;
  recipientName: string;
  recipientPhone: string;
  recipientAddress: string;
  noteForDelivery: string;
}

interface OrderDetails {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerGroup: string; // Tên đoàn từ thiện / Doanh nghiệp / Cá nhân
  needVAT: boolean;
  vatTaxCode?: string;
  vatCompanyName?: string;
  vatAddress?: string;
  deliveryDate: string;
  recipient: CharityRecipient;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: RiceProduct, kg: number, packaging: string) => void;
  updateQuantity: (productId: string, kg: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  getTotalKg: () => number;
  getItemPricePerKg: (item: CartItem) => number;
  getTotalAmount: () => number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  orderDetails: OrderDetails;
  setOrderDetails: React.Dispatch<React.SetStateAction<OrderDetails>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    customerGroup: '',
    needVAT: false,
    deliveryDate: '',
    recipient: {
      isCharityPartner: false,
      recipientName: '',
      recipientPhone: '',
      recipientAddress: '',
      noteForDelivery: ''
    }
  });

  // Tải giỏ hàng từ localStorage nếu có
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('gao_cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch {
      // bỏ qua lỗi client
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('gao_cart', JSON.stringify(cart));
    } catch {
      // bỏ qua
    }
  }, [cart]);

  const addToCart = (product: RiceProduct, kg: number, packaging: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantityKg: item.quantityKg + kg, packagingChoice: packaging }
            : item
        );
      }
      return [...prev, { product, quantityKg: kg, packagingChoice: packaging }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, kg: number) => {
    if (kg <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantityKg: kg } : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalKg = () => {
    return cart.reduce((sum, item) => sum + item.quantityKg, 0);
  };

  // Tính đơn giá cho từng sản phẩm dựa trên tổng số lượng của loại đó hoặc nấc chiết khấu
  const getItemPricePerKg = (item: CartItem) => {
    const { product, quantityKg } = item;
    let price = product.pricePerKg;

    // Sắp xếp các nấc giảm dần theo minKg
    const sortedTiers = [...product.tiers].sort((a, b) => b.minKg - a.minKg);
    for (const tier of sortedTiers) {
      if (quantityKg >= tier.minKg) {
        price = tier.pricePerKg;
        break;
      }
    }
    return price;
  };

  const getTotalAmount = () => {
    return cart.reduce((sum, item) => sum + getItemPricePerKg(item) * item.quantityKg, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getTotalKg,
        getItemPricePerKg,
        getTotalAmount,
        isCartOpen,
        setIsCartOpen,
        orderDetails,
        setOrderDetails
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
