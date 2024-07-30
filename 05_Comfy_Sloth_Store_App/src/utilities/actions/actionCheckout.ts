import { ReduxStore } from "@/hooks";
import { ActionFunction, redirect } from "react-router-dom";
import { formatMoney } from "../formatMoney";
import { toast } from "@/components/ui/use-toast";
import { customFetch } from "../customFetch";
import { cartActions } from "@/features/cart/cartSlice";

export const actionCheckout = (store: ReduxStore): ActionFunction => {
  return async ({ request }): Promise<null> => {
    return null;
  };
};
