'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import gif from '../assets/oksaz.gif'

export default function ProfileContent(): JSX.Element {
  return (
    <motion.div
      className="sm:px-40 sm:pt-10 pt-5"
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
      <div className="flex items-center mb-5">
        <h1 className="text-white font-semibold sm:text-2xl">About Me</h1>
        <div className="bg-slate w-1/2 h-[0.05rem] opacity-60 ml-5"></div>
      </div>

      <div className="mb-5">
        <div className="text-light-slate">
          <p>
            Hello! My name is Vo Quang Chien and I enjoy creating things that live on the internet. My interest in web
            development started back in 2020. I&apos;m always actively learning new technologies myself.
          </p>
          <p className="mt-3">
            I&apos;m a responsible and passionate person at work. I have some experience working with JavaScript,
            TypeScript, Golang, Rust, Tailwind, React, Next.js, Linux Terminal and Git.
          </p>
        </div>
      </div>

      <motion.div
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1.5,
        }}
        initial={{
          opacity: 0,
          y: 50,
        }}
      >
        <Image src={gif} alt="gif" width="250" height="250" unoptimized />
      </motion.div>
    </motion.div>
  )
}
