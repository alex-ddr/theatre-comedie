import { useState } from "react";
import { Link } from "react-router-dom";
import type { Play } from "@/types";
import Tag from "@/components/ui/Tag";

function Poster({ poster, title }: { poster?: string; title: string }) {
    const [ok, setOk] = useState(true);
    const src = poster ? (poster.startsWith("/") ? poster : `/${poster}`) : "";
    return (
        <div className="relative h-36 w-28 flex-shrink-0 overflow-hidden rounded-xl border border-white/10">
            {poster && ok ? (
                <img
                    src={src}
                    alt={`Affiche – ${title}`}
                    className="h-full w-full object-cover"
                    width="112"
                    height="144"
                    loading="lazy"
                    decoding="async"
                    onError={() => setOk(false)}
                />
            ) : (
                <div className="h-full w-full bg-gradient-to-br from-amber-700/25 via-rose-600/15 to-purple-700/20" />
            )}
        </div>
    );
}

export default function PlayCardInline({ play }: { play: Play }) {
    return (
        <Link
            to={`/pieces/${play.slug}`}
            className="group glass flex transform-gpu gap-4 rounded-2xl p-3.5 transition-all duration-200 hover:bg-white/[0.06] hover:shadow-[0_4px_30px_rgba(212,160,83,0.08)] hover:ring-1 hover:ring-accent/20"
        >
            <Poster poster={play.poster} title={play.title} />
            <div className="min-w-0 flex-1 pr-1">
                <h3 className="truncate text-base font-semibold text-white/90 transition-colors group-hover:text-accent-light">
                    {play.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-white/70">
                    {play.accroche}
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
                    {play.genre && <Tag>{play.genre}</Tag>}
                    {play.duration && <Tag>{play.duration}</Tag>}
                </div>
            </div>
        </Link>
    );
}
