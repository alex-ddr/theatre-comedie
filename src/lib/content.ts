// [theatre-comedie-vite-ts] #1
import type { Play, Highlights, Author } from "@types";

// Load all plays (JSON) using Vite's glob import
const playModules = import.meta.glob("../content/plays/*.json", {
    eager: true,
    import: "default",
}) as Record<string, Play>;

// Build an indexed map by slug
const allPlays: Play[] = Object.values(playModules);
const bySlug: Record<string, Play> = Object.fromEntries(
    allPlays.map((p) => [p.slug, p]),
);

// Load highlights and author
import highlightsJson from "../content/highlights.json";
import authorJson from "../content/author.json";

export const highlights = highlightsJson as Highlights;
export const author = authorJson as Author;

export function getPlay(slug: string): Play | undefined {
    return bySlug[slug];
}

export function getAllPlays(): Play[] {
    return [...allPlays].sort((a, b) => a.title.localeCompare(b.title, "fr"));
}

export function getFeatured(): Play[] {
    return (highlights.featured ?? [])
        .map((slug) => bySlug[slug])
        .filter(Boolean);
}

export function getRecent(): Play[] {
    return (highlights.recent ?? [])
        .map((slug) => bySlug[slug])
        .filter(Boolean);
}
