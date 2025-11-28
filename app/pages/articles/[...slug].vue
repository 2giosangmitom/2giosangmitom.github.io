<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(route.path, () => queryCollection('articles').path(route.path).first());

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
  ogTitle: data.value?.title,
  ogDescription: data.value?.description
});
</script>

<template>
  <UContainer>
    <ContentRenderer v-if="data" :value="data.body" />
  </UContainer>
</template>
