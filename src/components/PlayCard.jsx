// site-auteur #3
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'

export default function PlayCard({ play }) {
  const pdf = play.download?.url
  return (
    <div className="group rounded-2xl border border-stone-200 bg-white hover:shadow-soft transition overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-brand-300 via-accent-300 to-brand-200" />
      <div className="p-4">
        <div className="text-sm uppercase tracking-wide text-stone-500">{play.genre} • {play.duration}</div>
        <h3 className="mt-1 text-lg font-semibold">{play.title}</h3>
        {play.accroche && <p className="mt-2 text-sm text-stone-700 line-clamp-3">{play.accroche}</p>}
        <div className="mt-4 flex items-center gap-3">
          <Link to={`/pieces/${play.slug}`} className="btn">
            Découvrir <ArrowRight size={16} />
          </Link>
          {pdf && (
            <a className="text-sm inline-flex items-center gap-1 underline text-brand-700" href={pdf} download>
              <Download size={16} /> PDF
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
