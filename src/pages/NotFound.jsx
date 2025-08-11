// site-auteur #3
import React from 'react'
import Section from '../components/Section'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Section title="Page introuvable">
      <p>La page que vous cherchez n'existe pas.</p>
      <div className="mt-4">
        <Link to="/" className="btn">Retour à l'accueil</Link>
      </div>
    </Section>
  )
}
