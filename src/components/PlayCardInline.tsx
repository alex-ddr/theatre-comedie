// [theatre-comedie-vite-ts] #2
import React from 'react'
import { Link } from 'react-router-dom'
import type { Play } from '@/types'

function Poster({ poster, title }: { poster?: string, title: string }) {
  const hasPoster = !!poster
  const src = poster && poster.startsWith('/') ? poster : (poster ? `/${poster}` : '')
  return (
    <div className="flex-shrink-0">
      {hasPoster ? (
        <img
          src={src}
          alt={`Affiche – ${title}`}
          className="w-28 h-36 object-cover rounded-xl border border-white/10"
          loading="lazy"
        />
      ) : (
        <div className="w-28 h-36 rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-pink-500/30 to-rose-500/40" />
          <div className="absolute inset-0 backdrop-blur-md" />
        </div>
      )}
    </div>
  )
}

export default function PlayCardInline({ play }: { play: Play }) {
  return (
    <Link
      to={`/pieces/${play.slug}`}
      className="group glass rounded-2xl p-3 flex gap-3 w-[520px] max-w-full hover:bg-white/10 transition-colors snap-start"
    >
      <Poster poster={play.poster} title={play.title} />
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-semibold group-hover:gradient-text transition-colors truncate">{play.title}</h3>
        <p className="text-white/65 text-sm mt-1 line-clamp-2">{play.accroche}</p>
        <div className="flex flex-wrap gap-2 mt-2 text-[11px] text-white/70">
          {play.genre && <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">{play.genre}</span>}
          {play.duration && <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">{play.duration}</span>}
        </div>
      </div>
    </Link>
  )
}