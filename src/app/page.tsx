import Intro from '@/components/Intro'
import { links } from '@/lib/data'

export default function Home() {
  return (
    <main className="lg:px-40 px-5 pb-5">
      <Intro links={links} />
    </main>
  )
}
