<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  images?: string[];
  gitRepo?: string;
  liveDemo?: string;
  technologies: string[];
}>();
</script>

<template>
  <div class="flex flex-col gap-y-6 md:flex-row md:gap-x-6 md:justify-between">
    <div class="space-y-4">
      <h2 class="text-lg font-semibold">{{ title }}</h2>
      <div class="space-x-2">
        <UBadge v-for="tech in technologies" :key="tech" class="rounded-full" variant="soft">{{ tech }}</UBadge>
      </div>
      <p class="text-base">{{ description }}</p>
      <div class="space-x-4">
        <UButton v-if="gitRepo" :to="gitRepo" target="_blank" variant="soft" icon="lucide:github">GitHub</UButton>
        <UButton v-if="liveDemo" :to="liveDemo" target="_blank" variant="soft" icon="lucide:external-link">
          Live Demo
        </UButton>
      </div>
    </div>

    <OrganismsStackedCarousel v-if="images" :items="images" />
  </div>
</template>
