import { NavBar, Footer } from '@/components'
import { HomeContent } from '@/content'

export default function Page(): JSX.Element {
  return (
    <div className="lg:px-16 sm:px-5 px-3">
      <NavBar />
      <HomeContent />
      <Footer />
    </div>
  )
}
