// [theatre-comedie] #11
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Play } from "@/types";
import Tag from "./Tag";

function Poster({ poster, title }: { poster?: string; title: string }) {
    const [ok, setOk] = React.useState(true);
    const src = poster ? (poster.startsWith("/") ? poster : `/${poster}`) : "";
    return (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
            {poster && ok ? (
                <img
                    src={src}
                    alt={`Affiche – ${title}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={() => setOk(false)}
                />
            ) : (
                <div className="h-full w-full bg-gradient-to-br from-orange-500/35 via-pink-500/25 to-rose-500/35" />
            )}
            {/* liseré doux */}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/5 ring-inset" />
        </div>
    );
}

export default function PlayZigzag({
    title,
    items,
    ctaLabel = "Voir la pièce",
    limit = 6,
}: {
    title: string;
    items: Play[];
    ctaLabel?: string;
    limit?: number;
}) {
    const list = items.slice(0, limit);

    return (
        <section className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="gradient-text mb-6 text-2xl font-semibold">
                {title}
            </h2>

            <div className="space-y-10">
                {list.map((p, i) => {
                    const flip = i % 2 === 1;
                    return (
                        <motion.article
                            key={p.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.03 }}
                            className="grid items-center gap-6 hover:cursor-pointer md:grid-cols-2"
                        >
                            <Link to={`/pieces/${p.slug}`} className="contents">
                                {/* image */}
                                <div className={flip ? "md:order-last" : ""}>
                                    <Poster poster={p.poster} title={p.title} />
                                </div>

                                {/* texte */}
                                <div className="glass group/card rounded-2xl p-5 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/30 hover:ring-pink-400/40">
                                    <h3 className="mt-1 text-lg font-semibold">
                                        {p.title}
                                    </h3>
                                    {p.accroche && (
                                        <p className="mt-2 leading-relaxed text-white/75">
                                            {p.accroche}
                                        </p>
                                    )}
                                    <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-white/80">
                                        {p.genre && <Tag>{p.genre}</Tag>}
                                        {p.duration && <Tag>{p.duration}</Tag>}
                                    </div>
                                    <div className="mt-4">
                                        <span className="group/link relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 transition-all duration-300 group-hover/card:border-pink-400/30 group-hover/card:shadow-lg group-hover/card:shadow-pink-500/10 hover:border-pink-400/30 hover:shadow-lg hover:shadow-pink-500/20">
                                            {/* Dégradé animé en arrière-plan au hover du bouton */}
                                            <div className="absolute inset-0 origin-center scale-x-0 rounded-full bg-gradient-to-r from-pink-500/80 via-rose-500/80 to-red-500/80 opacity-0 transition-all duration-500 ease-out group-hover/link:scale-x-100 group-hover/link:opacity-100" />

                                            {/* Contenu du bouton */}
                                            <span className="relative z-10 transition-colors duration-300 group-hover/link:text-white">
                                                {ctaLabel}
                                            </span>
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="relative z-10 h-4 w-4 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M5 12h14M13 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
}
