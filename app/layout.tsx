import type { Metadata } from 'next'
import { Fira_Sans } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components'

const font = Fira_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['vietnamese', 'latin'],
})

export const metadata: Metadata = {
  title: 'Võ Quang Chiến',
  description: 'My personal website',
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" className="dark">
      <body className={font.className}>
        <div className="lg:px-16 sm:px-5 px-3 overflow-hidden">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  )
}
