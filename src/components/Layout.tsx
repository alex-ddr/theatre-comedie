// [TheatreComedie-Vite] #3
import { Link, NavLink, Outlet } from "react-router-dom";
import { useTheme } from "@theme/ThemeProvider";
import FooterLinks from "./FooterLinks";

const nav = [
    { to: "/pieces", label: "Pièces" },
    { to: "/par-distribution", label: "Par distribution" },
    { to: "/a-propos", label: "L’auteur" },
    { to: "/ils-ont-joue", label: "Ils ont joué" },
    { to: "/contact", label: "Contact" },
];

export default function Layout() {
    const { theme, toggle } = useTheme();

    return (
        <div className="bg-paper min-h-screen">
            <header className="header-glass sticky top-0 z-50 border-b dark:border-neutral-800">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    <Link
                        to="/"
                        className="text-lg font-extrabold tracking-tight"
                    >
                        <span className="text-[color:var(--brand-1)]">
                            Théâtre
                        </span>
                        <span className="text-neutral-500"> & </span>
                        <span className="text-[color:var(--brand-2)]">
                            Comédies
                        </span>
                    </Link>
                    <nav className="flex items-center gap-2 text-sm">
                        {nav.map((n) => (
                            <NavLink
                                key={n.to}
                                to={n.to}
                                className={({ isActive }) =>
                                    `link-underline rounded-xl px-3 py-1.5 transition ${isActive ? "bg-neutral-900 text-white dark:bg-white dark:text-black" : "hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60"}`
                                }
                            >
                                {n.label}
                            </NavLink>
                        ))}
                        <button
                            aria-label="Basculer le thème"
                            onClick={toggle}
                            className="ml-2 rounded-xl border px-3 py-1.5 text-xs hover:bg-neutral-100/60 dark:border-neutral-700 dark:hover:bg-neutral-800/60"
                        >
                            {theme === "dark" ? "☀︎" : "☾"}
                        </button>
                    </nav>
                </div>
            </header>

            <Outlet />

            <footer className="text-muted-foreground mt-16 border-t py-10 text-sm dark:border-neutral-800">
                <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4">
                    <FooterLinks />
                    <div>
                        © {new Date().getFullYear()} Théâtre & Comédies — Tous
                        droits réservés.
                    </div>
                </div>
            </footer>
        </div>
    );
}
