import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course } from '../services/course.service';

interface CartContextType {
  cartItems: Course[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: string) => void;
  clearCart: () => void;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Course[]>(() => {
    const saved = localStorage.getItem('edu_cart');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('edu_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (course: Course) => {
    setCartItems(prev => {
      if (prev.find(item => item.id === course.id)) return prev;
      return [...prev, course];
    });
  };

  const removeFromCart = (courseId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== courseId));
  };

  const clearCart = () => setCartItems([]);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
