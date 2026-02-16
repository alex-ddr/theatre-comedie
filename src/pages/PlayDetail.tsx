import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPlay } from "@/lib/content";
import Tag from "@/components/ui/Tag";
import type { Play } from "@/types";

export default function PlayDetail() {
    const { slug } = useParams();
    const [play, setPlay] = useState<Play | undefined>();
    const [loading, setLoading] = useState(true);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    useEffect(() => {
        if (!slug) {
            setLoading(false);
            return;
        }
        
        getPlay(slug).then(foundPlay => {
            setPlay(foundPlay);
            setLoading(false);
        });
    }, [slug]);

    if (loading) {
        return (
            <div className="mx-auto max-w-3xl px-4 py-16">
                <div className="h-72 w-full bg-white/5 animate-pulse rounded-lg mb-8" />
                <div className="space-y-4">
                    <div className="h-8 bg-white/5 animate-pulse rounded w-3/4" />
                    <div className="h-4 bg-white/5 animate-pulse rounded w-1/2" />
                </div>
            </div>
        );
    }
    
    if (!play) {
        return (
            <div className="mx-auto max-w-3xl px-4 py-16 text-center">
                <p className="text-white/70">Pièce introuvable.</p>
                <Link to="/" className="btn-primary mt-6 inline-block">
                    Retour au catalogue
                </Link>
            </div>
        );
    }

    const pdfUrl = `/pdf/${play.slug}.pdf`;
    console.log(`Vérification de l'existence du PDF à l'URL : ${pdfUrl}`);
    
    // Calculer min et max des distributions
    const getDistributionRange = () => {
        if (!play.distributions || play.distributions.length === 0) return null;
        const totals = play.distributions.map(d => d.total);
        const min = Math.min(...totals);
        const max = Math.max(...totals);
        return min === max ? `${min} rôles` : `${min} à ${max} rôles`;
    };
    
    const distributionRange = getDistributionRange();
    
    // Extraire l'ID YouTube de l'URL
    const getYouTubeId = (url: string) => {
        const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
        return match ? match[1] : null;
    };
    
    const youtubeId = play.youtube ? getYouTubeId(play.youtube) : null;

    return (
        <article>
            {/* Bandeau d'image pleine largeur */}
            <div className="relative h-72 w-full overflow-hidden border-b-1 border-b-orange-500/40 shadow-[0_8px_24px_-8px_rgba(251,146,60,0.5)] z-10">
                <img 
                    src={`/img/${play.slug}.png`}
                    alt={play.title}
                    className="h-full w-full object-cover transition-transform duration-500"
                    width="1200"
                    height="600"
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/95 via-[#0a0a0f]/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-10 pointer-events-none">
                    <div className="mx-auto max-w-[1400px]">
                        {/* En-tête avec titre et accroche */}
                        <header className="mb-4">
                            <h1 className="gradient-text mb-3 text-6xl font-bold leading-tight">
                                {play.title}
                            </h1>
                            <p className="text-xl text-white/80 max-w-3xl">{play.accroche}</p>
                        </header>
                        {/* Informations sous forme de tags */}
                        <div className="flex flex-wrap gap-2">
                            {play.genre && (
                                <span className="rounded-full border border-pink-400/40 bg-pink-500/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/90">
                                    {play.genre}
                                </span>
                            )}
                            {play.duration && (
                                <span className="rounded-full border border-pink-400/40 bg-pink-500/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/90">
                                    {play.duration}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-5/6 px-10 py-10">
                {/* Tags en pleine largeur */}
                {play.tags && play.tags.length > 0 && (
                    <div className="glass mb-8 rounded-2xl p-6">
                        <h3 className="mb-4 text-lg font-semibold text-white/90">
                            Tags
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {play.tags.map((tag, i) => (
                                <Tag key={i}>{tag}</Tag>
                            ))}
                        </div>
                    </div>
                )}

                {/* Grille principale avec sections de contenu à gauche et distributions à droite */}
                <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
                    {/* Colonne gauche - Sections de contenu */}
                    <div className="space-y-6">
                        {/* Sections de contenu */}
                        {play.sections && (
                            <>
                                {Object.entries(play.sections).map(([key, value]) => (
                                    <div
                                        key={key}
                                        className="glass rounded-2xl p-8"
                                    >
                                        <h3 className="mb-4 text-2xl font-semibold text-pink-400">
                                            {key[0].toUpperCase() + key.slice(1)}
                                        </h3>
                                        <p className="whitespace-pre-line text-lg leading-relaxed text-white/80">
                                            {value}
                                        </p>
                                    </div>
                                ))}
                                {/* Vidéo YouTube sous les blocs de texte, dans la colonne de gauche */}
                                {youtubeId && (
                                    <div className="my-8">
                                        <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
                                            <iframe
                                                className="h-full w-full"
                                                src={`https://www.youtube.com/embed/${youtubeId}`}
                                                title={`Vidéo de ${play.title}`}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Colonne droite sticky - Distributions et téléchargement */}
                    <div className="space-y-6">
                        <div className="sticky top-24 space-y-6">
                            {/* Distributions possibles */}
                            {play.distributions && play.distributions.length > 0 && (
                                <div className="glass rounded-2xl p-5">
                                    <div className="mb-4 flex items-baseline justify-between">
                                        <h3 className="text-lg font-semibold text-white/90">
                                            Distributions
                                        </h3>
                                        {distributionRange && (
                                            <span className="text-sm font-medium text-pink-400">
                                                {distributionRange}
                                            </span>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        {play.distributions.map((dist, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"
                                            >
                                                <span className="text-xl font-bold text-pink-400 min-w-6 text-right">
                                                    {dist.total}
                                                </span>
                                                <div className="flex flex-1 gap-2 text-sm">
                                                    <div className="flex-1 rounded-lg bg-blue-500/15 px-3 py-2 text-center font-medium text-white/90">
                                                        {dist.h} H
                                                    </div>
                                                    <div className="flex-1 rounded-lg bg-pink-500/15 px-3 py-2 text-center font-medium text-white/90">
                                                        {dist.f} F
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Bouton téléchargement */}
                            {pdfUrl && (
                                <a
                                    href={pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full rounded-2xl bg-gradient-to-r from-pink-500 to-orange-500 px-6 py-4 text-center text-base font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-pink-500/30"
                                >
                                    Télécharger la pièce (PDF)
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}