export type SingleProductResponse = {
  data: Product;
  meta: Record<string, never>;
};

export type SelectProductColorProps = {
  colors: string[];
  productColor: string;
  setProductColor: React.Dispatch<React.SetStateAction<string>>;
};

// Product quantity
export enum EnumLocation {
  IN_PRODUCT_PAGE = "inProductPage",
  IN_CART_ITEM = "inCartItem",
}

export type ProductQuantityInProductPage = {
  location: EnumLocation.IN_PRODUCT_PAGE;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

export type ProductQuantityInCartItem = {
  location: EnumLocation.IN_CART_ITEM;
  quantity: number;
  setQuantity: (value: number) => void;
};
