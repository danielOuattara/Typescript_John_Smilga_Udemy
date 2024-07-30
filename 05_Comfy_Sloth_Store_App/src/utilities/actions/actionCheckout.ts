import { ReduxStore } from "@/hooks";
import { ActionFunction, redirect } from "react-router-dom";
import { formatMoney } from "../formatMoney";
import { toast } from "@/components/ui/use-toast";
import { customFetch } from "../customFetch";
import { cartActions } from "@/features/cart/cartSlice";

export const actionCheckout = (store: ReduxStore): ActionFunction => {
  return async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const address = formData.get("name") as string;

    if (!name || !address) {
      toast({ description: "please fill out all fields", color: "red" });
      return null;
    }

    const { user } = store.getState().user;
    if (!user) {
      toast({ description: "please login to place an order" });
      return redirect("/login");
    }

    const { cartItems, orderTotalPrice, cartTotalItems } =
      store.getState().cart;

    const info: Checkout = {
      name,
      address,
      chargeTotal: orderTotalPrice,
      orderTotal: formatMoney(orderTotalPrice),
      cartItems,
      numItemsInCart: cartTotalItems,
    };

    try {
      await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );
      store.dispatch(cartActions.clearCart());
      toast({ description: "order placed successfully !" });
      return redirect("/orders");
    } catch (error) {
      toast({ description: "order failed", color: "red" });
      return null;
    }
  };
};
