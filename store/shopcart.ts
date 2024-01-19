// store/filters.ts
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('setupStore', () => {
  const cartItems = ref([])

  const addToCart = (item: { id: number; amount: number, image: string, title: string, price:number }) => {
    const { id, amount, image, title, price } = item;
    const existingItem = cartItems.value.find((cartItem) => cartItem.id === id);

    if (existingItem) {
      // If the item already exists in the cart, update its quantity
      existingItem.amount += amount;
    } else {
      // If the item doesn't exist, add it to the cart
      cartItems.value.push({ id, amount, image, title, price });
    }
  };

  const removeFromCart = (id: number) => {
    const index = cartItems.value.findIndex((cartItem) => cartItem.id === id);
    if (index !== -1) {
      cartItems.value.splice(index, 1);
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


  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };
});
