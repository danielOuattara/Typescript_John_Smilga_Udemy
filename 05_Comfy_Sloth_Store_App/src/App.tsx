import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as pages from "./pages";
import { ErrorElement } from "./components";
import {
  loaderFeaturedProducts,
  loaderAllProducts,
  loaderSingleProduct,
  actionRegister,
} from "./utilities";

const router = createBrowserRouter([
  {
    path: "/",
    element: <pages.HomeLayout />,
    errorElement: <pages.Error />,
    children: [
      {
        index: true,
        element: <pages.Landing />,
        errorElement: <ErrorElement />,
        loader: loaderFeaturedProducts,
      },
      {
        path: "/products",
        element: <pages.Products />,
        errorElement: <ErrorElement />,
        loader: loaderAllProducts,
      },
      {
        path: "/products/:productId",
        element: <pages.SingleProduct />,
        errorElement: <ErrorElement />,
        loader: loaderSingleProduct,
      },
      { path: "/cart", element: <pages.Cart /> },
      {
        path: "/about",
        element: <pages.About />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/checkout",
        element: <pages.Checkout />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/orders",
        element: <pages.Orders />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: "/login",
    element: <pages.Login />,
    errorElement: <pages.Error />,
  },
  {
    path: "/register",
    element: <pages.Register />,
    errorElement: <pages.Error />,
    action: actionRegister,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
