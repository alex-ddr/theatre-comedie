import { useState, useMemo, useEffect } from "react";
import Hero from "@/components/layout/Hero";
import { getAllPlays } from "@/lib/content";
import PlayCardStyled from "@/components/plays/PlayCardStyled";
import type { Play } from "@/types";

export default function Home() {
    const [allPlays, setAllPlays] = useState<Play[]>([]);
    const [loading, setLoading] = useState(true);

    const [selectedH, setSelectedH] = useState<number[]>([]);
    const [selectedF, setSelectedF] = useState<number[]>([]);

    useEffect(() => {
        getAllPlays().then(plays => {
            setAllPlays(plays);
            setLoading(false);
        });
    }, []);

    const filteredPlays = useMemo(() => {
        return allPlays.filter((play) => {
            if (!play.distributions || play.distributions.length === 0) {
                return false;
            }

            return play.distributions.some((dist) => {
                const matchH =
                    selectedH.length === 0 || selectedH.includes(dist.h);
                const matchF =
                    selectedF.length === 0 || selectedF.includes(dist.f);
                return matchH && matchF;
            });
        });
    }, [selectedH, selectedF, allPlays]);

    const toggleSelection = (
        current: number[],
        value: number,
        setter: (next: number[]) => void
    ) => {
        if (current.includes(value)) {
            setter(current.filter((item) => item !== value));
            return;
        }
        setter([...current, value]);
    };

    return (
        <div>
            <Hero 
                title="Comédies de Franck DIDIER" 
                subtitle="Découvrez plus de 20 ans de comédies aux multiples distributions,
destinées aux troupes amateures comme aux compagnies professionnelles."
            />

            <section className="relative bg-[#0b0b12]/55 overflow-x-hidden">
                <div className="mx-auto sm:px-8 py-8 md:py-10 max-w-full w-5/6">
                    <div className="mb-16 ">
                        <div className="flex flex-col md:flex-row justify-center">
                            <div className="flex flex-col mb">
                                <span className="gradient-text text-lg font-bold text-white/80 mr-4 md:mr-6 whitespace-nowrap flex items-center">
                                Recherche par distribution :
                                </span>
                                <p className="text-xs mt-[-2px] mb-2 text-white/40">
                                (Aucun choix = n'importe quel nombre)
                                </p>
                            </div>
                            <div className="flex items-center gap-4 flex-wrap justify-center w-full">
                                {/* Hommes */}
                                <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 ">
                                    <label className="text-xs font-medium text-white/70 mr-2 whitespace-nowrap">Hommes</label>
                                    <button
                                        onClick={() => setSelectedH([])}
                                        disabled={selectedH.length === 0}
                                        className={`text-xs underline-offset-2 mr-2 transition-opacity effacer-btn-show ${
                                            selectedH.length === 0
                                                ? 'opacity-40 cursor-not-allowed text-white/30'
                                                : 'text-white/50 hover:text-white/80 hover:underline opacity-100'
                                        }`}
                                    >
                                        Effacer
                                    </button>
                                    <div className="flex gap-1 flex-nowrap">
                                        {[0,1,2,3,4,5,6,7].map((value) => {
                                            const isActive = selectedH.includes(value);
                                            return (
                                                <button
                                                    key={`men-${value}`}
                                                    onClick={() =>
                                                        toggleSelection(
                                                            selectedH,
                                                            value,
                                                            setSelectedH
                                                        )
                                                    }
                                                    className={`h-8 w-8 flex items-center justify-center rounded-md text-sm font-semibold transition-all ${
                                                        isActive
                                                            ? "bg-pink-500 text-white"
                                                            : "border border-white/20 bg-white/5 text-white/60 hover:bg-white/10"
                                                    }`}
                                                >
                                                    {value}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                                {/* Femmes */}
                                <div className=" flex items-center gap-2 justify-center bg-white/5 border border-white/10 rounded-lg px-3 py-2 ">
                                    <label className="text-xs font-medium text-white/70 mr-2 whitespace-nowrap">Femmes</label>
                                    <button
                                        onClick={() => setSelectedF([])}
                                        disabled={selectedF.length === 0}
                                        className={`text-xs underline-offset-2 mr-2 transition-opacity effacer-btn-show ${
                                            selectedF.length === 0
                                                ? 'opacity-40 cursor-not-allowed text-white/30'
                                                : 'text-white/50 hover:text-white/80 hover:underline opacity-100'
                                        }`}
                                    >
                                        Effacer
                                    </button>
                                    <div className="flex gap-1 flex-nowrap">
                                        {[0,1,2,3,4,5,6,7].map((value) => {
                                            const isActive = selectedF.includes(value);
                                            return (
                                                <button
                                                    key={`women-${value}`}
                                                    onClick={() =>
                                                        toggleSelection(
                                                            selectedF,
                                                            value,
                                                            setSelectedF
                                                        )
                                                    }
                                                    className={`h-8 w-8 flex items-center justify-center rounded-md text-sm font-semibold transition-all ${
                                                        isActive
                                                            ? "bg-pink-500 text-white"
                                                            : "border border-white/20 bg-white/5 text-white/60 hover:bg-white/10"
                                                    }`}
                                                >
                                                    {value}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
 

                        {/* Message shown directly under the distribution controls when no play matches */}
                        {!loading && filteredPlays.length === 0 && (
                            <div className="rounded-lg border border-white/10 bg-white/5 p-4 mt-4 text-center">
                                <p className="text-lg text-white/60">
                                    Aucune pièce trouvée pour cette distribution.
                                </p>
                            </div>
                        )}
                    </div>

                    {loading ? (
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {[1,2,3,4,5,6].map(i => (
                                <div key={i} className="h-[280px] rounded-3xl bg-white/5 animate-pulse" />
                            ))}
                        </div>
                    ) : filteredPlays.length === 0 ? (
                        <></>
                    ) : (
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {filteredPlays.map((p) => (
                                <PlayCardStyled key={p.slug} play={p} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
