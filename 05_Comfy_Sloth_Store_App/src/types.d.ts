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
