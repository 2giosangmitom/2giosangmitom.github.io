import { About, Contact, Intro, SectionDivider, Skills } from '@/components'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 sm:px-0">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
    </main>
  )
}
