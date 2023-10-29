'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
            className="rounded-full w-48 h-48"
          />
          <div className="text-center">
            <h1 className="text-white font-semibold text-3xl mt-2">Vo Quang Chien</h1>
            <h2 className="text-gray-300 text-base">Full-stack developer</h2>
            <h3 className="text-gray-300">Viet Nam</h3>
          </div>
        </div>

        <div className="col-span-2 text-gray-200 text-lg">
          <p className="mb-2">A full-stack developer who aims to evolve, innovate, and inspire through technology.</p>
          <p className="mb-2">
            My focus is <u>React (Next.js), ASP.NET Core, TypeScript, C#, Rust and Golang.</u>
          </p>
          <p className="mb-2">
            I am a responsible and passionate person at work. <i>My favorite part of programming</i> is the
            problem-solving aspect. I <u>love</u> the feeling of finally figuring out a solution to a problem. My core
            stack is <strong>React, Next.js, ASP.NET Core and Golang</strong>. I also love to work with other
            programming languages like <strong>Rust</strong> to make CLI application. I&apos;m always actively learning
            new technologies myself.
          </p>
          <p className="mb-2">
            I am currently looking for a <strong>intern position</strong> as a full-stack developer.
          </p>
        </div>
      </div>
    </motion.section>
  )
}
