import { useAppSelector } from "@/hooks";
import { links } from "@/utilities";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-4">
      {links.map((link) => {
        if (link.restricted && !user) {
          return null;
        }
        return (
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
        );
      })}
    </div>
  );
}
