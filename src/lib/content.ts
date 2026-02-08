import type { Play, Highlights, Author } from "@/types";

const playModules = import.meta.glob("../content/plays/*.json", {
    eager: true,
    import: "default",
}) as Record<string, Play>;

const allPlays: Play[] = Object.values(playModules);
const bySlug: Record<string, Play> = Object.fromEntries(
    allPlays.map((p) => [p.slug, p]),
);

import highlightsJson from "../content/highlights.json";
import authorJson from "../content/author.json";
import siteJson from "../content/site.json";

export const highlights = highlightsJson as Highlights;
export const author = authorJson as Author;
export const siteData = siteJson;

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

export function getMostRecent(): Play | undefined {
    const recent = getRecent();
    return recent.length > 0 ? recent[0] : undefined;
}

function parseDurationToMinutes(text?: string): number | undefined {
    if (!text) return;
    const m = text.replace(/heures?/, "h").match(/(\d+)\s*h\s*(\d+)?/i);
    if (!m) return;
    const h = parseInt(m[1], 10);
    const mm = m[2] ? parseInt(m[2], 10) : 0;
    return h * 60 + mm;
}

function parseCastTotal(items?: string[]): number | undefined {
    if (!items || items.length === 0) return;
    for (const it of items) {
        const s = it.toLowerCase();
        const ratioMatches = s.match(/(\d+)\s*[fh]\s*\/\s*(\d+)\s*[fh]/i);
        if (ratioMatches) {
            const a = parseInt(ratioMatches[1], 10);
            const b = parseInt(ratioMatches[2], 10);
            return a + b;
        }
        const m = s.match(
            /(\d+)\s*(?:comédien(?:nes?|s)?|acteurs?|personnages?)/i,
        );
        if (m) return parseInt(m[1], 10);
        const any = s.match(/(\d+)/);
        if (any) return parseInt(any[1], 10);
    }
    return;
}

export type SiteStats = {
    totalPlays: number;
    genres: { name: string; count: number }[];
    durations: { label: string; count: number }[];
    durationRange?: { min: number; max: number; median: number };
    castRange?: { min: number; max: number; avg: number };
    pdfs: number;
};

export function getSiteStats(): SiteStats {
    const plays = getAllPlays();

    const genreMap = new Map<string, number>();
    for (const p of plays) {
        if (!p.genre) continue;
        genreMap.set(p.genre, (genreMap.get(p.genre) ?? 0) + 1);
    }

    const durationLabel = new Map<string, number>();
    const minutes: number[] = [];
    for (const p of plays) {
        if (p.duration)
            durationLabel.set(
                p.duration,
                (durationLabel.get(p.duration) ?? 0) + 1,
            );
        const m = parseDurationToMinutes(p.duration);
        if (typeof m === "number") minutes.push(m);
    }
    minutes.sort((a, b) => a - b);
    const median = minutes.length
        ? minutes.length % 2
            ? minutes[(minutes.length - 1) / 2]
            : (minutes[minutes.length / 2 - 1] + minutes[minutes.length / 2]) /
              2
        : undefined;

    const totals: number[] = [];
    for (const p of plays) {
        const t = parseCastTotal(p.cast);
        if (typeof t === "number") totals.push(t);
    }
    totals.sort((a, b) => a - b);
    const avg = totals.length
        ? totals.reduce((a, b) => a + b, 0) / totals.length
        : undefined;

    const pdfs = plays.filter((p) => p.download?.url).length;

    return {
        totalPlays: plays.length,
        genres: [...genreMap.entries()]
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count),
        durations: [...durationLabel.entries()]
            .map(([label, count]) => ({ label, count }))
            .sort((a, b) => b.count - a.count),
        durationRange: minutes.length
            ? {
                  min: minutes[0],
                  max: minutes[minutes.length - 1],
                  median: median!,
              }
            : undefined,
        castRange: totals.length
            ? { min: totals[0], max: totals[totals.length - 1], avg: avg! }
            : undefined,
        pdfs,
    };
}

export function minutesToLabel(m?: number): string | undefined {
    if (m == null) return;
    const h = Math.floor(m / 60);
    const mm = m % 60;
    return mm ? `${h} h ${mm.toString().padStart(2, "0")}` : `${h} h`;
}
