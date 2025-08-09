<script setup lang="ts">
withDefaults(
  defineProps<{
    href?: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
  }>(),
  {
    href: '',
    target: '_self'
  }
);
</script>

<template>
  <NuxtLink class="prose-a" :href="href" :target="target"><slot /></NuxtLink>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.prose-a {
  color: variables.$color-primary;
  text-decoration: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 1px;
    width: 0;
    background-color: variables.$color-primary;
    transition: width 200ms ease;
    bottom: 0;
  }

  &:hover::before {
    width: 100%;
  }
}
</style>
