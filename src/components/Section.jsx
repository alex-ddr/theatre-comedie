// site-auteur #3
import React from 'react'
import { motion } from 'framer-motion'

export default function Section({ title, children, subtitle }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold"
        >
          {title}
        </motion.h2>
        {subtitle && <p className="text-stone-600 mt-2">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}
