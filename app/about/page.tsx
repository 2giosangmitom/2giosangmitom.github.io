'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Footer } from '@/components'

export default function About() {
  React.useEffect(() => {
    document.title = 'About - Vo Quang Chien'
  }, [])

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1 className="text-white font-extrabold sm:text-6xl mb-2 text-4xl">About</h1>
      <div className="h-[0.5px] w-full bg-gray-700"></div>

      <div className="md:grid md:grid-cols-3 mt-10">
        <div className="flex flex-col items-center sm:mb-0 mb-2">
          <Image
            src="/images/avatar.png"
            alt="avatar"
            width={192}
            height={192}
            priority
            className="rounded-full sm:w-48 sm:h-48 w-32 h-32"
          />
          <div className="text-center">
            <h1 className="text-white font-semibold sm:text-3xl mt-2 text-2xl">Vo Quang Chien</h1>
            <h2 className="text-gray-300 text-lg">Full-stack developer</h2>
            <h3 className="text-gray-300">Viet Nam</h3>
          </div>
        </div>

        <div className="col-span-2 text-gray-200 sm:text-lg text-base">
          <p className="mb-2">A full-stack developer who aims to evolve, innovate, and inspire through technology.</p>
          <p className="mb-2">
            I&apos;m strongly focus on <u>React (Next.js), ASP.NET Core, TypeScript, C#, Rust and Golang.</u>
          </p>
          <p className="mb-2">
            I am a responsible and passionate person at work. <i>My favorite part of programming</i> is the
            problem-solving aspect. I <u>love</u> the feeling of finally figuring out a solution to a problem. I have
            worked with <strong>Next.js, ASP.NET Core and Golang</strong>. I have a basic knowledge of{' '}
            <strong>Docker, K8s, SEO, GraphQL</strong>. I&apos;m also love to work with other programming languages like{' '}
            <strong>Rust</strong> to make CLI application. I&apos;m always actively learning new technologies myself.
          </p>
          <p className="mb-2">
            I am currently looking for a <strong>intern position</strong> as a full-stack developer.
          </p>
        </div>
      </div>
      <Footer />
    </motion.section>
  )
}
