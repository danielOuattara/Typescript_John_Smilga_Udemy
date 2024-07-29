import { useAppSelector } from "@/hooks";
import { Card } from "./ui/card";
import {
  FirstColumn,
  SecondColumn,
  ThirdColumn,
  FourthColumn,
} from "./CartItemColumns";

export default function CartItemsList() {
  const { cartItems } = useAppSelector((state) => state.cart);
  return (
    <div>
      {cartItems.map((cartItem) => {
        const {
          cartItemId,
          title,
          price,
          image,
          quantity,
          company,
          productColor,
        } = cartItem;
        return (
          <Card
            key={cartItemId}
            className="flex flex-col gap-y-4 sm:flex-row flex-wrap p-2 mb-8"
          >
            <FirstColumn image={image} title={title} />
            <SecondColumn
              title={title}
              company={company}
              productColor={productColor}
            />
            <ThirdColumn quantity={quantity} cartItemId={cartItemId} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
}
