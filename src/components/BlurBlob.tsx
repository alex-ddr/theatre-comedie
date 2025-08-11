// [theatre-comedie-vite-ts] #1
import React from 'react'

type Props = { className?: string }

export default function BlurBlob({ className }: Props) {
  return (
    <div className={className}>
      <div className="absolute -top-32 -left-24 w-[40rem] h-[40rem] rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute -top-10 right-0 w-[30rem] h-[30rem] rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute bottom-0 -left-10 w-[30rem] h-[30rem] rounded-full bg-rose-500/20 blur-3xl" />
    </div>
  )
}