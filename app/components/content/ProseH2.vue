<script setup lang="ts">
defineProps<{ id?: string }>();
</script>

<template>
  <h2 :id="id" class="text-xl font-medium">
    <NuxtLink
      :to="`#${id}`"
      class="before:content-['##'] before:text-primary before:mr-2 hover:bg-secondary/30 p-0.5 transition-colors rounded-sm"
    >
      <slot />
    </NuxtLink>
  </h2>
</template>
