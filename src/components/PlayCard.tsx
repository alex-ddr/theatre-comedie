// [theatre-comedie-vite-ts] #1
import React from "react";
import { Link } from "react-router-dom";
import type { Play } from "@types";

function Poster({ poster }: { poster?: string }) {
    if (!poster) {
        return (
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-pink-500/30 to-rose-500/40" />
                <div className="absolute inset-0 backdrop-blur-md" />
                <div className="relative flex h-full w-full items-end p-3 text-xs text-white/50">
                    Affiche non fournie
                </div>
            </div>
        );
    }
    const src = poster.startsWith("/") ? poster : `/${poster}`;
    return (
        <img
            src={src}
            alt=""
            className="aspect-[3/4] w-full rounded-2xl border border-white/10 object-cover"
            loading="lazy"
        />
    );
}

export default function PlayCard({ play }: { play: Play }) {
    return (
        <Link
            to={`/pieces/${play.slug}`}
            className="group glass block rounded-3xl p-3 transition-colors hover:bg-white/10"
        >
            <Poster poster={play.poster} />
            <div className="p-3">
                <h3 className="group-hover:gradient-text text-lg font-semibold transition-colors">
                    {play.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-white/60">
                    {play.accroche}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/60">
                    {play.genre && (
                        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
                            {play.genre}
                        </span>
                    )}
                    {play.duration && (
                        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
                            {play.duration}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}
