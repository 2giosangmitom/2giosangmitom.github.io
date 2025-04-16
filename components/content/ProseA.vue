<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  href: {
    type: String,
    default: "",
  },
  target: {
    type: String as PropType<
      | "_blank"
      | "_parent"
      | "_self"
      | "_top"
      | (string & object)
      | null
      | undefined
    >,
    default: undefined,
    required: false,
  },
});
</script>

<template>
  <NuxtLink :href="props.href" :target="props.target">
    <slot />
  </NuxtLink>
</template>

<style lang="scss" scoped>
a {
  position: relative;
  color: rgb(var(--color-pink));
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid rgb(var(--color-pink));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
}
</style>
