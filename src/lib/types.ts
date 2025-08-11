// [TheatreDynamic] #3
export type Sections = { debut?: string; atouts?: string; theme?: string; };
export type Play = {
  slug: string; title: string; genre: string; duration?: string; cast: string[];
  synopsis?: string; accroche?: string; tags?: string[]; poster?: string;
  download?: { url: string }; notes?: string[]; sections?: Sections;
};
export type Site = { name: string; url: string; address: string; phone: string; email: string; boxOffice: string; };
export type DistributionEntry = { women: number; men: number; title: string; };
