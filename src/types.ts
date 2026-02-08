export type Play = {
  slug: string
  title: string
  genre?: string
  duration?: string
  distributions?: Array<{
    total: number
    h: number
    f: number
  }>
  accroche?: string
  sections?: Record<string, string>
  download?: { url: string }
  poster?: string
  tags?: string[]
  youtube?: string
  cast?: string[];
}

export type Highlights = {
  featured: string[]
  recent: string[]
}

export type Author = {
  headline: string
  subheadline?: string
  bioBlocks: string[]
}