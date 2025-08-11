// site-auteur #3
import React from 'react'
import Section from '../components/Section'
import author from '../content/author.json'

export default function About() {
  return (
    <Section title="À propos">
      <div className="prose prose-stone max-w-none">
        {author.headline && <p className="text-xl">{author.headline}</p>}
        {Array.isArray(author.bioBlocks) && author.bioBlocks.map((b, i) => <p key={i}>{b}</p>)}
        {author.subheadline && <p><em>{author.subheadline}</em></p>}
      </div>
    </Section>
  )
}
