// [TheatreComedie-Vite] #3
import siteJson from "@content/site.json";
import highlightsJson from "@content/highlights.json";
import playsJson from "@content/plays.json";
import distributionJson from "@content/distribution.json";
import theyPlayedJson from "@content/they-played.json";
import authorJson from "@content/author.json";
import type { Play, Site, DistributionEntry } from "./types";

export const site: Site = siteJson as Site;
export const highlights = {
    tagline: (highlightsJson as any).tagline as string,
};

export const plays: Play[] = (playsJson as any[]).map((p) => ({
    poster: "/posters/placeholder.jpg",
    ...p,
}));

export const distribution: DistributionEntry[] =
    distributionJson as DistributionEntry[];

export const theyPlayed = theyPlayedJson as {
    intro: string;
    body: string;
    links: string[];
};

export const author = authorJson as {
    bioBlocks: string[];
    headline: string;
    subheadline: string;
};
