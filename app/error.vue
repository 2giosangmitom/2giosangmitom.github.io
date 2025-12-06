<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{
  error: NuxtError;
}>();

useSeoMeta({
  title: props.error.message
});
</script>

<template>
  <UApp>
    <UError :error="error" />
  </UApp>
</template>
