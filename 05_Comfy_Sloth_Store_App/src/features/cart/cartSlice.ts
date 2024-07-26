import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "@/components/ui/use-toast";

const defaultState: CartState = {
  cartItems: [],
  totalItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = (): CartState => {
  const cart = localStorage.getItem("comfy-cart");
  return cart ? JSON.parse(cart) : defaultState;
};

const updateLocalStorage = (state: CartState) => {
  localStorage.setItem("comfy-cart", JSON.stringify(state));
};

const resetLocalStorage = () => {
  localStorage.setItem("comfy-cart", JSON.stringify(defaultState));
};
const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.cartItems.find(
        (item) => item.cartId === action.payload.cartId,
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
      state.totalItemsInCart += action.payload.quantity;
      state.cartTotal += Number(action.payload.price) * action.payload.quantity;
      cartSlice.caseReducers.calculateTotalPrices(state);
      updateLocalStorage(state);
      toast({ description: "Item added to cart" });
    },

    clearCart: () => {
      resetLocalStorage();
      return defaultState;
    },

    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const cartItem = state.cartItems.find(
        (item) => item.cartId === action.payload,
      );
      if (!cartItem) {
        return;
      }

      state.cartItems = state.cartItems.filter(
        (item) => item.cartId !== action.payload,
      );
      state.totalItemsInCart -= cartItem.quantity;
      state.cartTotal -= Number(cartItem.price) * cartItem.quantity;
      cartSlice.caseReducers.calculateTotalPrices(state);
      updateLocalStorage(state);
      toast({ description: "Item removed from the cart" });
    },

    editItemInCart: () => {},

    calculateTotalPrices: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
