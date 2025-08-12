// [theatre-comedie] #13
import React from "react";
import { Link } from "react-router-dom";
import type { Play } from "@/types";
import Tag from "./Tag";

function Thumb({ poster, title }: { poster?: string; title: string }) {
    const [ok, setOk] = React.useState(true);
    const src = poster ? (poster.startsWith("/") ? poster : `/${poster}`) : "";
    return (
        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-lg">
            {poster && ok ? (
                <img
                    src={src}
                    alt={`Affiche – ${title}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={() => setOk(false)}
                />
            ) : (
                <div
                    className="h-full w-full"
                    style={{
                        background: `linear-gradient(135deg, 
                            rgba(249,115,22,0.35) 0%, 
                            rgba(251,124,44,0.32) 25%, 
                            rgba(236,72,153,0.28) 50%, 
                            rgba(244,63,94,0.32) 75%, 
                            rgba(239,76,117,0.35) 100%
                        )`,
                    }}
                />
            )}
        </div>
    );
}

export default function PlayListCompact({
    title,
    items,
    limit = 8,
}: {
    title: string;
    items: Play[];
    limit?: number;
}) {
    const list = items.slice(0, limit);
    return (
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-6">
            <h2 className="gradient-text mb-4 text-xl font-semibold">
                {title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
                {list.map((p) => (
                    <Link
                        key={p.slug}
                        to={`/pieces/${p.slug}`}
                        className="glass group/card flex cursor-pointer items-center gap-4 rounded-2xl p-4 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/30 hover:ring-pink-400/40"
                    >
                        <Thumb poster={p.poster} title={p.title} />
                        <div className="min-w-0 flex-1">
                            <h3 className="group-hover:gradient-text mb-1 truncate text-base font-semibold">
                                {p.title}
                            </h3>
                            {p.accroche && (
                                <p className="mb-2 line-clamp-2 text-sm leading-relaxed text-white/75">
                                    {p.accroche}
                                </p>
                            )}
                            <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/80">
                                {p.genre && <Tag>{p.genre}</Tag>}
                                {p.duration && <Tag>{p.duration}</Tag>}
                            </div>
                        </div>
                        {/* Flèche indicatrice */}
                        <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 text-white/50 transition-all duration-300 group-hover/card:translate-x-1 group-hover/card:text-pink-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                    </Link>
                ))}
            </div>
        </section>
    );
}
