// [theatre-comedie] #9
import React from "react";
import { Link } from "react-router-dom";
import type { Play } from "@/types";

function Poster({ poster, title }: { poster?: string; title: string }) {
    const [ok, setOk] = React.useState(true);
    const src = poster ? (poster.startsWith("/") ? poster : `/${poster}`) : "";
    return (
        <div className="relative h-36 w-28 flex-shrink-0 overflow-hidden rounded-xl border border-white/10">
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
        </div>
    );
}

export default function PlayCardInline({ play }: { play: Play }) {
    return (
        <Link
            to={`/pieces/${play.slug}`}
            className="group glass flex min-w-[340px] transform-gpu gap-3 rounded-2xl p-3 shadow-lg ring-1 shadow-rose-500/10 ring-white/10 transition hover:bg-white/10 hover:ring-rose-400/40 sm:min-w-[420px]"
        >
            <Poster poster={play.poster} title={play.title} />
            <div className="min-w-0 flex-1 pr-1">
                <h3 className="group-hover:gradient-text truncate text-base font-semibold transition-colors">
                    {play.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-white/70">
                    {play.accroche}
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-white/75">
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
