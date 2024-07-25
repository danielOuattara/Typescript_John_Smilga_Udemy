import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "@/components/ui/use-toast";

const defaultState: CartState = {
  cartItems: [],
  quantityItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = (): CartState => {
  const cart = localStorage.getItem("comfy-cart");
  return cart ? JSON.parse(cart) : defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {},
    clearCart: () => {},
    removeItemFromCart: () => {},
    editItemInCart: () => {},
    calculateTotals: () => {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
