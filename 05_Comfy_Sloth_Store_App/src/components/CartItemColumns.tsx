import { formatMoney } from "@/utilities";
import { useAppDispatch } from "@/hooks";
import { Button } from "./ui/button";
import { cartActions } from "@/features/cart/cartSlice";

import SelectProductAmount from "./SelectProductAmount";
import { Mode } from "./SelectProductAmount";

export function CartItemColumn() {
  return <div>CartItemColumn</div>;
}

export const FirstColumn = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => (
  <img
    src={image}
    alt={title}
    className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
  />
);

export const SecondColumn = () => <h2>2nd column</h2>;

export const ThirdColumn = () => <h2>3rd column</h2>;

export const FourthColumn = () => <h2>4th column</h2>;
