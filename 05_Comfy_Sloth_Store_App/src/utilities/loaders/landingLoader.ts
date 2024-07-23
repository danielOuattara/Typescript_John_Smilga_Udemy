import { customFetch } from "@/utilities";
import { LoaderFunction } from "react-router-dom";

export const landingLoader: LoaderFunction =
  async (): Promise<ProductsResponse> => {
    const res = await customFetch<ProductsResponse>("/products?featured=true");
    return { ...res.data };
  };
