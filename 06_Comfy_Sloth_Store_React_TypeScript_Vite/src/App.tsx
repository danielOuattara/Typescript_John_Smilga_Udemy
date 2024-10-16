import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as pages from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <pages.HomeLayout />,
    children: [
      { index: true, element: <pages.Landing /> },
      { path: "products", element: <pages.Products /> },
      { path: "products/:productId", element: <pages.SingleProduct /> },
      { path: "cart", element: <pages.Cart /> },
      { path: "about", element: <pages.About /> },
      { path: "checkout", element: <pages.Checkout /> },
      { path: "orders", element: <pages.Orders /> },
    ],
  },

  {
    path: "/login",
    element: <pages.Login />,
  },
  {
    path: "/register",
    element: <pages.Register />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
