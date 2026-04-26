<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui';
import { motion } from 'motion-v';

useSeoMeta({
  title: 'Software Engineer - Vo Quang Chien',
  description:
    'Professional software engineer specializing in modern web development, full-stack solutions, and scalable application architecture.',
  ogTitle: 'Software Engineer - Vo Quang Chien',
  ogDescription:
    'Professional software engineer specializing in modern web development, full-stack solutions, and scalable application architecture.'
});

const techStacks = [
  'logos:nuxt-icon',
  'logos:vue',
  'logos:react',
  'logos:nextjs',
  'logos:nestjs',
  'logos:python',
  'logos:typescript-icon'
];

const questions = [
  {
    icon: 'lucide:coffee',
    label: 'Do you use Arch Linux?',
    content: 'Yes, I use Arch BTW. And yes, I will tell you about it without you asking. 😎'
  },
  {
    icon: 'lucide:flame',
    label: 'Vim or Emacs?',
    content:
      'Vim, obviously! Because who needs a mouse when you have hjkl? Plus, exiting Vim is a valuable life skill. 🚀'
  },
  {
    icon: 'lucide:sparkles',
    label: 'Tabs or Spaces?',
    content: 'Spaces. 2 spaces to be exact. Fight me. (Just kidding, use Prettier and let it handle the drama.) ✨'
  },
  {
    icon: 'lucide:heart',
    label: 'Do you have a girlfriend?',
    content:
      "No, I've never even had a girlfriend 🥹. But hey, at least my code compiles without errors... most of the time."
  }
] satisfies AccordionItem[];

const { data } = await useAsyncData('latest-articles', () => {
  const articles = queryCollection('articles')
    .select('path', 'title', 'pubDate', 'description', 'id', 'tags')
    .order('pubDate', 'DESC');

  if (import.meta.env.PROD) {
    articles.where('draft', '<>', true);
  }

  return articles.limit(3).all();
});
</script>

<template>
  <motion.main
    :initial="{ opacity: 0, y: 20 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.5, ease: 'easeOut' }"
    :in-view-options="{ once: true }"
  >
    <UContainer as="main" class="space-y-36">
      <!-- Introduction -->
      <motion.section
        class="flex flex-col-reverse gap-y-14 lg:flex-row lg:gap-y-0 lg:gap-x-10 xl:gap-x-24"
        :initial="{ opacity: 0, y: 28 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true, amount: 0.3 }"
        :transition="{ duration: 0.55, ease: 'easeOut' }"
      >
        <NuxtImg
          src="/images/avt.png"
          sizes="100vw sm:70vw md:400px"
          alt="Vo Quang Chien"
          class="max-w-full h-auto self-center rounded"
        />

        <div class="space-y-4">
          <h1 class="text-6xl font-bold">Full-Stack <span class="text-primary">Web</span> Engineer.</h1>
          <p class="leading-6">
            I&apos;m Chien, a Software Engineer focused on building robust, scalable web applications. I specialize in
            Vue.js, React, Node.js, and TypeScript, delivering high-quality solutions for complex business challenges.
            I&apos;m passionate about clean code, performance optimization, and staying current with emerging
            technologies including
            <span class="text-primary">AI integration</span> and <span class="text-primary">Web3 development</span>.
          </p>
          <div class="space-x-4">
            <UButton icon="lucide:at-sign" to="/contact">Contact Me</UButton>
            <UButton icon="lucide:pen-tool" variant="outline" to="/articles">Read Articles</UButton>
          </div>
        </div>
      </motion.section>

      <!-- Tech Stacks -->
      <motion.section
        :initial="{ opacity: 0, y: 24 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true, amount: 0.4 }"
        :transition="{ duration: 0.5, ease: 'easeOut', delay: 0.05 }"
      >
        <ClientOnly>
          <UMarquee>
            <UIcon
              v-for="tech in techStacks"
              :key="tech"
              :name="tech"
              class="size-16 shrink-0 fill-current"
              mode="svg"
            />
          </UMarquee>
        </ClientOnly>
      </motion.section>

      <!-- Latest Articles -->
      <motion.section
        :initial="{ opacity: 0, y: 24 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true, amount: 0.25 }"
        :transition="{ duration: 0.5, ease: 'easeOut', delay: 0.1 }"
      >
        <h2 class="text-2xl font-bold text-center">Latest Articles</h2>

        <ArticleList v-if="data" :articles="data" orientation="horizontal" class="mt-12" />
      </motion.section>

      <!-- Never Asked Questions -->
      <motion.section
        :initial="{ opacity: 0, y: 24 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true, amount: 0.2 }"
        :transition="{ duration: 0.5, ease: 'easeOut', delay: 0.12 }"
      >
        <h2 class="text-2xl font-bold text-center mb-12">Never Asked Questions</h2>

        <UAccordion :items="questions" />
      </motion.section>
    </UContainer>
  </motion.main>
</template>
