import { useState } from "react";
import { Link } from "react-router-dom";
import type { Play } from "@/types";
import Tag from "@/components/ui/Tag";

export default function PlayCardImage({ play }: { play: Play }) {
    const [imgOk, setImgOk] = useState(true);
    const imageSrc = `/img/${play.slug}.png`;

    return (
        <Link
            to={`/pieces/${play.slug}`}
            className="group glass relative flex h-[400px] transform-gpu flex-col overflow-hidden rounded-2xl transition-all duration-200 hover:bg-white/[0.06] hover:shadow-[0_4px_30px_rgba(212,160,83,0.08)] hover:ring-1 hover:ring-accent/20"
        >
            {/* Image de fond */}
            <div className="absolute inset-0">
                {imgOk ? (
                    <img
                        src={imageSrc}
                        alt={play.title}
                        className="h-full w-full object-cover"
                        width="400"
                        height="400"
                        loading="lazy"
                        decoding="async"
                        onError={() => setImgOk(false)}
                    />
                ) : (
                    <div className="h-full w-full bg-gradient-to-br from-amber-700/25 via-rose-600/15 to-purple-700/20" />
                )}
            </div>

            {/* Tags en haut à gauche */}
            <div className="relative z-10 flex flex-wrap gap-2 p-4 text-[11px]">
                {play.genre && <Tag>{play.genre}</Tag>}
                {play.duration && <Tag>{play.duration}</Tag>}
            </div>

            {/* Encoche semi-transparente en bas avec titre et description */}
            <div className="relative z-10 mt-auto bg-black/60 p-4 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white/90 transition-colors group-hover:text-accent-light">
                    {play.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-white/80">
                    {play.accroche}
                </p>
            </div>
        </Link>
    );
}
