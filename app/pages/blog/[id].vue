<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first();
});
</script>

<template>
  <main class="container blog-details">
    <ContentRenderer v-if="page" :value="page" class="blog-details__content" />
  </main>
</template>

<style lang="scss">
.blog-details {
  &__content {
    h2,
    h3 {
      margin-top: 0.1rem;
      margin-bottom: 0.1rem;
    }
  }
}
</style>
