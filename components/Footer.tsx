import { socialAccounts } from '@/lib/datas'

export default function Footer() {
  return (
    <footer className="sm:pt-32 pt-10 pb-10">
      <ul className="flex justify-center">
        {socialAccounts.map((v) => (
          <li key={v.name} className="mx-3">
            <a
              href={v.link}
              target="_blank"
              title={v.name}
              className="text-white text-2xl hover:text-gray-400 duration-300"
            >
              {v.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
