"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
        theme: Theme;
        toggleTheme: () => void;
        primaryColor: string;
        setPrimaryColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
        const [theme, setTheme] = useState<Theme>(() => {
                if (typeof window !== "undefined") {
                        const saved = localStorage.getItem("theme") as Theme | null;
                        return saved || "light";
                }
                return "light";
        });

        const [primaryColor, setPrimaryColor] = useState<string>(() => {
                if (typeof window !== "undefined") {
                        const saved = localStorage.getItem("primaryColor");
                        return saved || "#6366f1";
                }
                return "#6366f1";
        });

        useEffect(() => {
                document.documentElement.classList.toggle("dark", theme === "dark");
                localStorage.setItem("theme", theme);
        }, [theme]);

        useEffect(() => {
                document.documentElement.style.setProperty("--color-primary", primaryColor);
                localStorage.setItem("primaryColor", primaryColor);
        }, [primaryColor]);

        const toggleTheme = () => {
                setTheme(prev => prev === "light" ? "dark" : "light");
        };

        return (
                <ThemeContext.Provider value={{ theme, toggleTheme, primaryColor, setPrimaryColor }}>
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
