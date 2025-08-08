<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first();
});

if (page.value) {
  useSeoMeta({
    title: page.value.title,
    description: page.value.description
  });
}
</script>

<template>
  <main class="container blog-details">
    <ContentRenderer v-if="page" :value="page" class="blog-details__content" />
  </main>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.blog-details {
  &__content {
    h1 {
      margin-bottom: 0.5rem;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        height: 2px;
        width: 100%;
        background-color: variables.$color-primary;
      }
    }
    h2,
    h3 {
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
    }
  }
}
</style>
