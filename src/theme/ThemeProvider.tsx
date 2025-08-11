import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Ctx = { theme: "light" | "dark"; toggle: () => void };
const ThemeCtx = createContext<Ctx | null>(null);

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "light" || saved === "dark") return saved;
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") root.classList.add("dark");
        else root.classList.remove("dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const value = useMemo<Ctx>(
        () => ({
            theme,
            toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
        }),
        [theme],
    );

    return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
    const ctx = useContext(ThemeCtx);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}
