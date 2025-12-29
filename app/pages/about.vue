<script setup lang="ts">
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
  <UContainer
    as="main"
    class="flex flex-col items-center gap-y-20 lg:flex-row lg:items-start lg:gap-y-0 lg:gap-x-20 lg:justify-between"
  >
    <section class="flex-1">
      <ContentRenderer v-if="data" :value="data.body" />
    </section>
    <section>
      <NuxtImg
        src="/images/hue.jpg"
        sizes="70vw sm:50vw lg:350px"
        alt="Morning view"
        title="Morning view of Hue city, Vietnam"
        class="transition-transform duration-300 rounded shadow-xl lg:rotate-3 lg:hover:rotate-0 lg:hover:scale-105"
      />
      <div class="flex flex-col mt-10">
        <UButton icon="lucide:github" to="https://github.com/2giosangmitom" variant="link" color="neutral"
          >Follow me on GitHub</UButton
        >
        <UButton icon="lucide:linkedin" to="https://www.linkedin.com/in/2giosangmitom/" variant="link" color="neutral"
          >Connect with me on LinkedIn</UButton
        >
      </div>
    </section>
  </UContainer>
</template>
