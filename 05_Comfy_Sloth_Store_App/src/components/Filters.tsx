import { Form, Link, useLoaderData } from "react-router-dom";
import { Button } from "./ui/button";
import { FormInput } from "@/components";

export default function Filters() {
  const {
    searchParamsObject: { search },
  } = useLoaderData() as ProductsResponseWithSearchParams;
  return (
    <Form className="border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <div className="mb-2">
        <FormInput
          type="search"
          label="search product"
          name="search"
          defaultValue={search}
        />
      </div>
      <Button type="submit" size="sm" className="self-end mb-2">
        search
      </Button>
      <Button
        type="button"
        asChild
        size="sm"
        variant="outline"
        className="self-end mb-2"
      >
        <Link to="/products">reset</Link>
      </Button>
    </Form>
  );
}
