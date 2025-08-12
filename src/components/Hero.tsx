// [theatre-comedie] #9
import React from "react";

type Props = {
    title: string;
    subtitle?: string;
    cta?: { label: string; href: string };
    /** Image de fond optionnelle (ex: "/posters/xxx.jpg"). */
    bg?: string;
};

export default function Hero({ title, subtitle, cta, bg }: Props) {
    return (
        <section className="relative isolate overflow-hidden">
            {/* Fond : image optionnelle + dégradés + halos */}
            <div className="absolute inset-0 -z-10">
                {bg && (
                    <img
                        src={bg}
                        alt=""
                        className="h-full w-full object-cover opacity-35"
                        onError={(e) =>
                            (e.currentTarget.style.display = "none")
                        }
                    />
                )}
                <div className="bg-radial-orange-pink absolute inset-0" />
                <div className="pointer-events-none absolute -top-24 -left-32 h-[42rem] w-[42rem] rounded-full bg-orange-500/25 blur-3xl" />
                <div className="pointer-events-none absolute -right-24 -bottom-28 h-[38rem] w-[38rem] rounded-full bg-rose-500/25 blur-3xl" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
            </div>

            {/* Contenu centré : vrai bandeau */}
            <div className="mx-auto flex min-h-[72vh] max-w-6xl items-center justify-center px-4 py-20 text-center md:py-28">
                <div>
                    <h1 className="gradient-text text-5xl leading-tight font-extrabold tracking-tight md:text-7xl">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg">
                            {subtitle}
                        </p>
                    )}
                    {cta && (
                        <a
                            href={cta.href}
                            className="group relative mt-7 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 px-6 py-3 font-semibold shadow-2xl ring-2 shadow-rose-500/20 ring-white/25 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(244,63,94,0.6)] hover:ring-rose-400/80"
                            aria-label={cta.label}
                        >
                            {/* Effet de brillance animé */}
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                            {/* Contenu du bouton */}
                            <span className="relative z-10">{cta.label}</span>
                            <svg
                                viewBox="0 0 24 24"
                                className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M5 12h14M13 5l7 7-7 7" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>

            {/* Vague de séparation */}
            <svg
                className="absolute bottom-0 left-0 h-16 w-full text-[#0b0b12]"
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path
                    d="M0,32 C120,64 240,64 360,48 C480,32 600,0 720,8 C840,16 960,64 1080,72 C1200,80 1320,64 1440,40 L1440,120 L0,120 Z"
                    fill="currentColor"
                />
            </svg>
        </section>
    );
}
