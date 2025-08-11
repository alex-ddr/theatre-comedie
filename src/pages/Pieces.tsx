// [TheatreComedie-Vite-Bold] #3
import PlayCard from "@components/PlayCard";
import { plays } from "@lib/content";
import { useMemo, useState } from "react";

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
                Pièces & Comédies
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

            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((p) => (
                    <PlayCard key={p.slug} p={p} />
                ))}
            </ul>
        </main>
    );
}
