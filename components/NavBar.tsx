import { navItems } from '@/lib/datas'
import Link from 'next/link'

export default function NavBar(): JSX.Element {
  return (
    <nav className="h-20 sm:block hidden">
      <ul className="sm:flex sm:justify-end sm:h-full sm:items-center">
        {navItems.map((item, index) => (
          <li key={index} className="px-4">
            <Link href={item.route} className="capitalize text-gray-200 hover:text-gray-50 font-medium text-lg">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
