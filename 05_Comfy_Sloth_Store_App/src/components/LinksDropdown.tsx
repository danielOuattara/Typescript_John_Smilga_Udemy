import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Button } from "./ui/button";
import { links } from "@/utilities";
import { NavLink } from "react-router-dom";
import { AlignLeft } from "lucide-react";

export default function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant={"outline"} size={"icon"}>
          <AlignLeft />
          <span className="sr-only">Toggle links</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-52 lg:hidden"
        align="start"
        sideOffset={25}
      >
        {links.map((link) => (
          <DropdownMenuItem key={link.label}>
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                `capitalize w-full ${isActive ? "text-primary" : ""}`
              }
            >
              {link.label}
            </NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
