import { Header, Loading, Navbar } from "@/components";
import { Outlet, useNavigation } from "react-router-dom";

export default function HomeLayout() {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <Navbar />
      <div className="align-element py-20">
        {navigation.state === "loading" ? <Loading /> : <Outlet />}
      </div>
    </>
  );
}
