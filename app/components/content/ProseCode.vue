<template>
  <code class="prose-code"><slot /></code>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.prose-code {
  background-color: color-mix(in hsl, variables.$color-dimmed, transparent 70%);
  padding: 0.02rem;
  border-radius: variables.$rounded-sm;
}
</style>
