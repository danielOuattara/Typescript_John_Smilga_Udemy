import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";
import { Button } from "./ui/button";
import { links } from "@/utilities";
import { NavLink } from "react-router-dom";

export default function LinksDropdown() {
  // return <h1 className="text-4xl">LinksDropdown Page</h1>;
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
