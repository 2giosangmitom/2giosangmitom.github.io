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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-2 sm:pt-0"
    >
      <h1 className="text-white font-extrabold sm:text-5xl mb-2 text-2xl">About</h1>
      <div className="h-[0.5px] w-full bg-gray-700"></div>

      <div className="md:grid md:grid-cols-3 mt-10">
        <div className="flex flex-col items-center sm:mb-0 mb-2">
          <Image
            src="/images/avatar.png"
            alt="avatar"
            width={192}
            height={192}
            priority
            className="rounded-full lg:w-48 lg:h-48 sm:w-36 sm:h-36 w-32 h-32"
          />
          <div className="text-center">
            <h1 className="text-white font-semibold mt-2 text-2xl">Vo Quang Chien</h1>
            <h2 className="text-gray-300 text-lg">Full-stack developer</h2>
            <h3 className="text-gray-300">Viet Nam</h3>
          </div>
        </div>

        <div className="col-span-2 text-gray-200 sm:text-lg text-base text-justify">
          <p className="mb-2">A full-stack developer who aims to evolve, innovate, and inspire through technology.</p>
          <p className="mb-2">
            I&apos;m strongly focus on <u>React (Next.js), ASP.NET Core, TypeScript, C# and Golang.</u>
          </p>
          <p className="mb-2">
            I am a responsible and passionate person at work. My favorite part of programming is the problem-solving
            aspect. I love the feeling of finally figuring out a solution to a problem. I have worked with{' '}
            <strong>Next.js, ASP.NET Core and Golang</strong>. I have a good knowledge of{' '}
            <strong>Docker, K8s, SEO, GraphQL, RESTful API</strong>. I&apos;m always actively learning new technologies
            myself. I&apos;m currently learning <u>Microservice, Rust</u>.
          </p>
          <p className="mb-2">
            I&apos;m currently looking for a <strong>intern position</strong> as a full-stack developer.
          </p>
        </div>
      </div>
      <Footer />
    </motion.section>
  )
}
