import {
  ProductsSearchForm,
  ProductsContainer,
  PaginationRenderContainer,
  PaginationRenderContainerRich,
} from "@/components";

export default function Products() {
  return (
    <>
      <ProductsSearchForm />
      <ProductsContainer />
      <PaginationRenderContainer />
      <PaginationRenderContainerRich />
    </>
  );
}
