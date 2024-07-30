type Order = {
  id: number;
  attributes: {
    address: string;
    cartItems: CartItem[];
    createdAt: string;
    name: string;
    numItemsInCart: number;
    orderTotal: string;
    publishedAt: string;
    updatedAt: string;
  };
};

type Pagination = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
};

type OrdersMeta = {
  pagination: Pagination;
};

type OrdersResponse = {
  data: Order[];
  meta: OrdersMeta;
};
