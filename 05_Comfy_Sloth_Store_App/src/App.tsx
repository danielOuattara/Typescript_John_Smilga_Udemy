import * as Page from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page.HomeLayout />,
    children: [
      { index: true, element: <Page.Landing /> },
      { path: "/products", element: <Page.Products /> },
      { path: "/products/:productId", element: <Page.SingleProduct /> },
      { path: "/cart", element: <Page.Cart /> },
      { path: "/about", element: <Page.About /> },
      { path: "/checkout", element: <Page.Checkout /> },
      { path: "/orders", element: <Page.Orders /> },
    ],
  },
  { path: "/login", element: <Page.Login /> },
  { path: "/register", element: <Page.Register /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
