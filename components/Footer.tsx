'use client'

import { FiGithub, FiTwitter } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa6'
import { RiFacebookFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

export default function Footer(): JSX.Element {
  return (
    <motion.div
      className="sm:absolute sm:bottom-0 sm:flex sm:flex-col items-center"
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'anticipate', duration: 0.5 }}
      initial={{ y: 500, opacity: 0 }}
    >
      <a
        href="https://github.com/yeuxacucodon"
        target="_blank"
        className="duration-300 text-slate hover:text-emerald-500 text-xl hover:-translate-y-0.5 sm:p-5"
        title="GitHub"
      >
        <FiGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/2giosangmitom/"
        target="_blank"
        className="duration-300 text-slate hover:text-emerald-500 text-xl hover:-translate-y-0.5 sm:p-5"
        title="LinkedIn"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://www.facebook.com/langthangchokopai/"
        target="_blank"
        className="duration-300 text-slate hover:text-emerald-500 text-xl hover:-translate-y-0.5 sm:p-5"
        title="Facebook"
      >
        <RiFacebookFill />
      </a>

      <a
        href="https://twitter.com/yeuxacucodon"
        target="_blank"
        className="duration-300 text-slate hover:text-emerald-500 text-xl hover:-translate-y-0.5 sm:p-5"
        title="Twitter"
      >
        <FiTwitter />
      </a>

      <div className="sm:w-0.5 sm:mt-8 sm:h-40 bg-slate sm:block hidden"></div>
    </motion.div>
  )
}
