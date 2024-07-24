type TypeLink = {
  href: string;
  label: string;
};

type Theme = "dark" | "light" | "system";

type ThemeState = {
  theme: Theme;
};

type ProductsResponse = {
  data: Product[];
  meta: ProductsMeta;
};

type SearchParamsObject = {
  search?: string;
  category?: string;
  company?: string;
  order?: string;
  price?: string;
  shipping?: string;
  page?: number;
};

type ProductsResponseWithSearchParams = ProductsResponse & {
  searchParamsObject: SearchParamsObject;
};

type Product = {
  id: number;
  attributes: {
    category: string;
    company: string;
    createdAt: string;
    description: string;
    featured: boolean;
    image: string;
    price: string;
    publishedAt: string;
    shipping: boolean;
    title: string;
    updatedAt: string;
    colors: string[];
  };
};

type ProductsMeta = {
  categories: string[];
  companies: string[];
  pagination: Pagination;
};

type Pagination = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
};

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
};

type SelectInputProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  options: string[];
};

type FormRangeProps = {
  name: string;
  label?: string;
  defaultValue?: string;
};
