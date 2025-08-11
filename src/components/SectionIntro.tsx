// [theatre-comedie-vite-ts] #2
import React from 'react'

type Props = {
  title: string
  subtitle?: string
}

export default function SectionIntro({ title, subtitle }: Props) {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-semibold gradient-text">{title}</h2>
      {subtitle && <p className="text-white/60 mt-1 text-sm">{subtitle}</p>}
    </div>
  )
}