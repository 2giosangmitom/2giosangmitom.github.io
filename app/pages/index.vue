<script setup lang="ts">
useSeoMeta({
  title: 'Vo Quang Chien - Software Engineer',
  description:
    'Welcome to the personal website of Vo Quang Chien, a passionate software engineer specializing in web development and technology solutions.',
  ogTitle: 'Vo Quang Chien - Software Engineer',
  ogDescription:
    'Welcome to the personal website of Vo Quang Chien, a passionate software engineer specializing in web development and technology solutions.'
});
</script>

<template>
  <UContainer as="main">
    <!-- Introduction -->
    <section class="flex flex-col-reverse gap-y-14 lg:flex-row lg:gap-y-0 lg:gap-x-10 xl:gap-x-24">
      <NuxtImg
        src="/images/avt.png"
        sizes="100vw sm:70vw md:400px"
        alt="Vo Quang Chien"
        class="max-w-full h-auto self-center rounded"
      />

      <div class="space-y-4">
        <h1 class="text-6xl font-bold">Software Engineer and <span class="text-primary">Vue.js</span> enthusiast.</h1>
        <p class="leading-6">
          I&apos;m Chien, a Software Engineer with a focus on fullstack web development. I love building things with
          Vue.js, Node.js and TypeScript. I enjoy learning new technologies and sharing my knowledge with the community.
          Currently, I&apos;m expanding my abilities in <span class="text-primary">AI applications development</span>,
          and <span class="text-primary">Web3 technology</span>.
        </p>
        <div class="space-x-4">
          <UButton icon="lucide:at-sign" to="/contact">Contact Me</UButton>
          <UButton icon="lucide:pen-tool" variant="outline" to="/articles">Read Articles</UButton>
        </div>
      </div>
    </section>

    <!-- Latest Articles -->
  </UContainer>
</template>
