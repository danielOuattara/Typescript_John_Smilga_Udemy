import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <nav>navbar</nav>
      <div className="align-element py-20">
        <Outlet />
      </div>
      <footer>Footer</footer>
    </>
  );
}
