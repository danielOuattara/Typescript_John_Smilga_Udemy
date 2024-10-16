import { Logo, LinksDropdown, NavLinks, ModeToggle, CartButton } from "./index";

export default function Navbar() {
  return (
    <nav className="bg-muted py-4">
      <div className="align-element flex justify-between items-center">
        <Logo />
        <NavLinks />
        {/* <div className="flex justify-center items-center gap-x-4"> */}
        <ModeToggle />
        <CartButton />
        {/* </div> */}
        <LinksDropdown />
      </div>
    </nav>
  );
}
