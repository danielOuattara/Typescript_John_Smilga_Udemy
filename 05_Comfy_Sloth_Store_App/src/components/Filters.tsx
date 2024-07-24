import { Form, Link, useLoaderData } from "react-router-dom";
import { Button } from "./ui/button";
import { FormInput, FormSelect } from "@/components";

export default function Filters() {
  const {
    searchParamsObject: { search, company, category, order },
    meta,
  } = useLoaderData() as ProductsResponseWithSearchParams;
  return (
    <Form className="border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <div className="mb-2">
        <FormInput
          type="search"
          label="search product"
          name="search"
          defaultValue={search}
        />
      </div>
      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        options={meta.categories}
        defaultValue={category}
      />
      {/* COMPANIES */}
      <FormSelect
        label="select company"
        name="company"
        options={meta.companies}
        defaultValue={company}
      />
      {/* ORDER */}
      <FormSelect
        label="order by"
        name="order"
        options={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
      />

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
