import * as Component from "./index";

export default function Navbar() {
  return (
    <nav className="bg-muted py-4">
      <div className="align-element flex justify-between items-center">
        <Component.Logo />
        <Component.LinksDropdown />
        <Component.NavLinks />
        <div className="flex justify-center items-center gap-x-4">
          <Component.CartButton />
          <Component.ModeToggle />
        </div>
      </div>
    </nav>
  );
}
