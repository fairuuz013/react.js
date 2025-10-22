import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className="absolute top-4 right-4">
            <Button
                variant="outline"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                {theme === "light" ? "☀️ Light" : "🌙 Dark"}
            </Button>
        </div>
    );
}

