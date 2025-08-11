// [theatre-comedie-vite-ts] #1
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold gradient-text mb-4">Page introuvable</h1>
      <Link to="/" className="btn-primary">Retour à l'accueil</Link>
    </div>
  )
}