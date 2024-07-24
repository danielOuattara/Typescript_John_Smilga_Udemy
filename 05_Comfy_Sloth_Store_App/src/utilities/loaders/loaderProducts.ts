import { customFetch } from "@/utilities";
import { type LoaderFunction } from "react-router-dom";

export const loaderFeaturedProducts: LoaderFunction =
  async (): Promise<ProductsResponse> => {
    const res = await customFetch<ProductsResponse>("/products?featured=true");
    return { ...res.data };
  };

export const loaderAllProducts: LoaderFunction = async ({
  // params,
  request,
  // context,
}): Promise<ProductsResponse> => {
  // console.log("params = ", params);
  // console.log("request = ", request);
  // console.log("context = ", context);
  //
  const { searchParams } = new URL(request.url);
  const searchObject = Object.fromEntries(searchParams.entries());

  const res = await customFetch<ProductsResponse>("/products", {
    // params: { search: "chair", price: 25999 },
    params: { ...searchObject },
  });
  return { ...res.data };
};
