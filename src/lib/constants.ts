import Astrojs from '@assets/icons/Astro.svg';
import Vue from '@assets/icons/Vuejs.svg';
import NodeJS from '@assets/icons/Nodejs.svg';
import TypeScript from '@assets/icons/Typescript.svg';
import JavaScript from '@assets/icons/Javascript.svg';
import Fastify from '@assets/icons/Fastify.svg';
import Express from '@assets/icons/Express.svg';
import Prisma from '@assets/icons/Prisma.svg';
import Python from '@assets/icons/Python.svg';
import Nuxt from '@assets/icons/Nuxt.svg';
import Nestjs from '@assets/icons/Nestjs.svg';
import type { SvgComponent } from 'astro/types';

export const techStacks: { name: string; icon: SvgComponent; fill?: string }[] = [
  { name: 'Vue.js', icon: Vue },
  { name: 'Nuxt.js', icon: Nuxt },
  { name: 'Astro', icon: Astrojs },
  { name: 'Node.js', icon: NodeJS },
  { name: 'Fastify', icon: Fastify, fill: 'currentColor' },
  { name: 'Express.js', icon: Express, fill: 'currentColor' },
  { name: 'NestJS', icon: Nestjs },
  { name: 'TypeScript', icon: TypeScript },
  { name: 'JavaScript', icon: JavaScript },
  { name: 'Prisma', icon: Prisma, fill: 'currentColor' },
  { name: 'Python', icon: Python }
] as const;
