<template>
  <span class="base-badge"><slot /></span>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.base-badge {
  color: variables.$color-background;
  background-color: variables.$color-primary;
  border-radius: variables.$rounded-sm;
  padding: 0.3rem 0.4rem;
  font-size: variables.$font-sm;
}
</style>
