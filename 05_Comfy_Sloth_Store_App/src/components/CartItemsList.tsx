import { useAppSelector } from "@/hooks";
import { Card } from "./ui/card";
import { Image, Data, QuantityAndActions, Price } from "./CartItemElements";

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
            className="flex flex-col gap-y-4 sm:flex-row flex-wrap p-4 mb-8"
          >
            <Image image={image} title={title} />
            <Data title={title} company={company} productColor={productColor} />
            <QuantityAndActions quantity={quantity} cartItemId={cartItemId} />
            <Price price={price} />
          </Card>
        );
      })}
    </div>
  );
}
