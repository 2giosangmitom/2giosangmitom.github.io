<template>
  <li class="prose-li"><slot /></li>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.prose-li {
  list-style: none;

  &::before {
    content: '- ';
    color: variables.$color-primary;
  }
}
</style>
