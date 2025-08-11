// [TheatreDynamic] #3
import { plays } from "@lib/plays";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Pieces() {
    const [q, setQ] = useState("");
    const [genre, setGenre] = useState<string>("");
    const genres = useMemo(() => {
        const g = new Set(plays.map((p) => p.genre));
        return Array.from(g).sort((a, b) => a.localeCompare(b, "fr"));
    }, []);
    const filtered = useMemo(() => {
        const lower = q.trim().toLowerCase();
        return plays.filter((p) => {
            const okGenre = !genre || p.genre === genre;
            const okSearch =
                !lower ||
                p.title.toLowerCase().includes(lower) ||
                p.synopsis?.toLowerCase().includes(lower) ||
                p.tags?.some((t) => t.toLowerCase().includes(lower));
            return okGenre && okSearch;
        });
    }, [q, genre]);

    return (
        <main className="mx-auto max-w-6xl px-4 py-12">
            <h1 className="mb-6 text-3xl font-bold tracking-tight">
                Catalogue
            </h1>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Rechercher une pièce, un thème…"
                    className="w-full rounded-full border px-5 py-2 sm:max-w-sm dark:border-neutral-700"
                />
                <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className="w-full rounded-full border px-5 py-2 sm:w-auto dark:border-neutral-700"
                >
                    <option value="">Tous les genres</option>
                    {genres.map((g) => (
                        <option key={g} value={g}>
                            {g}
                        </option>
                    ))}
                </select>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-neutral-900">
                {filtered.map((p) => (
                    <div
                        key={p.slug}
                        className="grid grid-cols-[1fr_auto] gap-3 border-b px-4 py-4 transition last:border-0 hover:bg-[color-mix(in_oklab,var(--sand)_35%,transparent)] dark:border-neutral-800"
                    >
                        <div>
                            <div className="text-xl font-semibold">
                                {p.title}
                            </div>
                            <div className="text-sm text-neutral-600 dark:text-neutral-300">
                                {p.genre}
                                {p.duration ? ` • ${p.duration}` : ""}
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link
                                to={`/pieces/${p.slug}`}
                                className="btn btn-ghost"
                            >
                                Détails
                            </Link>
                            {p.download?.url && (
                                <a
                                    className="btn btn-primary"
                                    href={p.download.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    PDF
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
