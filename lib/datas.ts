import React from 'react'
import { navItem, socialMedia } from './types'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export const navItems: navItem[] = [
  { name: 'home', route: '/' },
  { name: 'blog', route: '/blog' },
  { name: 'about', route: '/about' }
]

export const socialAccounts: socialMedia[] = [
  { name: 'Github', link: 'https://github.com/2giosangmitom', icon: React.createElement(AiFillGithub) },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/2giosangmitom/', icon: React.createElement(AiFillLinkedin) },
  { name: 'Facebook', link: 'https://www.facebook.com/2giosangmitom/', icon: React.createElement(AiFillFacebook) }
]
