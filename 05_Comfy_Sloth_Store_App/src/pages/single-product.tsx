import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SelectProductColor, SelectProductQuantity } from "@/components";
import { formatMoney } from "@/utilities";
import { EnumLocation, SingleProductResponse } from "@/types.single-product";

export default function SingleProduct() {
  const { data: product } = useLoaderData() as SingleProductResponse;

  const [quantity, setQuantity] = useState(1);
  const [productColor, setProductColor] = useState(
    product.attributes.colors[0],
  );

  const addToCart = () => {
    console.log("add to cart");
  };

  return (
    <section>
      <div className="flex gap-x-2 h-6 items-center">
        <Button asChild variant="link" size="sm">
          <Link to="/">Home</Link>
        </Button>
        <Separator orientation="vertical" />
        <Button asChild variant="link" size="sm">
          <Link to="/products">Products</Link>
        </Button>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={product.attributes.image}
          alt={product.attributes.title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">
            {product.attributes.title}
          </h1>
          <h4 className="text-xl mt-2">{product.attributes.company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {formatMoney(product.attributes.price)}
          </p>
          <p className="mt-6 leading-8">{product.attributes.description}</p>
          {/* COLORS */}
          <SelectProductColor
            colors={product.attributes.colors}
            productColor={productColor}
            setProductColor={setProductColor}
          />

          {/* QUANTITY */}
          <SelectProductQuantity
            location={EnumLocation.IN_PRODUCT_PAGE}
            quantity={quantity}
            setQuantity={setQuantity}
          />

          {/* CART BUTTON */}
          <Button size="lg" className="mt-10" onClick={addToCart}>
            Add to bag
          </Button>
        </div>
      </div>
    </section>
  );
}
