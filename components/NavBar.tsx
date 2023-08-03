export default function NavBar(): JSX.Element {
  return (
    <div className="flex justify-between text-emerald-200 py-6">
      <div>
        <a
          className="hover:text-emerald-500 uppercase duration-200 tracking-wider sm:text-sm"
          href="#"
        >
          vo quang chien
        </a>
      </div>

      <nav>
        <a
          className="sm:mr-4 hover:text-emerald-500 duration-200 tracking-wider sm:text-sm"
          href=""
        >
          Home
        </a>
        <a
          className="sm:mx-4 hover:text-emerald-500 duration-200 tracking-wider sm:text-sm"
          href=""
        >
          Profile
        </a>
        <a
          className="sm:mx-4 hover:text-emerald-500 duration-200 tracking-wider sm:text-sm"
          href=""
        >
          Work
        </a>
        <a
          className="sm:mx-4 hover:text-emerald-500 duration-200 tracking-wider sm:text-sm"
          href=""
        >
          Skills
        </a>
      </nav>
    </div>
  )
}
