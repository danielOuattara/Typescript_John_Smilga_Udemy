import { Moon, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { themeActions } from "@/features/theme/themeSlice";
import { useEffect } from "react";

export default function ModeToggle() {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    if (currentTheme === "system") {
      // create a media query to list to monitor system theme changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      // define a callback function that dispatches a theme change
      const handleSystemThemeChange = () =>
        dispatch(themeActions.setSystemTheme());

      // Add the listener ofr the media query
      mediaQuery.addEventListener("change", handleSystemThemeChange);

      // Clean up the event listener on component unmount
      return () => {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
      };
    }
  }, [currentTheme, dispatch]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => dispatch(themeActions.setTheme("light"))}
        >
          light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => dispatch(themeActions.setTheme("dark"))}
        >
          dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => dispatch(themeActions.setTheme("system"))}
        >
          system
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
