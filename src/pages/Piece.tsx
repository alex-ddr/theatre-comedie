// [TheatreDynamic] #3
import { useParams, Link } from "react-router-dom";
import { getPlay } from "@lib/plays";

export default function Piece() {
    const { slug } = useParams();
    const play = slug ? getPlay(slug) : undefined;

    if (!play) {
        return (
            <main className="mx-auto max-w-3xl px-4 py-12">
                <h1 className="text-2xl font-bold">Pièce introuvable</h1>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                    La pièce demandée n’existe pas.{" "}
                    <Link to="/pieces" className="underline">
                        Retour au catalogue
                    </Link>
                    .
                </p>
            </main>
        );
    }
    return (
        <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1fr_320px]">
            <article>
                <header className="mb-6">
                    <h1 className="text-4xl font-extrabold tracking-tight">
                        {play.title}
                    </h1>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                        {play.genre}
                        {play.duration ? ` • ${play.duration}` : ""} •
                        Distribution: {play.cast.join(", ")}
                    </p>
                    <div className="mt-4 flex gap-3">
                        {play.download?.url && (
                            <a
                                href={play.download.url}
                                className="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Télécharger la pièce (PDF)
                            </a>
                        )}
                        <Link to="/pieces" className="btn btn-ghost">
                            Retour au catalogue
                        </Link>
                    </div>
                </header>
                <section className="prose prose-neutral dark:prose-invert">
                    {play.accroche && (
                        <blockquote>
                            <p>{play.accroche}</p>
                        </blockquote>
                    )}
                    {play.sections?.debut && (
                        <>
                            <h2>Le début de la pièce</h2>
                            <p>{play.sections.debut}</p>
                        </>
                    )}
                    {play.sections?.atouts && (
                        <>
                            <h2>Les atouts de la pièce</h2>
                            <p>{play.sections.atouts}</p>
                        </>
                    )}
                    {play.sections?.theme && (
                        <>
                            <h2>Le thème</h2>
                            <p>{play.sections.theme}</p>
                        </>
                    )}
                    {play.notes?.length ? (
                        <>
                            <h2>Notes</h2>
                            <ul>
                                {play.notes.map((n, i) => (
                                    <li key={i}>{n}</li>
                                ))}
                            </ul>
                        </>
                    ) : null}
                </section>
            </article>
            <aside className="meta hidden lg:block">
                <div className="space-y-3 text-sm">
                    <div>
                        <span className="font-semibold">Genre :</span>{" "}
                        {play.genre}
                    </div>
                    {play.duration && (
                        <div>
                            <span className="font-semibold">Durée :</span>{" "}
                            {play.duration}
                        </div>
                    )}
                    <div>
                        <span className="font-semibold">Distribution :</span>{" "}
                        {play.cast.join(" / ")}
                    </div>
                    {play.tags?.length ? (
                        <div>
                            <span className="font-semibold">Tags :</span>{" "}
                            {play.tags.join(", ")}
                        </div>
                    ) : null}
                </div>
            </aside>
        </main>
    );
}
