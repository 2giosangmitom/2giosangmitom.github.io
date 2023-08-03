import { CgMenuRight } from 'react-icons/cg'

export default function NavBar(): JSX.Element {
  return (
    <nav className="flex justify-between text-emerald-200 py-6">
      <div>
        <a
          className="hover:text-emerald-500 uppercase duration-200 tracking-wider sm:text-sm font-bold"
          href=""
        >
          vo quang chien
        </a>
      </div>

      <button className="text-white float-right text-2xl sm:hidden block p-1 -mt-1">
        <CgMenuRight />
      </button>

      <ul className="sm:flex hidden">
        <li>
          <a
            className="sm:mr-4 hover:text-emerald-500 duration-200 tracking-wider sm:text-sm sm:block"
            href=""
          >
            Home
          </a>
        </li>

        <li>
          <a
            className="sm:mx-4 hover:text-emerald-500 duration-200 tracking-wider sm:text-sm sm:block"
            href=""
          >
            Profile
          </a>
        </li>

        <li>
          <a
            className="sm:mx-4 hover:text-emerald-500 duration-200 tracking-wider sm:text-sm sm:block"
            href=""
          >
            Work
          </a>
        </li>

        <li>
          <a
            className="sm:mx-4 hover:text-emerald-500 duration-200 tracking-wider sm:text-sm sm:block"
            href=""
          >
            Skills
          </a>
        </li>
      </ul>
    </nav>
  )
}
