import {
  ProductsSearchForm,
  ProductsContainer,
  PaginationContainer,
  PaginationContainerRich,
} from "@/components";
import { useLoaderData } from "react-router-dom";

export default function Products() {
  const { meta } = useLoaderData() as ProductsResponseWithSearchParams;
  return (
    <>
      <ProductsSearchForm />
      <ProductsContainer />
      <PaginationContainer />
      <PaginationContainerRich meta={meta} />
    </>
  );
}
