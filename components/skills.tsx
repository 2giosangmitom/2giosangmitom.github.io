'use client'
import React from 'react'
import SectionHeading from './section_heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

const skillsData = [
  'Rust',
  'Golang',
  'JavaScript',
  'TypeScript',
  'C#',
  'ASP.NET Core',
  'React',
  'Next.js',
  'Node.js',
  'GraphQL',
  'ExpressJS',
  'PostgreSQL',
  'Docker',
  'Kubernetes'
]

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
}

export default function Skills() {
  const { ref } = useSectionInView('Skills')

  return (
    <section ref={ref} id="skills" className="scroll-mt-28 mb-28 sm:mb-0 max-w-[53rem] text-center">
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 sm:text-lg text-base text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-gray-400 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 dark:border-transparent"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
