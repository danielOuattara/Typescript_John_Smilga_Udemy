import { defaultState } from "./cartSlice";

export const getCartFromLocalStorage = (): CartState => {
  try {
    const cart = localStorage.getItem("comfy-cart");
    return cart ? JSON.parse(cart) : defaultState;
  } catch (error) {
    console.error("Error parsing cart from localStorage:", error);
    return defaultState;
  }
};

export const updateLocalStorage = (state: CartState) => {
  localStorage.setItem("comfy-cart", JSON.stringify(state));
};

export const resetLocalStorage = () => {
  localStorage.setItem("comfy-cart", JSON.stringify(defaultState));
};

export const cartItemFinder = (cartItems: CartItem[], identifier: string) => {
  return cartItems.find((item) => item.cartItemId === identifier);
};
