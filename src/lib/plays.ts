// [TheatreDynamic] #3
import type { Play } from "@lib/types";
const mods = import.meta.glob("@content/plays/*.json", {
    eager: true,
    import: "default",
}) as unknown as Record<string, Play>;
const slugFrom = (path: string) => path.split("/").pop()!.replace(".json", "");
export const plays: Play[] = Object.entries(mods)
    .map(([path, data]) => ({
        slug: (data as any).slug ?? slugFrom(path),
        poster: "/posters/placeholder.jpg",
        ...data,
    }))
    .sort((a, b) => a.title.localeCompare(b.title, "fr"));
export const getPlay = (slug: string) => plays.find((p) => p.slug === slug);
