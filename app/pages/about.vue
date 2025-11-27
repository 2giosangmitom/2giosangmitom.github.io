<script setup lang="ts">
useSeoMeta({
  title: 'Vo Quang Chien - About',
  description:
    'Learn more about Vo Quang Chien, a passionate software engineer specializing in web development and technology solutions.',
  ogTitle: 'Vo Quang Chien - About',
  ogDescription:
    'Learn more about Vo Quang Chien, a passionate software engineer specializing in web development and technology solutions.'
});

const { data } = await useAsyncData('about', () => queryCollection('about').first());

if (!data.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Internal Server Error',
    message: 'Failed to load about data.'
  });
}
</script>

<template>
  <UContainer as="main" class="flex gap-x-20 justify-between">
    <section class="flex-1">
      <ContentRenderer v-if="data" :value="data.body" />
    </section>
    <section>
      <NuxtImg
        src="/images/hue.jpg"
        width="350"
        alt="Morning view"
        title="Morning view of Hue city, Vietnam"
        class="transition-transform duration-300 rounded shadow-xl rotate-3 hover:rotate-0 hover:scale-105"
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
