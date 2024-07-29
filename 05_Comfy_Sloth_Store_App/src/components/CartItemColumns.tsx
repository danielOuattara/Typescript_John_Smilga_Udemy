import { formatMoney } from "@/utilities";
import { useAppDispatch } from "@/hooks";
import { Button } from "./ui/button";
import { cartActions } from "@/features/cart/cartSlice";

import SelectProductAmount from "./SelectProductAmount";
import { Mode } from "./SelectProductAmount";

export function CartItemColumn() {
  return <div>CartItemColumn</div>;
}

export const FirstColumn = () => <h2>1st column</h2>;
export const SecondColumn = () => <h2>2nd column</h2>;
export const ThirdColumn = () => <h2>3rd column</h2>;
export const FourthColumn = () => <h2>4th column</h2>;
