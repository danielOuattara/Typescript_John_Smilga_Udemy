import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  EnumLocation,
  ProductQuantityInCartItem,
  ProductQuantityInProductPage,
} from "@/types.single-product";

export default function SelectProductQuantity({
  location,
  quantity,
  setQuantity,
}: ProductQuantityInProductPage | ProductQuantityInCartItem) {
  return (
    <>
      <h4 className="font-medium mb-2">Quantity :</h4>
      <Select
        defaultValue={quantity.toString()}
        onValueChange={(value) => setQuantity(Number(value))}
      >
        <SelectTrigger className="w-[75px]">
          <SelectValue placeholder={quantity} />
        </SelectTrigger>
        <SelectContent className="">
          {Array.from(
            {
              length:
                location === EnumLocation.IN_CART_ITEM ? quantity + 10 : 10,
            },
            (_, index) => {
              const selectValue = (index + 1).toString();
              return (
                <SelectItem key={index} value={selectValue}>
                  {selectValue}
                </SelectItem>
              );
            },
          )}
        </SelectContent>
      </Select>
    </>
  );
}
