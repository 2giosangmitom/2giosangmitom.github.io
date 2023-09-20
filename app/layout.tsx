import ThemeContextProvider from '@/context/theme_context'
import ActiveSectionContextProvider from '@/context/active_section_context'
import './globals.css'
import type { Metadata } from 'next'
import { Fira_Sans } from 'next/font/google'
import ThemeSwitch from '@/components/theme_toggle'
import { Toaster } from 'react-hot-toast'
import { Header } from '@/components'

const font = Fira_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['vietnamese', 'latin']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://2giosangmitom.vercel.app'),
  title: 'Võ Quang Chiến',
  description: 'My personal website using Next.js 13 new App Router features, server components and more',
  authors: [
    {
      name: 'Vo Quang Chien',
      url: 'https://2giosangmitom.vercel.app'
    }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://2giosangmitom.vercel.app',
    title: 'Vo Quang Chien',
    description: 'A fullstack developer from Viet Nam. Focus on React, Next.js, ASP.NET Core, Golang and Rust',
    siteName: 'Vo Quang Chien'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body
        className={[
          font.className,
          'bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90'
        ].join(' ')}
      >
        <div className="bg-blue-600 -z-10 w-1/3 h-[50rem] -left-10 -top-56 absolute rounded-full blur-[10rem] dark:bg-yellow-800"></div>
        <div className="bg-pink-600 -z-10 w-1/3 h-[40rem] right-0 absolute rounded-full blur-[10rem] dark:bg-cyan-800"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
