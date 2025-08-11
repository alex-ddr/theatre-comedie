// [TheatreComedie-Vite-Bold] #3
export type Sections = {
  debut?: string;
  atouts?: string;
  theme?: string;
};

export type Play = {
  slug: string;
  title: string;
  genre: string;
  duration?: string;
  cast: string[];            // e.g. ["3F/1H"] or ["3 comédiens / 1 comédienne"]
  synopsis?: string;
  accroche?: string;
  tags?: string[];
  poster?: string;
  download?: { url: string };
  notes?: string[];
  sections?: Sections;
};

export type Site = {
  name: string;
  url: string;
  address: string;
  phone: string;
  email: string;
  boxOffice: string;
};

export type DistributionEntry = {
  women: number;
  men: number;
  title: string;
};
