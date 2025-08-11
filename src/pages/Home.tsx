// [theatre-comedie-vite-ts] #2
import React from "react";
import { motion } from "framer-motion";
import BlurBlob from "@/components/BlurBlob";
import PlayCardInline from "@/components/PlayCardInline";
import SectionIntro from "@/components/SectionIntro";
import { getFeatured, getRecent } from "@/lib/content";

export default function Home() {
    const featured = getFeatured();
    const recent = getRecent();
    return (
        <div className="relative">
            <BlurBlob className="pointer-events-none absolute inset-0 -z-10" />
            <section className="mx-auto max-w-6xl px-4 pt-12 pb-8">
                <div className="text-center">
                    <h1 className="gradient-text text-4xl font-extrabold tracking-tight md:text-6xl">
                        Comédies et pièces à jouer
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-white/70">
                        Des histoires vives, des personnages haut en couleur.
                        Téléchargez les débuts de pièce, découvrez la
                        distribution et l’esprit de chaque texte.
                    </p>
                </div>
            </section>

            <section id="appreciees" className="mx-auto max-w-6xl px-4 py-8">
                <SectionIntro
                    title="Les plus appréciées"
                    subtitle={`${featured.length} pièces sélectionnées`}
                />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
                >
                    {featured.map((p) => (
                        <PlayCardInline key={p.slug} play={p} />
                    ))}
                </motion.div>
            </section>

            <section id="recentes" className="mx-auto max-w-6xl px-4 py-8">
                <SectionIntro
                    title="Les plus récentes"
                    subtitle={`${recent.length} nouvelles ou mises à jour`}
                />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
                >
                    {recent.map((p) => (
                        <PlayCardInline key={p.slug} play={p} />
                    ))}
                </motion.div>
            </section>
        </div>
    );
}
