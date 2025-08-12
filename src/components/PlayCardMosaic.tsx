// [theatre-comedie] #10
import React from "react";
import { Link } from "react-router-dom";
import type { Play } from "@/types";

type Variant = "normal" | "wide";

function Poster({ poster, title }: { poster?: string; title: string }) {
    const [ok, setOk] = React.useState(true);
    const src = poster ? (poster.startsWith("/") ? poster : `/${poster}`) : "";
    return (
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10">
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

export default function PlayCardMosaic({
    play,
    variant = "normal",
}: {
    play: Play;
    variant?: Variant;
}) {
    // Layout: wide = image à gauche, texte à droite (sur >= md)
    const wide = variant === "wide";
    return (
        <Link
            to={`/pieces/${play.slug}`}
            className={`group glass rounded-2xl p-4 ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-rose-400/40 ${wide ? "md:col-span-2" : ""}`}
        >
            <div
                className={`${wide ? "md:grid md:grid-cols-[240px_1fr] md:gap-4" : ""}`}
            >
                <Poster poster={play.poster} title={play.title} />
                <div className={`${wide ? "mt-3 md:mt-0" : "mt-3"} min-w-0`}>
                    <h3 className="group-hover:gradient-text truncate text-base font-semibold">
                        {play.title}
                    </h3>
                    <p className="mt-1 line-clamp-3 text-sm text-white/75">
                        {play.accroche}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-white/75">
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
            </div>
        </Link>
    );
}
