import { useLoaderData } from "react-router-dom";
import { ProductsGrid, ProductsList } from "./index";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LayoutGrid, List } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function ProductsContainer() {
  const { meta } = useLoaderData() as ProductsResponse;
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  return (
    <>
      <section>
        <div className="flex justify-between items-center mt-8 p-4">
          <h4 className="font-medium text-md">
            {meta.pagination.total} product{meta.pagination.total > 1 && "s"}
          </h4>
          <div className="flex gap-x-4">
            <Button
              onClick={() => setLayout("grid")}
              variant={layout === "grid" ? "default" : "outline"}
              size="icon"
            >
              <LayoutGrid />
            </Button>
            <Button
              onClick={() => setLayout("list")}
              size="icon"
              variant={layout === "list" ? "default" : "outline"}
            >
              <List />
            </Button>
          </div>
        </div>
      </section>
      <Separator className="mt-4" />
      <div>
        {meta.pagination.total === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
}
