// [TheatreComedie-Vite-Bold] #3
import { useParams, Link } from "react-router-dom";
import { plays } from "@lib/content";

export default function Piece() {
    const { slug } = useParams();
    const play = plays.find((p) => p.slug === slug);

    if (!play) {
        return (
            <main className="mx-auto max-w-3xl px-4 py-12">
                <h1 className="text-2xl font-bold">Pièce introuvable</h1>
                <p className="text-muted-foreground mt-2 text-sm">
                    La pièce demandée n’existe pas.{" "}
                    <Link to="/pieces" className="underline">
                        Retour aux pièces
                    </Link>
                    .
                </p>
            </main>
        );
    }

    return (
        <main className="mx-auto max-w-3xl px-4 py-12">
            <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                    src={play.poster || "/posters/placeholder.jpg"}
                    alt={play.title}
                    className="h-64 w-full object-cover"
                    onError={(e) =>
                        (e.currentTarget.src = "/posters/placeholder.jpg")
                    }
                />
            </div>

            <h1 className="text-3xl font-bold tracking-tight">{play.title}</h1>
            <p className="text-muted-foreground mt-1 text-sm">
                {play.genre}
                {play.duration ? ` • ${play.duration}` : ""} • Distribution:{" "}
                {play.cast.join(", ")}
            </p>

            <div className="mt-6 flex gap-3">
                {play.download?.url && (
                    <a
                        href={play.download.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                    >
                        Télécharger la pièce (PDF)
                    </a>
                )}
                <Link to="/pieces" className="btn btn-ghost">
                    Retour aux pièces
                </Link>
            </div>

            <section className="prose prose-neutral dark:prose-invert mt-8">
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
        </main>
    );
}
