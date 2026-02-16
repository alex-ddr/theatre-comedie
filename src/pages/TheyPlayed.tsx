import theyPlayedJson from "@/content/they-played.json";

type TheyPlayedContent = {
    intro: string;
    body: string;
    locations: string[];
};

const theyPlayed = theyPlayedJson as TheyPlayedContent;

export default function TheyPlayed() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-10">
            <div className="mb-12">
                <h1 className="gradient-text mb-8 text-center text-5xl font-bold">
                    Ils ont joué
                </h1>
            </div>

            {/* Section intro avec style élégant */}
            <div className="mb-12 space-y-6">
                <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                    <p className="text-lg leading-relaxed text-white/90">
                        {theyPlayed.intro}
                    </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                    <p className="text-lg leading-relaxed text-white/90">
                        {theyPlayed.body}
                    </p>
                </div>
            </div>

            {/* Section liens avec cartes cliquables */}
            <div className="grid gap-4 sm:grid-cols-2">
                {theyPlayed.locations.map((location) => {
                    
                    // Émojis par pays
                    const flagEmoji = 
                        location.toLowerCase() === "france" ? "🇫🇷" :
                        location.toLowerCase() === "belgique" ? "🇧🇪" :
                        location.toLowerCase() === "suisse" ? "🇨🇭" :
                        location.toLowerCase() === "ailleurs..." ? "🌍" : "🌍";

                    return (
                        <a
                            key={location}
                            href={`/pdf/they-played/franckdidier${location.toLowerCase()}.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-lg border border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-orange-500/5 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-pink-500/40 hover:shadow-xl hover:shadow-pink-500/20"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-4xl">{flagEmoji}</span>
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-pink-400/70">
                                        Découvrir
                                    </p>
                                    <h3 className="text-xl font-semibold text-white/90 group-hover:text-pink-300">
                                        {location}
                                    </h3>
                                </div>
                            </div>
                            <div className="mt-4 text-sm text-white/60">
                                Voir la liste des troupes (PDF)
                            </div>
                        </a>
                    );
                })}
            </div>

            {/* Message footer */}
            <div className="mt-12 text-center">
                <p className="text-sm italic text-white/50">
                    Plus de 1300 troupes francophones ont déjà choisi de représenter l’une des comédies de Franck DIDIER.
                </p>
            </div>
        </div>
    );
}
