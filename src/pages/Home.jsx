// site-auteur #3
import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import playsData from '../content/plays/a-fond-la-caisse.json'
import site from '../content/site.json'

export default function Home() {
  return (
    <>
      <Hero
        title="Comédies contemporaines pour la scène"
        subtitle="Textes vifs, personnages hauts en couleur, et situations qui font mouche. Découvrez des pièces jouées en France, Belgique et Suisse."
        cta={<div className="mt-8 flex gap-3">
          <Link to="/pieces" className="btn">Voir les pièces</Link>
          <a href={`mailto:${site.email}`} className="inline-flex items-center px-4 py-2 rounded-xl border border-stone-300 hover:bg-stone-100">Me contacter</a>
        </div>}
      />
      <Section title="La dernière pièce" subtitle="Un aperçu rapide.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-soft">
            <img src="/posters/placeholder.svg" alt="" className="w-full h-80 object-cover"/>
          </div>
          <div>
            <div className="text-sm uppercase tracking-wide text-stone-500">{playsData.genre} • {playsData.duration}</div>
            <h3 className="mt-1 text-2xl font-semibold">{playsData.title}</h3>
            {playsData.accroche && <p className="mt-3 text-stone-700">{playsData.accroche}</p>}
            <div className="mt-5 flex gap-3">
              <Link to={`/pieces/${playsData.slug}`} className="btn">Lire la fiche</Link>
              {playsData.download?.url && <a className="inline-flex items-center px-4 py-2 rounded-xl border border-stone-300 hover:bg-stone-100" href={playsData.download.url} download>Télécharger le PDF</a>}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
