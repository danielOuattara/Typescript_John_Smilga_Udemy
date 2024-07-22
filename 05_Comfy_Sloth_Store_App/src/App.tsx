import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as pages from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <pages.Landing /> },
  { path: "/cart", element: <pages.Cart /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
