import './globals.css'
import type { Metadata } from 'next'
import { Fira_Sans } from 'next/font/google'
import ToggleTheme from '@/components/ToggleTheme'
import ThemeContextProvider from '@/context/ThemeContext'

const font = Fira_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['vietnamese', 'latin']
})

export const metadata: Metadata = {
  title: 'Vo Quang Chien',
  description:
    'A full-stack developer from Viet Nam. Focus on React, Next.js, ASP.NET Core, Golang and build CLI tool with Rust',
  metadataBase: new URL('https://2giosangmitom.vercel.app'),
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
    description:
      'A full-stack developer from Viet Nam. Focus on React, Next.js, ASP.NET Core, Golang and build CLI tool with Rust',
    siteName: 'Vo Quang Chien'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={[
          font.className,
          'bg-emerald-50 text-gray-950 relative dark:bg-teal-950 dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden'
        ].join(' ')}
      >
        <div className="-z-10 w-[25rem] h-[20rem] rounded-full absolute left-32 top-36 bg-yellow-300 blur-3xl dark:bg-yellow-600"></div>
        <div className="-z-10 w-[20rem] h-[15rem] rounded-full absolute left-36 top-10 bg-green-400 blur-3xl dark:bg-teal-900"></div>
        <div className="-z-10 w-[25rem] h-[20rem] rounded-full absolute right-1/3 top-0 bg-red-500 blur-3xl dark:bg-red-700"></div>
        <div className="-z-10 w-[20rem] h-[25rem] rounded-full absolute right-20 top-20 bg-purple-300 blur-3xl dark:bg-pink-900"></div>
        <ThemeContextProvider>
          {children}
          <ToggleTheme />
        </ThemeContextProvider>
      </body>
    </html>
  )
}
