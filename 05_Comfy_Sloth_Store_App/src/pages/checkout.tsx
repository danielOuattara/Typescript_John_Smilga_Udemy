import { useAppSelector } from "@/hooks";
import { CheckoutForm, SectionTitle, CartTotals } from "@/components";

export default function Checkout() {
  const { cartTotalItems } = useAppSelector((state) => state.cart);

  if (cartTotalItems === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8  md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
}
