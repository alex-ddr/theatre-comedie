import type { Play, Highlights, Author } from "@/types";

// Lazy loading des modules JSON avec cache
const playModules = import.meta.glob("../content/plays/*.json", {
    eager: false,
    import: "default",
}) as Record<string, () => Promise<Play>>;

// Cache pour les pièces déjà chargées
const playCache = new Map<string, Play>();
let allPlaysCache: Play[] | null = null;
let bySlugCache: Record<string, Play> | null = null;

import highlightsJson from "../content/highlights.json";
import authorJson from "../content/author.json";
import siteJson from "../content/site.json";

export const highlights = highlightsJson as Highlights;
export const author = authorJson as Author;
export const siteData = siteJson;

export async function getPlay(slug: string): Promise<Play | undefined> {
    if (playCache.has(slug)) {
        return playCache.get(slug);
    }
    
    const modulePath = `../content/plays/${slug}.json`;
    const loader = playModules[modulePath];
    
    if (!loader) return undefined;
    
    try {
        const play = await loader();
        playCache.set(slug, play);
        return play;
    } catch {
        return undefined;
    }
}

export async function getAllPlays(): Promise<Play[]> {
    if (allPlaysCache) {
        return allPlaysCache;
    }
    
    const plays = await Promise.all(
        Object.values(playModules).map(loader => loader())
    );
    
    allPlaysCache = plays.sort((a, b) => a.title.localeCompare(b.title, "fr"));
    return allPlaysCache;
}

export async function getFeatured(): Promise<Play[]> {
    const plays = await Promise.all(
        (highlights.featured ?? [])
            .map(slug => getPlay(slug))
    );
    return plays.filter(Boolean) as Play[];
}

export async function getRecent(): Promise<Play[]> {
    const plays = await Promise.all(
        (highlights.recent ?? [])
            .map(slug => getPlay(slug))
    );
    return plays.filter(Boolean) as Play[];
}

export async function getMostRecent(): Promise<Play | undefined> {
    const recent = await getRecent();
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
