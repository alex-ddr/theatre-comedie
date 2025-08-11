// site-auteur #3
import React from 'react'
import { motion } from 'framer-motion'
export default function Hero({ title, subtitle, cta }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-200 via-accent-100 to-stone-50" />
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-stone-700 max-w-3xl"
          >
            {subtitle}
          </motion.p>
        )}
        {cta}
      </div>
    </section>
  )
}
