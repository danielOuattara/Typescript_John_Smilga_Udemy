import { navLinks } from "@/utilities";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-4">
      {navLinks.map((link) => {
        return (
          <NavLink
            key={link.label}
            to={link.href}
            className={({ isActive }) =>
              `capitalize tracking-tighter ${isActive ? "text-primary" : ""}`
            }
          >
            <div className="flex justify-between">
              {link.icon}
              &nbsp;
              {link.label}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}
