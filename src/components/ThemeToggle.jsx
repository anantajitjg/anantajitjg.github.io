import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="relative">
      <button
        onClick={() => setTheme((theme) => (theme === "dark" ? "light" : "dark"))}
        className="p-2 rounded-full text-white hover:bg-white/20 transition-colors"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 top-2 left-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  );
};
