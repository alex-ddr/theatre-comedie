// [TheatreDynamic] #3
import { Link } from "react-router-dom";
import type { Play } from "@lib/types";

export default function PlayStrip({ items }: { items: Play[] }) {
    return (
        <div className="strip">
            {items.map((p) => (
                <div key={p.slug} className="strip-item">
                    <div>
                        <div className="text-2xl font-bold tracking-tight sm:text-3xl">
                            {p.title}
                        </div>
                        <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                            {p.genre}
                            {p.duration ? ` • ${p.duration}` : ""}
                        </div>
                        {p.accroche ? (
                            <p className="mt-2 text-sm">{p.accroche}</p>
                        ) : null}
                        <div className="badges mt-3">
                            {p.cast?.slice(0, 3).map((c, idx) => (
                                <span key={idx} className="badge">
                                    {c}
                                </span>
                            ))}
                            {p.download?.url && (
                                <a
                                    href={p.download.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="badge accent"
                                >
                                    PDF
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link
                            to={`/pieces/${p.slug}`}
                            className="btn btn-ghost"
                        >
                            Détails
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
