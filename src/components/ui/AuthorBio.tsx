import { motion } from "framer-motion";

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 30 } as const,
    whileInView: { opacity: 1, y: 0 } as const,
    viewport: { once: true } as const,
    transition: { duration: 0.6, delay },
});

const stats = [
    { label: "Expérience", value: "20+ ans" },
    { label: "Troupes", value: "1000+" },
    { label: "Pays", value: "8" },
    { label: "Compagnie", value: "1992" },
];

const wavePath =
    "M0,32 C120,64 240,64 360,48 C480,32 600,0 720,8 C840,16 960,64 1080,72 C1200,80 1320,64 1440,40 L1440,120 L0,120 Z";

function WaveSvg({ flip }: { flip?: boolean }) {
    return (
        <svg
            className={`h-16 w-full text-[#0b0b12]${flip ? " rotate-180" : ""}`}
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            <path d={wavePath} fill="currentColor" />
        </svg>
    );
}

export default function AuthorBio() {
    return (
        <>
            <WaveSvg flip />

            <section className="relative bg-gradient-to-b from-[#0b0b12] via-slate-950/90 to-[#0b0b12] py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid gap-8 lg:grid-cols-12">
                        <div className="lg:col-span-4">
                            <div className="space-y-6 lg:sticky lg:top-8">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="relative"
                                >
                                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500/30 via-pink-500/20 to-rose-500/30 p-2">
                                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800">
                                                <span className="text-sm font-medium text-white/60">Franck DIDIER</span>
                                            </div>
                                        </div>
                                    </div>
                                    <motion.div
                                        className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-orange-500/40 via-pink-500/30 to-rose-500/40 blur-2xl"
                                        animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </motion.div>

                                <motion.div {...fade(0.2)} className="glass rounded-2xl p-6 ring-1 ring-white/10">
                                    <h3 className="gradient-text mb-4 text-lg font-bold">En chiffres</h3>
                                    <div className="space-y-4">
                                        {stats.map((s) => (
                                            <div key={s.label} className="flex items-center justify-between">
                                                <span className="text-sm text-white/70">{s.label}</span>
                                                <span className="font-semibold text-white">{s.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div {...fade(0.4)}>
                                    <a
                                        href="/"
                                        className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 px-6 py-4 font-semibold shadow-xl ring-2 shadow-rose-500/20 ring-white/25 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(244,63,94,0.5)] hover:ring-rose-400/80"
                                    >
                                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                        <span className="relative z-10 text-sm">DÉCOUVRIR LES PIÈCES</span>
                                        <svg viewBox="0 0 24 24" className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M13 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </motion.div>
                            </div>
                        </div>

                        <div className="space-y-8 lg:col-span-8">
                            <motion.div {...fade()}>
                                <h2 className="gradient-text mb-8 text-4xl font-bold lg:text-5xl">Franck DIDIER – Auteur</h2>
                            </motion.div>

                            <motion.div {...fade(0.1)} className="glass rounded-2xl p-8 ring-1 ring-white/10">
                                <div className="space-y-6 text-white/85">
                                    <p className="text-lg leading-relaxed">
                                        <strong className="text-orange-300">Né au milieu des années soixante, originaire du Gard et établi à Paris</strong>, Franck est auteur de théâtre depuis plus de 20 ans. Il a travaillé sur plusieurs spectacles en tant que metteur en scène, comédien, et également en tant que comédien-chanteur-danseur dans le cadre de trois comédies musicales.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-pink-300">En 1992</strong>, il fonde, à Paris, la compagnie de comédie musicale ArtisShow qui a produit deux de ses créations...
                                    </p>
                                    <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-6">
                                        <p className="text-sm leading-relaxed text-orange-200/90">
                                            Face à la difficulté de monter de gros projets tels que les comédies musicales, c'est naturellement qu'il se tourne ensuite vers l'écriture de pièces de théâtre plus simples à produire et à représenter. Ses dernières créations s'orientent ainsi vers des pièces de théâtre plus "transportables" et pour certaines, plus intimistes...
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div {...fade(0.2)} className="glass rounded-2xl p-8 ring-1 ring-white/10">
                                <h3 className="gradient-text mb-6 text-2xl font-semibold">Des comédies drôles</h3>
                                <p className="leading-relaxed text-white/85">
                                    certes, mais avec l'ambition de toujours privilégier l'originalité du thème, du ton ou de la situation, alors... jugez sur pièce en visitant ce site !
                                </p>
                                <p className="mt-4 text-sm leading-relaxed text-white/70">
                                    Vous pourrez choisir votre pièce en fonction du thème et de la distribution souhaitée.
                                </p>
                            </motion.div>

                            <motion.div {...fade(0.3)} className="glass rounded-2xl p-8 ring-1 ring-white/10">
                                <h3 className="gradient-text mb-6 text-2xl font-semibold">Des comédies, mais pas que...</h3>
                                <p className="leading-relaxed text-white/75">
                                    Ses créations sont des comédies avec bien sûr,{" "}
                                    <strong className="text-rose-300">l'humour comme finalité principale</strong>. Toutefois, Franck DIDIER ne souhaite pas limiter ses pièces à une dimension purement humoristique, trop réductrice à son goût. Un autre ingrédient est toujours associé à la recette pour lui donner l'originalité et la singularité nécessaires. Les univers originaux qu'il nous invite à découvrir et ses qualités de dialoguiste lui valent depuis quelques années une réelle reconnaissance dans le monde du théâtre amateur.
                                </p>
                            </motion.div>

                            <motion.div {...fade(0.4)} className="glass rounded-2xl p-8 text-center ring-1 ring-white/10">
                                <p className="leading-relaxed text-white/70">
                                    <strong className="gradient-text">En près de 15 ans de diffusion</strong>, ce sont plus de{" "}
                                    <strong className="text-orange-300">1000 troupes francophones</strong> qui ont choisi de jouer l'une des pièces de Franck DIDIER (France, Suisse, Belgique, Québec, Portugal, Allemagne, Espagne, Pays-bas...).
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className={`absolute h-2 w-2 rounded-full ${i % 3 === 0 ? "bg-orange-500/20" : i % 3 === 1 ? "bg-pink-500/20" : "bg-rose-500/20"}`}
                            style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
                            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
                            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
                        />
                    ))}
                </div>
            </section>

            <WaveSvg />
        </>
    );
}
