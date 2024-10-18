import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <nav>navbar</nav>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}
