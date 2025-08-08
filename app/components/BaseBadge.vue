<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'solid' | 'outline';
  }>(),
  {
    variant: 'solid'
  }
);
</script>

<template>
  <span :class="`base-badge ${variant}`"><slot /></span>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.base-badge {
  border-radius: variables.$rounded-sm;
  padding: 0.3rem 0.4rem;
  font-size: variables.$font-sm;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &.solid {
    color: variables.$color-background;
    background-color: variables.$color-primary;
  }

  &.outline {
    outline: 1px solid variables.$color-primary;
  }
}
</style>
