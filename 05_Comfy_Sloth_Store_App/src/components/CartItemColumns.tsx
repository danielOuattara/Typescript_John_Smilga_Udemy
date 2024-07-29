import { formatMoney } from "@/utilities";
import { useAppDispatch } from "@/hooks";
import { Button } from "./ui/button";
import { cartActions } from "@/features/cart/cartSlice";
import { SelectProductQuantity } from "@/components";
import { EnumLocation } from "@/types.single-product";

export function CartItemColumn() {
  return <div>CartItemColumn</div>;
}

//-----------------------

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

//-----------------------

export const SecondColumn = ({
  title,
  company,
  productColor,
}: {
  title: string;
  company: string;
  productColor: string;
}) => (
  <div className="sm:ml-4 md:ml-12 sm:w-48">
    <h3 className="capitalize font-medium">{title}</h3>
    <h4 className="mt-2 capitalize text-sm">{company}</h4>
    <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
      color :
      <span
        className="aspect-square rounded-md w-4 h-4 mr-2 "
        style={{
          backgroundColor: productColor,
        }}
      ></span>
    </p>
  </div>
);

//-----------------------

export const ThirdColumn = ({
  quantity,
  cartItemId,
}: {
  quantity: number;
  cartItemId: string;
}) => {
  const dispatch = useAppDispatch();

  const setQuantity = (quantity: number) => {
    dispatch(cartActions.editItemInCart({ cartItemId, quantity }));
  };
  return (
    <div>
      <SelectProductQuantity
        location={EnumLocation.IN_CART_ITEM}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <Button
        variant={"link"}
        className="-ml-4"
        onClick={() => dispatch(cartActions.removeItemFromCart(cartItemId))}
      >
        remove
      </Button>
    </div>
  );
};

//-----------------------

export const FourthColumn = ({ price }: { price: string }) => (
  <p className="font-medium sm:ml-auto">{formatMoney(price)}</p>
);
