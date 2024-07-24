import { useLoaderData } from "react-router-dom";

export default function ProductsList() {
  const res = useLoaderData() as ProductsResponse;
  return <h2 className="text-4xl">ProductsList</h2>;
}
