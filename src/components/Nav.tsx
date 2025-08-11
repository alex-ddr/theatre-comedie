// [theatre-comedie-vite-ts] #1
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  const link = 'px-3 py-2 rounded-full hover:bg-white/10 transition-colors'
  const active = ({ isActive }: { isActive: boolean }) => isActive ? `${link} bg-white/10` : link
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold gradient-text">Théâtre & Comédie</Link>
        <nav className="flex items-center gap-2 text-sm">
          <NavLink to="/pieces" className={active}>Toutes les pièces</NavLink>
          <NavLink to="/auteur" className={active}>Auteur</NavLink>
          <NavLink to="/contact" className={active}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}