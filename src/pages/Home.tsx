// [theatre-comedie] #11
import React from "react";
import Hero from "@/components/Hero";
import AboutStrip from "@/components/AboutStrip";
import PlayZigzag from "@/components/PlayZigzag";
import { getFeatured, getRecent } from "@/lib/content";
import BlurBlob from "@/components/BlurBlob";
import PlayListCompact from "@components/PlayListCompact";
import Footer from "@components/Footer";

export default function Home() {
    const featured = getFeatured();
    const recent = getRecent();

    const heroBg = featured[0]?.poster
        ? featured[0].poster.startsWith("/")
            ? featured[0].poster
            : `/${featured[0].poster}`
        : undefined;

    return (
        <div className="relative">
            <BlurBlob className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" />
            <Hero
                title="Comédies de Franck Didier"
                subtitle="Des histoires vives, prêtes à monter. Lisez un extrait, choisissez votre distribution, lancez la production."
                cta={
                    recent[0]
                        ? {
                              label: "Découvrir la dernière pièce",
                              href: `/pieces/${recent[0].slug}`,
                          }
                        : undefined
                }
                bg={heroBg}
            />
            {/* Section 1 : zig-zag élégant (pas de scroll horizontal) */}
            <div className="relative">
                <PlayListCompact
                    title="Les plus appréciées"
                    items={recent}
                    limit={8}
                />
            </div>
            {/* Bande intermédiaire auteur (sobre, avec icônes) */}
            <AboutStrip />
            {/* Section 2 : même pattern pour la cohérence visuelle */}
            {/* Effet de blur décoratif sous la cassure */}
            <div className="relative mt-8">
                <PlayZigzag title="Les plus récentes" items={featured} />
                <BlurBlob
                    className="pointer-events-none absolute -bottom-10 z-0 -translate-y-110"
                    aria-hidden="true"
                    animation={false}
                />
            </div>
            <div className="mt-8 flex -translate-y-8 transform justify-center">
                <div className="group relative">
                    <a
                        href="/pieces"
                        className="relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 px-8 py-4 font-semibold shadow-2xl ring-2 shadow-rose-500/20 ring-white/25 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(244,63,94,0.6)] hover:ring-rose-400/80"
                    >
                        {/* Effet de brillance animé */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                        <span className="relative z-10">
                            Voir le catalogue entier
                        </span>
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
                </div>
            </div>
            <Footer />
        </div>
    );
}
