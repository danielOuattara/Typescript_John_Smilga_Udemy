import { Link, useLoaderData } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { formatMoney } from "@/utilities";

export default function ProductsGrid() {
  const { data: products } = useLoaderData() as ProductsResponse;
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <Card>
            <CardContent className="p-4">
              <img
                src={product.attributes.image}
                alt={product.attributes.title}
                className="rounded-md h-64 md:h-48 w-full object-cover"
              />
              <div className="mt-4 text-center">
                <h2 className="text-xl font-semibold capitalize">
                  {product.attributes.title}
                </h2>
                <p className="text-primary font-light mt-2">
                  {formatMoney(product.attributes.price)}
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
