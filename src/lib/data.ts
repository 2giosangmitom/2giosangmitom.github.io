import { socialLink } from '@/types'
import { createElement } from 'react'
import { BsLinkedin, BsFacebook } from 'react-icons/bs'
import { ImGithub } from 'react-icons/im'

export const links: socialLink[] = [
  {
    url: 'https://www.linkedin.com/in/2giosangmitom/',
    icon: createElement(BsLinkedin)
  },
  {
    url: 'https://github.com/2giosangmitom/',
    icon: createElement(ImGithub)
  },
  {
    url: 'https://www.facebook.com/2giosangmitom/',
    icon: createElement(BsFacebook)
  }
]
