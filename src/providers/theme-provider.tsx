"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
        theme: Theme;
        toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
        const [theme, setTheme] = useState<Theme>(() => {
                // Initialize from localStorage if available
                if (typeof window !== "undefined") {
                        const saved = localStorage.getItem("theme") as Theme | null;
                        return saved || "light";
                }
                return "light";
        });

        useEffect(() => {
                // Apply theme class to document
                document.documentElement.classList.toggle("dark", theme === "dark");
                localStorage.setItem("theme", theme);
        }, [theme]);

        const toggleTheme = () => {
                setTheme(prev => prev === "light" ? "dark" : "light");
        };

        return (
                <ThemeContext.Provider value={{ theme, toggleTheme }}>
                        {children}
                </ThemeContext.Provider>
        );
}

export function useTheme() {
        const context = useContext(ThemeContext);
        if (context === undefined) {
                throw new Error("useTheme must be used within a ThemeProvider");
        }
        return context;
}
