type Checkout = {
  name: string;
  address: string;
  chargeTotal: number;
  orderTotal: string;
  cartItems: CartItem[];
  // cartTotalItems: number;
  numItemsInCart: number;
};
