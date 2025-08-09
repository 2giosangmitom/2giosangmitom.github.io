<script setup lang="ts">
defineProps<{ id?: string }>();
</script>

<template>
  <h2 :id="`#${id}`" class="prose-h2">
    <a :href="`#${id}`"><slot /></a>
  </h2>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.prose-h2 {
  a {
    color: variables.$color-primary;
    font-size: variables.$font-xl;
    text-decoration: none;

    &::before {
      content: '## ';
    }

    &:hover {
      background-color: variables.$color-primary;
      color: variables.$color-background;
    }
  }
}
</style>
