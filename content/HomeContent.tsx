'use client'
import { motion } from 'framer-motion'

export default function HomeContent(): JSX.Element {
  return (
    <div className="lg:mt-20 mt-10 lg:mx-28 sm:mx-20 tracking-wide">
      <motion.p
        className="text-emerald-200 sm:mb-7 mb-3"
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        initial={{
          opacity: 0,
          x: 20,
        }}
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        className="lg:text-6xl lg:leading-tight text-light-slate font-bold sm:mb-5 sm:text-5xl text-4xl"
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        initial={{
          opacity: 0,
          x: 40,
        }}
      >
        Vo Quang Chien.
      </motion.h1>
      <motion.h1
        className="lg:text-6xl lg:leading-tight text-slate font-bold sm:mb-7 sm:text-5xl text-4xl"
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        initial={{
          opacity: 0,
          x: 40,
        }}
      >
        I build things for the web.
      </motion.h1>
      <motion.p
        className="text-light-slate"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        I&apos;m a fullstack developer in Viet Nam 🇻🇳
        <br />
        I am a lover of all things open source about web development
        <br />
        Currently, I&apos;m working with React, Next.js (TypeScript), Tailwind, Golang and Express.js
        <br />I also love to work with other programming languages like Rust to make CLI application
      </motion.p>
    </div>
  )
}
