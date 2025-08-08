<script setup lang="ts">
withDefaults(
  defineProps<{
    src?: string;
    alt?: string;
    width?: string | number;
    height?: string | number;
  }>(),
  {
    src: '',
    alt: '',
    width: undefined,
    height: undefined
  }
);
</script>

<template>
  <NuxtImg :src="src" :alt="alt" :width="width" :height="height" class="prose-img" />
</template>

<style lang="scss">
.prose-img {
  width: 100%;
  margin: 0.5rem 0;
}
</style>
