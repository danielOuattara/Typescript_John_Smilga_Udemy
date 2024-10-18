import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <header>header</header>
      <nav>navbar</nav>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}
