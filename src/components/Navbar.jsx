// site-auteur #3
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-stone-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold">
          <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">Théâtre & Comédies</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/pieces" className={({isActive}) => isActive ? 'text-brand-700 font-medium' : 'text-stone-700 hover:text-brand-700'}>Pièces</NavLink>
          <NavLink to="/ils-ont-joue" className={({isActive}) => isActive ? 'text-brand-700 font-medium' : 'text-stone-700 hover:text-brand-700'}>Ils ont joué</NavLink>
          <NavLink to="/a-propos" className={({isActive}) => isActive ? 'text-brand-700 font-medium' : 'text-stone-700 hover:text-brand-700'}>À propos</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-brand-700 font-medium' : 'text-stone-700 hover:text-brand-700'}>Contact</NavLink>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-stone-100">
          <Menu size={20} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-stone-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            <NavLink onClick={() => setOpen(false)} to="/pieces" className="py-1">Pièces</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/ils-ont-joue" className="py-1">Ils ont joué</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/a-propos" className="py-1">À propos</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className="py-1">Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
