// [TheatreDynamic] #3
import { Link, NavLink, Outlet } from "react-router-dom";
import { useTheme } from "@theme/ThemeProvider";
import { useScrollProgress } from "@hooks/useScrollProgress";

const nav = [
    { to: "/pieces", label: "Pièces" },
    { to: "/par-distribution", label: "Par distribution" },
    { to: "/a-propos", label: "L’auteur" },
    { to: "/ils-ont-joue", label: "Ils ont joué" },
    { to: "/contact", label: "Contact" },
];

export default function Layout() {
    const { theme, toggle } = useTheme();
    const progress = useScrollProgress();
    return (
        <div className="min-h-screen">
            <header
                className="header"
                style={{ ["--scrollX" as any]: `${progress * 100}%` }}
            >
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    <Link
                        to="/"
                        className="text-lg font-extrabold tracking-tight"
                    >
                        <span
                            style={{
                                color: "#fff",
                                background: "var(--ink)",
                                padding: "2px 8px",
                                borderRadius: 999,
                            }}
                        >
                            Théâtre
                        </span>
                        <span className="mx-1 text-neutral-500">/</span>
                        <span
                            style={{
                                color: "#fff",
                                background: "var(--tomato)",
                                padding: "2px 8px",
                                borderRadius: 999,
                            }}
                        >
                            Comédies
                        </span>
                    </Link>
                    <nav className="flex items-center gap-2 text-sm">
                        {nav.map((n) => (
                            <NavLink
                                key={n.to}
                                to={n.to}
                                className={({ isActive }) =>
                                    `link-underline rounded-full px-3 py-1.5 transition ${isActive ? "bg-[var(--ink)] text-white" : "hover:bg-[color-mix(in oklab, var(--sand) 30%, transparent)]"}`
                                }
                            >
                                {n.label}
                            </NavLink>
                        ))}
                        <button
                            aria-label="Basculer le thème"
                            onClick={toggle}
                            className="btn btn-ghost ml-2 text-xs"
                        >
                            {theme === "dark" ? "☀︎" : "☾"}
                        </button>
                    </nav>
                </div>
            </header>
            <Outlet />
            <footer className="footer mt-20 py-12 text-sm">
                <div className="mx-auto max-w-6xl px-4 text-neutral-600 dark:text-neutral-300">
                    © {new Date().getFullYear()} Théâtre & Comédies — Tous
                    droits réservés.
                </div>
            </footer>
        </div>
    );
}
