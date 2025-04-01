<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <h1>{{ text }}<span class="dot">.</span></h1>
</template>

<style scoped>
.dot {
  font-size: 1.2em;
  color: var(--accent-color);
}
</style>
