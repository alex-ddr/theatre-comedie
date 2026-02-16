import { useState, memo } from "react";
import { Link } from "react-router-dom";
import type { Play } from "@/types";
import Tag from "@/components/ui/Tag";

const PlayCardStyled = memo(({ play }: { play: Play }) => {
    const [imgOk, setImgOk] = useState(true);
    const imageSrc = `/img/${play.slug}.png`;
    const getDistributionRange = () => {
        if (!play.distributions || play.distributions.length === 0) return null;
        const totals = play.distributions.map(d => d.total);
        const min = Math.min(...totals);
        const max = Math.max(...totals);
        return min === max ? `${min} rôles` : `${min} à ${max} rôles`;
    };
    const distributionRange = getDistributionRange();
    return (
        <Link
            to={`/pieces/${play.slug}`}
            className="group glass relative flex h-[280px] transform-gpu flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.08] hover:shadow-[0_8px_40px_rgba(255,122,24,0.15),0_4px_20px_rgba(255,0,110,0.1)] inset-[1px] hover:ring-0 contain-layout"
        >
            {/* Gradient overlay animé */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-pink-500/0 to-rose-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
            
            {/* Image de fond avec overlay gradient */}
            <div className="absolute inset-0">
                {imgOk ? (
                    <>
                        <img
                            src={imageSrc}
                            alt={play.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            width="350"
                            height="280"
                            loading="lazy"
                            decoding="async"
                            onError={() => setImgOk(false)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b12]/100 via-[#0b0b12]/25 to-[#0b0b12]/10 transition-opacity duration-300 group-hover:opacity-70" />
                    </>
                ) : (
                    <div className="h-full w-full bg-gradient-to-br from-orange-500/20 via-pink-500/15 to-rose-500/20" />
                )}
            </div>

            {/* Effet glow en haut */}
            <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-30" />

            {/* Tags en haut à gauche */}
            <div className="relative z-10 flex flex-wrap gap-2 p-4 text-[11px]">
                {play.genre && <Tag genre={true} >{play.genre}</Tag>}
                {distributionRange && <Tag>{distributionRange}</Tag>}
                {play.duration && <Tag>{play.duration}</Tag>}
            </div>

            {/* Contenu en bas */}
            <div className="relative z-10 mt-auto p-5">
                {/* Ligne décorative avec gradient */}
                <div className="mb-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-transparent opacity-70 transition-all duration-300 group-hover:w-24 group-hover:opacity-100" />
                
                <h2 className="gradient-text text-2xl font-bold leading-tight transition-all duration-300 group-hover:scale-[1.02]">
                    {play.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/90 transition-colors duration-300 group-hover:text-white/100">
                    {play.accroche}
                </p>
            </div>

            {/* Bordure lumineuse au hover */}
            <div className="absolute inset-[-1px] rounded-3xl opacity-0 ring-2 ring-inset ring-gradient-to-br ring-orange-500/50  duration-300 group-hover:opacity-100" />
        </Link>
);});

export default PlayCardStyled;
