import { useState, useMemo } from "react";
import Hero from "@/components/layout/Hero";
import { getAllPlays } from "@/lib/content";
import PlayCardStyled from "@/components/plays/PlayCardStyled";

export default function Home() {
    const allPlays = getAllPlays();

    const { minH, maxH, minF, maxF } = useMemo(() => {
        let minH = Infinity;
        let maxH = -Infinity;
        let minF = Infinity;
        let maxF = -Infinity;

        allPlays.forEach((play) => {
            play.distributions?.forEach((dist) => {
                if (dist.h < minH) minH = dist.h;
                if (dist.h > maxH) maxH = dist.h;
                if (dist.f < minF) minF = dist.f;
                if (dist.f > maxF) maxF = dist.f;
            });
        });

        return {
            minH: minH === Infinity ? 0 : minH,
            maxH: maxH === -Infinity ? 10 : maxH,
            minF: minF === Infinity ? 0 : minF,
            maxF: maxF === -Infinity ? 10 : maxF,
        };
    }, [allPlays]);

    const [numH, setNumH] = useState<number | null>(null);
    const [numF, setNumF] = useState<number | null>(null);
    const [showSliderH, setShowSliderH] = useState(false);
    const [showSliderF, setShowSliderF] = useState(false);

    const filteredPlays = useMemo(() => {
        if (!showSliderH && !showSliderF) {
            return allPlays;
        }

        return allPlays.filter((play) => {
            if (!play.distributions || play.distributions.length === 0) {
                return false;
            }

            return play.distributions.some((dist) => {
                const matchH = numH === null || dist.h === numH;
                const matchF = numF === null || dist.f === numF;
                return matchH && matchF;
            });
        });
    }, [numH, numF, showSliderH, showSliderF, allPlays]);

    return (
        <div>
            <Hero 
                title="Comédies de Franck Didier" 
                subtitle="Découvrez plus de 20 ans de comédies aux multiples distributions,
destinées aux troupes amateures comme aux compagnies professionnelles."
            />

            <section className="relative bg-[#0b0b12]/75 backdrop-blur-xl">
                <div className="mx-auto w-5/6 px-4 py-10">
                    <h2 className="mb-6 text-xl font-semibold text-white/80">
                        Recherche par distribution
                    </h2>
                    <div className="mb-8">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <label className="mb-3 block text-xs font-medium text-white/70">
                                    Nombre d'hommes
                                </label>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => {
                                            setShowSliderH(false);
                                            setNumH(null);
                                        }}
                                        className={`rounded-lg px-4 py-1.5 text-xs font-medium transition-all ${
                                            !showSliderH
                                                ? "bg-pink-500 text-white"
                                                : "border border-white/20 bg-white/5 text-white/60 hover:bg-white/10"
                                        }`}
                                    >
                                        Peu importe
                                    </button>
                                    <button
                                        onClick={() => {
                                            setShowSliderH(true);
                                            if (numH === null) setNumH(minH);
                                        }}
                                        className={`rounded-lg px-4 py-1.5 text-xs font-medium transition-all ${
                                            showSliderH
                                                ? "bg-pink-500 text-white"
                                                : "border border-white/20 bg-white/5 text-white/60 hover:bg-white/10"
                                        }`}
                                    >
                                        Choisir
                                    </button>
                                    <div className={`flex-1 transition-opacity ${showSliderH ? "opacity-100" : "opacity-30"}`}>
                                        <div className="relative">
                                            {showSliderH && (
                                                <div
                                                    className="absolute -top-6 text-xs font-semibold text-white"
                                                    style={{
                                                        left: `calc(${((numH === null ? minH : numH) - minH) / (maxH - minH) * 100}% - 6px)`,
                                                    }}
                                                >
                                                    {numH === null ? minH : numH}
                                                </div>
                                            )}
                                            <input
                                                id="numH"
                                                type="range"
                                                min={minH}
                                                max={maxH}
                                                step="1"
                                                value={numH === null ? minH : numH}
                                                onChange={(e) =>
                                                    setNumH(parseInt(e.target.value))
                                                }
                                                disabled={!showSliderH}
                                                className={`h-1.5 w-full appearance-none rounded-lg bg-white/10 accent-pink-500 ${showSliderH ? "cursor-pointer" : "cursor-not-allowed"}`}
                                                style={{
                                                    background: `linear-gradient(to right, rgb(236 72 153) 0%, rgb(236 72 153) ${numH === null ? 0 : ((numH - minH) / (maxH - minH)) * 100}%, rgba(255,255,255,0.1) ${numH === null ? 0 : ((numH - minH) / (maxH - minH)) * 100}%, rgba(255,255,255,0.1) 100%)`,
                                                }}
                                            />
                                            <div className="mt-1 flex justify-between text-xs text-white/30">
                                                <span>{minH}</span>
                                                <span>{maxH}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <label className="mb-3 block text-xs font-medium text-white/70">
                                    Nombre de femmes
                                </label>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => {
                                            setShowSliderF(false);
                                            setNumF(null);
                                        }}
                                        className={`rounded-lg px-4 py-1.5 text-xs font-medium transition-all ${
                                            !showSliderF
                                                ? "bg-pink-500 text-white"
                                                : "border border-white/20 bg-white/5 text-white/60 hover:bg-white/10"
                                        }`}
                                    >
                                        Peu importe
                                    </button>
                                    <button
                                        onClick={() => {
                                            setShowSliderF(true);
                                            if (numF === null) setNumF(minF);
                                        }}
                                        className={`rounded-lg px-4 py-1.5 text-xs font-medium transition-all ${
                                            showSliderF
                                                ? "bg-pink-500 text-white"
                                                : "border border-white/20 bg-white/5 text-white/60 hover:bg-white/10"
                                        }`}
                                    >
                                        Choisir
                                    </button>
                                    <div className={`flex-1 transition-opacity ${showSliderF ? "opacity-100" : "opacity-30"}`}>
                                        <div className="relative">
                                            {showSliderF && (
                                                <div
                                                    className="absolute -top-6 text-xs font-semibold text-white"
                                                    style={{
                                                        left: `calc(${((numF === null ? minF : numF) - minF) / (maxF - minF) * 100}% - 6px)`,
                                                    }}
                                                >
                                                    {numF === null ? minF : numF}
                                                </div>
                                            )}
                                            <input
                                                id="numF"
                                                type="range"
                                                min={minF}
                                                max={maxF}
                                                step="1"
                                                value={numF === null ? minF : numF}
                                                onChange={(e) =>
                                                    setNumF(parseInt(e.target.value))
                                                }
                                                disabled={!showSliderF}
                                                className={`h-1.5 w-full appearance-none rounded-lg bg-white/10 accent-pink-500 ${showSliderF ? "cursor-pointer" : "cursor-not-allowed"}`}
                                                style={{
                                                    background: `linear-gradient(to right, rgb(236 72 153) 0%, rgb(236 72 153) ${numF === null ? 0 : ((numF - minF) / (maxF - minF)) * 100}%, rgba(255,255,255,0.1) ${numF === null ? 0 : ((numF - minF) / (maxF - minF)) * 100}%, rgba(255,255,255,0.1) 100%)`,
                                                }}
                                            />
                                            <div className="mt-1 flex justify-between text-xs text-white/30">
                                                <span>{minF}</span>
                                                <span>{maxF}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {filteredPlays.length === 0 ? (
                        <div className="rounded-lg border border-white/10 bg-white/5 p-8 text-center">
                            <p className="text-lg text-white/60">
                                Aucune pièce trouvée pour cette distribution.
                            </p>
                        </div>
                    ) : (
                        <div>
                            <div className="mb-6 flex items-center justify-between">
                                <p className="text-white/60">
                                    {filteredPlays.length} pièce
                                    {filteredPlays.length > 1 ? "s" : ""} trouvée
                                    {filteredPlays.length > 1 ? "s" : ""}
                                </p>
                                <p className="text-sm text-pink-400/80 flex items-center gap-2">
                                    <span className="text-lg">👆</span>
                                    Cliquez sur une carte pour voir les détails
                                </p>
                            </div>
                            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {filteredPlays.map((p) => (
                                    <PlayCardStyled key={p.slug} play={p} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
