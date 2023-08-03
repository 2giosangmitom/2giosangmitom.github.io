import { NavBar, Footer } from '@/components'
import { HomeContent } from '@/content'

export default function Page(): JSX.Element {
  return (
    <div className="sm:px-16">
      <NavBar />
      <HomeContent />
      <Footer />
    </div>
  )
}
