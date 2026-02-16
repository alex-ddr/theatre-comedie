import React, { useEffect, useState } from "react";
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
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // lock body scroll when mobile menu is open
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header className="relative sticky top-0 z-50 border-b border-white/10  backdrop-blur-xl">
            {/* Stretching background: overlays page content but stays behind header content */}
            <div
                aria-hidden
                className={`absolute left-0 right-0 top-full transition-[height] duration-200 ease-in-out z-50 overflow-hidden ${open ? "h-[160px]" : "h-0"}`}
            >
                {/* Menu items live inside this stretched area on mobile (appears below header) */}
                <div className={`hidden md:block`} />
                <div className="md:hidden mx-auto flex h-full w-full items-center justify-center">
                    <div className={`w-full px-4 ${open ? "block" : "hidden"}`}>
                        <div className="mx-auto flex w-full flex-col items-center justify-center gap-2">
                            {tabsLeft.map((t) => (
                                <NavLink
                                    key={t.to}
                                    to={t.to}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                            `block w-full text-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive ? "bg-pink-500 text-white" : "bg-white/5 text-white"}`
                                    }
                                >
                                    {t.label}
                                </NavLink>
                            ))}

                            {tabsRight.map((t) => (
                                <NavLink
                                    key={t.to}
                                    to={t.to}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                            `block w-full text-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive ? "bg-pink-400 text-white" : "bg-white/5 text-white"}`
                                    }
                                >
                                    {t.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mx-auto flex w-5/6 items-center px-4 py-3">
                <Link to="/" className="gradient-text shrink-0 text-lg font-semibold">
                    Théâtre & Comédie
                </Link>

                <nav className="ml-auto hidden items-center gap-1 text-sm md:flex">
                    {tabsLeft.map((t) => (
                        <TabLink key={t.to} {...t} />
                    ))}
                </nav>

                <nav className="ml-4 hidden items-center gap-1 text-sm md:flex">
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

                {/* Burger button for mobile */}
                <button
                    onClick={() => setOpen((s) => !s)}
                    aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={open}
                    className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-md text-white/90 hover:bg-white/5 md:hidden"
                >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        {open ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <>
                                <path d="M3 12h18" />
                                <path d="M3 6h18" />
                                <path d="M3 18h18" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Click capture to close the menu when clicking outside (only on mobile) - covers area below header only */}
            {open && (
                <div className="fixed left-0 right-0 top-[64px] bottom-0 z-40 md:hidden" onClick={() => setOpen(false)} />
            )}
        </header>
    );
}
