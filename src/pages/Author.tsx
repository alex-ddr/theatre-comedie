import { author } from "@/lib/content";

export default function Author() {
    const stats = [
        { label: "Années d'écriture", value: "20+" },
        { label: "Troupes qui ont joué ses pièces", value: "1 300+" },
        { label: "Pièces", value: "18" },
        { label: "Distributions possibles", value: "50+" },
    ];

    return (
        <div className="mx-auto w-5/6 px-4 py-10">
            <h1 className="gradient-text mb-8 text-center text-5xl font-bold">
                {author.headline}
            </h1>
            {author.subheadline && (
                <p className="mb-10 text-center text-white/70">{author.subheadline}</p>
            )}
            
            {/* Statistiques en haut */}
            <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((stat, i) => (
                    <div 
                        key={i}
                        className="rounded-lg border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
                    >
                        <div className="gradient-text mb-2 text-4xl font-bold">{stat.value}</div>
                        <div className="text-sm text-white/60">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Un seul bloc avec photo flottante */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-8 leading-relaxed text-white/80 backdrop-blur-sm ">
                {/* Photo flottante à gauche */}
                <div className="float-left mr-8 mb-6 md:w-[250px] relative overflow-hidden rounded-lg ">
                    <img 
                        src="/img/franck-didier-2.jpeg" 
                        alt="Franck DIDIER"
                        className="object-cover mix-blend-screen rounded-lg"
                        width="250"
                        loading="eager"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-pink-500/30 mix-blend-multiply pointer-events-none rounded-lg"></div>
                </div>

                <p className="mb-6 text-lg">
                    Originaire du Gard et établi à Paris depuis de nombreuses années, Franck est auteur de théâtre depuis <span className="font-bold text-pink-400">plus de 20 ans</span>. Il a travaillé sur plusieurs spectacles en tant que <span className="font-semibold text-white/90">metteur en scène, comédien</span>, et également en tant que comédien-chanteur-danseur dans le cadre de trois comédies musicales.
                </p>
                <p className="mb-10 text-lg">
                    À la fin des années 90, il fonde, à Paris, la compagnie de comédie musicale <span className="font-semibold text-pink-300">Artis'Show</span> qui a produit deux de ses créations...
                </p>
                <p className="mb-6 text-lg">
                    Face à la difficulté de monter de gros projets tels que les comédies musicales, c'est naturellement qu'il se tourne ensuite vers l'écriture de pièces de théâtre plus simples à produire et à représenter. Ses autres créations s'orientent ainsi vers des pièces de théâtre plus <span className="font-semibold text-white/90">« transportables »</span> et, pour certaines, plus intimistes...
                </p>
                <p className="text-lg">
                    Ses créations sont des comédies avec, bien sûr, <span className="font-bold text-pink-400">l'humour comme finalité principale</span>. Toutefois, Franck DIDIER ne souhaite pas limiter ses pièces à une dimension purement humoristique, trop réductrice à son goût. Un autre ingrédient est toujours associé à la recette pour lui donner <span className="font-bold text-pink-300">l'originalité et la singularité</span> nécessaires. Les <span className="font-semibold text-white/90">univers originaux</span> qu'il nous invite à découvrir et ses <span className="font-semibold text-white/90">qualités de dialoguiste</span> lui valent depuis quelques années une <span className="font-bold text-pink-400">réelle reconnaissance dans le monde du théâtre amateur</span>. Certaines de ses pièces, plus calibrées pour le théâtre professionnel, ont également été produites dans ce cadre.
                </p>
            </div>
        </div>
    );
}
