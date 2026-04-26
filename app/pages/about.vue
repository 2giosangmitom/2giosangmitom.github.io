<script setup lang="ts">
import { motion } from 'motion-v';

useSeoMeta({
  title: 'About - Vo Quang Chien',
  description:
    'Professional background and expertise of Vo Quang Chien, a software engineer specializing in modern web development and scalable application architecture.',
  ogTitle: 'About - Vo Quang Chien',
  ogDescription:
    'Professional background and expertise of Vo Quang Chien, a software engineer specializing in modern web development and scalable application architecture.'
});

const { data } = await useAsyncData('about', () => queryCollection('about').first());
</script>

<template>
  <motion.main
    :initial="{ opacity: 0, y: 18 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.45, ease: 'easeOut' }"
  >
    <UContainer
      as="main"
      class="flex flex-col items-center gap-y-20 lg:flex-row lg:items-start lg:gap-y-0 lg:gap-x-20 lg:justify-between"
    >
      <motion.section
        class="flex-1"
        :initial="{ opacity: 0, y: 24 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true, amount: 0.3 }"
        :transition="{ duration: 0.5, ease: 'easeOut' }"
      >
        <ContentRenderer v-if="data" :value="data.body" />
      </motion.section>
      <motion.section
        :initial="{ opacity: 0, y: 24 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true, amount: 0.35 }"
        :transition="{ duration: 0.5, ease: 'easeOut', delay: 0.06 }"
      >
        <NuxtImg
          src="/images/hue.jpg"
          sizes="70vw sm:50vw lg:350px"
          alt="Morning view"
          title="Morning view of Hue city, Vietnam"
          class="transition-transform duration-300 rounded shadow-xl lg:rotate-3 lg:hover:rotate-0 lg:hover:scale-105"
        />
        <div class="flex flex-col mt-10">
          <motion.div
            :initial="{ opacity: 0, x: -12 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :in-view-options="{ once: true, amount: 0.5 }"
            :transition="{ duration: 0.35, ease: 'easeOut', delay: 0.08 }"
          >
            <UButton icon="lucide:github" to="https://github.com/2giosangmitom" variant="link" color="neutral"
              >Follow me on GitHub</UButton
            >
          </motion.div>
          <motion.div
            :initial="{ opacity: 0, x: -12 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :in-view-options="{ once: true, amount: 0.5 }"
            :transition="{ duration: 0.35, ease: 'easeOut', delay: 0.14 }"
          >
            <UButton
              icon="lucide:linkedin"
              to="https://www.linkedin.com/in/2giosangmitom/"
              variant="link"
              color="neutral"
              >Connect with me on LinkedIn</UButton
            >
          </motion.div>
        </div>
      </motion.section>
    </UContainer>
  </motion.main>
</template>
