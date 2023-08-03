'use client'
import { motion } from 'framer-motion'

export default function HomeContent(): JSX.Element {
  return (
    <div className="sm:mt-20 sm:mx-28 tracking-wide">
      <motion.p
        className="text-emerald-200 sm:mb-7"
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        initial={{
          opacity: 0,
          x: 20,
        }}
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        className="sm:text-6xl text-light-slate font-bold sm:mb-5"
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 3,
        }}
        initial={{
          opacity: 0,
          x: 40,
        }}
      >
        Vo Quang Chien.
      </motion.h1>
      <motion.h1
        className="sm:text-6xl text-slate font-bold sm:mb-7"
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 5,
        }}
        initial={{
          opacity: 0,
          x: 40,
        }}
      >
        I build things for the web.
      </motion.h1>
      <motion.p
        className="text-sky-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        I&apos;m a fullstack developer in Viet Nam 🇻🇳
        <br />
        I am a lover of all things open source about web
        <br />
        Currently, I&apos;m working with React, Next.js (TypeScript), Tailwind and NestJS
        <br />I also love to work with other programming languages like Rust, Go
      </motion.p>
    </div>
  )
}
