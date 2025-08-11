// [TheatreComedie-Vite] #3
import { Link } from "react-router-dom";
import type { Play } from "@lib/types";
import { useReveal } from "@hooks/useReveal";

export default function PlayCard({ p }: { p: Play }) {
    const ref = useReveal();
    return (
        <li ref={ref as any} className="card overflow-hidden">
            <article>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-200/50 dark:bg-neutral-800/50">
                    <img
                        src={p.poster || "/posters/placeholder.jpg"}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                        onError={(e) =>
                            (e.currentTarget.src = "/posters/placeholder.jpg")
                        }
                    />
                </div>
                <div className="p-5">
                    <header className="mb-2">
                        <h3 className="text-lg font-semibold">{p.title}</h3>
                        <p className="text-muted-foreground text-sm">
                            {p.genre} • {p.duration} • {p.cast.join(" / ")}
                        </p>
                    </header>
                    <p className="line-clamp-3 text-sm">{p.synopsis}</p>
                    <footer className="mt-4 flex items-center justify-between">
                        <Link
                            to={`/pieces/${p.slug}`}
                            className="rounded-lg border px-3 py-1.5 text-sm hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
                        >
                            Détails
                        </Link>
                        {p.download?.url && (
                            <a
                                href={p.download.url}
                                target="_blank"
                                rel="noreferrer"
                                className="link-underline text-sm"
                            >
                                Extrait PDF
                            </a>
                        )}
                    </footer>
                </div>
            </article>
        </li>
    );
}
