import { Link, NavLink } from "react-router-dom";

const tabsLeft = [
    { to: "/", label: "Pièces" },
    { to: "/ils-ont-joue", label: "Ils ont joué" },
];

const tabsRight = [
    { to: "/auteur", label: "Auteur" },
    { to: "/contact", label: "Contact" },
];

function TabLink({ to, label }: { to: string; label: string }) {
    return (
        <NavLink
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
                `rounded-full px-4 py-2 transition-colors outline-none ${isActive ? "bg-pink-500/20 text-pink-400 font-medium" : "text-white/60 hover:bg-white/5 hover:text-white/80"}`
            }
        >
            {label}
        </NavLink>
    );
}

export default function Nav() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b12]/80 backdrop-blur-xl">
            <div className="mx-auto flex w-5/6 items-center px-4 py-3">
                <Link
                    to="/"
                    className="gradient-text shrink-0 text-lg font-semibold"
                >
                    Théâtre & Comédie
                </Link>
                <nav className="ml-auto flex items-center gap-1 text-sm">
                    {tabsLeft.map((t) => (
                        <TabLink key={t.to} {...t} />
                    ))}
                </nav>
                <nav className="ml-auto flex items-center gap-1 text-sm">
                    {tabsRight.map((t) =>
                        t.to === "/contact" ? (
                            <NavLink
                                key={t.to}
                                to={t.to}
                                className={({ isActive }) =>
                                    `rounded-full px-3 py-1.5 text-sm font-medium transition-colors outline-none ${isActive ? "bg-pink-400 text-white" : "bg-white text-[#0b0b12] hover:bg-white/90"}`
                                }
                            >
                                {t.label}
                            </NavLink>
                        ) : (
                            <TabLink key={t.to} {...t} />
                        ),
                    )}
                </nav>
            </div>
        </header>
    );
}
