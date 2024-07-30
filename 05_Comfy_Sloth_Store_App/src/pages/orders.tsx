import { PaginationContainerRich, SectionTitle } from "@/components";
import OrdersList from "@/components/OrdersList";
import { useLoaderData } from "react-router-dom";

export default function Orders() {
  const { meta } = useLoaderData() as OrdersResponse;

  if (meta.pagination.total < 1) {
    return <SectionTitle text="Please make an order" />;
  }
  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrdersList />
      <PaginationContainerRich meta={meta} />
    </>
  );
}
