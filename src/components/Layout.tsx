import { Link, NavLink, Outlet } from "react-router-dom";
import { useTheme } from "@theme/ThemeProvider";

const nav = [
    { to: "/pieces", label: "Pièces" },
    { to: "/a-propos", label: "À propos" },
    { to: "/contact", label: "Contact" },
];

export default function Layout() {
    const { theme, toggle } = useTheme();

    return (
        <div className="bg-background text-foreground min-h-screen">
            <header className="sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800 dark:supports-[backdrop-filter]:bg-neutral-950/50">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    <Link
                        to="/"
                        className="text-lg font-extrabold tracking-tight"
                    >
                        <span className="bg-gradient-to-r from-pink-500 via-amber-500 to-sky-500 bg-clip-text text-transparent">
                            Théâtre & Comédies
                        </span>
                    </Link>
                    <nav className="flex items-center gap-2 text-sm">
                        {nav.map((n) => (
                            <NavLink
                                key={n.to}
                                to={n.to}
                                className={({ isActive }) =>
                                    `rounded-xl px-3 py-1.5 transition ${isActive ? "bg-neutral-900 text-white dark:bg-white dark:text-black" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"}`
                                }
                            >
                                {n.label}
                            </NavLink>
                        ))}
                        <button
                            aria-label="Basculer le thème"
                            onClick={toggle}
                            className="ml-2 rounded-xl border px-3 py-1.5 text-xs hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                        >
                            {theme === "dark" ? "☀︎ Clair" : "☾ Sombre"}
                        </button>
                    </nav>
                </div>
            </header>

            <Outlet />

            <footer className="text-muted-foreground mt-16 border-t py-10 text-sm dark:border-neutral-800">
                <div className="mx-auto max-w-6xl px-4">
                    © {new Date().getFullYear()} Théâtre & Comédies — Tous
                    droits réservés.
                </div>
            </footer>
        </div>
    );
}
