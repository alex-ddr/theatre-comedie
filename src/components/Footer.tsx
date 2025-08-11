// [theatre-comedie-vite-ts] #1
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold gradient-text">Théâtre & Comédie</h3>
          <p className="text-white/70 mt-2">Pièces contemporaines, comédies et intrigues, prêtes à jouer.</p>
        </div>
        <div className="flex gap-6 sm:justify-end">
          <Link to="/pieces" className="hover:underline">Pièces</Link>
          <Link to="/auteur" className="hover:underline">Auteur</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
      <div className="text-center text-white/40 text-sm pb-8">© {new Date().getFullYear()} Théâtre & Comédie</div>
    </footer>
  )
}