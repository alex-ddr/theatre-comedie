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
                {play.genre} • {play.duration} • Distribution:{" "}
                {play.cast.join(", ")}
            </p>

            <section className="prose prose-neutral dark:prose-invert mt-6">
                <h2>Synopsis</h2>
                <p>{play.synopsis}</p>

                {!!play.notes?.length && (
                    <>
                        <h2>Notes de mise en scène</h2>
                        <ul>
                            {play.notes.map((n, i) => (
                                <li key={i}>{n}</li>
                            ))}
                        </ul>
                    </>
                )}

                {play.download?.url && (
                    <a
                        href={play.download.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block rounded-lg border px-3 py-2 no-underline hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
                    >
                        Télécharger l’extrait (.pdf)
                    </a>
                )}
            </section>
        </main>
    );
}
