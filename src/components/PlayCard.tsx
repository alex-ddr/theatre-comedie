// [TheatreComedie-Vite-Bold] #3
import { Link } from "react-router-dom";
import type { Play } from "@lib/types";

export default function PlayCard({ p }: { p: Play }) {
    return (
        <li className="tilt">
            <article className="card overflow-hidden">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--mist)]">
                    <img
                        src={p.poster || "/posters/placeholder.jpg"}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                        onError={(e) =>
                            (e.currentTarget.src = "/posters/placeholder.jpg")
                        }
                    />
                    <div className="absolute top-3 right-3 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-medium text-white shadow">
                        {p.duration || "—"}
                    </div>
                </div>
                <div className="p-5">
                    <header className="mb-2">
                        <h3 className="text-lg font-semibold">{p.title}</h3>
                        <p className="text-muted-foreground text-sm">
                            {p.genre} • {p.cast.join(" / ")}
                        </p>
                    </header>
                    {p.accroche && <p className="text-sm">{p.accroche}</p>}
                    <footer className="mt-4 flex items-center justify-between">
                        <Link
                            to={`/pieces/${p.slug}`}
                            className="btn btn-ghost"
                        >
                            Détails
                        </Link>
                        {p.download?.url && (
                            <a
                                href={p.download.url}
                                className="link-underline text-sm"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Télécharger PDF
                            </a>
                        )}
                    </footer>
                </div>
            </article>
        </li>
    );
}
