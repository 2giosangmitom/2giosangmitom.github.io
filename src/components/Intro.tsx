'use client'
import Image from 'next/image'
import { createElement, ReactNode } from 'react'
import { BsArrowRight, BsLinkedin, BsFacebook } from 'react-icons/bs'
import { ImGithub } from 'react-icons/im'
import { motion } from 'framer-motion'

type socialLink = {
  url: string
  icon: ReactNode
}

const links: socialLink[] = [
  {
    url: 'https://www.linkedin.com/in/2giosangmitom/',
    icon: createElement(BsLinkedin)
  },
  {
    url: 'https://github.com/2giosangmitom/',
    icon: createElement(ImGithub)
  },
  {
    url: 'https://www.facebook.com/2giosangmitom/',
    icon: createElement(BsFacebook)
  }
]

export default function Intro() {
  return (
    <section className="lg:mt-10 flex flex-col items-center mt-5">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'tween',
          duration: 0.5
        }}
      >
        <Image
          src="/girl.jpg"
          alt="avatar"
          width="195"
          height="195"
          priority={true}
          className="h-24 w-24 rounded-full object-cover border-[0.30rem] border-white shadow-xl"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl text-center"
      >
        Hi, I&apos;m <strong>Vo Quang Chien</strong>. I&apos;m a<strong> full-stack developer</strong> from{' '}
        <strong>Viet Nam</strong>. I enjoy building
        <i> things that live on the internet.</i> My focus is{' '}
        <u>React (Next.js), ASP.NET Core, TypeScript, C#, Rust and Golang</u>.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="sm:text-xl mt-2 text-base text-center leading-8"
      >
        I am a responsible and passionate person at work. <i>My favorite part of programming</i> is the problem-solving
        aspect. I <u>love</u> the feeling of finally figuring out a solution to a problem. My core stack is{' '}
        <strong>React, Next.js, ASP.NET Core and Golang</strong>. I also love to work with other programming languages
        like <strong>Rust</strong> to build CLI application. I&apos;m always actively learning new technologies myself.
        I am currently looking for a <strong>intern position</strong> as a full-stack developer.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col mt-5 sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <span className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-gray-950 transition select-none">
          Contact me here <BsArrowRight className="opacity-70 transition lg:block hidden" />
        </span>

        <div className="flex">
          {links.map((v, i) => (
            <a
              className="bg-white p-4 text-gray-700 hover:text-gray-950 mx-0.5 flex items-center rounded-full active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60"
              key={i}
              href={v.url}
              target="_blank"
            >
              {v.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
