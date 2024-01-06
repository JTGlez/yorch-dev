"use client"
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"

export default function ModeToggle() {
    const { theme, setTheme } = useTheme();
    console.log(theme)

    const toggleTheme = () => {
        let newTheme;
        if (theme === 'system') {
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            newTheme = prefersDarkMode ? 'light' : 'dark';
            console.log(newTheme)
        } else {
            newTheme = theme === 'light' ? 'dark' : 'light';
            console.log(newTheme)
        }
        setTheme(newTheme);
    }

    return (
        <Button variant="outline" size="icon" onClick={toggleTheme}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}