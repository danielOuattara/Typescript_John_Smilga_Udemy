import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="align-element py-20">
        <Outlet />
      </div>
      <footer>Footer</footer>
    </>
  );
}
