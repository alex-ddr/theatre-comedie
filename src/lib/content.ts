// [TheatreDynamic] #3
import siteJson from "@content/site.json";
import distributionJson from "@content/distribution.json";
import theyPlayedJson from "@content/they-played.json";
import authorJson from "@content/author.json";
import type { Site, DistributionEntry } from "./types";
export const site: Site = siteJson as Site;
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
