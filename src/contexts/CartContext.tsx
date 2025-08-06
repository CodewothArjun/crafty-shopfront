
import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, cartDB, mockProducts } from '@/data/mockData';

interface CartContextType {
  items: CartItem[];
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  getTotal: () => number;
  getItemCount: () => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const refreshCart = () => {
    setItems([...cartDB.getItems()]);
  };

  const addItem = (productId: string, quantity = 1) => {
    const product = mockProducts.find(p => p.id === productId);
    if (product) {
      cartDB.addItem(productId, product, quantity);
      refreshCart();
    }
  };

  const removeItem = (id: string) => {
    cartDB.removeItem(id);
    refreshCart();
  };

  const updateQuantity = (id: string, quantity: number) => {
    cartDB.updateQuantity(id, quantity);
    refreshCart();
  };

  const getTotal = () => cartDB.getTotal();
  const getItemCount = () => cartDB.getItemCount();
  const clearCart = () => {
    cartDB.clear();
    refreshCart();
  };

  useEffect(() => {
    refreshCart();
  }, []);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      getTotal,
      getItemCount,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
