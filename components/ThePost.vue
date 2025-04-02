<script setup lang="ts">
defineProps<{
  date: Date;
  title: string;
  path: string;
}>();
</script>

<template>
  <div class="grid grid-cols-[120px_20px_1fr]">
    <div class="text-gray-500">
      {{ new Intl.DateTimeFormat("en-ca").format(date) }}
    </div>
    <div class="text-accent">#</div>
    <div>
      <ULink
        raw
        class="hover:text-accent transition-colors after:transition-all relative after:h-0.5 after:absolute after:bottom-0 after:w-0 after:left-0 after:bg-accent hover:after:w-full"
        :to="path"
      >
        {{ title }}
      </ULink>
    </div>
  </div>
</template>
