// import {
//   About,
//   Cart,
//   Checkout,
//   Error,
//   HomeLayout,
//   Landing,
//   Login,
//   Orders,
//   Products,
//   Register,
//   SingleProduct,
// } from "./pages";

import * as Page from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Page.Landing /> },
  { path: "/cart", element: <Page.Cart /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
