<script setup lang="ts">
useSeoMeta({
  titleTemplate: 'Vo Quang Chien'
});
</script>

<template>
  <div class="space-y-32">
    <!-- Hero Section  -->
    <section class="flex gap-x-20">
      <NuxtImg
        format="webp"
        quality="100"
        :placeholder="350"
        width="350"
        height="350"
        src="/images/avt.png"
        alt="Avatar"
        class="rounded-sm"
      />

      <div class="flex flex-col gap-y-4">
        <div>
          <UBadge size="md">Full stack developer</UBadge>
          <h1 class="text-7xl font-bold">Yo! I'm <span class="text-primary">Vo Quang Chien</span>.</h1>
        </div>
        <p>
          I enjoy developing projects that both functionally sound and artistic. Currently, I'm interesting in full
          stack development, seeking to improve my skills to provide as much as possible value.
        </p>
        <div class="space-x-4">
          <UButton icon="lucide:arrow-up-right" to="/contact">Contact Me</UButton>
          <UButton icon="lucide:code-xml" variant="outline" to="/projects">My Projects</UButton>
        </div>
      </div>
    </section>

    <section class="flex flex-col items-center space-y-12">
      <h2 class="text-3xl font-bold text-primary text-center">Technologies I use</h2>
      <p class="text-center max-w-2xl">
        Here are some programming languages, frameworks, and productivity tools that I use. I'm fully equipped to tackle
        complex software development challenges, crafting innovate solutions that drive business forward.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 place-items-center">
        <AtomsIconsFastify />
        <AtomsIconsExpress />
        <AtomsIconsVuejs />
        <AtomsIconsNuxt />
        <AtomsIconsNode />
        <AtomsIconsMysql />
        <AtomsIconsPostgres />
        <AtomsIconsRedis />
        <AtomsIconsTailwind />
        <AtomsIconsDocker />
        <AtomsIconsCpp />
        <AtomsIconsTypescript />
        <AtomsIconsJavascript />
        <AtomsIconsPython />
      </div>
    </section>

    <section>
      <h2 class="text-3xl font-bold text-primary text-center">Latest Posts</h2>
      <!-- TODO: Implement latest posts section -->
    </section>
  </div>
</template>
