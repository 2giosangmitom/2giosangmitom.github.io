'use client'
import { BsGridFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa6'
import { AiFillProject } from 'react-icons/ai'
import { MdWork } from 'react-icons/md'
import { type links } from '@/types'
import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'
import { type IconType } from 'react-icons'

function renderIcon(icon: IconType, index: number): JSX.Element {
  const Icon = icon
  return (
    <div className="my-2 sm:my-0 sm:hidden" key={index}>
      <Icon />
    </div>
  )
}

export default function NavBar(): JSX.Element {
  const links: links[] = [
    { name: 'Profile', link: '/profile', icon: FaUser },
    { name: 'Projects', link: '/projects', icon: AiFillProject },
    { name: 'Skills', link: '/', icon: MdWork },
  ]
  const [open, setOpen] = useState<boolean>(false)

  return (
    <nav className="flex justify-between text-white sm:text-emerald-200 sm:py-6 sm:static fixed bottom-0 w-full -ml-3 sm:-ml-0 sm:px-0 px-2 sm:shadow-transparent sm:bg-transparent bg-[#0b3e84] py-1.5">
      <div>
        <Link
          className="hover:text-emerald-500 uppercase duration-200 tracking-wider text-sm sm:font-bold font-semibold"
          href="/"
        >
          vo quang chien
        </Link>
      </div>

      <button
        className="text-white sm:hidden"
        onClick={() => {
          setOpen(!open)
        }}
      >
        <BsGridFill />
      </button>

      <ul
        className={clsx(
          'sm:flex sm:items-center absolute sm:static bg-[#0a192f] sm:shadow-transparent shadow-md sm:bg-transparent sm:z-auto z-10 left-0 w-full sm:w-auto sm:pl-0 pl-3 sm:pt-0 pt-3 transition-all duration-200 ease-in grid grid-cols-3',
          open ? '-top-28' : 'top-10',
        )}
      >
        {links.map((item, index) => (
          <li key={`${item.name}_${index}`} className="shadow-md">
            <Link
              className="sm:mx-4 hover:text-emerald-500 duration-200 tracking-wider sm:text-sm sm:block sm:w-auto flex flex-col items-center justify-center p-5 sm:p-0"
              href={item.link}
              onClick={() => {
                setOpen(false)
              }}
            >
              {item.name}
              {renderIcon(item.icon, index)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
