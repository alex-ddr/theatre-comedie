import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPlay } from "@/lib/content";
import Tag from "@/components/ui/Tag";

export default function PlayDetail() {
    const { slug } = useParams();
    const play = slug ? getPlay(slug) : undefined;
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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
        return min === max ? `${min} comédiens` : `${min}-${max} comédiens`;
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
            <div className="relative h-[500px] w-full overflow-hidden">
                {/* Bouton play si vidéo disponible - placé en premier pour utiliser peer */}
                {youtubeId && (
                    <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="peer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-500 text-white shadow-2xl shadow-pink-500/50 z-10"
                        aria-label="Lire la vidéo"
                    >
                        <svg className="ml-1 h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                )}
                
                <img 
                    src={`/img/${play.slug}.png`}
                    alt={play.title}
                    className="h-full w-full object-cover transition-transform duration-500 peer-hover:scale-110"
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

            {/* Modale vidéo YouTube */}
            {isVideoPlaying && youtubeId && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={() => setIsVideoPlaying(false)}
                >
                    <button
                        onClick={() => setIsVideoPlaying(false)}
                        className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-110"
                        aria-label="Fermer la vidéo"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div 
                        className="relative mx-4 w-full max-w-6xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
                            <iframe
                                className="h-full w-full"
                                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                                title={`Vidéo de ${play.title}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}

            <div className="mx-auto max-w-[1400px] px-10 py-10">
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
                <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
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
                                    download
                                    className="block w-full rounded-2xl bg-gradient-to-r from-pink-500 to-orange-500 px-6 py-4 text-center text-base font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-pink-500/30"
                                >
                                    📄 Télécharger le début (PDF)
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}