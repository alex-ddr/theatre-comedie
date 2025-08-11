// [theatre-comedie-vite-ts] #1
export type Play = {
  slug: string
  title: string
  genre?: string
  duration?: string
  cast?: string[]
  accroche?: string
  sections?: Record<string, string>
  download?: { url: string }
  poster?: string
  tags?: string[]
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