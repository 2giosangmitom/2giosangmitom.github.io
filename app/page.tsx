'use client'
import React from 'react'
import { Intro } from '@/components'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Intro />
    </motion.main>
  )
}
