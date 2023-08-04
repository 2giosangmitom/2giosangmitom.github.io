import { CgMenuRight } from 'react-icons/cg'
import Link from 'next/link'

export default function NavBar(): JSX.Element {
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

      <button className="text-white float-right text-2xl sm:hidden block p-1 -mt-1">
        <CgMenuRight />
      </button>

      <ul className="sm:flex hidden">
        <li>
          <Link
            className="sm:mx-4 hover:text-emerald-500 duration-200 tracking-wider sm:text-sm sm:block"
            href="/profile"
          >
            Profile
          </Link>
        </li>

        <li>
          <Link
            className="sm:mx-4 hover:text-emerald-500 duration-200 tracking-wider sm:text-sm sm:block"
            href="/projects"
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            className="sm:mx-4 hover:text-emerald-500 duration-200 tracking-wider sm:text-sm sm:block"
            href="/skills"
          >
            Skills
          </Link>
        </li>
      </ul>
    </nav>
  )
}
