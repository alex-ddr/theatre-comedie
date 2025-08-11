// [theatre-comedie-vite-ts] #1
import React from "react";
import { motion } from "framer-motion";
import BlurBlob from "@components/BlurBlob";
import PlayCard from "@components/PlayCard";
import { getFeatured, getRecent } from "@lib/content";

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
                    <div className="mt-6 flex justify-center gap-3">
                        <a href="/#appreciees" className="btn-primary">
                            Les plus appréciées
                        </a>
                        <a href="/#recentes" className="btn-primary">
                            Les plus récentes
                        </a>
                    </div>
                </div>
            </section>

            <section id="appreciees" className="mx-auto max-w-6xl px-4 py-8">
                <h2 className="gradient-text mb-4 text-2xl font-semibold">
                    Les plus appréciées
                </h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {featured.map((p) => (
                        <PlayCard key={p.slug} play={p} />
                    ))}
                </motion.div>
            </section>

            <section id="recentes" className="mx-auto max-w-6xl px-4 py-8">
                <h2 className="gradient-text mb-4 text-2xl font-semibold">
                    Les plus récentes
                </h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {recent.map((p) => (
                        <PlayCard key={p.slug} play={p} />
                    ))}
                </motion.div>
            </section>
        </div>
    );
}
