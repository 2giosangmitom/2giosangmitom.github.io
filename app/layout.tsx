import type { Metadata } from 'next'
import { Fira_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
