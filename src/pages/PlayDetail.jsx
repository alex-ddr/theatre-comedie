// site-auteur #3
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Section from '../components/Section'
import { Download, ArrowLeft } from 'lucide-react'

const modules = import.meta.glob('../content/plays/*.json', { eager: true })
const plays = Object.values(modules)

export default function PlayDetail() {
  const { slug } = useParams()
  const play = plays.find(p => p.slug === slug)
  if (!play) {
    return (
      <Section title="Pièce introuvable">
        <Link to="/pieces" className="btn"><ArrowLeft size={16}/> Retour aux pièces</Link>
      </Section>
    )
  }
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-200/60 to-transparent" />
        <img src="/posters/placeholder.svg" alt="" className="w-full h-72 object-cover"/>
      </section>
      <Section title={play.title} subtitle={`${play.genre} • ${play.duration}`}>
        <div className="prose prose-stone max-w-none">
          {play.accroche && <p><strong>Accroche.</strong> {play.accroche}</p>}
          {Array.isArray(play.sections) && play.sections.map((s, i) => (
            <section key={i} className="mt-6">
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </section>
          ))}
          {play.cast && (
            <section className="mt-6">
              <h3>Distribution</h3>
              <ul>
                {play.cast.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </section>
          )}
          {play.tags?.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {play.tags.map((t, i) => <span key={i} className="chip">#{t}</span>)}
            </div>
          ) : null}
        </div>
        <div className="mt-8 flex items-center gap-3">
          <Link to="/pieces" className="inline-flex items-center px-4 py-2 rounded-xl border border-stone-300 hover:bg-stone-100"><ArrowLeft size={16}/> Retour</Link>
          {play.download?.url && <a className="btn" href={play.download.url} download><Download size={16}/> Télécharger l'extrait PDF</a>}
        </div>
      </Section>
    </>
  )
}
