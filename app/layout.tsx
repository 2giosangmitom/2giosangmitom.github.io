import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { NavBar } from '@/components'
import './globals.css'

const font = Nunito({
  weight: '500',
  style: 'normal',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Vo Quang Chien',
  description: 'A full-stack developer from Vietnam. Mainly focusing on Next.js, ASP.NET Core, Golang and Rust',
  metadataBase: new URL('https://2giosangmitom.github.io/portfolio/'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://2giosangmitom.github.io/portfolio/',
    title: 'Vo Quang Chien',
    description: 'A full-stack developer from Vietnam. Mainly focusing on Next.js, ASP.NET Core, Golang and Rust',
    siteName: 'Vo Quang Chien'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={[font.className, 'bg-dark lg:px-32 md:px-16 sm:px-12 px-4'].join(' ')}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}