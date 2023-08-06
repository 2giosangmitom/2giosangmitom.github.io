'use client'
import { CgMenuRight } from 'react-icons/cg'
import { type links } from '@/types'
import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'

export default function NavBar(): JSX.Element {
  const links: links[] = [
    { name: 'Profile', link: '/profile' },
    { name: 'Projects', link: '/projects' },
    { name: 'Skills', link: '/skills' },
  ]
  const [open, setOpen] = useState<boolean>(false)

  return (
    <nav className="flex justify-between text-emerald-200 py-6">
      <div>
        <Link
          className="hover:text-emerald-500 uppercase duration-200 tracking-wider sm:text-sm font-bold"
          href="/"
        >
          vo quang chien
        </Link>
      </div>

      <button
        className="text-white float-right text-2xl sm:hidden block p-1 -mt-1"
        onClick={() => {
          setOpen(!open)
        }}
      >
        <CgMenuRight />
      </button>

      <ul
        className={clsx(
          'sm:flex sm:items-center absolute sm:static bg-[#0a192f] shadow-md sm:bg-transparent sm:z-auto z-10 left-0 w-full sm:w-auto mt-8 sm:mt-0 sm:pl-0 pl-3 sm:pt-0 pt-3 transition-all duration-300 ease-in',
          open ? 'top-5' : '-top-52',
        )}
        id="nav__link"
      >
        {links.map((item, index) => (
          <li key={`${item.name}_${index}`} className={clsx(index > 0 && 'my-4', 'sm:my-0')}>
            <Link
              className="sm:mx-4 hover:text-emerald-500 duration-200 tracking-wider sm:text-sm sm:block"
              href={item.link}
              onClick={() => {
                setOpen(false)
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
