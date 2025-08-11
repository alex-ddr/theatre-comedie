// [theatre-comedie-vite-ts] #3
import React from "react";
import { minutesToLabel, getSiteStats } from "@/lib/content";
import CategoryCard from "./CategoryCard";
import SectionIntro from "./SectionIntro";

export default function CategoriesSection() {
    const s = getSiteStats();
    const topGenres = s.genres.slice(0, 3).map((g) => `${g.name} (${g.count})`);
    const topDurations = s.durations
        .slice(0, 2)
        .map((d) => `${d.label} (${d.count})`);
    const cast = s.castRange;
    const dur = s.durationRange;

    return (
        <section className="mx-auto max-w-6xl px-4 py-8">
            <SectionIntro
                title="Tout en un coup d’œil"
                subtitle="Un panorama synthétique de l’offre, basé exclusivement sur les données du site"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <CategoryCard
                    eyebrow="Catalogue"
                    title={`${s.totalPlays} pièces disponibles`}
                    bullets={[
                        `Extraits PDF pour ${s.pdfs}/${s.totalPlays}`,
                        `Genres couverts : ${s.genres.length}`,
                    ]}
                    cta={{ label: "Voir toutes les pièces", href: "/pieces" }}
                    delay={0}
                />
                <CategoryCard
                    eyebrow="Durées"
                    title={
                        dur
                            ? `De ${minutesToLabel(dur.min)} à ${minutesToLabel(dur.max)}`
                            : "Durées variées"
                    }
                    bullets={[
                        dur ? `Médiane ~ ${minutesToLabel(dur.median)}` : "—",
                        ...(topDurations.length
                            ? [`Populaires : ${topDurations.join(" · ")}`]
                            : []),
                    ]}
                    delay={0.05}
                />
                <CategoryCard
                    eyebrow="Distribution"
                    title={
                        cast
                            ? `${cast.min}–${cast.max} rôles (moy. ${cast.avg.toFixed(1)})`
                            : "Répartitions flexibles"
                    }
                    bullets={[
                        "Options F/H fréquentes",
                        "Répartitions précisées par pièce",
                    ]}
                    delay={0.1}
                />
                <CategoryCard
                    eyebrow="Genres"
                    title={
                        s.genres.length > 0
                            ? `${s.genres.length} genres`
                            : "Genres variés"
                    }
                    bullets={topGenres.length ? topGenres : undefined}
                    delay={0.15}
                />
                <CategoryCard
                    eyebrow="Téléchargements"
                    title="Extraits disponibles"
                    bullets={["Chaque fiche propose un PDF à lire / partager"]}
                    delay={0.2}
                />
                <CategoryCard
                    eyebrow="Découvrir"
                    title="Les coups de cœur & nouveautés"
                    bullets={["Sélections éditoriales mises en avant"]}
                    cta={{
                        label: "Voir Les plus appréciées",
                        href: "/#appreciees",
                    }}
                    delay={0.25}
                />
            </div>
        </section>
    );
}
