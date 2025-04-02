<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <h1 class="text-3xl">{{ text }}<span class="text-accent">.</span></h1>
</template>
