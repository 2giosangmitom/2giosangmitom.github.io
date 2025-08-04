<script setup lang="ts">
useSeoMeta({
  title: 'Projects'
});

const { data } = await useAsyncData('projects', () => {
  return queryCollection('projects').first();
});

const featuredProjects = computed(() => {
  return data.value?.projects.filter((project) => project.featured) || [];
});
const otherProjects = computed(() => {
  return data.value?.projects.filter((project) => !project.featured) || [];
});
</script>

<template>
  <div class="space-y-4">
    <!-- Page Title -->
    <header class="text-center space-y-4">
      <h1 class="text-5xl font-extrabold text-primary">My Projects</h1>
      <p class="text-lg text-dimmed">
        A collection of featured and personal projects I've built to sharpen my skills.
      </p>
    </header>

    <section class="space-y-4">
      <h2 class="mt-8 text-2xl font-semibold text-primary">Featured Projects</h2>
      <div v-if="featuredProjects.length > 0">
        <OrganismsProjectCard
          v-for="project in featuredProjects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :images="project.images"
          :git-repo="project.gitRepo"
          :live-demo="project.liveDemo"
          :technologies="project.technologies"
        />
      </div>
      <p v-else class="text-dimmed">I don't have any featured projects yet! They will be coming out soon!</p>
    </section>

    <section v-if="otherProjects.length > 0" class="space-y-4">
      <h2 class="mt-8 text-2xl font-semibold text-primary">Other Projects</h2>
      <p class="text-dimmed mb-6">Smaller experiments and fun builds to explore new ideas.</p>
      <div>
        <OrganismsProjectCard
          v-for="project in otherProjects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :images="project.images"
          :git-repo="project.gitRepo"
          :live-demo="project.liveDemo"
          :technologies="project.technologies"
        />
      </div>
    </section>
  </div>
</template>
