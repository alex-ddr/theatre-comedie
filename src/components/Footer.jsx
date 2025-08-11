// site-auteur #3
import React from 'react'
import site from '../content/site.json'

export default function Footer() {
  return (
    <footer className="mt-12 bg-stone-100 border-t border-stone-200">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">Théâtre & Comédies</div>
          <p className="text-sm text-stone-600 mt-2">Site d'auteur — comédies contemporaines.</p>
        </div>
        <div className="text-sm space-y-1">
          <div><span className="font-medium">Email:</span> <a className="underline" href={`mailto:${site.email}`}>{site.email}</a></div>
          <div><span className="font-medium">Téléphone:</span> <a className="underline" href={`tel:${site.phone}`}>{site.phone}</a></div>
          <div><span className="font-medium">Adresse:</span> {site.address}</div>
        </div>
        <div className="text-sm text-stone-600">
          © {new Date().getFullYear()} Théâtre & Comédies — Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
