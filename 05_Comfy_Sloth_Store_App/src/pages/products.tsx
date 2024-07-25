import {
  Filters,
  ProductsContainer,
  PaginationRenderContainer,
  PaginationRenderContainerRich,
} from "@/components";

export default function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationRenderContainer />
      <PaginationRenderContainerRich />
    </>
  );
}
