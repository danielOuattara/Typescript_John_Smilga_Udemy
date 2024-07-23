import { Hero, FeaturedProducts } from "@/components";
import { useLoaderData } from "react-router-dom";

export default function Landing() {
  const res = useLoaderData() as ProductsResponse;
  console.log(res);
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

//---
