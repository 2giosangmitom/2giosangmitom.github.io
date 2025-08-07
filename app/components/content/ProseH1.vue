<script setup lang="ts">
defineProps<{ id?: string }>();
</script>

<template>
  <h1 :id="`#${id}`" class="prose-h1">
    <a :href="`#${id}`"><slot /></a>
  </h1>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.prose-h1 a {
  color: variables.$color-primary;
  font-size: variables.$font-2xl;
  text-decoration: none;
}
</style>
