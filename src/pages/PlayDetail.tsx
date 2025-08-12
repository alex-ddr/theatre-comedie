// [theatre-comedie-vite-ts] #1
import React from "react";
import { useParams, Link } from "react-router-dom";
import { getPlay } from "@lib/content";

export default function PlayDetail() {
    const { slug } = useParams();
    const play = slug ? getPlay(slug) : undefined;

    if (!play) {
        return (
            <div className="mx-auto max-w-3xl px-4 py-16 text-center">
                <p className="text-white/70">Pièce introuvable.</p>
                <Link to="/pieces" className="btn-primary mt-6 inline-block">
                    Voir le catalogue de pièces
                </Link>
            </div>
        );
    }

    const pdfUrl = play.download?.url;

    return (
        <article className="mx-auto max-w-4xl px-4 py-10">
            <header className="flex flex-col gap-6 sm:flex-row">
                <div className="flex-1">
                    <h1 className="gradient-text text-3xl font-bold">
                        {play.title}
                    </h1>
                    <p className="mt-2 text-white/70">{play.accroche}</p>
                    <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/70">
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
                        {Array.isArray(play.cast) &&
                            play.cast.map((c, i) => (
                                <span
                                    key={i}
                                    className="rounded-full border border-white/10 bg-white/5 px-2 py-1"
                                >
                                    {c}
                                </span>
                            ))}
                    </div>
                    {pdfUrl && (
                        <a
                            href={pdfUrl}
                            download
                            className="btn-primary mt-6 inline-flex"
                        >
                            Télécharger le début (PDF)
                        </a>
                    )}
                </div>
            </header>

            {play.sections && (
                <section className="prose prose-invert mt-8 max-w-none">
                    {Object.entries(play.sections).map(([key, value]) => (
                        <div key={key} className="mt-6">
                            <h3 className="text-xl font-semibold">
                                {key[0].toUpperCase() + key.slice(1)}
                            </h3>
                            <p className="whitespace-pre-line text-white/80">
                                {value}
                            </p>
                        </div>
                    ))}
                </section>
            )}
        </article>
    );
}
