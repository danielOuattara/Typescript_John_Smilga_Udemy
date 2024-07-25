import { customFetch } from "@/utilities";
import { type LoaderFunction } from "react-router-dom";

//-----------------------------

export const loaderFeaturedProducts: LoaderFunction =
  async (): Promise<ProductsResponse> => {
    const res = await customFetch<ProductsResponse>("/products?featured=true");
    return { ...res.data };
  };

//-----------------------------

export const loaderAllProducts: LoaderFunction = async ({
  // params,
  request,
  // context,
}): Promise<ProductsResponseWithSearchParams> => {
  //
  const { searchParams } = new URL(request.url);
  const searchParamsObject = Object.fromEntries(searchParams.entries());

  const res = await customFetch<ProductsResponseWithSearchParams>("/products", {
    params: { ...searchParamsObject },
  });
  return { ...res.data, searchParamsObject };
};

//-----------------------------

export const loaderSingleProduct: LoaderFunction = async ({
  params,
  // request,
  // context,
}) => {
  const res = await customFetch<SingleProductResponse>(
    `/products/${params.productId}`,
  );
  return { ...res.data };
};
