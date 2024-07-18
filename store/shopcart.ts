// store/filters.ts
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('setupStore', () => {
  const cartItems = ref([]);

  const addToCart = (item: { id: number; amount: number, image: string, variation: string, title: string, price: number, shipprice: number }) => {
    const { id, amount, image, variation, title, price, shipprice } = item;
    
    // Find existing item in the cart that matches both id and variation
    const existingItem = cartItems.value.find((cartItem) => cartItem.id === id && cartItem.variation === variation);
  
    if (existingItem) {
      // If the item already exists in the cart, update its quantity
      existingItem.amount += amount;
    } else {
      // If the item doesn't exist, add it to the cart
      cartItems.value.push({ id, amount, image, title, variation, price, shipprice });
    }
  };
  
  const removeFromCart = (id: number, variation: string) => {
    const index = cartItems.value.findIndex((cartItem) => cartItem.id === id && cartItem.variation === variation);
  
    if (index !== -1) {
      cartItems.value.splice(index, 1);
    } else {
      console.error(`Item with id ${id} and variation ${variation} not found in the cart.`);
    }
  };

  const clearCart = () => {
    cartItems.value = [];
  };

  const getTotalItems = () => {
    return cartItems.value.reduce((total, item) => total + item.amount, 0);
  };

  const getTotalPrice = () => {
    return cartItems.value.reduce((total, item) => total + item.amount * item.price, 0);
  };

  const getTotalShippingCost = () => {
    return cartItems.value.reduce((total, item) => total + item.amount * item.shipprice, 0);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice,
    getTotalShippingCost,
  };
});
