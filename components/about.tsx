'use client'
import SectionHeading from './section_heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className="mb-28 sm:mb-0 sm:max-w-2xl max-w-none text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span>I am a responsible and passionate person at work. </span>
        <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I{' '}
        <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My core
        stack is <span className="font-medium">React, Next.js, ASP.NET Core and Golang</span>. I also love to work with
        other programming languages like <span className="font-medium">Rust</span> to build CLI application. I&apos;m
        always actively learning new technologies myself. I am currently looking for a{' '}
        <span className="font-medium">intern position</span> as a full-stack developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I often enjoy watching movies, listen to music, go out
        with my friends.
      </p>
    </motion.section>
  )
}
