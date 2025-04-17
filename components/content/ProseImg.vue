<template>
  <NuxtImg :src="props.src" :alt="props.alt" :width="props.width" :height="props.height" />
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: ""
  },
  alt: {
    type: String,
    default: ""
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  }
});
</script>

<style scoped>
img {
  max-width: 100%;
  margin: 10px 0;
}
</style>
