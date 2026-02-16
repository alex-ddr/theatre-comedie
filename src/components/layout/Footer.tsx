import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="relative z-20 border-t border-white/10 bg-[#0b0b12] pt-4">
            <div className="mx-auto grid w-5/6 gap-8 px-4 py-10 sm:grid-cols-2">
                <div>
                    <h3 className="gradient-text text-xl font-semibold">
                        Théâtre & Comédie
                    </h3>
                    <p className="mt-2 text-white/70">
                        Pièces contemporaines, comédies et intrigues.
                    </p>
                </div>
                <div className="flex gap-6 text-white/70 sm:justify-end">
                    <Link to="/" className="hover:underline">
                        Pièces
                    </Link>
                    <Link to="/ils-ont-joue" className="hover:underline">
                        Ils ont joué
                    </Link>
                    <Link to="/auteur" className="hover:underline">
                        Auteur
                    </Link>
                    <Link to="/contact" className="hover:underline">
                        Contact
                    </Link>
                </div>
            </div>
            <div className="pb-8 text-center text-sm text-white/40">
                © {new Date().getFullYear()} Théâtre & Comédie
            </div>
        </footer>
    );
}
