import React from 'react'
import { navItems } from '@/lib/datas'
import Link from 'next/link'

export default function NavBar(): JSX.Element {
  return (
    <nav className="h-20">
      <ul className="sm:flex sm:justify-end sm:h-full sm:items-center">
        {navItems.map((item, index) => (
          <li key={index} className="px-2">
            <Link href={item.route} className="capitalize text-gray-200">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
