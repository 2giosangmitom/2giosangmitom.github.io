<script setup lang="ts">
const props = defineProps<{ id?: string }>();
</script>

<template>
  <h3 :id="props.id" class="markdown-heading">
    <NuxtLink :to="`#${props.id}`" class="markdown-heading__link">
      <slot />
    </NuxtLink>
  </h3>
</template>

<style scoped lang="scss">
.markdown-heading {
  font-size: $text-md2;
  font-family: $font-sans;
  color: var(--text-color);
  scroll-margin-top: 5rem;
  margin: 10px 0;

  &::before {
    content: "###";
    font-family: $font-mono;
    margin-right: 0.5rem;
    color: rgb(var(--color-mauve));
  }

  &__link {
    color: var(--text-color);
    text-decoration: none;
    transition:
      color 0.4s ease,
      background-color 0.4s ease;

    &:hover {
      color: var(--color-mantle);
      background-color: rgb(var(--color-mauve));
    }
  }
}
</style>
