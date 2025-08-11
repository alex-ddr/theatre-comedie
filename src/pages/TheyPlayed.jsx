// site-auteur #3
import React from 'react'
import Section from '../components/Section'
import data from '../content/they-played.json'

export default function TheyPlayed() {
  const body = data.body || []
  const groups = Array.isArray(body) ? body : []
  return (
    <Section title="Ils ont joué">
      {data.intro && <p className="mb-6 text-stone-700">{data.intro}</p>}
      <div className="grid md:grid-cols-2 gap-6">
        {groups.slice(0, 40).map((line, idx) => (
          <div key={idx} className="rounded-xl border border-stone-200 bg-white p-4">
            {line}
          </div>
        ))}
      </div>
      {data.links && (
        <div className="mt-8">
          {data.links.map((l, i) => <div key={i} className="text-brand-700 underline">{l}</div>)}
        </div>
      )}
    </Section>
  )
}
