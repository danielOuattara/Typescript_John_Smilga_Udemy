import { links } from "@/utilities";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-4">
      {links.map((link) => (
        <NavLink
          key={link.label}
          to={link.href}
          className={({ isActive }) =>
            `capitalize font-light tracking-wide ${
              isActive ? "text-primary" : ""
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}
