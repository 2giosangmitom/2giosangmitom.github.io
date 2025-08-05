<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  tags: string[];
  createdAt: string;
  path: string;
  variant: 'square' | 'wide';
}>();
</script>

<template>
  <div v-if="variant == 'square'"></div>
  <div v-else>
    <NuxtLink
      class="flex flex-col gap-y-2 outline-1 outline-primary-200/30 py-6 px-8 rounded-lg shadow-md hover:bg-primary-300/10 transition-colors"
      :to="path"
    >
      <h2 class="text-2xl font-semibold text-primary">{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="flex justify-between">
        <NuxtTime class="text-dimmed text-sm" :datetime="createdAt" year="numeric" month="long" day="numeric" />
        <div class="flex gap-x-2">
          <UBadge v-for="tag in tags" :key="tag" variant="soft">{{ tag }}</UBadge>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
