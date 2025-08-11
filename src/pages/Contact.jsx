// site-auteur #3
import React from 'react'
import Section from '../components/Section'
import site from '../content/site.json'

export default function Contact() {
  return (
    <Section title="Contact">
      <div className="grid md:grid-cols-2 gap-8">
        <form className="space-y-4">
          <input name="name" placeholder="Votre nom" className="w-full px-4 py-2 rounded-xl border border-stone-300" />
          <input name="email" placeholder="Votre email" className="w-full px-4 py-2 rounded-xl border border-stone-300" />
          <textarea name="message" rows="5" placeholder="Votre message" className="w-full px-4 py-2 rounded-xl border border-stone-300" />
          <button type="button" className="btn">Envoyer</button>
          <p className="text-xs text-stone-500">Le formulaire est statique. Utilisez l'email ci-dessous pour une réponse rapide.</p>
        </form>
        <div className="text-sm space-y-2">
          <div><span className="font-medium">Email:</span> <a className="underline" href={`mailto:${site.email}`}>{site.email}</a></div>
          <div><span className="font-medium">Téléphone:</span> <a className="underline" href={`tel:${site.phone}`}>{site.phone}</a></div>
          <div><span className="font-medium">Adresse:</span> {site.address}</div>
          <div><span className="font-medium">Site:</span> <a className="underline" href={site.url} target="_blank" rel="noreferrer">{site.url}</a></div>
        </div>
      </div>
    </Section>
  )
}
