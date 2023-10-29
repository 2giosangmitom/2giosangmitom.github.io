import Link from 'next/link'

export default function Intro() {
  return (
    <div className="absolute bottom-56">
      <h1 className="text-white text-5xl font-bold">Hi, I&apos;m Chien</h1>
      <h2 className="text-yellow-50 text-2xl font-medium">Full-stack developer</h2>
      <h4 className="font-thin text-white">
        Read more{' '}
        <Link href="/about" className="text-black bg-sky-200 p-0.5">
          about me
        </Link>{' '}
        or{' '}
        <Link href="/blog" className="text-black bg-amber-200 p-0.5">
          my blog
        </Link>
      </h4>
    </div>
  )
}
