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
  color: var(--accent-color);
}
</style>
