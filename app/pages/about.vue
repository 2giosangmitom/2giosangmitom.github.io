<script setup lang="ts">
useSeoMeta({
  title: 'About'
});

const { data: about } = await useAsyncData('about', () => queryCollection('author').path('/author/about').first());
</script>

<template>
  <main class="about container">
    <ContentRenderer v-if="about" :value="about" class="about__content" />
    <div v-else>There was an error when loading the page.</div>
  </main>
</template>

<style lang="scss">
.about {
  .about__content {
    h2 {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
