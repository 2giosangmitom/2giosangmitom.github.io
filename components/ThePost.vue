<script setup lang="ts">
defineProps<{
  date: Date;
  title: string;
  path: string;
}>();
</script>

<template>
  <div>
    <span class="text-gray-500">
      {{ new Intl.DateTimeFormat("en-ca").format(date) }}
    </span>
    <span class="text-accent mx-4">#</span>
    <ULink
      raw
      class="hover:text-accent transition-colors after:transition-all relative after:h-0.5 after:absolute after:bottom-0 after:w-0 after:left-0 after:bg-accent hover:after:w-full"
      :to="path"
    >
      {{ title }}
    </ULink>
  </div>
</template>
