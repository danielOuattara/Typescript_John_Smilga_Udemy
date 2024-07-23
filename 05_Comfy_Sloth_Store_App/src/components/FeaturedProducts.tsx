import { ProductsGrid, SectionTitle } from "./index";

export default function FeaturedProducts() {
  return (
    <section className="pt-24 ">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </section>
  );
}
