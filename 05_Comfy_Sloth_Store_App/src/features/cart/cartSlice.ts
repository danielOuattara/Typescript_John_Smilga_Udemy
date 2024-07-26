import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "@/components/ui/use-toast";
import {
  cartItemFinder,
  getCartFromLocalStorage,
  resetLocalStorage,
  updateLocalStorage,
} from "./utils";

export const defaultState: CartState = {
  cartItems: [],
  cartTotalItems: 0,
  cartTotalPrice: 0,
  shipping: 500,
  tax: 0,
  orderTotalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const cartItem = cartItemFinder(
        state.cartItems,
        action.payload.cartItemId,
      );
      if (cartItem) {
        cartItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
      state.cartTotalItems += action.payload.quantity;
      state.cartTotalPrice +=
        Number(action.payload.price) * action.payload.quantity;
      cartSlice.caseReducers.calculateTotalPrices(state);
      updateLocalStorage(state);
      toast({ description: "Item added to cart" });
    },

    clearCart: () => {
      resetLocalStorage();
      return defaultState;
    },

    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const cartItem = cartItemFinder(state.cartItems, action.payload);
      if (!cartItem) {
        return;
      }

      state.cartItems = state.cartItems.filter(
        (item) => item.cartItemId !== action.payload,
      );
      state.cartTotalItems -= cartItem.quantity;
      state.cartTotalPrice -= Number(cartItem.price) * cartItem.quantity;
      cartSlice.caseReducers.calculateTotalPrices(state);
      updateLocalStorage(state);
      toast({ description: "Item removed from the cart" });
    },

    editItemInCart: (
      state,
      action: PayloadAction<{ cartItemId: string; quantity: number }>,
    ) => {
      const cartItem = cartItemFinder(
        state.cartItems,
        action.payload.cartItemId,
      );
      if (!cartItem) {
        return;
      }

      state.cartTotalItems += action.payload.quantity - cartItem.quantity;
      state.cartTotalPrice +=
        Number(cartItem.price) * (action.payload.quantity - cartItem.quantity);
      cartItem.quantity = action.payload.quantity;
      cartSlice.caseReducers.calculateTotalPrices(state);
      updateLocalStorage(state);
      toast({ description: "Amount updated" });
    },

    calculateTotalPrices: (state) => {
      state.tax = 0.1 * state.cartTotalPrice;
      state.orderTotalPrice = state.cartTotalPrice + state.shipping + state.tax;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
