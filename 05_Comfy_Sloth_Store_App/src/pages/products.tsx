import {
  Filters,
  ProductsContainer,
  PaginationRenderContainer,
} from "@/components";

export default function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationRenderContainer />
    </>
  );
}
