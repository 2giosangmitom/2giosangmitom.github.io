'use client'
import Image from 'next/image'
import { createElement } from 'react'
import { motion } from 'framer-motion'
import { BsArrowRight, BsLinkedin, BsFacebook } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { socialLink } from '@/types'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active_section_context'

const links: socialLink[] = [
  { url: 'https://www.linkedin.com/in/2giosangmitom/', icon: createElement(BsLinkedin) },
  { url: 'https://github.com/2giosangmitom/', icon: createElement(FaGithubSquare) },
  { url: 'https://www.facebook.com/langthangchokopai/', icon: createElement(BsFacebook) }
]

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section ref={ref} id="home" className="sm:max-w-4xl max-w-none text-center scroll-mt-[100rem] mb-28 sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
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

          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.25,
              duration: 1
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I&apos;m <strong>Vo Quang Chien</strong>. I&apos;m a<strong> Full Stack developer</strong> from{' '}
        <strong>Viet Nam</strong>. I enjoy building
        <i> things that live on the internet</i>. My focus is
        <u> React (Next.js), ASP.NET Core and Golang</u>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2
        }}
      >
        <a
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection('Contact')
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </a>

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
