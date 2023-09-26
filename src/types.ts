import { ReactNode } from 'react'

export type socialLink = {
  url: string
  icon: ReactNode
}

export type Theme = 'dark' | 'light'

export type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}
