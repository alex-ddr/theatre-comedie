// site-auteur #3
import React from 'react'
import Section from '../components/Section'
import PlayCard from '../components/PlayCard'

// Import all plays JSON dynamically
const modules = import.meta.glob('../content/plays/*.json', { eager: true })
const plays = Object.values(modules)

export default function Plays() {
  const [query, setQuery] = React.useState('')
  const filtered = plays.filter(p => {
    const hay = (p.title + ' ' + (p.genre||'') + ' ' + (p.accroche||'') + ' ' + (p.tags||[]).join(' ')).toLowerCase()
    return hay.includes(query.toLowerCase())
  })
  return (
    <Section title="Pièces" subtitle="Toutes les comédies disponibles.">
      <div className="mb-6">
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Rechercher une pièce, un thème, un genre…"
          className="w-full md:w-96 px-4 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-400"
        />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => <PlayCard key={p.slug} play={p} />)}
      </div>
    </Section>
  )
}
