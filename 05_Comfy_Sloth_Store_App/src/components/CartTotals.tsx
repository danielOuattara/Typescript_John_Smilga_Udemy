import { useAppSelector } from "@/hooks";
import { Card, CardTitle } from "./ui/card";
import { CartTotalRow } from "@/components";

export default function CartTotals() {
  const { cartTotalItems, cartTotalPrice, shipping, tax, orderTotalPrice } =
    useAppSelector((state) => state.cart);

  return (
    <Card className="p-8 bg-muted">
      <CartTotalRow
        label="Total Articles"
        value={cartTotalItems}
        quantityOnly
      />
      <CartTotalRow label="Subtotal" value={cartTotalPrice} />
      <CartTotalRow label="Shipping" value={shipping} />
      <CartTotalRow label="Tax" value={tax} />
      <CardTitle className="mt-8">
        <CartTotalRow label="Order Total" value={orderTotalPrice} lastRow />
      </CardTitle>
    </Card>
  );
}

//-----
