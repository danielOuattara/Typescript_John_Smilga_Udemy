import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink } from "react-router-dom";
import { navLinks } from "@/utilities";
import { AlignRight } from "lucide-react";

export default function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <AlignRight />
          <span className="sr-only">Toggle links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="lg:hidden w-42"
        align="end"
        sideOffset={15}
      >
        {navLinks.map((link) => (
          <DropdownMenuItem key={link.label}>
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                `capitalize w-full flex justify-end mr-2 ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              {link.label} &nbsp;
              {link.icon}
            </NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
