import { author } from "@/lib/content";

function IconBook() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M20 22H6.5A2.5 2.5 0 0 1 4 19.5V5A2 2 0 0 1 6 3h14v19z" />
        </svg>
    );
}
function IconSpark() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M12 2v6M12 16v6M2 12h6M16 12h6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M19.1 4.9l-4.2 4.2M9.1 14.9l-4.2 4.2" />
        </svg>
    );
}
function IconUsers() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

function Pill({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            {children}
        </span>
    );
}

export default function AboutStrip() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-8">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/20 backdrop-blur-xl">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-500/10 via-pink-500/8 to-rose-500/10" />
                <div className="pointer-events-none absolute -top-1 left-6 h-[3px] w-32 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400" />
                <div className="relative p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-orange-300">
                        À propos de l’auteur
                    </h3>
                    <p className="mt-1 text-white/75">
                        Pièces de théâtre & comédies…
                    </p>

                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                        <Pill>
                            <IconBook /> Textes contemporains prêts à jouer
                        </Pill>
                        <Pill>
                            <IconSpark /> Extraits PDF & accroches claires
                        </Pill>
                        <Pill>
                            <IconUsers /> Distributions souples (F/H)
                        </Pill>
                    </div>

                    {author.bioBlocks?.[0] && (
                        <p className="mt-5 leading-relaxed text-white/85">
                            {author.bioBlocks[0]}
                        </p>
                    )}

                    <a
                        href="/auteur"
                        className="btn-primary mt-5 inline-flex items-center gap-2"
                    >
                        En savoir plus
                        <svg
                            className="h-4 w-4 translate-y-[1px]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9 6l6 6-6 6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
