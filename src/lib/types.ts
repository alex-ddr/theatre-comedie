export type Play = {
    slug: string;
    title: string;
    genre: string;
    duration: string; // ex: "environ 1 h 40"
    cast: string[]; // ex: ["7F/2H", "6F/3H"]
    synopsis: string;
    tags: string[];
    poster?: string;
    download?: { url: string };
    notes?: string[];
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
    title: string; // Titre de la pièce
};

export type TextBlock = {
    id: string;
    html?: string;
    text?: string;
};
