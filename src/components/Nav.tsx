// [theatre-comedie-vite-ts] #1
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
    const link = "px-3 py-2 rounded-full hover:bg-white/10 transition-colors";
    const active = ({ isActive }: { isActive: boolean }) =>
        isActive ? `${link} bg-white/10` : link;
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <Link
                    to="/"
                    className="gradient-text text-lg font-semibold transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_15px_rgba(255,122,24,0.8)]"
                >
                    Théâtre & Comédie
                </Link>
                <nav className="flex items-center gap-2 text-sm">
                    <NavLink to="/pieces" className={active}>
                        Catalogue
                    </NavLink>
                    <NavLink to="/auteur" className={active}>
                        Auteur
                    </NavLink>
                    <NavLink to="/contact" className={active}>
                        Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
